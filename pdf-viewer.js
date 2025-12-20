// ================== 1. التعريفات والعناصر الأساسية ==================
const fileInput = document.getElementById('file-input');
const startContainer = document.getElementById('start-container');
const mainLayout = document.getElementById('main-layout');

const pdfCanvas = document.getElementById('pdf-canvas');
const drawCanvas = document.getElementById('drawing-canvas');
const textLayer = document.getElementById('text-layer');
const pdfContainer = document.getElementById('pdf-canvas-container');

const ctx = pdfCanvas.getContext('2d');
const drawCtx = drawCanvas.getContext('2d');

// عناصر الـ UI والـ Popups
const selectionPopup = document.getElementById('selection-popup');
const explainPopup = document.getElementById('ai-explain-popup');
const explainContent = document.getElementById('ai-explain-content');
const aiResults = document.getElementById('ai-results-area');

// الأزرار
const btnQuiz = document.getElementById('btn-quiz');
const btnFlashcards = document.getElementById('btn-flashcards');
const btnMindmap = document.getElementById('btn-mindmap');
const btnAskAi = document.getElementById('ask-ai-btn');
const btnPen = document.getElementById('pen-btn');
const btnErase = document.getElementById('erase-btn');
const btnSelect = document.getElementById('select-btn');
const btnClear = document.getElementById('clear-drawings-btn');

// متغيرات الحالة (State)
let pdfDoc = null;
let pageNum = 1;
let scale = 1.4;
let currentTool = 'select';
let isDrawing = false;
let renderTask = null; // متغير مهم لمنع تداخل رسم الصفحات
let currentPath = [];
// استرجاع الرسومات المحفوظة أو البدء بجديد
let drawings = JSON.parse(localStorage.getItem('pdfDrawings')) || {};

const USER_TOKEN = localStorage.getItem('userToken');

// إعداد مكتبة PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// ================== 2. تحميل الملف (Load PDF) ==================
fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // تبديل الواجهة
    startContainer.style.display = 'none';
    mainLayout.style.display = 'flex';

    const url = URL.createObjectURL(file);
    loadPdf(url);
};

async function loadPdf(url) {
    try {
        const doc = await pdfjsLib.getDocument(url).promise;
        pdfDoc = doc;
        pageNum = 1;
        updatePageCounters();
        renderPage();
    } catch (err) {
        console.error('PDF Load Error:', err);
        alert('حدث خطأ أثناء قراءة ملف الـ PDF');
    }
}

// ================== 3. عرض الصفحة (Render Page) ==================
async function renderPage() {
    if (!pdfDoc) return;

    // [تحسين] إلغاء أي عملية رسم سابقة إذا كانت قيد التنفيذ (لمنع الوميض وتداخل الصفحات)
    if (renderTask) {
        await renderTask.cancel();
    }

    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale });

    // ضبط أبعاد الكانفاس
    pdfCanvas.width = drawCanvas.width = viewport.width;
    pdfCanvas.height = drawCanvas.height = viewport.height;

    // ضبط أبعاد طبقة النصوص
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;

    // رسم صفحة الـ PDF
    const renderContext = {
        canvasContext: ctx,
        viewport: viewport
    };

    renderTask = page.render(renderContext);

    try {
        await renderTask.promise;

        // بعد انتهاء رسم الـ PDF، نرسم طبقة النصوص (للتحديد)
        const textContent = await page.getTextContent();
        textLayer.innerHTML = '';
        pdfjsLib.renderTextLayer({
            textContent,
            container: textLayer,
            viewport,
            textDivs: []
        });

        // إعادة رسم خطوط القلم المحفوظة لهذه الصفحة
        redrawStoredPaths();
        updatePageCounters();

    } catch (error) {
        // تجاهل أخطاء الإلغاء (طبيعية عند التقليب السريع)
        if (error.name !== 'RenderingCancelledException') {
            console.error('Render Error:', error);
        }
    }
}

// أزرار التنقل بين الصفحات
document.getElementById('prev-page').onclick = () => {
    if (pageNum <= 1) return;
    pageNum--;
    renderPage();
};

document.getElementById('next-page').onclick = () => {
    if (!pdfDoc || pageNum >= pdfDoc.numPages) return;
    pageNum++;
    renderPage();
};

function updatePageCounters() {
    document.getElementById('page-num').textContent = pageNum;
    document.getElementById('page-count').textContent = pdfDoc ? pdfDoc.numPages : 0;
}

// ================== 4. أدوات الرسم (Optimized Drawing) ==================
// التبديل بين الأدوات
btnPen.onclick = () => setTool('pen');
btnSelect.onclick = () => setTool('select');
btnErase.onclick = () => setTool('erase'); // هذا للممحاة كأداة
btnClear.onclick = () => { // هذا لمسح الصفحة كاملة
    if (confirm('هل تريد مسح كل الرسومات في هذه الصفحة؟')) {
        drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        drawings[pageNum] = [];
        saveDrawings();
    }
};

function setTool(tool) {
    currentTool = tool;
    // تفعيل التفاعل مع كانفاس الرسم فقط عند اختيار القلم
    drawCanvas.style.pointerEvents = tool === 'pen' ? 'auto' : 'none';

    // تغيير شكل الماوس
    pdfContainer.style.cursor = tool === 'pen' ? 'crosshair' : 'default';

    // تحديث الأزرار النشطة (Visual Feedback)
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    if (tool === 'pen') btnPen.classList.add('active');
    if (tool === 'select') btnSelect.classList.add('active');
    if (tool === 'erase') btnErase.classList.add('active');
}

// أحداث الماوس للرسم
drawCanvas.onmousedown = (e) => {
    if (currentTool !== 'pen') return;
    isDrawing = true;
    const pos = getMousePos(e);
    currentPath = [pos]; // بدء مسار جديد

    drawCtx.beginPath();
    drawCtx.moveTo(pos.x, pos.y);
    // إعدادات الفرشاة (قلم هايلايتر)
    drawCtx.strokeStyle = 'rgba(255, 255, 0, 0.5)';
    drawCtx.lineWidth = 15;
    drawCtx.lineCap = 'round';
    drawCtx.lineJoin = 'round';
};

drawCanvas.onmousemove = (e) => {
    if (!isDrawing) return;
    const pos = getMousePos(e);
    currentPath.push(pos);

    // [تحسين] الرسم مباشرة للنقطة الجديدة بدلاً من إعادة رسم كل شيء (أسرع بكثير)
    drawCtx.lineTo(pos.x, pos.y);
    drawCtx.stroke();
};

drawCanvas.onmouseup = () => {
    if (!isDrawing) return;
    isDrawing = false;

    // حفظ المسار المكتمل في الذاكرة
    if (!drawings[pageNum]) drawings[pageNum] = [];
    drawings[pageNum].push([...currentPath]);

    saveDrawings(); // حفظ في LocalStorage
    currentPath = [];
};

// دالة لإعادة رسم كل الخطوط عند تغيير الصفحة
function redrawStoredPaths() {
    drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    const paths = drawings[pageNum] || [];

    paths.forEach(path => {
        if (path.length < 1) return;
        drawCtx.beginPath();
        drawCtx.strokeStyle = 'rgba(255, 255, 0, 0.5)';
        drawCtx.lineWidth = 15;
        drawCtx.lineCap = 'round';
        drawCtx.lineJoin = 'round';

        drawCtx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
            drawCtx.lineTo(path[i].x, path[i].y);
        }
        drawCtx.stroke();
    });
}

function getMousePos(evt) {
    const rect = drawCanvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function saveDrawings() {
    localStorage.setItem('pdfDrawings', JSON.stringify(drawings));
}

// ================== 5. تحديد النصوص (Text Selection) ==================
pdfContainer.addEventListener('mouseup', (e) => {
    if (currentTool !== 'select') return;

    // تأخير بسيط للتأكد من أن المتصفح أكمل التحديد
    setTimeout(() => {
        const text = window.getSelection().toString().trim();
        if (text.length > 0) {
            selectionPopup.style.display = 'flex'; // استخدام flex لترتيب الأزرار
            // وضع البوب أب فوق الماوس قليلاً
            selectionPopup.style.left = `${e.clientX}px`;
            selectionPopup.style.top = `${e.clientY - 50}px`;
            selectionPopup.dataset.text = text;
        } else {
            selectionPopup.style.display = 'none';
        }
    }, 10);
});

// إخفاء البوب أب عند الضغط في أي مكان آخر
document.addEventListener('mousedown', (e) => {
    if (!selectionPopup.contains(e.target) && e.target !== pdfContainer) {
        selectionPopup.style.display = 'none';
    }
});

// ================== 6. الذكاء الاصطناعي (AI Tools) ==================

// دوال مساعدة لاستخراج النص
async function getPageText() {
    const page = await pdfDoc.getPage(pageNum);
    const content = await page.getTextContent();
    return content.items.map(i => i.str).join(' ');
}

async function isScannedPDF() {
    const page = await pdfDoc.getPage(1);
    const content = await page.getTextContent();
    // إذا كان عدد الكلمات قليل جداً، فهو غالباً صورة (Scanned)
    return content.items.length < 5;
}

// دالة الاتصال بالسيرفر
async function callAI(endpoint, body) {
    if (!USER_TOKEN) {
        alert("يرجى تسجيل الدخول أولاً لاستخدام ميزات الذكاء الاصطناعي.");
        throw new Error("No token");
    }

    try {
        const res = await fetch(`/api/ai/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${USER_TOKEN}`
            },
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            const errText = await res.text();
            throw new Error(`Server Error: ${res.status} - ${errText}`);
        }
        return await res.json();
    } catch (error) {
        console.error("AI Error:", error);
        throw error;
    }
}

// --- زر الشرح (Explain) ---
btnAskAi.onclick = async () => {
    selectionPopup.style.display = 'none';
    const selectedText = selectionPopup.dataset.text;

    if (await isScannedPDF()) {
        showExplainModal("⚠️ هذا الملف عبارة عن صور (Scanned). الذكاء الاصطناعي لا يمكنه قراءة الصور حالياً.");
        return;
    }

    const textToProcess = selectedText || await getPageText();

    showExplainModal("Thinking... 🤖 <br> جاري تحليل النص...");

    try {
        const res = await callAI('ask', {
            question: `Explain this concept simply for a dental student:\n${textToProcess}`
        });
        showExplainModal(res.answer);
    } catch (e) {
        showExplainModal("❌ حدث خطأ أثناء الاتصال بالذكاء الاصطناعي. تأكد من اتصالك بالإنترنت.");
    }
};

function showExplainModal(html) {
    explainContent.innerHTML = html;
    explainPopup.style.display = 'block';
    // إظهار الخلفية المظللة
    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) backdrop.style.display = 'block';
}

// --- زر الترجمة (Translate) ---
const btnTranslate = document.getElementById('translate-btn');
if (btnTranslate) {
    btnTranslate.onclick = async () => {
        selectionPopup.style.display = 'none';
        const text = selectionPopup.dataset.text;
        showExplainModal("Translating... 📖");
        try {
            const res = await callAI('ask', {
                question: `Translate this to Arabic:\n${text}`
            });
            showExplainModal(res.answer);
        } catch (e) {
            showExplainModal("❌ فشل في الترجمة.");
        }
    };
}

// --- زر الكويز (Quiz) ---
btnQuiz.onclick = async () => {
    aiResults.innerHTML = '<div style="text-align:center; padding:20px; color:#666;">⏳ Generating Quiz...<br>جاري إعداد الأسئلة...</div>';

    try {
        const text = await getPageText();
        if (text.length < 50) {
            aiResults.innerHTML = '<div style="padding:10px; color:orange;">⚠️ النص في هذه الصفحة قليل جداً لإنشاء كويز.</div>';
            return;
        }

        const res = await callAI('generate-quiz-text', { text, count: 5 });

        aiResults.innerHTML = '';
        if (!res.questions || res.questions.length === 0) throw new Error("No questions");

        res.questions.forEach((q, idx) => {
            const card = document.createElement('div');
            card.className = 'note-card'; // نستخدم كلاس CSS الموجود
            card.innerHTML = `<h4 style="margin-bottom:10px;">Q${idx + 1}: ${q.question}</h4>`;

            q.options.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.textContent = opt;
                btn.style.cssText = "display:block; width:100%; padding:8px; margin:5px 0; border:1px solid #ddd; background:#fff; cursor:pointer; border-radius:5px; text-align:left;";

                btn.onclick = () => {
                    const isCorrect = i === q.correctOptionIndexes[0];
                    btn.style.background = isCorrect ? '#d1fae5' : '#fee2e2'; // أخضر فاتح أو أحمر فاتح
                    btn.style.borderColor = isCorrect ? '#10b981' : '#ef4444';

                    // إظهار الشرح
                    const expDiv = document.createElement('div');
                    expDiv.innerHTML = `<p style="margin-top:10px; font-size:0.9em; color:#555;">${isCorrect ? '✅ ممتاز!' : '❌ إجابة خاطئة'} <br> <b>الشرح:</b> ${q.explanation || ''}</p>`;
                    card.appendChild(expDiv);

                    // تعطيل الأزرار لمنع تغيير الإجابة
                    card.querySelectorAll('button').forEach(b => b.disabled = true);
                };
                card.appendChild(btn);
            });
            aiResults.appendChild(card);
        });
    } catch (e) {
        aiResults.innerHTML = `<div style="color:red; padding:10px;">❌ Error: ${e.message}</div>`;
    }
};

// --- زر الفلاش كاردز (Flashcards) ---
btnFlashcards.onclick = async () => {
    aiResults.innerHTML = '<div style="text-align:center; padding:20px; color:#666;">⏳ Creating Flashcards...</div>';

    try {
        const text = await getPageText();
        const res = await callAI('generate-flashcards-text', { text, count: 6 });

        aiResults.innerHTML = '';
        res.flashcards.forEach(fc => {
            const card = document.createElement('div');
            card.className = 'note-card';
            card.style.cursor = 'pointer';

            // الوجه الأمامي
            card.innerHTML = `<div class="front"><b>Q:</b> ${fc.front}</div>`;

            // عند النقر نقلب البطاقة
            card.onclick = () => {
                if (card.querySelector('.back')) {
                    card.innerHTML = `<div class="front"><b>Q:</b> ${fc.front}</div>`;
                    card.style.borderLeftColor = '#2563eb';
                } else {
                    card.innerHTML = `<div class="back" style="color:#2563eb;"><b>A:</b> ${fc.back}</div>`;
                    card.style.borderLeftColor = '#f59e0b'; // لون مختلف للظهر
                }
            };
            aiResults.appendChild(card);
        });
    } catch (e) {
        aiResults.innerHTML = `<div style="color:red; padding:10px;">❌ Error: ${e.message}</div>`;
    }
};

// --- زر الخريطة الذهنية (Mind Map) ---
btnMindmap.onclick = async () => {
    aiResults.innerHTML = '<div style="text-align:center; padding:20px; color:#666;">⏳ Structuring Mind Map...</div>';

    try {
        const text = await getPageText();
        const res = await callAI('generate-mindmap-text', { text });

        aiResults.innerHTML = `
            <div class="note-card" style="border-left-color: #8b5cf6;">
                <h4>Mind Map Structure (Markdown)</h4>
                <pre style="background:#f1f5f9; padding:10px; border-radius:5px; overflow-x:auto;">${res.markdown}</pre>
                <small style="color:#64748b;">انسخ هذا النص وضعه في أي عارض Markmap.</small>
            </div>
        `;
    } catch (e) {
        aiResults.innerHTML = `<div style="color:red; padding:10px;">❌ Error: ${e.message}</div>`;
    }
};

//
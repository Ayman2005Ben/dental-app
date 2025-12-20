// ============================================================
//  ملف: pdf-viewer.js
//  الوصف: المشغل الرئيسي لعارض PDF مع أدوات الرسم والذكاء الاصطناعي
// ============================================================

// --- 1. التعريفات والعناصر (DOM Elements) ---
const DOM = {
    // حاويات الشاشة
    startContainer: document.getElementById('start-container'),
    mainLayout: document.getElementById('main-layout'),
    fileInput: document.getElementById('file-input'),

    // منطقة العرض
    viewerSection: document.getElementById('viewer-section'),
    container: document.getElementById('pdf-canvas-container'),
    layersWrapper: document.getElementById('pdf-layers-wrapper'),
    pdfCanvas: document.getElementById('pdf-canvas'),
    drawCanvas: document.getElementById('drawing-canvas'),
    textLayer: document.getElementById('text-layer'),

    // أزرار التحكم في الصفحة
    pageNum: document.getElementById('page-num'),
    pageCount: document.getElementById('page-count'),
    prevPageBtn: document.getElementById('prev-page'),
    nextPageBtn: document.getElementById('next-page'),
    saveCloudBtn: document.getElementById('save-cloud-btn'),

    // أدوات الرسم
    btnSelect: document.getElementById('select-btn'),
    btnPen: document.getElementById('pen-btn'),
    btnErase: document.getElementById('erase-btn'),
    btnClear: document.getElementById('clear-drawings-btn'),
    colorPicker: document.getElementById('color-picker'),

    // الشريط الجانبي والذكاء الاصطناعي
    aiResults: document.getElementById('ai-results-area'),
    flashcardsContainer: document.getElementById('flashcards-container'),
    btnQuiz: document.getElementById('btn-quiz'),
    btnFlashcards: document.getElementById('btn-flashcards'),
    btnMindmap: document.getElementById('btn-mindmap'),

    // القوائم المنبثقة
    selectionPopup: document.getElementById('selection-popup'),
    btnAskAi: document.getElementById('ask-ai-btn'),
    btnTranslate: document.getElementById('translate-btn'),
    btnCreateNote: document.getElementById('create-flashcard-btn'),

    // نوافذ الشرح
    explainPopup: document.getElementById('ai-explain-popup'),
    explainContent: document.getElementById('ai-explain-content'),
    backdrop: document.getElementById('modal-backdrop')
};

// سياقات الرسم
const ctx = DOM.pdfCanvas.getContext('2d');
const drawCtx = DOM.drawCanvas.getContext('2d');

// --- 2. متغيرات الحالة (Global State) ---
const STATE = {
    pdfDoc: null,
    pageNum: 1,
    scale: 1.5,
    renderTask: null, // مهم جداً لمنع تداخل الرسم
    isRendering: false,
    currentFileId: null,

    // أدوات الرسم
    tool: 'select', // 'select', 'pen', 'erase'
    isDrawing: false,
    drawings: JSON.parse(localStorage.getItem('pdfDrawings')) || {}, // { pageNum: [paths] }
    currentPath: [],
    penColor: '#FFFF00', // لون الهايلايتر الافتراضي
    penSize: 15,

    // بيانات الملاحظات
    flashcards: {} // { pageNum: [cards] }
};

const USER_TOKEN = localStorage.getItem('userToken');
const API_BASE = '/api/progress';

// إعداد مكتبة PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';


// ============================================================
//  3. تحميل وفتح الملف (File Loading)
// ============================================================

DOM.fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
        // توليد معرف فريد للملف
        STATE.currentFileId = `local_${file.name.replace(/\s/g, '_')}_${file.size}`;

        // إظهار الواجهة الرئيسية
        DOM.startContainer.style.display = 'none';
        DOM.mainLayout.style.display = 'flex';

        const fileURL = URL.createObjectURL(file);
        loadPdf(fileURL);
    } else {
        alert('Please select a valid PDF file.');
    }
});

async function loadPdf(url) {
    try {
        const loadingTask = pdfjsLib.getDocument(url);
        STATE.pdfDoc = await loadingTask.promise;

        DOM.pageCount.textContent = STATE.pdfDoc.numPages;

        // محاولة تحميل البيانات المحفوظة من السيرفر
        await loadProgressFromCloud(STATE.currentFileId);

        // عرض الصفحة الأولى
        STATE.pageNum = 1;
        renderPage();
    } catch (err) {
        console.error('PDF Load Error:', err);
        alert('Error loading PDF. Check console for details.');
    }
}


// ============================================================
//  4. عرض الصفحة (Rendering Engine)
// ============================================================

async function renderPage() {
    if (!STATE.pdfDoc) return;

    STATE.isRendering = true;

    // 1. إلغاء أي عملية رسم سابقة لمنع التداخل
    if (STATE.renderTask) {
        await STATE.renderTask.cancel();
    }

    // 2. تجهيز الصفحة
    const page = await STATE.pdfDoc.getPage(STATE.pageNum);
    const viewport = page.getViewport({ scale: STATE.scale });

    // 3. ضبط أبعاد الكانفاس لتطابق الصفحة بدقة
    DOM.pdfCanvas.width = DOM.drawCanvas.width = viewport.width;
    DOM.pdfCanvas.height = DOM.drawCanvas.height = viewport.height;

    DOM.textLayer.style.width = `${viewport.width}px`;
    DOM.textLayer.style.height = `${viewport.height}px`;

    // تحديث العدادات
    DOM.pageNum.textContent = STATE.pageNum;

    // 4. رسم محتوى PDF
    const renderContext = {
        canvasContext: ctx,
        viewport: viewport
    };

    STATE.renderTask = page.render(renderContext);

    try {
        await STATE.renderTask.promise;

        // 5. رسم طبقة النصوص (للتحديد)
        const textContent = await page.getTextContent();
        DOM.textLayer.innerHTML = '';
        pdfjsLib.renderTextLayer({
            textContent: textContent,
            container: DOM.textLayer,
            viewport: viewport,
            textDivs: []
        });

        // 6. استعادة الرسومات والملاحظات لهذه الصفحة
        redrawDrawings();
        updateSidebarNotes();

        STATE.isRendering = false;

    } catch (error) {
        // تجاهل أخطاء الإلغاء (طبيعية عند التقليب السريع)
        if (error.name !== 'RenderingCancelledException') {
            console.error('Render Error:', error);
        }
        STATE.isRendering = false;
    }
}

// أزرار التنقل
DOM.prevPageBtn.addEventListener('click', () => {
    if (STATE.pageNum <= 1) return;
    STATE.pageNum--;
    renderPage();
});

DOM.nextPageBtn.addEventListener('click', () => {
    if (!STATE.pdfDoc || STATE.pageNum >= STATE.pdfDoc.numPages) return;
    STATE.pageNum++;
    renderPage();
});


// ============================================================
//  5. نظام الرسم المتقدم (Drawing System)
// ============================================================

// تبديل الأدوات
function setTool(toolName) {
    STATE.tool = toolName;

    // تفعيل التفاعل مع الرسم فقط للقلم والممحاة
    const isDrawingTool = (toolName === 'pen' || toolName === 'erase');
    DOM.drawCanvas.style.pointerEvents = isDrawingTool ? 'auto' : 'none';
    DOM.container.style.cursor = isDrawingTool ? 'crosshair' : 'default';

    // تحديث الأزرار النشطة
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    if (toolName === 'select') DOM.btnSelect.classList.add('active');
    if (toolName === 'pen') DOM.btnPen.classList.add('active');
    if (toolName === 'erase') DOM.btnErase.classList.add('active');
}

DOM.btnSelect.onclick = () => setTool('select');
DOM.btnPen.onclick = () => setTool('pen');
DOM.btnErase.onclick = () => setTool('erase');

// تغيير اللون
DOM.colorPicker.addEventListener('change', (e) => {
    STATE.penColor = e.target.value;
});

// مسح الصفحة
DOM.btnClear.onclick = () => {
    if (confirm('Are you sure you want to clear all drawings on this page?')) {
        STATE.drawings[STATE.pageNum] = [];
        redrawDrawings();
        saveLocalData();
    }
};

// --- أحداث الرسم (ماوس + لمس) ---
function getPointerPos(e) {
    const rect = DOM.drawCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
}

function startDrawing(e) {
    if (STATE.tool === 'select') return;
    if (e.type === 'touchstart') e.preventDefault(); // منع التمرير في الموبايل

    STATE.isDrawing = true;
    const pos = getPointerPos(e);
    STATE.currentPath = [pos];

    drawCtx.beginPath();
    drawCtx.moveTo(pos.x, pos.y);

    // إعدادات الفرشاة
    if (STATE.tool === 'pen') {
        drawCtx.strokeStyle = hexToRGBA(STATE.penColor, 0.5); // شفافية للهايلايتر
        drawCtx.lineWidth = STATE.penSize;
        drawCtx.globalCompositeOperation = 'source-over';
    } else if (STATE.tool === 'erase') {
        drawCtx.lineWidth = 30;
        drawCtx.globalCompositeOperation = 'destination-out'; // وضع المسح
    }

    drawCtx.lineCap = 'round';
    drawCtx.lineJoin = 'round';
}

function draw(e) {
    if (!STATE.isDrawing) return;
    if (e.type === 'touchmove') e.preventDefault();

    const pos = getPointerPos(e);
    STATE.currentPath.push(pos);

    drawCtx.lineTo(pos.x, pos.y);
    drawCtx.stroke();
}

function stopDrawing() {
    if (!STATE.isDrawing) return;
    STATE.isDrawing = false;

    // حفظ المسار في الذاكرة
    if (!STATE.drawings[STATE.pageNum]) STATE.drawings[STATE.pageNum] = [];

    STATE.drawings[STATE.pageNum].push({
        points: [...STATE.currentPath],
        tool: STATE.tool,
        color: STATE.penColor
    });

    drawCtx.globalCompositeOperation = 'source-over'; // إعادة الوضع الطبيعي
    saveLocalData();
}

// ربط الأحداث
DOM.drawCanvas.addEventListener('mousedown', startDrawing);
DOM.drawCanvas.addEventListener('mousemove', draw);
DOM.drawCanvas.addEventListener('mouseup', stopDrawing);
DOM.drawCanvas.addEventListener('mouseout', stopDrawing);

// دعم اللمس (للموبايل والتابلت)
DOM.drawCanvas.addEventListener('touchstart', startDrawing, { passive: false });
DOM.drawCanvas.addEventListener('touchmove', draw, { passive: false });
DOM.drawCanvas.addEventListener('touchend', stopDrawing);

// دالة إعادة رسم كل شيء
function redrawDrawings() {
    drawCtx.clearRect(0, 0, DOM.drawCanvas.width, DOM.drawCanvas.height);
    const paths = STATE.drawings[STATE.pageNum] || [];

    paths.forEach(pathData => {
        drawCtx.beginPath();

        if (pathData.tool === 'erase') {
            drawCtx.globalCompositeOperation = 'destination-out';
            drawCtx.lineWidth = 30;
        } else {
            drawCtx.globalCompositeOperation = 'source-over';
            drawCtx.strokeStyle = hexToRGBA(pathData.color || '#FFFF00', 0.5);
            drawCtx.lineWidth = 15;
        }

        drawCtx.lineCap = 'round';
        drawCtx.lineJoin = 'round';

        const points = pathData.points;
        if (points.length > 0) {
            drawCtx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
                drawCtx.lineTo(points[i].x, points[i].y);
            }
            drawCtx.stroke();
        }
    });

    // تأكد من إعادة الوضع الطبيعي
    drawCtx.globalCompositeOperation = 'source-over';
}

// دالة مساعدة لتحويل الألوان
function hexToRGBA(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


// ============================================================
//  6. التحديد والنصوص والملاحظات (Selection & Notes)
// ============================================================

DOM.container.addEventListener('mouseup', handleSelection);

function handleSelection(e) {
    if (STATE.tool !== 'select') return;

    // تأخير بسيط للتأكد من اكتمال التحديد
    setTimeout(() => {
        const text = window.getSelection().toString().trim();
        if (text.length > 0) {
            DOM.selectionPopup.style.display = 'flex';
            // وضع القائمة فوق الماوس
            DOM.selectionPopup.style.left = `${e.clientX}px`;
            DOM.selectionPopup.style.top = `${e.clientY - 60}px`;
            DOM.selectionPopup.dataset.text = text;
        } else {
            DOM.selectionPopup.style.display = 'none';
        }
    }, 10);
}

// إضافة ملاحظة يدوية
DOM.btnCreateNote.onclick = () => {
    const text = DOM.selectionPopup.dataset.text;
    const note = prompt("Enter your note:");
    if (note) {
        if (!STATE.flashcards[STATE.pageNum]) STATE.flashcards[STATE.pageNum] = [];
        STATE.flashcards[STATE.pageNum].push({ front: text, back: note });

        updateSidebarNotes();
        saveLocalData();
        DOM.selectionPopup.style.display = 'none';
    }
};

function updateSidebarNotes() {
    DOM.flashcardsContainer.innerHTML = '';
    const cards = STATE.flashcards[STATE.pageNum] || [];

    if (cards.length === 0) {
        DOM.flashcardsContainer.innerHTML = `
            <div class="empty-state">
                <i class="far fa-sticky-note"></i>
                <p>No notes for this page.</p>
            </div>`;
        return;
    }

    cards.forEach(card => {
        const div = document.createElement('div');
        div.className = 'note-card';
        div.innerHTML = `<h4>${card.front.substring(0, 50)}...</h4><p>${card.back}</p>`;
        DOM.flashcardsContainer.appendChild(div);
    });
}


// ============================================================
//  7. أدوات الذكاء الاصطناعي (AI Tools Integration)
// ============================================================

async function callAiApi(endpoint, body) {
    if (!USER_TOKEN) {
        alert("Please login first to use AI features.");
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
            throw new Error(`Server Error (${res.status}): ${errText.substring(0, 100)}`);
        }

        return await res.json();
    } catch (err) {
        console.error("AI API Error:", err);
        throw err;
    }
}

async function getPageText() {
    const page = await STATE.pdfDoc.getPage(STATE.pageNum);
    const content = await page.getTextContent();
    return content.items.map(i => i.str).join(' ');
}

// --- أداة الكويز (Quiz) ---
DOM.btnQuiz.onclick = async () => {
    DOM.aiResults.innerHTML = '<div style="text-align:center; padding:20px;">⏳ Generating Quiz...</div>';

    try {
        const text = await getPageText();
        if (text.length < 50) {
            DOM.aiResults.innerHTML = '<div style="color:orange; padding:10px;">Page text is too short.</div>';
            return;
        }

        const res = await callAiApi('generate-quiz-text', { text, count: 5 });

        // معالجة هيكل البيانات المختلف المحتمل
        let questions = [];
        if (Array.isArray(res)) questions = res;
        else if (res.questions) questions = res.questions;
        else if (res.data) questions = res.data;

        if (!questions || questions.length === 0) throw new Error("Format Mismatch: No questions found.");

        DOM.aiResults.innerHTML = '';
        questions.forEach((q, idx) => {
            const card = document.createElement('div');
            card.className = 'note-card';
            card.innerHTML = `<h4>Q${idx + 1}: ${q.question}</h4>`;

            q.options.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.textContent = opt;
                btn.style.cssText = "display:block; width:100%; margin:5px 0; padding:8px; border:1px solid #ddd; background:white; cursor:pointer; text-align:left; border-radius:6px;";

                btn.onclick = () => {
                    const isCorrect = (i === q.correctOptionIndexes[0]);
                    btn.style.background = isCorrect ? '#dcfce7' : '#fee2e2';
                    btn.style.borderColor = isCorrect ? '#22c55e' : '#ef4444';

                    if (!card.querySelector('.exp')) {
                        const exp = document.createElement('div');
                        exp.className = 'exp';
                        exp.style.marginTop = '10px';
                        exp.innerHTML = `<b>${isCorrect ? '✅ Correct' : '❌ Incorrect'}</b><br>${q.explanation || ''}`;
                        card.appendChild(exp);
                    }
                };
                card.appendChild(btn);
            });
            DOM.aiResults.appendChild(card);
        });

    } catch (e) {
        DOM.aiResults.innerHTML = `<div style="color:red; padding:10px;">Error: ${e.message}</div>`;
    }
};

// --- أداة الفلاش كاردز (Flashcards) ---
DOM.btnFlashcards.onclick = async () => {
    DOM.aiResults.innerHTML = '<div style="text-align:center; padding:20px;">⏳ Creating Flashcards...</div>';

    try {
        const text = await getPageText();
        const res = await callAiApi('generate-flashcards-text', { text, count: 6 });

        let cards = res.flashcards || res;
        if (!Array.isArray(cards)) throw new Error("Invalid response format");

        DOM.aiResults.innerHTML = '';
        cards.forEach(fc => {
            const card = document.createElement('div');
            card.className = 'note-card';
            card.style.cursor = 'pointer';
            card.innerHTML = `<div class="front"><b>Q:</b> ${fc.front}</div>`;

            card.onclick = () => {
                if (card.querySelector('.back')) {
                    card.innerHTML = `<div class="front"><b>Q:</b> ${fc.front}</div>`;
                    card.style.borderLeftColor = '#2563eb';
                } else {
                    card.innerHTML = `<div class="back" style="color:#2563eb"><b>A:</b> ${fc.back}</div>`;
                    card.style.borderLeftColor = '#f59e0b';
                }
            };
            DOM.aiResults.appendChild(card);
        });

    } catch (e) {
        DOM.aiResults.innerHTML = `<div style="color:red; padding:10px;">Error: ${e.message}</div>`;
    }
};

// --- أداة المايند ماب (Mind Map) - مضمنة ---
DOM.btnMindmap.onclick = async () => {
    DOM.aiResults.innerHTML = '<div style="text-align:center; padding:20px;">⏳ Building Mind Map...</div>';

    try {
        const text = await getPageText();
        const res = await callAiApi('generate-mindmap-text', { text });
        const markdown = res.markdown || res;

        // تنظيف وتجهيز الحاوية
        DOM.aiResults.innerHTML = '';
        const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgEl.id = 'markmap';
        svgEl.style.width = '100%';
        svgEl.style.height = '350px';
        svgEl.style.background = '#f8fafc';
        svgEl.style.border = '1px solid #e2e8f0';
        svgEl.style.borderRadius = '8px';
        DOM.aiResults.appendChild(svgEl);

        // استخدام مكتبة Markmap
        if (window.markmap) {
            const { Transformer, Markmap } = window.markmap;
            const transformer = new Transformer();
            const { root } = transformer.transform(markdown);
            Markmap.create(svgEl, null, root);
        } else {
            throw new Error("Markmap library is missing in HTML.");
        }

    } catch (e) {
        DOM.aiResults.innerHTML = `<div style="color:red; padding:10px;">Error: ${e.message}</div>`;
    }
};

// --- الشرح والترجمة (Explain & Translate) ---
DOM.btnAskAi.onclick = async () => {
    const text = DOM.selectionPopup.dataset.text;
    showModal('Thinking... 🤖');
    try {
        const res = await callAiApi('ask', { question: `Explain this concept simply:\n"${text}"` });
        showModal(res.answer);
    } catch (e) { showModal('Error fetching explanation.'); }
};

DOM.btnTranslate.onclick = async () => {
    const text = DOM.selectionPopup.dataset.text;
    showModal('Translating... 📖');
    try {
        const res = await callAiApi('ask', { question: `Translate to Arabic:\n"${text}"` });
        showModal(res.answer);
    } catch (e) { showModal('Error fetching translation.'); }
};

function showModal(content) {
    DOM.selectionPopup.style.display = 'none';
    DOM.backdrop.style.display = 'block';
    DOM.explainPopup.style.display = 'block';
    DOM.explainContent.innerHTML = content.replace(/\n/g, '<br>');
}


// ============================================================
//  8. الحفظ والاسترجاع السحابي (Cloud & Local Storage)
// ============================================================

// حفظ محلي (سريع)
function saveLocalData() {
    localStorage.setItem('pdfDrawings', JSON.stringify(STATE.drawings));
    localStorage.setItem('pdfNotes', JSON.stringify(STATE.flashcards));
}

// حفظ سحابي (عند الضغط على الزر)
DOM.saveCloudBtn.onclick = async () => {
    if (!STATE.currentFileId) return alert('No file loaded.');

    DOM.saveCloudBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    const payload = {
        lessonId: STATE.currentFileId,
        progressData: {
            drawings: STATE.drawings,
            flashcards: STATE.flashcards,
            lastPage: STATE.pageNum
        }
    };

    try {
        const res = await fetch(`${API_BASE}/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${USER_TOKEN}`
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (data.success) {
            alert('Progress saved to cloud!');
        } else {
            alert('Save failed: ' + data.message);
        }
    } catch (err) {
        console.error(err);
        alert('Network error while saving.');
    } finally {
        DOM.saveCloudBtn.innerHTML = '<i class="fas fa-save"></i>';
    }
};

// استرجاع سحابي (عند التحميل)
async function loadProgressFromCloud(fileId) {
    if (!USER_TOKEN) return;
    try {
        const res = await fetch(`${API_BASE}/?lessonId=${fileId}`, {
            headers: { 'Authorization': `Bearer ${USER_TOKEN}` }
        });
        const json = await res.json();

        if (json.success && json.data) {
            if (json.data.drawings) STATE.drawings = json.data.drawings;
            if (json.data.flashcards) STATE.flashcards = json.data.flashcards;
            if (json.data.lastPage) STATE.pageNum = json.data.lastPage;
            console.log("Cloud data loaded.");
        }
    } catch (e) {
        console.warn("No cloud save found, using local/empty state.");
    }
}


// ============================================================
//  9. التشغيل التلقائي (Auto Init)
// ============================================================

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fileSrc = urlParams.get('src');

    if (fileSrc) {
        // إذا كان هناك ملف في الرابط (للمشغل من الداشبورد)
        DOM.startContainer.style.display = 'none';
        DOM.mainLayout.style.display = 'flex';
        try {
            loadPdf(decodeURIComponent(fileSrc));
        } catch (e) { console.error(e); }
    }

    // استعادة الملاحظات المحفوظة محلياً إذا وجدت
    const localNotes = localStorage.getItem('pdfNotes');
    if (localNotes) STATE.flashcards = JSON.parse(localNotes);
});
// ================== 1. إعدادات ومتغيرات عامة ==================
const DOM = {
    fileInput: document.getElementById('file-input'),
    startContainer: document.getElementById('start-container'),
    mainLayout: document.getElementById('main-layout'),
    pdfCanvas: document.getElementById('pdf-canvas'),
    drawCanvas: document.getElementById('drawing-canvas'),
    textLayer: document.getElementById('text-layer'),
    selectionPopup: document.getElementById('selection-popup'),
    explainPopup: document.getElementById('ai-explain-popup'),
    explainContent: document.getElementById('ai-explain-content'),
    aiResults: document.getElementById('ai-results-area'),
    btnQuiz: document.getElementById('btn-quiz'),
    btnFlashcards: document.getElementById('btn-flashcards'),
    btnMindmap: document.getElementById('btn-mindmap'),
    btnAskAi: document.getElementById('ask-ai-btn'),
    btnPen: document.getElementById('pen-btn'),
    btnErase: document.getElementById('erase-btn'),
    container: document.getElementById('pdf-canvas-container')
};

const ctx = DOM.pdfCanvas.getContext('2d');
const drawCtx = DOM.drawCanvas.getContext('2d');
const USER_TOKEN = localStorage.getItem('userToken');

// حالة التطبيق
const state = {
    pdfDoc: null,
    pageNum: 1,
    scale: 1.4,
    renderTask: null, // للتحكم في عملية الريندر ومنع التداخل
    currentTool: 'select',
    isDrawing: false,
    drawings: JSON.parse(localStorage.getItem('pdfDrawings')) || {} // استرجاع الرسومات المحفوظة
};

// ================== 2. تحميل PDF ==================
// إعداد Worker مرة واحدة فقط
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

DOM.fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // UI Update
    DOM.startContainer.style.display = 'none';
    DOM.mainLayout.style.display = 'flex';

    const url = URL.createObjectURL(file);
    loadPdf(url);
});

async function loadPdf(url) {
    try {
        const doc = await pdfjsLib.getDocument(url).promise;
        state.pdfDoc = doc;
        state.pageNum = 1;
        renderPage();
    } catch (error) {
        console.error('Error loading PDF:', error);
        alert('حدث خطأ أثناء تحميل الملف.');
    }
}

// ================== 3. عرض الصفحة (Rendering) ==================
async function renderPage() {
    if (!state.pdfDoc) return;

    // إلغاء أي عملية ريندر سابقة جارية
    if (state.renderTask) {
        await state.renderTask.cancel();
    }

    const page = await state.pdfDoc.getPage(state.pageNum);
    const viewport = page.getViewport({ scale: state.scale });

    // تحديث أبعاد الكانفاس فقط إذا تغيرت لتقليل الوميض
    if (DOM.pdfCanvas.width !== viewport.width) {
        DOM.pdfCanvas.width = DOM.drawCanvas.width = viewport.width;
        DOM.pdfCanvas.height = DOM.drawCanvas.height = viewport.height;
    }

    // رسم الـ PDF
    const renderContext = {
        canvasContext: ctx,
        viewport: viewport
    };

    state.renderTask = page.render(renderContext);

    try {
        await state.renderTask.promise;

        // رسم طبقة النص (للتحديد)
        const textContent = await page.getTextContent();
        DOM.textLayer.innerHTML = '';
        DOM.textLayer.style.width = `${viewport.width}px`;
        DOM.textLayer.style.height = `${viewport.height}px`;

        pdfjsLib.renderTextLayer({
            textContent,
            container: DOM.textLayer,
            viewport,
            textDivs: []
        });

        // إعادة رسم الرسومات المحفوظة لهذه الصفحة
        redrawStoredPaths();

    } catch (error) {
        if (error.name !== 'RenderingCancelledException') {
            console.error('Render error:', error);
        }
    }
}

// ================== 4. منطق الرسم المحسن (Optimized) ==================
DOM.btnPen.addEventListener('click', () => setTool('pen'));
DOM.btnErase.addEventListener('click', clearPageDrawings);

function setTool(tool) {
    state.currentTool = tool;
    // تفعيل التفاعل مع كانفاس الرسم فقط عند اختيار القلم
    DOM.drawCanvas.style.pointerEvents = tool === 'pen' ? 'auto' : 'none';
    DOM.container.style.cursor = tool === 'pen' ? 'crosshair' : 'default';
}

function clearPageDrawings() {
    drawCtx.clearRect(0, 0, DOM.drawCanvas.width, DOM.drawCanvas.height);
    state.drawings[state.pageNum] = [];
    saveDrawings();
}

// أحداث الرسم
DOM.drawCanvas.addEventListener('mousedown', startDrawing);
DOM.drawCanvas.addEventListener('mousemove', draw);
DOM.drawCanvas.addEventListener('mouseup', stopDrawing);
DOM.drawCanvas.addEventListener('mouseout', stopDrawing);

let currentPath = [];

function startDrawing(e) {
    if (state.currentTool !== 'pen') return;
    state.isDrawing = true;
    const pos = getMousePos(e);
    currentPath = [pos];

    drawCtx.beginPath();
    drawCtx.moveTo(pos.x, pos.y);
    drawCtx.strokeStyle = 'rgba(255, 255, 0, 0.5)'; // لون الهايلايتر
    drawCtx.lineWidth = 15;
    drawCtx.lineCap = 'round';
    drawCtx.lineJoin = 'round';
}

function draw(e) {
    if (!state.isDrawing) return;
    const pos = getMousePos(e);
    currentPath.push(pos);

    // رسم الخط الجديد مباشرة دون مسح الكانفاس (أداء عالي)
    drawCtx.lineTo(pos.x, pos.y);
    drawCtx.stroke();
}

function stopDrawing() {
    if (!state.isDrawing) return;
    state.isDrawing = false;

    // حفظ المسار في الذاكرة
    if (!state.drawings[state.pageNum]) state.drawings[state.pageNum] = [];
    state.drawings[state.pageNum].push([...currentPath]);

    saveDrawings(); // حفظ في LocalStorage
    currentPath = [];
}

function redrawStoredPaths() {
    drawCtx.clearRect(0, 0, DOM.drawCanvas.width, DOM.drawCanvas.height);
    const paths = state.drawings[state.pageNum] || [];

    paths.forEach(path => {
        if (path.length < 1) return;
        drawCtx.beginPath();
        drawCtx.strokeStyle = 'rgba(255, 255, 0, 0.5)';
        drawCtx.lineWidth = 15;
        drawCtx.lineCap = 'round';
        drawCtx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
            drawCtx.lineTo(path[i].x, path[i].y);
        }
        drawCtx.stroke();
    });
}

function getMousePos(evt) {
    const rect = DOM.drawCanvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function saveDrawings() {
    localStorage.setItem('pdfDrawings', JSON.stringify(state.drawings));
}

// ================== 5. أدوات النصوص والذكاء الاصطناعي ==================
DOM.container.addEventListener('mouseup', handleTextSelection);

function handleTextSelection(e) {
    if (state.currentTool !== 'select') return;

    // تأخير بسيط لضمان اكتمال عملية التحديد
    setTimeout(() => {
        const text = window.getSelection().toString().trim();
        if (text.length > 0) {
            showPopup(e.clientX, e.clientY, text);
        } else {
            DOM.selectionPopup.style.display = 'none';
        }
    }, 10);
}

function showPopup(x, y, text) {
    DOM.selectionPopup.style.display = 'block';
    DOM.selectionPopup.style.left = `${x}px`;
    // رفع البوب أب قليلاً للأعلى حتى لا يغطي النص
    DOM.selectionPopup.style.top = `${y - 50}px`;
    DOM.selectionPopup.dataset.text = text;
}

// دوال مساعدة للنصوص
async function getPageText() {
    const page = await state.pdfDoc.getPage(state.pageNum);
    const content = await page.getTextContent();
    return content.items.map(i => i.str).join(' ');
}

async function isScannedPDF() {
    // فحص ذكي: إذا كان النص فارغاً تقريباً في أول صفحة
    const page = await state.pdfDoc.getPage(1);
    const content = await page.getTextContent();
    return content.items.length < 2; // تقليل الحد للكشف الأدق
}

// API Wrapper
async function callAI(endpoint, body) {
    if (!USER_TOKEN) {
        alert("يرجى تسجيل الدخول أولاً");
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
            const errData = await res.json();
            throw new Error(errData.message || 'AI service error');
        }
        return await res.json();
    } catch (error) {
        console.error("AI Error:", error);
        DOM.aiResults.innerHTML = `<div class="error">❌ حدث خطأ: ${error.message}</div>`;
        throw error;
    }
}

// ================== 6. معالجات الأحداث (Event Handlers) ==================

// زر الشرح (Explain)
DOM.btnAskAi.addEventListener('click', async () => {
    DOM.selectionPopup.style.display = 'none';
    const selectedText = DOM.selectionPopup.dataset.text;

    if (await isScannedPDF()) {
        showExplainModal("⚠️ هذا الملف عبارة عن صور (Scanned). ميزة التعرف على النصوص غير مدعومة حالياً لهذا النوع.");
        return;
    }

    const textToExplain = selectedText || await getPageText();

    showExplainModal("Thinking... 🤖"); // حالة تحميل

    try {
        const res = await callAI('ask', {
            question: `Explain simply for a dental student:\n${textToExplain}`
        });
        showExplainModal(res.answer);
    } catch (e) {
        showExplainModal("فشل في جلب الشرح. حاول مرة أخرى.");
    }
});

function showExplainModal(html) {
    DOM.explainContent.innerHTML = html;
    DOM.explainPopup.style.display = 'block';
}

// زر الكويز (Quiz)
DOM.btnQuiz.addEventListener('click', async () => {
    DOM.aiResults.innerHTML = '<div class="loading">⏳ Generating Quiz...</div>';

    try {
        const text = await getPageText();
        const res = await callAI('generate-quiz-text', { text, count: 5 });

        DOM.aiResults.innerHTML = '';
        if (!res.questions || res.questions.length === 0) throw new Error("No questions generated");

        res.questions.forEach((q, idx) => {
            const card = document.createElement('div');
            card.className = 'card quiz-card';
            card.innerHTML = `<h4>Q${idx + 1}: ${q.question}</h4>`;

            q.options.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = opt;
                btn.onclick = () => {
                    const isCorrect = i === q.correctOptionIndexes[0];
                    btn.classList.add(isCorrect ? 'correct' : 'wrong');

                    // إظهار التفسير
                    const explanationDiv = document.createElement('div');
                    explanationDiv.className = 'explanation';
                    explanationDiv.innerHTML = `<b>${isCorrect ? '✅ Excellent!' : '❌ Incorrect'}</b><br>${q.explanation || ''}`;
                    card.appendChild(explanationDiv);

                    // تعطيل باقي الأزرار
                    card.querySelectorAll('button').forEach(b => b.disabled = true);
                };
                card.appendChild(btn);
            });
            DOM.aiResults.appendChild(card);
        });
    } catch (e) {
        // Error is handled in callAI
    }
});

// زر الفلاش كارد (Flashcards)
DOM.btnFlashcards.addEventListener('click', async () => {
    DOM.aiResults.innerHTML = '<div class="loading">⏳ Generating Flashcards...</div>';

    try {
        const text = await getPageText();
        const res = await callAI('generate-flashcards-text', { text, count: 8 });

        DOM.aiResults.innerHTML = '<div class="flashcards-grid"></div>';
        const grid = DOM.aiResults.querySelector('.flashcards-grid');

        res.flashcards.forEach(fc => {
            const card = document.createElement('div');
            card.className = 'card flashcard';

            const content = document.createElement('div');
            content.className = 'flashcard-content';
            content.innerHTML = `<div class="front"><b>Q:</b> ${fc.front}</div>`;

            card.onclick = () => {
                card.classList.toggle('flipped');
                if (card.classList.contains('flipped')) {
                    content.innerHTML = `<div class="back"><b>A:</b> ${fc.back}</div>`;
                    card.style.borderColor = '#3498db';
                } else {
                    content.innerHTML = `<div class="front"><b>Q:</b> ${fc.front}</div>`;
                    card.style.borderColor = '#ddd';
                }
            };

            card.appendChild(content);
            grid.appendChild(card);
        });
    } catch (e) { }
});

// زر الخريطة الذهنية (Mind Map)
DOM.btnMindmap.addEventListener('click', async () => {
    DOM.aiResults.innerHTML = '<div class="loading">⏳ Structuring Mind Map...</div>';

    try {
        const text = await getPageText();
        const res = await callAI('generate-mindmap-text', { text });

        // تحسين العرض بدلاً من pre بسيط
        DOM.aiResults.innerHTML = `
            <div class="card mindmap-container">
                <h4>Markdown Structure</h4>
                <pre>${res.markdown}</pre>
                <small>Tip: Copy this into a Markdown viewer like Markmap.</small>
            </div>
        `;
    } catch (e) { }
});
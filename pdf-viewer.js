// =============================================================================
//  SMART DENTAL VIEWER - PRODUCTION CONTROLLER
//  Developer: Aymen (Dontist Owner)
//  Version: Final (Merged Logic + CSS Fix + Token Auth)
// =============================================================================

const API_BASE_URL = "https://dental-app-he1p.onrender.com";
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// =============================================================================
//  0. CSS INJECTION (الحل الجذري لمشكلة العرض والتحديد) 💉
//  هذا يضمن ظهور الصفحات تحت بعضها وتفعيل السكرول بغض النظر عن ملف HTML
// =============================================================================
(function forceFixStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* إجبار الحاوية على السكرول */
        #viewer-container {
            display: block !important;
            overflow-y: auto !important;
            height: 100vh;
            position: relative;
        }
        #pdf-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding-bottom: 100px;
        }
        
        /* تنسيق الصفحات لتظهر تحت بعضها */
        .page-container {
            position: relative !important;
            display: block !important;
            margin: 0 auto 20px auto !important;
            background: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        /* طبقة النصوص (ضرورية للتحديد) */
        .textLayer {
            position: absolute; inset: 0;
            opacity: 1; 
            mix-blend-mode: multiply; 
            line-height: 1.0;
            z-index: 10;
        }
        .textLayer > span {
            color: transparent; position: absolute; white-space: pre; cursor: text;
            transform-origin: 0% 0%;
        }

        /* طبقة الرسم (فوق النصوص لكن لا تمنع التحديد إلا عند التفعيل) */
        .drawLayer {
            position: absolute; inset: 0;
            z-index: 20;
            pointer-events: none; /* هذا هو سر التحديد! */
        }
        .drawLayer.active { pointer-events: auto; cursor: crosshair; }
    `;
    document.head.appendChild(style);
})();

// =============================================================================
//  1. GLOBAL STATE
// =============================================================================
const STATE = {
    pdfDoc: null,
    fileHash: null,
    scale: 1.3,
    currentPage: 1,

    // Tools
    tool: null, // 'pen', 'highlighter', 'eraser'
    isDrawing: false,
    drawings: [],

    // AI Content
    quizData: [],
    currentQuizIndex: 0,
    flashcardsData: [],
    currentFlashcardIndex: 0,
    mindMapData: null,

    // Pins & Selection
    pins: [],
    activePinId: null,
    selection: { text: '', rect: null },

    // Session
    sessionData: { quizzes: [], flashcards: [], mindMapData: null }
};

// =============================================================================
//  2. API HELPER (Token Auth) 🔌
// =============================================================================
async function callApi(endpoint, body = {}) {
    const token = localStorage.getItem('userToken');
    if (!token) {
        alert("Erreur: Token manquant. Veuillez vous connecter.");
        return;
    }

    try {
        const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        if (res.status === 401) {
            alert("Session expirée.");
            return;
        }
        return await res.json();
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}

async function getSmartText(scopeInputName) {
    if (!STATE.pdfDoc) return "";
    const scope = document.querySelector(`input[name="${scopeInputName}"]:checked`)?.value || 'page';
    let text = "";

    if (scope === 'page') {
        const page = await STATE.pdfDoc.getPage(STATE.currentPage);
        text = (await page.getTextContent()).items.map(i => i.str).join(' ');
    } else {
        const max = Math.min(STATE.pdfDoc.numPages, 10);
        for (let i = 1; i <= max; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            text += (await page.getTextContent()).items.map(i => i.str).join(' ') + "\n";
        }
    }
    return text;
}

// =============================================================================
//  3. PDF RENDERING ENGINE 🎨
// =============================================================================
const fileInput = document.getElementById('file-input');
const container = document.getElementById('pdf-wrapper');

if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Hash
        const buffer = await file.arrayBuffer();
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(buffer);
        STATE.fileHash = spark.end();

        // Load Doc
        STATE.pdfDoc = await pdfjsLib.getDocument(buffer).promise;

        // Reset Container
        container.innerHTML = '';

        // Render All Pages (Sequential Loop - حلك الصحيح)
        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            await renderPage(i, container);
        }

        setupScrollObserver();
        loadSavedProgress();
    });
}

async function renderPage(num, container) {
    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });

    // إنشاء حاوية الصفحة
    const wrapper = document.createElement('div');
    wrapper.className = 'page-container';
    wrapper.id = `page-${num}`;
    // ضبط الأبعاد بدقة
    wrapper.style.width = `${viewport.width}px`;
    wrapper.style.height = `${viewport.height}px`;

    // 1. Canvas (الصورة)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width; canvas.height = viewport.height;
    canvas.style.position = 'absolute'; canvas.style.inset = '0';

    // 2. Text Layer (النص)
    const textLayer = document.createElement('div');
    textLayer.className = 'textLayer';
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;
    textLayer.style.setProperty('--scale-factor', STATE.scale);

    // 3. Draw Layer (الرسم)
    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'drawLayer';
    drawCanvas.id = `draw-${num}`;
    drawCanvas.width = viewport.width; drawCanvas.height = viewport.height;

    // الترتيب: Canvas -> Text -> Draw
    wrapper.append(canvas, textLayer, drawCanvas);
    container.appendChild(wrapper);

    // رسم المحتوى
    await page.render({ canvasContext: ctx, viewport }).promise;

    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayer,
        viewport: viewport,
        textDivs: []
    });

    setupDrawingLogic(drawCanvas, num);
}

function setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) STATE.currentPage = parseInt(e.target.id.split('-')[1]);
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.page-container').forEach(el => observer.observe(el));
}

// =============================================================================
//  4. TOOLS & DRAWING ✏️
// =============================================================================
window.setTool = function (t) {
    STATE.tool = (STATE.tool === t) ? null : t;

    // UI Buttons
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    if (STATE.tool) document.getElementById(`btn-${STATE.tool}`)?.classList.add('active');

    // Layer Interaction (السر في إصلاح التحديد)
    document.querySelectorAll('.drawLayer').forEach(el => {
        // إذا كانت أداة رسم مفعلة، نفعل الرسم. إذا لا، نلغيه ليصبح النص قابلاً للتحديد
        if (STATE.tool) {
            el.style.pointerEvents = 'auto';
            el.classList.add('active');
        } else {
            el.style.pointerEvents = 'none';
            el.classList.remove('active');
        }
    });
};

function setupDrawingLogic(canvas, pageNum) {
    const ctx = canvas.getContext('2d');
    let lastX, lastY;

    canvas.addEventListener('mousedown', e => {
        if (!STATE.tool) return;
        STATE.isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        const color = document.getElementById('color-picker')?.value || '#ff0000';
        STATE.drawings.push({
            page: pageNum, tool: STATE.tool, color: color, points: [{ x: lastX, y: lastY }]
        });
    });

    canvas.addEventListener('mousemove', e => {
        if (!STATE.isDrawing || !STATE.tool) return;

        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        if (STATE.tool === 'highlighter') {
            ctx.globalCompositeOperation = 'multiply';
            ctx.strokeStyle = '#ffff00'; ctx.lineWidth = 20; ctx.globalAlpha = 0.5;
        } else if (STATE.tool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = 20; ctx.globalAlpha = 1;
        } else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = document.getElementById('color-picker')?.value || '#ff0000';
            ctx.lineWidth = 2; ctx.globalAlpha = 1;
        }

        ctx.beginPath(); ctx.moveTo(lastX, lastY); ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke();

        if (STATE.drawings.length) {
            STATE.drawings[STATE.drawings.length - 1].points.push({ x: e.offsetX, y: e.offsetY });
        }
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mouseup', () => STATE.isDrawing = false);
}

function redrawAll() {
    STATE.drawings.forEach(d => {
        const cvs = document.getElementById(`draw-${d.page}`);
        if (!cvs) return;
        const ctx = cvs.getContext('2d');
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';

        if (d.tool === 'highlighter') {
            ctx.globalCompositeOperation = 'multiply';
            ctx.strokeStyle = '#ffff00'; ctx.lineWidth = 15; ctx.globalAlpha = 0.5;
        } else if (d.tool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = 20;
        } else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = d.color; ctx.lineWidth = 2;
        }

        ctx.beginPath();
        if (d.points.length) ctx.moveTo(d.points[0].x, d.points[0].y);
        for (let i = 1; i < d.points.length; i++) ctx.lineTo(d.points[i].x, d.points[i].y);
        ctx.stroke();
    });
}

// =============================================================================
//  5. SMART PINS & SELECTION 💡
// =============================================================================
document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    const toolbar = document.getElementById('selection-toolbar');

    if (sel.isCollapsed || !document.getElementById('pdf-wrapper')?.contains(sel.anchorNode)) {
        if (toolbar) toolbar.style.display = 'none';
        return;
    }

    const rect = sel.getRangeAt(0).getBoundingClientRect();
    STATE.selection.text = sel.toString();

    if (toolbar) {
        toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
        toolbar.style.left = `${rect.left}px`;
        toolbar.style.display = 'flex';
    }
});

window.askAiAboutSelection = async function () {
    document.getElementById('selection-toolbar').style.display = 'none';
    const q = prompt("Question?");
    if (!q) return;

    const modal = document.getElementById('ai-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.getElementById('ai-answer-text').innerHTML = 'Thinking...';
    }

    try {
        const res = await callApi('ai/ask-dentist', { text: STATE.selection.text, question: q });
        const ans = res.answer || "No answer";
        if (modal) document.getElementById('ai-answer-text').innerHTML = marked.parse(ans);

        // حساب مكان الدبوس بالنسبة للصفحة
        const pageEl = document.getElementById(`page-${STATE.currentPage}`);
        if (pageEl) {
            const r = pageEl.getBoundingClientRect();
            // نحسب الإحداثيات النسبية داخل الصفحة
            // (ملاحظة: الـ rect يأتي من الـ viewport، نحتاج تحويله)
            // للتبسيط هنا سنضع الدبوس في منتصف الصفحة العلوية
            createPin(STATE.currentPage, 50, 50, q, ans);
        }
    } catch (e) { alert("Error AI"); }
};

function createPin(page, x, y, q, a) {
    const pin = { id: Date.now(), page, x, y, q, a };
    STATE.pins.push(pin);
    renderPin(pin);
}

function renderPin(pin) {
    const wrap = document.getElementById(`page-${pin.page}`);
    if (!wrap) return;

    const el = document.createElement('div');
    el.className = 'smart-pin';
    el.innerHTML = '💡';
    // تنسيق الدبوس
    el.style.position = 'absolute';
    el.style.left = `${pin.x}px`; el.style.top = `${pin.y}px`;
    el.style.zIndex = 100; el.style.cursor = 'pointer';
    el.style.fontSize = '24px';

    el.onclick = (e) => {
        e.stopPropagation();
        alert(`Q: ${pin.q}\n\nA: ${pin.a}`);
    };
    wrap.appendChild(el);
}

// =============================================================================
//  6. AI GENERATION (Quiz, Cards, Map) 🧠
// =============================================================================
document.getElementById('generate-quiz-btn').onclick = async () => {
    const box = document.getElementById('quiz-container');
    box.innerHTML = 'Generating...';
    try {
        const text = await getSmartText('quiz-scope');
        const res = await callApi('ai/generate-quiz-text', { text, count: 5 });
        STATE.quizData = res.questions || [];
        renderQuiz();
    } catch (e) { box.innerHTML = "Error"; }
};

function renderQuiz() {
    const box = document.getElementById('quiz-container');
    box.innerHTML = '';
    STATE.quizData.forEach((q, i) => {
        box.innerHTML += `<div class="quiz-card" style="margin-bottom:10px; padding:10px; border:1px solid #ddd;">
            <b>Q${i + 1}:</b> ${q.question}<br>
            <small style="color:green;">Ans: ${q.options[q.correctOptionIndexes[0]]}</small>
        </div>`;
    });
}

document.getElementById('generate-flashcards-btn').onclick = async () => {
    const box = document.getElementById('flashcards-container');
    box.innerHTML = 'Generating...';
    try {
        const text = await getSmartText('cards-scope');
        const res = await callApi('ai/generate-flashcards-text', { text, count: 8 });
        STATE.flashcardsData = res.flashcards || [];
        renderCards();
    } catch (e) { box.innerHTML = "Error"; }
};

function renderCards() {
    const box = document.getElementById('flashcards-container');
    box.innerHTML = '';
    STATE.flashcardsData.forEach(c => {
        box.innerHTML += `<div style="border:1px solid #ddd; margin:5px; padding:5px;">
            <b>Q:</b> ${c.front}<br><b>A:</b> ${c.back}
        </div>`;
    });
}

document.getElementById('generate-mindmap-btn').onclick = async () => {
    const svg = document.getElementById('mindmap-svg');
    svg.innerHTML = 'Generating...';
    try {
        const text = await getSmartText('quiz-scope');
        const res = await callApi('ai/generate-mindmap-text', { text });
        const { Transformer, Markmap } = window.markmap;
        const { root } = new Transformer().transform(res.markdown || "# Error");
        svg.innerHTML = '';
        Markmap.create(svg, null, root);
    } catch (e) { svg.innerHTML = "Error"; }
};

// =============================================================================
//  7. SAVE & LOAD 💾
// =============================================================================
document.getElementById('save-progress-btn').onclick = async () => {
    if (!STATE.fileHash) return alert("No file");
    await callApi('progress/save', {
        lessonId: STATE.fileHash,
        progressData: {
            drawings: STATE.drawings,
            pins: STATE.pins,
            quizzes: STATE.quizData,
            flashcards: STATE.flashcardsData,
            mindMapData: STATE.sessionData.mindMapData
        }
    });
    alert("Saved!");
};

async function loadSavedProgress() {
    if (!STATE.fileHash) return;
    try {
        const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('userToken')}` }
        });
        const d = await res.json();
        if (d.success && d.data) {
            const data = d.data.progressData || d.data;
            STATE.drawings = data.drawings || [];
            redrawAll();
            STATE.pins = data.pins || [];
            STATE.pins.forEach(renderPin);

            if (data.quizzes) {
                STATE.quizData = data.quizzes;
                document.getElementById('restore-quiz-btn').style.display = 'block';
            }
            // ... load others
        }
    } catch (e) { console.log("New session"); }
}

// Restore Handlers
document.getElementById('restore-quiz-btn').onclick = () => {
    renderQuiz();
    document.getElementById('restore-quiz-btn').style.display = 'none';
};
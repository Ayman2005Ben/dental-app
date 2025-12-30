// =============================================================================
//  SMART DENTAL VIEWER - THE ULTIMATE CONTROLLER (FULL INTEGRATION)
//  Developer: Aymen (Dontist)
//  Features: Scroll Fix, Tools, AI, Auth, Save/Load, Exports
// =============================================================================

const API_BASE_URL = "https://dental-app-he1p.onrender.com";

// 1. إعداد الـ Worker (مهم جداً)
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// =============================================================================
//  0. CSS INJECTION (لضمان عمل السكرول والطبقات مهما كان الـ HTML)
// =============================================================================
(function forceStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* ضمان السكرول */
        #viewer-container { display: block !important; overflow-y: auto !important; height: 100vh; position: relative; }
        #pdf-wrapper { display: flex; flex-direction: column; align-items: center; padding-bottom: 200px; width: 100%; }
        .page-container { position: relative !important; margin: 0 auto 20px auto; background: white; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        
        /* طبقات التفاعل */
        canvas { display: block; }
        .textLayer { position: absolute; inset: 0; opacity: 1; mix-blend-mode: multiply; line-height: 1.0; z-index: 2; }
        .textLayer > span { color: transparent; position: absolute; white-space: pre; cursor: text; transform-origin: 0% 0%; }
        
        .drawLayer { position: absolute; inset: 0; z-index: 10; pointer-events: none; }
        .drawLayer.active { pointer-events: auto; cursor: crosshair; }
        
        .textInputLayer { position: absolute; inset: 0; z-index: 20; pointer-events: none; }
        .textInputLayer.active { pointer-events: auto; cursor: text; }
    `;
    document.head.appendChild(style);
})();

// =============================================================================
//  1. إدارة الحالة (STATE)
// =============================================================================
const STATE = {
    pdfDoc: null,
    fileHash: null,
    scale: 1.3,
    currentPage: 1,

    // Tools
    tool: 'cursor', // 'cursor', 'pen', 'highlighter', 'eraser', 'text'
    isDrawing: false,
    color: '#ff0000',
    drawings: [],     // {page, tool, color, points[]}
    textAnnotations: [], // {id, page, x, y, text}

    // AI Data
    quizData: [],
    currentQuizIndex: 0,
    selectedQuizOption: null,

    flashcardsData: [],
    currentFlashcardIndex: 0,

    mindMapData: null,

    // Smart Pins
    pins: [],
    selection: { text: '', rect: null },

    // Session
    sessionData: { quizzes: [], flashcards: [], mindMapData: null }
};

// =============================================================================
//  2. دوال الاتصال والتوكن (Auth) 🔌
// =============================================================================
async function callApi(endpoint, body = {}) {
    const token = localStorage.getItem('userToken');
    if (!token) {
        alert("Erreur: Veuillez vous connecter (Token manquant).");
        return null;
    }

    // إضافة معرف الملف تلقائياً
    body.lessonId = STATE.fileHash || "temp_lesson";

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
            alert("Session expirée. Reconnectez-vous.");
            return null;
        }

        return await res.json();
    } catch (e) {
        console.error("API Error", e);
        throw e;
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
        // نأخذ عينة (أول 20 صفحة) لتجنب البطء
        const max = Math.min(STATE.pdfDoc.numPages, 20);
        for (let i = 1; i <= max; i++) {
            const p = await STATE.pdfDoc.getPage(i);
            text += (await p.getTextContent()).items.map(i => i.str).join(' ') + "\n";
        }
    }
    return text;
}

// =============================================================================
//  3. محرك العرض (RENDERING ENGINE) 🎨
// =============================================================================
const fileInput = document.getElementById('file-input');
const wrapper = document.getElementById('pdf-wrapper');

if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // 1. Hash
        const buffer = await file.arrayBuffer();
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(buffer);
        STATE.fileHash = spark.end();

        // 2. Load
        STATE.pdfDoc = await pdfjsLib.getDocument(buffer).promise;
        wrapper.innerHTML = ''; // تنظيف

        // 3. Render Loop (FIXED SCROLL)
        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            await renderPage(i);
        }

        setupScrollSpy();
        loadSavedProgress();
    });
}

async function renderPage(num) {
    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });

    // الحاوية
    const div = document.createElement('div');
    div.className = 'page-container';
    div.id = `page-${num}`;
    div.style.width = `${viewport.width}px`;
    div.style.height = `${viewport.height}px`;

    // طبقات
    const canvas = document.createElement('canvas'); // 0
    const textLayer = document.createElement('div'); // 1
    const drawCanvas = document.createElement('canvas'); // 2
    const inputLayer = document.createElement('div'); // 3

    // إعدادات الطبقات
    canvas.width = viewport.width; canvas.height = viewport.height;

    textLayer.className = 'textLayer';
    textLayer.style.width = `${viewport.width}px`; textLayer.style.height = `${viewport.height}px`;
    textLayer.style.setProperty('--scale-factor', STATE.scale);

    drawCanvas.className = 'drawLayer';
    drawCanvas.id = `draw-${num}`;
    drawCanvas.width = viewport.width; drawCanvas.height = viewport.height;

    inputLayer.className = 'textInputLayer';
    inputLayer.id = `text-layer-${num}`;
    inputLayer.style.width = `${viewport.width}px`; inputLayer.style.height = `${viewport.height}px`;
    inputLayer.onclick = (e) => handleTextClick(e, num, inputLayer);

    // الترتيب
    div.append(canvas, textLayer, drawCanvas, inputLayer);
    wrapper.appendChild(div);

    // رسم المحتوى
    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport }).promise;

    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayer,
        viewport: viewport,
        textDivs: []
    });

    setupDrawingEvents(drawCanvas, num);
}

function setupScrollSpy() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) STATE.currentPage = parseInt(e.target.id.split('-')[1]);
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.page-container').forEach(el => observer.observe(el));
}

// =============================================================================
//  4. الأدوات والرسم (TOOLS & DRAWING) ✏️
// =============================================================================
window.setTool = function (t) {
    STATE.tool = t;

    // UI Update
    document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${t}`)?.classList.add('active');

    // Logic Update (Toggle Pointer Events)
    const drawLayers = document.querySelectorAll('.drawLayer');
    const inputLayers = document.querySelectorAll('.textInputLayer');
    const textLayers = document.querySelectorAll('.textLayer');

    if (t === 'cursor') {
        // وضع التحديد: نخفي طبقات الرسم والملاحظات عن الماوس
        drawLayers.forEach(l => { l.classList.remove('active'); l.style.pointerEvents = 'none'; });
        inputLayers.forEach(l => { l.classList.remove('active'); l.style.pointerEvents = 'none'; });
        // نجبر طبقة النص على العمل
        textLayers.forEach(l => l.style.pointerEvents = 'auto');
    }
    else if (['pen', 'highlighter', 'eraser'].includes(t)) {
        // وضع الرسم
        drawLayers.forEach(l => { l.classList.add('active'); l.style.pointerEvents = 'auto'; });
        textLayers.forEach(l => l.style.pointerEvents = 'none');
        inputLayers.forEach(l => l.style.pointerEvents = 'none');
    }
    else if (t === 'text') {
        // وضع الكتابة
        inputLayers.forEach(l => { l.classList.add('active'); l.style.pointerEvents = 'auto'; });
        drawLayers.forEach(l => l.style.pointerEvents = 'none');
    }
};

function setupDrawingEvents(canvas, pageNum) {
    const ctx = canvas.getContext('2d');
    let lastX, lastY;

    canvas.addEventListener('mousedown', e => {
        if (!['pen', 'highlighter', 'eraser'].includes(STATE.tool)) return;
        STATE.isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];

        STATE.drawings.push({
            page: pageNum,
            tool: STATE.tool,
            color: document.getElementById('color-picker').value,
            points: [{ x: lastX, y: lastY }]
        });
    });

    canvas.addEventListener('mousemove', e => {
        if (!STATE.isDrawing) return;

        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        if (STATE.tool === 'highlighter') {
            ctx.globalCompositeOperation = 'multiply';
            ctx.strokeStyle = '#ffff00'; ctx.lineWidth = 20; ctx.globalAlpha = 0.5;
        } else if (STATE.tool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = 20; ctx.globalAlpha = 1;
        } else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = document.getElementById('color-picker').value;
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

function handleTextClick(e, pageNum, layer) {
    if (STATE.tool !== 'text') return;
    const input = document.createElement('input');
    input.style.cssText = `position:absolute; left:${e.offsetX}px; top:${e.offsetY}px; border:1px solid blue; padding:5px; z-index:100;`;
    input.placeholder = "Tapez...";

    const save = () => {
        if (input.value.trim()) {
            const note = { id: Date.now(), page: pageNum, x: e.offsetX, y: e.offsetY, text: input.value };
            STATE.textAnnotations.push(note);
            renderNote(note, layer);
        }
        input.remove();
    };

    input.onkeydown = (ev) => { if (ev.key === 'Enter') save(); };
    input.onblur = save;
    layer.appendChild(input); input.focus();
}

function renderNote(note, layer) {
    if (!layer) layer = document.getElementById(`text-layer-${note.page}`);
    if (!layer) return;
    const el = document.createElement('div');
    el.className = 'added-text';
    el.textContent = note.text;
    el.style.left = note.x + 'px'; el.style.top = note.y + 'px';
    el.oncontextmenu = (e) => {
        e.preventDefault();
        STATE.textAnnotations = STATE.textAnnotations.filter(n => n.id !== note.id);
        el.remove();
    };
    layer.appendChild(el);
}

function redrawAll() {
    STATE.drawings.forEach(d => {
        const cvs = document.getElementById(`draw-${d.page}`);
        if (!cvs) return;
        const ctx = cvs.getContext('2d');
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';

        if (d.tool === 'highlighter') {
            ctx.globalCompositeOperation = 'multiply'; ctx.strokeStyle = '#ffff00'; ctx.lineWidth = 15; ctx.globalAlpha = 0.5;
        } else if (d.tool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out'; ctx.lineWidth = 20;
        } else {
            ctx.globalCompositeOperation = 'source-over'; ctx.strokeStyle = d.color; ctx.lineWidth = 2;
        }

        ctx.beginPath();
        if (d.points.length) ctx.moveTo(d.points[0].x, d.points[0].y);
        d.points.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.stroke();
    });

    STATE.textAnnotations.forEach(n => renderNote(n));
}

// =============================================================================
//  5. الكويز (QUIZ + EXPORT) 🎯
// =============================================================================
document.getElementById('generate-quiz-btn').onclick = async () => {
    const box = document.getElementById('quiz-container');
    box.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Génération...</div>';

    try {
        const text = await getSmartText('quiz-scope');
        const res = await callApi('ai/generate-quiz-text', { text, count: 5 });

        if (res?.questions) {
            STATE.quizData = res.questions;
            STATE.sessionData.quizzes = res.questions;
            STATE.currentQuizIndex = 0;
            renderQuiz();
            document.getElementById('download-quiz-pdf').style.display = 'block';
        } else { box.innerHTML = "Échec."; }
    } catch (e) { box.innerHTML = "Erreur AI"; }
};

function renderQuiz() {
    const box = document.getElementById('quiz-container');
    const q = STATE.quizData[STATE.currentQuizIndex];
    if (!q) return;

    const tpl = document.getElementById('quiz-card-template').content.cloneNode(true);
    tpl.querySelector('.quiz-progress').textContent = `Q ${STATE.currentQuizIndex + 1}/${STATE.quizData.length}`;
    tpl.querySelector('.question-text').textContent = q.question;

    const optsDiv = tpl.querySelector('.options-container');
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => {
            const isCorrect = q.correctOptionIndexes.includes(i);
            btn.classList.add(isCorrect ? 'correct' : 'wrong');
            tpl.querySelector('.explanation-box').style.display = 'block';
            tpl.querySelector('.explanation-box').textContent = isCorrect ? "Correct!" : "Faux.";
        };
        optsDiv.appendChild(btn);
    });

    tpl.querySelector('.btn-prev').onclick = () => { if (STATE.currentQuizIndex > 0) { STATE.currentQuizIndex--; renderQuiz(); } };
    tpl.querySelector('.btn-next').onclick = () => { if (STATE.currentQuizIndex < STATE.quizData.length - 1) { STATE.currentQuizIndex++; renderQuiz(); } };

    box.innerHTML = '';
    box.appendChild(tpl);
}

document.getElementById('download-quiz-pdf').onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 10;
    STATE.quizData.forEach((q, i) => {
        if (y > 270) { doc.addPage(); y = 10; }
        doc.setFontSize(12);
        const lines = doc.splitTextToSize(`${i + 1}. ${q.question}`, 180);
        doc.text(lines, 10, y);
        y += (lines.length * 7) + 5;
        doc.setFontSize(10);
        q.options.forEach(o => { doc.text(`- ${o}`, 15, y); y += 5; });
        y += 10;
    });
    doc.save('quiz.pdf');
};

// =============================================================================
//  6. الفلاش كاردز (FLASHCARDS) 🃏
// =============================================================================
document.getElementById('generate-flashcards-btn').onclick = async () => {
    const box = document.getElementById('flashcards-container');
    box.innerHTML = 'Génération...';
    try {
        const text = await getSmartText('cards-scope');
        const res = await callApi('ai/generate-flashcards-text', { text, count: 8 });
        STATE.flashcardsData = res.flashcards || [];
        STATE.sessionData.flashcards = STATE.flashcardsData;
        STATE.currentFlashcardIndex = 0;
        renderCard();
        document.getElementById('download-cards-pdf').style.display = 'block';
    } catch (e) { }
};

function renderCard() {
    const box = document.getElementById('flashcards-container');
    const c = STATE.flashcardsData[STATE.currentFlashcardIndex];
    if (!c) return;

    const tpl = document.getElementById('flashcard-template').content.cloneNode(true);
    tpl.querySelector('.front-content').textContent = c.front;
    tpl.querySelector('.back-content').textContent = c.back;
    tpl.querySelector('.flashcard-wrapper').onclick = function () { this.classList.toggle('flipped'); };

    box.innerHTML = '';
    box.appendChild(tpl);

    // أسهم التحكم
    const ctrls = document.createElement('div');
    ctrls.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-top:10px;">
            <button onclick="prevCard()" class="tab-btn"><i class="fas fa-arrow-left"></i></button>
            <button onclick="nextCard()" class="tab-btn"><i class="fas fa-arrow-right"></i></button>
        </div>`;
    box.appendChild(ctrls);
}

window.prevCard = () => { if (STATE.currentFlashcardIndex > 0) { STATE.currentFlashcardIndex--; renderCard(); } };
window.nextCard = () => { if (STATE.currentFlashcardIndex < STATE.flashcardsData.length - 1) { STATE.currentFlashcardIndex++; renderCard(); } };

document.getElementById('download-cards-pdf').onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    STATE.flashcardsData.forEach((c, i) => {
        doc.text(`Q: ${c.front}`, 10, (i * 30) + 10);
        doc.text(`A: ${c.back}`, 10, (i * 30) + 20);
    });
    doc.save('cards.pdf');
};

// =============================================================================
//  7. المايند ماب (MIND MAP) 🌳
// =============================================================================
document.getElementById('generate-mindmap-btn').onclick = async () => {
    const svg = document.getElementById('mindmap-svg');
    svg.innerHTML = 'Loading...';
    try {
        const text = await getSmartText('quiz-scope');
        const res = await callApi('ai/generate-mindmap-text', { text });
        STATE.sessionData.mindMapData = res.markdown;

        const { Transformer, Markmap } = window.markmap;
        const { root } = new Transformer().transform(res.markdown);
        svg.innerHTML = '';
        Markmap.create(svg, null, root);
        document.getElementById('download-map-img').style.display = 'block';
    } catch (e) { }
};

document.getElementById('download-map-img').onclick = () => {
    const svg = document.getElementById('mindmap-svg');
    const data = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(data)));
    img.onload = () => {
        const c = document.createElement('canvas'); c.width = 800; c.height = 600;
        c.getContext('2d').drawImage(img, 0, 0);
        const a = document.createElement('a'); a.download = 'map.png'; a.href = c.toDataURL(); a.click();
    };
};

// =============================================================================
//  8. الملاحظات الذكية (SMART PINS) 💡
// =============================================================================
document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    const tb = document.getElementById('selection-toolbar');

    if (!sel.isCollapsed && STATE.tool === 'cursor' && document.getElementById('pdf-wrapper').contains(sel.anchorNode)) {
        const r = sel.getRangeAt(0).getBoundingClientRect();
        STATE.selection.text = sel.toString();
        STATE.selection.rect = r;
        tb.style.display = 'flex';
        tb.style.top = (r.top + window.scrollY - 50) + 'px';
        tb.style.left = r.left + 'px';
    } else if (tb) tb.style.display = 'none';
});

window.askAiAboutSelection = async () => {
    const q = prompt("Question?");
    if (!q) return;
    const res = await callApi('ai/ask-dentist', { text: STATE.selection.text, question: q });

    // إنشاء دبوس
    const pin = { id: Date.now(), page: STATE.currentPage, x: STATE.selection.rect.left, y: STATE.selection.rect.top + window.scrollY, q, a: res.answer };
    STATE.pins.push(pin);
    renderPin(pin);
};

function renderPin(pin) {
    const el = document.createElement('div');
    el.className = 'smart-pin';
    el.innerHTML = '💡';
    el.style.left = pin.x + 'px'; el.style.top = pin.y + 'px';
    el.style.position = 'absolute';

    el.onclick = (e) => {
        e.stopPropagation();
        STATE.activePinId = pin.id;
        const pop = document.getElementById('pin-details');
        document.getElementById('pin-content').innerHTML = `<b>${pin.q}</b><br>${pin.a}`;
        pop.style.display = 'block';
        pop.style.top = (pin.y + 40) + 'px';
        pop.style.left = pin.x + 'px';
    };
    document.body.appendChild(el);
}

window.deleteActivePin = () => {
    STATE.pins = STATE.pins.filter(p => p.id !== STATE.activePinId);
    document.querySelectorAll('.smart-pin').forEach(e => e.remove());
    STATE.pins.forEach(renderPin);
    document.getElementById('pin-details').style.display = 'none';
};

// =============================================================================
//  9. الحفظ والاسترجاع (SAVE/LOAD) 💾
// =============================================================================
document.getElementById('save-progress-btn').onclick = async () => {
    if (!STATE.fileHash) return alert("Pas de fichier");
    await callApi('progress/save', {
        lessonId: STATE.fileHash,
        progressData: {
            drawings: STATE.drawings,
            textAnnotations: STATE.textAnnotations,
            pins: STATE.pins,
            quizzes: STATE.sessionData.quizzes,
            flashcards: STATE.sessionData.flashcards,
            mindMapData: STATE.sessionData.mindMapData
        }
    });
    alert("Sauvegardé !");
};

async function loadSavedProgress() {
    if (!STATE.fileHash) return;
    try {
        const token = localStorage.getItem('userToken');
        const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const d = await res.json();
        if (d.success && d.data) {
            const data = d.data.progressData || d.data;
            STATE.drawings = data.drawings || [];
            STATE.textAnnotations = data.textAnnotations || [];
            redrawAll();

            STATE.pins = data.pins || [];
            STATE.pins.forEach(renderPin);

            if (data.quizzes) {
                STATE.sessionData.quizzes = data.quizzes;
                document.getElementById('restore-quiz-btn').style.display = 'block';
            }
            if (data.flashcards) {
                STATE.sessionData.flashcards = data.flashcards;
                document.getElementById('restore-cards-btn').style.display = 'block';
            }
            if (data.mindMapData) {
                STATE.sessionData.mindMapData = data.mindMapData;
                document.getElementById('restore-map-btn').style.display = 'block';
            }
        }
    } catch (e) { }
}

// Restore Handlers
document.getElementById('restore-quiz-btn').onclick = () => {
    STATE.quizData = STATE.sessionData.quizzes;
    STATE.currentQuizIndex = 0;
    renderQuizCard();
    document.getElementById('restore-quiz-btn').style.display = 'none';
};
document.getElementById('restore-cards-btn').onclick = () => {
    STATE.flashcardsData = STATE.sessionData.flashcards;
    STATE.currentFlashcardIndex = 0;
    renderCard();
    document.getElementById('restore-cards-btn').style.display = 'none';
};
document.getElementById('restore-map-btn').onclick = () => {
    document.getElementById('generate-mindmap-btn').click(); // Re-trigger logic or direct render
    document.getElementById('restore-map-btn').style.display = 'none';
};
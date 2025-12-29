// =============================================================================
//  SMART DENTAL VIEWER - ULTIMATE INTEGRATED CONTROLLER
//  Combined: Token Auth (Working) + Drawing Tools + Smart Pins + AI Features
// =============================================================================

const API_BASE_URL = "https://dental-app-he1p.onrender.com";

// إعداد PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// --- Global State ---
const STATE = {
    pdfDoc: null,
    fileHash: null,
    scale: 1.2,
    currentPage: 1,

    // Drawing
    tool: null,       // 'pen', 'highlighter', 'eraser'
    isDrawing: false,
    drawings: [],

    // Content
    quizData: [],
    currentQuizIndex: 0,
    userAnswers: {},
    flashcardsData: [],
    currentFlashcardIndex: 0,
    mindMapData: null,

    // Smart Pins
    pins: [],
    activePinId: null,
    selection: { text: '', rect: null },

    // Session
    sessionData: { quizzes: [], flashcards: [], mindMapData: null }
};

// =============================================================================
//  1. الاتصال الآمن (Token Based - The Fix) 🔌
// =============================================================================

async function callApi(endpoint, body = {}) {
    // 🔥 1. جلب التوكن (نفس طريقة script.js الناجحة)
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
                'Authorization': `Bearer ${token}` // ✅ المفتاح السحري
            },
            body: JSON.stringify(body)
        });

        if (res.status === 401) {
            alert("Session expirée. Veuillez vous reconnecter.");
            throw new Error("Unauthorized");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}

async function getSmartText(scopeInputName) {
    if (!STATE.pdfDoc) return "";
    const scopeEl = document.querySelector(`input[name="${scopeInputName}"]:checked`);
    const scope = scopeEl ? scopeEl.value : 'page';
    let text = "";

    if (scope === 'page') {
        const page = await STATE.pdfDoc.getPage(STATE.currentPage);
        const content = await page.getTextContent();
        text = content.items.map(i => i.str).join(' ');
    } else {
        const maxPages = Math.min(STATE.pdfDoc.numPages, 10);
        for (let i = 1; i <= maxPages; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(' ') + "\n";
        }
    }
    return text;
}

// =============================================================================
//  2. تحميل PDF والعرض 🎨
// =============================================================================

const fileInput = document.getElementById('file-input');

if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const arrayBuffer = await file.arrayBuffer();
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(arrayBuffer);
        STATE.fileHash = spark.end();

        const loadingTask = pdfjsLib.getDocument(arrayBuffer);
        STATE.pdfDoc = await loadingTask.promise;

        const container = document.getElementById('pdf-wrapper');
        container.innerHTML = '';

        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            await renderPage(i, container);
        }

        setupPageObserver();
        loadSavedProgress();
    });
}

async function renderPage(num, container) {
    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });

    const wrapper = document.createElement('div');
    wrapper.className = 'page-container';
    wrapper.id = `page-${num}`;
    wrapper.style.width = `${viewport.width}px`;
    wrapper.style.height = `${viewport.height}px`;
    wrapper.style.marginBottom = '20px';
    wrapper.style.position = 'relative';

    // 1. PDF Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // 2. Text Layer
    const textLayer = document.createElement('div');
    textLayer.className = 'textLayer';
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;
    textLayer.style.setProperty('--scale-factor', STATE.scale);

    // 3. Draw Layer (للرسم)
    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'drawLayer';
    drawCanvas.id = `draw-${num}`;
    drawCanvas.width = viewport.width;
    drawCanvas.height = viewport.height;
    drawCanvas.style.position = 'absolute';
    drawCanvas.style.top = '0';
    drawCanvas.style.left = '0';
    drawCanvas.style.pointerEvents = 'none'; // الماوس يمر عبرها إلا إذا فعلنا القلم
    drawCanvas.style.zIndex = '10';

    wrapper.append(canvas, textLayer, drawCanvas);
    container.appendChild(wrapper);

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

function setupPageObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                STATE.currentPage = parseInt(entry.target.id.split('-')[1]);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.page-container').forEach(p => observer.observe(p));
}

// =============================================================================
//  3. منطق الرسم (Drawing Logic) ✏️
// =============================================================================

window.setTool = function (t) {
    STATE.tool = (STATE.tool === t) ? null : t;

    // تحديث الأزرار
    ['pen', 'highlighter', 'eraser'].forEach(id => {
        const btn = document.getElementById(`btn-${id}`);
        if (btn) btn.classList.toggle('active', STATE.tool === id);
    });

    // التحكم في طبقات الرسم
    document.querySelectorAll('.drawLayer').forEach(el => {
        el.style.pointerEvents = STATE.tool ? 'auto' : 'none'; // تفعيل الماوس فقط عند الرسم
        el.style.cursor = STATE.tool ? 'crosshair' : 'default';
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
        if (STATE.tool === 'pen') {
            ctx.strokeStyle = document.getElementById('color-picker')?.value || '#ff0000';
            ctx.lineWidth = 2; ctx.globalCompositeOperation = 'source-over';
        } else if (STATE.tool === 'highlighter') {
            ctx.strokeStyle = 'rgba(255, 255, 0, 0.4)';
            ctx.lineWidth = 15; ctx.globalCompositeOperation = 'multiply';
        } else {
            ctx.lineWidth = 20; ctx.globalCompositeOperation = 'destination-out';
        }

        ctx.beginPath(); ctx.moveTo(lastX, lastY); ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke();

        if (STATE.drawings.length > 0) {
            STATE.drawings[STATE.drawings.length - 1].points.push({ x: e.offsetX, y: e.offsetY });
        }
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mouseup', () => STATE.isDrawing = false);
    canvas.addEventListener('mouseleave', () => STATE.isDrawing = false);
}

function redrawAllDrawings() {
    STATE.drawings.forEach(d => {
        const cvs = document.getElementById(`draw-${d.page}`);
        if (!cvs) return;
        const ctx = cvs.getContext('2d');
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';

        if (d.tool === 'pen') {
            ctx.strokeStyle = d.color; ctx.lineWidth = 2; ctx.globalCompositeOperation = 'source-over';
        } else if (d.tool === 'highlighter') {
            ctx.strokeStyle = 'rgba(255, 255, 0, 0.4)'; ctx.lineWidth = 15; ctx.globalCompositeOperation = 'multiply';
        } else {
            ctx.lineWidth = 20; ctx.globalCompositeOperation = 'destination-out';
        }

        ctx.beginPath();
        if (d.points.length > 0) ctx.moveTo(d.points[0].x, d.points[0].y);
        for (let i = 1; i < d.points.length; i++) ctx.lineTo(d.points[i].x, d.points[i].y);
        ctx.stroke();
    });
}

// =============================================================================
//  4. الملاحظات الذكية (Smart Pins) 💡
// =============================================================================

document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    const toolbar = document.getElementById('selection-toolbar');

    if (sel.isCollapsed || !document.getElementById('pdf-wrapper')?.contains(sel.anchorNode)) {
        if (toolbar) toolbar.style.display = 'none';
        return;
    }

    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    STATE.selection.text = sel.toString();

    if (toolbar) {
        toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
        toolbar.style.left = `${rect.left + (rect.width / 2) - 50}px`;
        toolbar.style.display = 'flex';
    }
});

window.askAiAboutSelection = async function () {
    document.getElementById('selection-toolbar').style.display = 'none';
    const q = prompt("Posez votre question sur ce texte:");
    if (!q) return;

    const modal = document.getElementById('ai-modal');
    const answerBox = document.getElementById('ai-answer-text');
    modal.style.display = 'flex';
    answerBox.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Réflexion...';

    try {
        const res = await callApi('ai/ask-dentist', { text: STATE.selection.text, question: q });
        const ans = res.answer || "Pas de réponse.";
        answerBox.innerHTML = marked.parse(ans);

        // إنشاء المصباح
        createPin(STATE.selection.rect, q, ans);
    } catch (e) {
        answerBox.textContent = "Erreur: " + e.message;
    }
};

function createPin(rect, q, a) {
    const wrappers = document.querySelectorAll('.page-container');
    let page = 1, x = 0, y = 0;

    wrappers.forEach(w => {
        const r = w.getBoundingClientRect();
        if (rect.top >= r.top && rect.top <= r.bottom) {
            page = parseInt(w.id.split('-')[1]);
            x = rect.left - r.left + (rect.width / 2);
            y = rect.top - r.top;
        }
    });

    const pin = { id: Date.now(), page, x, y, q, a };
    STATE.pins.push(pin);
    renderPin(pin);
}

function renderPin(pin) {
    const wrap = document.getElementById(`page-${pin.page}`);
    if (!wrap) return;

    const el = document.createElement('div');
    el.className = 'smart-pin';
    el.innerHTML = '<i class="fas fa-lightbulb"></i>';
    el.style.left = `${pin.x}px`;
    el.style.top = `${pin.y}px`;

    el.onclick = (e) => { e.stopPropagation(); showPin(pin, el); };
    wrap.appendChild(el);
}

function showPin(pin, el) {
    STATE.activePinId = pin.id;
    const pop = document.getElementById('pin-details');
    const rect = el.getBoundingClientRect();

    document.getElementById('pin-content').innerHTML = `<b>Q: ${pin.q}</b><br>${marked.parse(pin.a)}`;
    pop.style.display = 'block';
    pop.style.top = `${rect.bottom + window.scrollY + 10}px`;
    pop.style.left = `${rect.left}px`;
}

window.deleteActivePin = function () {
    STATE.pins = STATE.pins.filter(p => p.id !== STATE.activePinId);
    // إعادة رسم المصابيح
    document.querySelectorAll('.smart-pin').forEach(el => el.remove());
    STATE.pins.forEach(renderPin);
    document.getElementById('pin-details').style.display = 'none';
};

// =============================================================================
//  5. Content Generation (Quiz, Cards, Map) 🧠
// =============================================================================

// Quiz
document.getElementById('generate-quiz-btn').onclick = async () => {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '<div style="text-align:center;"><i class="fas fa-spinner fa-spin"></i> Génération...</div>';
    try {
        const text = await getSmartText('quiz-scope');
        const res = await callApi('ai/generate-quiz-text', { text, count: 5 });
        STATE.quizData = res.questions || [];
        if (STATE.quizData.length) {
            STATE.sessionData.quizzes = STATE.quizData;
            renderQuizList(container);
        }
    } catch (e) { container.innerHTML = "Erreur."; }
};

function renderQuizList(container) {
    container.innerHTML = '';
    STATE.quizData.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'quiz-card';
        div.innerHTML = `
            <div style="font-weight:bold; margin-bottom:10px;">Q${i + 1}: ${q.question}</div>
            ${q.options.map(opt => `<div class="option-btn">${opt}</div>`).join('')}
            <div style="margin-top:10px; font-size:12px; color:#10b981;">Correct: ${q.options[q.correctOptionIndexes[0]]}</div>
        `;
        container.appendChild(div);
    });
}

// Flashcards
document.getElementById('generate-flashcards-btn').onclick = async () => {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '<div style="text-align:center;"><i class="fas fa-spinner fa-spin"></i> Génération...</div>';
    try {
        const text = await getSmartText('cards-scope');
        const res = await callApi('ai/generate-flashcards-text', { text, count: 8 });
        STATE.flashcardsData = res.flashcards || [];
        if (STATE.flashcardsData.length) {
            STATE.sessionData.flashcards = STATE.flashcardsData;
            renderFlashcardsList(container);
        }
    } catch (e) { container.innerHTML = "Erreur."; }
};

function renderFlashcardsList(container) {
    container.innerHTML = '';
    STATE.flashcardsData.forEach(c => {
        const div = document.createElement('div');
        div.className = 'flashcard';
        div.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-face flashcard-front">${c.front}</div>
                <div class="flashcard-face flashcard-back">${c.back}</div>
            </div>
        `;
        div.onclick = () => div.classList.toggle('flipped');
        container.appendChild(div);
    });
}

// Mind Map
document.getElementById('generate-mindmap-btn').onclick = async () => {
    const svgEl = document.getElementById('mindmap-svg');
    svgEl.innerHTML = '';
    try {
        const text = await getSmartText('quiz-scope');
        const res = await callApi('ai/generate-mindmap-text', { text });
        const markdown = res.markdown || res.data;
        STATE.sessionData.mindMapData = markdown;

        const { Transformer, Markmap } = window.markmap;
        const transformer = new Transformer();
        const { root } = transformer.transform(markdown);
        Markmap.create(svgEl, null, root);
    } catch (e) { alert("Erreur Mind Map"); }
};

// =============================================================================
//  6. الحفظ والاسترجاع 💾
// =============================================================================

document.getElementById('save-progress-btn').onclick = async () => {
    if (!STATE.fileHash) return alert("Aucun fichier !");
    try {
        const payload = {
            drawings: STATE.drawings,
            pins: STATE.pins,
            quizzes: STATE.sessionData.quizzes,
            flashcards: STATE.sessionData.flashcards,
            mindMapData: STATE.sessionData.mindMapData
        };
        const res = await callApi('progress/save', { lessonId: STATE.fileHash, progressData: payload });
        if (res.success) alert("Sauvegardé !");
    } catch (e) { alert("Erreur sauvegarde"); }
};

async function loadSavedProgress() {
    if (!STATE.fileHash) return;
    try {
        const token = localStorage.getItem('userToken');
        if (!token) return;
        const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const json = await res.json();
        if (json.success && json.data) {
            const data = json.data.progressData || json.data;
            STATE.drawings = data.drawings || [];
            redrawAllDrawings();

            STATE.pins = data.pins || [];
            STATE.pins.forEach(renderPin);

            if (data.quizzes?.length) {
                STATE.sessionData.quizzes = data.quizzes;
                document.getElementById('restore-quiz-btn').style.display = 'flex';
            }
            if (data.flashcards?.length) {
                STATE.sessionData.flashcards = data.flashcards;
                document.getElementById('restore-cards-btn').style.display = 'flex';
            }
            if (data.mindMapData) {
                STATE.sessionData.mindMapData = data.mindMapData;
                document.getElementById('restore-map-btn').style.display = 'flex';
            }
        }
    } catch (e) { console.log("New Session"); }
}

// Restore Buttons Logic
document.getElementById('restore-quiz-btn').onclick = () => {
    STATE.quizData = STATE.sessionData.quizzes;
    renderQuizList(document.getElementById('quiz-container'));
    document.getElementById('restore-quiz-btn').style.display = 'none';
};
document.getElementById('restore-cards-btn').onclick = () => {
    STATE.flashcardsData = STATE.sessionData.flashcards;
    renderFlashcardsList(document.getElementById('flashcards-container'));
    document.getElementById('restore-cards-btn').style.display = 'none';
};
document.getElementById('restore-map-btn').onclick = () => {
    const { Transformer, Markmap } = window.markmap;
    const { root } = new Transformer().transform(STATE.sessionData.mindMapData);
    Markmap.create(document.getElementById('mindmap-svg'), null, root);
    document.getElementById('restore-map-btn').style.display = 'none';
};
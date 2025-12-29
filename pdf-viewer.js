// =============================================================================
//  SMART CORE - FINAL FIXED LOGIC
// =============================================================================

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const STATE = {
    pdfDoc: null,
    fileHash: null,
    scale: 1.2,
    tool: null,
    isDrawing: false,
    drawings: [],
    pins: [],
    quizData: [],
    flashcardsData: [],
    mindMapMd: "",
    selection: { text: '', rect: null },
    activePinId: null
};

// 1. UPLOAD & AUTH CHECK
async function handleFileUpload(input) {
    const file = input.files[0];
    if (!file) return;

    const statusEl = document.getElementById('upload-status');
    statusEl.textContent = "Traitement en cours...";

    try {
        const arrayBuffer = await file.arrayBuffer();

        // حساب الهاش
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(arrayBuffer);
        STATE.fileHash = spark.end();

        // تحميل PDF
        const loadingTask = pdfjsLib.getDocument(arrayBuffer);
        STATE.pdfDoc = await loadingTask.promise;

        document.getElementById('landing-overlay').style.display = 'none';
        document.getElementById('page-count').textContent = STATE.pdfDoc.numPages;

        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            await renderPage(i);
        }

        // محاولة استرجاع البيانات
        await loadSession();

    } catch (e) {
        statusEl.innerHTML = `<span style="color:red">Erreur: ${e.message}</span>`;
    }
}

// 2. RENDER PAGE (FIXED SELECTION)
async function renderPage(num) {
    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });

    const wrapper = document.createElement('div');
    wrapper.className = 'page-wrapper';
    wrapper.id = `page-${num}`;
    wrapper.style.width = `${viewport.width}px`;
    wrapper.style.height = `${viewport.height}px`;
    wrapper.style.marginBottom = '20px';

    // طبقة الكانفاس (الصورة)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // طبقة النص (للتحديد) - ✅ الحل هنا
    const textLayer = document.createElement('div');
    textLayer.className = 'textLayer';
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;
    // 🔥 هذا السطر هو الذي يصلح مشكلة التحديد في الإصدارات الجديدة
    textLayer.style.setProperty('--scale-factor', STATE.scale);

    // طبقة الرسم
    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'drawLayer';
    drawCanvas.id = `draw-${num}`;
    drawCanvas.width = viewport.width;
    drawCanvas.height = viewport.height;

    wrapper.append(canvas, textLayer, drawCanvas);
    document.getElementById('pdf-container').appendChild(wrapper);

    await page.render({ canvasContext: ctx, viewport }).promise;

    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayer,
        viewport: viewport,
        textDivs: []
    });

    setupDrawing(drawCanvas, num);
}

// 3. DRAWING
function setTool(t) {
    STATE.tool = (STATE.tool === t) ? null : t;
    ['pen', 'highlighter', 'eraser'].forEach(id => {
        document.getElementById(`btn-${id}`).style.background = (STATE.tool === id) ? '#eff6ff' : '';
    });
    // تفعيل استقبال الماوس لطبقة الرسم فقط عند اختيار أداة
    document.querySelectorAll('.drawLayer').forEach(el => el.classList.toggle('drawing', !!STATE.tool));
}

function setupDrawing(canvas, pageNum) {
    const ctx = canvas.getContext('2d');
    let lastX, lastY;

    canvas.addEventListener('mousedown', e => {
        if (!STATE.tool) return;
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
        if (!STATE.isDrawing || !STATE.tool) return;

        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        if (STATE.tool === 'pen') {
            ctx.strokeStyle = document.getElementById('color-picker').value; ctx.lineWidth = 2; ctx.globalCompositeOperation = 'source-over';
        } else if (STATE.tool === 'highlighter') {
            ctx.strokeStyle = 'rgba(255, 255, 0, 0.4)'; ctx.lineWidth = 15; ctx.globalCompositeOperation = 'multiply';
        } else {
            ctx.lineWidth = 20; ctx.globalCompositeOperation = 'destination-out';
        }

        ctx.beginPath(); ctx.moveTo(lastX, lastY); ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke();
        STATE.drawings[STATE.drawings.length - 1].points.push({ x: e.offsetX, y: e.offsetY });
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

// 4. SMART SELECTION (ASK AI)
document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    const toolbar = document.getElementById('smart-toolbar');

    // إخفاء الزر إذا لم يكن هناك تحديد
    if (sel.isCollapsed || !document.getElementById('pdf-container').contains(sel.anchorNode)) {
        toolbar.style.display = 'none'; return;
    }

    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    STATE.selection.text = sel.toString();
    STATE.selection.rect = rect;

    toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
    toolbar.style.left = `${rect.left + (rect.width / 2) - 40}px`;
    toolbar.style.display = 'block';
});

function askDentistAI() {
    document.getElementById('ai-context-preview').textContent = STATE.selection.text.substring(0, 100) + '...';
    document.getElementById('ai-modal').style.display = 'flex';
    document.getElementById('smart-toolbar').style.display = 'none';
}

async function submitAiQuestion() {
    const q = document.getElementById('ai-question').value;
    const box = document.getElementById('ai-response-area');
    box.style.display = 'block'; box.innerHTML = 'Réflexion...';

    try {
        // ✅ إضافة credentials
        const res = await fetch('/api/ai/ask-dentist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ text: STATE.selection.text, question: q })
        });

        if (res.status === 401) throw new Error("Veuillez vous connecter.");

        const data = await res.json();
        const ans = data.answer || "Erreur";
        box.innerHTML = marked.parse(ans);
        createPin(STATE.selection.rect, q, ans);
    } catch (e) { box.innerHTML = e.message; }
}

function createPin(rect, q, a) {
    const wrappers = document.querySelectorAll('.page-wrapper');
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
    el.style.left = `${pin.x}px`; el.style.top = `${pin.y}px`;
    el.dataset.id = pin.id;
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

function deleteActivePin() {
    STATE.pins = STATE.pins.filter(p => p.id !== STATE.activePinId);
    document.querySelector(`.smart-pin[data-id="${STATE.activePinId}"]`).remove();
    document.getElementById('pin-details').style.display = 'none';
}

// 5. GENERATION
async function generateContent(type) {
    let endpoint = type === 'quiz' ? 'generate-quiz-text' : type === 'flashcards' ? 'generate-flashcards-text' : 'generate-mindmap-text';
    const container = document.getElementById(type === 'quiz' ? 'quiz-results' : type === 'flashcards' ? 'cards-results' : 'markmap-svg');
    container.innerHTML = 'Chargement AI...';

    // جمع نص مبسط
    let text = "";
    for (let i = 1; i <= Math.min(STATE.pdfDoc.numPages, 10); i++) {
        const p = await STATE.pdfDoc.getPage(i);
        const t = await p.getTextContent();
        text += t.items.map(s => s.str).join(' ') + "\n";
    }

    try {
        // ✅ إضافة credentials
        const res = await fetch(`/api/ai/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ text, count: 5 })
        });

        if (res.status === 401) throw new Error("Veuillez vous connecter.");

        const data = await res.json();

        if (type === 'quiz') { STATE.quizData = data.questions; renderQuiz(data.questions); }
        else if (type === 'flashcards') { STATE.flashcardsData = data.flashcards; renderCards(data.flashcards); }
        else { STATE.mindMapMd = data.markdown; renderMap(data.markdown); }
    } catch (e) { container.innerHTML = "Erreur: " + e.message; }
}

function renderQuiz(qs) {
    const div = document.getElementById('quiz-results'); div.innerHTML = '';
    qs?.forEach((q, i) => {
        div.innerHTML += `<div style="background:white; padding:10px; margin-bottom:5px; border:1px solid #eee;"><b>Q${i + 1}</b> ${q.question}</div>`;
    });
}
function renderCards(cs) {
    const div = document.getElementById('cards-results'); div.innerHTML = '';
    cs?.forEach(c => {
        div.innerHTML += `<div style="background:white; padding:10px; margin-bottom:5px; border:1px solid #eee;"><b>F:</b> ${c.front}<br><b>B:</b> ${c.back}</div>`;
    });
}
function renderMap(md) {
    document.getElementById('markmap-svg').innerHTML = '';
    const { Transformer, Markmap } = window.markmap;
    const { root } = new Transformer().transform(md);
    Markmap.create(document.getElementById('markmap-svg'), null, root);
}

// 6. SAVE & LOAD
async function saveSession() {
    if (!STATE.fileHash) return alert("Pas de fichier !");

    const payload = {
        fileHash: STATE.fileHash,
        drawings: STATE.drawings,
        pins: STATE.pins,
        quizData: STATE.quizData,
        flashcardsData: STATE.flashcardsData,
        mindMapMd: STATE.mindMapMd
    };

    try {
        // ✅ إضافة credentials
        const res = await fetch('/api/progress/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ lessonId: STATE.fileHash, progressData: payload })
        });

        if (res.status === 401) return alert("Non connecté !");

        const data = await res.json();
        if (data.success) alert("Sauvegardé !");
    } catch (e) { alert("Erreur réseau"); }
}

async function loadSession() {
    if (!STATE.fileHash) return;

    try {
        // ✅ إضافة credentials وتغيير المتغير إلى lessonId
        const res = await fetch(`/api/progress?lessonId=${STATE.fileHash}`, {
            credentials: 'include'
        });

        // 🔥 التعامل مع الخطأ 401 (غير مسجل دخول)
        if (res.status === 401) {
            document.getElementById('landing-overlay').style.display = 'flex';
            document.getElementById('upload-status').innerHTML = `
                <div style="color:red; font-weight:bold;">Vous n'êtes pas connecté !</div>
                <a href="http://localhost:5000/auth/google" target="_blank" 
                   style="display:inline-block; margin-top:10px; padding:10px 20px; background:#2563eb; color:white; text-decoration:none; border-radius:5px;">
                   Se connecter avec Google
                </a>
                <p style="font-size:12px; margin-top:5px;">Rafraîchissez la page après connexion.</p>
            `;
            return;
        }

        const data = await res.json();
        if (data.success && data.data) {
            const content = data.data.progressData || data.data;
            STATE.drawings = content.drawings || [];
            STATE.pins = content.pins || [];
            STATE.quizData = content.quizData || [];
            STATE.flashcardsData = content.flashcardsData || [];
            STATE.mindMapMd = content.mindMapMd || "";

            redrawAll();
            STATE.pins.forEach(renderPin);
            if (STATE.quizData.length) renderQuiz(STATE.quizData);
            if (STATE.flashcardsData.length) renderCards(STATE.flashcardsData);
            if (STATE.mindMapMd) renderMap(STATE.mindMapMd);
        }
    } catch (e) { console.log("Nouvelle session"); }
}

// UI
function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${id}`).classList.add('active');
    event.target.classList.add('active');
}
function toggleFocus() { document.body.classList.toggle('focus-mode'); }
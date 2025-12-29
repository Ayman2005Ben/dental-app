// =============================================================================
//  SMART CORE - LOGIC CONTROLLER
//  Features: Local Upload, MD5 Hashing, Full Persistence, AI Generation
// =============================================================================

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const STATE = {
    pdfDoc: null,
    fileHash: null, // بصمة الملف للتعرف عليه
    fileName: "Document",
    scale: 1.2,
    tool: null,
    isDrawing: false,
    // --- بيانات الحفظ ---
    drawings: [],      // الرسم
    pins: [],          // المصابيح
    quizData: [],      // الكويزات المحفوظة
    flashcardsData: [],// الفلاش كاردز المحفوظة
    mindMapMd: "",     // نص المايند ماب
    // -------------------
    selection: { text: '', rect: null },
    activePinId: null
};

// =============================================================================
//  1. FILE UPLOAD & HASHING (الرفع والتعرف)
// =============================================================================

async function handleFileUpload(input) {
    const file = input.files[0];
    if (!file) return;

    document.getElementById('upload-status').textContent = "Analyse du fichier...";
    STATE.fileName = file.name;
    document.getElementById('file-name-display').textContent = file.name;

    try {
        // 1. قراءة الملف كـ ArrayBuffer
        const arrayBuffer = await file.arrayBuffer();

        // 2. حساب البصمة (Hash) للتعرف على الملف مستقبلاً
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(arrayBuffer);
        STATE.fileHash = spark.end(); // مثلا: "d41d8cd98f00b204e9800998ecf8427e"
        console.log("File Hash:", STATE.fileHash);

        // 3. تحميل PDF
        const loadingTask = pdfjsLib.getDocument(arrayBuffer);
        STATE.pdfDoc = await loadingTask.promise;

        // 4. إخفاء شاشة الترحيب وعرض القارئ
        document.getElementById('landing-overlay').style.display = 'none';
        document.getElementById('page-count').textContent = STATE.pdfDoc.numPages;

        // 5. عرض الصفحات
        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            await renderPage(i);
        }

        // 6. استرجاع البيانات القديمة لهذا الملف (من السيرفر)
        await loadSession();

    } catch (e) {
        console.error(e);
        alert("Erreur lors de l'ouverture du fichier.");
        document.getElementById('upload-status').textContent = "";
    }
}

// =============================================================================
//  2. RENDERING
// =============================================================================

async function renderPage(num) {
    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });

    const wrapper = document.createElement('div');
    wrapper.className = 'page-wrapper';
    wrapper.id = `page-${num}`;
    wrapper.style.width = `${viewport.width}px`;
    wrapper.style.height = `${viewport.height}px`;
    wrapper.style.marginBottom = '20px';

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const textLayer = document.createElement('div');
    textLayer.className = 'textLayer';
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;

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

// =============================================================================
//  3. DRAWING LOGIC (الرسم)
// =============================================================================

function setTool(t) {
    STATE.tool = (STATE.tool === t) ? null : t;
    ['pen', 'highlighter', 'eraser'].forEach(id => document.getElementById(`btn-${id}`).classList.toggle('active', STATE.tool === id));
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

// =============================================================================
//  4. ASK DENTIST AI (Smart Pins)
// =============================================================================

document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    const toolbar = document.getElementById('smart-toolbar');
    if (sel.isCollapsed || !document.getElementById('pdf-container').contains(sel.anchorNode)) {
        toolbar.style.display = 'none'; return;
    }
    const rect = sel.getRangeAt(0).getBoundingClientRect();
    STATE.selection.text = sel.toString();
    STATE.selection.rect = rect;
    toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
    toolbar.style.left = `${rect.left + (rect.width / 2) - 60}px`;
    toolbar.style.display = 'flex';
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
        const res = await fetch('/api/ai/ask-dentist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: STATE.selection.text, question: q })
        });
        const data = await res.json();
        const ans = data.answer || "Erreur";
        box.innerHTML = marked.parse(ans);

        // إنشاء المصباح
        createPin(STATE.selection.rect, q, ans);
    } catch (e) { box.innerHTML = "Erreur API"; }
}

function createPin(rect, q, a) {
    // تحديد مكان المصباح
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

// =============================================================================
//  5. CONTENT GENERATION (Quiz, Cards, Map)
// =============================================================================

async function generateContent(type) {
    let endpoint = type === 'quiz' ? 'generate-quiz-text' : type === 'flashcards' ? 'generate-flashcards-text' : 'generate-mindmap-text';
    const container = document.getElementById(type === 'quiz' ? 'quiz-results' : type === 'flashcards' ? 'cards-results' : 'markmap-svg');
    container.innerHTML = 'Chargement AI...';

    // جمع النص (صفحة واحدة أو الكل)
    // هنا سنستخدم منطق بسيط: الصفحة الأولى فقط كعينة، أو حلقة كاملة
    // لتحسين الأداء نأخذ أول 15 صفحة فقط كمثال
    let text = "";
    const max = Math.min(STATE.pdfDoc.numPages, 15);
    for (let i = 1; i <= max; i++) {
        const p = await STATE.pdfDoc.getPage(i);
        const t = await p.getTextContent();
        text += t.items.map(s => s.str).join(' ') + "\n";
    }

    try {
        const res = await fetch(`/api/ai/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, count: 5 })
        });
        const data = await res.json();

        if (type === 'quiz') {
            STATE.quizData = data.questions; // حفظ في الحالة
            renderQuiz(data.questions);
        } else if (type === 'flashcards') {
            STATE.flashcardsData = data.flashcards; // حفظ في الحالة
            renderCards(data.flashcards);
        } else {
            STATE.mindMapMd = data.markdown; // حفظ في الحالة
            renderMap(data.markdown);
        }
    } catch (e) { container.innerHTML = "Erreur: " + e.message; }
}

function renderQuiz(qs) {
    const div = document.getElementById('quiz-results'); div.innerHTML = '';
    if (!qs) return;
    qs.forEach((q, i) => {
        div.innerHTML += `<div style="background:white; padding:10px; margin-bottom:10px; border-radius:8px; border:1px solid #eee;">
            <b>Q${i + 1}: ${q.question}</b><br>
            <small style="color:green">Rep: ${q.correctOptionIndexes.map(x => q.options[x]).join(',')}</small>
        </div>`;
    });
}

function renderCards(cs) {
    const div = document.getElementById('cards-results'); div.innerHTML = '';
    if (!cs) return;
    cs.forEach(c => {
        div.innerHTML += `<div style="background:white; padding:10px; margin-bottom:10px; border-radius:8px; border:1px solid #eee;">
            <b>Face:</b> ${c.front}<br><b>Dos:</b> ${c.back}
        </div>`;
    });
}

function renderMap(md) {
    const svg = document.getElementById('markmap-svg'); svg.innerHTML = '';
    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    const { root } = transformer.transform(md);
    Markmap.create(svg, null, root);
    document.getElementById('dl-map-btn').style.display = 'flex'; // إظهار زر التحميل
}

function downloadMindMap() {
    const blob = new Blob([STATE.mindMapMd], { type: 'text/markdown' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${STATE.fileName}_map.md`;
    a.click();
}

// =============================================================================
//  6. SAVE & LOAD (Global Persistence)
// =============================================================================

async function saveSession() {
    if (!STATE.fileHash) { alert("Aucun fichier ouvert !"); return; }

    // تجميع كل البيانات
    const payload = {
        fileHash: STATE.fileHash, // المفتاح الرئيسي
        drawings: STATE.drawings,
        pins: STATE.pins,
        quizData: STATE.quizData,
        flashcardsData: STATE.flashcardsData,
        mindMapMd: STATE.mindMapMd
    };

    try {
        await fetch('/api/progress/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ progressData: payload })
        });
        alert("Tout est sauvegardé ! (Dessins, Quiz, Cartes, Map)");
    } catch (e) { alert("Erreur de sauvegarde"); }
}

async function loadSession() {
    if (!STATE.fileHash) return;

    try {
        // نرسل الـ Hash للسيرفر ليجلب بيانات هذا الملف تحديداً
        const res = await fetch(`/api/progress?hash=${STATE.fileHash}`);
        const data = await res.json();

        if (data.progressData) {
            const p = data.progressData;
            // استعادة الحالة
            STATE.drawings = p.drawings || [];
            STATE.pins = p.pins || [];
            STATE.quizData = p.quizData || [];
            STATE.flashcardsData = p.flashcardsData || [];
            STATE.mindMapMd = p.mindMapMd || "";

            // إعادة الرسم والعرض
            redrawAll();
            STATE.pins.forEach(renderPin);
            if (STATE.quizData.length) renderQuiz(STATE.quizData);
            if (STATE.flashcardsData.length) renderCards(STATE.flashcardsData);
            if (STATE.mindMapMd) renderMap(STATE.mindMapMd);

            console.log("Session restaurée avec succès !");
        }
    } catch (e) { console.log("Nouvelle session."); }
}

// =============================================================================
//  7. UI HELPERS
// =============================================================================
function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${id}`).classList.add('active');
    event.target.classList.add('active');
}

function toggleFocus() {
    document.body.classList.toggle('focus-mode');
}

function closeAiModal() {
    document.getElementById('ai-modal').style.display = 'none';
}
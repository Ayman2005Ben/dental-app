// =============================================================================
//  SMART CORE - CONTROLLER (Final Version for Vercel/Render)
// =============================================================================

// ✅ تم وضع رابط سيرفرك تلقائياً بناءً على بياناتك السابقة
const API_BASE_URL = "https://dental-app-he1p.onrender.com";

// إعداد مكتبة PDF
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

// =============================================================================
//  1. UPLOAD & HASHING (الرفع والتعرف على الملف)
// =============================================================================

async function handleFileUpload(input) {
    const file = input.files[0];
    if (!file) return;

    const statusEl = document.getElementById('upload-status');
    statusEl.innerHTML = '<span style="color:#2563eb; font-weight:bold;"><i class="fas fa-spinner fa-spin"></i> Connexion au serveur...</span>';

    try {
        const arrayBuffer = await file.arrayBuffer();

        // 1. حساب البصمة
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(arrayBuffer);
        STATE.fileHash = spark.end();

        // 2. تحميل الـ PDF
        const loadingTask = pdfjsLib.getDocument(arrayBuffer);
        STATE.pdfDoc = await loadingTask.promise;

        // 3. تحديث الواجهة
        document.getElementById('landing-overlay').style.display = 'none';
        document.getElementById('file-name-display').textContent = file.name;
        document.getElementById('page-count').textContent = STATE.pdfDoc.numPages;
        document.getElementById('page-num').textContent = "1";

        // 4. عرض الصفحات
        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            await renderPage(i);
        }

        // 5. استرجاع البيانات من السيرفر
        await loadSession();

    } catch (e) {
        console.error(e);
        statusEl.innerHTML = `<span style="color:red">Erreur: ${e.message}</span>`;
    }
}

// =============================================================================
//  2. RENDERING (عرض الصفحات مع إصلاح التحديد)
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

    // ✅ FIX: إصلاح مشكلة تحديد النص
    textLayer.style.setProperty('--scale-factor', STATE.scale);

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
//  3. DRAWING TOOLS (أدوات الرسم)
// =============================================================================

function setTool(t) {
    STATE.tool = (STATE.tool === t) ? null : t;
    ['pen', 'highlighter', 'eraser'].forEach(id => {
        const btn = document.getElementById(`btn-${id}`);
        if (btn) btn.classList.toggle('active', STATE.tool === id);
    });
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
            page: pageNum, tool: STATE.tool,
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
        if (d.points.length) ctx.moveTo(d.points[0].x, d.points[0].y);
        for (let i = 1; i < d.points.length; i++) ctx.lineTo(d.points[i].x, d.points[i].y);
        ctx.stroke();
    });
}

// =============================================================================
//  4. SMART SELECTION & AI (التحديد الذكي)
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
    document.getElementById('ai-response-area').style.display = 'none';
}

async function submitAiQuestion() {
    const q = document.getElementById('ai-question').value;
    const box = document.getElementById('ai-response-area');
    box.style.display = 'block'; box.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Réflexion...';

    try {
        const res = await fetch(`${API_BASE_URL}/api/ai/ask-dentist`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // ✅ مهم جداً للمصادقة
            body: JSON.stringify({ text: STATE.selection.text, question: q })
        });

        if (res.status === 401) throw new Error("AUTH_REQUIRED");

        const data = await res.json();
        const ans = data.answer || "Erreur.";
        box.innerHTML = marked.parse(ans);
        createPin(STATE.selection.rect, q, ans);

    } catch (e) {
        if (e.message === "AUTH_REQUIRED") showAuthError();
        else box.innerHTML = "Erreur API: " + e.message;
    }
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
    document.querySelectorAll('.smart-pin').forEach(p => {
        if (p.style.left === document.querySelector('.smart-pin').style.left) p.remove(); // تبسيط للحذف
    });
    // تحديث دقيق للحذف:
    const pins = document.querySelectorAll('.smart-pin');
    // إعادة رسم المصابيح أسهل لضمان المزامنة
    document.querySelectorAll('.smart-pin').forEach(el => el.remove());
    STATE.pins.forEach(renderPin);
    document.getElementById('pin-details').style.display = 'none';
}

// =============================================================================
//  5. CONTENT GENERATION (توليد المحتوى)
// =============================================================================

async function generateContent(type) {
    let endpoint = type === 'quiz' ? 'generate-quiz-text' : type === 'flashcards' ? 'generate-flashcards-text' : 'generate-mindmap-text';
    const containerId = type === 'quiz' ? 'quiz-results' : type === 'flashcards' ? 'cards-results' : 'markmap-svg';
    const container = document.getElementById(containerId);

    container.innerHTML = '<div style="text-align:center; padding:10px;"><i class="fas fa-spinner fa-spin"></i> IA en cours...</div>';

    let text = "";
    for (let i = 1; i <= Math.min(STATE.pdfDoc.numPages, 10); i++) {
        const p = await STATE.pdfDoc.getPage(i);
        const t = await p.getTextContent();
        text += t.items.map(s => s.str).join(' ') + "\n";
    }

    try {
        const res = await fetch(`${API_BASE_URL}/api/ai/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ text, count: 5 })
        });

        if (res.status === 401) throw new Error("AUTH_REQUIRED");

        const data = await res.json();

        if (type === 'quiz') {
            STATE.quizData = data.questions;
            container.innerHTML = '';
            data.questions.forEach((q, i) => {
                container.innerHTML += `<div style="background:white; padding:10px; margin-bottom:5px; border:1px solid #eee; border-radius:5px;">
                    <b>Q${i + 1}:</b> ${q.question}<br>
                    <small style="color:#10b981">Rép: ${q.correctOptionIndexes.map(x => q.options[x]).join(', ')}</small>
                </div>`;
            });
        } else if (type === 'flashcards') {
            STATE.flashcardsData = data.flashcards;
            container.innerHTML = '';
            data.flashcards.forEach(c => {
                container.innerHTML += `<div style="background:white; padding:10px; margin-bottom:5px; border:1px solid #eee; border-radius:5px;">
                    <b>F:</b> ${c.front}<hr style="margin:5px 0; border:0; border-top:1px dashed #ccc;"><b>B:</b> ${c.back}
                </div>`;
            });
        } else {
            STATE.mindMapMd = data.markdown;
            container.innerHTML = '';
            const { Transformer, Markmap } = window.markmap;
            const { root } = new Transformer().transform(data.markdown);
            Markmap.create(container, null, root);
            document.getElementById('dl-map-btn').style.display = 'flex';
        }

    } catch (e) {
        if (e.message === "AUTH_REQUIRED") showAuthError();
        else container.innerHTML = "Erreur: " + e.message;
    }
}

function downloadMindMap() {
    const blob = new Blob([STATE.mindMapMd], { type: 'text/markdown' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `mindmap_${Date.now()}.md`;
    a.click();
}

// =============================================================================
//  6. SAVE & LOAD (الحفظ والاسترجاع)
// =============================================================================

async function saveSession() {
    if (!STATE.fileHash) return alert("Aucun fichier !");

    const payload = {
        fileHash: STATE.fileHash,
        drawings: STATE.drawings,
        pins: STATE.pins,
        quizData: STATE.quizData,
        flashcardsData: STATE.flashcardsData,
        mindMapMd: STATE.mindMapMd
    };

    try {
        const res = await fetch(`${API_BASE_URL}/api/progress/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ lessonId: STATE.fileHash, progressData: payload })
        });

        if (res.status === 401) { showAuthError(); return; }

        const data = await res.json();
        if (data.success) alert("Sauvegardé avec succès !");
    } catch (e) { alert("Erreur réseau"); }
}

async function loadSession() {
    if (!STATE.fileHash) return;

    try {
        const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`, {
            credentials: 'include'
        });

        if (res.status === 401) { showAuthError(); return; }

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
            if (STATE.quizData.length && document.getElementById('quiz-results')) {
                // إعادة رسم الكويز إذا كان التبويب مفتوحاً
                STATE.quizData.forEach((q, i) => document.getElementById('quiz-results').innerHTML += `<div>Q${i + 1}...</div>`);
            }
        }
    } catch (e) { console.log("Nouvelle session"); }
}

// دالة مساعدة لإظهار خطأ الدخول
function showAuthError() {
    document.getElementById('landing-overlay').style.display = 'flex';
    document.getElementById('upload-status').innerHTML = `
        <div style="color:red; font-weight:bold; font-size:18px; margin-bottom:10px;">Session Expirée !</div>
        <a href="${API_BASE_URL}/auth/google" 
           style="background:#2563eb; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-weight:bold;">
           <i class="fab fa-google"></i> Se connecter
        </a>
        <p style="margin-top:10px; font-size:12px;">Rafraîchissez la page après la connexion.</p>
    `;
}

// =============================================================================
//  7. UI HELPERS
// =============================================================================
function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${id}`).classList.add('active');
    // البحث عن الزر وتفعيله (لأن event.target قد يكون الأيقونة)
    const btn = document.querySelector(`button[onclick="switchTab('${id}')"]`);
    if (btn) btn.classList.add('active');
}

function toggleFocus() { document.body.classList.toggle('focus-mode'); }
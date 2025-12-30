// =============================================================================
//  SMART DENTAL VIEWER - ULTIMATE FIX (FINAL PRODUCTION)
//  Developer: Aymen (Dontist Owner)
//  Fixes: Scroll Loop, Text Selection CSS Injection, Pointer Events
// =============================================================================

const API_BASE_URL = "https://dental-app-he1p.onrender.com";
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// --- 1. إصلاح الـ CSS برمجياً (لضمان التحديد والتمرير) ---
(function injectCriticalStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* إصلاح التمرير */
        #viewer-container { display: block !important; overflow-y: auto !important; height: 100vh; }
        #pdf-wrapper { display: flex; flex-direction: column; align-items: center; padding-bottom: 500px; }
        
        /* إصلاح طبقة النصوص للتحديد */
        .textLayer {
            position: absolute; left: 0; top: 0; right: 0; bottom: 0;
            overflow: hidden; opacity: 1; line-height: 1.0;
            mix-blend-mode: multiply; pointer-events: auto !important;
        }
        .textLayer > span {
            color: transparent; position: absolute; white-space: pre;
            cursor: text; transform-origin: 0% 0%;
        }
        
        /* التحكم في الطبقات */
        .page-container { position: relative !important; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .drawLayer { position: absolute; inset: 0; z-index: 50; pointer-events: none; } /* افتراضياً مغلقة */
        .drawLayer.active { pointer-events: auto; cursor: crosshair; }
        .textInputLayer { position: absolute; inset: 0; z-index: 60; pointer-events: none; }
        .textInputLayer.active { pointer-events: auto; cursor: text; }
    `;
    document.head.appendChild(style);
})();

// --- حالة النظام ---
const STATE = {
    pdfDoc: null, fileHash: null, scale: 1.3, currentPage: 1,
    tool: 'cursor', isDrawing: false, drawings: [], textAnnotations: [],
    quizData: [], currentQuizIndex: 0, selectedQuizOptions: [],
    flashcardsData: [], currentFlashcardIndex: 0, mindMapData: null,
    pins: [], activePinId: null, selection: { text: '', rect: null }
};

// =============================================================================
//  CORE FUNCTIONS
// =============================================================================

const fileInput = document.getElementById('file-input');
if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // 1. إعداد الملف
        const arrayBuffer = await file.arrayBuffer();
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(arrayBuffer);
        STATE.fileHash = spark.end();

        const loadingTask = pdfjsLib.getDocument(arrayBuffer);
        STATE.pdfDoc = await loadingTask.promise;

        // 2. تنظيف الحاوية
        const container = document.getElementById('pdf-wrapper');
        container.innerHTML = '';
        if (document.querySelector('#viewer-container h2')) {
            document.querySelector('#viewer-container h2').parentElement.style.display = 'none';
        }

        // 3. حلقة التحميل (الآمنة)
        // نستخدم try-catch داخل الحلقة لضمان عدم توقف التحميل إذا فشلت صفحة واحدة
        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            try {
                await renderPage(i, container);
            } catch (err) {
                console.error(`Error rendering page ${i}:`, err);
            }
        }

        setupPageObserver();
        loadSavedProgress();
    });
}

async function renderPage(num, container) {
    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });

    // إنشاء الحاوية
    const wrapper = document.createElement('div');
    wrapper.className = 'page-container';
    wrapper.id = `page-${num}`;
    wrapper.style.width = `${viewport.width}px`;
    wrapper.style.height = `${viewport.height}px`;

    // 1. الكانفس (الصورة)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width; canvas.height = viewport.height;
    canvas.style.position = 'absolute'; canvas.style.inset = '0';

    // 2. طبقة النصوص (للتحديد) - Z-Index منخفض لتكون تحت الرسم
    const textLayerDiv = document.createElement('div');
    textLayerDiv.className = 'textLayer';
    textLayerDiv.style.width = `${viewport.width}px`;
    textLayerDiv.style.height = `${viewport.height}px`;
    textLayerDiv.style.zIndex = '10'; // طبقة منخفضة
    textLayerDiv.style.setProperty('--scale-factor', STATE.scale);

    // 3. طبقة الرسم
    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'drawLayer';
    drawCanvas.id = `draw-${num}`;
    drawCanvas.width = viewport.width; drawCanvas.height = viewport.height;
    drawCanvas.style.zIndex = '20'; // فوق النص

    // 4. طبقة الملاحظات
    const inputLayer = document.createElement('div');
    inputLayer.className = 'textInputLayer';
    inputLayer.id = `text-layer-${num}`;
    inputLayer.style.width = `${viewport.width}px`; inputLayer.style.height = `${viewport.height}px`;
    inputLayer.style.zIndex = '30';

    inputLayer.onclick = (e) => handleTextToolClick(e, num, inputLayer);

    wrapper.append(canvas, textLayerDiv, drawCanvas, inputLayer);
    container.appendChild(wrapper);

    // رسم الصورة
    await page.render({ canvasContext: ctx, viewport }).promise;

    // رسم النصوص (السر في جعل التحديد يعمل)
    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayerDiv,
        viewport: viewport,
        textDivs: []
    });

    setupDrawingLogic(drawCanvas, num);
}

// --- مراقب الصفحات (Scroll Spy) ---
function setupPageObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) STATE.currentPage = parseInt(e.target.id.split('-')[1]);
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.page-container').forEach(el => observer.observe(el));
}

// =============================================================================
//  TOOLS & SELECTION LOGIC
// =============================================================================

window.setTool = function (t) {
    STATE.tool = t;
    document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${t}`).classList.add('active');

    const drawLayers = document.querySelectorAll('.drawLayer');
    const inputLayers = document.querySelectorAll('.textInputLayer');
    const textLayers = document.querySelectorAll('.textLayer');

    // منطق التبديل الصارم
    if (t === 'cursor') {
        // وضع التحديد: نخفي طبقات الرسم تماماً عن الماوس
        drawLayers.forEach(el => { el.style.pointerEvents = 'none'; el.classList.remove('active'); });
        inputLayers.forEach(el => { el.style.pointerEvents = 'none'; });
        // نجبر طبقة النص أن تكون قابلة للتحديد
        textLayers.forEach(el => el.style.pointerEvents = 'auto');
    }
    else if (['pen', 'highlighter', 'eraser'].includes(t)) {
        // وضع الرسم: نفعل طبقة الرسم ونلغي طبقة النص
        drawLayers.forEach(el => { el.style.pointerEvents = 'auto'; el.classList.add('active'); });
        textLayers.forEach(el => el.style.pointerEvents = 'none');
    }
    else if (t === 'text') {
        inputLayers.forEach(el => { el.style.pointerEvents = 'auto'; el.classList.add('active'); });
        drawLayers.forEach(el => el.style.pointerEvents = 'none');
    }
};

function setupDrawingLogic(canvas, pageNum) {
    const ctx = canvas.getContext('2d');
    let lastX, lastY;

    canvas.addEventListener('mousedown', e => {
        if (!['pen', 'highlighter', 'eraser'].includes(STATE.tool)) return;
        STATE.isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        STATE.drawings.push({ page: pageNum, tool: STATE.tool, color: document.getElementById('color-picker').value, points: [{ x: lastX, y: lastY }] });
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

        if (STATE.drawings.length) STATE.drawings[STATE.drawings.length - 1].points.push({ x: e.offsetX, y: e.offsetY });
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mouseup', () => STATE.isDrawing = false);
}

function handleTextToolClick(e, pageNum, layer) {
    if (STATE.tool !== 'text') return;
    const input = document.createElement('input');
    input.style.cssText = `position:absolute; left:${e.offsetX}px; top:${e.offsetY}px; z-index:100; border:1px solid blue; background:white;`;

    input.onkeydown = (ev) => {
        if (ev.key === 'Enter') {
            STATE.textAnnotations.push({ id: Date.now(), page: pageNum, x: e.offsetX, y: e.offsetY, text: input.value });
            renderText({ x: e.offsetX, y: e.offsetY, text: input.value }, layer);
            input.remove();
        }
    };
    layer.appendChild(input); input.focus();
}

function renderText(note, layer) {
    const el = document.createElement('div');
    el.className = 'added-text';
    el.textContent = note.text;
    el.style.cssText = `position:absolute; left:${note.x}px; top:${note.y}px; color:red; font-weight:bold; cursor:pointer;`;
    el.oncontextmenu = (e) => { e.preventDefault(); el.remove(); };
    layer.appendChild(el);
}

// =============================================================================
//  AI & EXPORT FEATURES (Full Implementation)
// =============================================================================

async function callApi(endpoint, body) {
    const token = localStorage.getItem('userToken');
    if (!token) return alert("سجل الدخول أولاً!");
    const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(body)
    });
    return await res.json();
}

async function getSmartText(scopeName) {
    if (!STATE.pdfDoc) return "";
    const scope = document.querySelector(`input[name="${scopeName}"]:checked`)?.value || 'page';
    let text = "";
    if (scope === 'page') {
        const page = await STATE.pdfDoc.getPage(STATE.currentPage);
        text = (await page.getTextContent()).items.map(i => i.str).join(' ');
    } else {
        for (let i = 1; i <= Math.min(STATE.pdfDoc.numPages, 10); i++) {
            text += (await (await STATE.pdfDoc.getPage(i)).getTextContent()).items.map(i => i.str).join(' ') + "\n";
        }
    }
    return text;
}

// --- Quiz ---
document.getElementById('generate-quiz-btn').onclick = async () => {
    document.getElementById('quiz-container').innerHTML = 'Loading...';
    try {
        const text = await getSmartText('quiz-scope');
        const res = await callApi('ai/generate-quiz-text', { text, count: 5 });
        STATE.quizData = res.questions || [];
        STATE.currentQuizIndex = 0;
        renderQuiz();
        document.getElementById('download-quiz-pdf').style.display = 'block';
    } catch (e) { document.getElementById('quiz-container').innerHTML = 'Error'; }
};

function renderQuiz() {
    const box = document.getElementById('quiz-container');
    if (!STATE.quizData.length) return;
    const q = STATE.quizData[STATE.currentQuizIndex];
    STATE.selectedQuizOptions = [];

    box.innerHTML = `
        <div class="quiz-card">
            <h4>Q${STATE.currentQuizIndex + 1}: ${q.question}</h4>
            <div id="opts"></div>
            <button onclick="checkQuiz(this)" class="action-btn btn-blue" style="margin-top:10px;">Vérifier</button>
            <button onclick="nextQuiz()" class="action-btn btn-outline" style="margin-top:10px;">Suivant</button>
        </div>
    `;
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn'; btn.textContent = opt;
        btn.onclick = () => {
            if (STATE.selectedQuizOptions.includes(i)) {
                STATE.selectedQuizOptions = STATE.selectedQuizOptions.filter(x => x !== i);
                btn.classList.remove('selected');
            } else {
                STATE.selectedQuizOptions.push(i);
                btn.classList.add('selected');
            }
        };
        box.querySelector('#opts').appendChild(btn);
    });
}

window.checkQuiz = (btn) => {
    const q = STATE.quizData[STATE.currentQuizIndex];
    document.querySelectorAll('.option-btn').forEach((b, i) => {
        if (q.correctOptionIndexes.includes(i)) b.classList.add('correct');
        else if (STATE.selectedQuizOptions.includes(i)) b.classList.add('wrong');
    });
    btn.remove();
};

window.nextQuiz = () => {
    if (STATE.currentQuizIndex < STATE.quizData.length - 1) {
        STATE.currentQuizIndex++; renderQuiz();
    } else alert("Fini!");
};

document.getElementById('download-quiz-pdf').onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 10;
    STATE.quizData.forEach((q, i) => {
        if (y > 270) { doc.addPage(); y = 10; }
        doc.text(`Q${i + 1}: ${q.question}`, 10, y); y += 10;
        q.options.forEach(o => { doc.text(`- ${o}`, 15, y); y += 7; });
        y += 10;
    });
    doc.save('quiz.pdf');
};

// --- Flashcards ---
document.getElementById('generate-flashcards-btn').onclick = async () => {
    document.getElementById('flashcards-container').innerHTML = 'Loading...';
    const text = await getSmartText('cards-scope');
    const res = await callApi('ai/generate-flashcards-text', { text, count: 8 });
    STATE.flashcardsData = res.flashcards || [];
    renderCard();
    document.getElementById('download-cards-pdf').style.display = 'block';
};

function renderCard() {
    const c = STATE.flashcardsData[STATE.currentFlashcardIndex];
    document.getElementById('flashcards-container').innerHTML = `
        <div class="flashcard-container" onclick="this.querySelector('.flashcard-inner').classList.toggle('flipped')" style="height:200px; perspective:1000px;">
            <div class="flashcard-inner" style="position:relative; width:100%; height:100%; transition:transform 0.6s; transform-style:preserve-3d;">
                <div class="flashcard-face" style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:white; border:1px solid #ccc; padding:20px; display:flex; align-items:center; justify-content:center;">${c.front}</div>
                <div class="flashcard-face" style="position:absolute; width:100%; height:100%; backface-visibility:hidden; background:#e6fffa; border:1px solid #ccc; transform:rotateY(180deg); padding:20px; display:flex; align-items:center; justify-content:center;">${c.back}</div>
            </div>
        </div>
        <button onclick="nextCard()" class="action-btn btn-green" style="margin-top:10px;">Suivante</button>
    `;
}

window.nextCard = () => {
    if (STATE.currentFlashcardIndex < STATE.flashcardsData.length - 1) {
        STATE.currentFlashcardIndex++; renderCard();
    }
};

document.getElementById('download-cards-pdf').onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    STATE.flashcardsData.forEach((c, i) => {
        doc.text(`Q: ${c.front}`, 10, (i * 30) + 10);
        doc.text(`A: ${c.back}`, 10, (i * 30) + 20);
    });
    doc.save('flashcards.pdf');
};

// --- Mind Map ---
document.getElementById('generate-mindmap-btn').onclick = async () => {
    const svg = document.getElementById('mindmap-svg');
    svg.innerHTML = 'Loading...';
    const text = await getSmartText('quiz-scope');
    const res = await callApi('ai/generate-mindmap-text', { text });
    svg.innerHTML = '';
    const { Transformer, Markmap } = window.markmap;
    const { root } = new Transformer().transform(res.markdown || "# Error");
    Markmap.create(svg, null, root);
    document.getElementById('download-map-img').style.display = 'block';
};

document.getElementById('download-map-img').onclick = () => {
    const svg = document.getElementById('mindmap-svg');
    const data = (new XMLSerializer()).serializeToString(svg);
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(data)));
    img.onload = () => {
        const c = document.createElement('canvas'); c.width = 800; c.height = 600;
        c.getContext('2d').drawImage(img, 0, 0);
        const a = document.createElement('a'); a.download = 'map.png'; a.href = c.toDataURL(); a.click();
    };
};

// --- AI Pins ---
document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    const tb = document.getElementById('selection-toolbar');
    if (!sel.isCollapsed && STATE.tool === 'cursor' && document.getElementById('pdf-wrapper').contains(sel.anchorNode)) {
        const r = sel.getRangeAt(0).getBoundingClientRect();
        STATE.selection.text = sel.toString();
        STATE.selection.rect = r;
        tb.style.display = 'flex'; tb.style.top = (r.top + window.scrollY - 40) + 'px'; tb.style.left = r.left + 'px';
    } else if (tb) tb.style.display = 'none';
});

window.askAiAboutSelection = async () => {
    const q = prompt("Question?");
    if (!q) return;
    const res = await callApi('ai/ask-dentist', { text: STATE.selection.text, question: q });
    const pin = { id: Date.now(), page: STATE.currentPage, x: STATE.selection.rect.left, y: STATE.selection.rect.top + window.scrollY, q, a: res.answer };
    STATE.pins.push(pin);
    renderPin(pin);
};

function renderPin(pin) {
    const el = document.createElement('div');
    el.className = 'smart-pin'; el.innerHTML = '💡';
    el.style.cssText = `position:absolute; left:${pin.x}px; top:${pin.y}px; cursor:pointer; font-size:24px; z-index:100;`;
    el.onclick = () => alert(`Q: ${pin.q}\n\nA: ${pin.a}`);
    document.body.appendChild(el); // Pins are global for simplicity in this fix
}

// --- Save/Load ---
document.getElementById('save-progress-btn').onclick = async () => {
    await callApi('progress/save', { lessonId: STATE.fileHash, progressData: STATE });
    alert("Saved!");
};

async function loadSavedProgress() {
    const token = localStorage.getItem('userToken');
    if (!token || !STATE.fileHash) return;
    const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`, { headers: { 'Authorization': `Bearer ${token}` } });
    const d = await res.json();
    if (d.success) {
        const data = d.data.progressData || d.data;
        STATE.drawings = data.drawings || [];
        STATE.textAnnotations = data.textAnnotations || [];
        redrawAll();
    }
}

function redrawAll() {
    STATE.drawings.forEach(d => {
        const ctx = document.getElementById(`draw-${d.page}`)?.getContext('2d');
        if (ctx) {
            ctx.beginPath(); ctx.strokeStyle = d.color; ctx.lineWidth = 2;
            d.points.forEach((p, i) => i == 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
            ctx.stroke();
        }
    });
}
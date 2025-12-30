// =============================================================================
//  SMART DENTAL VIEWER - ULTIMATE FULL VERSION (PRODUCTION)
//  Developer: Aymen (Dontist Owner)
//  Version: 3.0 (Fixed Scroll, Text Selection, Full Export Logic)
// =============================================================================

const API_BASE_URL = "https://dental-app-he1p.onrender.com";

// إعداد Web Worker الخاص بـ PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// =============================================================================
//  0. INJECT CRITICAL CSS (FIX FOR SELECTION & LAYOUT)
//  هذا الكود يحقن التنسيقات الضرورية لإصلاح مشاكل التحديد والتمرير
// =============================================================================
(function injectStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* ضمان تدفق الصفحات بشكل عمودي */
        #viewer-container { display: block !important; overflow-y: auto !important; height: 100vh; position: relative; }
        #pdf-wrapper { display: flex; flex-direction: column; align-items: center; width: 100%; padding-bottom: 100px; }
        
        /* تنسيق حاوية الصفحة */
        .page-container {
            position: relative;
            display: block;
            margin: 0 auto 20px auto; /* مسافة بين الصفحات */
            background: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        /* طبقة النص (السر في التحديد) */
        .textLayer {
            position: absolute; left: 0; top: 0; right: 0; bottom: 0;
            overflow: hidden; opacity: 1; line-height: 1.0;
            z-index: 10; /* فوق الكانفس */
            mix-blend-mode: multiply; /* يجعل الخلفية شفافة لظهور الصورة */
        }
        .textLayer > span {
            color: transparent; position: absolute; white-space: pre; cursor: text;
            transform-origin: 0% 0%;
        }

        /* طبقة الرسم */
        .drawLayer { position: absolute; inset: 0; z-index: 20; pointer-events: none; }
        .drawLayer.active { pointer-events: auto; cursor: crosshair; }

        /* طبقة الملاحظات النصية */
        .textInputLayer { position: absolute; inset: 0; z-index: 30; pointer-events: none; }
        .textInputLayer.active { pointer-events: auto; cursor: text; }
    `;
    document.head.appendChild(style);
})();

// =============================================================================
//  1. GLOBAL STATE MANAGEMENT
// =============================================================================
const STATE = {
    pdfDoc: null,
    fileHash: null,
    scale: 1.3, // مستوى التكبير
    currentPage: 1,

    // Tools
    tool: 'cursor', // 'cursor', 'text', 'pen', 'highlighter', 'eraser'
    isDrawing: false,
    drawings: [],     // {page, tool, color, points[]}
    textAnnotations: [], // {id, page, x, y, text}

    // AI Data
    quizData: [],
    currentQuizIndex: 0,
    selectedQuizOptions: [], // For Multi-Choice

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
//  2. API HELPER
// =============================================================================
async function callApi(endpoint, body = {}) {
    const token = localStorage.getItem('userToken');
    if (!token) {
        alert("يرجى تسجيل الدخول أولاً.");
        return null;
    }

    try {
        const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(body)
        });

        if (res.status === 401) {
            alert("انتهت الجلسة.");
            return null;
        }
        return await res.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}

async function getSmartText(scopeName) {
    if (!STATE.pdfDoc) return "";
    const scope = document.querySelector(`input[name="${scopeName}"]:checked`)?.value || 'page';
    let text = "";

    try {
        if (scope === 'page') {
            const page = await STATE.pdfDoc.getPage(STATE.currentPage);
            const content = await page.getTextContent();
            text = content.items.map(i => i.str).join(' ');
        } else {
            // نأخذ عينة من أول 15 صفحة
            const limit = Math.min(STATE.pdfDoc.numPages, 15);
            for (let i = 1; i <= limit; i++) {
                const page = await STATE.pdfDoc.getPage(i);
                text += (await page.getTextContent()).items.map(i => i.str).join(' ') + "\n";
            }
        }
    } catch (e) { console.error("Text extraction failed", e); }
    return text;
}

// =============================================================================
//  3. PDF RENDERING ENGINE (THE SCROLL FIX)
// =============================================================================
const fileInput = document.getElementById('file-input');
const wrapper = document.getElementById('pdf-wrapper');

if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // 1. Hash Calculation
        const buffer = await file.arrayBuffer();
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(buffer);
        STATE.fileHash = spark.end();

        // 2. Load Doc
        STATE.pdfDoc = await pdfjsLib.getDocument(buffer).promise;

        // 3. Reset View
        wrapper.innerHTML = '';

        // --- خطوة مهمة جداً لإصلاح السكرول ---
        // نقوم بإنشاء الحاويات الفارغة أولاً لحجز المساحة
        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            createPagePlaceholder(i);
        }

        // 4. Render Pages Sequentially
        // نستخدم حلقة منفصلة للرسم لعدم تجميد الواجهة
        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            await renderPageContent(i);
        }

        setupScrollSpy();
        loadProgress();
    });
}

function createPagePlaceholder(pageNum) {
    const div = document.createElement('div');
    div.className = 'page-container';
    div.id = `page-${pageNum}`;
    // سيتم ضبط الأبعاد لاحقاً، لكن وجود العنصر يضمن الترتيب
    wrapper.appendChild(div);
}

async function renderPageContent(pageNum) {
    const page = await STATE.pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: STATE.scale });
    const div = document.getElementById(`page-${pageNum}`);

    // ضبط الأبعاد الحقيقية
    div.style.width = `${viewport.width}px`;
    div.style.height = `${viewport.height}px`;

    // 1. Canvas Layer (الصورة)
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

    // 3. Drawing Layer (الرسم)
    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'drawLayer';
    drawCanvas.id = `draw-${pageNum}`;
    drawCanvas.width = viewport.width; drawCanvas.height = viewport.height;

    // 4. Input Layer (الملاحظات)
    const inputLayer = document.createElement('div');
    inputLayer.className = 'textInputLayer';
    inputLayer.id = `text-layer-${pageNum}`;
    inputLayer.style.width = `${viewport.width}px`; inputLayer.style.height = `${viewport.height}px`;

    // الترتيب: Canvas -> Text -> Draw -> Input
    div.appendChild(canvas);
    div.appendChild(textLayer);
    div.appendChild(drawCanvas);
    div.appendChild(inputLayer);

    // رسم المحتوى
    await page.render({ canvasContext: ctx, viewport }).promise;

    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayer,
        viewport: viewport,
        textDivs: []
    });

    // إعداد التفاعل
    setupDrawing(drawCanvas, pageNum);
    inputLayer.onclick = (e) => handleTextInput(e, pageNum, inputLayer);
}

function setupScrollSpy() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                STATE.currentPage = parseInt(e.target.id.split('-')[1]);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.page-container').forEach(el => observer.observe(el));
}

// =============================================================================
//  4. TOOLS & INTERACTION (SELECTION FIX)
// =============================================================================
window.setTool = function (t) {
    STATE.tool = t;

    // UI Update
    document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${t}`)?.classList.add('active');

    // Layer Logic
    const drawLayers = document.querySelectorAll('.drawLayer');
    const inputLayers = document.querySelectorAll('.textInputLayer');
    const textLayers = document.querySelectorAll('.textLayer');

    if (t === 'cursor') {
        // وضع التحديد: إخفاء طبقات الرسم عن الماوس
        drawLayers.forEach(l => { l.style.pointerEvents = 'none'; l.classList.remove('active'); });
        inputLayers.forEach(l => { l.style.pointerEvents = 'none'; l.classList.remove('active'); });
        // إجبار طبقة النص على العمل
        textLayers.forEach(l => l.style.pointerEvents = 'auto');
    } else if (['pen', 'highlighter', 'eraser'].includes(t)) {
        // وضع الرسم: تفعيل طبقة الرسم
        drawLayers.forEach(l => { l.style.pointerEvents = 'auto'; l.classList.add('active'); });
        textLayers.forEach(l => l.style.pointerEvents = 'none');
        inputLayers.forEach(l => l.style.pointerEvents = 'none');
    } else if (t === 'text') {
        inputLayers.forEach(l => { l.style.pointerEvents = 'auto'; l.classList.add('active'); });
        drawLayers.forEach(l => l.style.pointerEvents = 'none');
    }
};

function setupDrawing(canvas, pageNum) {
    const ctx = canvas.getContext('2d');
    let lastX, lastY;

    canvas.addEventListener('mousedown', e => {
        if (!['pen', 'highlighter', 'eraser'].includes(STATE.tool)) return;
        STATE.isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        STATE.drawings.push({
            page: pageNum, tool: STATE.tool,
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
    canvas.addEventListener('mouseout', () => STATE.isDrawing = false);
}

function handleTextInput(e, pageNum, layer) {
    if (STATE.tool !== 'text') return;
    const input = document.createElement('input');
    input.style.cssText = `position:absolute; left:${e.offsetX}px; top:${e.offsetY}px; z-index:100; padding:5px; border:1px solid blue;`;
    input.placeholder = "اكتب...";

    input.onkeydown = (ev) => {
        if (ev.key === 'Enter') {
            saveNote(pageNum, e.offsetX, e.offsetY, input.value, layer);
            input.remove();
        }
    };
    layer.appendChild(input); input.focus();
}

function saveNote(page, x, y, text, layer) {
    const note = { id: Date.now(), page, x, y, text };
    STATE.textAnnotations.push(note);
    renderNote(note, layer);
}

function renderNote(note, layer) {
    if (!layer) layer = document.getElementById(`text-layer-${note.page}`);
    if (!layer) return;

    const el = document.createElement('div');
    el.className = 'added-text';
    el.textContent = note.text;
    el.style.cssText = `position:absolute; left:${note.x}px; top:${note.y}px; color:red; font-weight:bold; cursor:pointer; background:rgba(255,255,255,0.8); padding:2px;`;

    el.oncontextmenu = (e) => {
        e.preventDefault();
        STATE.textAnnotations = STATE.textAnnotations.filter(n => n.id !== note.id);
        el.remove();
    };
    layer.appendChild(el);
}

// =============================================================================
//  5. QUIZ FEATURE (MULTI-CHOICE + PDF EXPORT)
// =============================================================================
document.getElementById('generate-quiz-btn').onclick = async () => {
    const box = document.getElementById('quiz-container');
    box.innerHTML = '<div style="text-align:center;">جاري التوليد...</div>';

    const text = await getSmartText('quiz-scope');
    const res = await callApi('ai/generate-quiz-text', { text, count: 5 });

    if (res?.questions) {
        STATE.quizData = res.questions;
        STATE.sessionData.quizzes = res.questions;
        STATE.currentQuizIndex = 0;
        renderQuiz();
        document.getElementById('download-quiz-pdf').style.display = 'block';
    } else {
        box.innerHTML = 'فشل.';
    }
};

function renderQuiz() {
    const box = document.getElementById('quiz-container');
    if (!STATE.quizData.length) return;

    const q = STATE.quizData[STATE.currentQuizIndex];
    STATE.selectedQuizOptions = [];

    box.innerHTML = `
        <div class="quiz-card">
            <div style="margin-bottom:10px; color:#666;">سؤال ${STATE.currentQuizIndex + 1} / ${STATE.quizData.length}</div>
            <div style="font-weight:bold; margin-bottom:15px;">${q.question}</div>
            <div id="quiz-opts"></div>
            <div style="margin-top:15px; display:flex; gap:10px;">
                <button onclick="checkQuiz()" class="action-btn btn-blue">تحقق</button>
                <button onclick="nextQuiz()" class="action-btn btn-outline">التالي</button>
            </div>
        </div>
    `;

    const optsDiv = box.querySelector('#quiz-opts');
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => {
            if (STATE.selectedQuizOptions.includes(idx)) {
                STATE.selectedQuizOptions = STATE.selectedQuizOptions.filter(i => i !== idx);
                btn.classList.remove('selected');
            } else {
                STATE.selectedQuizOptions.push(idx);
                btn.classList.add('selected');
            }
        };
        optsDiv.appendChild(btn);
    });
}

window.checkQuiz = () => {
    const q = STATE.quizData[STATE.currentQuizIndex];
    const btns = document.querySelectorAll('.option-btn');

    btns.forEach((btn, idx) => {
        if (q.correctOptionIndexes.includes(idx)) btn.classList.add('correct');
        else if (STATE.selectedQuizOptions.includes(idx)) btn.classList.add('wrong');
        btn.disabled = true;
    });
};

window.nextQuiz = () => {
    if (STATE.currentQuizIndex < STATE.quizData.length - 1) {
        STATE.currentQuizIndex++;
        renderQuiz();
    } else {
        alert("انتهى الاختبار");
    }
};

// Quiz Export PDF
document.getElementById('download-quiz-pdf').onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 20;

    STATE.quizData.forEach((q, i) => {
        if (y > 270) { doc.addPage(); y = 20; }

        doc.setFontSize(12);
        const lines = doc.splitTextToSize(`Q${i + 1}: ${q.question}`, 180);
        doc.text(lines, 10, y);
        y += (lines.length * 6) + 5;

        q.options.forEach((opt, oi) => {
            const isCorrect = q.correctOptionIndexes.includes(oi);
            doc.setTextColor(isCorrect ? 0 : 100);
            if (isCorrect) doc.setTextColor(0, 150, 0);

            doc.text(`${isCorrect ? '[Correct]' : '-'} ${opt}`, 15, y);
            y += 6;
        });
        doc.setTextColor(0);
        y += 10;
    });
    doc.save('quiz.pdf');
};

// =============================================================================
//  6. FLASHCARDS FEATURE
// =============================================================================
document.getElementById('generate-flashcards-btn').onclick = async () => {
    const box = document.getElementById('flashcards-container');
    box.innerHTML = 'جاري التوليد...';

    const text = await getSmartText('cards-scope');
    const res = await callApi('ai/generate-flashcards-text', { text, count: 8 });

    if (res?.flashcards) {
        STATE.flashcardsData = res.flashcards;
        STATE.sessionData.flashcards = res.flashcards;
        renderFlashcard();
        document.getElementById('download-cards-pdf').style.display = 'block';
    }
};

function renderFlashcard() {
    const box = document.getElementById('flashcards-container');
    const c = STATE.flashcardsData[STATE.currentFlashcardIndex];

    box.innerHTML = `
        <div class="flashcard-container" style="perspective:1000px; height:200px; cursor:pointer;" onclick="this.querySelector('.inner').classList.toggle('flipped')">
            <div class="inner" style="position:relative; width:100%; height:100%; transition:transform 0.6s; transform-style:preserve-3d;">
                <div class="face front" style="position:absolute; inset:0; backface-visibility:hidden; background:white; border:1px solid #ccc; display:flex; align-items:center; justify-content:center; padding:10px;">
                    <b>Q:</b> ${c.front}
                </div>
                <div class="face back" style="position:absolute; inset:0; backface-visibility:hidden; background:#f0fdf4; border:1px solid #ccc; transform:rotateY(180deg); display:flex; align-items:center; justify-content:center; padding:10px;">
                    <b>A:</b> ${c.back}
                </div>
            </div>
        </div>
        <button onclick="nextCard()" class="action-btn btn-green" style="margin-top:10px;">التالية</button>
    `;
}

window.nextCard = () => {
    if (STATE.currentFlashcardIndex < STATE.flashcardsData.length - 1) {
        STATE.currentFlashcardIndex++;
        renderFlashcard();
    }
};

document.getElementById('download-cards-pdf').onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    STATE.flashcardsData.forEach((c, i) => {
        doc.text(`Card ${i + 1}`, 10, (i * 40) + 10);
        doc.text(`Q: ${c.front}`, 10, (i * 40) + 20);
        doc.text(`A: ${c.back}`, 10, (i * 40) + 30);
    });
    doc.save('flashcards.pdf');
};

// =============================================================================
//  7. MIND MAP
// =============================================================================
document.getElementById('generate-mindmap-btn').onclick = async () => {
    const svg = document.getElementById('mindmap-svg');
    svg.innerHTML = 'Loading...';

    const text = await getSmartText('quiz-scope');
    const res = await callApi('ai/generate-mindmap-text', { text });

    if (res?.markdown) {
        STATE.sessionData.mindMapData = res.markdown;
        svg.innerHTML = '';
        const { Transformer, Markmap } = window.markmap;
        const { root } = new Transformer().transform(res.markdown);
        Markmap.create(svg, null, root);
        document.getElementById('download-map-img').style.display = 'block';
    }
};

document.getElementById('download-map-img').onclick = () => {
    const svg = document.getElementById('mindmap-svg');
    const data = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(data)));
    img.onload = () => {
        const c = document.createElement('canvas');
        c.width = 800; c.height = 600;
        c.getContext('2d').drawImage(img, 0, 0);
        const a = document.createElement('a');
        a.download = 'map.png'; a.href = c.toDataURL(); a.click();
    };
};

// =============================================================================
//  8. SMART SELECTION & PINS
// =============================================================================
document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    const toolbar = document.getElementById('selection-toolbar');

    if (!sel.isCollapsed && STATE.tool === 'cursor' && document.getElementById('pdf-wrapper').contains(sel.anchorNode)) {
        const rect = sel.getRangeAt(0).getBoundingClientRect();
        STATE.selection.text = sel.toString();
        STATE.selection.rect = rect;

        toolbar.style.display = 'flex';
        toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
        toolbar.style.left = `${rect.left}px`;
    } else if (toolbar) {
        toolbar.style.display = 'none';
    }
});

window.askAiAboutSelection = async () => {
    const q = prompt("سؤالك عن النص المحدد:");
    if (!q) return;

    const res = await callApi('ai/ask-dentist', { text: STATE.selection.text, question: q });
    if (res?.answer) {
        // إنشاء دبوس في الموقع التقريبي
        // ملاحظة: نحتاج لتحويل الإحداثيات بالنسبة للصفحة، هنا للتبسيط نضعها absolute
        createPin(STATE.currentPage, STATE.selection.rect.left, STATE.selection.rect.top + window.scrollY, q, res.answer);
    }
};

function createPin(page, x, y, q, a) {
    const pin = { id: Date.now(), page, x, y, q, a };
    STATE.pins.push(pin);
    renderPin(pin);
}

function renderPin(pin) {
    const el = document.createElement('div');
    el.className = 'smart-pin';
    el.innerHTML = '💡';
    el.style.cssText = `position:absolute; left:${pin.x}px; top:${pin.y}px; z-index:100; cursor:pointer; font-size:24px;`;
    el.onclick = () => alert(`Q: ${pin.q}\n\nA: ${pin.a}`);
    document.body.appendChild(el);
}

// =============================================================================
//  9. SAVE & LOAD
// =============================================================================
document.getElementById('save-progress-btn').onclick = async () => {
    if (!STATE.fileHash) return alert("لا يوجد ملف.");

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
    alert("تم الحفظ!");
};

async function loadProgress() {
    if (!STATE.fileHash) return;
    const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('userToken')}` }
    });
    const d = await res.json();

    if (d.success && d.data) {
        const data = d.data.progressData || d.data;
        STATE.drawings = data.drawings || [];
        STATE.textAnnotations = data.textAnnotations || [];

        // إعادة الرسم
        STATE.drawings.forEach(d => {
            const ctx = document.getElementById(`draw-${d.page}`)?.getContext('2d');
            if (ctx) {
                ctx.beginPath(); ctx.strokeStyle = d.color; ctx.lineWidth = 2;
                d.points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
                ctx.stroke();
            }
        });

        STATE.textAnnotations.forEach(n => renderNote(n));
    }
}
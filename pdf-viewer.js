// =============================================================================
//  SMART DENTAL VIEWER - ULTIMATE CONTROLLER (JS)
//  Features: Token Auth, Advanced Quiz/Cards, Export PDF/IMG, Drawing Layers
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

    // الرسم
    tool: null,       // 'pen', 'highlighter', 'eraser'
    isDrawing: false,
    drawings: [],

    // الكويز
    quizData: [],
    currentQuizIndex: 0,
    selectedQuizOption: null, // لتخزين الإجابة المؤقتة قبل التحقق

    // الفلاش كاردز
    flashcardsData: [],
    currentFlashcardIndex: 0,

    // المايند ماب
    mindMapData: null,

    // أدوات ذكية
    pins: [],
    activePinId: null,
    selection: { text: '', rect: null },

    // بيانات الجلسة (للحفظ)
    sessionData: { quizzes: [], flashcards: [], mindMapData: null }
};

// =============================================================================
//  1. الاتصال الآمن (Token Auth - Fix for 401) 🔌
// =============================================================================

async function callApi(endpoint, body = {}) {
    // جلب التوكن من LocalStorage (نفس طريقة script.js)
    const token = localStorage.getItem('userToken');

    if (!token) {
        alert("Erreur: Vous n'êtes pas connecté. Veuillez vous connecter via le Dashboard.");
        return;
    }

    try {
        const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // ✅ المفتاح الصحيح
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

// دالة استخراج النص (حسب النطاق المختار)
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
        const maxPages = Math.min(STATE.pdfDoc.numPages, 15);
        for (let i = 1; i <= maxPages; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(' ') + "\n";
        }
    }
    return text;
}

// =============================================================================
//  2. تحميل PDF والعرض (With Layering Fix) 🎨
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

    // 1. طبقة الكانفاس (PDF Image)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // 2. طبقة النص (للتحديد)
    const textLayer = document.createElement('div');
    textLayer.className = 'textLayer';
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;
    textLayer.style.setProperty('--scale-factor', STATE.scale);

    // 3. طبقة الرسم (Draw Layer)
    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'drawLayer'; // CSS class handles pointer-events
    drawCanvas.id = `draw-${num}`;
    drawCanvas.width = viewport.width;
    drawCanvas.height = viewport.height;

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
//  3. منطق الرسم (Toggle Drawing Mode) ✏️
// =============================================================================

window.setTool = function (t) {
    // إذا ضغطنا نفس الأداة، نلغي التفعيل (null)
    STATE.tool = (STATE.tool === t) ? null : t;

    // تحديث أزرار الواجهة
    ['pen', 'highlighter', 'eraser'].forEach(id => {
        const btn = document.getElementById(`btn-${id}`);
        if (btn) btn.classList.toggle('active', STATE.tool === id);
    });

    // التحكم في استقبال الماوس (Pointer Events)
    // إذا كانت الأداة مفعلة -> اسمح بالرسم (auto)
    // إذا كانت مغلقة -> اسمح بتحديد النص خلفها (none)
    document.querySelectorAll('.drawLayer').forEach(el => {
        if (STATE.tool) {
            el.classList.add('active'); // CSS: pointer-events: auto
        } else {
            el.classList.remove('active'); // CSS: pointer-events: none
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
//  4. الكويز المتطور (Carousel + Check + Export) 🧠
// =============================================================================

document.getElementById('generate-quiz-btn').onclick = async () => {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '<div style="text-align:center;"><i class="fas fa-spinner fa-spin"></i> Génération en cours...</div>';
    try {
        const text = await getSmartText('quiz-scope');
        const res = await callApi('ai/generate-quiz-text', { text, count: 5 });
        STATE.quizData = res.questions || [];

        if (STATE.quizData.length) {
            STATE.sessionData.quizzes = STATE.quizData;
            STATE.currentQuizIndex = 0;
            STATE.selectedQuizOption = null;
            renderQuizCard();
            document.getElementById('download-quiz-pdf').style.display = 'block';
        } else {
            container.innerHTML = 'Aucune question.';
        }
    } catch (e) { container.innerHTML = "Erreur."; }
};

function renderQuizCard() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    const q = STATE.quizData[STATE.currentQuizIndex];
    const total = STATE.quizData.length;

    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:12px; color:#64748b;">
            <span>Question ${STATE.currentQuizIndex + 1} / ${total}</span>
            <span>DIFFICULTY: NORMAL</span>
        </div>
        <div class="quiz-question">${q.question}</div>
        <div class="options-area"></div>
        <div style="margin-top:20px; display:flex; gap:10px;">
            <button id="quiz-prev-btn" class="action-btn btn-outline" style="flex:1;">Précédent</button>
            <button id="quiz-check-btn" class="action-btn btn-blue" style="flex:2;">Vérifier</button>
            <button id="quiz-next-btn" class="action-btn btn-outline" style="flex:1; display:none;">Suivant</button>
        </div>
    `;

    const optsArea = card.querySelector('.options-area');
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => selectQuizOption(idx, btn);
        optsArea.appendChild(btn);
    });

    container.appendChild(card);

    // Event Listeners
    document.getElementById('quiz-prev-btn').onclick = () => {
        if (STATE.currentQuizIndex > 0) {
            STATE.currentQuizIndex--;
            STATE.selectedQuizOption = null;
            renderQuizCard();
        }
    };

    document.getElementById('quiz-check-btn').onclick = () => checkQuizAnswer(q);

    document.getElementById('quiz-next-btn').onclick = () => {
        if (STATE.currentQuizIndex < total - 1) {
            STATE.currentQuizIndex++;
            STATE.selectedQuizOption = null;
            renderQuizCard();
        } else {
            alert("Quiz terminé !");
        }
    };
}

function selectQuizOption(idx, btnEl) {
    // إزالة التحديد السابق
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    // إضافة التحديد الجديد
    btnEl.classList.add('selected');
    STATE.selectedQuizOption = idx;
}

function checkQuizAnswer(qData) {
    if (STATE.selectedQuizOption === null) return alert("Sélectionnez une réponse !");

    const opts = document.querySelectorAll('.option-btn');
    const correctIdx = qData.correctOptionIndexes[0];

    // تلوين الإجابات
    opts.forEach((btn, idx) => {
        if (idx === correctIdx) btn.classList.add('correct');
        else if (idx === STATE.selectedQuizOption) btn.classList.add('wrong');
        btn.disabled = true; // منع التغيير
    });

    // إظهار زر التالي
    document.getElementById('quiz-check-btn').style.display = 'none';
    document.getElementById('quiz-next-btn').style.display = 'block';
}

// تحميل الكويز كملف PDF
document.getElementById('download-quiz-pdf').onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Dentist AI - Quiz", 10, 10);

    let y = 20;
    STATE.quizData.forEach((q, i) => {
        if (y > 270) { doc.addPage(); y = 20; }

        doc.setFontSize(12);
        const splitQuestion = doc.splitTextToSize(`Q${i + 1}: ${q.question}`, 180);
        doc.text(splitQuestion, 10, y);
        y += (splitQuestion.length * 7) + 5;

        q.options.forEach((opt, oi) => {
            const isCorrect = q.correctOptionIndexes.includes(oi) ? "(Correct)" : "";
            doc.setFontSize(10);
            doc.text(`- ${opt} ${isCorrect}`, 15, y);
            y += 6;
        });
        y += 10;
    });

    doc.save("quiz_dentaire.pdf");
};

// =============================================================================
//  5. الفلاش كاردز (3D Flip + Export) 🃏
// =============================================================================

document.getElementById('generate-flashcards-btn').onclick = async () => {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '<div style="text-align:center;"><i class="fas fa-spinner fa-spin"></i> Génération...</div>';
    try {
        const text = await getSmartText('cards-scope');
        const res = await callApi('ai/generate-flashcards-text', { text, count: 8 });
        STATE.flashcardsData = res.flashcards || [];

        if (STATE.flashcardsData.length) {
            STATE.sessionData.flashcards = STATE.flashcardsData;
            STATE.currentFlashcardIndex = 0;
            renderFlashcard();
            document.getElementById('download-cards-pdf').style.display = 'block';
        } else {
            container.innerHTML = 'Aucune carte.';
        }
    } catch (e) { container.innerHTML = "Erreur."; }
};

function renderFlashcard() {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '';

    const card = STATE.flashcardsData[STATE.currentFlashcardIndex];
    const total = STATE.flashcardsData.length;

    const div = document.createElement('div');
    div.innerHTML = `
        <div style="text-align:center; margin-bottom:10px; color:#64748b; font-size:12px;">Carte ${STATE.currentFlashcardIndex + 1} / ${total}</div>
        <div class="flashcard-container">
            <div class="flashcard-inner" onclick="this.classList.toggle('flipped')">
                <div class="flashcard-face flashcard-front">
                    <div style="font-size:12px; color:#94a3b8; margin-bottom:10px;">QUESTION</div>
                    <div style="font-size:1.1rem; font-weight:600;">${card.front}</div>
                    <div style="margin-top:auto; font-size:10px; color:#cbd5e1;">Cliquer pour retourner</div>
                </div>
                <div class="flashcard-face flashcard-back">
                    <div style="font-size:12px; color:#94a3b8; margin-bottom:10px;">RÉPONSE</div>
                    <div>${card.back}</div>
                </div>
            </div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:15px;">
            <button onclick="changeCard(-1)" class="action-btn btn-outline" style="width:45%;"><i class="fas fa-arrow-left"></i></button>
            <button onclick="changeCard(1)" class="action-btn btn-blue" style="width:45%;"><i class="fas fa-arrow-right"></i></button>
        </div>
    `;
    container.appendChild(div);
}

window.changeCard = function (dir) {
    const newIdx = STATE.currentFlashcardIndex + dir;
    if (newIdx >= 0 && newIdx < STATE.flashcardsData.length) {
        STATE.currentFlashcardIndex = newIdx;
        renderFlashcard();
    }
};

// تحميل البطاقات كـ PDF
document.getElementById('download-cards-pdf').onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Flashcards", 10, 10);

    let y = 20;
    STATE.flashcardsData.forEach((c, i) => {
        if (y > 250) { doc.addPage(); y = 20; }
        doc.setFontSize(12);
        doc.text(`Card ${i + 1}`, 10, y);
        y += 7;

        doc.setFontSize(10);
        const front = doc.splitTextToSize(`Q: ${c.front}`, 180);
        doc.text(front, 10, y);
        y += (front.length * 5) + 2;

        const back = doc.splitTextToSize(`A: ${c.back}`, 180);
        doc.text(back, 10, y);
        y += (back.length * 5) + 10;
    });
    doc.save("flashcards.pdf");
};

// =============================================================================
//  6. المايند ماب (Image Export) 🌳
// =============================================================================

document.getElementById('generate-mindmap-btn').onclick = async () => {
    const svgEl = document.getElementById('mindmap-svg');
    svgEl.innerHTML = '';

    const container = svgEl.parentElement;
    container.style.position = 'relative';
    const loader = document.createElement('div');
    loader.textContent = 'Génération...';
    loader.style.cssText = 'position:absolute; top:50%; left:50%; transform:translate(-50%,-50%)';
    container.appendChild(loader);

    try {
        const text = await getSmartText('quiz-scope');
        const res = await callApi('ai/generate-mindmap-text', { text });
        const markdown = res.markdown || res.data;
        STATE.sessionData.mindMapData = markdown;

        loader.remove();

        const { Transformer, Markmap } = window.markmap;
        const { root } = new Transformer().transform(markdown);
        Markmap.create(svgEl, null, root);

        document.getElementById('download-map-img').style.display = 'block';

    } catch (e) { loader.textContent = "Erreur"; }
};

// تحميل المايند ماب كصورة PNG
document.getElementById('download-map-img').onclick = () => {
    const svg = document.getElementById('mindmap-svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    // إعداد الكانفاس بحجم الـ SVG
    const svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width * 2; // دقة أعلى
    canvas.height = svgSize.height * 2;

    img.onload = () => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const a = document.createElement('a');
        a.download = 'mindmap.png';
        a.href = canvas.toDataURL('image/png');
        a.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
};

// =============================================================================
//  7. الملاحظات الذكية (Smart Pins) 💡
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
    STATE.selection.rect = rect;

    if (toolbar) {
        toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
        toolbar.style.left = `${rect.left + (rect.width / 2) - 50}px`;
        toolbar.style.display = 'flex';
    }
});

window.askAiAboutSelection = async function () {
    document.getElementById('selection-toolbar').style.display = 'none';
    const q = prompt("Votre question:");
    if (!q) return;

    const modal = document.getElementById('ai-modal');
    const answerBox = document.getElementById('ai-answer-text');
    modal.style.display = 'flex';
    answerBox.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Réflexion...';

    try {
        const res = await callApi('ai/ask-dentist', { text: STATE.selection.text, question: q });
        const ans = res.answer || "Pas de réponse.";
        answerBox.innerHTML = marked.parse(ans);

        createPin(STATE.selection.rect, q, ans);
    } catch (e) { answerBox.textContent = e.message; }
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
    document.querySelectorAll('.smart-pin').forEach(el => el.remove());
    STATE.pins.forEach(renderPin);
    document.getElementById('pin-details').style.display = 'none';
};

// =============================================================================
//  8. الحفظ والاسترجاع (Saving) 💾
// =============================================================================

document.getElementById('save-progress-btn').onclick = async () => {
    if (!STATE.fileHash) return alert("Aucun fichier !");
    const btn = document.getElementById('save-progress-btn');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sauvegarde vers Cloud...';
    btn.disabled = true;

    try {
        const payload = {
            drawings: STATE.drawings,
            pins: STATE.pins,
            quizzes: STATE.sessionData.quizzes,
            flashcards: STATE.sessionData.flashcards,
            mindMapData: STATE.sessionData.mindMapData
        };
        const res = await callApi('progress/save', { lessonId: STATE.fileHash, progressData: payload });

        if (res.success) {
            btn.innerHTML = '<i class="fas fa-check"></i> Sauvegardé !';
            setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; }, 2000);
        }
    } catch (e) {
        btn.innerHTML = '<i class="fas fa-times"></i> Erreur';
        setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; }, 2000);
    }
};

async function loadSavedProgress() {
    if (!STATE.fileHash) return;
    try {
        const token = localStorage.getItem('userToken');
        if (!token) return;

        // استخدم fetch مباشرة لتجنب التنبيهات في callApi إذا لم يكن هناك حفظ
        const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const json = await res.json();

        if (json.success && json.data) {
            const data = json.data.progressData || json.data;

            // استرجاع الرسم
            STATE.drawings = data.drawings || [];
            redrawAllDrawings();

            // استرجاع الملاحظات
            STATE.pins = data.pins || [];
            STATE.pins.forEach(renderPin);

            // استرجاع الكويزات
            if (data.quizzes?.length) {
                STATE.sessionData.quizzes = data.quizzes;
                document.getElementById('restore-quiz-btn').style.display = 'block';
            }
            // استرجاع البطاقات
            if (data.flashcards?.length) {
                STATE.sessionData.flashcards = data.flashcards;
                document.getElementById('restore-cards-btn').style.display = 'block';
            }
            // استرجاع الماب
            if (data.mindMapData) {
                STATE.sessionData.mindMapData = data.mindMapData;
                document.getElementById('restore-map-btn').style.display = 'block';
            }
        }
    } catch (e) { console.log("Nouvelle session (Pas de sauvegarde trouvée)"); }
}

// أزرار الاستعادة
document.getElementById('restore-quiz-btn').onclick = () => {
    STATE.quizData = STATE.sessionData.quizzes;
    STATE.currentQuizIndex = 0;
    renderQuizCard();
    document.getElementById('download-quiz-pdf').style.display = 'block';
    document.getElementById('restore-quiz-btn').style.display = 'none';
};

document.getElementById('restore-cards-btn').onclick = () => {
    STATE.flashcardsData = STATE.sessionData.flashcards;
    STATE.currentFlashcardIndex = 0;
    renderFlashcard();
    document.getElementById('download-cards-pdf').style.display = 'block';
    document.getElementById('restore-cards-btn').style.display = 'none';
};

document.getElementById('restore-map-btn').onclick = () => {
    const { Transformer, Markmap } = window.markmap;
    const { root } = new Transformer().transform(STATE.sessionData.mindMapData);
    Markmap.create(document.getElementById('mindmap-svg'), null, root);
    document.getElementById('download-map-img').style.display = 'block';
    document.getElementById('restore-map-btn').style.display = 'none';
};
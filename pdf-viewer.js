// =============================================================================
//  SMART DENTAL VIEWER - FINAL INTEGRATED CONTROLLER
//  Fixes: Auth (401), Drawing Restoration, Safe Data Handling
// =============================================================================

// 👇 رابط السيرفر الخاص بك (Render)
const API_BASE_URL = "https://dental-app-he1p.onrender.com";

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// --- إدارة الحالة (Global State) ---
const STATE = {
    pdfDoc: null,
    fileHash: null, // Lesson ID
    scale: 1.2,
    currentPage: 1,

    // أدوات الرسم
    tool: null,       // 'pen', 'highlighter', 'eraser'
    isDrawing: false,
    drawings: [],     // تخزين الرسومات

    // بيانات الكويز والبطاقات (Professor Mode)
    quizData: [],
    currentQuizIndex: 0,
    userAnswers: {},

    flashcardsData: [],
    currentFlashcardIndex: 0,

    mindMapData: null,

    // الملاحظات الذكية
    pins: [],
    selection: { text: '', rect: null },

    // بيانات الجلسة للحفظ
    sessionData: {
        quizzes: [],
        flashcards: [],
        mindMapData: null
    }
};

// =============================================================================
//  1. الاتصال الآمن (FIXED: Credentials Include) 🔌
// =============================================================================

async function callApi(endpoint, body = {}) {
    // نستخدم credentials: 'include' بدلاً من الهيدر اليدوي
    // هذا يجعل المتصفح يرسل كوكيز الجلسة تلقائياً للسيرفر
    try {
        const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // 🔥 الحل السحري لمشكلة 401
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

// دالة استخراج النص الذكي
async function getSmartText(scopeInputName) {
    if (!STATE.pdfDoc) return "";

    // محاولة قراءة الخيار من HTML، وإذا لم يوجد نستخدم 'page' كافتراضي
    const scopeEl = document.querySelector(`input[name="${scopeInputName}"]:checked`);
    const scope = scopeEl ? scopeEl.value : 'page';

    let text = "";

    if (scope === 'page') {
        const page = await STATE.pdfDoc.getPage(STATE.currentPage);
        const content = await page.getTextContent();
        text = content.items.map(i => i.str).join(' ');
    } else {
        const maxPages = Math.min(STATE.pdfDoc.numPages, 15); // تقليل الحد لتسريع الطلب
        for (let i = 1; i <= maxPages; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(' ') + "\n";
        }
    }
    return text;
}

// =============================================================================
//  2. تحميل PDF والعرض (With Drawing Layers) 🎨
// =============================================================================

const fileInput = document.getElementById('file-input');

async function handleFileUpload(input) {
    const file = input.files[0];
    if (!file) return;

    // حساب الهاش للملف (للحفظ والاسترجاع)
    const arrayBuffer = await file.arrayBuffer();
    const spark = new SparkMD5.ArrayBuffer();
    spark.append(arrayBuffer);
    STATE.fileHash = spark.end(); // Lesson ID الثابت

    // تحميل PDF
    const loadingTask = pdfjsLib.getDocument(arrayBuffer);
    STATE.pdfDoc = await loadingTask.promise;

    const container = document.getElementById('pdf-wrapper'); // تأكد أن هذا الـ ID موجود في HTML
    if (container) container.innerHTML = '';

    // عرض الصفحات
    for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
        await renderPage(i, container || document.getElementById('pdf-container'));
    }

    setupPageObserver();
    loadSavedProgress(); // استرجاع البيانات المحفوظة
}

// ربط الحدث إذا كان العنصر موجوداً
if (fileInput) {
    fileInput.addEventListener('change', (e) => handleFileUpload(e.target));
}

async function renderPage(num, container) {
    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });

    // حاوية الصفحة
    const wrapper = document.createElement('div');
    wrapper.className = 'page-container';
    wrapper.id = `page-${num}`;
    wrapper.style.width = `${viewport.width}px`;
    wrapper.style.height = `${viewport.height}px`;
    wrapper.style.marginBottom = '20px';
    wrapper.style.position = 'relative';

    // 1. طبقة الكانفاس (PDF)
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

    // 3. طبقة الرسم (Drawing) - 🔥 تمت إعادتها
    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'drawLayer';
    drawCanvas.id = `draw-${num}`;
    drawCanvas.width = viewport.width;
    drawCanvas.height = viewport.height;
    drawCanvas.style.position = 'absolute';
    drawCanvas.style.top = '0';
    drawCanvas.style.left = '0';
    drawCanvas.style.pointerEvents = 'none'; // السماح بمرور الماوس للنص إلا عند الرسم
    drawCanvas.style.zIndex = '10';

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

    // تفعيل منطق الرسم لهذه الصفحة
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
//  3. منطق الرسم (Restored Drawing Logic) ✏️
// =============================================================================

// دالة تغيير الأداة (يتم استدعاؤها من HTML)
window.setTool = function (t) {
    STATE.tool = (STATE.tool === t) ? null : t;

    // تحديث ستايل الأزرار (اختياري، تأكد من وجود الـ IDs في HTML)
    ['pen', 'highlighter', 'eraser'].forEach(id => {
        const btn = document.getElementById(`btn-${id}`);
        if (btn) {
            btn.style.background = (STATE.tool === id) ? '#eff6ff' : '';
            btn.classList.toggle('active', STATE.tool === id);
        }
    });

    // تفعيل/تعطيل استقبال الماوس في طبقات الرسم
    document.querySelectorAll('.drawLayer').forEach(el => {
        el.style.pointerEvents = STATE.tool ? 'auto' : 'none';
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
            page: pageNum,
            tool: STATE.tool,
            color: color,
            points: [{ x: lastX, y: lastY }]
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

        // حفظ النقاط
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
//  4. الكويز (Carousel Mode - Safe Handling) 🧠
// =============================================================================

const quizBtn = document.getElementById('generate-quiz-btn');
if (quizBtn) {
    quizBtn.addEventListener('click', async () => {
        const container = document.getElementById('quiz-container');
        container.innerHTML = '<div style="text-align:center; padding:20px;"><i class="fas fa-spinner fa-spin"></i> Génération...</div>';

        try {
            const text = await getSmartText('quiz-scope');
            const res = await callApi('ai/generate-quiz-text', { text, count: 5 });

            // 🔥 الحماية من خطأ forEach: التحقق من وجود البيانات
            STATE.quizData = res.questions || res.data || [];

            if (Array.isArray(STATE.quizData) && STATE.quizData.length > 0) {
                STATE.sessionData.quizzes = STATE.quizData;
                STATE.currentQuizIndex = 0;
                STATE.userAnswers = {};
                renderQuizQuestion(0);
            } else {
                container.innerHTML = '<p style="color:red">Aucune question générée. Essayez une autre page.</p>';
            }

        } catch (err) {
            container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${err.message}</div>`;
        }
    });
}

function renderQuizQuestion(index) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    if (index < 0 || index >= STATE.quizData.length) return;

    const qData = STATE.quizData[index];
    const template = document.getElementById('quiz-card-template');
    if (!template) return;

    const clone = template.content.cloneNode(true);

    clone.querySelector('.quiz-progress').textContent = `Question ${index + 1} / ${STATE.quizData.length}`;
    clone.querySelector('.question-text').textContent = qData.question;

    const optionsContainer = clone.querySelector('.options-container');

    // التأكد من أن الخيارات موجودة قبل الدوران عليها
    if (qData.options && Array.isArray(qData.options)) {
        qData.options.forEach((opt, optIdx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;

            if (STATE.userAnswers[index] !== undefined) {
                btn.disabled = true;
                const correctIndices = qData.correctOptionIndexes || [0];
                if (correctIndices.includes(optIdx)) btn.classList.add('correct');
                else if (STATE.userAnswers[index] === optIdx) btn.classList.add('wrong');
            } else {
                btn.onclick = () => {
                    STATE.userAnswers[index] = optIdx;
                    renderQuizQuestion(index);
                };
            }
            optionsContainer.appendChild(btn);
        });
    }

    // التنقل
    const prevBtn = clone.querySelector('.btn-prev');
    const nextBtn = clone.querySelector('.btn-next');

    if (prevBtn) {
        prevBtn.disabled = index === 0;
        prevBtn.onclick = () => renderQuizQuestion(index - 1);
    }
    if (nextBtn) {
        nextBtn.textContent = index === STATE.quizData.length - 1 ? 'Terminer' : 'Suivant';
        nextBtn.onclick = () => {
            if (index < STATE.quizData.length - 1) renderQuizQuestion(index + 1);
            else alert("Quiz terminé !");
        };
    }

    container.appendChild(clone);
}

// =============================================================================
//  5. الفلاش كاردز (Single Card Mode) 🃏
// =============================================================================

const cardsBtn = document.getElementById('generate-flashcards-btn');
if (cardsBtn) {
    cardsBtn.addEventListener('click', async () => {
        const container = document.getElementById('flashcards-container');
        container.innerHTML = '<div style="text-align:center; padding:20px;"><i class="fas fa-spinner fa-spin"></i> Génération...</div>';

        try {
            const text = await getSmartText('cards-scope');
            const res = await callApi('ai/generate-flashcards-text', { text, count: 8 });

            STATE.flashcardsData = res.flashcards || res.cards || [];

            if (Array.isArray(STATE.flashcardsData) && STATE.flashcardsData.length > 0) {
                STATE.sessionData.flashcards = STATE.flashcardsData;
                STATE.currentFlashcardIndex = 0;
                renderSingleFlashcard(0);
            } else {
                container.innerHTML = '<p>Aucune carte générée.</p>';
            }

        } catch (err) {
            container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${err.message}</div>`;
        }
    });
}

function renderSingleFlashcard(index) {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '';

    if (index < 0 || index >= STATE.flashcardsData.length) return;

    const cardData = STATE.flashcardsData[index];
    const template = document.getElementById('flashcard-template');
    if (!template) return;

    const clone = template.content.cloneNode(true);
    clone.querySelector('.front-content').textContent = cardData.front;
    clone.querySelector('.back-content').textContent = cardData.back;

    const wrapper = clone.querySelector('.flashcard-wrapper');
    wrapper.onclick = () => wrapper.classList.toggle('flipped');

    container.appendChild(clone);

    // أزرار التحكم
    const controls = document.createElement('div');
    controls.style.cssText = "display: flex; justify-content: space-between; margin-top: 15px; align-items: center;";

    controls.innerHTML = `
        <button class="nav-btn" id="fc-prev" ${index === 0 ? 'disabled' : ''} style="background:#cbd5e1; border:none; padding:8px; border-radius:5px; cursor:pointer;"><i class="fas fa-arrow-left"></i></button>
        <span style="font-weight:bold; color:#64748b;">${index + 1} / ${STATE.flashcardsData.length}</span>
        <button class="nav-btn" id="fc-next" style="background:var(--primary); color:white; border:none; padding:8px; border-radius:5px; cursor:pointer;"><i class="fas fa-arrow-right"></i></button>
    `;

    container.appendChild(controls);

    document.getElementById('fc-prev').onclick = () => renderSingleFlashcard(index - 1);
    document.getElementById('fc-next').onclick = () => {
        if (index < STATE.flashcardsData.length - 1) renderSingleFlashcard(index + 1);
    };
}

// =============================================================================
//  6. المايند ماب 🌳
// =============================================================================

const mapBtn = document.getElementById('generate-mindmap-btn');
if (mapBtn) {
    mapBtn.addEventListener('click', async () => {
        const svgEl = document.getElementById('mindmap-svg');
        if (!svgEl) return;

        svgEl.innerHTML = '';
        const container = svgEl.parentElement;
        container.style.position = 'relative';

        // إنشاء لودر مؤقت
        const loader = document.createElement('div');
        loader.textContent = 'Génération de la Map...';
        loader.style.cssText = 'position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);';
        container.appendChild(loader);

        try {
            const text = await getSmartText('quiz-scope'); // نستخدم نفس النص لتوفير الوقت
            const res = await callApi('ai/generate-mindmap-text', { text });

            const markdown = res.markdown || res.data;
            STATE.sessionData.mindMapData = markdown;

            loader.remove();

            if (window.markmap) {
                const { Transformer, Markmap } = window.markmap;
                const transformer = new Transformer();
                const { root } = transformer.transform(markdown);
                Markmap.create(svgEl, null, root);

                const dlBtn = document.getElementById('download-map-btn');
                if (dlBtn) dlBtn.style.display = 'block';
            }
        } catch (err) {
            loader.textContent = "Erreur: " + err.message;
            loader.style.color = 'red';
        }
    });
}

// =============================================================================
//  7. الحفظ والاسترجاع (Save & Restore) 💾
// =============================================================================

const saveBtn = document.getElementById('save-progress-btn');
if (saveBtn) {
    saveBtn.addEventListener('click', async () => {
        if (!STATE.fileHash) return alert("Aucun fichier ouvert !");

        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';

        try {
            // تجهيز البيانات
            const payload = {
                drawings: STATE.drawings,
                pins: STATE.pins,
                quizzes: STATE.sessionData.quizzes,
                flashcards: STATE.sessionData.flashcards,
                mindMapData: STATE.sessionData.mindMapData
            };

            // إرسال lessonId + progressData كما يتوقع progressController.js
            const res = await callApi('progress/save', {
                lessonId: STATE.fileHash,
                progressData: payload
            });

            if (res.success) {
                saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved!';
                setTimeout(() => saveBtn.innerHTML = originalText, 2000);
            }
        } catch (e) {
            saveBtn.innerHTML = '<i class="fas fa-times"></i> Error';
            setTimeout(() => saveBtn.innerHTML = originalText, 2000);
        }
    });
}

async function loadSavedProgress() {
    if (!STATE.fileHash) return;

    try {
        const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`, {
            credentials: 'include'
        });

        if (res.status === 401) {
            console.log("Non connecté (Guest Mode)");
            return;
        }

        const json = await res.json();

        if (json.success && json.data) {
            const data = json.data.progressData || json.data;

            // استعادة الرسم
            STATE.drawings = data.drawings || [];
            redrawAllDrawings();

            // استعادة الكويز
            if (data.quizzes && data.quizzes.length > 0) {
                STATE.sessionData.quizzes = data.quizzes;
                const rBtn = document.getElementById('restore-quiz-btn');
                if (rBtn) {
                    rBtn.style.display = 'flex';
                    rBtn.innerHTML = `<i class="fas fa-history"></i> Reprendre Quiz (${data.quizzes.length})`;
                }
            }

            // استعادة البطاقات
            if (data.flashcards && data.flashcards.length > 0) {
                STATE.sessionData.flashcards = data.flashcards;
                const rBtn = document.getElementById('restore-cards-btn');
                if (rBtn) {
                    rBtn.style.display = 'flex';
                    rBtn.innerHTML = `<i class="fas fa-history"></i> Reprendre Cartes (${data.flashcards.length})`;
                }
            }

            // استعادة المايند ماب
            if (data.mindMapData) {
                STATE.sessionData.mindMapData = data.mindMapData;
                const rBtn = document.getElementById('restore-map-btn');
                if (rBtn) rBtn.style.display = 'flex';
            }

            console.log("Session loaded successfully!");
        }
    } catch (e) { console.log("New Session / No Save Found"); }
}

// أزرار الاستعادة
const restoreQuizBtn = document.getElementById('restore-quiz-btn');
if (restoreQuizBtn) {
    restoreQuizBtn.onclick = () => {
        STATE.quizData = STATE.sessionData.quizzes;
        renderQuizQuestion(0);
        restoreQuizBtn.style.display = 'none';
    };
}

const restoreCardsBtn = document.getElementById('restore-cards-btn');
if (restoreCardsBtn) {
    restoreCardsBtn.onclick = () => {
        STATE.flashcardsData = STATE.sessionData.flashcards;
        renderSingleFlashcard(0);
        restoreCardsBtn.style.display = 'none';
    };
}

const restoreMapBtn = document.getElementById('restore-map-btn');
if (restoreMapBtn) {
    restoreMapBtn.onclick = () => {
        const { Transformer, Markmap } = window.markmap;
        const transformer = new Transformer();
        const { root } = transformer.transform(STATE.sessionData.mindMapData);
        Markmap.create(document.getElementById('mindmap-svg'), null, root);
        restoreMapBtn.style.display = 'none';
    };
}

// =============================================================================
//  8. أدوات إضافية (AI Selection & Pins) 🤖
// =============================================================================

// مراقبة التحديد للنصوص
document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    const toolbar = document.getElementById('selection-toolbar');

    // إذا لم يكن هناك تحديد أو التحديد خارج الـ PDF
    if (sel.isCollapsed || !document.getElementById('pdf-wrapper')?.contains(sel.anchorNode)) {
        if (toolbar) toolbar.style.display = 'none';
        return;
    }

    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    STATE.selection.text = sel.toString();

    if (toolbar) {
        toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
        toolbar.style.left = `${rect.left + (rect.width / 2) - 100}px`;
        toolbar.style.display = 'flex';
    }
});

window.highlightSelection = function (color) {
    // يمكنك إضافة منطق تمييز النصوص هنا إذا أردت
    // حالياً نقوم فقط بإخفاء الشريط
    document.getElementById('selection-toolbar').style.display = 'none';
};

window.askAiAboutSelection = function () {
    const modal = document.getElementById('ai-modal');
    const answerBox = document.getElementById('ai-answer-text');
    modal.style.display = 'flex';
    answerBox.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Réflexion...';

    callApi('ai/ask-dentist', { text: STATE.selection.text, question: "Explique ceci en détail." })
        .then(res => {
            answerBox.innerHTML = marked.parse(res.answer || "Pas de réponse.");
        })
        .catch(e => {
            answerBox.textContent = "Erreur: " + e.message;
        });

    document.getElementById('selection-toolbar').style.display = 'none';
};
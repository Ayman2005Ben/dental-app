// =============================================================================
//  DONTIST SMART VIEWER - CONTROLLER (FINAL EDITION)
//  Features: Scroll Fix, Carousel Quiz, 3D Flashcards, MindMap, & Persistence
// =============================================================================

// 1. إعدادات PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// 2. الثوابت العامة
const API_BASE_URL = "https://dental-app-he1p.onrender.com"; // رابط السيرفر الخاص بك
const USER_TOKEN = localStorage.getItem('userToken'); // مفتاح المصادقة

// 3. إدارة الحالة (Global State)
const STATE = {
    pdfDoc: null,
    fileHash: null,      // معرف فريد للملف (للحفظ)
    scale: 1.2,          // مستوى التكبير الافتراضي
    currentPage: 1,

    // بيانات المحتوى التعليمي
    quizData: [],
    currentQuizIndex: 0,
    userQuizAnswers: {}, // تخزين إجابات المستخدم {0: 1, 1: 3, ...}

    flashcardsData: [],
    currentFlashcardIndex: 0,

    mindMapData: null,

    // بيانات الجلسة (للحفظ السحابي)
    sessionData: {
        quizzes: [],
        flashcards: [],
        mindMapData: null
    }
};

// =============================================================================
//  SECTION 1: CORE ENGINE (PDF RENDERING & SCROLL FIX) 🚀
// =============================================================================

const fileInput = document.getElementById('file-input');
const viewerContainer = document.getElementById('viewer-container');
const pdfWrapper = document.getElementById('pdf-wrapper');

// مستمع لرفع الملف
if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // حساب الهاش للملف (للحفظ والاسترجاع لاحقاً)
        const buffer = await file.arrayBuffer();
        // (يمكنك إضافة مكتبة spark-md5 إذا أردت هاش دقيق، هنا سنستخدم الاسم مؤقتاً للتبسيط)
        STATE.fileHash = file.name.replace(/\s+/g, '_');

        // تنظيف الواجهة
        pdfWrapper.innerHTML = '';

        // عرض مؤشر التحميل
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.innerHTML = '<i class="fas fa-spinner fa-spin fa-2x"></i><br>Traitement du fichier...';
        pdfWrapper.appendChild(loader);

        try {
            // تحميل المستند
            const loadingTask = pdfjsLib.getDocument(buffer);
            STATE.pdfDoc = await loadingTask.promise;

            // إزالة المؤشر
            pdfWrapper.removeChild(loader);

            // 🔥 الحل الجذري لمشكلة السكرول: حلقة تكرار بسيطة ومباشرة 🔥
            for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
                await renderPage(i);
            }

            // تفعيل مراقب الصفحات (لمعرفة الصفحة الحالية أثناء التمرير)
            setupScrollObserver();

            // محاولة استرجاع بيانات سابقة لهذا الملف
            loadSavedProgress();

        } catch (error) {
            console.error(error);
            pdfWrapper.innerHTML = '<div style="color:white; text-align:center;">Erreur lors de l\'ouverture du PDF</div>';
        }
    });
}

// دالة رسم الصفحة الواحدة
async function renderPage(pageNum) {
    const page = await STATE.pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: STATE.scale });

    // إنشاء حاوية الصفحة
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page-container';
    pageDiv.id = `page-${pageNum}`;
    pageDiv.style.width = `${viewport.width}px`;
    pageDiv.style.height = `${viewport.height}px`;
    pageDiv.style.marginBottom = '20px'; // مسافة بين الصفحات

    // 1. الكانفس (Canvas) لعرض الصورة
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    canvas.style.display = 'block';

    // 2. طبقة النصوص (Text Layer) لتحديد ونسخ النص
    const textLayerDiv = document.createElement('div');
    textLayerDiv.className = 'textLayer';
    textLayerDiv.style.width = `${viewport.width}px`;
    textLayerDiv.style.height = `${viewport.height}px`;
    textLayerDiv.style.setProperty('--scale-factor', STATE.scale);

    // تجميع العناصر
    pageDiv.appendChild(canvas);
    pageDiv.appendChild(textLayerDiv);
    pdfWrapper.appendChild(pageDiv);

    // رسم محتوى PDF على الكانفس
    await page.render({ canvasContext: ctx, viewport }).promise;

    // رسم طبقة النصوص (مهم جداً للذكاء الاصطناعي والتحديد)
    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayerDiv,
        viewport: viewport,
        textDivs: []
    });
}

// مراقب التمرير (Scroll Observer)
function setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                STATE.currentPage = parseInt(entry.target.id.split('-')[1]);
            }
        });
    }, { threshold: 0.3, root: viewerContainer });

    document.querySelectorAll('.page-container').forEach(el => observer.observe(el));
}

// =============================================================================
//  SECTION 2: API & INTELLIGENCE 🧠
// =============================================================================

// دالة الاتصال بالسيرفر
async function callApi(endpoint, body = {}) {
    // يمكنك تفعيل التحقق من التوكن هنا إذا كان السيرفر يطلبه
    /*
    if (!USER_TOKEN) {
        alert("Veuillez vous connecter !");
        throw new Error("Auth Missing");
    }
    */

    // إضافة معرف الملف للطلب
    body.lessonId = STATE.fileHash;

    try {
        const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${USER_TOKEN}` 
            },
            body: JSON.stringify(body)
        });

        const data = await res.json();
        return data;
    } catch (e) {
        console.error("API Error", e);
        throw e;
    }
}

// استخراج النص بذكاء (صفحة واحدة أو الملف كامل)
async function getSmartText(scopeName) {
    if (!STATE.pdfDoc) return "";

    // معرفة اختيار المستخدم من الـ Radio Buttons
    const scope = document.querySelector(`input[name="${scopeName}"]:checked`)?.value || 'page';
    let text = "";

    if (scope === 'page') {
        const page = await STATE.pdfDoc.getPage(STATE.currentPage);
        const content = await page.getTextContent();
        text = content.items.map(i => i.str).join(' ');
    } else {
        // استخراج عينة كبيرة (أول 30 صفحة مثلاً لتجنب البطء)
        const limit = Math.min(STATE.pdfDoc.numPages, 30);
        for (let i = 1; i <= limit; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(i => i.str).join(' ') + "\n";
        }
    }
    return text;
}

// =============================================================================
//  SECTION 3: QUIZ SYSTEM (CAROUSEL MODE) 🎯
// =============================================================================

document.getElementById('generate-quiz-btn').addEventListener('click', async () => {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Génération du quiz...</div>';

    try {
        const text = await getSmartText('quiz-scope');
        // إذا اختار "الكل" نطلب 10 أسئلة، وإلا 5
        const isFull = document.querySelector('input[name="quiz-scope"]:checked').value === 'full';
        const count = isFull ? 10 : 5;

        const res = await callApi('ai/generate-quiz-text', { text, count });

        if (res && (res.questions || res.data)) {
            STATE.quizData = res.questions || res.data;
            STATE.sessionData.quizzes = STATE.quizData;
            STATE.currentQuizIndex = 0;
            STATE.userQuizAnswers = {}; // تصفير الإجابات

            renderQuizCard(); // عرض السؤال الأول
        } else {
            container.innerHTML = '<p style="text-align:center;">Échec de la génération</p>';
        }
    } catch (e) {
        container.innerHTML = `<p style="text-align:center; color:red;">Erreur: ${e.message}</p>`;
    }
});

function renderQuizCard() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    if (!STATE.quizData.length) return;

    const q = STATE.quizData[STATE.currentQuizIndex];
    const template = document.getElementById('quiz-card-template');
    const clone = template.content.cloneNode(true);

    // 1. تعبئة البيانات
    clone.querySelector('.quiz-progress').textContent = `Question ${STATE.currentQuizIndex + 1} / ${STATE.quizData.length}`;
    clone.querySelector('.question-text').textContent = q.question;

    // 2. تعبئة الخيارات
    const optsContainer = clone.querySelector('.options-container');
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;

        // التحقق مما إذا كان المستخدم قد أجاب مسبقاً
        if (STATE.userQuizAnswers[STATE.currentQuizIndex] !== undefined) {
            btn.disabled = true; // تعطيل الأزرار بعد الإجابة
            const userAns = STATE.userQuizAnswers[STATE.currentQuizIndex];
            const correctInd = q.correctOptionIndexes[0];

            if (idx === correctInd) btn.classList.add('correct');
            else if (idx === userAns) btn.classList.add('wrong');
        } else {
            // لم يجب بعد
            btn.onclick = () => handleQuizAnswer(idx);
        }
        optsContainer.appendChild(btn);
    });

    // 3. عرض الشرح إذا تمت الإجابة
    if (STATE.userQuizAnswers[STATE.currentQuizIndex] !== undefined) {
        const explBox = clone.querySelector('.explanation-box');
        explBox.style.display = 'block';
        explBox.textContent = `💡 Explication: ${q.explanation || "Bonne réponse !"}`;
    }

    // 4. أزرار التنقل
    const prevBtn = clone.querySelector('.btn-prev');
    const nextBtn = clone.querySelector('.btn-next');

    prevBtn.disabled = (STATE.currentQuizIndex === 0);
    prevBtn.onclick = () => {
        STATE.currentQuizIndex--;
        renderQuizCard();
    };

    nextBtn.textContent = (STATE.currentQuizIndex === STATE.quizData.length - 1) ? "Terminer" : "Suivant";
    nextBtn.onclick = () => {
        if (STATE.currentQuizIndex < STATE.quizData.length - 1) {
            STATE.currentQuizIndex++;
            renderQuizCard();
        } else {
            alert("Quiz terminé ! Bravo 🎉");
        }
    };

    container.appendChild(clone);
}

function handleQuizAnswer(selectedIndex) {
    STATE.userQuizAnswers[STATE.currentQuizIndex] = selectedIndex;
    renderQuizCard(); // إعادة الرسم لإظهار الألوان والشرح
}


// =============================================================================
//  SECTION 4: FLASHCARDS (3D FLIP) 🃏
// =============================================================================

document.getElementById('generate-flashcards-btn').addEventListener('click', async () => {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Création des cartes...</div>';

    try {
        const text = await getSmartText('cards-scope');
        const count = 8; // عدد البطاقات

        const res = await callApi('ai/generate-flashcards-text', { text, count });

        if (res && (res.flashcards || res.cards)) {
            STATE.flashcardsData = res.flashcards || res.cards;
            STATE.sessionData.flashcards = STATE.flashcardsData;
            STATE.currentFlashcardIndex = 0;

            renderFlashcardViewer();
        } else {
            container.innerHTML = '<p>Aucune carte générée</p>';
        }
    } catch (e) {
        container.innerHTML = `<p style="color:red;">Erreur: ${e.message}</p>`;
    }
});

function renderFlashcardViewer() {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '';

    if (!STATE.flashcardsData.length) return;

    const cardData = STATE.flashcardsData[STATE.currentFlashcardIndex];
    const template = document.getElementById('flashcard-template');
    const clone = template.content.cloneNode(true);

    // تعبئة الوجهين
    clone.querySelector('.front-content').textContent = cardData.front;
    clone.querySelector('.back-content').textContent = cardData.back;

    // تفعيل القلب عند النقر
    const wrapper = clone.querySelector('.flashcard-wrapper');
    wrapper.onclick = () => wrapper.classList.toggle('flipped');

    container.appendChild(clone);

    // إضافة أزرار التحكم أسفل البطاقة
    const controls = document.createElement('div');
    controls.style.cssText = "display:flex; justify-content:space-between; align-items:center; margin-top:10px;";

    controls.innerHTML = `
        <button id="card-prev" class="tab-btn" style="border-radius:50%; width:40px; height:40px; background:#f1f5f9;"><i class="fas fa-chevron-left"></i></button>
        <span style="font-weight:bold; color:#64748b;">${STATE.currentFlashcardIndex + 1} / ${STATE.flashcardsData.length}</span>
        <button id="card-next" class="tab-btn" style="border-radius:50%; width:40px; height:40px; background:var(--primary); color:white;"><i class="fas fa-chevron-right"></i></button>
    `;

    container.appendChild(controls);

    // ربط الأحداث
    container.querySelector('#card-prev').onclick = () => {
        if (STATE.currentFlashcardIndex > 0) {
            STATE.currentFlashcardIndex--;
            renderFlashcardViewer();
        }
    };
    container.querySelector('#card-next').onclick = () => {
        if (STATE.currentFlashcardIndex < STATE.flashcardsData.length - 1) {
            STATE.currentFlashcardIndex++;
            renderFlashcardViewer();
        }
    };
}


// =============================================================================
//  SECTION 5: MIND MAP (MARKMAP) 🌳
// =============================================================================

let markmapInstance = null;

document.getElementById('generate-mindmap-btn').addEventListener('click', async () => {
    const svgEl = document.getElementById('mindmap-svg');

    // إظهار تحميل بسيط داخل الصندوق
    const parent = svgEl.parentElement;
    const originalContent = parent.innerHTML;
    parent.innerHTML = '<div style="display:flex; height:100%; align-items:center; justify-content:center; color:#64748b;"><i class="fas fa-brain fa-spin"></i>&nbsp;Analyse structurelle...</div>';

    try {
        // دائماً نأخذ نطاق كامل للخريطة الذهنية
        let text = "";
        const limit = Math.min(STATE.pdfDoc.numPages, 20);
        for (let i = 1; i <= limit; i++) {
            text += (await (await STATE.pdfDoc.getPage(i)).getTextContent()).items.map(x => x.str).join(' ');
        }

        const res = await callApi('ai/generate-mindmap-text', { text });
        const markdown = res.markdown || res.data;

        STATE.sessionData.mindMapData = markdown;

        // إعادة هيكل الـ SVG
        parent.innerHTML = '';
        const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        newSvg.id = "mindmap-svg";
        newSvg.style.width = "100%";
        newSvg.style.height = "100%";
        parent.appendChild(newSvg);

        // رسم الخريطة
        const { Transformer, Markmap } = window.markmap;
        const transformer = new Transformer();
        const { root } = transformer.transform(markdown);
        markmapInstance = Markmap.create(newSvg, null, root);
        markmapInstance.fit(); // ملائمة الحجم

    } catch (e) {
        parent.innerHTML = `<div style="padding:20px; color:red;">Erreur: ${e.message}</div>`;
    }
});

// أزرار التحكم بالخريطة
document.getElementById('zoom-in').onclick = () => markmapInstance && markmapInstance.rescale(1.2);
document.getElementById('zoom-out').onclick = () => markmapInstance && markmapInstance.rescale(0.8);
document.getElementById('zoom-reset').onclick = () => markmapInstance && markmapInstance.fit();


// =============================================================================
//  SECTION 6: SAVE & RESTORE 💾
// =============================================================================

document.getElementById('save-progress-btn').addEventListener('click', async () => {
    if (!STATE.fileHash) return alert("Aucun fichier ouvert !");

    const btn = document.getElementById('save-progress-btn');
    const originalHtml = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sauvegarde...';

    try {
        const payload = {
            quizzes: STATE.sessionData.quizzes,
            flashcards: STATE.sessionData.flashcards,
            mindMapData: STATE.sessionData.mindMapData,
            timestamp: new Date()
        };

        const res = await callApi('progress/save', { progressData: payload });

        if (res.success) {
            btn.innerHTML = '<i class="fas fa-check"></i> Sauvegardé !';
            setTimeout(() => btn.innerHTML = originalHtml, 2000);
        }
    } catch (e) {
        alert("Erreur de sauvegarde");
        btn.innerHTML = originalHtml;
    }
});

async function loadSavedProgress() {
    if (!STATE.fileHash) return;

    try {
        // محاكاة طلب GET (يمكنك تعديلها لتناسب الـ API الخاص بك)
        const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`);
        const json = await res.json();

        if (json.success && json.data) {
            const data = json.data.progressData || json.data;

            // 1. استعادة الكويز
            if (data.quizzes && data.quizzes.length) {
                STATE.sessionData.quizzes = data.quizzes;
                document.getElementById('restore-quiz-btn').style.display = 'flex';
            }

            // 2. استعادة البطاقات
            if (data.flashcards && data.flashcards.length) {
                STATE.sessionData.flashcards = data.flashcards;
                document.getElementById('restore-cards-btn').style.display = 'flex';
            }

            // 3. استعادة الخريطة
            if (data.mindMapData) {
                STATE.sessionData.mindMapData = data.mindMapData;
                document.getElementById('restore-map-btn').style.display = 'flex';
            }
        }
    } catch (e) {
        console.log("Aucune sauvegarde trouvée pour ce fichier.");
    }
}

// تفعيل أزرار الاستعادة
document.getElementById('restore-quiz-btn').onclick = () => {
    STATE.quizData = STATE.sessionData.quizzes;
    STATE.currentQuizIndex = 0;
    STATE.userQuizAnswers = {};
    renderQuizCard();
    document.getElementById('restore-quiz-btn').style.display = 'none';
};

document.getElementById('restore-cards-btn').onclick = () => {
    STATE.flashcardsData = STATE.sessionData.flashcards;
    STATE.currentFlashcardIndex = 0;
    renderFlashcardViewer();
    document.getElementById('restore-cards-btn').style.display = 'none';
};

document.getElementById('restore-map-btn').onclick = () => {
    const svgEl = document.getElementById('mindmap-svg');
    const { Transformer, Markmap } = window.markmap;
    const { root } = new Transformer().transform(STATE.sessionData.mindMapData);
    markmapInstance = Markmap.create(svgEl, null, root);
    markmapInstance.fit();
    document.getElementById('restore-map-btn').style.display = 'none';
};
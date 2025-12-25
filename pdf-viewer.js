// =============================================================================
//  Smart Dental Viewer - PRO LOGIC (Templates + Offline Style + Backend)
// =============================================================================

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// --- إدارة الحالة (Global State) ---
const STATE = {
    pdfDoc: null,
    lessonId: 'demo_lesson',
    scale: 1.0,

    // بيانات الجلسة
    quizData: [],
    currentQuestionIndex: 0,
    userAnswers: {}, // لحفظ إجابات المستخدم

    flashcardsData: [],
    mindMapData: null,

    // بيانات للحفظ
    sessionData: {
        chatHistory: [],
        flashcards: [],
        quizzes: [],
        mindMapData: null
    }
};

const USER_TOKEN = localStorage.getItem('userToken');

// =============================================================================
//  1. دوال الاتصال بالسيرفر (API & PDF)
// =============================================================================

async function callApi(endpoint, body = {}) {
    if (!USER_TOKEN) {
        alert("Veuillez vous connecter !");
        throw new Error("Auth Error");
    }

    // إضافة معرف الدرس للطلب
    body.lessonId = STATE.lessonId;

    const res = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${USER_TOKEN}`
        },
        body: JSON.stringify(body)
    });

    const data = await res.json();
    if (!data.success && !res.ok) throw new Error(data.message || 'Server Error');
    return data;
}

// استخراج النص الكامل من ملف PDF (لإرساله للذكاء الاصطناعي)
async function getFullPdfText() {
    if (!STATE.pdfDoc) return "";
    let fullText = "";
    // نحدد حداً أقصى للصفحات لتجنب بطء المتصفح (مثلاً 30 صفحة)
    const maxPages = Math.min(STATE.pdfDoc.numPages, 30);

    for (let i = 1; i <= maxPages; i++) {
        const page = await STATE.pdfDoc.getPage(i);
        const content = await page.getTextContent();
        fullText += content.items.map(item => item.str).join(' ') + "\n";
    }
    return fullText;
}

// =============================================================================
//  2. تحميل وعرض PDF
// =============================================================================

document.getElementById('file-input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    STATE.lessonId = file.name.replace(/\s+/g, '_').toLowerCase();
    const url = URL.createObjectURL(file);

    const container = document.getElementById('pdf-wrapper');
    container.innerHTML = '<div class="loader">Loading PDF...</div>';

    try {
        STATE.pdfDoc = await pdfjsLib.getDocument(url).promise;
        container.innerHTML = ''; // تنظيف اللودر

        // عرض الصفحات
        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const viewport = page.getViewport({ scale: STATE.scale });

            const div = document.createElement('div');
            div.className = 'page-container';
            div.style.marginBottom = '20px';

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            div.appendChild(canvas);
            container.appendChild(div);

            await page.render({ canvasContext: context, viewport }).promise;
        }

        // محاولة استرجاع التقدم المحفوظ
        loadSavedProgress();

    } catch (err) {
        console.error(err);
        container.innerHTML = '<p style="color:white;">Erreur lors du chargement du PDF.</p>';
    }
});

// =============================================================================
//  3. منطق الكويز (Carousel System) - نفس نظامك الأوفلاين
// =============================================================================

// زر التوليد
document.getElementById('generate-quiz-btn').addEventListener('click', async () => {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Génération du Quiz...</div>';

    try {
        const text = await getFullPdfText();
        const res = await callApi('ai/generate-quiz-text', {
            text,
            count: 10,
            difficulty: 'hard',
            type: 'multiple',
            language: 'fr'
        });

        STATE.quizData = res.questions || res.data || [];
        STATE.currentQuestionIndex = 0;
        STATE.userAnswers = {}; // تصفير الإجابات السابقة
        STATE.sessionData.quizzes = STATE.quizData; // للحفظ

        if (STATE.quizData.length > 0) {
            renderQuizQuestion(0);
        } else {
            container.innerHTML = '<p class="loader">Aucune question générée.</p>';
        }

    } catch (err) {
        container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${err.message}</div>`;
    }
});

function renderQuizQuestion(index) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = ''; // مسح المحتوى القديم

    if (index < 0 || index >= STATE.quizData.length) return;

    const qData = STATE.quizData[index];
    const template = document.getElementById('quiz-card-template');
    const clone = template.content.cloneNode(true);

    // 1. تعبئة النصوص
    clone.querySelector('.quiz-progress').textContent = `Question ${index + 1} / ${STATE.quizData.length}`;
    clone.querySelector('.quiz-difficulty').textContent = qData.difficulty || 'Hard';
    clone.querySelector('.question-text').textContent = qData.question;

    // 2. إنشاء الخيارات
    const optionsContainer = clone.querySelector('.options-container');
    qData.options.forEach((opt, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;

        // استعادة الحالة إذا كان المستخدم قد أجاب سابقاً
        if (STATE.userAnswers[index] !== undefined) {
            btn.disabled = true;
            const correctIndices = qData.correctOptionIndexes || [0];
            if (correctIndices.includes(optIdx)) btn.classList.add('correct');
            if (STATE.userAnswers[index] === optIdx && !correctIndices.includes(optIdx)) btn.classList.add('wrong');
        } else {
            // إضافة مستمع النقر
            btn.onclick = () => handleAnswer(btn, optIdx, qData, index);
        }

        optionsContainer.appendChild(btn);
    });

    // 3. أزرار التنقل
    const prevBtn = clone.querySelector('.btn-prev');
    const nextBtn = clone.querySelector('.btn-next');
    const explanationBox = clone.querySelector('.explanation-box');

    // إظهار التفسير إذا تمت الإجابة
    if (STATE.userAnswers[index] !== undefined) {
        explanationBox.style.display = 'block';
        explanationBox.textContent = qData.explanation;
    }

    // منطق الأزرار
    prevBtn.disabled = index === 0;
    prevBtn.onclick = () => renderQuizQuestion(index - 1);

    nextBtn.textContent = (index === STATE.quizData.length - 1) ? 'Finish' : 'Next';
    nextBtn.onclick = () => {
        if (index < STATE.quizData.length - 1) renderQuizQuestion(index + 1);
        else alert("Quiz Terminé! 🎉");
    };

    container.appendChild(clone);
}

function handleAnswer(selectedBtn, selectedIdx, qData, qIndex) {
    // حفظ الإجابة
    STATE.userAnswers[qIndex] = selectedIdx;

    const container = document.getElementById('quiz-container');
    const allBtns = container.querySelectorAll('.option-btn');
    const explanationBox = container.querySelector('.explanation-box');
    const correctIndices = qData.correctOptionIndexes || [0];

    // تجميد الأزرار وتلوينها
    allBtns.forEach((btn, idx) => {
        btn.disabled = true;
        if (correctIndices.includes(idx)) btn.classList.add('correct');
    });

    if (!correctIndices.includes(selectedIdx)) {
        selectedBtn.classList.add('wrong');
    }

    // إظهار التفسير
    explanationBox.textContent = qData.explanation;
    explanationBox.style.display = 'block';
}

// =============================================================================
//  4. منطق الفلاش كاردز (3D Flip System)
// =============================================================================

document.getElementById('generate-flashcards-btn').addEventListener('click', async () => {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Génération des cartes...</div>';

    try {
        const text = await getFullPdfText();
        const res = await callApi('ai/generate-flashcards-text', { text, count: 8, language: 'fr' });

        STATE.flashcardsData = res.flashcards || res.cards || [];
        STATE.sessionData.flashcards = STATE.flashcardsData; // للحفظ

        container.innerHTML = ''; // تنظيف

        if (STATE.flashcardsData.length > 0) {
            STATE.flashcardsData.forEach(cardData => {
                const cardEl = createFlashcardElement(cardData);
                container.appendChild(cardEl);
            });
        } else {
            container.innerHTML = '<p class="loader">Aucune carte générée.</p>';
        }

    } catch (err) {
        container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${err.message}</div>`;
    }
});

function createFlashcardElement(data) {
    const template = document.getElementById('flashcard-template');
    const clone = template.content.cloneNode(true);

    // تعبئة البيانات
    clone.querySelector('.front-content').textContent = data.front;
    clone.querySelector('.back-content').textContent = data.back;

    // تفعيل القلب (Flip)
    const wrapper = clone.querySelector('.flashcard-wrapper');
    wrapper.onclick = () => wrapper.classList.toggle('flipped');

    // أزرار التقييم (منع القلب عند الضغط عليها)
    const ratingBtns = clone.querySelectorAll('.rating-btn');
    ratingBtns.forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation(); // منع القلب
            btn.style.transform = "scale(1.2)";
            setTimeout(() => btn.style.transform = "scale(1)", 200);
            console.log("Rated:", btn.dataset.rating);
        };
    });

    return clone;
}

// =============================================================================
//  5. منطق المايند ماب (Markmap)
// =============================================================================

let markmapInstance = null;

document.getElementById('generate-mindmap-btn').addEventListener('click', async () => {
    const svgEl = document.getElementById('mindmap-svg');
    // إضافة لودر بسيط كنص مؤقت
    // لا نمسح الـ SVG نفسه حتى لا نفقد المرجع، بل نمسح محتواه
    svgEl.innerHTML = '';

    try {
        const text = await getFullPdfText();
        const res = await callApi('ai/generate-mindmap-text', { text });

        const markdown = res.markdown || res.data;
        STATE.sessionData.mindMapData = markdown; // للحفظ

        renderMindMap(markdown);

    } catch (err) {
        alert("Erreur MindMap: " + err.message);
    }
});

function renderMindMap(markdown) {
    const svgEl = document.getElementById('mindmap-svg');
    if (!window.markmap) return;

    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);

    svgEl.innerHTML = ''; // تنظيف

    // إنشاء الخريطة مع خيارات التكبير
    markmapInstance = Markmap.create(svgEl, {
        zoom: true,
        pan: true,
        fitRatio: 1
    }, root);
}

// أزرار التحكم بالزوم
document.getElementById('zoom-in').onclick = () => markmapInstance && markmapInstance.rescale(1.25);
document.getElementById('zoom-out').onclick = () => markmapInstance && markmapInstance.rescale(0.8);
document.getElementById('zoom-reset').onclick = () => markmapInstance && markmapInstance.fit();

// =============================================================================
//  6. نظام الحفظ والاسترجاع (Cloudinary)
// =============================================================================

document.getElementById('save-progress-btn').addEventListener('click', async () => {
    const btn = document.getElementById('save-progress-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';

    try {
        // تحديث البيانات الحالية قبل الحفظ
        const payload = {
            ...STATE.sessionData,
            timestamp: new Date()
        };

        const res = await callApi('progress/save', {
            progressData: payload
        });

        if (res.success) {
            btn.innerHTML = '<i class="fas fa-check"></i> Saved!';
            setTimeout(() => btn.innerHTML = originalText, 2000);
        }
    } catch (e) {
        alert("Save Failed!");
        btn.innerHTML = '<i class="fas fa-times"></i> Error';
    }
});

async function loadSavedProgress() {
    try {
        const res = await fetch(`/api/progress?lessonId=${STATE.lessonId}`, {
            headers: { 'Authorization': `Bearer ${USER_TOKEN}` }
        });
        const json = await res.json();

        if (json.success && json.data) {
            const data = json.data;
            console.log("Session Loaded:", data);

            // استعادة الكويزات
            if (data.quizzes && data.quizzes.length > 0) {
                STATE.quizData = data.quizzes;
                STATE.sessionData.quizzes = data.quizzes;
                renderQuizQuestion(0);
            }

            // استعادة الفلاش كاردز
            if (data.flashcards && data.flashcards.length > 0) {
                STATE.flashcardsData = data.flashcards;
                STATE.sessionData.flashcards = data.flashcards;
                const container = document.getElementById('flashcards-container');
                container.innerHTML = '';
                STATE.flashcardsData.forEach(c => container.appendChild(createFlashcardElement(c)));
            }

            // استعادة المايند ماب
            if (data.mindMapData) {
                renderMindMap(data.mindMapData);
            }
        }
    } catch (e) {
        console.log("No saved session found.");
    }
}
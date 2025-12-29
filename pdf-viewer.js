// =============================================================================
//  Smart Dental Viewer - PROFESSOR MODE (Carousel for Quiz & Flashcards)
// =============================================================================

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// --- إدارة الحالة (Global State) ---
const STATE = {
    pdfDoc: null,
    lessonId: 'demo_lesson',
    scale: 1.0,
    currentPage: 1,

    // بيانات الكويز
    quizData: [],
    currentQuizIndex: 0,
    userAnswers: {},

    // بيانات الفلاش كاردز
    flashcardsData: [],
    currentFlashcardIndex: 0, // تتبع رقم البطاقة الحالية

    // بيانات المايند ماب
    mindMapData: null,

    // بيانات الحفظ
    sessionData: {
        chatHistory: [],
        flashcards: [],
        quizzes: [],
        mindMapData: null
    }
};

const USER_TOKEN = localStorage.getItem('userToken');

// =============================================================================
//  1. دوال الاتصال والذكاء (The Brain) 🧠
// =============================================================================

async function callApi(endpoint, body = {}) {
    if (!USER_TOKEN) { alert("Veuillez vous connecter !"); throw new Error("Auth Error"); }
    body.lessonId = STATE.lessonId;

    const res = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${USER_TOKEN}` },
        body: JSON.stringify(body)
    });

    const data = await res.json();
    if (!data.success && !res.ok) throw new Error(data.message || 'Server Error');
    return data;
}

// --- استخراج النص الذكي (حسب اختيارك: صفحة واحدة أو كل الدرس) ---
async function getSmartText(scopeInputName) {
    if (!STATE.pdfDoc) return "";

    // معرفة اختيار المستخدم (Page vs Full)
    const scope = document.querySelector(`input[name="${scopeInputName}"]:checked`)?.value || 'page';
    let text = "";

    if (scope === 'page') {
        // صفحة واحدة
        const page = await STATE.pdfDoc.getPage(STATE.currentPage);
        const content = await page.getTextContent();
        text = content.items.map(i => i.str).join(' ');
    } else {
        // كل الدرس (مع تخطي الغلاف)
        const maxPages = Math.min(STATE.pdfDoc.numPages, 30);
        // نبدأ من i=2 لتخطي الغلاف (الصفحة 1) إذا كان الملف كبيراً
        const startPage = STATE.pdfDoc.numPages > 3 ? 2 : 1;

        for (let i = startPage; i <= maxPages; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(' ') + "\n";
        }
    }

    // 🔥 الخدعة البرمجية: إضافة "شخصية البروفيسور" للنص قبل إرساله
    const professorInstruction = `
    INSTRUCTIONS POUR L'IA:
    - Tu es un Professeur Expert en Dentisterie.
    - Ignore les pages de couverture, les noms des auteurs, et les dates.
    - Extrait uniquement les faits cliniques, pathologiques, et thérapeutiques CRUCIAUX (High Yield Facts).
    - Pour les questions/flashcards, concentre-toi sur les pièges des examens et les diagnostics différentiels.
    CONTENU DU COURS:
    `;

    return professorInstruction + text;
}

// =============================================================================
//  2. تحميل PDF
// =============================================================================

document.getElementById('file-input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    STATE.lessonId = file.name.replace(/\s+/g, '_').toLowerCase();
    const url = URL.createObjectURL(file);

    const container = document.getElementById('pdf-wrapper');
    container.innerHTML = '<div class="loader">Chargement PDF...</div>';

    try {
        STATE.pdfDoc = await pdfjsLib.getDocument(url).promise;
        container.innerHTML = '';

        // عرض الصفحات
        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const viewport = page.getViewport({ scale: STATE.scale });

            const div = document.createElement('div');
            div.className = 'page-container';
            div.id = `page-${i}`;
            div.style.marginBottom = '20px';

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            div.appendChild(canvas);
            container.appendChild(div);

            await page.render({ canvasContext: context, viewport }).promise;
        }

        // مراقب التمرير لمعرفة الصفحة الحالية
        setupPageObserver();

        // محاولة استرجاع الحفظ
        loadSavedProgress();

    } catch (err) {
        container.innerHTML = '<p style="color:white;">Erreur chargement PDF</p>';
    }
});

function setupPageObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                STATE.currentPage = parseInt(entry.target.id.split('-')[1]);
            }
        });
    }, { root: document.getElementById('viewer-container'), threshold: 0.5 });

    document.querySelectorAll('.page-container').forEach(p => observer.observe(p));
}

// =============================================================================
//  3. الكويز (Carousel Mode)
// =============================================================================

document.getElementById('generate-quiz-btn').addEventListener('click', async () => {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Analyse Profonde...</div>';

    try {
        const text = await getSmartText('quiz-scope');
        const count = document.querySelector('input[name="quiz-scope"]:checked').value === 'full' ? 15 : 5;

        const res = await callApi('ai/generate-quiz-text', {
            text, count, difficulty: 'hard', type: 'multiple', language: 'fr'
        });

        STATE.quizData = res.questions || res.data || [];
        STATE.currentQuizIndex = 0;
        STATE.userAnswers = {};
        STATE.sessionData.quizzes = STATE.quizData;

        if (STATE.quizData.length > 0) renderQuizQuestion(0);
        else container.innerHTML = '<p class="loader">Aucune question générée.</p>';

    } catch (err) {
        container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${err.message}</div>`;
    }
});

function renderQuizQuestion(index) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    if (index < 0 || index >= STATE.quizData.length) return;

    const qData = STATE.quizData[index];
    const template = document.getElementById('quiz-card-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector('.quiz-progress').textContent = `Question ${index + 1} / ${STATE.quizData.length}`;
    clone.querySelector('.question-text').textContent = qData.question;

    const optionsContainer = clone.querySelector('.options-container');
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
                renderQuizQuestion(index); // Re-render to show colors
            };
        }
        optionsContainer.appendChild(btn);
    });

    if (STATE.userAnswers[index] !== undefined) {
        const expl = clone.querySelector('.explanation-box');
        expl.textContent = qData.explanation;
        expl.style.display = 'block';
    }

    const prevBtn = clone.querySelector('.btn-prev');
    const nextBtn = clone.querySelector('.btn-next');

    prevBtn.disabled = index === 0;
    prevBtn.onclick = () => renderQuizQuestion(index - 1);

    nextBtn.textContent = index === STATE.quizData.length - 1 ? 'Finish' : 'Next';
    nextBtn.onclick = () => {
        if (index < STATE.quizData.length - 1) renderQuizQuestion(index + 1);
        else alert("Quiz Terminé! 🎉");
    };

    container.appendChild(clone);
}

// =============================================================================
//  4. الفلاش كاردز (Carousel / Single Card Mode) - التعديل الجديد 🔥
// =============================================================================

document.getElementById('generate-flashcards-btn').addEventListener('click', async () => {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Extraction des cartes...</div>';

    try {
        const text = await getSmartText('cards-scope');
        const isFull = document.querySelector('input[name="cards-scope"]:checked').value === 'full';
        const count = isFull ? 35 : 8; // طلبك لـ 35 كارد

        const res = await callApi('ai/generate-flashcards-text', { text, count, language: 'fr' });

        STATE.flashcardsData = res.flashcards || res.cards || [];
        STATE.sessionData.flashcards = STATE.flashcardsData;
        STATE.currentFlashcardIndex = 0; // البدء من الأولى

        container.innerHTML = '';

        if (STATE.flashcardsData.length > 0) {
            renderSingleFlashcard(0); // عرض واحدة فقط
        } else {
            container.innerHTML = '<p class="loader">Aucune carte générée.</p>';
        }

    } catch (err) {
        container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${err.message}</div>`;
    }
});

// 🔥 الدالة الجديدة لعرض كارد واحدة مع أزرار التنقل
function renderSingleFlashcard(index) {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = ''; // مسح الكارد السابقة

    if (index < 0 || index >= STATE.flashcardsData.length) return;

    const cardData = STATE.flashcardsData[index];
    const template = document.getElementById('flashcard-template');
    const clone = template.content.cloneNode(true);

    // تعبئة البيانات
    clone.querySelector('.front-content').textContent = cardData.front;
    clone.querySelector('.back-content').textContent = cardData.back;

    // تفعيل القلب
    const wrapper = clone.querySelector('.flashcard-wrapper');
    wrapper.onclick = () => wrapper.classList.toggle('flipped');

    // أزرار التقييم
    clone.querySelectorAll('.rating-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            // يمكن إضافة منطق نقل للكارد التالية تلقائياً عند التقييم
            if (index < STATE.flashcardsData.length - 1) {
                setTimeout(() => renderSingleFlashcard(index + 1), 300);
            }
        };
    });

    // إضافة الكارد للصفحة
    container.appendChild(clone);

    // 🔥 إنشاء أزرار التنقل (Next/Prev) برمجياً أسفل الكارد
    const controlsDiv = document.createElement('div');
    controlsDiv.style.cssText = "display: flex; justify-content: space-between; margin-top: 15px; align-items: center;";

    // زر السابق
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-btn';
    prevBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
    prevBtn.style.background = "#cbd5e1";
    prevBtn.disabled = index === 0;
    prevBtn.onclick = () => renderSingleFlashcard(index - 1);

    // عداد البطاقات
    const counterSpan = document.createElement('span');
    counterSpan.style.cssText = "font-size: 14px; font-weight: bold; color: #64748b;";
    counterSpan.textContent = `Carte ${index + 1} / ${STATE.flashcardsData.length}`;

    // زر التالي
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn';
    nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
    nextBtn.style.background = "var(--primary)";
    nextBtn.style.color = "white";
    nextBtn.onclick = () => {
        if (index < STATE.flashcardsData.length - 1) renderSingleFlashcard(index + 1);
        else alert("Fini! Excellent travail. 🧠");
    };

    controlsDiv.appendChild(prevBtn);
    controlsDiv.appendChild(counterSpan);
    controlsDiv.appendChild(nextBtn);

    container.appendChild(controlsDiv);
}

// =============================================================================
//  5. المايند ماب (لكل الدرس دائماً)
// =============================================================================

let markmapInstance = null;

document.getElementById('generate-mindmap-btn').addEventListener('click', async () => {
    const svgEl = document.getElementById('mindmap-svg');
    svgEl.innerHTML = '';
    // نص مؤقت
    const parent = svgEl.parentElement;
    const oldLoader = parent.querySelector('.loader-overlay');
    if (oldLoader) oldLoader.remove();

    const loader = document.createElement('div');
    loader.className = 'loader-overlay';
    loader.innerHTML = '<div class="loader"><i class="fas fa-brain fa-spin"></i> Génération de la Map Globale...</div>';
    loader.style.cssText = "position:absolute; inset:0; background:rgba(255,255,255,0.9); display:flex; align-items:center; justify-content:center; z-index:10;";
    parent.style.position = 'relative';
    parent.appendChild(loader);

    try {
        // نستخدم دائماً خيار 'full' (بدون input) عبر تمرير القيمة مباشرة
        // هنا نجبر getSmartText على استخدام منطق "الدرس الكامل"
        // لكن بما أن getSmartText تعتمد على input، سنصنع النص يدوياً لضمان الشمولية
        let text = "";
        const maxPages = Math.min(STATE.pdfDoc.numPages, 30);
        for (let i = 1; i <= maxPages; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(' ') + "\n";
        }

        const res = await callApi('ai/generate-mindmap-text', { text });
        const markdown = res.markdown || res.data;

        STATE.sessionData.mindMapData = markdown;
        renderMindMap(markdown);
        loader.remove();

    } catch (err) {
        loader.innerHTML = `<div style="color:red">Erreur: ${err.message}</div>`;
    }
});

function renderMindMap(markdown) {
    const svgEl = document.getElementById('mindmap-svg');
    if (!window.markmap) return;
    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);
    svgEl.innerHTML = '';
    markmapInstance = Markmap.create(svgEl, { zoom: true, pan: true, fitRatio: 1 }, root);
}

// أزرار التحكم بالمايند ماب
document.getElementById('zoom-in').onclick = () => markmapInstance && markmapInstance.rescale(1.25);
document.getElementById('zoom-out').onclick = () => markmapInstance && markmapInstance.rescale(0.8);
document.getElementById('zoom-reset').onclick = () => markmapInstance && markmapInstance.fit();

// =============================================================================
//  6. الحفظ والاسترجاع (مع أزرار الاستعادة)
// =============================================================================

document.getElementById('save-progress-btn').addEventListener('click', async () => {
    const btn = document.getElementById('save-progress-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>...';

    try {
        const payload = { ...STATE.sessionData, timestamp: new Date() };
        const res = await callApi('progress/save', { progressData: payload });
        if (res.success) {
            btn.innerHTML = '<i class="fas fa-check"></i> Saved!';
            setTimeout(() => btn.innerHTML = originalHTML, 2000);
        }
    } catch (e) {
        btn.innerHTML = '<i class="fas fa-times"></i> Error';
        alert("Erreur de sauvegarde");
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

            // الكويز
            if (data.quizzes && data.quizzes.length > 0) {
                STATE.sessionData.quizzes = data.quizzes;
                document.getElementById('restore-quiz-btn').style.display = 'flex';
                document.getElementById('restore-quiz-btn').innerHTML = `<i class="fas fa-history"></i> Reprendre Quiz (${data.quizzes.length})`;
            }
            // الفلاش كاردز
            if (data.flashcards && data.flashcards.length > 0) {
                STATE.sessionData.flashcards = data.flashcards;
                document.getElementById('restore-cards-btn').style.display = 'flex';
                document.getElementById('restore-cards-btn').innerHTML = `<i class="fas fa-history"></i> Reprendre Cartes (${data.flashcards.length})`;
            }
            // المايند ماب
            if (data.mindMapData) {
                STATE.sessionData.mindMapData = data.mindMapData;
                document.getElementById('restore-map-btn').style.display = 'flex';
            }
        }
    } catch (e) { console.log("No save found"); }
}

// أزرار الاسترجاع (الربط)
document.getElementById('restore-quiz-btn').onclick = () => {
    STATE.quizData = STATE.sessionData.quizzes;
    STATE.currentQuizIndex = 0;
    STATE.userAnswers = {};
    renderQuizQuestion(0);
    document.getElementById('restore-quiz-btn').style.display = 'none';
};

document.getElementById('restore-cards-btn').onclick = () => {
    STATE.flashcardsData = STATE.sessionData.flashcards;
    renderSingleFlashcard(0); // عرض البطاقة الأولى
    document.getElementById('restore-cards-btn').style.display = 'none';
};

document.getElementById('restore-map-btn').onclick = () => {
    renderMindMap(STATE.sessionData.mindMapData);
    document.getElementById('restore-map-btn').style.display = 'none';
};
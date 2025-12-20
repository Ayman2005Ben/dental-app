// ============================================================
//  ملف: pdf-viewer.js
//  الوصف: النسخة المحدثة - تركيز على المحتوى، OCR، QCM، والحفظ التلقائي
// ============================================================

// --- 1. التعريفات والعناصر (DOM Elements) ---
const DOM = {
    // حاويات الشاشة
    startContainer: document.getElementById('start-container'),
    mainLayout: document.getElementById('main-layout'),
    fileInput: document.getElementById('file-input'),

    // منطقة العرض
    viewerSection: document.getElementById('viewer-section'),
    container: document.getElementById('pdf-canvas-container'),
    pdfCanvas: document.getElementById('pdf-canvas'),
    textLayer: document.getElementById('text-layer'),

    // أزرار التحكم في الصفحة
    pageNum: document.getElementById('page-num'),
    pageCount: document.getElementById('page-count'),
    prevPageBtn: document.getElementById('prev-page'),
    nextPageBtn: document.getElementById('next-page'),
    saveCloudBtn: document.getElementById('save-cloud-btn'),
    btnExplainPage: document.getElementById('btn-explain-page'), // زر الشرح الجديد

    // أدوات التحديد
    btnSelect: document.getElementById('select-btn'),

    // الشريط الجانبي والذكاء الاصطناعي
    aiResults: document.getElementById('ai-results-area'),
    flashcardsContainer: document.getElementById('flashcards-container'),

    // أزرار التوليد ومدخلات الأرقام
    btnQuiz: document.getElementById('btn-quiz'),
    inpQuizCount: document.getElementById('quiz-count'),

    btnFlashcards: document.getElementById('btn-flashcards'),
    inpFlashcardCount: document.getElementById('flashcard-count'),

    btnMindmap: document.getElementById('btn-mindmap'),

    // القوائم المنبثقة
    selectionPopup: document.getElementById('selection-popup'),
    btnAskAi: document.getElementById('ask-ai-btn'),
    btnTranslate: document.getElementById('translate-btn'),
    btnCreateNote: document.getElementById('create-flashcard-btn'),

    // نوافذ الشرح
    explainPopup: document.getElementById('ai-explain-popup'),
    explainContent: document.getElementById('ai-explain-content'),
    backdrop: document.getElementById('modal-backdrop')
};

// سياق الرسم (للعرض فقط)
const ctx = DOM.pdfCanvas.getContext('2d');

// --- 2. متغيرات الحالة (Global State) ---
const STATE = {
    pdfDoc: null,
    pageNum: 1,
    scale: 1.5,
    renderTask: null,
    isRendering: false,
    currentFileId: null,

    // بيانات المحتوى (يتم حفظها لاسترجاعها عند الريفرش)
    // الهيكل: { page_1: { quiz: [], flashcards: [], mindmap: '' }, page_2: ... }
    pageContent: JSON.parse(localStorage.getItem('smartCore_content')) || {},

    // الملاحظات اليدوية
    userNotes: JSON.parse(localStorage.getItem('smartCore_notes')) || {}
};

const USER_TOKEN = localStorage.getItem('userToken') || 'demo-token'; // استبدل بالتوكن الحقيقي

// إعداد مكتبة PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';


// ============================================================
//  3. تحميل وفتح الملف
// ============================================================

DOM.fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
        // توليد ID فريد للملف لربط البيانات به
        STATE.currentFileId = `doc_${file.name}_${file.size}`;

        // محاولة استرجاع بيانات قديمة لهذا الملف
        const savedContent = localStorage.getItem(`smartCore_content_${STATE.currentFileId}`);
        if (savedContent) STATE.pageContent = JSON.parse(savedContent);

        DOM.startContainer.style.display = 'none';
        DOM.mainLayout.style.display = 'flex';

        const fileURL = URL.createObjectURL(file);
        loadPdf(fileURL);
    } else {
        alert('Please select a valid PDF file.');
    }
});

async function loadPdf(url) {
    try {
        const loadingTask = pdfjsLib.getDocument(url);
        STATE.pdfDoc = await loadingTask.promise;

        DOM.pageCount.textContent = STATE.pdfDoc.numPages;

        STATE.pageNum = 1;
        renderPage();
    } catch (err) {
        console.error('PDF Load Error:', err);
        alert('Error loading PDF.');
    }
}


// ============================================================
//  4. عرض الصفحة (Rendering)
// ============================================================

async function renderPage() {
    if (!STATE.pdfDoc) return;

    STATE.isRendering = true;
    if (STATE.renderTask) await STATE.renderTask.cancel();

    const page = await STATE.pdfDoc.getPage(STATE.pageNum);
    const viewport = page.getViewport({ scale: STATE.scale });

    DOM.pdfCanvas.width = viewport.width;
    DOM.pdfCanvas.height = viewport.height;
    DOM.textLayer.style.width = `${viewport.width}px`;
    DOM.textLayer.style.height = `${viewport.height}px`;

    DOM.pageNum.textContent = STATE.pageNum;

    const renderContext = {
        canvasContext: ctx,
        viewport: viewport
    };

    STATE.renderTask = page.render(renderContext);

    try {
        await STATE.renderTask.promise;

        // رسم طبقة النصوص
        const textContent = await page.getTextContent();
        DOM.textLayer.innerHTML = '';
        pdfjsLib.renderTextLayer({
            textContent: textContent,
            container: DOM.textLayer,
            viewport: viewport,
            textDivs: []
        });

        // *** استرجاع المحتوى المحفوظ (AI + Notes) ***
        restorePageContent();

        STATE.isRendering = false;

    } catch (error) {
        if (error.name !== 'RenderingCancelledException') console.error(error);
        STATE.isRendering = false;
    }
}

// أزرار التنقل
DOM.prevPageBtn.addEventListener('click', () => {
    if (STATE.pageNum <= 1) return;
    STATE.pageNum--;
    renderPage();
});

DOM.nextPageBtn.addEventListener('click', () => {
    if (!STATE.pdfDoc || STATE.pageNum >= STATE.pdfDoc.numPages) return;
    STATE.pageNum++;
    renderPage();
});


// ============================================================
//  5. إدارة المحتوى والحفظ (Persistence Manager)
// ============================================================

function saveContentToLocal() {
    // الحفظ في localStorage لضمان البقاء بعد الريفرش
    localStorage.setItem(`smartCore_content_${STATE.currentFileId}`, JSON.stringify(STATE.pageContent));
}

function restorePageContent() {
    // مسح النتائج الحالية
    DOM.aiResults.innerHTML = '<div class="empty-state" style="margin-top:20px;"><i class="fas fa-robot"></i><p>Select settings and click generate.</p></div>';
    DOM.flashcardsContainer.innerHTML = '<div class="empty-state"><i class="far fa-sticky-note"></i><p>No notes yet.</p></div>';

    const pageKey = `page_${STATE.pageNum}`;
    const data = STATE.pageContent[pageKey];

    if (data) {
        // إذا كان هناك بيانات محفوظة لهذه الصفحة، قم بعرضها
        DOM.aiResults.innerHTML = ''; // تنظيف

        if (data.quiz && data.quiz.length > 0) renderQuiz(data.quiz);
        if (data.flashcardsAI && data.flashcardsAI.length > 0) renderAIFlashcards(data.flashcardsAI);
        if (data.mindmap) renderMindmap(data.mindmap);
    }

    // استرجاع الملاحظات اليدوية
    // (يمكن إضافتها هنا بنفس المنطق)
}


// ============================================================
//  6. ميزات الذكاء الاصطناعي (AI Core Features)
// ============================================================

// دالة مساعدة لجلب صورة الصفحة الحالية (للتعامل مع Scanner PDF)
function capturePageImage() {
    // تحويل الكانفاس إلى صورة Base64
    return DOM.pdfCanvas.toDataURL('image/jpeg', 0.8);
}

// دالة مساعدة لجلب النص (للملفات النصية العادية)
async function getPageText() {
    const page = await STATE.pdfDoc.getPage(STATE.pageNum);
    const content = await page.getTextContent();
    return content.items.map(i => i.str).join(' ');
}

// الدالة الرئيسية للاتصال بالباك اند
async function callAiApi(endpoint, body) {
    // يمكنك إضافة Loading Indicator هنا
    try {
        const res = await fetch(`/api/ai/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        return await res.json();
    } catch (err) {
        console.error(err);
        alert("Connection Error");
        throw err;
    }
}

// ------------------------------------
// A. ميزة شرح الصفحة (Explain Page - OCR)
// ------------------------------------
DOM.btnExplainPage.onclick = async () => {
    showModal('🔍 Analyzing page image (OCR)... Please wait.');

    try {
        const imageData = capturePageImage(); // التقاط صورة الصفحة

        // إرسال الصورة للسيرفر
        const res = await callAiApi('explain-page-image', {
            image: imageData,
            prompt: "اشرح هذه الصفحة بالتفصيل، استخدم مزيجاً من العربية والفرنسية للمصطلحات العلمية في نفس السياق."
        });

        const explanation = res.explanation || res.text || res.answer;

        // عرض النتيجة
        DOM.explainContent.innerHTML = formatText(explanation);

    } catch (e) {
        DOM.explainContent.innerHTML = "Error processing image. Ensure backend supports vision.";
    }
};

// ------------------------------------
// B. ميزة الكويز (QCM - Validation)
// ------------------------------------
DOM.btnQuiz.onclick = async () => {
    const count = parseInt(DOM.inpQuizCount.value) || 5;
    if (count < 1 || count > 25) return alert("Please choose between 1 and 25 questions.");

    DOM.aiResults.innerHTML = '<div style="text-align:center; padding:20px;">⏳ Generating QCM...</div>';

    try {
        // نفضل إرسال النص، لكن يمكن تعديلها لإرسال صورة إذا كان سكانر
        const text = await getPageText();

        const res = await callAiApi('generate-quiz', {
            text,
            count,
            type: 'QCM_MULTI'
        });

        let questions = res.questions || res;

        // حفظ في الذاكرة
        if (!STATE.pageContent[`page_${STATE.pageNum}`]) STATE.pageContent[`page_${STATE.pageNum}`] = {};
        STATE.pageContent[`page_${STATE.pageNum}`].quiz = questions;
        saveContentToLocal();

        // عرض
        DOM.aiResults.innerHTML = '';
        renderQuiz(questions);

    } catch (e) {
        DOM.aiResults.innerHTML = `<div style="color:red">Error: ${e.message}</div>`;
    }
};

function renderQuiz(questions) {
    questions.forEach((q, qIndex) => {
        const card = document.createElement('div');
        card.className = 'note-card';

        // نص السؤال
        let html = `<h4>Q${qIndex + 1}: ${q.question}</h4><div class="options-container">`;

        // الخيارات (Checkboxes)
        q.options.forEach((opt, optIndex) => {
            html += `
            <label class="qcm-option" id="q${qIndex}_opt${optIndex}">
                <input type="checkbox" name="q${qIndex}" value="${optIndex}">
                <span>${opt}</span>
            </label>`;
        });

        // زر التحقق والمنطقة المخفية للشرح
        html += `</div>
            <button class="btn-validate-qcm" onclick="validateAnswer(${qIndex}, [${q.correctOptionIndexes}])">Valider (Check)</button>
            <div id="feedback_q${qIndex}" class="qcm-feedback">
                <p><strong>Explanation:</strong> ${q.explanation}</p>
            </div>
        `;

        card.innerHTML = html;
        DOM.aiResults.appendChild(card);
    });
}

// دالة التحقق من الإجابة (Global scope لتشغيلها من HTML)
window.validateAnswer = function (qIndex, correctIndexes) {
    const selectedInputs = document.querySelectorAll(`input[name="q${qIndex}"]:checked`);
    const feedbackDiv = document.getElementById(`feedback_q${qIndex}`);

    // تحويل NodeList لمصفوفة أرقام
    const userAnswers = Array.from(selectedInputs).map(cb => parseInt(cb.value));

    // منطق التحقق (هل المصفوفات متطابقة؟)
    const isCorrect = userAnswers.length === correctIndexes.length &&
        userAnswers.every(val => correctIndexes.includes(val));

    // تلوين الخيارات
    const allOptions = document.querySelectorAll(`input[name="q${qIndex}"]`);
    allOptions.forEach(input => {
        const parent = input.parentElement;
        const val = parseInt(input.value);

        // إعادة تعيين الألوان
        parent.style.borderColor = '#e2e8f0';
        parent.style.background = 'transparent';

        if (correctIndexes.includes(val)) {
            // الإجابة الصحيحة دائماً خضراء ليعرفها الطالب
            parent.style.borderColor = '#22c55e';
            parent.style.background = '#f0fdf4';
            // إضافة علامة صح
            if (!parent.querySelector('.mark')) parent.insertAdjacentHTML('beforeend', ' <span class="mark" style="color:green">✔</span>');
        } else if (input.checked && !correctIndexes.includes(val)) {
            // إجابة خاطئة اختارها الطالب (حمراء)
            parent.style.borderColor = '#ef4444';
            parent.style.background = '#fef2f2';
        }
    });

    // إظهار الشرح
    feedbackDiv.className = `qcm-feedback ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackDiv.style.display = 'block';

    // إضافة رسالة النتيجة قبل الشرح
    const statusMsg = isCorrect ? '✅ Excellent! Correct Answer.' : '❌ Incorrect. Review the explanation below.';
    feedbackDiv.querySelector('strong').innerHTML = statusMsg + "<br>Explanation:";
};

// ------------------------------------
// C. ميزة الفلاش كاردز (Language Match)
// ------------------------------------
DOM.btnFlashcards.onclick = async () => {
    const count = parseInt(DOM.inpFlashcardCount.value) || 6;
    if (count < 1 || count > 30) return alert("Please choose between 1 and 30 cards.");

    DOM.aiResults.innerHTML = '<div>⏳ Creating Flashcards...</div>';

    try {
        const text = await getPageText();
        // نطلب من الباك اند استخدام نفس لغة النص
        const res = await callAiApi('generate-flashcards', {
            text,
            count,
            instruction: "Match the language of the source text strictly."
        });

        const cards = res.flashcards || res;

        // حفظ
        if (!STATE.pageContent[`page_${STATE.pageNum}`]) STATE.pageContent[`page_${STATE.pageNum}`] = {};
        STATE.pageContent[`page_${STATE.pageNum}`].flashcardsAI = cards;
        saveContentToLocal();

        DOM.aiResults.innerHTML = '';
        renderAIFlashcards(cards);

    } catch (e) {
        DOM.aiResults.innerHTML = `Error: ${e.message}`;
    }
};

function renderAIFlashcards(cards) {
    cards.forEach(fc => {
        const card = document.createElement('div');
        card.className = 'note-card';
        card.style.cursor = 'pointer';
        card.style.borderLeft = '4px solid var(--accent-orange)';

        // تخزين الوجه والظهر في البيانات
        card.dataset.front = fc.front;
        card.dataset.back = fc.back;
        card.dataset.state = 'front'; // front or back

        card.innerHTML = `<div style="font-weight:600; color:#333;">${fc.front}</div><div style="font-size:12px; color:#999; margin-top:5px;">(Click to flip)</div>`;

        card.onclick = () => {
            if (card.dataset.state === 'front') {
                card.innerHTML = `<div style="color:var(--primary); line-height:1.6;">${fc.back}</div>`;
                card.dataset.state = 'back';
                card.style.background = '#fffbeb'; // لون أصفر فاتح للخلف
            } else {
                card.innerHTML = `<div style="font-weight:600; color:#333;">${fc.front}</div><div style="font-size:12px; color:#999; margin-top:5px;">(Click to flip)</div>`;
                card.dataset.state = 'front';
                card.style.background = '#fff';
            }
        };
        DOM.aiResults.appendChild(card);
    });
}

// ------------------------------------
// D. ميزة المايند ماب
// ------------------------------------
DOM.btnMindmap.onclick = async () => {
    DOM.aiResults.innerHTML = '<div>⏳ Building Mind Map...</div>';
    try {
        const text = await getPageText();
        const res = await callAiApi('generate-mindmap', { text });
        const markdown = res.markdown || res;

        // حفظ
        if (!STATE.pageContent[`page_${STATE.pageNum}`]) STATE.pageContent[`page_${STATE.pageNum}`] = {};
        STATE.pageContent[`page_${STATE.pageNum}`].mindmap = markdown;
        saveContentToLocal();

        DOM.aiResults.innerHTML = '';
        renderMindmap(markdown);

    } catch (e) {
        DOM.aiResults.innerHTML = `Error: ${e.message}`;
    }
};

function renderMindmap(markdown) {
    const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEl.style.width = '100%';
    svgEl.style.height = '300px';
    svgEl.style.background = '#f8fafc';
    DOM.aiResults.appendChild(svgEl);

    if (window.markmap) {
        const { Transformer, Markmap } = window.markmap;
        const transformer = new Transformer();
        const { root } = transformer.transform(markdown);
        Markmap.create(svgEl, null, root);
    }
}


// ============================================================
//  7. التحديد والقوائم المنبثقة (UI Helpers)
// ============================================================

DOM.container.addEventListener('mouseup', (e) => {
    // تأخير بسيط لضمان اكتمال التحديد
    setTimeout(() => {
        const text = window.getSelection().toString().trim();
        if (text.length > 0) {
            DOM.selectionPopup.style.display = 'flex';
            const rect = DOM.container.getBoundingClientRect();
            // حساب الموقع بالنسبة للحاوية
            DOM.selectionPopup.style.left = `${e.clientX}px`;
            DOM.selectionPopup.style.top = `${e.clientY - 50}px`;
            DOM.selectionPopup.dataset.text = text;
        } else {
            DOM.selectionPopup.style.display = 'none';
        }
    }, 10);
});

// تنسيق النصوص (تحويل Newlines إلى <br>)
function formatText(text) {
    return text.replace(/\n/g, '<br>');
}

function showModal(content) {
    DOM.selectionPopup.style.display = 'none';
    DOM.backdrop.style.display = 'block';
    DOM.explainPopup.style.display = 'block';
    DOM.explainContent.innerHTML = formatText(content);
}

window.closeModal = function () {
    DOM.backdrop.style.display = 'none';
    DOM.explainPopup.style.display = 'none';
};
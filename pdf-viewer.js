// =============================================================================
//  Smart Dental Viewer - Logic (v3.0 Final)
// =============================================================================

// إعداد مكتبة PDF.js Worker (ضروري للأداء)
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// --- إدارة الحالة (State Management) ---
const STATE = {
    pdfDoc: null,
    scale: 1.2,             // مستوى التكبير الافتراضي
    fileId: null,           // معرف الملف لحفظ الشات
    currentScope: 'page',   // 'page' أو 'full'
    currentPageInView: 1,   // الصفحة التي ينظر إليها المستخدم حالياً
    renderedPages: new Set(), // لتجنب إعادة رسم الصفحات المحملة
    chatHistory: []
};

// --- عناصر الواجهة (DOM Elements) ---
const DOM = {
    container: document.getElementById('viewer-container'),
    wrapper: document.getElementById('pdf-wrapper'),
    fileInput: document.getElementById('file-input'),
    // Chat
    chatHistory: document.getElementById('chat-history'),
    chatInput: document.getElementById('chat-input'),
    sendBtn: document.getElementById('send-btn'),
    // Tools
    scopePage: document.getElementById('scope-page'),
    scopeFull: document.getElementById('scope-full'),
    countControl: document.getElementById('count-control'),
    countSlider: document.getElementById('count-slider'),
    resultsArea: document.getElementById('results-area'),
    btnDownload: document.getElementById('btn-download-results')
};

// -----------------------------------------------------------------------------
//  1. تحميل وعرض الملف (Vertical Scroll & Lazy Loading)
// -----------------------------------------------------------------------------

// عند اختيار ملف
DOM.fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // إنشاء ID فريد للملف (الاسم + الحجم) لاسترجاع الشات لاحقاً
    STATE.fileId = `chat_${file.name}_${file.size}`;
    const url = URL.createObjectURL(file);

    // إعادة تهيئة الواجهة
    DOM.wrapper.innerHTML = '';
    STATE.renderedPages.clear();
    STATE.currentPageInView = 1;
    STATE.pdfDoc = null;

    try {
        // تحميل المستند
        const loadingTask = pdfjsLib.getDocument(url);
        STATE.pdfDoc = await loadingTask.promise;

        // بناء الهيكل الفارغ للصفحات (Placeholders)
        initPagesPlaceholders();

        // استرجاع شات سابق لهذا الملف
        loadChatHistory();

    } catch (err) {
        console.error("Error loading PDF:", err);
        alert("Erreur lors du chargement du PDF.");
    }
});

// إنشاء حاويات فارغة لكل الصفحات
function initPagesPlaceholders() {
    for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page-container';
        pageDiv.id = `page-${i}`;
        // أبعاد مبدئية (A4 ratio) حتى يتم تحميل الصفحة فعلياً
        pageDiv.style.width = '600px';
        pageDiv.style.height = '850px';
        DOM.wrapper.appendChild(pageDiv);
    }

    // تشغيل المراقب (Intersection Observer) للتحميل الذكي
    setupIntersectionObserver();
}

// مراقبة السكرول: تحميل الصفحة عند ظهورها + تحديث رقم الصفحة الحالية
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const pageNum = parseInt(entry.target.id.split('-')[1]);
                STATE.currentPageInView = pageNum; // تحديث الصفحة الحالية للكويز
                renderPage(pageNum); // رسم الصفحة
            }
        });
    }, {
        root: DOM.container,
        rootMargin: '300px' // تحميل الصفحة قبل وصول السكرول بـ 300 بكسل
    });

    document.querySelectorAll('.page-container').forEach(div => observer.observe(div));
}

// رسم محتوى الصفحة (Canvas + TextLayer)
async function renderPage(num) {
    if (STATE.renderedPages.has(num)) return; // تم تحميلها مسبقاً
    STATE.renderedPages.add(num);

    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });
    const container = document.getElementById(`page-${num}`);

    // تحديث الأبعاد الحقيقية
    container.style.width = `${viewport.width}px`;
    container.style.height = `${viewport.height}px`;

    // 1. رسم الصورة (Canvas)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    container.appendChild(canvas);

    const renderContext = {
        canvasContext: ctx,
        viewport: viewport
    };

    // الانتظار حتى انتهاء الرسم
    await page.render(renderContext).promise;

    // 2. إضافة طبقة النصوص (TextLayer) للتحديد والبحث
    const textLayerDiv = document.createElement('div');
    textLayerDiv.className = 'textLayer';
    textLayerDiv.style.width = `${viewport.width}px`;
    textLayerDiv.style.height = `${viewport.height}px`;
    container.appendChild(textLayerDiv);

    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContent: textContent,
        container: textLayerDiv,
        viewport: viewport,
        textDivs: []
    });
}

// -----------------------------------------------------------------------------
//  2. الشات (Chat PDF) - ذاكرة دائمة
// -----------------------------------------------------------------------------

function loadChatHistory() {
    DOM.chatHistory.innerHTML = ''; // تنظيف

    // رسالة ترحيبية دائمة
    const welcome = document.createElement('div');
    welcome.className = 'msg ai';
    welcome.innerText = "Bonjour Docteur! Je suis prêt à analyser ce cours.";
    DOM.chatHistory.appendChild(welcome);

    if (!STATE.fileId) return;

    const saved = localStorage.getItem(STATE.fileId);
    if (saved) {
        STATE.chatHistory = JSON.parse(saved);
        STATE.chatHistory.forEach(msg => appendMessage(msg.role, msg.text, false));
    } else {
        STATE.chatHistory = [];
    }
}

DOM.sendBtn.onclick = async () => {
    const text = DOM.chatInput.value.trim();
    if (!text) return;

    appendMessage('user', text, true);
    DOM.chatInput.value = '';

    // محاكاة التفكير (Loading)
    const loadingId = appendMessage('ai', 'Analyse en cours...', false);

    // --- هنا نربط بـ API الذكاء الاصطناعي لاحقاً ---
    // const context = await getContextText();
    // const response = await callMyApi(text, context);

    // محاكاة الرد (Simulation)
    setTimeout(() => {
        const responseText = `(Simulation) Réponse basée sur la page ${STATE.currentPageInView} : Ce concept est essentiel en dentisterie conservatrice...`;

        // تحديث رسالة التحميل بالرد الحقيقي
        const loadingMsg = document.querySelector(`[data-id="${loadingId}"]`);
        if (loadingMsg) loadingMsg.innerText = responseText;

        // حفظ في التاريخ
        saveToHistory('ai', responseText);
    }, 1500);
};

function appendMessage(role, text, save) {
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.innerText = text;
    const id = Date.now();
    div.dataset.id = id;

    DOM.chatHistory.appendChild(div);
    DOM.chatHistory.scrollTop = DOM.chatHistory.scrollHeight;

    if (save) saveToHistory(role, text);
    return id;
}

function saveToHistory(role, text) {
    if (!STATE.fileId) return;
    STATE.chatHistory.push({ role, text });
    localStorage.setItem(STATE.fileId, JSON.stringify(STATE.chatHistory));
}

// -----------------------------------------------------------------------------
//  3. أدوات التحكم (Scope & Logic)
// -----------------------------------------------------------------------------

window.setScope = (scope) => {
    STATE.currentScope = scope;
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));

    if (scope === 'page') {
        DOM.scopePage.classList.add('active');
        DOM.countControl.style.display = 'none'; // إخفاء السلايدر في وضع الصفحة الواحدة
    } else {
        DOM.scopeFull.classList.add('active');
        DOM.countControl.style.display = 'block'; // إظهار السلايدر
    }
};

// استخراج النص (إما من الصفحة الحالية أو من كل الصفحات)
async function getContextText() {
    if (!STATE.pdfDoc) return "";

    if (STATE.currentScope === 'page') {
        // جلب نص الصفحة الحالية فقط
        const page = await STATE.pdfDoc.getPage(STATE.currentPageInView);
        const content = await page.getTextContent();
        return content.items.map(i => i.str).join(' ');
    } else {
        // جلب نص الملف بالكامل (نأخذ أول 10 صفحات كمثال لتجنب البطء في المحاكاة)
        // في النسخة النهائية يمكن عمل Loop على كل الصفحات
        let fullText = "";
        const limit = Math.min(STATE.pdfDoc.numPages, 10);
        for (let i = 1; i <= limit; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            fullText += content.items.map(i => i.str).join(' ') + "\n";
        }
        return fullText;
    }
}

// -----------------------------------------------------------------------------
//  4. الكويز والفلاش كاردز (Logic + Mock Data)
// -----------------------------------------------------------------------------

window.generateContent = async (type) => {
    if (!STATE.pdfDoc) return alert("Veuillez charger un fichier PDF d'abord.");

    DOM.resultsArea.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Génération en cours...</div>';
    DOM.btnDownload.style.display = 'none';

    try {
        const text = await getContextText(); // النص الذي سنرسله للذكاء الاصطناعي

        // تحديد العدد
        let count = 3; // افتراضي للصفحة الواحدة
        if (STATE.currentScope === 'full') {
            count = parseInt(DOM.countSlider.value);
        }

        // --- محاكاة الاتصال بالذكاء الاصطناعي (Mocking) ---
        // في الواقع سنرسل: { text, type, count, language: 'fr' }

        await new Promise(r => setTimeout(r, 1500)); // تأخير مصطنع للواقعية

        let html = '';
        if (type === 'quiz') {
            const data = mockQuizData(count);
            html = renderQuiz(data);
        } else {
            const data = mockFlashcards(data => data, count); // دالة وهمية
            html = renderFlashcards(count);
        }

        DOM.resultsArea.innerHTML = html;
        DOM.btnDownload.style.display = 'block'; // إظهار زر التحميل

    } catch (e) {
        console.error(e);
        DOM.resultsArea.innerHTML = `<div style="color:red">Erreur: ${e.message}</div>`;
    }
};

// --- دوال العرض (Rendering) ---

function renderQuiz(questions) {
    return questions.map((q, idx) => `
        <div class="result-card">
            <div class="quiz-q">${idx + 1}. ${q.question}</div>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <div class="quiz-opt" onclick="selectOption(this)">${opt}</div>
                `).join('')}
            </div>
            <button class="main-btn" style="margin-top:10px; font-size:12px; padding:6px 12px; background:#64748b;" 
                onclick="validateAnswer(this, [${q.correct}], '${q.explanation.replace(/'/g, "\\'")}')">
                Voir la réponse
            </button>
            <div class="quiz-explanation" style="display:none; margin-top:10px; padding:10px; background:#f1f5f9; border-radius:6px; font-size:13px; color:#334155;">
            </div>
        </div>
    `).join('');
}

function renderFlashcards(count) {
    // توليد بيانات وهمية مباشرة
    let html = '';
    for (let i = 1; i <= count; i++) {
        html += `
        <div class="result-card" onclick="this.querySelector('.back').style.display = 'block'" style="cursor:pointer;">
            <div style="font-weight:bold; color:var(--primary); margin-bottom:8px;">Question ${i} :</div>
            <div>Quelles sont les implications cliniques de... ?</div>
            <div class="back" style="display:none; margin-top:10px; padding-top:10px; border-top:1px dashed #e2e8f0; color:#b45309;">
                <strong>Réponse :</strong> C'est une simulation de réponse pour le concept dentaire n°${i}.
            </div>
        </div>`;
    }
    return html;
}

// --- منطق التحقق من الكويز (Interactive) ---

window.selectOption = (el) => {
    // دعم اختيار متعدد
    el.classList.toggle('selected');
};

window.validateAnswer = (btn, correctIndices, explanation) => {
    const card = btn.parentElement;
    const options = card.querySelectorAll('.quiz-opt');
    const feedback = card.querySelector('.quiz-explanation');

    options.forEach((opt, idx) => {
        const isSelected = opt.classList.contains('selected');
        const isCorrect = correctIndices.includes(idx);

        if (isCorrect) opt.classList.add('correct'); // تلوين الصحيح بالأخضر دائماً
        if (isSelected && !isCorrect) opt.classList.add('wrong'); // تلوين الخطأ بالأحمر
    });

    feedback.innerHTML = `<strong>Explication :</strong> ${explanation}`;
    feedback.style.display = 'block';
    btn.style.display = 'none';
};

// --- بيانات وهمية (Mock Data - French) ---
function mockQuizData(n) {
    return Array.from({ length: n }, (_, i) => ({
        question: `Question QCM ${i + 1} sur le cours dentaire ?`,
        options: [
            "A) C'est une inflammation réversible (Faux)",
            "B) C'est une lésion carieuse (Vrai)",
            "C) Nécessite un traitement endodontique (Vrai)",
            "D) Aucun traitement nécessaire"
        ],
        correct: [1, 2], // الإجابة الثانية والثالثة هي الصحيحة
        explanation: "Les options B et C sont correctes car la pathologie décrite correspond à une pulpite irréversible."
    }));
}

// -----------------------------------------------------------------------------
//  5. المايند ماب (Mind Map)
// -----------------------------------------------------------------------------

window.generateMindMap = async () => {
    if (!STATE.pdfDoc) return alert("Chargez un PDF !");

    const container = document.getElementById('mindmap-svg-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Analyse structurelle...</div>';

    // محاكاة Markdown للخريطة
    const mockMarkdown = `
# Anatomie Dentaire
## Couronne
- Email
- Dentine
- Pulpe
## Racine
- Cément
- Canal Radiculaire
- Apex
## Pathologies
- Caries
- Gingivite
- Parodontite
    `;

    setTimeout(() => {
        container.innerHTML = '<svg id="mindmap-svg" style="width:100%; height:100%"></svg>';
        const { Transformer, Markmap } = window.markmap;
        const transformer = new Transformer();
        const { root } = transformer.transform(mockMarkdown);
        Markmap.create(document.getElementById('mindmap-svg'), null, root);
    }, 1500);
};

// -----------------------------------------------------------------------------
//  6. تحميل النتائج كـ PDF
// -----------------------------------------------------------------------------

window.downloadResultsAsPDF = () => {
    const element = document.getElementById('results-area');
    if (!element || element.innerText.trim() === "") return alert("Pas de résultats à télécharger.");

    const opt = {
        margin: 10,
        filename: 'Smart_Study_Results.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // استخدام مكتبة html2pdf التي أضفناها في HTML
    html2pdf().set(opt).from(element).save();
};
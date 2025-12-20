// =============================================================================
//  Smart Dental Viewer - Engine v2.0 (Scroll View + ChatPDF + Clean UI)
// =============================================================================

// إعداد PDF.js Worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// الحالة العامة (State)
const STATE = {
    pdfDoc: null,
    scale: 1.2,
    fileId: null,
    currentScope: 'page', // 'page' or 'full'
    qcmCount: 10,
    renderedPages: new Set(), // لتتبع الصفحات المحملة (Lazy Load)
    chatHistory: [],
    currentPageInView: 1
};

// عناصر الواجهة
const DOM = {
    container: document.getElementById('viewer-container'),
    wrapper: document.getElementById('pdf-wrapper'),
    fileInput: document.getElementById('file-input'),
    zoomLevel: document.getElementById('zoom-level'),
    // Chat
    chatHistory: document.getElementById('chat-history'),
    chatInput: document.getElementById('chat-input'),
    sendBtn: document.getElementById('send-btn'),
    // Tools
    scopePage: document.getElementById('scope-page'),
    scopeFull: document.getElementById('scope-full'),
    countControl: document.getElementById('count-control'),
    countSlider: document.getElementById('count-slider'),
    toolsResults: document.getElementById('tools-results')
};

// -----------------------------------------------------------------------------
//  1. تحميل وعرض الملف (Vertical Scroll & Lazy Loading)
// -----------------------------------------------------------------------------

DOM.fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    STATE.fileId = file.name + '_' + file.size; // ID بسيط للحفظ
    const url = URL.createObjectURL(file);

    // تنظيف القديم
    DOM.wrapper.innerHTML = '';
    STATE.renderedPages.clear();
    STATE.chatHistory = []; // أو استرجاع القديم هنا

    try {
        STATE.pdfDoc = await pdfjsLib.getDocument(url).promise;
        initPagesPlaceholders(); // إنشاء الهيكل الفارغ
        loadChatHistory(); // استرجاع شات سابق
    } catch (err) {
        console.error(err);
        alert('Error loading PDF');
    }
});

// إنشاء حاويات فارغة لكل الصفحات (للسماح بالسكرول)
function initPagesPlaceholders() {
    for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page-container';
        pageDiv.id = `page-${i}`;
        // سيتم تحديد الأبعاد لاحقاً عند التحميل، أو وضع أبعاد افتراضية
        pageDiv.style.width = '600px'; // مبدئياً
        pageDiv.style.height = '800px'; // مبدئياً
        pageDiv.style.position = 'relative';

        DOM.wrapper.appendChild(pageDiv);
    }

    // بدء مراقبة الظهور (Intersection Observer)
    setupIntersectionObserver();
}

// مراقبة السكرول لتحميل الصفحات الظاهرة فقط
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const pageNum = parseInt(entry.target.id.split('-')[1]);
                renderPage(pageNum);
                STATE.currentPageInView = pageNum; // تحديث الصفحة الحالية لأغراض الكويز
            }
        });
    }, { root: DOM.container, rootMargin: '200px' }); // تحميل قبل الوصول بـ 200px

    document.querySelectorAll('.page-container').forEach(div => observer.observe(div));
}

// رسم صفحة محددة
async function renderPage(num) {
    if (STATE.renderedPages.has(num)) return; // تم تحميلها سابقاً
    STATE.renderedPages.add(num);

    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });
    const container = document.getElementById(`page-${num}`);

    // ضبط الأبعاد الحقيقية
    container.style.width = `${viewport.width}px`;
    container.style.height = `${viewport.height}px`;

    // 1. إنشاء الكانفاس (الصورة)
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    container.appendChild(canvas);

    // رسم المحتوى
    await page.render({ canvasContext: ctx, viewport }).promise;

    // 2. إنشاء طبقة النصوص (للتحديد والبحث)
    const textLayerDiv = document.createElement('div');
    textLayerDiv.className = 'textLayer';
    // ضبط الأبعاد ضروري
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
//  2. أدوات التحكم (Highlight & Zoom)
// -----------------------------------------------------------------------------

// زر التظليل (Highlight)
document.getElementById('btn-highlight-text').onclick = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.className = 'highlighted-text';

    try {
        range.surroundContents(span);
        selection.removeAllRanges(); // إزالة التحديد الأزرق لرؤية الأصفر
    } catch (e) {
        alert("Please select simple text (don't cross paragraphs) to highlight.");
    }
};

// زوم
document.getElementById('zoom-in').onclick = () => changeZoom(0.2);
document.getElementById('zoom-out').onclick = () => changeZoom(-0.2);

function changeZoom(delta) {
    STATE.scale += delta;
    DOM.zoomLevel.textContent = Math.round(STATE.scale * 100) + '%';
    // إعادة تحميل كل شيء (مكلف قليلاً لكن ضروري)
    DOM.wrapper.innerHTML = '';
    STATE.renderedPages.clear();
    initPagesPlaceholders();
}

// -----------------------------------------------------------------------------
//  3. إعدادات الأدوات (Tabs & Scope)
// -----------------------------------------------------------------------------

window.setTab = (tabId) => {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId + '-tab').classList.add('active');
    event.currentTarget.classList.add('active');
};

window.setScope = (scope) => {
    STATE.currentScope = scope;
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    if (scope === 'page') {
        DOM.scopePage.classList.add('active');
        DOM.countControl.style.display = 'none'; // إخفاء العدد للصفحة الواحدة
    } else {
        DOM.scopeFull.classList.add('active');
        DOM.countControl.style.display = 'block'; // إظهار السلايدر
    }
};

// -----------------------------------------------------------------------------
//  4. الشات (ChatPDF)
// -----------------------------------------------------------------------------

function loadChatHistory() {
    const saved = localStorage.getItem(`chat_${STATE.fileId}`);
    if (saved) {
        STATE.chatHistory = JSON.parse(saved);
        renderChatMessages();
    }
}

function renderChatMessages() {
    DOM.chatHistory.innerHTML = '';
    // إضافة رسالة ترحيبية
    const welcome = document.createElement('div');
    welcome.className = 'msg ai';
    welcome.innerText = "Bonjour! Ready to discuss your PDF.";
    DOM.chatHistory.appendChild(welcome);

    STATE.chatHistory.forEach(msg => {
        const div = document.createElement('div');
        div.className = `msg ${msg.role}`;
        div.innerText = msg.text;
        DOM.chatHistory.appendChild(div);
    });
    DOM.chatHistory.scrollTop = DOM.chatHistory.scrollHeight;
}

DOM.sendBtn.onclick = async () => {
    const text = DOM.chatInput.value.trim();
    if (!text) return;

    // إضافة رسالة المستخدم
    addChatMessage('user', text);
    DOM.chatInput.value = '';

    // إرسال للذكاء الاصطناعي (محاكاة)
    const contextText = await getContextText(); // إما الصفحة أو الكل (في الشات عادة يفضل السياق القريب)

    // هنا استدعاء API الخاص بك
    // callAiApi('chat', { history: STATE.chatHistory, context: contextText, prompt: text })

    // محاكاة الرد
    setTimeout(() => {
        addChatMessage('ai', `Analysis based on page ${STATE.currentPageInView}: This is a simulation response.`);
    }, 1000);
};

function addChatMessage(role, text) {
    STATE.chatHistory.push({ role, text });
    localStorage.setItem(`chat_${STATE.fileId}`, JSON.stringify(STATE.chatHistory));

    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.innerText = text;
    DOM.chatHistory.appendChild(div);
    DOM.chatHistory.scrollTop = DOM.chatHistory.scrollHeight;
}

// -----------------------------------------------------------------------------
//  5. الكويز والفلاش كاردز (QCM & Flashcards)
// -----------------------------------------------------------------------------

// استخراج النص (حسب النطاق المختار)
async function getContextText() {
    if (STATE.currentScope === 'page') {
        const page = await STATE.pdfDoc.getPage(STATE.currentPageInView);
        const content = await page.getTextContent();
        return content.items.map(i => i.str).join(' ');
    } else {
        // إذا كان كامل الملف، نجمع النصوص (قد يستغرق وقتاً)
        let fullText = '';
        // نأخذ عينة لتجنب البطء (أو نعمل Loop كامل مع Loading bar)
        const maxPages = Math.min(STATE.pdfDoc.numPages, 10); // مؤقتاً 10 صفحات
        for (let i = 1; i <= maxPages; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            fullText += content.items.map(it => it.str).join(' ') + '\n';
        }
        return fullText;
    }
}

window.generateContent = async (type) => {
    const resultsDiv = DOM.toolsResults;
    resultsDiv.innerHTML = '<div style="text-align:center; padding:20px; color:#666;">⏳ Génération en cours...</div>';

    const text = await getContextText();
    const count = STATE.currentScope === 'page' ? 3 : DOM.countSlider.value;

    // بناء الطلب (Prompt)
    // نطلب اللغة الفرنسية بشكل صريح، ونطلب QCM متعدد الإجابات
    const promptSystem = `
        Act as a Dental Professor. Based on the text provided:
        Generate ${count} ${type === 'quiz' ? 'Multiple Choice Questions (QCM)' : 'Flashcards'}.
        Language: French.
        ${type === 'quiz' ? 'Format: JSON with { question, options[], correctIndices[] (array of integers), explanation }.' : ''}
    `;

    try {
        // استدعاء API (استخدم دالتك السابقة callAiApi)
        // const response = await callAiApi(...)

        // محاكاة بيانات الرد للتجربة
        const mockResponse = type === 'quiz' ? mockQuizData(count) : mockFlashcards(count);

        renderResults(type, mockResponse);

    } catch (e) {
        resultsDiv.innerHTML = `<div style="color:red">Error: ${e.message}</div>`;
    }
};

function renderResults(type, data) {
    const container = DOM.toolsResults;
    container.innerHTML = '';

    if (type === 'quiz') {
        data.forEach((q, idx) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'quiz-item';
            qDiv.innerHTML = `
                <div class="quiz-q">${idx + 1}. ${q.question}</div>
                <div class="options-area">
                    ${q.options.map((opt, i) => `<div class="quiz-opt" onclick="toggleOption(this)">${opt}</div>`).join('')}
                </div>
                <button class="main-btn" style="margin-top:10px; font-size:12px; padding:5px 10px;" onclick="checkAnswer(this, [${q.correctIndices}], '${q.explanation.replace(/'/g, "\\'")}')">Vérifier</button>
                <div class="quiz-explanation"></div>
            `;
            container.appendChild(qDiv);
        });
    } else {
        // Flashcards
        data.forEach(card => {
            const cDiv = document.createElement('div');
            cDiv.className = 'quiz-item';
            cDiv.innerHTML = `
                <div style="font-weight:bold; color:var(--primary);">Q: ${card.front}</div>
                <div style="margin-top:8px; border-top:1px dashed #ccc; padding-top:8px; display:none;" class="back">A: ${card.back}</div>
            `;
            cDiv.onclick = () => {
                const back = cDiv.querySelector('.back');
                back.style.display = back.style.display === 'none' ? 'block' : 'none';
            };
            container.appendChild(cDiv);
        });
    }
}

// منطق التحقق من الكويز (متعدد الإجابات)
window.toggleOption = (el) => {
    el.classList.toggle('selected');
};

window.checkAnswer = (btn, correctIndices, explanation) => {
    const parent = btn.parentElement;
    const options = parent.querySelectorAll('.quiz-opt');
    const feedback = parent.querySelector('.quiz-explanation');

    let allCorrect = true;

    options.forEach((opt, i) => {
        const isSelected = opt.classList.contains('selected');
        const isCorrect = correctIndices.includes(i);

        if (isCorrect) opt.classList.add('correct');
        if (isSelected && !isCorrect) {
            opt.classList.add('wrong');
            allCorrect = false;
        }
        if (!isSelected && isCorrect) allCorrect = false; // نسي اختيار إجابة صحيحة
    });

    feedback.style.display = 'block';
    feedback.innerHTML = `<strong>${allCorrect ? 'Bravo! ✅' : 'Attention ⚠️'}</strong><br>${explanation}`;
    btn.style.display = 'none'; // إخفاء زر التحقق
};

// -----------------------------------------------------------------------------
//  بيانات وهمية للتجربة (احذفها واربط بالـ API الخاص بك)
// -----------------------------------------------------------------------------
function mockQuizData(n) {
    return Array.from({ length: n }, (_, i) => ({
        question: `Question simulée ${i + 1} sur le texte?`,
        options: ["Réponse A (Faux)", "Réponse B (Vrai)", "Réponse C (Vrai)", "Réponse D (Faux)"],
        correctIndices: [1, 2], // B و C صحيحة
        explanation: "L'explication détaillée apparaît ici. Les réponses B et C sont correctes car..."
    }));
}

function mockFlashcards(n) {
    return Array.from({ length: n }, (_, i) => ({
        front: `Concept dentaire ${i + 1}?`,
        back: `Définition du concept ${i + 1} en français.`
    }));
}

// -----------------------------------------------------------------------------
//  6. المايند ماب (Mind Map)
// -----------------------------------------------------------------------------
window.generateMindMap = async () => {
    const container = document.getElementById('mindmap-container');
    container.innerHTML = 'Loading Map...';

    // هنا نرسل النص الكامل
    const text = await getContextText(); // تأكد من جلب النص كاملاً
    // const markdown = await callAiApi('mindmap', { text });

    const mockMarkdown = `
# Sujet Principal
## Branch 1
- Detail A
- Detail B
## Branch 2
- Info X
- Info Y
    `;

    container.innerHTML = '<svg id="mindmap-svg" style="width:100%; height:100%"></svg>';
    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    const { root } = transformer.transform(mockMarkdown);
    Markmap.create(document.getElementById('mindmap-svg'), null, root);
};
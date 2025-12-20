// =============================================================================
//  Smart Dental Viewer - PRODUCTION VERSION (Real AI Connected)
// =============================================================================

// 1. إعدادات المكتبة والاتصال
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';
const USER_TOKEN = localStorage.getItem('userToken'); // جلب توكن المستخدم
const API_BASE = '/api/progress'; // مسار حفظ التقدم (اختياري)

// 2. حالة التطبيق (State)
const STATE = {
    pdfDoc: null,
    scale: 1.2,             // مستوى التكبير
    fileId: null,           // معرف الملف للشات
    currentScope: 'page',   // 'page' أو 'full'
    currentPageInView: 1,   // الصفحة الحالية
    renderedPages: new Set(), // لتجنب تكرار تحميل الصفحات
    chatHistory: []
};

// 3. عناصر الواجهة (DOM Elements)
const DOM = {
    container: document.getElementById('viewer-container'),
    wrapper: document.getElementById('pdf-wrapper'),
    fileInput: document.getElementById('file-input'),
    // Chat Elements
    chatHistory: document.getElementById('chat-history'),
    chatInput: document.getElementById('chat-input'),
    sendBtn: document.getElementById('send-btn'),
    // Tool Elements
    scopePage: document.getElementById('scope-page'),
    scopeFull: document.getElementById('scope-full'),
    countControl: document.getElementById('count-control'),
    countSlider: document.getElementById('count-slider'),
    resultsArea: document.getElementById('results-area'),
    btnDownload: document.getElementById('btn-download-results')
};

// -----------------------------------------------------------------------------
//  HELPER: دالة الاتصال بالسيرفر (API Call)
// -----------------------------------------------------------------------------
async function callAiApi(endpoint, body) {
    if (!USER_TOKEN) {
        alert("Veuillez vous connecter pour utiliser l'IA.");
        throw new Error("No token");
    }

    const res = await fetch(`/api/ai/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${USER_TOKEN}`
        },
        body: JSON.stringify(body)
    });

    if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Server Error (${res.status}): ${errText.substring(0, 50)}`);
    }

    return await res.json();
}

// -----------------------------------------------------------------------------
//  1. تحميل وعرض الملف (Vertical Scrolling)
// -----------------------------------------------------------------------------

DOM.fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    STATE.fileId = `chat_${file.name}_${file.size}`;
    const url = URL.createObjectURL(file);

    // تنظيف الواجهة
    DOM.wrapper.innerHTML = '';
    STATE.renderedPages.clear();
    STATE.currentPageInView = 1;
    STATE.pdfDoc = null;

    try {
        STATE.pdfDoc = await pdfjsLib.getDocument(url).promise;
        initPagesPlaceholders(); // بناء الهيكل
        loadChatHistory();       // استرجاع الشات
    } catch (err) {
        console.error(err);
        alert("Erreur lors du chargement du fichier PDF.");
    }
});

// إنشاء أماكن فارغة للصفحات (Lazy Loading Structure)
function initPagesPlaceholders() {
    for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page-container';
        pageDiv.id = `page-${i}`;
        // أبعاد تقديرية حتى يتم التحميل الفعلي
        pageDiv.style.width = '600px';
        pageDiv.style.height = '850px';
        DOM.wrapper.appendChild(pageDiv);
    }
    setupIntersectionObserver();
}

// مراقبة السكرول لتحميل الصفحات عند الوصول إليها
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const pageNum = parseInt(entry.target.id.split('-')[1]);
                STATE.currentPageInView = pageNum;
                renderPage(pageNum);
            }
        });
    }, { root: DOM.container, rootMargin: '400px' });

    document.querySelectorAll('.page-container').forEach(div => observer.observe(div));
}

// رسم الصفحة الحقيقية
async function renderPage(num) {
    if (STATE.renderedPages.has(num)) return;
    STATE.renderedPages.add(num);

    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });
    const container = document.getElementById(`page-${num}`);

    // تحديث الأبعاد لتطابق الصفحة تماماً
    container.style.width = `${viewport.width}px`;
    container.style.height = `${viewport.height}px`;

    // 1. رسم الصورة (Canvas)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    container.appendChild(canvas);

    await page.render({ canvasContext: ctx, viewport }).promise;

    // 2. إضافة طبقة النصوص (TextLayer) للتحديد
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
//  2. الشات (Chat PDF - Real AI)
// -----------------------------------------------------------------------------

function loadChatHistory() {
    DOM.chatHistory.innerHTML = '';
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

    // إضافة رسالة المستخدم
    appendMessage('user', text, true);
    DOM.chatInput.value = '';

    // مؤشر التحميل
    const loadingId = appendMessage('ai', 'Thinking...', false);

    try {
        // إرسال السؤال + النص كمرجع
        const contextText = await getContextText();
        const res = await callAiApi('ask', {
            question: text,
            context: contextText
        });

        // تحديث الرد
        const loadingMsg = document.querySelector(`[data-id="${loadingId}"]`);
        const answer = res.answer || res.result || res;

        if (loadingMsg) loadingMsg.innerText = answer;
        saveToHistory('ai', answer);

    } catch (e) {
        const loadingMsg = document.querySelector(`[data-id="${loadingId}"]`);
        if (loadingMsg) {
            loadingMsg.innerText = "Erreur: " + e.message;
            loadingMsg.style.color = "red";
        }
    }
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
//  3. أدوات التحكم واستخراج النصوص
// -----------------------------------------------------------------------------

window.setScope = (scope) => {
    STATE.currentScope = scope;
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    if (scope === 'page') {
        DOM.scopePage.classList.add('active');
        DOM.countControl.style.display = 'none';
    } else {
        DOM.scopeFull.classList.add('active');
        DOM.countControl.style.display = 'block';
    }
};

// جلب النص حسب النطاق (صفحة واحدة أو الكل)
async function getContextText() {
    if (!STATE.pdfDoc) return "";

    if (STATE.currentScope === 'page') {
        const page = await STATE.pdfDoc.getPage(STATE.currentPageInView);
        const content = await page.getTextContent();
        return content.items.map(i => i.str).join(' ');
    } else {
        // لتفادي التعليق في الملفات الضخمة، نأخذ عينة كبيرة (أول 20 صفحة مثلاً)
        // يمكنك زيادة الرقم أو عمل حلقة كاملة إذا كان السيرفر يتحمل
        let fullText = "";
        const limit = Math.min(STATE.pdfDoc.numPages, 20);
        for (let i = 1; i <= limit; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            fullText += content.items.map(i => i.str).join(' ') + "\n";
        }
        return fullText;
    }
}

// -----------------------------------------------------------------------------
//  4. الكويز والفلاش كاردز (Real API)
// -----------------------------------------------------------------------------

window.generateContent = async (type) => {
    if (!STATE.pdfDoc) return alert("Veuillez charger un fichier PDF.");

    DOM.resultsArea.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Génération en cours...</div>';
    DOM.btnDownload.style.display = 'none';

    try {
        const text = await getContextText();
        // إذا كان "كامل الملف" نأخذ القيمة من السلايدر، وإلا 3 للكويز السريع
        const count = STATE.currentScope === 'page' ? 3 : parseInt(DOM.countSlider.value);
        const endpoint = type === 'quiz' ? 'generate-quiz-text' : 'generate-flashcards-text';

        // الاتصال بالسيرفر
        const res = await callAiApi(endpoint, {
            text: text,
            count: count,
            language: 'fr' // إجبار اللغة الفرنسية
        });

        // معالجة البيانات (دعم صيغ مختلفة للرد)
        let html = '';
        if (type === 'quiz') {
            const data = Array.isArray(res) ? res : (res.questions || res.data || []);
            html = renderQuiz(data);
        } else {
            const data = Array.isArray(res) ? res : (res.flashcards || res.cards || []);
            html = renderFlashcards(data);
        }

        DOM.resultsArea.innerHTML = html;
        if (html) DOM.btnDownload.style.display = 'block';

    } catch (e) {
        console.error(e);
        DOM.resultsArea.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${e.message}</div>`;
    }
};

// --- دوال العرض ---

function renderQuiz(questions) {
    if (!questions || questions.length === 0) return "<p>Aucune question générée.</p>";

    return questions.map((q, idx) => `
        <div class="result-card">
            <div class="quiz-q">${idx + 1}. ${q.question}</div>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <div class="quiz-opt" onclick="selectOption(this)">${opt}</div>
                `).join('')}
            </div>
            <button class="main-btn" style="margin-top:10px; font-size:12px; padding:6px 12px; background:#64748b;" 
                onclick="validateAnswer(this, [${q.correctOptionIndexes || q.correctIndices || 0}], '${(q.explanation || "").replace(/'/g, "\\'")}')">
                Voir la réponse
            </button>
            <div class="quiz-explanation" style="display:none; margin-top:10px; padding:10px; background:#f1f5f9; border-radius:6px; font-size:13px; color:#334155;"></div>
        </div>
    `).join('');
}

function renderFlashcards(cards) {
    if (!cards || cards.length === 0) return "<p>Aucune carte générée.</p>";

    return cards.map((card, i) => `
        <div class="result-card" onclick="this.querySelector('.back').style.display = 'block'" style="cursor:pointer;">
            <div style="font-weight:bold; color:var(--primary); margin-bottom:8px;">Carte ${i + 1}</div>
            <div>${card.front}</div>
            <div class="back" style="display:none; margin-top:10px; padding-top:10px; border-top:1px dashed #e2e8f0; color:#b45309;">
                <strong>Réponse :</strong> ${card.back}
            </div>
        </div>
    `).join('');
}

// التفاعل (Interactive JS)
window.selectOption = (el) => { el.classList.toggle('selected'); };

window.validateAnswer = (btn, correctIndices, explanation) => {
    // التأكد من أن correctIndices مصفوفة
    const indices = Array.isArray(correctIndices) ? correctIndices : [correctIndices];

    const card = btn.parentElement;
    const options = card.querySelectorAll('.quiz-opt');
    const feedback = card.querySelector('.quiz-explanation');

    options.forEach((opt, idx) => {
        const isSelected = opt.classList.contains('selected');
        const isCorrect = indices.includes(idx);

        if (isCorrect) opt.classList.add('correct');
        if (isSelected && !isCorrect) opt.classList.add('wrong');
    });

    feedback.innerHTML = `<strong>Explication :</strong> ${explanation}`;
    feedback.style.display = 'block';
    btn.style.display = 'none';
};

// -----------------------------------------------------------------------------
//  5. المايند ماب (Mind Map - Real API)
// -----------------------------------------------------------------------------

window.generateMindMap = async () => {
    if (!STATE.pdfDoc) return alert("Veuillez charger un PDF.");

    const container = document.getElementById('mindmap-svg-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Création de la carte...</div>';

    try {
        const text = await getContextText();
        // طلب الخريطة بصيغة Markdown
        const res = await callAiApi('generate-mindmap-text', { text: text });
        const markdown = res.markdown || res.data || res;

        container.innerHTML = '<svg id="mindmap-svg" style="width:100%; height:100%"></svg>';

        if (window.markmap) {
            const { Transformer, Markmap } = window.markmap;
            const transformer = new Transformer();
            const { root } = transformer.transform(markdown);
            Markmap.create(document.getElementById('mindmap-svg'), null, root);
        } else {
            throw new Error("Librairie Markmap non chargée.");
        }

    } catch (e) {
        container.innerHTML = `<div style="color:red; padding:20px;">Erreur: ${e.message}</div>`;
    }
};

// -----------------------------------------------------------------------------
//  6. التصدير (PDF Download)
// -----------------------------------------------------------------------------

window.downloadResultsAsPDF = () => {
    const element = document.getElementById('results-area');
    if (!element || element.innerText.trim() === "") return alert("Rien à télécharger.");

    const opt = {
        margin: 10,
        filename: 'Resultats_Etude.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // استخدام مكتبة html2pdf
    if (window.html2pdf) {
        html2pdf().set(opt).from(element).save();
    } else {
        alert("Erreur: Librairie PDF manquante.");
    }
};
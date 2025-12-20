// =============================================================================
//  Smart Dental Viewer - PRO VERSION (Fixed Selection + Full Features)
// =============================================================================

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';
const USER_TOKEN = localStorage.getItem('userToken');

// --- حالة التطبيق ---
const STATE = {
    pdfDoc: null,
    scale: 1.2,             // مستوى التكبير (يمكنك تغييره)
    currentScope: 'page',   // نطاق التوليد (صفحة أو ملف كامل)
    currentPageInView: 1,   // الصفحة الحالية
    renderedPages: new Set()
};

// --- عناصر الواجهة ---
const DOM = {
    container: document.getElementById('viewer-container'),
    wrapper: document.getElementById('pdf-wrapper'),
    fileInput: document.getElementById('file-input'),
    // القوائم والنوافذ
    popup: document.getElementById('selection-popup'),
    modal: document.getElementById('ai-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalBody: document.getElementById('modal-body'),
    // أدوات التحكم
    scopePage: document.getElementById('scope-page'),
    scopeFull: document.getElementById('scope-full'),
    countControl: document.getElementById('count-control'),
    countSlider: document.getElementById('count-slider'),
    resultsArea: document.getElementById('results-area'),
    // أزرار التحميل
    btnDownload: document.getElementById('btn-download-results'),
    btnDownloadMap: document.getElementById('btn-download-map')
};

// --- دالة الاتصال بالسيرفر (API) ---
async function callAiApi(endpoint, body) {
    if (!USER_TOKEN) {
        alert("Veuillez vous connecter (Login required).");
        throw new Error("No token");
    }
    const res = await fetch(`/api/ai/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${USER_TOKEN}` },
        body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(`Server Error: ${res.status}`);
    return await res.json();
}

// -----------------------------------------------------------------------------
//  1. تحميل الملف وعرضه (مع إصلاح المحاذاة)
// -----------------------------------------------------------------------------
DOM.fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);

    DOM.wrapper.innerHTML = '';
    STATE.renderedPages.clear();
    STATE.currentPageInView = 1;
    STATE.pdfDoc = null;

    try {
        STATE.pdfDoc = await pdfjsLib.getDocument(url).promise;
        initPagesPlaceholders();
    } catch (err) { console.error(err); alert("Erreur lors du chargement du PDF."); }
});

function initPagesPlaceholders() {
    for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page-container';
        pageDiv.id = `page-${i}`;
        // أبعاد مبدئية
        pageDiv.style.width = '600px'; pageDiv.style.height = '850px';
        DOM.wrapper.appendChild(pageDiv);
    }
    setupIntersectionObserver();
}

function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const pageNum = parseInt(entry.target.id.split('-')[1]);
                STATE.currentPageInView = pageNum;
                renderPage(pageNum);
            }
        });
    }, { root: DOM.container, rootMargin: '500px' }); // تحميل مسبق
    document.querySelectorAll('.page-container').forEach(div => observer.observe(div));
}

// 🔥 دالة الرسم المصححة هندسياً (The Fix) 🔥
async function renderPage(num) {
    if (STATE.renderedPages.has(num)) return;
    STATE.renderedPages.add(num);

    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });
    const container = document.getElementById(`page-${num}`);

    // ضبط الأبعاد بأرقام صحيحة (Integer) لمنع الكسور التي تسبب الإزاحة
    const width = Math.floor(viewport.width);
    const height = Math.floor(viewport.height);

    container.style.width = `${width}px`;
    container.style.height = `${height}px`;

    // 1. الكانفاس (الصورة)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // دعم الشاشات عالية الدقة (Retina/High DPI)
    const outputScale = window.devicePixelRatio || 1;

    canvas.width = Math.floor(width * outputScale);
    canvas.height = Math.floor(height * outputScale);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
    container.appendChild(canvas);

    await page.render({ canvasContext: ctx, transform: transform, viewport: viewport }).promise;

    // 2. طبقة النصوص (Text Layer)
    const textLayerDiv = document.createElement('div');
    textLayerDiv.className = 'textLayer';
    textLayerDiv.style.width = `${width}px`;
    textLayerDiv.style.height = `${height}px`;

    // تمرير نسبة التكبير لملف CSS الرسمي ليقوم بضبط المواقع
    textLayerDiv.style.setProperty('--scale-factor', viewport.scale);

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
//  2. القائمة المنبثقة (Selection Popup) & التلوين
// -----------------------------------------------------------------------------

// الاستماع لحدث رفع الماوس لاكتشاف التحديد
document.addEventListener('mouseup', (e) => {
    const selection = window.getSelection();

    // إذا لم يكن هناك نص محدد، نخفي القائمة
    if (!selection || selection.toString().trim() === '') {
        if (DOM.popup) DOM.popup.style.display = 'none';
        return;
    }

    // التأكد أن التحديد داخل منطقة الـ PDF
    if (DOM.container.contains(e.target) && DOM.popup) {
        // إظهار القائمة عند موقع الماوس
        DOM.popup.style.display = 'flex';
        DOM.popup.style.left = `${e.clientX}px`;
        DOM.popup.style.top = `${e.clientY - 40}px`; // تظهر فوق المؤشر قليلاً
    }
});

// تنفيذ أوامر القائمة (شرح، ترجمة، تلوين)
window.handlePopupAction = async (action) => {
    const selection = window.getSelection();
    const text = selection.toString().trim();
    if (!text) return;

    DOM.popup.style.display = 'none'; // إخفاء القائمة

    if (action === 'highlight') {
        // --- منطق التلوين (Highlight) ---
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);

            // محاولة تلوين النص (قد لا تعمل ببعض الحالات المعقدة عبر الفقرات)
            try {
                const span = document.createElement('span');
                span.className = 'highlight'; // التنسيق موجود في CSS
                range.surroundContents(span);
            } catch (e) {
                console.log("Simple highlight failed (cross-block selection).");
            }
            selection.removeAllRanges(); // إزالة التحديد الأزرق لرؤية الأصفر
        }
    }
    else {
        // --- منطق الذكاء الاصطناعي (شرح / ترجمة) ---
        DOM.modal.style.display = 'flex';
        DOM.modalTitle.innerText = action === 'explain' ? 'Explication' : 'Traduction';
        DOM.modalBody.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Traitement en cours...</div>';

        try {
            const endpoint = 'ask';
            const prompt = action === 'explain'
                ? `Expliquez ce terme/phrase médical simplement en français : "${text}"`
                : `Traduisez ce texte médical en Arabe : "${text}"`;

            const res = await callAiApi(endpoint, { question: prompt });
            DOM.modalBody.innerText = res.answer || res.result || res;
        } catch (e) {
            DOM.modalBody.innerText = "Erreur: " + e.message;
        }
    }
};

// -----------------------------------------------------------------------------
//  3. أدوات الدراسة (Quiz & Cards)
// -----------------------------------------------------------------------------
window.setScope = (scope) => {
    STATE.currentScope = scope;
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    if (scope === 'page') {
        DOM.scopePage.classList.add('active'); DOM.countControl.style.display = 'none';
    } else {
        DOM.scopeFull.classList.add('active'); DOM.countControl.style.display = 'block';
    }
};

// استخراج النص (يدعم الصفحة الحالية أو الملف الكامل)
async function getContextText(forceFull = false) {
    if (!STATE.pdfDoc) return "";

    if (forceFull || STATE.currentScope === 'full') {
        // تجميع النص من عدة صفحات (نحدد الحد الأقصى لتفادي تجميد المتصفح)
        let fullText = "";
        const limit = Math.min(STATE.pdfDoc.numPages, 50);
        for (let i = 1; i <= limit; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            fullText += content.items.map(i => i.str).join(' ') + "\n";
        }
        return fullText;
    } else {
        // الصفحة الحالية فقط
        const page = await STATE.pdfDoc.getPage(STATE.currentPageInView);
        const content = await page.getTextContent();
        return content.items.map(i => i.str).join(' ');
    }
}

window.generateContent = async (type) => {
    if (!STATE.pdfDoc) return alert("Chargez un PDF.");
    DOM.resultsArea.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Génération...</div>';
    DOM.btnDownload.style.display = 'none';

    try {
        const text = await getContextText();
        const count = STATE.currentScope === 'page' ? 3 : parseInt(DOM.countSlider.value);
        const endpoint = type === 'quiz' ? 'generate-quiz-text' : 'generate-flashcards-text';

        const res = await callAiApi(endpoint, { text: text, count: count, language: 'fr' });

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
    } catch (e) { DOM.resultsArea.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${e.message}</div>`; }
};

// دوال العرض
function renderQuiz(questions) {
    if (!questions || questions.length === 0) return "<p>Aucune question.</p>";
    return questions.map((q, idx) => `
        <div class="result-card">
            <div style="font-weight:bold; margin-bottom:8px;">${idx + 1}. ${q.question}</div>
            <div>${q.options.map((opt, i) => `<div class="quiz-opt" onclick="this.classList.toggle('selected')">${opt}</div>`).join('')}</div>
            <button class="main-btn" style="margin-top:10px; background:#64748b; padding:5px;" 
                onclick="validateAnswer(this, [${q.correctOptionIndexes || q.correctIndices || 0}], '${(q.explanation || "").replace(/'/g, "\\'")}')">Réponse</button>
            <div class="quiz-explanation" style="display:none; margin-top:10px; background:#f1f5f9; padding:8px; font-size:13px;"></div>
        </div>`).join('');
}

function renderFlashcards(cards) {
    if (!cards || cards.length === 0) return "<p>Aucune carte.</p>";
    return cards.map((card, i) => `
        <div class="result-card" onclick="this.querySelector('.back').style.display = 'block'" style="cursor:pointer;">
            <div style="color:var(--primary); font-size:12px;">Carte ${i + 1}</div>
            <div style="font-weight:bold;">${card.front}</div>
            <div class="back" style="display:none; margin-top:8px; border-top:1px dashed #ccc; padding-top:5px; color:#b45309;">${card.back}</div>
        </div>`).join('');
}

window.validateAnswer = (btn, indices, exp) => {
    const card = btn.parentElement;
    const opts = card.querySelectorAll('.quiz-opt');
    const indicesArr = Array.isArray(indices) ? indices : [indices];
    opts.forEach((opt, i) => {
        if (indicesArr.includes(i)) opt.classList.add('correct');
        else if (opt.classList.contains('selected')) opt.classList.add('wrong');
    });
    card.querySelector('.quiz-explanation').innerHTML = exp;
    card.querySelector('.quiz-explanation').style.display = 'block';
    btn.style.display = 'none';
};

// -----------------------------------------------------------------------------
//  4. المايند ماب (كامل الملف + تحميل)
// -----------------------------------------------------------------------------

window.generateMindMap = async () => {
    if (!STATE.pdfDoc) return alert("Chargez un PDF.");
    const container = document.getElementById('mindmap-svg-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Analyse complète du PDF...</div>';
    DOM.btnDownloadMap.style.display = 'none';

    try {
        // تمرير true لإجبار قراءة الملف كاملاً
        const text = await getContextText(true);
        const res = await callAiApi('generate-mindmap-text', { text: text });
        const markdown = res.markdown || res.data || res;

        container.innerHTML = '<svg id="mindmap-svg" style="width:100%; height:100%"></svg>';

        if (window.markmap) {
            const { Transformer, Markmap } = window.markmap;
            const transformer = new Transformer();
            const { root } = transformer.transform(markdown);
            Markmap.create(document.getElementById('mindmap-svg'), null, root);
            // إظهار زر التحميل
            DOM.btnDownloadMap.style.display = 'flex';
        }
    } catch (e) { container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${e.message}</div>`; }
};

window.downloadMindMap = () => {
    const svg = document.getElementById('mindmap-svg');
    if (!svg) return;

    // تحويل الـ SVG إلى نص وتنزيله
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "mindmap.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

window.downloadResultsAsPDF = () => {
    const el = DOM.resultsArea;
    if (!el || el.innerText.trim() === "") return;
    html2pdf().set({ margin: 10, filename: 'Resultats.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4' } }).from(el).save();
};
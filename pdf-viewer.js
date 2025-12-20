// =============================================================================
//  Smart Dental Viewer - CLEAN VERSION (No Chat, Just Tools)
// =============================================================================

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';
const USER_TOKEN = localStorage.getItem('userToken');

const STATE = {
    pdfDoc: null,
    scale: 1.2,
    currentScope: 'page',
    currentPageInView: 1,
    renderedPages: new Set()
};

const DOM = {
    container: document.getElementById('viewer-container'),
    wrapper: document.getElementById('pdf-wrapper'),
    fileInput: document.getElementById('file-input'),
    scopePage: document.getElementById('scope-page'),
    scopeFull: document.getElementById('scope-full'),
    countControl: document.getElementById('count-control'),
    countSlider: document.getElementById('count-slider'),
    resultsArea: document.getElementById('results-area'),
    btnDownload: document.getElementById('btn-download-results')
};

// --- API Helper ---
async function callAiApi(endpoint, body) {
    if (!USER_TOKEN) { alert("Veuillez vous connecter."); throw new Error("No token"); }
    const res = await fetch(`/api/ai/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${USER_TOKEN}` },
        body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(`Server Error: ${res.status}`);
    return await res.json();
}

// --- PDF Loading ---
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
    } catch (err) { console.error(err); alert("Erreur PDF."); }
});

function initPagesPlaceholders() {
    for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page-container';
        pageDiv.id = `page-${i}`;
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
    }, { root: DOM.container, rootMargin: '400px' });
    document.querySelectorAll('.page-container').forEach(div => observer.observe(div));
}

async function renderPage(num) {
    if (STATE.renderedPages.has(num)) return;
    STATE.renderedPages.add(num);

    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });
    const container = document.getElementById(`page-${num}`);

    container.style.width = `${viewport.width}px`; container.style.height = `${viewport.height}px`;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width; canvas.height = viewport.height;
    container.appendChild(canvas);

    await page.render({ canvasContext: ctx, viewport }).promise;

    // طبقة نصية بسيطة (فقط إذا احتاج الطالب النسخ، بدون هايلايت)
    const textLayerDiv = document.createElement('div');
    textLayerDiv.className = 'textLayer';
    textLayerDiv.style.width = `${viewport.width}px`; textLayerDiv.style.height = `${viewport.height}px`;
    container.appendChild(textLayerDiv);
    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({ textContent: textContent, container: textLayerDiv, viewport: viewport, textDivs: [] });
}

// --- Tools Logic ---
window.setScope = (scope) => {
    STATE.currentScope = scope;
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    if (scope === 'page') {
        DOM.scopePage.classList.add('active'); DOM.countControl.style.display = 'none';
    } else {
        DOM.scopeFull.classList.add('active'); DOM.countControl.style.display = 'block';
    }
};

async function getContextText() {
    if (!STATE.pdfDoc) return "";
    if (STATE.currentScope === 'page') {
        const page = await STATE.pdfDoc.getPage(STATE.currentPageInView);
        const content = await page.getTextContent();
        return content.items.map(i => i.str).join(' ');
    } else {
        let fullText = "";
        const limit = Math.min(STATE.pdfDoc.numPages, 15);
        for (let i = 1; i <= limit; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            fullText += content.items.map(i => i.str).join(' ') + "\n";
        }
        return fullText;
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

function renderQuiz(questions) {
    if (!questions || questions.length === 0) return "<p>Aucune question.</p>";
    return questions.map((q, idx) => `
        <div class="result-card">
            <div style="font-weight:bold; margin-bottom:8px;">${idx + 1}. ${q.question}</div>
            <div>${q.options.map((opt, i) => `<div class="quiz-opt" onclick="selectOption(this)">${opt}</div>`).join('')}</div>
            <button class="main-btn" style="margin-top:10px; font-size:12px; padding:6px; background:#64748b;" 
                onclick="validateAnswer(this, [${q.correctOptionIndexes || q.correctIndices || 0}], '${(q.explanation || "").replace(/'/g, "\\'")}')">Voir réponse</button>
            <div class="quiz-explanation" style="display:none; margin-top:10px; padding:8px; background:#f1f5f9; font-size:13px;"></div>
        </div>`).join('');
}

function renderFlashcards(cards) {
    if (!cards || cards.length === 0) return "<p>Aucune carte.</p>";
    return cards.map((card, i) => `
        <div class="result-card" onclick="this.querySelector('.back').style.display = 'block'" style="cursor:pointer;">
            <div style="color:var(--primary); font-weight:600; font-size:12px;">Carte ${i + 1}</div>
            <div style="font-weight:bold; margin:5px 0;">${card.front}</div>
            <div class="back" style="display:none; margin-top:8px; padding-top:8px; border-top:1px dashed #e2e8f0; color:#b45309;">${card.back}</div>
        </div>`).join('');
}

window.selectOption = (el) => { el.classList.toggle('selected'); };
window.validateAnswer = (btn, correctIndices, explanation) => {
    const indices = Array.isArray(correctIndices) ? correctIndices : [correctIndices];
    const card = btn.parentElement;
    const options = card.querySelectorAll('.quiz-opt');
    const feedback = card.querySelector('.quiz-explanation');
    options.forEach((opt, idx) => {
        if (indices.includes(idx)) opt.classList.add('correct');
        else if (opt.classList.contains('selected')) opt.classList.add('wrong');
    });
    feedback.innerHTML = `<strong>Explication :</strong> ${explanation}`;
    feedback.style.display = 'block'; btn.style.display = 'none';
};

window.generateMindMap = async () => {
    if (!STATE.pdfDoc) return alert("Chargez un PDF.");
    const container = document.getElementById('mindmap-svg-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Création...</div>';
    try {
        const text = await getContextText();
        const res = await callAiApi('generate-mindmap-text', { text: text });
        const markdown = res.markdown || res.data || res;
        container.innerHTML = '<svg id="mindmap-svg" style="width:100%; height:100%"></svg>';
        if (window.markmap) {
            const { Transformer, Markmap } = window.markmap;
            const transformer = new Transformer();
            const { root } = transformer.transform(markdown);
            Markmap.create(document.getElementById('mindmap-svg'), null, root);
        }
    } catch (e) { container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${e.message}</div>`; }
};

window.downloadResultsAsPDF = () => {
    const element = document.getElementById('results-area');
    if (!element || element.innerText.trim() === "") return;
    html2pdf().set({ margin: 10, filename: 'Resultats.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4' } }).from(element).save();
};
// =============================================================================
//  Smart Dental Viewer - FINAL PRO EDITION
//  Features: Text Selection, Highlight, AI Ask, MindMap Download, Pro Quiz
// =============================================================================

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

const STATE = {
    pdfDoc: null,
    lessonId: 'demo_lesson',
    scale: 1.2, // تكبير ليكون النص أوضح
    currentPage: 1,

    quizData: [],
    userAnswers: {},

    flashcardsData: [],
    mindMapData: null,

    sessionData: { chatHistory: [], flashcards: [], quizzes: [], mindMapData: null }
};

const USER_TOKEN = localStorage.getItem('userToken');

// --- API Calls ---
async function callApi(endpoint, body = {}) {
    if (!USER_TOKEN) { alert("Login Required!"); throw new Error("Auth Error"); }
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

// --- Text Extraction ---
async function getSmartText(scopeInputName) {
    if (!STATE.pdfDoc) return "";
    const scope = document.querySelector(`input[name="${scopeInputName}"]:checked`)?.value || 'page';
    let text = "";

    if (scope === 'page') {
        const page = await STATE.pdfDoc.getPage(STATE.currentPage);
        const content = await page.getTextContent();
        text = content.items.map(i => i.str).join(' ');
    } else {
        const maxPages = Math.min(STATE.pdfDoc.numPages, 30);
        for (let i = 1; i <= maxPages; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(' ') + "\n";
        }
    }
    return text;
}

// =============================================================================
//  1. PDF Rendering (مع حل مشكلة التحديد 🔥)
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
        container.innerHTML = '';

        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            await renderPage(i, container);
        }

        setupPageObserver();
        loadSavedProgress();

    } catch (err) {
        console.error(err);
        container.innerHTML = '<p style="color:white;">Error loading PDF</p>';
    }
});

// دالة العرض مع طبقة النصوص (The Magic Fix)
async function renderPage(pageNum, container) {
    const page = await STATE.pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: STATE.scale });

    // 1. إنشاء الحاوية للصفحة
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page-container';
    pageDiv.id = `page-${pageNum}`;
    pageDiv.style.width = `${viewport.width}px`;
    pageDiv.style.height = `${viewport.height}px`;
    pageDiv.style.marginBottom = '20px';
    container.appendChild(pageDiv);

    // 2. رسم الـ Canvas (الصورة)
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    pageDiv.appendChild(canvas);

    await page.render({ canvasContext: context, viewport }).promise;

    // 3. رسم طبقة النصوص (Text Layer) - هذا ما يحل مشكلة التحديد!
    const textLayerDiv = document.createElement('div');
    textLayerDiv.className = 'textLayer';
    textLayerDiv.style.width = `${viewport.width}px`;
    textLayerDiv.style.height = `${viewport.height}px`;
    pageDiv.appendChild(textLayerDiv);

    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContent: textContent,
        container: textLayerDiv,
        viewport: viewport,
        textDivs: []
    });
}

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
//  2. Selection & Highlight & Ask AI Logic (الأدوات الجديدة)
// =============================================================================

let selectedText = "";
let selectedRange = null;

// مراقبة تحديد النص
document.addEventListener('mouseup', () => {
    const selection = window.getSelection();
    const toolbar = document.getElementById('selection-toolbar');

    if (selection.toString().length > 0) {
        // إذا تم تحديد نص داخل الـ Viewer
        const viewer = document.getElementById('viewer-container');
        if (viewer.contains(selection.anchorNode)) {
            selectedText = selection.toString();
            selectedRange = selection.getRangeAt(0);

            // حساب مكان الشريط
            const rect = selectedRange.getBoundingClientRect();
            toolbar.style.display = 'flex';
            toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
            toolbar.style.left = `${rect.left + (rect.width / 2) - 50}px`;
            return;
        }
    }
    // إخفاء الشريط إذا ضغطنا خارجه
    toolbar.style.display = 'none';
});

// تلوين النص (Highlight)
window.highlightSelection = (color) => {
    if (!selectedRange) return;

    // نستخدم CSS Custom Highlight API أو طريقة Wrap بسيطة
    // للطريقة البسيطة:
    const span = document.createElement('span');
    span.className = `highlight-${color}`;
    try {
        selectedRange.surroundContents(span);
        document.getElementById('selection-toolbar').style.display = 'none';
        window.getSelection().removeAllRanges();
    } catch (e) {
        alert("Cannot highlight across elements (Simple Mode)");
    }
};

// سؤال AI عن النص المحدد
window.askAiAboutSelection = async () => {
    const toolbar = document.getElementById('selection-toolbar');
    const modal = document.getElementById('ai-modal');
    const answerDiv = document.getElementById('ai-answer-text');

    toolbar.style.display = 'none';
    modal.style.display = 'flex';
    answerDiv.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Analyzing selection...</div>';

    try {
        const prompt = `Explain this dental concept simply: "${selectedText}"`;
        // نستخدم نفس دالة الشات
        const res = await callApi('ask', { question: prompt });
        answerDiv.innerHTML = res.answer || res.result;
    } catch (e) {
        answerDiv.innerHTML = "Error getting answer.";
    }
};

// =============================================================================
//  3. Quiz & Flashcards (PRO Logic)
// =============================================================================

// (نفس منطق الكويز المتعدد والمحسن الذي كتبناه سابقاً)
let currentSelection = [];

document.getElementById('generate-quiz-btn').addEventListener('click', async () => {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Generating Hardcore Quiz...</div>';
    try {
        const text = await getSmartText('quiz-scope');
        // هنا نستدعي دالة النصوص الجديدة
        const res = await callApi('generate-quiz-text', { text, count: 10 });
        STATE.quizData = res.questions;
        STATE.userAnswers = {};
        STATE.sessionData.quizzes = STATE.quizData;
        renderQuizQuestion(0);
    } catch (err) { container.innerHTML = `<div style="color:red">Error: ${err.message}</div>`; }
});

function renderQuizQuestion(index) {
    // ... (انسخ نفس دالة renderQuizQuestion المحسنة من الرد السابق هنا) ...
    // للاختصار، سأضع الأساسيات
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    const qData = STATE.quizData[index];
    const template = document.getElementById('quiz-card-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector('.quiz-progress').textContent = `Q ${index + 1}/${STATE.quizData.length}`;
    clone.querySelector('.question-text').textContent = qData.question;

    const optsDiv = clone.querySelector('.options-container');
    currentSelection = [];

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => {
            btn.classList.toggle('selected');
            if (currentSelection.includes(idx)) currentSelection = currentSelection.filter(i => i !== idx);
            else currentSelection.push(idx);
        };
        optsDiv.appendChild(btn);
    });

    const nextBtn = clone.querySelector('.btn-next');
    nextBtn.onclick = () => {
        // منطق التحقق البسيط
        const correct = qData.correctOptionIndexes;
        optsDiv.querySelectorAll('.option-btn').forEach((btn, idx) => {
            if (correct.includes(idx)) btn.classList.add('correct');
            else if (currentSelection.includes(idx)) btn.classList.add('wrong');
        });
        clone.querySelector('.explanation').style.display = 'block';
        clone.querySelector('.explanation').textContent = qData.explanation;
        nextBtn.textContent = 'Next';
        nextBtn.onclick = () => index < STATE.quizData.length - 1 ? renderQuizQuestion(index + 1) : alert("Done!");
    };

    container.appendChild(clone);
}

// Flashcards (Single View)
document.getElementById('generate-flashcards-btn').addEventListener('click', async () => {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '<div class="loader">Generating Cards...</div>';
    try {
        const text = await getSmartText('cards-scope');
        const res = await callApi('generate-flashcards-text', { text, count: 35 });
        STATE.flashcardsData = res.flashcards;
        STATE.sessionData.flashcards = STATE.flashcardsData;
        renderSingleFlashcard(0);
    } catch (e) { container.innerHTML = "Error generating cards"; }
});

function renderSingleFlashcard(index) {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '';
    if (index >= STATE.flashcardsData.length) return;

    const data = STATE.flashcardsData[index];
    const template = document.getElementById('flashcard-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector('.front-content').textContent = data.front;
    clone.querySelector('.back-content').textContent = data.back;
    clone.querySelector('.flashcard-wrapper').onclick = function () { this.classList.toggle('flipped'); };

    // Next/Prev Buttons
    const navDiv = document.createElement('div');
    navDiv.style.cssText = "display:flex; justify-content:space-between; margin-top:10px;";

    const prev = document.createElement('button'); prev.innerText = "<"; prev.className = "nav-btn";
    prev.onclick = () => renderSingleFlashcard(index - 1);

    const next = document.createElement('button'); next.innerText = ">"; next.className = "nav-btn";
    next.onclick = () => renderSingleFlashcard(index + 1);

    navDiv.append(prev, next);
    container.appendChild(clone);
    container.appendChild(navDiv);
}

// =============================================================================
//  4. Mind Map & Download & Save
// =============================================================================

let markmapInstance = null;

document.getElementById('generate-mindmap-btn').addEventListener('click', async () => {
    const svgEl = document.getElementById('mindmap-svg');
    svgEl.innerHTML = '<text x="50%" y="50%" text-anchor="middle">Loading...</text>';
    try {
        // نرسل نصاً كبيراً لضمان الشمولية
        let text = "";
        const maxPages = Math.min(STATE.pdfDoc.numPages, 30);
        for (let i = 1; i <= maxPages; i++) {
            const p = await STATE.pdfDoc.getPage(i);
            const c = await p.getTextContent();
            text += c.items.map(s => s.str).join(' ');
        }
        const res = await callApi('generate-mindmap-text', { text });
        STATE.sessionData.mindMapData = res.markdown;
        renderMindMap(res.markdown);
    } catch (e) { svgEl.innerHTML = ''; alert("Map Error"); }
});

function renderMindMap(markdown) {
    const svgEl = document.getElementById('mindmap-svg');
    svgEl.innerHTML = '';
    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);
    markmapInstance = Markmap.create(svgEl, null, root);
}

// 🔥 زر تحميل المايند ماب (Download Map)
document.getElementById('download-map-btn').onclick = () => {
    if (!STATE.sessionData.mindMapData) return alert("No map generated yet!");

    // إنشاء ملف Markdown للتحميل
    const blob = new Blob([STATE.sessionData.mindMapData], { type: 'text/markdown' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `MindMap_${STATE.lessonId}.md`;
    a.click();

    // ملاحظة: لتحميل كصورة (PNG) يتطلب مكتبة إضافية (html2canvas)
    // هنا قمنا بتحميله كملف Markdown يمكن فتحه بأي عارض خرائط
};

// الحفظ والاسترجاع (كما هو)
document.getElementById('save-progress-btn').onclick = async () => {
    // ... منطق الحفظ السابق ...
    const res = await callApi('progress/save', { progressData: STATE.sessionData });
    if (res.success) alert("Session Saved!");
};

async function loadSavedProgress() {
    // ... منطق الاسترجاع السابق ...
}
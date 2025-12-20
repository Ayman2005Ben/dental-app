// ===================================================
// pdf-viewer.js
// نسخة مستقرة – بدون OCR – بدون لخبطة
// ===================================================

// ---------- DOM ----------
const fileInput = document.getElementById('file-input');
const startContainer = document.getElementById('start-container');
const mainLayout = document.getElementById('main-layout');
const viewer = document.getElementById('viewer-section');

const btnQuiz = document.getElementById('btn-quiz');
const btnFlashcards = document.getElementById('btn-flashcards');
const btnMindmap = document.getElementById('btn-mindmap');
const btnExplain = document.getElementById('btn-explain');
const btnTranslate = document.getElementById('btn-translate');

const results = document.getElementById('ai-results-area');
const loader = document.getElementById('loader-overlay');
const modal = document.getElementById('ai-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const backdrop = document.getElementById('modal-backdrop');

// ---------- STATE ----------
let pdfDoc = null;
let currentPage = 1;
let scale = 1.4;

// ---------- PDF.js ----------
pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// ===================================================
// تحميل PDF
// ===================================================
fileInput.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    startContainer.style.display = 'none';
    mainLayout.style.display = 'flex';

    const url = URL.createObjectURL(file);
    const task = pdfjsLib.getDocument(url);
    pdfDoc = await task.promise;

    renderAllPages();
};

// ===================================================
// عرض الصفحات (عرض فقط)
// ===================================================
async function renderAllPages() {
    viewer.innerHTML = '';
    for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const viewport = page.getViewport({ scale });

        const wrapper = document.createElement('div');
        wrapper.className = 'page-wrapper';
        wrapper.dataset.page = i;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: ctx, viewport }).promise;

        wrapper.appendChild(canvas);
        viewer.appendChild(wrapper);
    }

    observePages();
}

// ===================================================
// تحديد الصفحة الحالية (scroll)
// ===================================================
function observePages() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                currentPage = Number(e.target.dataset.page);
            }
        });
    }, { root: viewer, threshold: 0.6 });

    document.querySelectorAll('.page-wrapper')
        .forEach(p => observer.observe(p));
}

// ===================================================
// نص الصفحة الحالية
// ===================================================
async function getCurrentPageText() {
    const page = await pdfDoc.getPage(currentPage);
    const content = await page.getTextContent();
    const text = content.items.map(i => i.str).join(' ').trim();
    return text;
}

// ===================================================
// AI CALL
// ===================================================
async function callAI(endpoint, payload) {
    loader.style.display = 'flex';
    try {
        const res = await fetch(`/api/ai/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(res.status);
        return await res.json();
    } finally {
        loader.style.display = 'none';
    }
}

// ===================================================
// زر موحّد لكل الميزات
// ===================================================
async function handleAI(action) {
    const text = await getCurrentPageText();

    if (!text || text.length < 50) {
        results.innerHTML =
            `<p style="color:#f87171;text-align:center">
             هذه الصفحة لا تحتوي نص قابل للمعالجة
             </p>`;
        return;
    }

    results.innerHTML = '⏳ Processing...';

    let res;
    if (action === 'quiz')
        res = await callAI('generate-quiz-text', { text, count: 5 });
    if (action === 'flashcards')
        res = await callAI('generate-flashcards-text', { text, count: 6 });
    if (action === 'mindmap')
        res = await callAI('generate-mindmap-text', { text });
    if (action === 'explain')
        res = await callAI('ask', { question: `Explain:\n${text}` });
    if (action === 'translate')
        res = await callAI('ask', { question: `Translate to Arabic:\n${text}` });

    renderResult(action, res);
}

// ===================================================
// عرض النتائج
// ===================================================
function renderResult(type, data) {
    results.innerHTML = '';

    if (type === 'quiz') {
        data.questions.forEach(q => {
            const div = document.createElement('div');
            div.innerHTML = `<b>${q.question}</b>`;
            q.options.forEach((o, i) => {
                const btn = document.createElement('button');
                btn.textContent = o;
                btn.onclick = () => {
                    btn.style.background =
                        i === q.correctOptionIndexes[0] ? 'green' : 'red';
                };
                div.appendChild(btn);
            });
            results.appendChild(div);
        });
    }

    if (type === 'flashcards') {
        data.flashcards.forEach(c => {
            const div = document.createElement('div');
            let flip = false;
            div.textContent = c.front;
            div.onclick = () => {
                flip = !flip;
                div.textContent = flip ? c.back : c.front;
            };
            results.appendChild(div);
        });
    }

    if (type === 'mindmap') {
        results.innerHTML = `<pre>${data.markdown}</pre>`;
    }

    if (type === 'explain' || type === 'translate') {
        modalTitle.textContent = type.toUpperCase();
        modalContent.innerHTML = data.answer || data.text;
        modal.style.display = 'flex';
        backdrop.style.display = 'block';
    }
}

// ===================================================
// Events
// ===================================================
btnQuiz.onclick = () => handleAI('quiz');
btnFlashcards.onclick = () => handleAI('flashcards');
btnMindmap.onclick = () => handleAI('mindmap');
btnExplain.onclick = () => handleAI('explain');
btnTranslate.onclick = () => handleAI('translate');

window.closeModal = () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
};

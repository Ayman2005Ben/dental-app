// pdf-viewer.js

// ============================================================
// 1. التعريفات والمتغيرات الأساسية
// ============================================================
const fileInput = document.getElementById('file-input');
const startContainer = document.getElementById('start-container');
const mainLayout = document.getElementById('main-layout');

const canvas = document.getElementById('pdf-canvas');
const drawingCanvas = document.getElementById('drawing-canvas');
const textLayerDiv = document.getElementById('text-layer');
const ctx = canvas.getContext('2d');
const drawingCtx = drawingCanvas.getContext('2d');
const layersWrapper = document.getElementById('pdf-layers-wrapper');

const pageNumSpan = document.getElementById('page-num');
const pageCountSpan = document.getElementById('page-count');
const saveCloudBtn = document.getElementById('save-cloud-btn');
const flashcardsContainer = document.getElementById('flashcards-container');

let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.5;
let currentFileId = null;

let currentTool = 'select';
let isPainting = false;
let currentPath = {};
let pageDrawings = {};
let pageFlashcards = {};

const API_BASE = '/api/progress';
const USER_TOKEN = localStorage.getItem('userToken');

// ============================================================
// 2. أدوات مساعدة (Context Resolver)
// ============================================================
async function getCurrentPageText() {
    const page = await pdfDoc.getPage(pageNum);
    const textContent = await page.getTextContent();
    return textContent.items.map(i => i.str).join(' ');
}

function getSelectedText() {
    return window.getSelection().toString().trim();
}

// ============================================================
// 3. تحميل الملف
// ============================================================
fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file || file.type !== 'application/pdf') {
        alert('Please select a valid PDF file.');
        return;
    }

    currentFileId = `local_${file.name.replace(/\s/g, '_')}_${file.size}`;
    const fileURL = URL.createObjectURL(file);

    startContainer.style.display = 'none';
    mainLayout.style.display = 'flex';

    loadPdf(fileURL);
});

function loadPdf(url) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

    pdfjsLib.getDocument(url).promise.then(async doc => {
        pdfDoc = doc;
        pageCountSpan.textContent = pdfDoc.numPages;

        if (currentFileId) {
            await loadProgressFromCloud(currentFileId);
        }
        renderPage(pageNum);
    }).catch(err => {
        console.error(err);
        alert('Error loading PDF');
    });
}

// ============================================================
// 4. عرض الصفحة
// ============================================================
async function renderPage(num) {
    pageRendering = true;
    const page = await pdfDoc.getPage(num);

    const container = document.getElementById('pdf-canvas-container');
    const containerWidth = container.clientWidth * 0.95;
    const viewportDefault = page.getViewport({ scale: 1.0 });
    scale = containerWidth / viewportDefault.width;
    const viewport = page.getViewport({ scale });

    canvas.width = drawingCanvas.width = viewport.width;
    canvas.height = drawingCanvas.height = viewport.height;

    layersWrapper.style.width = viewport.width + 'px';
    layersWrapper.style.height = viewport.height + 'px';

    await page.render({ canvasContext: ctx, viewport }).promise;

    textLayerDiv.innerHTML = '';
    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContent,
        container: textLayerDiv,
        viewport,
        textDivs: []
    });

    redrawDrawings(num);
    updateSidebarContent(num);

    pageNumSpan.textContent = num;
    pageRendering = false;
    if (pageNumPending) {
        renderPage(pageNumPending);
        pageNumPending = null;
    }
}

document.getElementById('prev-page').onclick = () => {
    if (pageNum > 1) {
        pageNum--;
        renderPage(pageNum);
    }
};

document.getElementById('next-page').onclick = () => {
    if (pageNum < pdfDoc.numPages) {
        pageNum++;
        renderPage(pageNum);
    }
};

// ============================================================
// 5. الرسم البسيط (Pen / Erase)
// ============================================================
function redrawDrawings(num) {
    drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    (pageDrawings[num] || []).forEach(path => {
        drawingCtx.beginPath();
        drawingCtx.strokeStyle = path.color;
        drawingCtx.lineWidth = path.size;
        drawingCtx.lineCap = 'round';
        drawingCtx.moveTo(path.points[0].x, path.points[0].y);
        path.points.forEach(p => drawingCtx.lineTo(p.x, p.y));
        drawingCtx.stroke();
    });
}

drawingCanvas.onmousedown = e => {
    if (currentTool !== 'pen') return;
    isPainting = true;
    const rect = drawingCanvas.getBoundingClientRect();
    currentPath = {
        color: '#f1c40f',
        size: 3,
        points: [{ x: e.clientX - rect.left, y: e.clientY - rect.top }]
    };
};

drawingCanvas.onmousemove = e => {
    if (!isPainting) return;
    const rect = drawingCanvas.getBoundingClientRect();
    currentPath.points.push({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    redrawDrawings(pageNum);
};

drawingCanvas.onmouseup = () => {
    if (!isPainting) return;
    isPainting = false;
    if (!pageDrawings[pageNum]) pageDrawings[pageNum] = [];
    pageDrawings[pageNum].push(currentPath);
};

// ============================================================
// 6. Popup التحديد
// ============================================================
document.getElementById('pdf-canvas-container').addEventListener('mouseup', e => {
    if (currentTool !== 'select') return;
    const text = getSelectedText();
    const popup = document.getElementById('selection-popup');

    if (text) {
        popup.dataset.selectedText = text;
        popup.style.display = 'block';
        popup.style.left = e.clientX + 'px';
        popup.style.top = (e.clientY - 40) + 'px';
    } else {
        popup.style.display = 'none';
    }
});

// ============================================================
// 7. AI API
// ============================================================
async function callAiApi(endpoint, body) {
    const res = await fetch(`/api/ai/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${USER_TOKEN}`
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error('AI Error');
    return res.json();
}

// ============================================================
// 8. Explain (Popup حقيقي)
// ============================================================
document.getElementById('ask-ai-btn').onclick = async () => {
    const popup = document.getElementById('selection-popup');
    const text = popup.dataset.selectedText || await getCurrentPageText();

    const result = await callAiApi('ask', {
        question: `Explain simply for a dental student:\n${text}`
    });

    const explainBox = document.getElementById('ai-explain-popup');
    explainBox.innerHTML = `
        <h4>🤖 Explanation</h4>
        <p>${result.answer}</p>
        <button onclick="this.parentElement.style.display='none'">Close</button>
    `;
    explainBox.style.display = 'block';
    explainBox.style.top = '120px';
    explainBox.style.left = '50%';
    explainBox.style.transform = 'translateX(-50%)';

    popup.style.display = 'none';
};

// ============================================================
// 9. Quiz تفاعلي
// ============================================================
document.getElementById('btn-quiz').onclick = async () => {
    const text = await getCurrentPageText();
    const result = await callAiApi('generate-quiz-text', { text, count: 5 });

    const container = document.getElementById('ai-results-area');
    container.innerHTML = '';

    result.questions.forEach(q => {
        const div = document.createElement('div');
        div.className = 'note-card';
        div.innerHTML = `<h4>${q.question}</h4>`;
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.onclick = () => {
                btn.style.background =
                    i === q.correctOptionIndexes[0] ? '#2ecc71' : '#e74c3c';
            };
            div.appendChild(btn);
        });
        container.appendChild(div);
    });
};

// ============================================================
// 10. Flashcards Flip
// ============================================================
document.getElementById('btn-flashcards').onclick = async () => {
    const text = await getCurrentPageText();
    const result = await callAiApi('generate-flashcards-text', { text, count: 5 });

    const container = document.getElementById('ai-results-area');
    container.innerHTML = '';

    result.flashcards.forEach(card => {
        const div = document.createElement('div');
        div.className = 'note-card';
        let flipped = false;
        div.innerHTML = `<h4>${card.front}</h4>`;
        div.onclick = () => {
            flipped = !flipped;
            div.innerHTML = flipped ? `<p>${card.back}</p>` : `<h4>${card.front}</h4>`;
        };
        container.appendChild(div);
    });
};

// ============================================================
// 11. Mind Map (داخل الصفحة)
// ============================================================
document.getElementById('btn-mindmap').onclick = async () => {
    const text = await getCurrentPageText();
    const result = await callAiApi('generate-mindmap-text', { text });

    const container = document.getElementById('ai-results-area');
    container.innerHTML = `<pre>${result.markdown}</pre>`;
};

// ============================================================
// 12. الحفظ والاسترجاع
// ============================================================
async function saveProgressToCloud() {
    await fetch(`${API_BASE}/save`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${USER_TOKEN}`
        },
        body: JSON.stringify({
            lessonId: currentFileId,
            progressData: {
                drawings: pageDrawings,
                flashcards: pageFlashcards,
                lastPage: pageNum
            }
        })
    });
}

async function loadProgressFromCloud(fileId) {
    const res = await fetch(`${API_BASE}/?lessonId=${fileId}`, {
        headers: { 'Authorization': `Bearer ${USER_TOKEN}` }
    });
    const data = await res.json();
    if (data.success && data.data) {
        pageDrawings = data.data.drawings || {};
        pageFlashcards = data.data.flashcards || {};
        pageNum = data.data.lastPage || 1;
    }
}

saveCloudBtn.onclick = saveProgressToCloud;

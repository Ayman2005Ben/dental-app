// pdf-viewer.js

// --- 1. التعريفات والمتغيرات الأساسية ---
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

// متغيرات حالة PDF
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.5;
let currentFileId = null; // سيتم توليده لتمييز الملف

// متغيرات البيانات (الرسم، الملاحظات)
let currentTool = 'select';
let isPainting = false;
let currentPath = {};
let pageDrawings = {}; // { pageNum: [paths] }
let pageFlashcards = {}; // { pageNum: [cards] }

// API Endpoint
const API_BASE = '/api/progress';
const USER_TOKEN = localStorage.getItem('userToken');

// --- 2. منطق اختيار الملف (Start Screen) ---
fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
        // توليد ID فريد للملف محلياً
        currentFileId = `local_${file.name.replace(/\s/g, '_')}_${file.size}`;

        // إنشاء رابط للملف
        const fileURL = URL.createObjectURL(file);

        // التبديل للواجهة الرئيسية
        startContainer.style.display = 'none';
        mainLayout.style.display = 'flex';

        // بدء التحميل
        loadPdf(fileURL);
    } else {
        alert('Please select a valid PDF file.');
    }
});

// --- 3. تحميل وعرض PDF ---
function loadPdf(url) {
    // تحديد مسار الـ worker
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js`;

    pdfjsLib.getDocument(url).promise.then(doc => {
        pdfDoc = doc;
        pageCountSpan.textContent = pdfDoc.numPages;

        // محاولة جلب بيانات قديمة لهذا الملف من السيرفر
        if (currentFileId) {
            loadProgressFromCloud(currentFileId).then(() => {
                renderPage(pageNum);
            });
        } else {
            renderPage(pageNum);
        }

    }).catch(err => {
        console.error('Error loading PDF:', err);
        // في حالة الخطأ، لا تقم بإعادة تحميل الصفحة لتجنب حلقة لا نهائية، بل أظهر رسالة
        alert('Error parsing PDF file. Please try again.');
    });
}

async function renderPage(num) {
    pageRendering = true;
    const page = await pdfDoc.getPage(num);

    const container = document.getElementById('pdf-canvas-container');
    const containerWidth = container.clientWidth * 0.95;
    const viewportDefault = page.getViewport({ scale: 1.0 });
    scale = containerWidth / viewportDefault.width;
    const viewport = page.getViewport({ scale: scale });

    canvas.height = drawingCanvas.height = viewport.height;
    canvas.width = drawingCanvas.width = viewport.width;
    layersWrapper.style.width = viewport.width + 'px';
    layersWrapper.style.height = viewport.height + 'px';
    textLayerDiv.style.width = viewport.width + 'px';
    textLayerDiv.style.height = viewport.height + 'px';

    const renderContext = { canvasContext: ctx, viewport: viewport };
    await page.render(renderContext).promise;

    textLayerDiv.innerHTML = '';
    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({ textContent, container: textLayerDiv, viewport, textDivs: [] }).promise;

    // إعادة رسم البيانات المحفوظة
    redrawDrawings(num);
    updateSidebarContent(num);

    pageRendering = false;
    pageNumSpan.textContent = num;
    if (pageNumPending !== null) { renderPage(pageNumPending); pageNumPending = null; }
}

function queueRenderPage(num) {
    if (pageRendering) pageNumPending = num; else renderPage(num);
}

document.getElementById('prev-page').addEventListener('click', () => { if (pageNum <= 1) return; pageNum--; queueRenderPage(pageNum); });
document.getElementById('next-page').addEventListener('click', () => { if (pageNum >= pdfDoc.numPages) return; pageNum++; queueRenderPage(pageNum); });


// --- 4. منطق الرسم (Drawing Logic) ---
function redrawDrawings(num) {
    drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    const paths = pageDrawings[num] || [];

    paths.forEach(path => {
        if (path.type === 'conceal') {
            drawingCtx.fillStyle = path.color;
            const w = path.end.x - path.start.x;
            const h = path.end.y - path.start.y;
            drawingCtx.fillRect(path.start.x, path.start.y, w, h);
        } else {
            drawingCtx.beginPath();
            drawingCtx.strokeStyle = path.color;
            drawingCtx.lineWidth = path.size;
            drawingCtx.globalAlpha = path.opacity || 1.0;
            drawingCtx.lineCap = 'round';
            drawingCtx.lineJoin = 'round';
            if (path.type === 'erase') drawingCtx.globalCompositeOperation = 'destination-out';
            else drawingCtx.globalCompositeOperation = 'source-over';

            if (path.points && path.points.length > 0) {
                drawingCtx.moveTo(path.points[0].x, path.points[0].y);
                for (let i = 1; i < path.points.length; i++) drawingCtx.lineTo(path.points[i].x, path.points[i].y);
                drawingCtx.stroke();
            }
            drawingCtx.globalCompositeOperation = 'source-over';
        }
    });
}

function getPos(e) {
    const rect = drawingCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
}

drawingCanvas.addEventListener('mousedown', startPaint);
drawingCanvas.addEventListener('touchstart', startPaint, { passive: false });
drawingCanvas.addEventListener('mousemove', paint);
drawingCanvas.addEventListener('touchmove', paint, { passive: false });
drawingCanvas.addEventListener('mouseup', endPaint);
drawingCanvas.addEventListener('touchend', endPaint);

function startPaint(e) {
    if (currentTool === 'select') return;
    isPainting = true;
    if (e.touches) e.preventDefault();
    const pos = getPos(e);
    const color = document.getElementById('color-picker').value;

    currentPath = {
        type: currentTool,
        color: currentTool === 'conceal' ? '#34495e' : color,
        size: currentTool === 'highlight' ? 20 : 2,
        opacity: currentTool === 'highlight' ? 0.4 : 1.0,
        points: [pos],
        start: pos
    };
}

function paint(e) {
    if (!isPainting || currentTool === 'select') return;
    if (e.touches) e.preventDefault();
    const pos = getPos(e);

    if (currentTool === 'conceal') {
        currentPath.end = pos;
        redrawDrawings(pageNum);
        drawingCtx.fillStyle = currentPath.color;
        drawingCtx.fillRect(currentPath.start.x, currentPath.start.y, pos.x - currentPath.start.x, pos.y - currentPath.start.y);
    } else {
        currentPath.points.push(pos);
        // رسم فوري
        drawingCtx.beginPath();
        drawingCtx.strokeStyle = currentPath.color;
        drawingCtx.lineWidth = currentPath.size;
        drawingCtx.globalAlpha = currentPath.opacity;
        if (currentTool === 'erase') drawingCtx.globalCompositeOperation = 'destination-out';
        const lastPoint = currentPath.points[currentPath.points.length - 2];
        drawingCtx.moveTo(lastPoint.x, lastPoint.y);
        drawingCtx.lineTo(pos.x, pos.y);
        drawingCtx.stroke();
        drawingCtx.globalCompositeOperation = 'source-over';
    }
}

function endPaint() {
    if (!isPainting || currentTool === 'select') return;
    isPainting = false;
    if (!pageDrawings[pageNum]) pageDrawings[pageNum] = [];
    pageDrawings[pageNum].push(currentPath);
    redrawDrawings(pageNum);
}

// --- 5. أدوات الشريط العلوي ---
document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (['save-cloud-btn', 'prev-page', 'next-page'].includes(btn.id) || !btn.id) return;

        document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTool = btn.id.replace('-btn', '');

        if (currentTool === 'select') {
            drawingCanvas.style.pointerEvents = 'none';
            textLayerDiv.classList.remove('drawing-active');
            document.getElementById('selection-popup').style.display = 'none';
        } else {
            drawingCanvas.style.pointerEvents = 'auto';
            textLayerDiv.classList.add('drawing-active');
        }
    });
});

document.getElementById('clear-drawings-btn').addEventListener('click', () => {
    if (confirm('Clear drawings on this page?')) {
        pageDrawings[pageNum] = [];
        redrawDrawings(pageNum);
    }
});


// --- 6. الشريط الجانبي والملاحظات ---
function updateSidebarContent(num) {
    flashcardsContainer.innerHTML = '';
    const cards = pageFlashcards[num] || [];

    if (cards.length === 0) {
        flashcardsContainer.innerHTML = `
            <p style="color:#bdc3c7; text-align:center; margin-top:20px;">
                <i class="fas fa-highlighter" style="font-size:2em; margin-bottom:10px; display:block;"></i>
                Select text to create notes.
            </p>`;
    } else {
        cards.forEach(card => {
            const div = document.createElement('div');
            div.className = 'note-card';
            div.innerHTML = `<h4>${card.front}</h4><p>${card.back}</p>`;
            flashcardsContainer.appendChild(div);
        });
    }
}

document.getElementById('create-flashcard-btn').addEventListener('click', () => {
    const text = document.getElementById('selection-popup').dataset.selectedText;
    const note = prompt("Enter your note/definition:");
    if (note) {
        if (!pageFlashcards[pageNum]) pageFlashcards[pageNum] = [];
        pageFlashcards[pageNum].push({ front: text, back: note });
        updateSidebarContent(pageNum);
        document.getElementById('selection-popup').style.display = 'none';
    }
});

// القائمة المنبثقة عند التحديد
document.getElementById('pdf-canvas-container').addEventListener('mouseup', (e) => {
    if (currentTool !== 'select') return;
    const sel = window.getSelection();
    const text = sel.toString().trim();
    const popup = document.getElementById('selection-popup');

    if (text.length > 0) {
        popup.style.display = 'block';
        popup.style.left = e.clientX + 'px';
        popup.style.top = (e.clientY - 50) + 'px';
        popup.dataset.selectedText = text;
    } else {
        popup.style.display = 'none';
    }
});


// --- 7. الحفظ والاسترجاع السحابي (Cloud Logic) ---

async function saveProgressToCloud() {
    if (!currentFileId) return alert('No file loaded.');

    saveCloudBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';

    const progressData = {
        drawings: pageDrawings,
        flashcards: pageFlashcards,
        lastPage: pageNum
    };

    try {
        const res = await fetch(`${API_BASE}/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${USER_TOKEN}`
            },
            body: JSON.stringify({
                lessonId: currentFileId,
                progressData: progressData
            })
        });

        const data = await res.json();
        if (data.success) {
            saveCloudBtn.innerHTML = '<i class="fas fa-check"></i> Saved!';
            setTimeout(() => { saveCloudBtn.innerHTML = '<i class="fas fa-save"></i> Save Progress'; }, 2000);
        } else {
            alert('Save Failed: ' + data.message);
            saveCloudBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
        }
    } catch (err) {
        console.error(err);
        alert('Network Error. Check console.');
        saveCloudBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
    }
}

async function loadProgressFromCloud(fileId) {
    try {
        console.log("Loading progress for:", fileId);
        const res = await fetch(`${API_BASE}/?lessonId=${fileId}`, {
            headers: { 'Authorization': `Bearer ${USER_TOKEN}` }
        });
        const data = await res.json();

        if (data.success && data.data && data.data.drawings) {
            pageDrawings = data.data.drawings || {};
            pageFlashcards = data.data.flashcards || {};

            if (data.data.lastPage) {
                pageNum = data.data.lastPage;
            }
            console.log("Data loaded successfully!");
        }
    } catch (err) {
        console.error("No saved progress or error loading:", err);
    }
}

saveCloudBtn.addEventListener('click', saveProgressToCloud);


// --- 8. تفعيل أزرار الذكاء الاصطناعي (AI Integration) ---

async function callAiApi(endpoint, body) {
    const token = localStorage.getItem('userToken');
    if (!token) {
        alert("Please login first!");
        return null;
    }

    try {
        const res = await fetch(`/api/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'AI Error');
        return data;
    } catch (err) {
        console.error("AI API Error:", err);
        alert(`Error: ${err.message}`);
        return null;
    }
}

// 1. زر إنشاء كويز (Quiz)
const btnQuiz = document.getElementById('btn-quiz');
if (btnQuiz) {
    btnQuiz.addEventListener('click', async () => {
        const page = await pdfDoc.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');

        if (pageText.length < 50) {
            alert("Not enough text on this page to generate a quiz.");
            return;
        }

        btnQuiz.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

        const result = await callAiApi('gemini/quiz', {
            text: pageText,
            count: 5
        });

        if (result) {
            const quizContainer = document.getElementById('quiz-results');
            quizContainer.innerHTML = '';

            const questions = result.questions || result;

            if (Array.isArray(questions)) {
                questions.forEach((q, idx) => {
                    const div = document.createElement('div');
                    div.className = 'note-card';
                    div.style.borderLeftColor = '#e67e22';
                    div.innerHTML = `
                        <h4>Q${idx + 1}: ${q.question}</h4>
                        <ul>
                            ${q.options.map(opt => `<li>${opt}</li>`).join('')}
                        </ul>
                        <p style="font-size:0.8em; color:green; margin-top:5px;"><strong>Answer:</strong> ${q.options[q.correctOptionIndexes[0]]}</p>
                    `;
                    quizContainer.appendChild(div);
                });
            } else {
                quizContainer.innerHTML = '<p>Could not parse quiz data.</p>';
            }
        }
        btnQuiz.innerHTML = '<i class="fas fa-question-circle"></i> Generate Quiz';
    });
}

// 2. زر الشرح (Explain)
const btnExplain = document.getElementById('ask-ai-btn');
if (btnExplain) {
    btnExplain.addEventListener('click', async () => {
        const popup = document.getElementById('selection-popup');
        const text = popup.dataset.selectedText;

        if (!text) return;

        btnExplain.innerHTML = 'Thinking...';

        const result = await callAiApi('ai/ask', {
            question: `Explain this concept simply for a dental student: "${text}"`
        });

        if (result && result.answer) {
            alert(`💡 AI Explanation:\n\n${result.answer}`);
        }

        btnExplain.innerHTML = '<i class="fas fa-robot"></i> Explain';
        popup.style.display = 'none';
    });
}

// 3. زر الترجمة (Translate)
const btnTranslate = document.getElementById('translate-btn');
if (btnTranslate) {
    btnTranslate.addEventListener('click', async () => {
        const popup = document.getElementById('selection-popup');
        const text = popup.dataset.selectedText;

        const result = await callAiApi('ai/ask', {
            question: `Translate this to Arabic: "${text}"`
        });

        if (result && result.answer) {
            alert(`📖 Translation:\n\n${result.answer}`);
        }
        popup.style.display = 'none';
    });
}


// ============================================================
// ✅ كود التشغيل التلقائي (النسخة النهائية والمدمجة)
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
    // 1. البحث عن رابط الملف في شريط العنوان (URL)
    const urlParams = new URLSearchParams(window.location.search);
    const fileSrc = urlParams.get('src');
    const subjectName = urlParams.get('subject');

    if (fileSrc) {
        console.log("PDF Source found:", fileSrc);

        // 2. إخفاء شاشة الرفع (Start Screen) فوراً
        const startScreen = document.getElementById('start-container');
        if (startScreen) startScreen.style.display = 'none';

        // 3. إظهار واجهة الاستوديو (Main Layout)
        const mainLayout = document.getElementById('main-layout');
        if (mainLayout) mainLayout.style.display = 'flex';

        // 4. توليد ID للملف (ضروري للحفظ السحابي)
        if (!currentFileId) {
            currentFileId = 'uploaded_lesson_' + Date.now();
        }

        // 5. بدء تحميل الملف في الـ Canvas
        try {
            const decodedSrc = decodeURIComponent(fileSrc);
            loadPdf(decodedSrc);

            // تحديث عنوان الصفحة إذا وجدنا اسم المادة
            if (subjectName) {
                document.title = `${decodeURIComponent(subjectName)} - Smart Study`;
            }
        } catch (e) {
            console.error("Error auto-loading PDF:", e);
        }
    }
});
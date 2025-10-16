// pdf-viewer.js

// --- 1. تعريف العناصر الأساسية (بما في ذلك العناصر الجديدة) ---
const canvas = document.getElementById('pdf-canvas');
const drawingCanvas = document.getElementById('drawing-canvas'); // ✅ Canvas الرسم
const textLayerDiv = document.getElementById('text-layer');
const ctx = canvas.getContext('2d');
const drawingCtx = drawingCanvas.getContext('2d'); // ✅ سياق الرسم

const pageNumSpan = document.getElementById('page-num');
const pageCountSpan = document.getElementById('page-count');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');

// عناصر التفاعل مع النص
const selectionPopup = document.getElementById('selection-popup');
const askAiBtn = document.getElementById('ask-ai-btn');
const translateBtn = document.getElementById('translate-btn');

// ✅ عناصر أدوات الرسم
const drawModeBtn = document.getElementById('draw-mode-btn');
const colorPicker = document.getElementById('color-picker');
const brushSizeInput = document.getElementById('brush-size');
const brushOpacityInput = document.getElementById('brush-opacity');
const clearDrawingsBtn = document.getElementById('clear-drawings-btn');

// --- 2. متغيرات الحالة (مع إضافة متغيرات الرسم) ---
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.5;

// ✅ متغيرات حالة الرسم
let isDrawingMode = false;
let isPainting = false;
let currentPath = []; // لتخزين نقاط المسار الحالي للرسمة
const pageDrawings = {}; // لتخزين كل الرسومات { pageNum: [path1, path2] }

// --- 3. الحصول على مسار الـ PDF من الرابط وإنشاء الرابط الكامل ---
const SERVER_URL = 'https://dental-app-he1p.onrender.com'; // عنوان الخادم الذي يحتوي على الملفات
const urlParams = new URLSearchParams(window.location.search);
const relativePdfPath = decodeURIComponent(urlParams.get('src')); // المسار النسبي مثل /LESSONS/...

// إنشاء الرابط الكامل الذي يفهمه المتصفح
const finalPdfUrl = SERVER_URL + relativePdfPath.replace('/LESSONS/', '/lessons/');


// --- 4. دالة عرض الصفحة (مُحدثة) ---
async function renderPage(num) {
    pageRendering = true;
    const page = await pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: scale });

    // تعديل أبعاد كل الطبقات (PDF, Drawing, Text)
    canvas.height = drawingCanvas.height = viewport.height;
    canvas.width = drawingCanvas.width = viewport.width;
    textLayerDiv.style.width = viewport.width + 'px';
    textLayerDiv.style.height = viewport.height + 'px';
    
    // ضبط الحاوية لتناسب حجم الـ canvas
    const container = document.getElementById('pdf-canvas-container');
    container.style.height = `${viewport.height}px`;
    container.style.width = `${viewport.width}px`;


    // عرض PDF
    const renderContext = { canvasContext: ctx, viewport: viewport };
    await page.render(renderContext).promise;

    // عرض طبقة النص
    textLayerDiv.innerHTML = '';
    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({ textContent, container: textLayerDiv, viewport, textDivs: [] }).promise;

    // ✅ إعادة رسم الرسومات المحفوظة لهذه الصفحة
    redrawDrawings(num);
    
    pageRendering = false;
    pageNumSpan.textContent = num;
    if (pageNumPending !== null) {
        renderPage(pageNumPending);
        pageNumPending = null;
    }
}

// ✅ --- 5. دوال الرسم الجديدة ---
function redrawDrawings(num) {
    drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height); // مسح canvas الرسم
    const paths = pageDrawings[num] || [];
    paths.forEach(path => {
        if (path.points.length < 2) return;

        drawingCtx.beginPath();
        drawingCtx.strokeStyle = path.color;
        drawingCtx.lineWidth = path.size;
        drawingCtx.globalAlpha = path.opacity; // للتحكم في الشفافية (مهم للتلوين)
        drawingCtx.lineCap = 'round';
        drawingCtx.lineJoin = 'round';

        drawingCtx.moveTo(path.points[0].x, path.points[0].y);
        for (let i = 1; i < path.points.length; i++) {
            drawingCtx.lineTo(path.points[i].x, path.points[i].y);
        }
        drawingCtx.stroke();
    });
    drawingCtx.globalAlpha = 1.0; // إعادة الشفافية للقيمة الافتراضية
}

// --- 6. دالة لإضافة الصفحات إلى قائمة الانتظار ---
function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

// --- 7. التنقل بين الصفحات ---
prevPageBtn.addEventListener('click', () => {
    if (pageNum <= 1) return;
    pageNum--;
    queueRenderPage(pageNum);
});

nextPageBtn.addEventListener('click', () => {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    queueRenderPage(pageNum);
});

// --- 8. منطق التفاعل مع النص المحدد (مُحدث ليعمل فقط عند عدم الرسم) ---
document.addEventListener('mouseup', (e) => {
    if (isDrawingMode) return; // إذا كنا في وضع الرسم، لا تظهر قائمة النص

    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (selectedText.length > 0) {
        const rect = selection.getRangeAt(0).getBoundingClientRect();
        selectionPopup.style.left = `${rect.left + window.scrollX}px`;
        selectionPopup.style.top = `${rect.top + window.scrollY - selectionPopup.offsetHeight - 5}px`;
        selectionPopup.style.display = 'flex';
        selectionPopup.dataset.selectedText = selectedText;
    } else {
        selectionPopup.style.display = 'none';
    }
});

// ✅ --- 9. معالجات أحداث الرسم ---
drawingCanvas.addEventListener('mousedown', (e) => {
    if (!isDrawingMode) return;
    isPainting = true;
    const rect = drawingCanvas.getBoundingClientRect();
    currentPath = {
        points: [{ x: e.clientX - rect.left, y: e.clientY - rect.top }],
        color: colorPicker.value,
        size: brushSizeInput.value,
        opacity: brushOpacityInput.value
    };
});

drawingCanvas.addEventListener('mousemove', (e) => {
    if (!isPainting || !isDrawingMode) return;
    const rect = drawingCanvas.getBoundingClientRect();
    currentPath.points.push({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    
    // رسم مباشر على الشاشة لتجربة سلسة
    redrawDrawings(pageNum); // نرسم القديم أولاً
    // ثم نرسم المسار الحالي
    if (currentPath.points.length < 2) return;
    drawingCtx.beginPath();
    drawingCtx.strokeStyle = currentPath.color;
    drawingCtx.lineWidth = currentPath.size;
    drawingCtx.globalAlpha = currentPath.opacity;
    drawingCtx.lineCap = 'round';
    drawingCtx.lineJoin = 'round';
    drawingCtx.moveTo(currentPath.points[0].x, currentPath.points[0].y);
    for (let i = 1; i < currentPath.points.length; i++) {
        drawingCtx.lineTo(currentPath.points[i].x, currentPath.points[i].y);
    }
    drawingCtx.stroke();
    drawingCtx.globalAlpha = 1.0;
});

drawingCanvas.addEventListener('mouseup', () => {
    if (!isPainting || !isDrawingMode) return;
    isPainting = false;
    if (!pageDrawings[pageNum]) {
        pageDrawings[pageNum] = [];
    }
    pageDrawings[pageNum].push(currentPath); // حفظ المسار المكتمل
});

drawingCanvas.addEventListener('mouseleave', () => {
    if(isPainting) { // إذا خرج الماوس وهو يرسم، احفظ الرسمة
        isPainting = false;
        if (!pageDrawings[pageNum]) {
            pageDrawings[pageNum] = [];
        }
        pageDrawings[pageNum].push(currentPath);
    }
});

// ✅ --- 10. معالجات أحداث شريط الأدوات ---
drawModeBtn.addEventListener('click', () => {
    isDrawingMode = !isDrawingMode;
    drawModeBtn.classList.toggle('active', isDrawingMode);
    textLayerDiv.classList.toggle('drawing-active', isDrawingMode);
    drawingCanvas.style.zIndex = isDrawingMode ? '10' : '-1'; // إظهار أو إخفاء طبقة الرسم
    selectionPopup.style.display = 'none'; // إخفاء قائمة النص عند التبديل
});

clearDrawingsBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all drawings on this page?')) {
        pageDrawings[pageNum] = []; // مسح البيانات المحفوظة
        redrawDrawings(pageNum); // مسح ما هو معروض على الشاشة
    }
});

// --- 11. وظائف الاتصال بالـ AI والترجمة (بدون تغيير) ---
async function callApi(endpoint, body) {
    const token = localStorage.getItem('userToken');
    try {
        const response = await fetch(`https://dental-app-he1p.onrender.com/api/${endpoint}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            const err = await response.json(); throw new Error(err.message || 'API request failed');
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
        } else {
            return response.text();
        }
    } catch (error) {
        alert(`Error: ${error.message}`); return null;
    }
}
askAiBtn.addEventListener('click', async () => {
    const text = selectionPopup.dataset.selectedText; if (!text) return;
    const prompt = `Please explain the following concept from a dentistry textbook in simple terms for a student:\n\n"${text}"`;
    const result = await callApi('ai/ask', { question: prompt });
    if (result && result.answer) { alert(`Dentist AI says:\n\n${result.answer}`); }
    selectionPopup.style.display = 'none';
});
translateBtn.addEventListener('click', async () => {
    const text = selectionPopup.dataset.selectedText; if (!text) return;
    const targetLanguage = prompt("Translate to which language?", "English"); if (!targetLanguage) return;
    const result = await callApi('ai/translate', { content: text, targetLanguage: targetLanguage });
    if (result) { alert(`Translation:\n\n${result}`); }
    selectionPopup.style.display = 'none';
});

// --- 12. بدء تحميل الـ PDF ---
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js`;

pdfjsLib.getDocument(finalPdfUrl).promise.then(doc => {
    pdfDoc = doc;
    pageCountSpan.textContent = pdfDoc.numPages;
    renderPage(pageNum);
}).catch(err => {
    console.error('Error loading PDF:', err);
    alert('Failed to load the lesson PDF.');
});
// pdf-viewer.js

// --- 1. تعريف العناصر الأساسية ---
const canvas = document.getElementById('pdf-canvas');
const drawingCanvas = document.getElementById('drawing-canvas');
const textLayerDiv = document.getElementById('text-layer');
const ctx = canvas.getContext('2d');
const drawingCtx = drawingCanvas.getContext('2d'); 
const layersWrapper = document.getElementById('pdf-layers-wrapper'); // ✅ الحاوية الداخلية الجديدة

const pageNumSpan = document.getElementById('page-num');
const pageCountSpan = document.getElementById('page-count');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');

// عناصر التفاعل مع النص
const selectionPopup = document.getElementById('selection-popup');
const askAiBtn = document.getElementById('ask-ai-btn');
const translateBtn = document.getElementById('translate-btn');
const createFlashcardBtn = document.getElementById('create-flashcard-btn'); // ✅

// عناصر أدوات الرسم
const toolButtons = document.querySelectorAll('.tool-btn'); // ✅ كل أزرار الأدوات
const colorPicker = document.getElementById('color-picker');
const brushSizeInput = document.getElementById('brush-size');
const brushOpacityInput = document.getElementById('brush-opacity');
const clearDrawingsBtn = document.getElementById('clear-drawings-btn');

// --- 2. متغيرات الحالة ---
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
// ❌ let scale = 1.5; (تمت إزالته)

// ✅ متغيرات حالة الرسم الجديدة
let currentTool = 'select'; // 'select', 'highlight', 'pen', 'conceal', 'erase'
let isPainting = false;
let currentPath = {}; // لتخزين المسار الحالي (سواء رسم حر أو شكل)
let pageDrawings = {}; // لتخزين كل الرسومات { pageNum: [path1, path2] }
let pageFlashcards = {}; // ✅ لتخزين البطاقات { pageNum: [card1, card2] }

// --- 3. الحصول على مسار الـ PDF وإنشاء الرابط الكامل ---
const SERVER_URL = 'https://dental-app-he1p.onrender.com'; 
const urlParams = new URLSearchParams(window.location.search);
const relativePdfPath = decodeURIComponent(urlParams.get('src'));
const finalPdfUrl = SERVER_URL + relativePdfPath.replace('/LESSONS/', '/lessons/');


// --- 4. دالة عرض الصفحة (مُحدثة بالكامل للتجاوب) ---
async function renderPage(num) {
    pageRendering = true;
    const page = await pdfDoc.getPage(num);

    // ✅ --- حساب الـ scale الديناميكي ---
    const container = document.getElementById('pdf-canvas-container');
    const containerWidth = container.clientWidth * 0.95; // 95% من عرض الحاوية لإعطاء هامش
    const viewportDefault = page.getViewport({ scale: 1.0 });
    const scale = containerWidth / viewportDefault.width; // حساب الـ scale المناسب
    const viewport = page.getViewport({ scale: scale });
    // ✅ --- نهاية حساب الـ scale ---

    // تعديل أبعاد كل الطبقات (PDF, Drawing, Text) وحاويتها
    canvas.height = drawingCanvas.height = viewport.height;
    canvas.width = drawingCanvas.width = viewport.width;
    
    layersWrapper.style.width = viewport.width + 'px';
    layersWrapper.style.height = viewport.height + 'px';
    textLayerDiv.style.width = viewport.width + 'px';
    textLayerDiv.style.height = viewport.height + 'px';

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

// ✅ --- 5. دوال حفظ وتحميل البيانات من LocalStorage ---
function saveDrawings() {
    if (pdfDoc) {
        localStorage.setItem(`drawings_${finalPdfUrl}`, JSON.stringify(pageDrawings));
    }
}
function loadDrawings() {
    if (pdfDoc) {
        const saved = localStorage.getItem(`drawings_${finalPdfUrl}`);
        return saved ? JSON.parse(saved) : {};
    }
    return {};
}
function saveFlashcards() {
    if (pdfDoc) {
        localStorage.setItem(`flashcards_${finalPdfUrl}`, JSON.stringify(pageFlashcards));
    }
}
function loadFlashcards() {
    if (pdfDoc) {
        const saved = localStorage.getItem(`flashcards_${finalPdfUrl}`);
        return saved ? JSON.parse(saved) : {};
    }
    return {};
}

// ✅ --- 6. دالة إعادة رسم الرسومات (مُحدثة بالكامل) ---
function redrawDrawings(num) {
    drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height); // مسح canvas الرسم
    const paths = pageDrawings[num] || [];
    
    paths.forEach(path => {
        drawingCtx.beginPath();
        drawingCtx.strokeStyle = path.color;
        drawingCtx.lineWidth = path.size;
        drawingCtx.globalAlpha = path.opacity;
        drawingCtx.lineCap = 'round';
        drawingCtx.lineJoin = 'round';

        // ✅ التمييز بين أنواع الأدوات
        switch (path.type) {
            case 'pen':
            case 'highlight':
                drawingCtx.globalCompositeOperation = 'source-over';
                break;
            case 'erase':
                drawingCtx.globalCompositeOperation = 'destination-out'; // وضع الممحاة
                break;
            case 'conceal':
                drawingCtx.globalCompositeOperation = 'source-over';
                drawingCtx.fillStyle = path.color; // أداة الإخفاء تستخدم fill
                const width = path.end.x - path.start.x;
                const height = path.end.y - path.start.y;
                drawingCtx.fillRect(path.start.x, path.start.y, width, height);
                return; // لا نحتاج لـ stroke
        }

        // رسم المسارات الحرة (pen, highlight, erase)
        if (path.points && path.points.length > 1) {
            drawingCtx.moveTo(path.points[0].x, path.points[0].y);
            for (let i = 1; i < path.points.length; i++) {
                drawingCtx.lineTo(path.points[i].x, path.points[i].y);
            }
            drawingCtx.stroke();
        }
    });

    // إعادة الوضع الافتراضي
    drawingCtx.globalAlpha = 1.0;
    drawingCtx.globalCompositeOperation = 'source-over';
}


// --- 7. دالة لإضافة الصفحات إلى قائمة الانتظار ---
function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

// --- 8. التنقل بين الصفحات ---
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

// --- 9. منطق التفاعل مع النص المحدد ---
document.addEventListener('mouseup', (e) => {
    if (currentTool !== 'select') return; // لا تظهر القائمة إلا في وضع التحديد

    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (selectedText.length > 0 && !selectionPopup.contains(e.target)) {
        const rect = selection.getRangeAt(0).getBoundingClientRect();
        const containerRect = layersWrapper.getBoundingClientRect();
        
        // حساب الموقع بالنسبة للحاوية
        selectionPopup.style.left = `${rect.left - containerRect.left + rect.width / 2}px`; // توسيط
        selectionPopup.style.top = `${rect.top - containerRect.top - selectionPopup.offsetHeight - 10}px`;
        selectionPopup.style.display = 'flex';
        selectionPopup.style.transform = 'translateX(-50%)';
        selectionPopup.dataset.selectedText = selectedText;
    } else if (!selectionPopup.contains(e.target)) {
        selectionPopup.style.display = 'none';
    }
});
// إخفاء القائمة عند التمرير
document.getElementById('pdf-canvas-container').addEventListener('scroll', () => {
    selectionPopup.style.display = 'none';
});

// ✅ --- 10. دالة موحدة لجلب الإحداثيات (للمس والماوس) ---
function getEventPosition(e) {
    const rect = drawingCanvas.getBoundingClientRect();
    if (e.touches && e.touches.length > 0) {
        // حالة اللمس
        return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }
    // حالة الماوس
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

// ✅ --- 11. معالجات أحداث الرسم الجديدة (تدعم اللمس) ---
function startDrawing(e) {
    if (currentTool === 'select') return;
    isPainting = true;
    if (e.touches) e.preventDefault(); // منع الصفحة من التمرير
    const pos = getEventPosition(e);

    // تجهيز المسار حسب الأداة
    currentPath = {
        type: currentTool,
        color: (currentTool === 'conceal') ? '#2c3e50' : colorPicker.value,
        size: brushSizeInput.value,
        opacity: (currentTool === 'highlight') ? brushOpacityInput.value : (currentTool === 'conceal') ? 1.0 : 1.0,
    };

    if (currentTool === 'conceal') {
        currentPath.start = pos;
        currentPath.end = pos;
    } else {
        currentPath.points = [pos];
    }
}

function draw(e) {
    if (!isPainting || currentTool === 'select') return;
    if (e.touches) e.preventDefault();
    const pos = getEventPosition(e);

    if (currentTool === 'conceal') {
        // تحديث نقطة النهاية ورسم المستطيل مباشرة
        currentPath.end = pos;
        redrawDrawings(pageNum); // نرسم كل شيء من جديد
        // نرسم المستطيل الحالي
        drawingCtx.fillStyle = currentPath.color;
        drawingCtx.globalAlpha = 0.5; // شفافية خفيفة أثناء الرسم
        const width = pos.x - currentPath.start.x;
        const height = pos.y - currentPath.start.y;
        drawingCtx.fillRect(currentPath.start.x, currentPath.start.y, width, height);
        drawingCtx.globalAlpha = 1.0;

    } else {
        // رسم حر (pen, highlight, erase)
        currentPath.points.push(pos);
        // ... (يمكن إضافة رسم مباشر هنا لتجربة سلسة كما في الكود الأصلي) ...
        // للتبسيط، سنعتمد على redraw السريعة
        drawingCtx.beginPath();
        drawingCtx.strokeStyle = currentPath.color;
        drawingCtx.lineWidth = currentPath.size;
        drawingCtx.globalAlpha = currentPath.opacity;
        if (currentTool === 'erase') drawingCtx.globalCompositeOperation = 'destination-out';
        
        drawingCtx.moveTo(currentPath.points[0].x, currentPath.points[0].y);
        for (let i = 1; i < currentPath.points.length; i++) {
            drawingCtx.lineTo(currentPath.points[i].x, currentPath.points[i].y);
        }
        drawingCtx.stroke();
        drawingCtx.globalCompositeOperation = 'source-over';
    }
}

function stopDrawing() {
    if (!isPainting || currentTool === 'select') return;
    isPainting = false;
    
    if (!pageDrawings[pageNum]) {
        pageDrawings[pageNum] = [];
    }
    // أضف المسار المكتمل
    pageDrawings[pageNum].push(currentPath);
    
    saveDrawings(); // ✅ حفظ بعد كل رسمة
    redrawDrawings(pageNum); // إعادة رسم نهائية
}

// ربط الأحداث (ماوس ولمس)
drawingCanvas.addEventListener('mousedown', startDrawing);
drawingCanvas.addEventListener('mousemove', draw);
drawingCanvas.addEventListener('mouseup', stopDrawing);
drawingCanvas.addEventListener('mouseleave', stopDrawing);
drawingCanvas.addEventListener('touchstart', startDrawing, { passive: false });
drawingCanvas.addEventListener('touchmove', draw, { passive: false });
drawingCanvas.addEventListener('touchend', stopDrawing);
drawingCanvas.addEventListener('touchcancel', stopDrawing);


// ✅ --- 12. معالجات أحداث شريط الأدوات الجديد ---

// دالة مساعدة لضبط الأداة النشطة
function setActiveTool(toolName) {
    currentTool = toolName;
    
    toolButtons.forEach(btn => {
        btn.classList.toggle('active', btn.id === `${toolName}-btn`);
    });

    const isDrawingActive = (toolName !== 'select');
    textLayerDiv.classList.toggle('drawing-active', isDrawingActive);
    drawingCanvas.style.zIndex = isDrawingActive ? '10' : '-1';
    selectionPopup.style.display = 'none'; // إخفاء قائمة النص

    // ضبط إعدادات افتراضية للأدوات
    switch(toolName) {
        case 'select':
            drawingCanvas.style.cursor = 'default';
            break;
        case 'highlight':
            drawingCanvas.style.cursor = 'crosshair';
            colorPicker.value = '#FFFF00';
            brushOpacityInput.value = 0.4;
            break;
        case 'pen':
            drawingCanvas.style.cursor = 'crosshair';
            colorPicker.value = '#FF0000';
            brushOpacityInput.value = 1.0;
            break;
        case 'conceal':
            drawingCanvas.style.cursor = 'crosshair';
            break;
        case 'erase':
            drawingCanvas.style.cursor = 'crosshair';
            break;
    }
}

// ربط أزرار الأدوات
toolButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const toolName = btn.id.replace('-btn', ''); // 'select-btn' -> 'select'
        setActiveTool(toolName);
    });
});

// زر مسح الرسومات
clearDrawingsBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all drawings on this page?')) {
        pageDrawings[pageNum] = []; // مسح البيانات المحفوظة
        saveDrawings(); // ✅ حفظ التغيير
        redrawDrawings(pageNum); // مسح ما هو معروض على الشاشة
    }
});

// ✅ --- 13. منطق كشف مربع الإخفاء (Conceal) ---
drawingCanvas.addEventListener('click', (e) => {
    if (currentTool !== 'select') return; // الكشف يعمل فقط في وضع التحديد
    
    const pos = getEventPosition(e);
    const paths = pageDrawings[pageNum] || [];
    let changed = false;

    // نبحث من آخر رسمة (الأعلى) إلى الأقدم
    for (let i = paths.length - 1; i >= 0; i--) {
        const path = paths[i];
        if (path.type === 'conceal') {
            // التحقق مما إذا كانت النقرة داخل المستطيل
            const minX = Math.min(path.start.x, path.end.x);
            const maxX = Math.max(path.start.x, path.end.x);
            const minY = Math.min(path.start.y, path.end.y);
            const maxY = Math.max(path.start.y, path.end.y);

            if (pos.x >= minX && pos.x <= maxX && pos.y >= minY && pos.y <= maxY) {
                // وجدنا المربع! احذفه
                paths.splice(i, 1); // إزالة العنصر من المصفوفة
                changed = true;
                break; // نكشف طبقة واحدة فقط كل مرة
            }
        }
    }

    if (changed) {
        saveDrawings(); // ✅ حفظ الحذف
        redrawDrawings(pageNum); // إعادة الرسم لإظهار التغيير
    }
});


// ✅ --- 14. منطق صانع البطاقات التعليمية ---
createFlashcardBtn.addEventListener('click', () => {
    const text = selectionPopup.dataset.selectedText;
    if (!text) return;

    const definition = prompt(`Front: "${text}"\n\nEnter definition (Back):`);
    
    if (definition && definition.trim().length > 0) {
        if (!pageFlashcards[pageNum]) {
            pageFlashcards[pageNum] = [];
        }
        
        // حفظ البطاقة
        pageFlashcards[pageNum].push({
            front: text,
            back: definition
        });
        
        saveFlashcards(); // ✅ حفظ البطاقة
        alert('Flashcard saved!');
    }
    
    selectionPopup.style.display = 'none';
});


// --- 15. وظائف الاتصال بالـ AI (بدون تغيير) ---
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

// --- 16. بدء تحميل الـ PDF ---
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js`;

pdfjsLib.getDocument(finalPdfUrl).promise.then(doc => {
    pdfDoc = doc;
    pageCountSpan.textContent = pdfDoc.numPages;
    
    // ✅ تحميل البيانات المحفوظة
    pageDrawings = loadDrawings();
    pageFlashcards = loadFlashcards();
    
    // عرض الصفحة الأولى
    renderPage(pageNum);
    
    // ✅ ضبط الأداة الافتراضية
    setActiveTool('select');
    
    // ✅ إعادة عرض الصفحة عند تغيير حجم النافذة
    window.addEventListener('resize', () => {
        queueRenderPage(pageNum);
    });

}).catch(err => {
    console.error('Error loading PDF:', err);
    alert('Failed to load the lesson PDF.');
});
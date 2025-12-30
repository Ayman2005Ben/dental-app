// =============================================================================
//  SMART DENTAL VIEWER - ULTIMATE CONTROLLER (FULL PRODUCTION VERSION)
//  Developer: Aymen (Dontist Owner)
//  Version: 2.0 (Fixed Scroll, Selection, Multi-Choice, & Full Exports)
// =============================================================================

// --- ثوابت وإعدادات ---
const API_BASE_URL = "https://dental-app-he1p.onrender.com";
// تأكد من أن نسخة الـ worker متطابقة مع نسخة المكتبة في الـ HTML
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// --- إدارة الحالة (Global State Store) ---
const STATE = {
    // PDF Core
    pdfDoc: null,
    fileHash: null,
    scale: 1.2, // مقياس التكبير الافتراضي
    currentPage: 1,
    pageCount: 0,

    // أدوات الرسم والتفاعل
    tool: 'cursor',   // القيم المتاحة: 'cursor', 'text', 'pen', 'highlighter', 'eraser'
    isDrawing: false,
    color: '#ff0000', // اللون الافتراضي
    drawings: [],     // تخزين مسارات الرسم {page, tool, color, points[]}
    textAnnotations: [], // تخزين النصوص المضافة يدوياً {page, x, y, text}

    // المحتوى التعليمي (AI Generated)
    quizData: [],
    currentQuizIndex: 0,
    selectedQuizOptions: [], // مصفوفة لتخزين خيارات الطالب (للمتعدد)

    flashcardsData: [],
    currentFlashcardIndex: 0,
    isFlashcardFlipped: false,

    mindMapData: null, // نص الماركداون للمايند ماب

    // الملاحظات الذكية (Smart Pins)
    pins: [],
    activePinId: null,
    selection: { text: '', rect: null, page: null },

    // بيانات الجلسة (للحفظ والاسترجاع)
    sessionData: {
        quizzes: [],
        flashcards: [],
        mindMapData: null
    }
};

// =============================================================================
//  SECTION 1: CORE API & UTILITIES
// =============================================================================

/**
 * دالة مركزية للاتصال بالـ API مع التحقق من التوكن
 */
async function callApi(endpoint, body = {}) {
    const token = localStorage.getItem('userToken');

    if (!token) {
        alert("تنبيه: أنت غير مسجل دخول. يرجى تسجيل الدخول للمتابعة.");
        // يمكن إضافة منطق لإعادة التوجيه لصفحة الدخول هنا
        return null;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        if (res.status === 401) {
            alert("انتهت صلاحية الجلسة. يرجى تسجيل الدخول مجدداً.");
            localStorage.removeItem('userToken');
            return null;
        }

        if (!res.ok) {
            throw new Error(`API Error: ${res.statusText}`);
        }

        return await res.json();

    } catch (error) {
        console.error(`Error calling ${endpoint}:`, error);
        alert("حدث خطأ في الاتصال بالخادم. يرجى المحاولة لاحقاً.");
        throw error;
    }
}

/**
 * استخراج النص بذكاء (إما الصفحة الحالية أو عينة من الملف)
 */
async function getSmartText(scopeInputName) {
    if (!STATE.pdfDoc) return "";

    // التحقق من خيار المستخدم (صفحة واحدة أم الملف كامل)
    const scopeEl = document.querySelector(`input[name="${scopeInputName}"]:checked`);
    const scope = scopeEl ? scopeEl.value : 'page';

    let extractedText = "";

    try {
        if (scope === 'page') {
            // استخراج نص الصفحة الحالية فقط
            const page = await STATE.pdfDoc.getPage(STATE.currentPage);
            const content = await page.getTextContent();
            extractedText = content.items.map(i => i.str).join(' ');
        } else {
            // استخراج عينة من الملف (أول 15 صفحة لتجنب الضغط على السيرفر)
            const maxPages = Math.min(STATE.pdfDoc.numPages, 15);
            for (let i = 1; i <= maxPages; i++) {
                const page = await STATE.pdfDoc.getPage(i);
                const content = await page.getTextContent();
                extractedText += content.items.map(item => item.str).join(' ') + "\n---\n";
            }
        }
    } catch (e) {
        console.error("Error extracting text:", e);
        alert("فشل في قراءة نص الملف.");
    }

    return extractedText;
}

// =============================================================================
//  SECTION 2: PDF RENDERING & LAYERING SYSTEM (THE FIX)
// =============================================================================

// مستمع لزر رفع الملف
const fileInput = document.getElementById('file-input');
if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // 1. قراءة الملف وحساب الهاش (للحفظ السحابي)
        const arrayBuffer = await file.arrayBuffer();
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(arrayBuffer);
        STATE.fileHash = spark.end();

        // 2. تحميل المستند
        const loadingTask = pdfjsLib.getDocument(arrayBuffer);
        STATE.pdfDoc = await loadingTask.promise;
        STATE.pageCount = STATE.pdfDoc.numPages;

        // 3. تنظيف الحاوية
        const container = document.getElementById('pdf-wrapper');
        container.innerHTML = '';

        // إخفاء رسالة الترحيب
        const welcomeMsg = container.querySelector('div');
        if (welcomeMsg) welcomeMsg.style.display = 'none';

        // 4. حلقة تكرار لعرض الصفحات بالتسلسل (Scroll Logic Fix)
        // استخدام await داخل الحلقة يضمن ترتيب الصفحات الصحيح في الـ DOM
        for (let i = 1; i <= STATE.pageCount; i++) {
            await renderPage(i, container);
        }

        // 5. تفعيل مراقب التمرير لمعرفة الصفحة الحالية
        setupPageObserver();

        // 6. استرجاع البيانات المحفوظة سابقاً
        loadSavedProgress();
    });
}

/**
 * رسم صفحة واحدة مع إنشاء الطبقات (Canvas, Text, Draw, Input)
 */
async function renderPage(pageNum, container) {
    const page = await STATE.pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: STATE.scale });

    // إنشاء الحاوية الرئيسية للصفحة
    const wrapper = document.createElement('div');
    wrapper.className = 'page-container';
    wrapper.id = `page-${pageNum}`;
    wrapper.style.width = `${viewport.width}px`;
    wrapper.style.height = `${viewport.height}px`;
    wrapper.style.position = 'relative';
    wrapper.style.marginBottom = '20px'; // مسافة بين الصفحات

    // الطبقة 1: Canvas (صورة الـ PDF)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    canvas.style.display = 'block';
    canvas.style.position = 'absolute';
    canvas.style.inset = '0';
    canvas.style.zIndex = '1';

    // الطبقة 2: Text Layer (لتحديد النص)
    const textLayer = document.createElement('div');
    textLayer.className = 'textLayer';
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;
    textLayer.style.zIndex = '2'; // فوق الكانفس مباشرة

    // الطبقة 3: Drawing Layer (للرسم)
    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'drawLayer';
    drawCanvas.id = `draw-${pageNum}`;
    drawCanvas.width = viewport.width;
    drawCanvas.height = viewport.height;
    drawCanvas.style.zIndex = '10'; // طبقة عالية للرسم

    // الطبقة 4: Text Input Layer (للملاحظات المكتوبة)
    const textInputLayer = document.createElement('div');
    textInputLayer.className = 'textInputLayer';
    textInputLayer.id = `text-layer-${pageNum}`;
    textInputLayer.style.width = `${viewport.width}px`;
    textInputLayer.style.height = `${viewport.height}px`;
    textInputLayer.style.zIndex = '15';

    // إضافة مستمع للنقر لإضافة نص
    textInputLayer.onclick = (e) => handleTextToolClick(e, pageNum, textInputLayer);

    // تجميع العناصر
    wrapper.appendChild(canvas);
    wrapper.appendChild(textLayer);
    wrapper.appendChild(drawCanvas);
    wrapper.appendChild(textInputLayer);
    container.appendChild(wrapper);

    // Render PDF to Canvas
    await page.render({ canvasContext: ctx, viewport }).promise;

    // Render Text Layer
    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayer,
        viewport: viewport,
        textDivs: []
    });

    // إعداد منطق الرسم لهذه الصفحة
    setupDrawingLogic(drawCanvas, pageNum);
}

/**
 * مراقبة الصفحة التي يراها المستخدم حالياً
 */
function setupPageObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // استخراج رقم الصفحة من الـ ID (مثل page-5)
                STATE.currentPage = parseInt(entry.target.id.split('-')[1]);
                console.log("Current Page:", STATE.currentPage);
            }
        });
    }, { threshold: 0.3 }); // عندما يظهر 30% من الصفحة

    document.querySelectorAll('.page-container').forEach(p => observer.observe(p));
}

// =============================================================================
//  SECTION 3: TOOLS & INTERACTION (SELECTION FIX)
// =============================================================================

/**
 * دالة تغيير الأداة والتحكم في تفاعل الطبقات
 */
window.setTool = function (toolName) {
    STATE.tool = toolName;

    // تحديث واجهة الأزرار
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${toolName}`);
    if (activeBtn) activeBtn.classList.add('active');

    // **الحل الجذري لمشكلة التحديد**:
    // التحكم في pointer-events لطبقات الرسم بناءً على الأداة
    const isDrawingTool = ['pen', 'highlighter', 'eraser'].includes(toolName);
    const isTextTool = (toolName === 'text');

    // طبقات الرسم
    document.querySelectorAll('.drawLayer').forEach(el => {
        if (isDrawingTool) {
            el.style.pointerEvents = 'auto'; // تفعيل الرسم
            el.classList.add('active');
        } else {
            el.style.pointerEvents = 'none'; // تعطيل الرسم للسماح بتحديد النص
            el.classList.remove('active');
        }
    });

    // طبقات النص
    document.querySelectorAll('.textInputLayer').forEach(el => {
        if (isTextTool) {
            el.style.pointerEvents = 'auto';
            el.classList.add('active');
            el.style.cursor = 'text';
        } else {
            el.style.pointerEvents = 'none';
            el.classList.remove('active');
        }
    });
};

/**
 * منطق الرسم (Pen, Highlighter, Eraser)
 */
function setupDrawingLogic(canvas, pageNum) {
    const ctx = canvas.getContext('2d');
    let isDrawingLocal = false;
    let lastX = 0;
    let lastY = 0;

    // بدء الرسم
    canvas.addEventListener('mousedown', (e) => {
        if (!['pen', 'highlighter', 'eraser'].includes(STATE.tool)) return;

        isDrawingLocal = true;
        STATE.isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];

        // بدء مسار جديد في الذاكرة
        const color = document.getElementById('color-picker').value;
        STATE.drawings.push({
            page: pageNum,
            tool: STATE.tool,
            color: color,
            points: [{ x: lastX, y: lastY }]
        });
    });

    // حركة الرسم
    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawingLocal) return;

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (STATE.tool === 'pen') {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = document.getElementById('color-picker').value;
            ctx.lineWidth = 2;
            ctx.globalAlpha = 1.0;
        } else if (STATE.tool === 'highlighter') {
            ctx.globalCompositeOperation = 'multiply'; // تأثير الهايلايتر الشفاف
            ctx.strokeStyle = '#ffff00'; // أصفر
            ctx.lineWidth = 15;
            ctx.globalAlpha = 0.4;
        } else if (STATE.tool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out'; // مسح
            ctx.lineWidth = 20;
            ctx.globalAlpha = 1.0;
        }

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        // حفظ النقطة
        if (STATE.drawings.length > 0) {
            STATE.drawings[STATE.drawings.length - 1].points.push({ x: e.offsetX, y: e.offsetY });
        }

        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    // إنهاء الرسم
    canvas.addEventListener('mouseup', () => {
        isDrawingLocal = false;
        STATE.isDrawing = false;
    });

    canvas.addEventListener('mouseout', () => {
        isDrawingLocal = false;
        STATE.isDrawing = false;
    });
}

/**
 * منطق إضافة النصوص (Text Notes)
 */
function handleTextToolClick(e, pageNum, layer) {
    if (STATE.tool !== 'text') return;

    const x = e.offsetX;
    const y = e.offsetY;

    // إنشاء Input مؤقت
    const input = document.createElement('input');
    input.type = 'text';
    input.style.position = 'absolute';
    input.style.left = x + 'px';
    input.style.top = y + 'px';
    input.style.border = '1px solid #2563eb';
    input.style.background = 'white';
    input.style.padding = '4px';
    input.style.zIndex = '1000';
    input.placeholder = "اكتب ملاحظتك...";

    // الحفظ عند الضغط على Enter
    input.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
            if (input.value.trim() !== "") {
                saveTextAnnotation(pageNum, x, y, input.value, layer);
            }
            input.remove();
        }
    });

    // الحفظ عند فقدان التركيز (Blur)
    input.addEventListener('blur', () => {
        if (input.value.trim() !== "") {
            saveTextAnnotation(pageNum, x, y, input.value, layer);
        }
        input.remove();
    });

    layer.appendChild(input);
    input.focus();
}

function saveTextAnnotation(page, x, y, text, layer) {
    const note = { id: Date.now(), page, x, y, text };
    STATE.textAnnotations.push(note);
    renderTextAnnotation(note, layer);
}

function renderTextAnnotation(note, layer) {
    if (!layer) {
        layer = document.getElementById(`text-layer-${note.page}`);
    }
    if (!layer) return;

    const el = document.createElement('div');
    el.className = 'added-text';
    el.textContent = note.text;
    el.style.left = note.x + 'px';
    el.style.top = note.y + 'px';

    // إضافة إمكانية الحذف (Right Click)
    el.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (confirm("حذف هذه الملاحظة؟")) {
            STATE.textAnnotations = STATE.textAnnotations.filter(n => n.id !== note.id);
            el.remove();
        }
    });

    layer.appendChild(el);
}

/**
 * إعادة رسم كل شيء (عند تحميل الجلسة)
 */
function redrawAll() {
    // 1. إعادة الرسومات
    STATE.drawings.forEach(d => {
        const cvs = document.getElementById(`draw-${d.page}`);
        if (!cvs) return;
        const ctx = cvs.getContext('2d');

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (d.tool === 'pen') {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = d.color;
            ctx.lineWidth = 2;
            ctx.globalAlpha = 1.0;
        } else if (d.tool === 'highlighter') {
            ctx.globalCompositeOperation = 'multiply';
            ctx.strokeStyle = '#ffff00';
            ctx.lineWidth = 15;
            ctx.globalAlpha = 0.4;
        } else if (d.tool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = 20;
            ctx.globalAlpha = 1.0;
        }

        ctx.beginPath();
        if (d.points.length > 0) {
            ctx.moveTo(d.points[0].x, d.points[0].y);
            for (let i = 1; i < d.points.length; i++) {
                ctx.lineTo(d.points[i].x, d.points[i].y);
            }
        }
        ctx.stroke();
    });

    // 2. إعادة النصوص
    STATE.textAnnotations.forEach(note => renderTextAnnotation(note));
}

// =============================================================================
//  SECTION 4: ADVANCED AI QUIZ (MULTI-CHOICE & PDF EXPORT)
// =============================================================================

document.getElementById('generate-quiz-btn').addEventListener('click', async () => {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '<div style="text-align:center; padding:20px;"><i class="fas fa-spinner fa-spin"></i> جاري تحليل المحتوى وتوليد الأسئلة...</div>';

    try {
        const text = await getSmartText('quiz-scope');
        if (!text) {
            container.innerHTML = "لم يتم العثور على نص كافٍ.";
            return;
        }

        const res = await callApi('ai/generate-quiz-text', { text, count: 5 });

        if (res && res.questions) {
            STATE.quizData = res.questions;
            STATE.sessionData.quizzes = res.questions;
            STATE.currentQuizIndex = 0;

            // إظهار زر التحميل
            document.getElementById('download-quiz-pdf').style.display = 'inline-flex';

            renderQuizCard();
        } else {
            container.innerHTML = "فشل في توليد الأسئلة.";
        }
    } catch (e) {
        container.innerHTML = "حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.";
    }
});

function renderQuizCard() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = ''; // تفريغ الحاوية

    if (!STATE.quizData || STATE.quizData.length === 0) return;

    const q = STATE.quizData[STATE.currentQuizIndex];
    const total = STATE.quizData.length;

    // إعادة تعيين الخيارات المختارة للسؤال الجديد
    STATE.selectedQuizOptions = [];

    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.innerHTML = `
        <div style="display:flex; justify-content:space-between; color:#888; margin-bottom:10px; font-size:0.9em;">
            <span>سؤال ${STATE.currentQuizIndex + 1} من ${total}</span>
            <span>صعوبة: متوسط</span>
        </div>
        <div class="quiz-question" style="font-weight:bold; margin-bottom:15px; font-size:1.1em;">${q.question}</div>
        <div class="options-area"></div>
        <div style="margin-top:20px; display:flex; gap:10px;">
            <button id="quiz-check-btn" class="action-btn btn-blue" style="flex:1;">تحقق من الإجابة</button>
            <button id="quiz-next-btn" class="action-btn btn-outline" style="flex:1; display:none;">السؤال التالي <i class="fas fa-arrow-right"></i></button>
        </div>
    `;

    const optsArea = card.querySelector('.options-area');
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;

        // منطق الاختيار المتعدد (Toggle)
        btn.onclick = () => {
            if (btn.disabled) return; // منع التغيير بعد التحقق

            if (STATE.selectedQuizOptions.includes(idx)) {
                // إلغاء التحديد
                STATE.selectedQuizOptions = STATE.selectedQuizOptions.filter(i => i !== idx);
                btn.classList.remove('selected');
            } else {
                // تحديد
                STATE.selectedQuizOptions.push(idx);
                btn.classList.add('selected');
            }
        };
        optsArea.appendChild(btn);
    });

    container.appendChild(card);

    // ربط زر التحقق
    document.getElementById('quiz-check-btn').onclick = () => checkQuizAnswer(q);

    // ربط زر التالي
    document.getElementById('quiz-next-btn').onclick = () => {
        STATE.currentQuizIndex++;
        if (STATE.currentQuizIndex < total) {
            renderQuizCard();
        } else {
            container.innerHTML = `
                <div style="text-align:center; padding:30px;">
                    <i class="fas fa-trophy fa-3x" style="color:#fbbf24; margin-bottom:15px;"></i>
                    <h3>أحسنت! أكملت الاختبار.</h3>
                    <button onclick="renderQuizCard(STATE.currentQuizIndex=0)" class="action-btn btn-blue">إعادة الاختبار</button>
                </div>
            `;
        }
    };
}

function checkQuizAnswer(qData) {
    if (STATE.selectedQuizOptions.length === 0) {
        alert("يرجى اختيار إجابة واحدة على الأقل.");
        return;
    }

    const opts = document.querySelectorAll('.option-btn');
    const correctIndices = qData.correctOptionIndexes; // مصفوفة الإجابات الصحيحة

    opts.forEach((btn, idx) => {
        btn.disabled = true; // قفل الأزرار

        if (correctIndices.includes(idx)) {
            // هذه إجابة صحيحة
            btn.classList.add('correct');
            // إضافة أيقونة صح
            btn.innerHTML += ' <i class="fas fa-check" style="float:right;"></i>';
        } else if (STATE.selectedQuizOptions.includes(idx)) {
            // اختارها الطالب وهي خاطئة
            btn.classList.add('wrong');
            btn.innerHTML += ' <i class="fas fa-times" style="float:right;"></i>';
        }
    });

    document.getElementById('quiz-check-btn').style.display = 'none';
    document.getElementById('quiz-next-btn').style.display = 'block';
}

// --- تصدير الكويز إلى PDF ---
document.getElementById('download-quiz-pdf').onclick = () => {
    if (!STATE.quizData.length) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(37, 99, 235); // أزرق
    doc.text("Dontist AI - Generated Quiz", 105, 20, null, null, "center");

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 28, null, null, "center");

    let y = 40;

    STATE.quizData.forEach((q, i) => {
        // فحص حدود الصفحة
        if (y > 270) {
            doc.addPage();
            y = 20;
        }

        // السؤال
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0);

        const questionLines = doc.splitTextToSize(`Q${i + 1}: ${q.question}`, 180);
        doc.text(questionLines, 15, y);
        y += (questionLines.length * 6) + 4;

        // الخيارات
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        q.options.forEach((opt, oi) => {
            const isCorrect = q.correctOptionIndexes.includes(oi);
            const prefix = isCorrect ? "[Correct] " : "- ";
            if (isCorrect) doc.setTextColor(0, 150, 0); // أخضر للإجابة الصحيحة
            else doc.setTextColor(80);

            const optLines = doc.splitTextToSize(`${prefix}${opt}`, 170);
            doc.text(optLines, 20, y);
            y += (optLines.length * 5) + 2;
        });

        y += 8; // مسافة بين الأسئلة
    });

    doc.save("Dentist_Quiz.pdf");
};

// =============================================================================
//  SECTION 5: FLASHCARDS (3D FLIP & PDF EXPORT)
// =============================================================================

document.getElementById('generate-flashcards-btn').onclick = async () => {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '<div style="text-align:center; padding:20px;"><i class="fas fa-spinner fa-spin"></i> جاري إنشاء البطاقات...</div>';

    try {
        const text = await getSmartText('cards-scope');
        const res = await callApi('ai/generate-flashcards-text', { text, count: 8 });

        if (res && res.flashcards) {
            STATE.flashcardsData = res.flashcards;
            STATE.sessionData.flashcards = res.flashcards;
            STATE.currentFlashcardIndex = 0;

            document.getElementById('download-cards-pdf').style.display = 'inline-flex';
            renderFlashcard();
        }
    } catch (e) {
        container.innerHTML = "خطأ في التوليد.";
    }
};

function renderFlashcard() {
    const container = document.getElementById('flashcards-container');
    if (!STATE.flashcardsData.length) return;

    const card = STATE.flashcardsData[STATE.currentFlashcardIndex];

    container.innerHTML = `
        <div style="text-align:center; margin-bottom:10px; color:#64748b;">
            بطاقة ${STATE.currentFlashcardIndex + 1} / ${STATE.flashcardsData.length}
        </div>
        
        <div class="flashcard-container" style="perspective: 1000px; height: 200px; cursor: pointer;" onclick="flipCard(this)">
            <div class="flashcard-inner" style="position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s; transform-style: preserve-3d;">
                
                <div class="flashcard-face flashcard-front" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: white; border: 1px solid #ddd; border-radius: 10px; display: flex; align-items: center; justify-content: center; padding: 20px; flex-direction: column; border-top: 4px solid var(--primary);">
                    <div style="font-size: 0.8em; color: #999; margin-bottom: 10px;">سؤال</div>
                    <div style="font-weight: bold; font-size: 1.1em;">${card.front}</div>
                    <div style="margin-top: auto; font-size: 0.8em; color: #ccc;">انقر للقلب</div>
                </div>

                <div class="flashcard-face flashcard-back" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; padding: 20px; flex-direction: column;">
                    <div style="font-size: 0.8em; color: #166534; margin-bottom: 10px;">إجابة</div>
                    <div style="color: #15803d;">${card.back}</div>
                </div>

            </div>
        </div>

        <div style="display:flex; justify-content:space-between; margin-top:15px;">
            <button onclick="changeCard(-1)" class="action-btn btn-outline" style="width:40%;"><i class="fas fa-chevron-left"></i> السابق</button>
            <button onclick="changeCard(1)" class="action-btn btn-green" style="width:40%;">التالي <i class="fas fa-chevron-right"></i></button>
        </div>
    `;
}

window.flipCard = function (el) {
    const inner = el.querySelector('.flashcard-inner');
    if (inner.style.transform === 'rotateY(180deg)') {
        inner.style.transform = 'rotateY(0deg)';
    } else {
        inner.style.transform = 'rotateY(180deg)';
    }
};

window.changeCard = function (dir) {
    const newIndex = STATE.currentFlashcardIndex + dir;
    if (newIndex >= 0 && newIndex < STATE.flashcardsData.length) {
        STATE.currentFlashcardIndex = newIndex;
        renderFlashcard();
    }
};

// --- تصدير الفلاش كاردز PDF ---
document.getElementById('download-cards-pdf').onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Flashcards Review", 105, 20, null, null, "center");

    let y = 40;
    STATE.flashcardsData.forEach((c, i) => {
        if (y > 240) { doc.addPage(); y = 30; }

        // رسم مستطيل للبطاقة
        doc.setDrawColor(200);
        doc.setFillColor(250, 250, 250);
        doc.rect(15, y, 180, 35, 'FD');

        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Card ${i + 1}`, 20, y + 8);

        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.text(`Q: ${c.front}`, 20, y + 18);

        doc.setTextColor(0, 100, 0);
        doc.text(`A: ${c.back}`, 20, y + 28);

        y += 45;
    });

    doc.save("Flashcards.pdf");
};

// =============================================================================
//  SECTION 6: MIND MAP (MARKMAP & IMAGE EXPORT)
// =============================================================================

document.getElementById('generate-mindmap-btn').onclick = async () => {
    const svgEl = document.getElementById('mindmap-svg');
    const container = document.getElementById('mindmap-box');

    // تنظيف
    svgEl.innerHTML = '';
    const loader = document.createElement('div');
    loader.innerHTML = 'جاري رسم الخريطة...';
    loader.style.cssText = 'position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);';
    container.style.position = 'relative';
    container.appendChild(loader);

    try {
        const text = await getSmartText('quiz-scope');
        const res = await callApi('ai/generate-mindmap-text', { text });

        // قد يرجع الـ API النص في حقل data أو markdown
        const markdown = res.markdown || res.data || "# Error \n - No Data";
        STATE.sessionData.mindMapData = markdown;

        loader.remove();

        // تفعيل Markmap
        const { Transformer, Markmap } = window.markmap;
        const transformer = new Transformer();
        const { root } = transformer.transform(markdown);

        const mm = Markmap.create(svgEl, null, root);

        // ملائمة العرض
        mm.fit();

        document.getElementById('download-map-img').style.display = 'inline-flex';

    } catch (e) {
        loader.innerHTML = "فشل إنشاء الخريطة.";
    }
};

// --- تصدير المايند ماب كصورة ---
document.getElementById('download-map-img').onclick = () => {
    const svg = document.getElementById('mindmap-svg');
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);

    // إضافة Namespaces
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }

    const preamble = '<?xml version="1.0" standalone="no"?>\r\n';
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(preamble + source);

    const img = new Image();
    img.src = url;

    img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = svg.getBoundingClientRect().width * 2; // دقة عالية
        canvas.height = svg.getBoundingClientRect().height * 2;

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const a = document.createElement("a");
        a.download = "mindmap.png";
        a.href = canvas.toDataURL("image/png");
        a.click();
    };
};

// =============================================================================
//  SECTION 7: SMART PINS & SELECTION AI
// =============================================================================

// مراقب التحديد (Selection Watcher)
document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    const toolbar = document.getElementById('selection-toolbar');

    // إخفاء الشريط إذا لم يكن هناك تحديد أو إذا لم نكن في وضع المؤشر
    if (sel.isCollapsed || STATE.tool !== 'cursor') {
        if (toolbar) toolbar.style.display = 'none';
        return;
    }

    // التأكد أن التحديد داخل الـ PDF
    if (!document.getElementById('viewer-container').contains(sel.anchorNode)) return;

    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    // حفظ النص المحدد
    STATE.selection.text = sel.toString();
    STATE.selection.rect = rect;
    STATE.selection.page = STATE.currentPage; // تخمين تقريبي للصفحة

    // إظهار الشريط العائم فوق النص
    toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
    toolbar.style.left = `${rect.left + (rect.width / 2) - 40}px`;
    toolbar.style.display = 'flex';
});

// وظيفة "اسأل الذكاء الاصطناعي"
window.askAiAboutSelection = async function () {
    // إخفاء الشريط
    document.getElementById('selection-toolbar').style.display = 'none';

    const userQ = prompt("ما هو سؤالك حول هذا النص؟");
    if (!userQ) return;

    // عرض Modal مؤقت للإجابة
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:white; padding:20px; box-shadow:0 10px 40px rgba(0,0,0,0.3); z-index:5000; border-radius:10px; max-width:400px; text-align:center;';
    modal.innerHTML = '<i class="fas fa-robot fa-spin"></i> جاري التفكير...';
    document.body.appendChild(modal);

    try {
        const res = await callApi('ai/ask-dentist', {
            text: STATE.selection.text,
            question: userQ
        });

        modal.remove();

        // إضافة Pin على المستند
        const answer = res.answer || "لم أتمكن من العثور على إجابة.";

        // حساب الإحداثيات بالنسبة للصفحة الحالية
        // ملاحظة: نحتاج لتحويل إحداثيات الشاشة إلى إحداثيات الحاوية
        const pageEl = document.getElementById(`page-${STATE.currentPage}`);
        if (pageEl) {
            const pageRect = pageEl.getBoundingClientRect();
            const relX = STATE.selection.rect.left - pageRect.left;
            const relY = STATE.selection.rect.top - pageRect.top;

            createPin(STATE.currentPage, relX, relY, userQ, answer);
        } else {
            alert("الإجابة: \n" + answer);
        }

    } catch (e) {
        modal.innerHTML = "حدث خطأ.";
        setTimeout(() => modal.remove(), 2000);
    }
};

function createPin(page, x, y, q, a) {
    const pin = { id: Date.now(), page, x, y, q, a };
    STATE.pins.push(pin);
    renderPin(pin);
}

function renderPin(pin) {
    const wrap = document.getElementById(`page-${pin.page}`);
    if (!wrap) return;

    const el = document.createElement('div');
    el.className = 'smart-pin';
    el.innerHTML = '<i class="fas fa-lightbulb"></i>';
    // تنسيق الـ Pin في CSS يجب أن يكون absolute
    el.style.position = 'absolute';
    el.style.left = pin.x + 'px';
    el.style.top = pin.y + 'px';
    el.style.width = '30px';
    el.style.height = '30px';
    el.style.background = '#f59e0b';
    el.style.borderRadius = '50% 50% 0 50%';
    el.style.cursor = 'pointer';
    el.style.zIndex = '100';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.style.color = 'white';
    el.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

    el.onclick = (e) => {
        e.stopPropagation();
        showPinDetails(pin, el);
    };

    wrap.appendChild(el);
}

function showPinDetails(pin, el) {
    // إزالة أي نافذة مفتوحة
    const existing = document.querySelector('.pin-popover');
    if (existing) existing.remove();

    const popover = document.createElement('div');
    popover.className = 'pin-popover';
    popover.style.position = 'absolute';
    popover.style.width = '300px';
    popover.style.background = 'white';
    popover.style.padding = '15px';
    popover.style.borderRadius = '8px';
    popover.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    popover.style.zIndex = '200';
    popover.style.top = (parseInt(el.style.top) + 35) + 'px';
    popover.style.left = el.style.left;

    popover.innerHTML = `
        <div style="font-weight:bold; color:#2563eb; margin-bottom:5px;">سؤال: ${pin.q}</div>
        <div style="font-size:0.9em; line-height:1.4; color:#333;">${pin.a}</div>
        <button onclick="this.parentElement.remove()" style="margin-top:10px; font-size:0.8em; cursor:pointer;">إغلاق</button>
        <button onclick="deletePin(${pin.id})" style="margin-top:10px; color:red; float:right; background:none; border:none; cursor:pointer;">حذف</button>
    `;

    el.parentElement.appendChild(popover);
}

window.deletePin = function (id) {
    STATE.pins = STATE.pins.filter(p => p.id !== id);
    // إعادة رسم الصفحة الحالية أو إزالة العنصر من الـ DOM
    const el = document.querySelector('.pin-popover').parentElement.querySelector('.smart-pin');
    // هذه طريقة مبسطة، الأفضل إعادة رسم جميع الـ Pins
    document.querySelectorAll('.smart-pin').forEach(p => p.remove());
    document.querySelector('.pin-popover').remove();
    STATE.pins.forEach(renderPin);
};

// =============================================================================
//  SECTION 8: SAVE & LOAD PROGRESS (CLOUD SYNC)
// =============================================================================

document.getElementById('save-progress-btn').onclick = async () => {
    if (!STATE.fileHash) {
        alert("لا يوجد ملف مفتوح لحفظ تقدمه.");
        return;
    }

    const btn = document.getElementById('save-progress-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> حفظ...';
    btn.disabled = true;

    try {
        const payload = {
            drawings: STATE.drawings,
            textAnnotations: STATE.textAnnotations,
            pins: STATE.pins,
            quizzes: STATE.sessionData.quizzes,
            flashcards: STATE.sessionData.flashcards,
            mindMapData: STATE.sessionData.mindMapData
        };

        const res = await callApi('progress/save', {
            lessonId: STATE.fileHash,
            progressData: payload
        });

        if (res && res.success) {
            btn.innerHTML = '<i class="fas fa-check"></i> تم الحفظ!';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        }
    } catch (e) {
        btn.innerHTML = 'خطأ';
        setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; }, 2000);
    }
};

async function loadSavedProgress() {
    if (!STATE.fileHash) return;

    try {
        const token = localStorage.getItem('userToken');
        if (!token) return;

        const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const json = await res.json();

        if (json.success && json.data) {
            const data = json.data.progressData || json.data;

            // استعادة الرسومات
            STATE.drawings = data.drawings || [];
            STATE.textAnnotations = data.textAnnotations || [];
            redrawAll();

            // استعادة الـ Pins
            STATE.pins = data.pins || [];
            STATE.pins.forEach(renderPin);

            // استعادة بيانات الـ AI
            if (data.quizzes?.length) {
                STATE.sessionData.quizzes = data.quizzes;
                STATE.quizData = data.quizzes;
                document.getElementById('restore-quiz-btn').style.display = 'block';
            }
            if (data.flashcards?.length) {
                STATE.sessionData.flashcards = data.flashcards;
                STATE.flashcardsData = data.flashcards;
                document.getElementById('restore-cards-btn').style.display = 'block';
            }
            if (data.mindMapData) {
                STATE.sessionData.mindMapData = data.mindMapData;
                document.getElementById('restore-map-btn').style.display = 'block';
            }
        }
    } catch (e) {
        console.log("No previous session found, starting fresh.");
    }
}

// أزرار الاستعادة (Restore Buttons Logic)
// يتم تفعيل هذه الأزرار في الـ HTML عند العثور على بيانات
document.getElementById('restore-quiz-btn').onclick = () => {
    STATE.currentQuizIndex = 0;
    renderQuizCard();
    document.getElementById('restore-quiz-btn').style.display = 'none';
};

document.getElementById('restore-cards-btn').onclick = () => {
    STATE.currentFlashcardIndex = 0;
    renderFlashcard();
    document.getElementById('restore-cards-btn').style.display = 'none';
};

document.getElementById('restore-map-btn').onclick = () => {
    const svgEl = document.getElementById('mindmap-svg');
    const { Transformer, Markmap } = window.markmap;
    const { root } = new Transformer().transform(STATE.sessionData.mindMapData);
    Markmap.create(svgEl, null, root);
    document.getElementById('restore-map-btn').style.display = 'none';
};

// =============================================================================
//  END OF CONTROLLER
// =============================================================================
// =============================================================================
//  ملف: pdf-viewer.js
//  الإصدار: النسخة الكاملة (Interactive Quiz + Integrated MindMap + Advanced Drawing)
// =============================================================================

// -----------------------------------------------------------------------------
//  1. تهيئة المتغيرات وعناصر الواجهة (Initialization)
// -----------------------------------------------------------------------------

// كائن يحتوي على جميع عناصر DOM لسهولة الوصول إليها
const DOM = {
    // الحاويات الرئيسية
    fileInput: document.getElementById('file-input'),
    startContainer: document.getElementById('start-container'),
    mainLayout: document.getElementById('main-layout'),

    // منطقة عرض PDF والرسم
    viewerSection: document.getElementById('viewer-section'),
    container: document.getElementById('pdf-canvas-container'),
    layersWrapper: document.getElementById('pdf-layers-wrapper'),
    pdfCanvas: document.getElementById('pdf-canvas'),
    drawCanvas: document.getElementById('drawing-canvas'),
    textLayer: document.getElementById('text-layer'),

    // أزرار التحكم بالصفحات
    pageNum: document.getElementById('page-num'),
    pageCount: document.getElementById('page-count'),
    prevPageBtn: document.getElementById('prev-page'),
    nextPageBtn: document.getElementById('next-page'),
    saveCloudBtn: document.getElementById('save-cloud-btn'),

    // أدوات الرسم
    btnSelect: document.getElementById('select-btn'),
    btnPen: document.getElementById('pen-btn'),
    btnErase: document.getElementById('erase-btn'),
    btnClear: document.getElementById('clear-drawings-btn'),
    colorPicker: document.getElementById('color-picker'),

    // منطقة الذكاء الاصطناعي والشريط الجانبي
    aiResults: document.getElementById('ai-results-area'),
    flashcardsContainer: document.getElementById('flashcards-container'),
    btnQuiz: document.getElementById('btn-quiz'),
    btnFlashcards: document.getElementById('btn-flashcards'),
    btnMindmap: document.getElementById('btn-mindmap'),

    // القوائم المنبثقة والنوافذ
    selectionPopup: document.getElementById('selection-popup'),
    btnAskAi: document.getElementById('ask-ai-btn'),
    btnTranslate: document.getElementById('translate-btn'),
    btnCreateNote: document.getElementById('create-flashcard-btn'),
    explainPopup: document.getElementById('ai-explain-popup'),
    explainContent: document.getElementById('ai-explain-content'),
    backdrop: document.getElementById('modal-backdrop')
};

// سياقات الرسم (Contexts)
const ctx = DOM.pdfCanvas.getContext('2d');
const drawCtx = DOM.drawCanvas.getContext('2d');

// متغيرات الحالة العامة للتطبيق (State Management)
const STATE = {
    pdfDoc: null,           // كائن ملف PDF
    pageNum: 1,             // الصفحة الحالية
    scale: 1.5,             // مستوى التكبير
    renderTask: null,       // لتتبع عملية الرسم ومنع التداخل
    currentFileId: null,    // معرف الملف الحالي للحفظ السحابي

    // حالة أدوات الرسم
    tool: 'select',         // الأداة الحالية: 'select', 'pen', 'erase'
    isDrawing: false,       // هل المستخدم يرسم حالياً؟
    drawings: JSON.parse(localStorage.getItem('pdfDrawings')) || {}, // تخزين الرسومات { pageNum: [paths] }
    currentPath: [],        // مسار الرسم الحالي
    penColor: '#FFFF00',    // لون القلم الافتراضي (أصفر)
    penSize: 15,            // حجم القلم (للهايلايت)

    // بيانات الملاحظات والكويز
    flashcards: JSON.parse(localStorage.getItem('pdfNotes')) || {},

    // حالة الكويز التفاعلي
    quizData: [],           // مصفوفة الأسئلة
    quizIndex: 0,           // رقم السؤال الحالي
    quizScore: 0            // النتيجة الحالية
};

// إعدادات الاتصال بالسيرفر
const USER_TOKEN = localStorage.getItem('userToken');
const API_BASE = '/api/progress';

// إعداد مكتبة PDF.js Worker (ضروري جداً للأداء)
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';


// -----------------------------------------------------------------------------
//  2. منطق تحميل الملف (File Loading Logic)
// -----------------------------------------------------------------------------

// الاستماع لحدث اختيار ملف جديد
DOM.fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
        // إنشاء معرف فريد للملف بناءً على اسمه وحجمه
        STATE.currentFileId = `local_${file.name.replace(/\s/g, '_')}_${file.size}`;

        // إخفاء شاشة البداية وإظهار الواجهة الرئيسية
        DOM.startContainer.style.display = 'none';
        DOM.mainLayout.style.display = 'flex';

        // إنشاء رابط مؤقت للملف
        const fileURL = URL.createObjectURL(file);
        loadPdf(fileURL);
    } else {
        alert('Please select a valid PDF file.');
    }
});

// دالة تحميل الـ PDF الأساسية
async function loadPdf(url) {
    try {
        // بدء تحميل المستند
        const loadingTask = pdfjsLib.getDocument(url);
        STATE.pdfDoc = await loadingTask.promise;

        // تحديث عدد الصفحات الكلي
        DOM.pageCount.textContent = STATE.pdfDoc.numPages;

        // محاولة تحميل البيانات المحفوظة سابقاً من السيرفر
        await loadProgressFromCloud(STATE.currentFileId);

        // عرض الصفحة الأولى
        STATE.pageNum = 1;
        renderPage();
    } catch (err) {
        console.error('PDF Load Error:', err);
        alert('Error loading PDF. Please check the console for details.');
    }
}


// -----------------------------------------------------------------------------
//  3. محرك عرض الصفحة (Rendering Engine)
// -----------------------------------------------------------------------------

async function renderPage() {
    if (!STATE.pdfDoc) return;

    // 1. إدارة عمليات الرسم المتداخلة (Debouncing)
    // إذا كانت هناك عملية رسم جارية، نقوم بإلغائها فوراً لمنع تعليق المتصفح
    if (STATE.renderTask) {
        await STATE.renderTask.cancel();
    }

    // 2. تجهيز الصفحة الحالية
    const page = await STATE.pdfDoc.getPage(STATE.pageNum);
    const viewport = page.getViewport({ scale: STATE.scale });

    // 3. ضبط أبعاد الكانفاس لتتطابق تماماً مع أبعاد الصفحة
    DOM.pdfCanvas.width = viewport.width;
    DOM.pdfCanvas.height = viewport.height;
    DOM.drawCanvas.width = viewport.width;
    DOM.drawCanvas.height = viewport.height;

    // ضبط أبعاد طبقة النصوص (Text Layer)
    DOM.textLayer.style.width = `${viewport.width}px`;
    DOM.textLayer.style.height = `${viewport.height}px`;

    // تحديث رقم الصفحة في الواجهة
    DOM.pageNum.textContent = STATE.pageNum;

    // 4. رسم محتوى PDF
    const renderContext = {
        canvasContext: ctx,
        viewport: viewport
    };

    STATE.renderTask = page.render(renderContext);

    try {
        await STATE.renderTask.promise;

        // 5. رسم طبقة النصوص (Text Layer) لتمكين التحديد
        const textContent = await page.getTextContent();
        DOM.textLayer.innerHTML = ''; // تنظيف الطبقة القديمة
        pdfjsLib.renderTextLayer({
            textContent: textContent,
            container: DOM.textLayer,
            viewport: viewport,
            textDivs: []
        });

        // 6. استعادة الرسومات والملاحظات الخاصة بهذه الصفحة
        redrawDrawings();
        updateSidebarNotes();

    } catch (error) {
        // تجاهل أخطاء الإلغاء (طبيعية عند التقليب السريع للصفحات)
        if (error.name !== 'RenderingCancelledException') {
            console.error('Render Error:', error);
        }
    }
}

// أزرار التنقل بين الصفحات
DOM.prevPageBtn.addEventListener('click', () => {
    if (STATE.pageNum <= 1) return;
    STATE.pageNum--;
    renderPage();
});

DOM.nextPageBtn.addEventListener('click', () => {
    if (!STATE.pdfDoc || STATE.pageNum >= STATE.pdfDoc.numPages) return;
    STATE.pageNum++;
    renderPage();
});


// -----------------------------------------------------------------------------
//  4. نظام الرسم المتقدم (Advanced Drawing System)
// -----------------------------------------------------------------------------

// دالة لتغيير الأداة النشطة
function setTool(toolName) {
    STATE.tool = toolName;

    // تفعيل التفاعل مع كانفاس الرسم فقط عند اختيار القلم أو الممحاة
    const isDrawingTool = (toolName === 'pen' || toolName === 'erase');
    DOM.drawCanvas.style.pointerEvents = isDrawingTool ? 'auto' : 'none';

    // تغيير شكل المؤشر
    DOM.container.style.cursor = isDrawingTool ? 'crosshair' : 'default';

    // تحديث حالة الأزرار بصرياً (Active State)
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    if (toolName === 'select') DOM.btnSelect.classList.add('active');
    if (toolName === 'pen') DOM.btnPen.classList.add('active');
    if (toolName === 'erase') DOM.btnErase.classList.add('active');
}

// ربط الأزرار بالدالة
DOM.btnSelect.onclick = () => setTool('select');
DOM.btnPen.onclick = () => setTool('pen');
DOM.btnErase.onclick = () => setTool('erase');

// تغيير لون القلم
DOM.colorPicker.addEventListener('change', (e) => {
    STATE.penColor = e.target.value;
});

// مسح جميع الرسومات في الصفحة الحالية
DOM.btnClear.onclick = () => {
    if (confirm('Are you sure you want to clear all drawings on this page?')) {
        STATE.drawings[STATE.pageNum] = [];
        redrawDrawings();
        saveLocalData();
    }
};

// --- منطق الرسم (يدعم الماوس واللمس) ---

// دالة مساعدة للحصول على إحداثيات المؤشر بدقة
function getPointerPos(e) {
    const rect = DOM.drawCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
}

// بدء الرسم
function startDrawing(e) {
    if (STATE.tool === 'select') return;
    if (e.type === 'touchstart') e.preventDefault(); // منع التمرير عند الرسم باللمس

    STATE.isDrawing = true;
    const pos = getPointerPos(e);
    STATE.currentPath = [pos];

    drawCtx.beginPath();
    drawCtx.moveTo(pos.x, pos.y);

    // إعداد خصائص الفرشاة
    if (STATE.tool === 'pen') {
        drawCtx.globalCompositeOperation = 'source-over';
        drawCtx.strokeStyle = hexToRGBA(STATE.penColor, 0.5); // شفافية 50% للهايلايتر
        drawCtx.lineWidth = STATE.penSize;
    } else if (STATE.tool === 'erase') {
        drawCtx.globalCompositeOperation = 'destination-out'; // وضع المسح
        drawCtx.lineWidth = 30;
    }

    drawCtx.lineCap = 'round';
    drawCtx.lineJoin = 'round';
}

// التحرك والرسم
function draw(e) {
    if (!STATE.isDrawing) return;
    if (e.type === 'touchmove') e.preventDefault();

    const pos = getPointerPos(e);
    STATE.currentPath.push(pos);

    drawCtx.lineTo(pos.x, pos.y);
    drawCtx.stroke();
}

// إنهاء الرسم
function stopDrawing() {
    if (!STATE.isDrawing) return;
    STATE.isDrawing = false;

    // حفظ المسار المكتمل في الذاكرة
    if (!STATE.drawings[STATE.pageNum]) STATE.drawings[STATE.pageNum] = [];

    STATE.drawings[STATE.pageNum].push({
        points: [...STATE.currentPath],
        tool: STATE.tool,
        color: STATE.penColor
    });

    drawCtx.globalCompositeOperation = 'source-over'; // إعادة الوضع الافتراضي
    saveLocalData(); // حفظ تلقائي
}

// ربط أحداث الماوس
DOM.drawCanvas.addEventListener('mousedown', startDrawing);
DOM.drawCanvas.addEventListener('mousemove', draw);
DOM.drawCanvas.addEventListener('mouseup', stopDrawing);
DOM.drawCanvas.addEventListener('mouseout', stopDrawing);

// ربط أحداث اللمس (للموبايل والتابلت)
DOM.drawCanvas.addEventListener('touchstart', startDrawing, { passive: false });
DOM.drawCanvas.addEventListener('touchmove', draw, { passive: false });
DOM.drawCanvas.addEventListener('touchend', stopDrawing);

// دالة إعادة رسم كل الخطوط (تستخدم عند تغيير الصفحة أو تغيير الحجم)
function redrawDrawings() {
    drawCtx.clearRect(0, 0, DOM.drawCanvas.width, DOM.drawCanvas.height);
    const paths = STATE.drawings[STATE.pageNum] || [];

    paths.forEach(pathData => {
        drawCtx.beginPath();

        if (pathData.tool === 'erase') {
            drawCtx.globalCompositeOperation = 'destination-out';
            drawCtx.lineWidth = 30;
        } else {
            drawCtx.globalCompositeOperation = 'source-over';
            drawCtx.strokeStyle = hexToRGBA(pathData.color || '#FFFF00', 0.5);
            drawCtx.lineWidth = 15;
        }

        drawCtx.lineCap = 'round';
        drawCtx.lineJoin = 'round';

        const points = pathData.points;
        if (points.length > 0) {
            drawCtx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
                drawCtx.lineTo(points[i].x, points[i].y);
            }
            drawCtx.stroke();
        }
    });

    // ضمان عودة الوضع الطبيعي
    drawCtx.globalCompositeOperation = 'source-over';
}

// دالة مساعدة لتحويل Hex إلى RGBA
function hexToRGBA(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


// -----------------------------------------------------------------------------
//  5. التحديد، القوائم المنبثقة، والملاحظات (Selection & Notes)
// -----------------------------------------------------------------------------

// الاستماع لحدث رفع الماوس لاكتشاف التحديد
DOM.container.addEventListener('mouseup', handleSelection);

function handleSelection(e) {
    if (STATE.tool !== 'select') return;

    // تأخير بسيط للتأكد من أن المتصفح قد أكمل عملية التحديد
    setTimeout(() => {
        const text = window.getSelection().toString().trim();
        if (text.length > 0) {
            DOM.selectionPopup.style.display = 'flex';
            // وضع القائمة فوق مكان الماوس مباشرة
            DOM.selectionPopup.style.left = `${e.clientX}px`;
            DOM.selectionPopup.style.top = `${e.clientY - 60}px`;
            DOM.selectionPopup.dataset.text = text;
        } else {
            DOM.selectionPopup.style.display = 'none';
        }
    }, 10);
}

// زر إضافة ملاحظة يدوية (Note)
DOM.btnCreateNote.onclick = () => {
    const text = DOM.selectionPopup.dataset.text;
    const note = prompt("Enter your note / definition:");
    if (note) {
        if (!STATE.flashcards[STATE.pageNum]) STATE.flashcards[STATE.pageNum] = [];
        STATE.flashcards[STATE.pageNum].push({ front: text, back: note });

        updateSidebarNotes();
        saveLocalData();
        DOM.selectionPopup.style.display = 'none';
    }
};

// تحديث الشريط الجانبي بالملاحظات
function updateSidebarNotes() {
    DOM.flashcardsContainer.innerHTML = '';
    const cards = STATE.flashcards[STATE.pageNum] || [];

    if (cards.length === 0) {
        DOM.flashcardsContainer.innerHTML = `
            <div class="empty-state">
                <i class="far fa-sticky-note"></i>
                <p>No notes for this page.</p>
            </div>`;
        return;
    }

    cards.forEach(card => {
        const div = document.createElement('div');
        div.className = 'note-card';
        div.innerHTML = `<h4>${card.front.substring(0, 50)}...</h4><p>${card.back}</p>`;
        DOM.flashcardsContainer.appendChild(div);
    });
}


// -----------------------------------------------------------------------------
//  6. أدوات الذكاء الاصطناعي (AI Tools Integration)
// -----------------------------------------------------------------------------

// دالة مساعدة للاتصال بالخادم
async function callAiApi(endpoint, body) {
    if (!USER_TOKEN) {
        alert("Please login first to use AI features.");
        throw new Error("No token");
    }

    try {
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
            throw new Error(`Server Error (${res.status}): ${errText.substring(0, 100)}`);
        }

        return await res.json();
    } catch (err) {
        console.error("AI API Error:", err);
        throw err;
    }
}

// استخراج النص من الصفحة الحالية
async function getPageText() {
    const page = await STATE.pdfDoc.getPage(STATE.pageNum);
    const content = await page.getTextContent();
    return content.items.map(i => i.str).join(' ');
}


// ✅ 1. الكويز التفاعلي (Interactive Quiz) - المنطق الجديد
DOM.btnQuiz.onclick = async () => {
    DOM.aiResults.innerHTML = '<div style="text-align:center; padding:20px;">⏳ Generating Interactive Quiz...</div>';

    try {
        const text = await getPageText();
        if (text.length < 50) {
            DOM.aiResults.innerHTML = '<div style="color:orange; padding:10px;">Page text is too short.</div>';
            return;
        }

        // طلب الكويز من السيرفر
        const res = await callAiApi('generate-quiz-text', { text, count: 5 });

        // معالجة البيانات (تأمين ضد اختلاف التنسيقات)
        let questions = [];
        if (Array.isArray(res)) questions = res;
        else if (res.questions) questions = res.questions;
        else if (res.data) questions = res.data;

        if (!questions || questions.length === 0) throw new Error("Format Mismatch: No questions found.");

        // إعداد حالة اللعبة
        STATE.quizData = questions;
        STATE.quizIndex = 0;
        STATE.quizScore = 0;

        // بدء عرض السؤال الأول
        renderQuizQuestion();

    } catch (e) {
        DOM.aiResults.innerHTML = `<div style="color:red; padding:10px;">Error: ${e.message}</div>`;
    }
};

// دالة عرض سؤال واحد في كل مرة
function renderQuizQuestion() {
    // التحقق من نهاية الكويز
    if (STATE.quizIndex >= STATE.quizData.length) {
        DOM.aiResults.innerHTML = `
            <div class="quiz-container" style="text-align:center;">
                <h3>🎉 Quiz Completed!</h3>
                <div style="font-size:24px; margin:20px 0; color:#2563eb; font-weight:bold;">
                    Score: ${STATE.quizScore} / ${STATE.quizData.length}
                </div>
                <button class="main-btn" onclick="DOM.btnQuiz.click()">Generate New Quiz</button>
            </div>
        `;
        return;
    }

    const q = STATE.quizData[STATE.quizIndex];

    // بناء HTML للسؤال الحالي
    DOM.aiResults.innerHTML = `
        <div class="quiz-container">
            <span class="quiz-progress">Question ${STATE.quizIndex + 1} of ${STATE.quizData.length}</span>
            <div class="quiz-question">
                <h4>${q.question}</h4>
            </div>
            
            <div class="quiz-options" id="quiz-options-list">
                ${q.options.map((opt, i) => `
                    <div class="quiz-option" onclick="selectQuizOption(this, ${i})">
                        ${opt}
                    </div>
                `).join('')}
            </div>

            <div id="quiz-feedback" class="quiz-feedback"></div>

            <div class="quiz-controls">
                <button id="btn-validate" class="btn-validate" onclick="validateQuizAnswer()">Check Answer</button>
                <button id="btn-next" class="btn-next" onclick="nextQuizQuestion()">Next Question <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `;

    // تخزين البيانات الوصفية (الإجابة الصحيحة والشرح) في DOM للوصول إليها لاحقاً
    DOM.aiResults.dataset.correctIndex = q.correctOptionIndexes[0];
    DOM.aiResults.dataset.explanation = q.explanation;
}

// دالة اختيار إجابة (يتم استدعاؤها من HTML عبر window)
window.selectQuizOption = (element, index) => {
    // منع التغيير إذا تم التحقق بالفعل
    if (document.getElementById('btn-next').style.display === 'block') return;

    // إزالة التحديد السابق
    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));

    // إضافة التحديد الجديد
    element.classList.add('selected');
    element.parentNode.dataset.selectedIndex = index;
};

// دالة التحقق من الإجابة
window.validateQuizAnswer = () => {
    const optionsContainer = document.getElementById('quiz-options-list');
    const selectedIndex = parseInt(optionsContainer.dataset.selectedIndex);
    const correctIndex = parseInt(DOM.aiResults.dataset.correctIndex);
    const explanation = DOM.aiResults.dataset.explanation;
    const feedbackEl = document.getElementById('quiz-feedback');
    const options = document.querySelectorAll('.quiz-option');

    if (isNaN(selectedIndex)) {
        alert("Please select an option first!");
        return;
    }

    // إظهار النتيجة والألوان
    if (selectedIndex === correctIndex) {
        options[selectedIndex].classList.add('correct');
        feedbackEl.innerHTML = `<span style="color:#059669; font-weight:bold;">✅ Correct!</span><br>${explanation}`;
        feedbackEl.style.backgroundColor = '#d1fae5';
        STATE.quizScore++;
    } else {
        options[selectedIndex].classList.add('wrong');
        options[correctIndex].classList.add('correct'); // إظهار الإجابة الصحيحة للمستخدم
        feedbackEl.innerHTML = `<span style="color:#dc2626; font-weight:bold;">❌ Incorrect.</span><br>${explanation}`;
        feedbackEl.style.backgroundColor = '#fee2e2';
    }

    feedbackEl.style.display = 'block';

    // تبديل الأزرار (إخفاء Check وإظهار Next)
    document.getElementById('btn-validate').style.display = 'none';
    document.getElementById('btn-next').style.display = 'block';
};

// دالة الانتقال للسؤال التالي
window.nextQuizQuestion = () => {
    STATE.quizIndex++;
    renderQuizQuestion();
};


// ✅ 2. المايند ماب المدمج (Integrated Mind Map)
DOM.btnMindmap.onclick = async () => {
    DOM.aiResults.innerHTML = '<div style="text-align:center; padding:20px;">⏳ Building Mind Map...</div>';

    try {
        const text = await getPageText();
        const res = await callAiApi('generate-mindmap-text', { text });
        const markdown = res.markdown || res;

        // تنظيف المنطقة
        DOM.aiResults.innerHTML = '';

        // إنشاء عنصر SVG ديناميكي
        const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgEl.id = 'mindmap-svg';
        svgEl.style.width = '100%';
        svgEl.style.height = '400px';

        // حاوية للعرض (لإعطاء تنسيق وخلفية بيضاء)
        const containerDiv = document.createElement('div');
        containerDiv.id = 'mindmap-svg-container';
        containerDiv.appendChild(svgEl);

        DOM.aiResults.appendChild(containerDiv);

        // استخدام مكتبة Markmap المحملة في HTML
        if (window.markmap) {
            const { Transformer, Markmap } = window.markmap;
            const transformer = new Transformer();

            // تحويل النص (Markdown) إلى بيانات هيكلية
            const { root } = transformer.transform(markdown);

            // رسم الخريطة داخل الـ SVG
            Markmap.create(svgEl, null, root);
        } else {
            throw new Error("Markmap libraries are missing from HTML.");
        }

    } catch (e) {
        DOM.aiResults.innerHTML = `<div style="color:red; padding:10px;">Error: ${e.message}</div>`;
    }
};


// ✅ 3. الفلاش كاردز (Flashcards)
DOM.btnFlashcards.onclick = async () => {
    DOM.aiResults.innerHTML = '<div style="text-align:center; padding:20px;">⏳ Creating Flashcards...</div>';

    try {
        const text = await getPageText();
        const res = await callAiApi('generate-flashcards-text', { text, count: 6 });

        let cards = res.flashcards || res;
        if (!Array.isArray(cards)) throw new Error("Invalid response format");

        DOM.aiResults.innerHTML = '';

        cards.forEach(fc => {
            const card = document.createElement('div');
            card.className = 'note-card';
            card.style.cursor = 'pointer';

            // الحالة الافتراضية (السؤال)
            card.innerHTML = `<div class="front"><b>Q:</b> ${fc.front}</div>`;

            // عند النقر يتم قلب البطاقة
            card.onclick = () => {
                if (card.querySelector('.back')) {
                    // العودة للسؤال
                    card.innerHTML = `<div class="front"><b>Q:</b> ${fc.front}</div>`;
                    card.style.borderLeftColor = '#2563eb'; // لون أساسي
                } else {
                    // إظهار الجواب
                    card.innerHTML = `<div class="back" style="color:#2563eb"><b>A:</b> ${fc.back}</div>`;
                    card.style.borderLeftColor = '#f59e0b'; // لون برتقالي للجواب
                }
            };

            DOM.aiResults.appendChild(card);
        });

    } catch (e) {
        DOM.aiResults.innerHTML = `<div style="color:red; padding:10px;">Error: ${e.message}</div>`;
    }
};


// -----------------------------------------------------------------------------
//  7. الشرح والترجمة (Explain & Translate)
// -----------------------------------------------------------------------------

// زر الشرح (Explain)
DOM.btnAskAi.onclick = async () => {
    const text = DOM.selectionPopup.dataset.text;
    if (!text) return;

    showModal('Thinking... 🤖');
    try {
        const res = await callAiApi('ask', {
            question: `Explain this concept simply for a dental student:\n"${text}"`
        });
        showModal(res.answer);
    } catch (e) {
        showModal('Error fetching explanation.');
    }
};

// زر الترجمة (Translate)
DOM.btnTranslate.onclick = async () => {
    const text = DOM.selectionPopup.dataset.text;
    if (!text) return;

    showModal('Translating... 📖');
    try {
        const res = await callAiApi('ask', {
            question: `Translate this text to Arabic:\n"${text}"`
        });
        showModal(res.answer);
    } catch (e) {
        showModal('Error fetching translation.');
    }
};

// دالة لإظهار النافذة المنبثقة (Modal)
function showModal(content) {
    DOM.selectionPopup.style.display = 'none';
    DOM.backdrop.style.display = 'block';
    DOM.explainPopup.style.display = 'block';
    // تحويل الأسطر الجديدة إلى <br> للعرض الصحيح
    DOM.explainContent.innerHTML = content.replace(/\n/g, '<br>');
}


// -----------------------------------------------------------------------------
//  8. الحفظ والاسترجاع السحابي (Cloud & Local Storage)
// -----------------------------------------------------------------------------

// حفظ البيانات محلياً (للأداء السريع)
function saveLocalData() {
    localStorage.setItem('pdfDrawings', JSON.stringify(STATE.drawings));
    localStorage.setItem('pdfNotes', JSON.stringify(STATE.flashcards));
}

// حفظ البيانات سحابياً (MongoDB + Cloudinary)
DOM.saveCloudBtn.onclick = async () => {
    if (!STATE.currentFileId) return alert('No file loaded.');

    DOM.saveCloudBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; // أيقونة التحميل

    const payload = {
        lessonId: STATE.currentFileId,
        progressData: {
            drawings: STATE.drawings,
            flashcards: STATE.flashcards,
            lastPage: STATE.pageNum
        }
    };

    try {
        const res = await fetch(`${API_BASE}/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${USER_TOKEN}`
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (data.success) {
            alert('Progress saved to cloud!');
        } else {
            alert('Save failed: ' + data.message);
        }
    } catch (err) {
        console.error(err);
        alert('Network error while saving.');
    } finally {
        DOM.saveCloudBtn.innerHTML = '<i class="fas fa-save"></i>'; // إعادة الأيقونة
    }
};

// استرجاع البيانات من السحابة عند تحميل الملف
async function loadProgressFromCloud(fileId) {
    if (!USER_TOKEN) return;
    try {
        console.log("Fetching cloud progress...");
        const res = await fetch(`${API_BASE}/?lessonId=${fileId}`, {
            headers: { 'Authorization': `Bearer ${USER_TOKEN}` }
        });
        const json = await res.json();

        if (json.success && json.data) {
            // تحديث الحالة بالبيانات المسترجعة
            if (json.data.drawings) STATE.drawings = json.data.drawings;
            if (json.data.flashcards) STATE.flashcards = json.data.flashcards;
            if (json.data.lastPage) STATE.pageNum = json.data.lastPage;

            console.log("Cloud data loaded successfully.");
            saveLocalData(); // تحديث المحلي أيضاً
        }
    } catch (e) {
        console.warn("No cloud save found or error fetching:", e);
    }
}


// -----------------------------------------------------------------------------
//  9. التشغيل التلقائي (Auto Init)
// -----------------------------------------------------------------------------

window.addEventListener('DOMContentLoaded', () => {
    // التحقق مما إذا كان هناك ملف ممرر في الرابط (من لوحة التحكم)
    const urlParams = new URLSearchParams(window.location.search);
    const fileSrc = urlParams.get('src');

    if (fileSrc) {
        // إذا كان هناك ملف، قم بإخفاء شاشة البداية وتحميله فوراً
        DOM.startContainer.style.display = 'none';
        DOM.mainLayout.style.display = 'flex';
        try {
            loadPdf(decodeURIComponent(fileSrc));
        } catch (e) { console.error(e); }
    }

    // استعادة الملاحظات المحفوظة محلياً (إن وجدت) لضمان عدم ضياعها
    const localNotes = localStorage.getItem('pdfNotes');
    if (localNotes) STATE.flashcards = JSON.parse(localNotes);
});
// =============================================================================
//  DENTIST AI VIEWER - CORE LOGIC (pdf-viewer.js)
//  Version: Final Production (French)
//  Features: Drawing, Smart Pins, AI Generation (Groq), MongoDB Sync
// =============================================================================

// 1. إعدادات PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// 2. إدارة الحالة (State Management)
const STATE = {
    pdfDoc: null,
    scale: 1.2,
    tool: null,        // 'pen', 'highlighter', 'eraser'
    isDrawing: false,
    drawings: [],      // مصفوفة لتخزين مسارات الرسم {page, tool, color, points}
    pins: [],          // مصفوفة المصابيح الذكية {id, page, x, y, question, answer}
    selection: { text: '', rect: null }, // النص المحدد حالياً
    activePinId: null, // المصباح المفتوح حالياً
    lessonId: null     // معرف الملف (للحفظ)
};

// استخراج رابط الملف من الـ URL
const urlParams = new URLSearchParams(window.location.search);
const FILE_URL = urlParams.get('file');

// =============================================================================
//  SECTION 1: LOADING & RENDERING
// =============================================================================

// تحميل ملف PDF عند فتح الصفحة
window.onload = async function () {
    if (!FILE_URL) {
        document.getElementById('loading').innerHTML = "<span style='color:red'>Erreur: Aucun fichier spécifié via URL.</span>";
        return;
    }

    try {
        // تحميل المستند
        const loadingTask = pdfjsLib.getDocument(FILE_URL);
        STATE.pdfDoc = await loadingTask.promise;

        // تحديث الواجهة
        document.getElementById('page-count').textContent = STATE.pdfDoc.numPages;
        document.getElementById('loading').style.display = 'none';

        // عرض جميع الصفحات
        for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
            await renderPage(i);
        }

        // استرجاع الجلسة المحفوظة (الرسومات والمصابيح)
        await loadSession();

    } catch (error) {
        console.error("PDF Load Error:", error);
        document.getElementById('loading').innerHTML = "Erreur de chargement du PDF.";
    }
};

// دالة عرض الصفحة الواحدة (طبقات)
async function renderPage(pageNum) {
    const page = await STATE.pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: STATE.scale });

    // 1. إنشاء حاوية الصفحة (Wrapper)
    const wrapper = document.createElement('div');
    wrapper.className = 'page-wrapper';
    wrapper.id = `page-${pageNum}`;
    wrapper.style.width = `${viewport.width}px`;
    wrapper.style.height = `${viewport.height}px`;

    // 2. طبقة الـ PDF (Canvas)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // 3. طبقة النصوص (Text Layer) - للتحديد
    const textLayer = document.createElement('div');
    textLayer.className = 'textLayer';
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;

    // 4. طبقة الرسم (Draw Layer)
    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'drawLayer';
    drawCanvas.id = `draw-${pageNum}`;
    drawCanvas.width = viewport.width;
    drawCanvas.height = viewport.height;

    // تجميع الطبقات
    wrapper.appendChild(canvas);
    wrapper.appendChild(textLayer);
    wrapper.appendChild(drawCanvas);
    document.getElementById('pdf-container').appendChild(wrapper);

    // رسم محتوى PDF
    await page.render({ canvasContext: ctx, viewport }).promise;

    // رسم النصوص القابلة للتحديد
    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayer,
        viewport: viewport,
        textDivs: []
    });

    // تفعيل الرسم على هذه الصفحة
    setupDrawingEvents(drawCanvas, pageNum);
}

// =============================================================================
//  SECTION 2: DRAWING TOOLS (ANNOTATIONS)
// =============================================================================

// تفعيل الأداة من الشريط العلوي
window.setTool = function (toolName) {
    STATE.tool = (STATE.tool === toolName) ? null : toolName; // Toggle

    // تحديث شكل الأزرار
    ['pen', 'highlighter', 'eraser'].forEach(id => {
        document.getElementById(`btn-${id}`).classList.toggle('active', STATE.tool === id);
    });

    // تفعيل/تعطيل استقبال الماوس على طبقة الرسم
    document.querySelectorAll('.drawLayer').forEach(el => {
        el.classList.toggle('drawing', !!STATE.tool);
    });
};

// منطق الرسم داخل الكانفاس
function setupDrawingEvents(canvas, pageNum) {
    const ctx = canvas.getContext('2d');
    let lastX = 0, lastY = 0;

    canvas.addEventListener('mousedown', (e) => {
        if (!STATE.tool) return;
        STATE.isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];

        // بدء مسار جديد
        const newPath = {
            page: pageNum,
            tool: STATE.tool,
            color: document.getElementById('color-picker').value,
            points: [{ x: lastX, y: lastY }]
        };
        STATE.drawings.push(newPath);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!STATE.isDrawing || !STATE.tool) return;

        // إعدادات الفرشاة
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (STATE.tool === 'pen') {
            ctx.strokeStyle = document.getElementById('color-picker').value;
            ctx.lineWidth = 2;
            ctx.globalCompositeOperation = 'source-over';
        } else if (STATE.tool === 'highlighter') {
            ctx.strokeStyle = 'rgba(255, 255, 0, 0.3)'; // أصفر شفاف
            ctx.lineWidth = 15;
            ctx.globalCompositeOperation = 'multiply';
        } else if (STATE.tool === 'eraser') {
            ctx.lineWidth = 20;
            ctx.globalCompositeOperation = 'destination-out';
        }

        // الرسم الفعلي
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        // حفظ النقطة
        STATE.drawings[STATE.drawings.length - 1].points.push({ x: e.offsetX, y: e.offsetY });
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mouseup', () => STATE.isDrawing = false);
    canvas.addEventListener('mouseout', () => STATE.isDrawing = false);
}

// إعادة رسم الخطوط المحفوظة (عند تحميل الجلسة)
function redrawAllDrawings() {
    STATE.drawings.forEach(path => {
        const canvas = document.getElementById(`draw-${path.page}`);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (path.tool === 'pen') {
            ctx.strokeStyle = path.color;
            ctx.lineWidth = 2;
            ctx.globalCompositeOperation = 'source-over';
        } else if (path.tool === 'highlighter') {
            ctx.strokeStyle = 'rgba(255, 255, 0, 0.3)';
            ctx.lineWidth = 15;
            ctx.globalCompositeOperation = 'multiply';
        } else {
            ctx.lineWidth = 20;
            ctx.globalCompositeOperation = 'destination-out';
        }

        if (path.points && path.points.length > 0) {
            ctx.beginPath();
            ctx.moveTo(path.points[0].x, path.points[0].y);
            for (let i = 1; i < path.points.length; i++) {
                ctx.lineTo(path.points[i].x, path.points[i].y);
            }
            ctx.stroke();
        }
    });
}

// =============================================================================
//  SECTION 3: SMART SELECTION & PINS (Ask Dentist AI)
// =============================================================================

// مراقبة التحديد
document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();
    const toolbar = document.getElementById('smart-toolbar');

    // إخفاء الشريط إذا لم يكن هناك تحديد أو التحديد خارج الـ Viewer
    if (selection.isCollapsed || selection.rangeCount === 0 || !document.getElementById('pdf-container').contains(selection.anchorNode)) {
        toolbar.style.display = 'none';
        return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect(); // إحداثيات النص بالنسبة للشاشة

    STATE.selection.text = selection.toString();
    STATE.selection.rect = rect;

    // إظهار الزر فوق النص المحدد
    toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
    toolbar.style.left = `${rect.left + (rect.width / 2) - 60}px`;
    toolbar.style.display = 'flex';
});

// فتح نافذة السؤال (AI Modal)
window.askDentistAI = function () {
    document.getElementById('ai-context-preview').textContent = STATE.selection.text.substring(0, 150) + "...";
    document.getElementById('ai-modal').style.display = 'flex';
    document.getElementById('smart-toolbar').style.display = 'none'; // إخفاء الزر الصغير
};

// إغلاق النافذة
window.closeAiModal = function () {
    document.getElementById('ai-modal').style.display = 'none';
    document.getElementById('ai-response-area').style.display = 'none';
    document.getElementById('ai-question').value = '';
};

// إرسال السؤال للباك-إند (Groq) وإنشاء المصباح
window.submitAiQuestion = async function () {
    const questionInput = document.getElementById('ai-question');
    const responseArea = document.getElementById('ai-response-area');
    const question = questionInput.value;

    if (!question) return;

    responseArea.style.display = 'block';
    responseArea.innerHTML = '<div class="spinner"></div> Analyse en cours (Dentist AI)...';

    try {
        const res = await fetch('/api/ai/ask-dentist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: STATE.selection.text,
                question: question
            })
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Erreur API');

        const answer = data.answer || "Aucune réponse générée.";
        responseArea.innerHTML = marked.parse(answer); // تحويل الماركداون

        // 🔥 إنشاء المصباح الذكي (Smart Pin) وحفظه
        createSmartPin(STATE.selection.rect, question, answer);

    } catch (err) {
        responseArea.innerHTML = `<span style="color:red">Erreur: ${err.message}</span>`;
    }
};

// إنشاء بيانات المصباح وحساب موقعه النسبي
function createSmartPin(rect, question, answer) {
    // تحديد الصفحة التي يقع فيها التحديد
    const wrappers = document.querySelectorAll('.page-wrapper');
    let targetPage = 1;
    let relativeX = 0;
    let relativeY = 0;

    wrappers.forEach(wrap => {
        const wrapRect = wrap.getBoundingClientRect();
        // إذا كان التحديد يقع عمودياً داخل هذه الصفحة
        if (rect.top >= wrapRect.top && rect.top <= wrapRect.bottom) {
            targetPage = parseInt(wrap.id.split('-')[1]);
            // حساب الإحداثيات النسبية داخل الصفحة
            relativeX = rect.left - wrapRect.left + (rect.width / 2); // منتصف الكلمة
            relativeY = rect.top - wrapRect.top; // أعلى الكلمة
        }
    });

    const pinData = {
        id: Date.now(),
        page: targetPage,
        x: relativeX,
        y: relativeY,
        question: question,
        answer: answer
    };

    STATE.pins.push(pinData); // إضافة للمصفوفة للحفظ لاحقاً
    renderPinIcon(pinData);   // رسم الأيقونة
}

// رسم أيقونة المصباح على الصفحة
function renderPinIcon(pinData) {
    const pageWrapper = document.getElementById(`page-${pinData.page}`);
    if (!pageWrapper) return;

    const pinEl = document.createElement('div');
    pinEl.className = 'smart-pin';
    pinEl.innerHTML = '<i class="fas fa-lightbulb"></i>';
    pinEl.style.left = `${pinData.x}px`;
    pinEl.style.top = `${pinData.y}px`;
    pinEl.dataset.id = pinData.id;

    // عند الضغط على المصباح
    pinEl.onclick = (e) => {
        e.stopPropagation(); // منع اختفاء الـ popover فوراً
        showPinDetails(pinData, pinEl);
    };

    pageWrapper.appendChild(pinEl);
}

// عرض تفاصيل المصباح (الفقاعة)
function showPinDetails(pinData, element) {
    const popover = document.getElementById('pin-details');
    const content = document.getElementById('pin-text');
    STATE.activePinId = pinData.id;

    content.innerHTML = `
        <div style="font-weight:bold; margin-bottom:5px; color:#2563eb;">Q: ${pinData.question}</div>
        <div style="font-size:0.9em;">${marked.parse(pinData.answer)}</div>
    `;

    // تموضع الفقاعة بجانب المصباح
    const rect = element.getBoundingClientRect();
    popover.style.display = 'block';
    popover.style.top = `${rect.bottom + window.scrollY + 10}px`;
    popover.style.left = `${rect.left + window.scrollX}px`;
}

// حذف المصباح
window.deleteActivePin = function () {
    if (!STATE.activePinId) return;

    // حذف من المصفوفة
    STATE.pins = STATE.pins.filter(p => p.id !== STATE.activePinId);

    // حذف من DOM
    const el = document.querySelector(`.smart-pin[data-id="${STATE.activePinId}"]`);
    if (el) el.remove();

    document.getElementById('pin-details').style.display = 'none';
};

// إخفاء الفقاعة عند الضغط خارجها
document.addEventListener('click', (e) => {
    if (!e.target.closest('.smart-pin') && !e.target.closest('.pin-popover')) {
        document.getElementById('pin-details').style.display = 'none';
    }
});

// =============================================================================
//  SECTION 4: CONTENT GENERATION (Quiz, Flashcards, MindMap)
// =============================================================================

// التحكم في ظهور الـ Sliders
window.toggleSlider = function (type, show) {
    document.getElementById(`${type}-slider-box`).style.display = show ? 'block' : 'none';
};

// الدالة الرئيسية للتوليد
window.generateContent = async function (type) {
    let scope = 'page';
    let count = 5;
    let endpoint = '';
    let resultContainerId = '';
    let textToAnalyze = "";

    // 1. تحديد الإعدادات بناءً على النوع
    if (type === 'quiz') {
        endpoint = 'generate-quiz-text';
        resultContainerId = 'quiz-results';
        const scopeRadio = document.querySelector('input[name="quiz-scope"]:checked');
        scope = scopeRadio ? scopeRadio.value : 'page';

        if (scope === 'all') {
            count = document.getElementById('quiz-count').value; // Slider value
        } else {
            count = 3; // ثابت للصفحة الحالية
        }

    } else if (type === 'flashcards') {
        endpoint = 'generate-flashcards-text';
        resultContainerId = 'cards-results';
        const scopeRadio = document.querySelector('input[name="card-scope"]:checked');
        scope = scopeRadio ? scopeRadio.value : 'page';

        if (scope === 'all') {
            count = document.getElementById('card-count').value;
        } else {
            count = 4;
        }

    } else if (type === 'mindmap') {
        endpoint = 'generate-mindmap-text';
        resultContainerId = 'markmap-svg'; // SVG Container
        scope = 'all'; // المايند ماب دائماً شاملة
    }

    const container = document.getElementById(resultContainerId);
    if (type !== 'mindmap') container.innerHTML = '<div style="text-align:center; padding:20px; color:#64748b;"><i class="fas fa-spinner fa-spin"></i> Génération en cours...</div>';

    // 2. استخراج النص (Extraction)
    try {
        if (scope === 'page') {
            // نص الصفحة الأولى (أو يمكن تحسينه لأخذ الصفحة الظاهرة حالياً عبر Scroll Listener)
            // للتبسيط سنأخذ الصفحة 1 أو الصفحة الحالية إذا أضفنا متغير لها
            const page = await STATE.pdfDoc.getPage(1);
            const content = await page.getTextContent();
            textToAnalyze = content.items.map(i => i.str).join(' ');
        } else {
            // نص كامل (مع حد أقصى للصفحات لتفادي التعليق)
            const maxPages = Math.min(STATE.pdfDoc.numPages, 30);
            for (let i = 1; i <= maxPages; i++) {
                const page = await STATE.pdfDoc.getPage(i);
                const content = await page.getTextContent();
                textToAnalyze += content.items.map(i => i.str).join(' ') + "\n";
            }
        }

        // 3. الاتصال بالـ API
        const res = await fetch(`/api/ai/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: textToAnalyze, count: count })
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Erreur serveur');

        // 4. عرض النتائج
        if (type === 'quiz') renderQuiz(data.questions);
        else if (type === 'flashcards') renderFlashcards(data.flashcards);
        else if (type === 'mindmap') renderMindMap(data.markdown);

    } catch (err) {
        console.error(err);
        if (type !== 'mindmap') container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${err.message}</div>`;
        else alert("Erreur MindMap: " + err.message);
    }
};

// دوال العرض المساعدة
function renderQuiz(questions) {
    const container = document.getElementById('quiz-results');
    container.innerHTML = '';

    if (!questions || questions.length === 0) {
        container.innerHTML = "Aucune question générée.";
        return;
    }

    questions.forEach((q, idx) => {
        const div = document.createElement('div');
        div.style.cssText = "background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:15px; margin-bottom:10px;";
        div.innerHTML = `
            <div style="font-weight:bold; font-size:14px; margin-bottom:8px;">${idx + 1}. ${q.question}</div>
            <ul style="padding-left:20px; margin:0; font-size:13px; color:#475569;">
                ${q.options.map(opt => `<li>${opt}</li>`).join('')}
            </ul>
            <div style="margin-top:10px; font-size:12px; color:green; font-weight:600;">
                Réponse: ${q.correctOptionIndexes.map(i => q.options[i]).join(', ')}
            </div>
        `;
        container.appendChild(div);
    });
}

function renderFlashcards(cards) {
    const container = document.getElementById('cards-results');
    container.innerHTML = '';

    if (!cards || cards.length === 0) {
        container.innerHTML = "Aucune carte générée.";
        return;
    }

    cards.forEach(card => {
        const div = document.createElement('div');
        div.style.cssText = "border:1px solid #e2e8f0; border-radius:8px; margin-bottom:10px; overflow:hidden;";
        div.innerHTML = `
            <div style="background:#f1f5f9; padding:10px; font-weight:bold; font-size:13px; color:#2563eb;">${card.front}</div>
            <div style="padding:10px; font-size:13px; color:#334155;">${card.back}</div>
        `;
        container.appendChild(div);
    });
}

function renderMindMap(markdown) {
    const svgEl = document.getElementById('markmap-svg');
    svgEl.innerHTML = ''; // تنظيف

    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);

    Markmap.create(svgEl, null, root);
}

// =============================================================================
//  SECTION 5: SESSION MANAGEMENT (MongoDB Sync)
// =============================================================================

// حفظ الجلسة
window.saveSession = async function () {
    const btn = document.querySelector('.btn-dark'); // زر الحفظ
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sauvegarde...';

    const sessionPayload = {
        drawings: STATE.drawings,
        pins: STATE.pins
        // يمكن إضافة الكويزات المحملة أيضاً إذا أردنا
    };

    try {
        const res = await fetch('/api/progress/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ progressData: sessionPayload })
        });

        const data = await res.json();
        if (data.success) {
            alert("Session sauvegardée avec succès !");
        } else {
            alert("Erreur de sauvegarde.");
        }
    } catch (e) {
        console.error(e);
        alert("Erreur de connexion.");
    } finally {
        btn.innerHTML = originalText;
    }
};

// تحميل الجلسة
window.loadSession = async function () {
    try {
        const res = await fetch('/api/progress'); // يفترض أن هذا الرابط يعيد بيانات المستخدم
        const data = await res.json();

        if (data.success && data.progressData) {
            STATE.drawings = data.progressData.drawings || [];
            STATE.pins = data.progressData.pins || [];

            // إعادة رسم كل شيء
            redrawAllDrawings();
            STATE.pins.forEach(pin => renderPinIcon(pin));

            console.log("Session chargée avec succès.");
        }
    } catch (e) {
        console.log("Aucune session précédente trouvée ou erreur de chargement.");
    }
};

// =============================================================================
//  SECTION 6: UI HELPERS (Tabs, Toggle)
// =============================================================================

window.switchTab = function (tabName) {
    // إزالة التنشيط من الجميع
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    // تنشيط الهدف
    document.getElementById(`tab-${tabName}`).classList.add('active');

    // البحث عن الزر الذي تم ضغطه وتفعيله (هذه الطريقة أضمن من event.target)
    const btns = document.querySelectorAll('.tab-btn');
    if (tabName === 'quiz') btns[0].classList.add('active');
    if (tabName === 'cards') btns[1].classList.add('active');
    if (tabName === 'map') btns[2].classList.add('active');
};

window.toggleFocus = function () {
    document.body.classList.toggle('focus-mode');
};
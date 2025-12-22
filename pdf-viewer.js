// =============================================================================
//  Smart Dental Viewer - PRO AI SYSTEM (Phase 2: Full Integration)
// =============================================================================

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// --- إدارة الحالة (Global State) ---
const STATE = {
    pdfDoc: null,
    scale: 1.2,
    currentPage: 1,
    lessonId: 'demo_lesson_001', // سيتم جلبه ديناميكياً لاحقاً من الرابط

    // بيانات الجلسة (للحفظ والاسترجاع)
    sessionData: {
        chatHistory: [],     // سجل المحادثات
        flashcards: [],      // البطاقات التعليمية
        quizzes: [],         // الكويزات
        mindMapData: null,   // بيانات الخريطة الذهنية
        lastPage: 1
    },

    // مؤشرات العرض
    renderedPages: new Set()
};

// --- عناصر DOM الرئيسية ---
const DOM = {
    container: document.getElementById('viewer-container'),
    wrapper: document.getElementById('pdf-wrapper'),
    fileInput: document.getElementById('file-input'),

    // نوافذ وأدوات
    quickToolbar: document.getElementById('quick-actions-toolbar'),
    chatPopover: document.getElementById('ai-chat-popover'),
    chatHistory: document.getElementById('chat-history'),
    chatInput: document.getElementById('ai-user-input'),

    // منطقة النتائج
    resultsArea: document.getElementById('results-area'),

    // المايند ماب
    mindMapPreview: document.getElementById('mindmap-svg-preview'),
    mindMapFull: document.getElementById('mindmap-svg-full'),

    // مودال الكويز
    quizModal: document.getElementById('quiz-config-modal')
};

// =============================================================================
//  1. تهيئة النظام وتحميل PDF
// =============================================================================

// استعادة التوكن
const USER_TOKEN = localStorage.getItem('userToken');

// دالة API موحدة
async function callApi(endpoint, method = 'POST', body = {}) {
    if (!USER_TOKEN) {
        alert("Veuillez vous connecter !");
        throw new Error("Auth Error");
    }

    // إضافة الـ Lesson ID لكل الطلبات
    if (method === 'POST') body.lessonId = STATE.lessonId;

    const res = await fetch(endpoint.startsWith('/') ? endpoint : `/api/${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${USER_TOKEN}`
        },
        body: method === 'POST' ? JSON.stringify(body) : null
    });

    const data = await res.json();
    if (!data.success && !res.ok) throw new Error(data.message || 'Server Error');
    return data;
}

// تحميل الملف
DOM.fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // إنشاء ID للدرس بناء على اسم الملف (مؤقتاً)
    STATE.lessonId = file.name.replace(/\s+/g, '_').toLowerCase();

    const url = URL.createObjectURL(file);
    await loadPdf(url);

    // محاولة استرجاع التقدم المحفوظ سابقاً
    await loadSavedProgress();
});

async function loadPdf(url) {
    DOM.wrapper.innerHTML = '';
    STATE.renderedPages.clear();

    try {
        STATE.pdfDoc = await pdfjsLib.getDocument(url).promise;
        initPagesPlaceholders();
    } catch (err) {
        console.error(err);
        alert("Erreur chargement PDF");
    }
}

function initPagesPlaceholders() {
    for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
        const div = document.createElement('div');
        div.className = 'page-container';
        div.id = `page-${i}`;
        // أبعاد افتراضية مؤقتة
        div.style.width = '600px'; div.style.height = '800px';
        div.style.marginBottom = '20px';
        DOM.wrapper.appendChild(div);
    }
    setupObserver();
}

// مراقب التمرير (Lazy Loading)
function setupObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const num = parseInt(entry.target.id.split('-')[1]);
                STATE.currentPage = num;
                renderPage(num);
            }
        });
    }, { root: DOM.container, rootMargin: '600px' });

    document.querySelectorAll('.page-container').forEach(d => observer.observe(d));
}

async function renderPage(num) {
    if (STATE.renderedPages.has(num)) return;
    STATE.renderedPages.add(num);

    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });
    const div = document.getElementById(`page-${num}`);

    const width = Math.floor(viewport.width);
    const height = Math.floor(viewport.height);

    div.style.width = `${width}px`;
    div.style.height = `${height}px`;

    // Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width; canvas.height = height;
    div.appendChild(canvas);

    await page.render({ canvasContext: ctx, viewport }).promise;

    // Text Layer (للتحديد)
    const textDiv = document.createElement('div');
    textDiv.className = 'textLayer';
    textDiv.style.width = `${width}px`;
    textDiv.style.height = `${height}px`;
    textDiv.style.setProperty('--scale-factor', viewport.scale);
    div.appendChild(textDiv);

    pdfjsLib.renderTextLayer({
        textContent: await page.getTextContent(),
        container: textDiv,
        viewport: viewport,
        textDivs: []
    });
}

// =============================================================================
//  2. أدوات التحديد والشريط السريع (Quick Toolbar)
// =============================================================================

document.addEventListener('mouseup', (e) => {
    const selection = window.getSelection();
    if (!selection || selection.toString().trim() === '') {
        DOM.quickToolbar.style.display = 'none';
        return;
    }

    // إذا كان التحديد داخل الـ PDF
    if (DOM.container.contains(selection.anchorNode)) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        DOM.quickToolbar.style.display = 'flex';
        DOM.quickToolbar.style.top = `${rect.top - 40}px`;
        DOM.quickToolbar.style.left = `${rect.left + (rect.width / 2)}px`;
    }
});

// دالة التلوين (Highlight)
window.handleHighlight = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.className = 'highlight';
    try {
        range.surroundContents(span);
        selection.removeAllRanges();
        DOM.quickToolbar.style.display = 'none';
    } catch (e) {
        console.log('Highlight Error (Cross-block):', e);
    }
};

// =============================================================================
//  3. نظام المحادثة الذكي (AI Chat)
// =============================================================================

window.openAiChat = () => {
    const selection = window.getSelection();
    const text = selection.toString().trim();

    DOM.chatPopover.style.display = 'flex';
    // تحديد موقع النافذة
    const rect = DOM.quickToolbar.getBoundingClientRect();
    DOM.chatPopover.style.top = `${rect.top}px`;
    DOM.chatPopover.style.left = `${rect.left + 20}px`; // إزاحة قليلة

    // إذا كان هناك نص محدد، نضيفه كسياق مخفي أو رسالة
    if (text) {
        addMessage(`Context: "${text.substring(0, 30)}..."`, 'system');
        STATE.currentContext = text; // نحتفظ بالنص للسؤال عنه
    }

    DOM.quickToolbar.style.display = 'none';
};

window.closeAiChat = () => {
    DOM.chatPopover.style.display = 'none';
};

window.submitAiQuery = async () => {
    const query = DOM.chatInput.value.trim();
    if (!query) return;

    // 1. عرض رسالة المستخدم
    addMessage(query, 'user');
    DOM.chatInput.value = '';

    // 2. تجهيز الطلب
    const prompt = STATE.currentContext
        ? `Context: "${STATE.currentContext}"\n\nQuestion: ${query}`
        : query;

    // 3. الاتصال بـ API
    try {
        addMessage('...', 'loading'); // مؤشر تحميل
        const res = await callApi('ai/ask', 'POST', { question: prompt });

        // إزالة مؤشر التحميل
        DOM.chatHistory.querySelector('.msg-loading')?.remove();

        // عرض الرد
        const answer = res.answer || res.result;
        addMessage(answer, 'ai');

        // 4. حفظ المحادثة في الذاكرة المحلية
        STATE.sessionData.chatHistory.push({ q: query, a: answer, ctx: STATE.currentContext });

    } catch (err) {
        addMessage("Erreur: " + err.message, 'error');
    }

    STATE.currentContext = null; // تصفير السياق
};

function addMessage(text, type) {
    const div = document.createElement('div');
    div.className = `chat-message msg-${type}`;
    div.textContent = text;
    DOM.chatHistory.appendChild(div);
    DOM.chatHistory.scrollTop = DOM.chatHistory.scrollHeight;
}

// =============================================================================
//  4. الكويزات (Nightmare Mode) والفلاش كاردز
// =============================================================================

// فتح نافذة إعدادات الكويز
window.startQuizGeneration = async () => {
    DOM.quizModal.style.display = 'none';
    const difficulty = document.getElementById('quiz-difficulty').value;
    const type = document.getElementById('quiz-type').value;
    const count = document.getElementById('quiz-count').value;

    await generateContent('quiz', { difficulty, type, count });
};

// دالة التوليد العامة
window.generateContent = async (contentType, options = {}) => {
    DOM.resultsArea.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Génération en cours...</div>';

    try {
        // جمع النص (من الصفحة الحالية لعدم الثقل، أو يمكن تغييره لكامل الملف)
        const text = await getPageText(STATE.currentPage);

        let endpoint = contentType === 'quiz' ? 'ai/generate-quiz-text' : 'ai/generate-flashcards-text';

        const payload = {
            text,
            ...options, // خيارات الصعوبة والعدد
            language: 'fr'
        };

        const res = await callApi(endpoint, 'POST', payload);

        if (contentType === 'quiz') {
            const quizzes = res.questions || res.data || [];
            STATE.sessionData.quizzes.push(...quizzes); // حفظ في الحالة
            renderQuizzes(quizzes);
        } else {
            const cards = res.flashcards || res.cards || [];
            STATE.sessionData.flashcards.push(...cards); // حفظ في الحالة
            renderFlashcards(cards);
        }

    } catch (err) {
        DOM.resultsArea.innerHTML = `<div style="color:red">Erreur: ${err.message}</div>`;
    }
};

// استخراج نص صفحة
async function getPageText(pageNum) {
    const page = await STATE.pdfDoc.getPage(pageNum);
    const content = await page.getTextContent();
    return content.items.map(i => i.str).join(' ');
}

// دوال العرض (Rendering)
function renderQuizzes(list) {
    DOM.resultsArea.innerHTML = list.map((q, i) => `
        <div class="result-card">
            <div style="font-weight:bold; margin-bottom:8px;">
                <span style="color:red; font-size:10px;">[${q.difficulty || 'Moyen'}]</span> 
                ${i + 1}. ${q.question}
            </div>
            <div>
                ${q.options.map((opt, idx) => `
                    <div class="quiz-opt" onclick="this.classList.toggle('selected')" data-idx="${idx}">
                        ${opt}
                    </div>
                `).join('')}
            </div>
            <button class="main-btn" style="margin-top:10px; background:#475569;" 
                onclick="this.nextElementSibling.style.display='block'; this.style.display='none'">
                Vérifier
            </button>
            <div style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; font-size:13px;">
                <strong>Réponse:</strong> ${q.explanation}
            </div>
        </div>
    `).join('');
}

function renderFlashcards(list) {
    DOM.resultsArea.innerHTML = list.map((c, i) => `
        <div class="result-card" onclick="this.querySelector('.back').style.display='block'">
            <div style="font-size:11px; color:#64748b;">Carte ${i + 1}</div>
            <div style="font-weight:600; margin:5px 0;">Q: ${c.front}</div>
            <div class="back" style="display:none; color:var(--primary); border-top:1px dashed #ccc; padding-top:5px; margin-top:5px;">
                A: ${c.back}
            </div>
        </div>
    `).join('');
}

// =============================================================================
//  5. الخريطة الذهنية (Mind Map)
// =============================================================================

window.generateMindMap = async () => {
    DOM.mindMapPreview.innerHTML = '';

    try {
        const text = await getPageText(STATE.currentPage); // أو كامل الملف
        const res = await callApi('ai/generate-mindmap-text', 'POST', { text });

        const markdown = res.markdown || res.data;
        STATE.sessionData.mindMapData = markdown; // حفظ

        drawMindMap(markdown);

    } catch (err) {
        alert("Erreur MindMap: " + err.message);
    }
};

function drawMindMap(markdown) {
    if (!window.markmap) return;
    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);

    // رسم في المصغر
    Markmap.create(DOM.mindMapPreview, null, root);
    // رسم في الكبير
    Markmap.create(DOM.mindMapFull, null, root);
}

// =============================================================================
//  6. نظام الحفظ والاسترجاع (Save & Load)
// =============================================================================

window.saveProgress = async () => {
    const btn = document.getElementById('btn-save-progress');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sauvegarde...';

    try {
        // تجميع كل البيانات
        const progressPayload = {
            chatHistory: STATE.sessionData.chatHistory,
            flashcards: STATE.sessionData.flashcards,
            quizzes: STATE.sessionData.quizzes,
            mindMap: STATE.sessionData.mindMapData,
            lastPage: STATE.currentPage,
            timestamp: new Date()
        };

        const res = await callApi('progress/save', 'POST', {
            lessonId: STATE.lessonId,
            progressData: progressPayload
        });

        if (res.success) {
            btn.innerHTML = '<i class="fas fa-check"></i> Sauvegardé!';
            setTimeout(() => btn.innerHTML = '<i class="fas fa-save"></i> Sauvegarder la session', 2000);
        }
    } catch (err) {
        console.error(err);
        btn.innerHTML = '<i class="fas fa-times"></i> Erreur!';
        alert("فشل الحفظ: تأكد من السيرفر");
    }
};

// دالة الاسترجاع (تستدعى عند تحميل الملف)
async function loadSavedProgress() {
    try {
        const res = await callApi(`progress?lessonId=${STATE.lessonId}`, 'GET');

        if (res.success && res.data) {
            const data = res.data; // البيانات القادمة من Cloudinary

            // 1. استعادة الشات
            if (data.chatHistory) {
                STATE.sessionData.chatHistory = data.chatHistory;
                data.chatHistory.forEach(msg => {
                    addMessage(msg.q, 'user');
                    addMessage(msg.a, 'ai');
                });
            }

            // 2. استعادة الكويزات والفلاش كاردز
            if (data.quizzes && data.quizzes.length > 0) {
                STATE.sessionData.quizzes = data.quizzes;
                renderQuizzes(data.quizzes);
            }
            if (data.flashcards && data.flashcards.length > 0) {
                STATE.sessionData.flashcards = data.flashcards;
                // إضافة الفلاش كاردز للقائمة (append)
                const currentHtml = DOM.resultsArea.innerHTML;
                renderFlashcards(data.flashcards); // هذا سيستبدل المحتوى، لذا قد تحتاج لدمجه
            }

            // 3. استعادة الخريطة
            if (data.mindMap) {
                STATE.sessionData.mindMapData = data.mindMap;
                drawMindMap(data.mindMap);
            }

            console.log("Session loaded successfully!");
        }
    } catch (err) {
        console.log("No saved session found or error loading.");
    }
}
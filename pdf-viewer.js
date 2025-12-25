// =============================================================================
//  Smart Dental Viewer - PRO AI SYSTEM (Final Version: Fixed Zoom + Short Chat)
// =============================================================================

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// --- إدارة الحالة (Global State) ---
const STATE = {
    pdfDoc: null,
    scale: 1.2,
    currentPage: 1,
    lessonId: 'demo_lesson_001', // سيتم تحديثه عند رفع ملف

    // بيانات الجلسة (للحفظ والاسترجاع)
    sessionData: {
        chatHistory: [],     // سجل المحادثات
        flashcards: [],      // البطاقات التعليمية
        quizzes: [],         // الكويزات
        mindMapData: null,   // بيانات الخريطة الذهنية
        lastPage: 1
    },

    // مؤشرات العرض
    renderedPages: new Set(),
    currentContext: null // النص المحدد حالياً للسؤال عنه
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
//  1. تهيئة النظام والاتصال بالسيرفر
// =============================================================================

const USER_TOKEN = localStorage.getItem('userToken');

// دالة API موحدة
async function callApi(endpoint, method = 'POST', body = {}) {
    if (!USER_TOKEN) {
        alert("Veuillez vous connecter !");
        throw new Error("Auth Error");
    }

    // إضافة الـ Lesson ID لكل الطلبات لربط البيانات
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

    // إنشاء ID فريد للدرس بناءً على الاسم
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
        div.style.width = '600px'; div.style.height = '800px'; // أبعاد مؤقتة
        div.style.marginBottom = '20px';
        DOM.wrapper.appendChild(div);
    }
    setupObserver();
}

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

    // استخدام Math.floor لمنع مشاكل الإزاحة
    const width = Math.floor(viewport.width);
    const height = Math.floor(viewport.height);

    div.style.width = `${width}px`;
    div.style.height = `${height}px`;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width; canvas.height = height;
    div.appendChild(canvas);

    await page.render({ canvasContext: ctx, viewport }).promise;

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
//  2. الشريط العائم السريع (Quick Toolbar)
// =============================================================================

document.addEventListener('mouseup', (e) => {
    const selection = window.getSelection();
    if (!selection || selection.toString().trim() === '') {
        // إخفاء الشريط إذا لم يكن هناك تحديد، بشرط عدم الضغط داخله
        if (!DOM.quickToolbar.contains(e.target) && !DOM.chatPopover.contains(e.target)) {
            DOM.quickToolbar.style.display = 'none';
        }
        return;
    }

    if (DOM.container.contains(selection.anchorNode)) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        DOM.quickToolbar.style.display = 'flex';
        DOM.quickToolbar.style.top = `${rect.top - 40}px`;
        DOM.quickToolbar.style.left = `${rect.left + (rect.width / 2)}px`;
    }
});

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
    } catch (e) { console.log('Highlight Error:', e); }
};

// =============================================================================
//  3. نظام المحادثة الذكي (Fixed Short Answers)
// =============================================================================

window.openAiChat = () => {
    const selection = window.getSelection();
    const text = selection.toString().trim();

    DOM.chatPopover.style.display = 'flex';
    const rect = DOM.quickToolbar.getBoundingClientRect();
    DOM.chatPopover.style.top = `${rect.top}px`;
    DOM.chatPopover.style.left = `${rect.left + 20}px`;

    if (text) {
        STATE.currentContext = text;
        DOM.chatInput.placeholder = "Posez une question sur ce texte...";
        DOM.chatInput.focus();
    }
    DOM.quickToolbar.style.display = 'none';
};

window.closeAiChat = () => {
    DOM.chatPopover.style.display = 'none';
};

window.submitAiQuery = async () => {
    const query = DOM.chatInput.value.trim();
    if (!query) return;

    addMessage(query, 'user');
    DOM.chatInput.value = '';

    // 🔥 التعديل: إجبار الذكاء الاصطناعي على الإيجاز الشديد
    const prompt = STATE.currentContext
        ? `Context: "${STATE.currentContext}"\n\nUser Question: ${query}\n\nInstruction: Answer strictly based on the context. Be very concise, direct, and short. Do not elaborate unless asked.`
        : query;

    try {
        addMessage('...', 'loading');
        const res = await callApi('ai/ask', 'POST', { question: prompt });

        DOM.chatHistory.querySelector('.msg-loading')?.remove();

        const answer = res.answer || res.result;
        addMessage(answer, 'ai');

        // حفظ المحادثة
        STATE.sessionData.chatHistory.push({ q: query, a: answer, ctx: STATE.currentContext });

    } catch (err) {
        DOM.chatHistory.querySelector('.msg-loading')?.remove();
        addMessage("Erreur: " + err.message, 'error');
    }

    STATE.currentContext = null;
};

function addMessage(text, type) {
    const div = document.createElement('div');
    div.className = `chat-message msg-${type}`;
    div.textContent = text;
    DOM.chatHistory.appendChild(div);
    DOM.chatHistory.scrollTop = DOM.chatHistory.scrollHeight;
}

// =============================================================================
//  4. الكويزات والفلاش كاردز (Nightmare Mode)
// =============================================================================

window.startQuizGeneration = async () => {
    DOM.quizModal.style.display = 'none';
    const difficulty = document.getElementById('quiz-difficulty').value;
    const type = document.getElementById('quiz-type').value;
    const count = document.getElementById('quiz-count').value;

    await generateContent('quiz', { difficulty, type, count });
};

window.generateContent = async (contentType, options = {}) => {
    DOM.resultsArea.innerHTML = '<div class="loader"><i class="fas fa-spinner fa-spin"></i> Génération...</div>';

    try {
        const text = await getPageText(STATE.currentPage);

        // استخدام أسماء المهام الجديدة التي حدثناها في الباك إند
        let endpoint = contentType === 'quiz' ? 'ai/generate-quiz-text' : 'ai/generate-flashcards-text';

        const payload = { text, ...options, language: 'fr' };
        const res = await callApi(endpoint, 'POST', payload);

        if (contentType === 'quiz') {
            const quizzes = res.questions || res.data || [];
            STATE.sessionData.quizzes.push(...quizzes);
            renderQuizzes(quizzes);
        } else {
            const cards = res.flashcards || res.cards || [];
            STATE.sessionData.flashcards.push(...cards);
            renderFlashcards(cards);
        }

    } catch (err) {
        DOM.resultsArea.innerHTML = `<div style="color:red">Erreur: ${err.message}</div>`;
    }
};

async function getPageText(pageNum) {
    const page = await STATE.pdfDoc.getPage(pageNum);
    const content = await page.getTextContent();
    return content.items.map(i => i.str).join(' ');
}

function renderQuizzes(list) {
    DOM.resultsArea.innerHTML = list.map((q, i) => `
        <div class="result-card">
            <div style="font-weight:bold; margin-bottom:8px;">
                <span style="color:red; font-size:10px;">[${q.difficulty || 'Quiz'}]</span> 
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
//  5. الخريطة الذهنية (Fixed Zoom & Pan)
// =============================================================================

window.generateMindMap = async () => {
    // تنظيف الحاويات
    DOM.mindMapPreview.innerHTML = '<div class="loader">...</div>';

    try {
        const text = await getPageText(STATE.currentPage);
        // نستخدم الاسم الجديد للمهمة الذي يقبله الباك إند
        const res = await callApi('ai/generate-mindmap-text', 'POST', { text });

        const markdown = res.markdown || res.data;
        STATE.sessionData.mindMapData = markdown;

        drawMindMap(markdown);

    } catch (err) {
        DOM.mindMapPreview.innerHTML = "Erreur MindMap";
        alert("Erreur MindMap: " + err.message);
    }
};

function drawMindMap(markdown) {
    if (!window.markmap) return;
    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();
    const { root } = transformer.transform(markdown);

    // 🔥 التعديل: تفعيل التكبير والتحريك (Zoom & Pan)
    const options = {
        zoom: true,
        pan: true,
        fitRatio: 1
    };

    // تنظيف الحاويات بالكامل
    DOM.mindMapPreview.innerHTML = '';
    DOM.mindMapFull.innerHTML = '';

    // إنشاء SVG جديد للنسخة المصغرة
    const svgPreview = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgPreview.style.width = "100%";
    svgPreview.style.height = "100%";
    DOM.mindMapPreview.appendChild(svgPreview);
    Markmap.create(svgPreview, options, root);

    // إنشاء SVG جديد للنسخة الكاملة
    const svgFull = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgFull.style.width = "100%";
    svgFull.style.height = "100%";
    DOM.mindMapFull.appendChild(svgFull);
    Markmap.create(svgFull, options, root);
}

// =============================================================================
//  6. نظام الحفظ والاسترجاع (Cloudinary Integration)
// =============================================================================

window.saveProgress = async () => {
    const btn = document.getElementById('btn-save-progress');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sauvegarde...';

    try {
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
        alert("فشل الحفظ: تأكد من إعدادات Cloudinary في السيرفر");
    }
};

async function loadSavedProgress() {
    try {
        const res = await callApi(`progress?lessonId=${STATE.lessonId}`, 'GET');

        if (res.success && res.data) {
            const data = res.data;

            // استعادة الشات
            if (data.chatHistory) {
                STATE.sessionData.chatHistory = data.chatHistory;
                data.chatHistory.forEach(msg => {
                    addMessage(msg.q, 'user');
                    addMessage(msg.a, 'ai');
                });
            }

            // استعادة الكويزات
            if (data.quizzes && data.quizzes.length > 0) {
                STATE.sessionData.quizzes = data.quizzes;
                renderQuizzes(data.quizzes);
            }

            // استعادة الفلاش كاردز
            if (data.flashcards && data.flashcards.length > 0) {
                STATE.sessionData.flashcards = data.flashcards;
                const current = DOM.resultsArea.innerHTML;
                renderFlashcards(data.flashcards);
                // ملاحظة: هذا يستبدل العرض الحالي، يمكن دمجه إذا أردت
            }

            // استعادة الخريطة
            if (data.mindMap) {
                STATE.sessionData.mindMapData = data.mindMap;
                drawMindMap(data.mindMap);
            }

            console.log("Session loaded successfully!");
        }
    } catch (err) {
        console.log("No saved session found.");
    }
}
// ============================================================
//  ملف: pdf-viewer.js
//  الوصف: المحرك المتقدم - تمرير عمودي، OCR هجين، QCM، وفلاش كاردز
// ============================================================

// --- 1. التعريفات والعناصر (DOM Elements) ---
const DOM = {
    // حاويات الشاشة والتحميل
    startContainer: document.getElementById('start-container'),
    mainLayout: document.getElementById('main-layout'),
    fileInput: document.getElementById('file-input'),
    loader: document.getElementById('loader-overlay'),
    loaderText: document.getElementById('loader-text'),

    // منطقة العرض
    viewerSection: document.getElementById('viewer-section'),
    currentPageDisplay: document.getElementById('current-page-display'),
    pageNav: document.getElementById('page-nav'),
    pageNum: document.getElementById('page-num'),
    pageCount: document.getElementById('page-count'),
    prevPageBtn: document.getElementById('prev-page'),
    nextPageBtn: document.getElementById('next-page'),

    // أدوات الذكاء الاصطناعي
    aiResults: document.getElementById('ai-results-area'),
    btnQuiz: document.getElementById('btn-quiz'),
    inpQuizCount: document.getElementById('quiz-count'),
    btnFlashcards: document.getElementById('btn-flashcards'),
    inpFlashcardCount: document.getElementById('flashcard-count'),
    btnMindmap: document.getElementById('btn-mindmap'),
    btnExplainPage: document.getElementById('btn-explain-page'),

    // النوافذ المنبثقة
    backdrop: document.getElementById('modal-backdrop'),
    explainModal: document.getElementById('explain-modal'),
    explainContent: document.getElementById('explain-content')
};

// --- 2. متغيرات الحالة (Global State) ---
const STATE = {
    pdfDoc: null,
    scale: 1.5,
    visiblePageNum: 1,
    currentFileId: null,
    // { page_1: { quiz: [], flashcards: [], mindmap: '' }, ... }
    pageContent: {}
};

// إعداد مكتبة PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// ============================================================
//  3. تحميل وفتح الملف
// ============================================================

DOM.fileInput.addEventListener('change', async function (e) {
    const file = e.target.files[0];
    if (!file || file.type !== 'application/pdf') {
        return alert('Please select a valid PDF file.');
    }

    showLoader('Loading PDF Pages...');

    // توليد ID فريد للملف لربط البيانات به
    STATE.currentFileId = `doc_${file.name.replace(/\s/g, '_')}_${file.size}`;

    // استرجاع بيانات محفوظة
    const savedData = localStorage.getItem(`smartCore_${STATE.currentFileId}`);
    if (savedData) STATE.pageContent = JSON.parse(savedData);

    try {
        const fileURL = URL.createObjectURL(file);
        const loadingTask = pdfjsLib.getDocument(fileURL);
        STATE.pdfDoc = await loadingTask.promise;

        DOM.startContainer.style.display = 'none';
        DOM.mainLayout.style.display = 'flex';
        DOM.pageNav.style.display = 'flex';
        DOM.pageCount.textContent = STATE.pdfDoc.numPages;

        await renderAllPages();
        hideLoader();
    } catch (err) {
        console.error('PDF Load Error:', err);
        alert('Error loading PDF.');
        hideLoader();
    }
});

async function renderAllPages() {
    DOM.viewerSection.innerHTML = '';
    for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'page-wrapper';
        wrapper.id = `page-container-${i}`;
        wrapper.dataset.pageNum = i;

        const canvas = document.createElement('canvas');
        canvas.id = `page-canvas-${i}`;

        const textLayer = document.createElement('div');
        textLayer.className = 'textLayer';
        textLayer.id = `text-layer-${i}`;

        wrapper.appendChild(canvas);
        wrapper.appendChild(textLayer);
        DOM.viewerSection.appendChild(wrapper);

        await renderSinglePage(i, canvas, textLayer);
    }
    setupScrollObserver();
}

async function renderSinglePage(pageNum, canvas, textLayerDiv) {
    try {
        const page = await STATE.pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: STATE.scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        textLayerDiv.style.width = `${viewport.width}px`;
        textLayerDiv.style.height = `${viewport.height}px`;

        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: viewport }).promise;

        const textContent = await page.getTextContent();
        pdfjsLib.renderTextLayer({
            textContent: textContent,
            container: textLayerDiv,
            viewport: viewport,
            textDivs: []
        });
    } catch (e) {
        console.error(`Error rendering page ${pageNum}:`, e);
    }
}

// ============================================================
//  4. مراقب التمرير (Scroll Observer)
// ============================================================

function setupScrollObserver() {
    const options = { root: DOM.viewerSection, threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const pageNum = parseInt(entry.target.dataset.pageNum);
                if (STATE.visiblePageNum !== pageNum) {
                    STATE.visiblePageNum = pageNum;
                    DOM.currentPageDisplay.textContent = pageNum;
                    DOM.pageNum.textContent = pageNum;
                    restoreSidebarContent(pageNum);
                }
            }
        });
    }, options);

    document.querySelectorAll('.page-wrapper').forEach(el => observer.observe(el));
}

// أزرار التنقل السريع
DOM.prevPageBtn.onclick = () => {
    if (STATE.visiblePageNum > 1) {
        document.getElementById(`page-container-${STATE.visiblePageNum - 1}`).scrollIntoView();
    }
};

DOM.nextPageBtn.onclick = () => {
    if (STATE.visiblePageNum < STATE.pdfDoc.numPages) {
        document.getElementById(`page-container-${STATE.visiblePageNum + 1}`).scrollIntoView();
    }
};

// ============================================================
//  5. المحرك الهجين (Hybrid Engine)
// ============================================================

async function preparePageContext(pageNum) {
    const page = await STATE.pdfDoc.getPage(pageNum);
    const textContent = await page.getTextContent();
    const rawText = textContent.items.map(i => i.str).join(' ');

    // إذا كان النص قليل جداً، نستخدم الصورة (OCR)
    if (!rawText || rawText.trim().length < 50) {
        const canvas = document.getElementById(`page-canvas-${pageNum}`);
        return { type: 'image', content: canvas.toDataURL('image/jpeg', 0.8) };
    }
    return { type: 'text', content: rawText };
}

async function callAiApi(endpoint, payload) {
    showLoader('AI is analyzing... 🧠');
    try {
        const res = await fetch(`/api/ai/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return await res.json();
    } catch (err) {
        console.error(err);
        alert('Connection Failed.');
        throw err;
    } finally {
        hideLoader();
    }
}

// ============================================================
//  6. ميزات الذكاء الاصطناعي
// ============================================================

// --- QCM Quiz ---
DOM.btnQuiz.onclick = async () => {
    const count = parseInt(DOM.inpQuizCount.value) || 5;
    const pageNum = STATE.visiblePageNum;
    try {
        const context = await preparePageContext(pageNum);
        const res = await callAiApi('generate-quiz', {
            count,
            type: 'QCM_MULTI',
            [context.type === 'image' ? 'image' : 'text']: context.content,
            mode: context.type === 'image' ? 'ocr' : 'text'
        });
        const questions = res.questions || res;
        savePageData(pageNum, 'quiz', questions);
        renderQuiz(questions);
    } catch (e) { }
};

function renderQuiz(questions) {
    DOM.aiResults.innerHTML = '';
    questions.forEach((q, qIndex) => {
        const card = document.createElement('div');
        card.className = 'note-card';

        let optionsHtml = '';
        q.options.forEach((opt, optIndex) => {
            optionsHtml += `
                <label class="qcm-option" id="q${qIndex}_opt${optIndex}">
                    <input type="checkbox" name="q_${qIndex}" value="${optIndex}">
                    <span>${opt}</span>
                </label>`;
        });

        card.innerHTML = `
            <h4>Q${qIndex + 1}: ${q.question}</h4>
            <div class="options-list">${optionsHtml}</div>
            <button class="primary-btn" style="width:100%; margin-top:10px; padding:8px;" onclick="validateAnswer(${qIndex}, [${q.correctOptionIndexes}])">
                Check Answer
            </button>
            <div id="feedback_q${qIndex}" class="qcm-feedback">
                <strong></strong>
                <p style="margin-top:10px; font-size:0.85rem;">${q.explanation}</p>
            </div>
        `;
        DOM.aiResults.appendChild(card);
    });
}

window.validateAnswer = function (qIndex, correctIndexes) {
    const selected = document.querySelectorAll(`input[name="q_${qIndex}"]:checked`);
    const userAnswers = Array.from(selected).map(cb => parseInt(cb.value));
    const feedbackDiv = document.getElementById(`feedback_q${qIndex}`);

    const isCorrect = userAnswers.length === correctIndexes.length &&
        userAnswers.every(val => correctIndexes.includes(val));

    const allOptions = document.querySelectorAll(`input[name="q_${qIndex}"]`);
    allOptions.forEach(input => {
        const parent = input.parentElement;
        const val = parseInt(input.value);
        parent.style.borderColor = '#475569';
        parent.style.background = 'transparent';

        if (correctIndexes.includes(val)) {
            parent.style.borderColor = '#10b981';
            parent.style.background = 'rgba(16, 185, 129, 0.1)';
        } else if (input.checked && !correctIndexes.includes(val)) {
            parent.style.borderColor = '#ef4444';
            parent.style.background = 'rgba(239, 68, 68, 0.1)';
        }
    });

    feedbackDiv.style.display = 'block';
    feedbackDiv.className = `qcm-feedback ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackDiv.querySelector('strong').textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect';
};

// --- Flashcards ---
DOM.btnFlashcards.onclick = async () => {
    const count = parseInt(DOM.inpFlashcardCount.value) || 6;
    const pageNum = STATE.visiblePageNum;
    try {
        const context = await preparePageContext(pageNum);
        const res = await callAiApi('generate-flashcards', {
            count,
            [context.type === 'image' ? 'image' : 'text']: context.content,
            mode: context.type === 'image' ? 'ocr' : 'text'
        });
        const cards = res.flashcards || res;
        savePageData(pageNum, 'flashcards', cards);
        renderFlashcards(cards);
    } catch (e) { }
};

function renderFlashcards(cards) {
    DOM.aiResults.innerHTML = '';
    cards.forEach(card => {
        const div = document.createElement('div');
        div.className = 'note-card';
        div.style.cursor = 'pointer';
        div.style.borderRight = '4px solid var(--primary-btn-bg)';
        div.dataset.flipped = 'false';
        div.innerHTML = `<strong>Q:</strong> ${card.front}`;

        div.onclick = () => {
            if (div.dataset.flipped === 'false') {
                div.innerHTML = `<span style="color:var(--primary-btn-bg)"><strong>A:</strong> ${card.back}</span>`;
                div.dataset.flipped = 'true';
            } else {
                div.innerHTML = `<strong>Q:</strong> ${card.front}`;
                div.dataset.flipped = 'false';
            }
        };
        DOM.aiResults.appendChild(div);
    });
}

// --- Mind Map ---
DOM.btnMindmap.onclick = async () => {
    const pageNum = STATE.visiblePageNum;
    try {
        const context = await preparePageContext(pageNum);
        const res = await callAiApi('generate-mindmap', {
            [context.type === 'image' ? 'image' : 'text']: context.content,
            mode: context.type === 'image' ? 'ocr' : 'text'
        });
        const markdown = res.markdown || res;
        savePageData(pageNum, 'mindmap', markdown);
        renderMindmap(markdown);
    } catch (e) { }
};

function renderMindmap(markdown) {
    DOM.aiResults.innerHTML = '';
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.width = '100%';
    svg.style.height = '350px';
    svg.style.background = '#0f172a';
    svg.style.borderRadius = '12px';
    DOM.aiResults.appendChild(svg);

    if (window.markmap) {
        const { Transformer, Markmap } = window.markmap;
        const { root } = new Transformer().transform(markdown);
        Markmap.create(svg, null, root);
    }
}

// --- Explain Page ---
DOM.btnExplainPage.onclick = async () => {
    const pageNum = STATE.visiblePageNum;
    const canvas = document.getElementById(`page-canvas-${pageNum}`);
    try {
        const res = await callAiApi('explain-page-image', {
            image: canvas.toDataURL('image/jpeg', 0.8),
            prompt: "Explain this educational page in detail. Use Arabic and French for technical terms."
        });
        showExplainModal(res.explanation || res.answer || res.text);
    } catch (e) { }
};

// ============================================================
//  7. الحفظ والتنسيق
// ============================================================

function savePageData(pageNum, key, data) {
    if (!STATE.pageContent[`page_${pageNum}`]) STATE.pageContent[`page_${pageNum}`] = {};
    STATE.pageContent[`page_${pageNum}`][key] = data;
    localStorage.setItem(`smartCore_${STATE.currentFileId}`, JSON.stringify(STATE.pageContent));
}

function restoreSidebarContent(pageNum) {
    const data = STATE.pageContent[`page_${pageNum}`];
    if (data) {
        if (data.quiz) renderQuiz(data.quiz);
        else if (data.flashcards) renderFlashcards(data.flashcards);
        else if (data.mindmap) renderMindmap(data.mindmap);
        else DOM.aiResults.innerHTML = '<div class="empty-state">No content generated yet.</div>';
    } else {
        DOM.aiResults.innerHTML = '<div class="empty-state">No content for page ' + pageNum + '.</div>';
    }
}

function showLoader(msg) {
    DOM.loaderText.textContent = msg;
    DOM.loader.style.display = 'flex';
}
function hideLoader() { DOM.loader.style.display = 'none'; }

function showExplainModal(text) {
    DOM.explainContent.innerHTML = text.replace(/\n/g, '<br>');
    DOM.backdrop.style.display = 'block';
    DOM.explainModal.style.display = 'flex';
}

window.closeModal = function () {
    DOM.backdrop.style.display = 'none';
    DOM.explainModal.style.display = 'none';
};
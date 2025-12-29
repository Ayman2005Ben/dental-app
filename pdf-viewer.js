// =============================================================================
//  SMART DENTAL VIEWER - TOKEN BASED CONTROLLER (Matches script.js)
// =============================================================================

// 👇 رابط السيرفر
const API_BASE_URL = "https://dental-app-he1p.onrender.com";

// إعداد PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// --- إدارة الحالة ---
const STATE = {
    pdfDoc: null,
    fileHash: null,
    scale: 1.2,
    currentPage: 1,
    tool: null,
    isDrawing: false,
    drawings: [],
    quizData: [],
    currentQuizIndex: 0,
    userAnswers: {},
    flashcardsData: [],
    currentFlashcardIndex: 0,
    mindMapData: null,
    pins: [],
    selection: { text: '', rect: null },
    sessionData: { quizzes: [], flashcards: [], mindMapData: null }
};

// =============================================================================
//  1. الاتصال بالسيرفر (Using Bearer Token like script.js) 🔌
// =============================================================================

async function callApi(endpoint, body = {}) {
    // 1. جلب التوكن من التخزين المحلي (مثلما يفعل script.js)
    const token = localStorage.getItem('userToken');

    if (!token) {
        alert("Veuillez vous connecter d'abord (Token manquant) !");
        // يمكن توجيهه لصفحة الدخول إذا أردت
        // window.location.href = 'index.html'; 
        throw new Error("No Token");
    }

    try {
        const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // ✅ التصحيح الأساسي هنا
            },
            body: JSON.stringify(body)
        });

        if (res.status === 401) {
            alert("Session expirée. Veuillez vous reconnecter.");
            throw new Error("Unauthorized");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}

// دالة استخراج النص
async function getSmartText(scopeInputName) {
    if (!STATE.pdfDoc) return "";
    const scopeEl = document.querySelector(`input[name="${scopeInputName}"]:checked`);
    const scope = scopeEl ? scopeEl.value : 'page';
    let text = "";

    if (scope === 'page') {
        const page = await STATE.pdfDoc.getPage(STATE.currentPage);
        const content = await page.getTextContent();
        text = content.items.map(i => i.str).join(' ');
    } else {
        const maxPages = Math.min(STATE.pdfDoc.numPages, 15);
        for (let i = 1; i <= maxPages; i++) {
            const page = await STATE.pdfDoc.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(' ') + "\n";
        }
    }
    return text;
}

// =============================================================================
//  2. تحميل PDF والعرض 🎨
// =============================================================================

const fileInput = document.getElementById('file-input');

async function handleFileUpload(input) {
    const file = input.files[0];
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();
    const spark = new SparkMD5.ArrayBuffer();
    spark.append(arrayBuffer);
    STATE.fileHash = spark.end();

    const loadingTask = pdfjsLib.getDocument(arrayBuffer);
    STATE.pdfDoc = await loadingTask.promise;

    const container = document.getElementById('pdf-wrapper');
    if (container) container.innerHTML = '';

    for (let i = 1; i <= STATE.pdfDoc.numPages; i++) {
        await renderPage(i, container || document.getElementById('pdf-container'));
    }

    setupPageObserver();
    loadSavedProgress();
}

if (fileInput) {
    fileInput.addEventListener('change', (e) => handleFileUpload(e.target));
}

async function renderPage(num, container) {
    const page = await STATE.pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: STATE.scale });

    const wrapper = document.createElement('div');
    wrapper.className = 'page-container';
    wrapper.id = `page-${num}`;
    wrapper.style.width = `${viewport.width}px`;
    wrapper.style.height = `${viewport.height}px`;
    wrapper.style.marginBottom = '20px';
    wrapper.style.position = 'relative';

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const textLayer = document.createElement('div');
    textLayer.className = 'textLayer';
    textLayer.style.width = `${viewport.width}px`;
    textLayer.style.height = `${viewport.height}px`;
    textLayer.style.setProperty('--scale-factor', STATE.scale);

    const drawCanvas = document.createElement('canvas');
    drawCanvas.className = 'drawLayer';
    drawCanvas.id = `draw-${num}`;
    drawCanvas.width = viewport.width;
    drawCanvas.height = viewport.height;
    drawCanvas.style.position = 'absolute';
    drawCanvas.style.top = '0';
    drawCanvas.style.left = '0';
    drawCanvas.style.pointerEvents = 'none';
    drawCanvas.style.zIndex = '10';

    wrapper.append(canvas, textLayer, drawCanvas);
    container.appendChild(wrapper);

    await page.render({ canvasContext: ctx, viewport }).promise;

    const textContent = await page.getTextContent();
    pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayer,
        viewport: viewport,
        textDivs: []
    });

    setupDrawingLogic(drawCanvas, num);
}

function setupPageObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                STATE.currentPage = parseInt(entry.target.id.split('-')[1]);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.page-container').forEach(p => observer.observe(p));
}

// =============================================================================
//  3. منطق الرسم ✏️
// =============================================================================

window.setTool = function (t) {
    STATE.tool = (STATE.tool === t) ? null : t;
    ['pen', 'highlighter', 'eraser'].forEach(id => {
        const btn = document.getElementById(`btn-${id}`);
        if (btn) {
            btn.style.background = (STATE.tool === id) ? '#eff6ff' : '';
            btn.classList.toggle('active', STATE.tool === id);
        }
    });
    document.querySelectorAll('.drawLayer').forEach(el => {
        el.style.pointerEvents = STATE.tool ? 'auto' : 'none';
        el.style.cursor = STATE.tool ? 'crosshair' : 'default';
    });
};

function setupDrawingLogic(canvas, pageNum) {
    const ctx = canvas.getContext('2d');
    let lastX, lastY;

    canvas.addEventListener('mousedown', e => {
        if (!STATE.tool) return;
        STATE.isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        const color = document.getElementById('color-picker')?.value || '#ff0000';
        STATE.drawings.push({
            page: pageNum, tool: STATE.tool, color: color, points: [{ x: lastX, y: lastY }]
        });
    });

    canvas.addEventListener('mousemove', e => {
        if (!STATE.isDrawing || !STATE.tool) return;
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        if (STATE.tool === 'pen') {
            ctx.strokeStyle = document.getElementById('color-picker')?.value || '#ff0000';
            ctx.lineWidth = 2; ctx.globalCompositeOperation = 'source-over';
        } else if (STATE.tool === 'highlighter') {
            ctx.strokeStyle = 'rgba(255, 255, 0, 0.4)';
            ctx.lineWidth = 15; ctx.globalCompositeOperation = 'multiply';
        } else {
            ctx.lineWidth = 20; ctx.globalCompositeOperation = 'destination-out';
        }
        ctx.beginPath(); ctx.moveTo(lastX, lastY); ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke();
        if (STATE.drawings.length > 0) {
            STATE.drawings[STATE.drawings.length - 1].points.push({ x: e.offsetX, y: e.offsetY });
        }
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mouseup', () => STATE.isDrawing = false);
    canvas.addEventListener('mouseleave', () => STATE.isDrawing = false);
}

function redrawAllDrawings() {
    STATE.drawings.forEach(d => {
        const cvs = document.getElementById(`draw-${d.page}`);
        if (!cvs) return;
        const ctx = cvs.getContext('2d');
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        if (d.tool === 'pen') {
            ctx.strokeStyle = d.color; ctx.lineWidth = 2; ctx.globalCompositeOperation = 'source-over';
        } else if (d.tool === 'highlighter') {
            ctx.strokeStyle = 'rgba(255, 255, 0, 0.4)'; ctx.lineWidth = 15; ctx.globalCompositeOperation = 'multiply';
        } else {
            ctx.lineWidth = 20; ctx.globalCompositeOperation = 'destination-out';
        }
        ctx.beginPath();
        if (d.points.length > 0) ctx.moveTo(d.points[0].x, d.points[0].y);
        for (let i = 1; i < d.points.length; i++) ctx.lineTo(d.points[i].x, d.points[i].y);
        ctx.stroke();
    });
}

// =============================================================================
//  4. الكويز (Carousel) 🧠
// =============================================================================

const quizBtn = document.getElementById('generate-quiz-btn');
if (quizBtn) {
    quizBtn.addEventListener('click', async () => {
        const container = document.getElementById('quiz-container');
        container.innerHTML = '<div style="text-align:center; padding:20px;"><i class="fas fa-spinner fa-spin"></i> Génération...</div>';

        try {
            const text = await getSmartText('quiz-scope');
            const res = await callApi('ai/generate-quiz-text', { text, count: 5 });

            STATE.quizData = res.questions || res.data || [];
            if (Array.isArray(STATE.quizData) && STATE.quizData.length > 0) {
                STATE.sessionData.quizzes = STATE.quizData;
                STATE.currentQuizIndex = 0;
                STATE.userAnswers = {};
                renderQuizQuestion(0);
            } else {
                container.innerHTML = '<p style="color:red; text-align:center;">Aucune question générée.</p>';
            }
        } catch (err) {
            container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${err.message}</div>`;
        }
    });
}

function renderQuizQuestion(index) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    if (index < 0 || index >= STATE.quizData.length) return;
    const qData = STATE.quizData[index];
    const template = document.getElementById('quiz-card-template');
    if (!template) return;

    const clone = template.content.cloneNode(true);
    clone.querySelector('.quiz-progress').textContent = `Question ${index + 1} / ${STATE.quizData.length}`;
    clone.querySelector('.question-text').textContent = qData.question;
    const optionsContainer = clone.querySelector('.options-container');

    if (qData.options && Array.isArray(qData.options)) {
        qData.options.forEach((opt, optIdx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            if (STATE.userAnswers[index] !== undefined) {
                btn.disabled = true;
                const correctIndices = qData.correctOptionIndexes || [0];
                if (correctIndices.includes(optIdx)) btn.classList.add('correct');
                else if (STATE.userAnswers[index] === optIdx) btn.classList.add('wrong');
            } else {
                btn.onclick = () => {
                    STATE.userAnswers[index] = optIdx;
                    renderQuizQuestion(index);
                };
            }
            optionsContainer.appendChild(btn);
        });
    }

    const prevBtn = clone.querySelector('.btn-prev');
    const nextBtn = clone.querySelector('.btn-next');
    if (prevBtn) {
        prevBtn.disabled = index === 0;
        prevBtn.onclick = () => renderQuizQuestion(index - 1);
    }
    if (nextBtn) {
        nextBtn.textContent = index === STATE.quizData.length - 1 ? 'Terminer' : 'Suivant';
        nextBtn.onclick = () => {
            if (index < STATE.quizData.length - 1) renderQuizQuestion(index + 1);
            else alert("Quiz terminé !");
        };
    }
    container.appendChild(clone);
}

// =============================================================================
//  5. الفلاش كاردز 🃏
// =============================================================================

const cardsBtn = document.getElementById('generate-flashcards-btn');
if (cardsBtn) {
    cardsBtn.addEventListener('click', async () => {
        const container = document.getElementById('flashcards-container');
        container.innerHTML = '<div style="text-align:center; padding:20px;"><i class="fas fa-spinner fa-spin"></i> Génération...</div>';
        try {
            const text = await getSmartText('cards-scope');
            const res = await callApi('ai/generate-flashcards-text', { text, count: 8 });
            STATE.flashcardsData = res.flashcards || res.cards || [];
            if (Array.isArray(STATE.flashcardsData) && STATE.flashcardsData.length > 0) {
                STATE.sessionData.flashcards = STATE.flashcardsData;
                STATE.currentFlashcardIndex = 0;
                renderSingleFlashcard(0);
            } else {
                container.innerHTML = '<p style="text-align:center;">Aucune carte générée.</p>';
            }
        } catch (err) {
            container.innerHTML = `<div style="color:red; padding:10px;">Erreur: ${err.message}</div>`;
        }
    });
}

function renderSingleFlashcard(index) {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '';
    if (index < 0 || index >= STATE.flashcardsData.length) return;
    const cardData = STATE.flashcardsData[index];
    const template = document.getElementById('flashcard-template');
    if (!template) return;

    const clone = template.content.cloneNode(true);
    clone.querySelector('.front-content').textContent = cardData.front;
    clone.querySelector('.back-content').textContent = cardData.back;
    const wrapper = clone.querySelector('.flashcard-wrapper');
    wrapper.onclick = () => wrapper.classList.toggle('flipped');
    container.appendChild(clone);

    const controls = document.createElement('div');
    controls.style.cssText = "display: flex; justify-content: space-between; margin-top: 15px; align-items: center;";
    controls.innerHTML = `
        <button class="nav-btn" id="fc-prev" ${index === 0 ? 'disabled' : ''} style="background:#cbd5e1; border:none; padding:8px; border-radius:5px; cursor:pointer;"><i class="fas fa-arrow-left"></i></button>
        <span style="font-weight:bold; color:#64748b;">${index + 1} / ${STATE.flashcardsData.length}</span>
        <button class="nav-btn" id="fc-next" style="background:var(--primary); color:white; border:none; padding:8px; border-radius:5px; cursor:pointer;"><i class="fas fa-arrow-right"></i></button>
    `;
    container.appendChild(controls);
    document.getElementById('fc-prev').onclick = () => renderSingleFlashcard(index - 1);
    document.getElementById('fc-next').onclick = () => {
        if (index < STATE.flashcardsData.length - 1) renderSingleFlashcard(index + 1);
    };
}

// =============================================================================
//  6. المايند ماب 🌳
// =============================================================================

const mapBtn = document.getElementById('generate-mindmap-btn');
if (mapBtn) {
    mapBtn.addEventListener('click', async () => {
        const svgEl = document.getElementById('mindmap-svg');
        if (!svgEl) return;
        svgEl.innerHTML = '';
        const container = svgEl.parentElement;
        container.style.position = 'relative';

        const loader = document.createElement('div');
        loader.textContent = 'Génération de la Map...';
        loader.style.cssText = 'position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);';
        container.appendChild(loader);

        try {
            const text = await getSmartText('quiz-scope');
            const res = await callApi('ai/generate-mindmap-text', { text });
            const markdown = res.markdown || res.data;
            STATE.sessionData.mindMapData = markdown;
            loader.remove();
            if (window.markmap) {
                const { Transformer, Markmap } = window.markmap;
                const transformer = new Transformer();
                const { root } = transformer.transform(markdown);
                Markmap.create(svgEl, null, root);
                const dlBtn = document.getElementById('download-map-btn');
                if (dlBtn) dlBtn.style.display = 'block';
            }
        } catch (err) {
            loader.textContent = "Erreur: " + err.message;
            loader.style.color = 'red';
        }
    });
}

// =============================================================================
//  7. الحفظ والاسترجاع 💾
// =============================================================================

const saveBtn = document.getElementById('save-progress-btn');
if (saveBtn) {
    saveBtn.addEventListener('click', async () => {
        if (!STATE.fileHash) return alert("Aucun fichier ouvert !");
        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
        try {
            const payload = {
                drawings: STATE.drawings,
                pins: STATE.pins,
                quizzes: STATE.sessionData.quizzes,
                flashcards: STATE.sessionData.flashcards,
                mindMapData: STATE.sessionData.mindMapData
            };
            const res = await callApi('progress/save', {
                lessonId: STATE.fileHash,
                progressData: payload
            });
            if (res.success) {
                saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved!';
                setTimeout(() => saveBtn.innerHTML = originalText, 2000);
            }
        } catch (e) {
            saveBtn.innerHTML = '<i class="fas fa-times"></i> Error';
            setTimeout(() => saveBtn.innerHTML = originalText, 2000);
        }
    });
}

async function loadSavedProgress() {
    if (!STATE.fileHash) return;
    try {
        const token = localStorage.getItem('userToken');
        if (!token) return;

        const res = await fetch(`${API_BASE_URL}/api/progress?lessonId=${STATE.fileHash}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (res.status === 401) return;

        const json = await res.json();
        if (json.success && json.data) {
            const data = json.data.progressData || json.data;
            STATE.drawings = data.drawings || [];
            redrawAllDrawings();

            if (data.quizzes && data.quizzes.length > 0) {
                STATE.sessionData.quizzes = data.quizzes;
                const rBtn = document.getElementById('restore-quiz-btn');
                if (rBtn) {
                    rBtn.style.display = 'flex';
                    rBtn.innerHTML = `<i class="fas fa-history"></i> Reprendre Quiz (${data.quizzes.length})`;
                }
            }
            if (data.flashcards && data.flashcards.length > 0) {
                STATE.sessionData.flashcards = data.flashcards;
                const rBtn = document.getElementById('restore-cards-btn');
                if (rBtn) {
                    rBtn.style.display = 'flex';
                    rBtn.innerHTML = `<i class="fas fa-history"></i> Reprendre Cartes (${data.flashcards.length})`;
                }
            }
            if (data.mindMapData) {
                STATE.sessionData.mindMapData = data.mindMapData;
                const rBtn = document.getElementById('restore-map-btn');
                if (rBtn) rBtn.style.display = 'flex';
            }
        }
    } catch (e) { console.log("New Session"); }
}

const restoreQuizBtn = document.getElementById('restore-quiz-btn');
if (restoreQuizBtn) {
    restoreQuizBtn.onclick = () => {
        STATE.quizData = STATE.sessionData.quizzes;
        renderQuizQuestion(0);
        restoreQuizBtn.style.display = 'none';
    };
}
const restoreCardsBtn = document.getElementById('restore-cards-btn');
if (restoreCardsBtn) {
    restoreCardsBtn.onclick = () => {
        STATE.flashcardsData = STATE.sessionData.flashcards;
        renderSingleFlashcard(0);
        restoreCardsBtn.style.display = 'none';
    };
}
const restoreMapBtn = document.getElementById('restore-map-btn');
if (restoreMapBtn) {
    restoreMapBtn.onclick = () => {
        const { Transformer, Markmap } = window.markmap;
        const transformer = new Transformer();
        const { root } = transformer.transform(STATE.sessionData.mindMapData);
        Markmap.create(document.getElementById('mindmap-svg'), null, root);
        restoreMapBtn.style.display = 'none';
    };
}

// =============================================================================
//  8. أدوات إضافية (AI Selection & Pins) 🤖
// =============================================================================

document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    const toolbar = document.getElementById('selection-toolbar');

    if (sel.isCollapsed || !document.getElementById('pdf-wrapper')?.contains(sel.anchorNode)) {
        if (toolbar) toolbar.style.display = 'none';
        return;
    }

    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    STATE.selection.text = sel.toString();

    if (toolbar) {
        toolbar.style.top = `${rect.top + window.scrollY - 50}px`;
        toolbar.style.left = `${rect.left + (rect.width / 2) - 100}px`;
        toolbar.style.display = 'flex';
    }
});

window.highlightSelection = function (color) {
    document.getElementById('selection-toolbar').style.display = 'none';
};

window.askAiAboutSelection = function () {
    const modal = document.getElementById('ai-modal');
    const answerBox = document.getElementById('ai-answer-text');
    modal.style.display = 'flex';
    answerBox.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Réflexion...';

    callApi('ai/ask-dentist', { text: STATE.selection.text, question: "Explique ceci en détail." })
        .then(res => {
            answerBox.innerHTML = marked.parse(res.answer || "Pas de réponse.");
        })
        .catch(e => {
            answerBox.textContent = "Erreur: " + e.message;
        });

    document.getElementById('selection-toolbar').style.display = 'none';
};
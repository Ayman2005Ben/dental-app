// pdf-viewer.js

// --- helpers ---
function qs(s, r = document) { return r.querySelector(s); }
function qsa(s, r = document) { return Array.from(r.querySelectorAll(s)); }
function getParam(name) { return new URLSearchParams(location.search).get(name); }
function show(el) { el.style.display = 'block'; }
function hide(el) { el.style.display = 'none'; }
function notifyResult(msg) {
  const box = qs('#resultPopup');
  box.textContent = msg;
  show(box);
  setTimeout(() => hide(box), 6000);
}

// --- pdf.js setup ---
const src = getParam('src'); // filePath القادم من الرابط
if (!src) {
  alert('Missing ?src= path');
  throw new Error('Missing src');
}
const viewer = qs('#viewer');

let pdfDoc = null;
let currentPage = 1;
let pageRendering = false;

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

(async function init() {
  pdfDoc = await pdfjsLib.getDocument(src).promise;
  renderPage(currentPage);
  updatePageInfo();
})();

function updatePageInfo() {
  qs('#pageInfo').textContent = `Page ${currentPage} / ${pdfDoc ? pdfDoc.numPages : '?'}`;
}

async function renderPage(num) {
  pageRendering = true;
  viewer.innerHTML = ''; // صفحة واحدة في المينيموم (نقدر نضيف تعدد لاحقًا)

  const page = await pdfDoc.getPage(num);
  const viewport = page.getViewport({ scale: 1.5 });

  const pageDiv = document.createElement('div');
  pageDiv.className = 'page';
  pageDiv.style.width = `${viewport.width}px`;
  pageDiv.style.height = `${viewport.height}px`;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  pageDiv.appendChild(canvas);
  viewer.appendChild(pageDiv);

  await page.render({ canvasContext: ctx, viewport }).promise;

  // text layer
  const textContent = await page.getTextContent();
  const textLayerDiv = document.createElement('div');
  textLayerDiv.className = 'textLayer';
  pageDiv.appendChild(textLayerDiv);

  pdfjsLib.renderTextLayer({
    textContent,
    container: textLayerDiv,
    viewport,
  });

  pageRendering = false;
}

// --- paging ---
qs('#btnPrev').addEventListener('click', () => {
  if (pageRendering || currentPage <= 1) return;
  currentPage--;
  renderPage(currentPage);
  updatePageInfo();
});
qs('#btnNext').addEventListener('click', () => {
  if (pageRendering || !pdfDoc || currentPage >= pdfDoc.numPages) return;
  currentPage++;
  renderPage(currentPage);
  updatePageInfo();
});

// --- selection helpers ---
function getSelectedTextAndRanges() {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed) return null;

  // نتأكد أن الاختيار داخل textLayer
  const anchor = sel.anchorNode && sel.anchorNode.parentElement;
  if (!anchor || !anchor.closest('.textLayer')) return null;

  const text = sel.toString();
  const range = sel.getRangeAt(0);
  return { text, range };
}

function wrapRange(range, className, style = '') {
  const span = document.createElement('span');
  span.className = className;
  if (style) span.setAttribute('style', style);
  range.surroundContents(span);
}

// --- actions ---
qs('#btnHighlight').addEventListener('click', () => {
  const sel = getSelectedTextAndRanges();
  if (!sel) return notifyResult('Select text first.');

  try {
    wrapRange(sel.range, 'highlight');
    window.getSelection().removeAllRanges();
  } catch (e) {
    notifyResult('Unable to highlight this selection (try a smaller range).');
  }
});

qs('#btnUnderline').addEventListener('click', () => {
  const sel = getSelectedTextAndRanges();
  if (!sel) return notifyResult('Select text first.');
  try {
    wrapRange(sel.range, '', 'text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px;');
    window.getSelection().removeAllRanges();
  } catch (e) {
    notifyResult('Unable to underline this selection.');
  }
});

const notePopup = qs('#notePopup');
qs('#btnNote').addEventListener('click', () => {
  const sel = getSelectedTextAndRanges();
  if (!sel) return notifyResult('Select text first.');
  // نخزّن النص المحدد مؤقتًا على العنصر
  notePopup.dataset.selection = sel.text;
  qs('#noteText').value = '';
  show(notePopup);
});
qs('#btnCloseNote').addEventListener('click', () => hide(notePopup));
qs('#btnSaveNote').addEventListener('click', () => {
  const text = notePopup.dataset.selection || '';
  const note = qs('#noteText').value.trim();
  hide(notePopup);
  if (!note) return;
  // الآن فقط نعرضها. لاحقًا نقدر نخزنها بالباك-إند.
  notifyResult(`Saved note for: "${text}"\n\n${note}`);
});

// Translate via backend
qs('#btnTranslate').addEventListener('click', async () => {
  const sel = getSelectedTextAndRanges();
  if (!sel) return notifyResult('Select text first.');

  const token = localStorage.getItem('token'); // نفس ما تستعمله واجهتك
  if (!token) return notifyResult('No token found. Login first.');

  try {
    const resp = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ text: sel.text, targetLang: 'ar' }),
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data?.message || 'Translate failed');
    notifyResult(`Translation:\n${data.translation || data.result || JSON.stringify(data)}`);
  } catch (e) {
    notifyResult(`Translate error: ${e.message}`);
  }
});

// Ask AI via backend
qs('#btnAskAI').addEventListener('click', async () => {
  const sel = getSelectedTextAndRanges();
  if (!sel) return notifyResult('Select text first.');

  const token = localStorage.getItem('token');
  if (!token) return notifyResult('No token found. Login first.');

  try {
    const resp = await fetch('/api/ai/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        prompt: `Explain plainly (and briefly) this excerpt:\n\n${sel.text}`,
      }),
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data?.message || 'AI request failed');
    notifyResult(`AI:\n${data.text || data.answer || data.result || JSON.stringify(data)}`);
  } catch (e) {
    notifyResult(`AI error: ${e.message}`);
  }
});

// utils/aiClient.js
// عميل بسيط لـ Groq مع تدوير مفاتيح الـ API (key rotation) وتبريد عند 429

const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));

function parseKeys(envVar) {
  // مثال في .env:
  // GROQ_API_KEYS=gsk_xxx1,gsk_xxx2,gsk_xxx3
  return (process.env[envVar] || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
}

function makePool(keys, cooldownSec = 60) {
  let i = 0;
  const state = keys.map(k => ({ key: k, cooldownUntil: 0 }));
  const now = () => Date.now();

  function next() {
    const t = now();
    // جرّب مفاتيح متتالية حتى تجد مفتاح غير مُبَرَّد
    for (let tries = 0; tries < state.length; tries++) {
      const idx = (i + tries) % state.length;
      if (state[idx].cooldownUntil <= t) {
        i = idx + 1;
        return { index: idx, key: state[idx].key };
      }
    }
    // لو كلها باردة: اختر الأقل انتظارًا
    let best = 0;
    for (let j = 1; j < state.length; j++) {
      if (state[j].cooldownUntil < state[best].cooldownUntil) best = j;
    }
    i = best + 1;
    return { index: best, key: state[best].key };
  }

  function coolDown(index, seconds = cooldownSec) {
    if (state[index]) state[index].cooldownUntil = now() + (seconds * 1000);
  }

  return { next, coolDown, size: () => state.length };
}

const groqKeys = parseKeys('GROQ_API_KEYS');
const groqPool = makePool(groqKeys);

async function groqChatOnce({ messages, model }) {
  if (groqPool.size() === 0) {
    throw new Error('No GROQ_API_KEYS configured in .env');
  }

  const pick = groqPool.next();

  const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${pick.key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: model || process.env.DQ_AI_MODEL_GROQ || 'openai/gpt-oss-20b',
      messages,
      temperature: 0.2,
      stream: false
    })
  });

  if (resp.status === 429) {
    // هدّي المفتاح دقيقة وحاول بغيره
    groqPool.coolDown(pick.index, 60);
    throw new Error('GROQ_429');
  }

  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    throw new Error(`GROQ_ERR ${resp.status}: ${text}`);
  }

  const data = await resp.json().catch(() => ({}));
  return data?.choices?.[0]?.message?.content?.trim() || '';
}

async function groqChat({ messages, model, retries = 3 }) {
  let lastErr;
  for (let r = 0; r < retries; r++) {
    try {
      return await groqChatOnce({ messages, model });
    } catch (e) {
      lastErr = e;
      // لو كان 429 جرّب محاولة ثانية بمفتاح جديد
      if (String(e.message).includes('GROQ_429')) continue;
      break; // أخطاء أخرى: اخرج فورًا
    }
  }
  throw lastErr || new Error('GROQ_FAILED');
}

module.exports = { groqChat };

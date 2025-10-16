// routes/translateRoutes.js
const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware'); // ← صحيح مع شجرتك
const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));

router.post('/', protect, async (req, res) => {
  try {
    const { text, target = 'ar', source = 'auto' } = req.body || {};
    if (!text || !text.trim()) return res.status(400).json({ message: 'No text' });

    const url = process.env.LIBRE_TRANSLATE_URL || 'https://libretranslate.com/translate';
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ q: text, source, target, format: 'text' })
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => '');
      return res.status(502).json({ message: 'Translate upstream error', detail: errText });
    }

    const data = await r.json().catch(() => ({}));
    res.json({ translated: data?.translatedText || '' });
  } catch (e) {
    console.error('translate error:', e);
    res.status(500).json({ message: 'Translate server error' });
  }
});

module.exports = router;

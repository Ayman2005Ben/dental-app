// DENTAL-QUEST-BACKEND/routes/flashcardRoutes.js

const express = require('express');
const router = express.Router();

// --- ✅ تأكد من إضافة "getFlashcards" هنا ---
const { createFlashcard, getFlashcards } = require('../controllers/flashcardController');
const { protect } = require('../middleware/authMiddleware');

// --- ✅ تم دمج المسارين معًا ---
// POST /api/flashcards (لإنشاء بطاقة جديدة)
// GET  /api/flashcards (لجلب كل البطاقات)
router.route('/')
    .post(protect, createFlashcard)
    .get(protect, getFlashcards);

module.exports = router;
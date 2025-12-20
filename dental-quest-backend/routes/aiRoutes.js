// routes/aiRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
// تأكد من مسار ملف الحماية authMiddleware عندك
const { protect } = require('../middleware/authMiddleware');
const { askAI } = require('../controllers/aiController');

// استيراد جميع الدوال من geminiController
const {
    handleImageQuery,
    handleAudioQuery,

    // دوال التعامل مع الملفات (للداشبورد)
    generateQuiz,
    generateFlashcards,
    generateSummary,
    translateContent,
    generateMindMap,

    // دالة تقييم النحت
    handleSculptureEvaluation,

    // ✅✅✅ الدوال الجديدة للتعامل مع النصوص (مهمة جداً لـ pdf-viewer.js)
    generateQuizFromText,
    generateFlashcardsFromText,
    generateMindMapFromText

} = require('../controllers/geminiController');

// --- إعداد Multer (للتعامل مع رفع الملفات في الذاكرة) ---
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 25 * 1024 * 1024 } // الحد الأقصى 25 ميجا
});

// ============================================================
// تعريف المسارات (Endpoints)
// ============================================================

// 1. الشات العام (Groq/Gemini)
router.post('/ask', protect, askAI);

// 2. تحليل الوسائط (صور وصوت)
router.post('/image', protect, upload.single('image'), handleImageQuery);
router.post('/audio', protect, upload.single('audio'), handleAudioQuery);

// 3. أدوات توليد المحتوى من ملفات PDF (رفع ملف كامل)
router.post('/generate-quiz', protect, upload.single('pdfFile'), generateQuiz);
router.post('/generate-flashcards', protect, upload.single('pdfFile'), generateFlashcards);
router.post('/generate-summary', protect, upload.single('pdfFile'), generateSummary);
router.post('/generate-mindmap', protect, upload.single('pdfFile'), generateMindMap);

// 4. الترجمة
router.post('/translate', protect, translateContent);

// 5. تقييم النحت (Sculpture Evaluation)
router.post('/evaluate', protect, upload.array('images', 3), handleSculptureEvaluation);


// ============================================================
// ✅✅✅ المسارات الجديدة (Text-Based Routes)
// هذه المسارات تستقبل "نصاً" بدلاً من ملف، وهي التي يستخدمها pdf-viewer.js
// ============================================================

router.post('/generate-quiz-text', protect, generateQuizFromText);
router.post('/generate-flashcards-text', protect, generateFlashcardsFromText);
router.post('/generate-mindmap-text', protect, generateMindMapFromText);


module.exports = router;
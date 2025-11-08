// routes/aiRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { protect } = require('../middleware/authMiddleware');
const { askAI } = require('../controllers/aiController');

// استيراد كل الدوال المطلوبة من geminiController
// ▼▼▼ هذا هو الكود الصحيح (الكامل) ▼▼▼
const { 
    handleImageQuery, 
    handleAudioQuery,
    generateQuiz,
    generateFlashcards,
    generateSummary,
    translateContent,
    generateMindMap,
    handleSculptureEvaluation // <-- قم بإضافة هذا السطر
} = require('../controllers/geminiController');

// --- إعداد Multer ---
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage, 
    limits: { fileSize: 25 * 1024 * 1024 }
});

// --- المسارات ---
router.post('/ask', protect, askAI);
router.post('/image', protect, upload.single('image'), handleImageQuery);
router.post('/audio', protect, upload.single('audio'), handleAudioQuery);
router.post('/generate-quiz', protect, upload.single('pdfFile'), generateQuiz);
router.post('/generate-flashcards', protect, upload.single('pdfFile'), generateFlashcards);
router.post('/generate-summary', protect, upload.single('pdfFile'), generateSummary);
router.post('/translate', protect, translateContent);
router.post('/generate-mindmap', protect, upload.single('pdfFile'), generateMindMap);

// ▼▼▼ [إضافة جديدة] مسار تقييم النحت ▼▼▼
// نستخدم upload.array('images', 3) لاستقبال 3 صور كحد أقصى
router.post(
    '/evaluate', 
    protect, 
    upload.array('images', 3), 
    handleSculptureEvaluation
);
// ▲▲▲ نهاية الإضافة ▲▲▲


module.exports = router;
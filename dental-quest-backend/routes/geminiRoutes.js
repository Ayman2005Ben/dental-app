// routes/geminiRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { protect } = require('../middleware/authMiddleware');

// استدعاء جميع الدوال من الكنترولر
const { 
    handleImageQuery, 
    handleAudioQuery,
    generateMindMap,
    generateSummary,
    generateQuiz,
    generateFlashcards,
    translateContent
} = require('../controllers/geminiController');

// --- إعداد Multer ---
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // حد أقصى لحجم الملف 10 ميجابايت
});

// --- دالة مخصصة لمعالجة أخطاء Multer ---
function handleMulterError(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        console.error('[Multer Error]', err.message);
        return res.status(400).json({ 
            message: `File upload error: ${err.message}.`,
            code: err.code
        });
    } else if (err) {
        console.error('[Unknown Upload Error]', err);
        return res.status(500).json({ message: 'An unexpected error occurred during file upload.' });
    }
    next();
}

// === المسارات الخاصة بـ Gemini ===

// 🖼️ تحليل الصور (يستخدم 'image')
router.post(
    '/image', 
    protect, 
    upload.single('image'),
    handleMulterError,
    handleImageQuery
);

// 🎧 تحليل الصوت (يستخدم 'audio')
router.post(
    '/audio', 
    protect, 
    upload.single('audio'),
    handleMulterError,
    handleAudioQuery
);

// 🧠 توليد الخريطة الذهنية (يستخدم 'pdfFile')
router.post(
    '/generateMindMap',
    protect,
    upload.single('pdfFile'), // ✅ تم التأكيد والتصحيح
    handleMulterError,
    generateMindMap
);

// 📝 ملخص PDF (يستخدم 'pdfFile')
router.post(
    '/generateSummary',
    protect,
    upload.single('pdfFile'), // ✅ تم التأكيد والتصحيح
    handleMulterError,
    generateSummary
);

// ❓ Quiz (يستخدم 'pdfFile')
router.post(
    '/generateQuiz',
    protect,
    upload.single('pdfFile'), // ✅ تم التأكيد والتصحيح
    handleMulterError,
    generateQuiz
);

// 💡 Flashcards (يستخدم 'pdfFile')
router.post(
    '/generateFlashcards',
    protect,
    upload.single('pdfFile'), // ✅ تم التأكيد والتصحيح
    handleMulterError,
    generateFlashcards
);

// 🌍 ترجمة (لا يستقبل ملفات)
router.post(
    '/translate',
    protect,
    translateContent
);

module.exports = router;
// routes/aiRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { protect } = require('../middleware/authMiddleware');
const { askAI } = require('../controllers/aiController');

// استيراد كل الدوال المطلوبة من geminiController
const { 
    handleImageQuery, 
    handleAudioQuery,
    generateQuiz,
    generateFlashcards,
    generateSummary,
    translateContent,
    generateMindMap
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


module.exports = router;
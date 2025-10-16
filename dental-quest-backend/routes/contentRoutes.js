// routes/contentRoutes.js

const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// --- استيراد الكنترولرات ---
const { getSubjectsByYear, getLessonsBySubject } = require('../controllers/contentController');
const { 
    getGeneralQuizzesBySubject,
    getQuizzesByLesson,
    getQuizById 
} = require('../controllers/quizController'); // <-- استيراد كنترولر الكويزات

// ===================================
// ===     مسارات المواد والدروس     ===
// ===================================

// جلب المواد حسب السنة
router.get('/subjects/:year', protect, getSubjectsByYear);

// جلب الدروس حسب المادة
router.get('/lessons/:subjectId', protect, getLessonsBySubject);


// ===================================
// ===     مسارات الكويزات الجديدة     ===
// ===================================

// جلب الكويزات الشاملة (المرتبطة بالمادة فقط)
router.get('/quizzes/subject/:subjectId', protect, getGeneralQuizzesBySubject);

// جلب الكويزات الخاصة بدرس معين
router.get('/quizzes/lesson/:lessonId', protect, getQuizzesByLesson);

// جلب كويز واحد بكامل تفاصيله (مع الأسئلة)
router.get('/quiz/:quizId', protect, getQuizById);


module.exports = router;
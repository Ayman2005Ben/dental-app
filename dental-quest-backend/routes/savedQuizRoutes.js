// routes/savedQuizRoutes.js

const express = require('express');
const router = express.Router();

// ✅ استيراد الدوال الثلاث من وحدة التحكم
const { saveQuiz, getSavedQuizzes, deleteSavedQuiz } = require('../controllers/savedQuizController'); 
const { protect } = require('../middleware/authMiddleware');

// ✅ المسارات الأساسية
router.route('/')
    .post(protect, saveQuiz)           // حفظ اختبار جديد
    .get(protect, getSavedQuizzes);    // جلب كل الاختبارات المحفوظة

// ✅ مسار جديد لحذف اختبار محفوظ حسب ID
router.route('/:id').delete(protect, deleteSavedQuiz);

module.exports = router;

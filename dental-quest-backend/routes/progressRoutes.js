// routes/progressRoutes.js
const express = require('express');
const router = express.Router();
// استدعاء الكونترولر الخاص بـ Cloudinary
const progressController = require('../controllers/progressController');

// حماية المسار (تأكد أن المستخدم مسجل دخول)
// ملاحظة: تأكد أن ملف الميدلوير لديك اسمه authMiddleware أو غيره حسب مشروعك
// إذا كان الملف في مجلد middleware واسمه authMiddleware.js:
const { protect } = require('../middleware/authMiddleware'); // أو checkAuth حسب تسميتك

// 1. مسار الحفظ (يرفع JSON إلى Cloudinary ويخزن الرابط)
router.post('/save', protect, progressController.saveLessonProgress);

// 2. مسار الاسترجاع (يجلب الرابط من الداتابيز ثم يحمل البيانات من السحابة)
router.get('/', protect, progressController.getLessonProgress);

module.exports = router;
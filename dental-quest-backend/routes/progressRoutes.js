const express = require('express');
const router = express.Router();
const { saveLessonProgress, getLessonProgress } = require('../controllers/progressController');
// تأكد من مسار ملف الحماية authMiddleware عندك، ممكن يكون مختلف قليلاً
const { protect } = require('../middleware/authMiddleware');

router.post('/save', protect, saveLessonProgress);
router.get('/', protect, getLessonProgress);

module.exports = router;
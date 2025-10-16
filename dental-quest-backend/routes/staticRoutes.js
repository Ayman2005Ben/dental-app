const express = require('express');
const path = require('path');

// إنشاء مسار مخصص للملفات الثابتة
const staticRouter = express.Router();

// تحديد المسار الفعلي لمجلد LESSONS على الخادم
const lessonsDirectory = path.join(__dirname, '..', 'LESSONS');

// استخدام middleware لخدمة الملفات من هذا المجلد
// express.static مهيأ لإرسال الـ headers الصحيحة للملفات
staticRouter.use('/lessons', express.static(lessonsDirectory));

module.exports = staticRouter;
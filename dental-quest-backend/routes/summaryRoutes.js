// routes/summaryRoutes.js
const express = require('express');
const router = express.Router();
const summaryController = require('../controllers/summaryController'); // تأكد أن المسار صحيح لمجلد controllers

// هذا الرابط يستقبل طلبات مثل: /api/summaries/subjectId
// الدالة getBySubject موجودة في ملف summaryController.js الذي لديك
router.get('/:subjectId', summaryController.getBySubject);

module.exports = router;
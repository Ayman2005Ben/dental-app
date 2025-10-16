// DENTAL-QUEST-BACKEND/routes/reportRoutes.js

const express = require('express');
const router = express.Router();
const { createReport } = require('../controllers/reportController');
const { protect } = require('../middleware/authMiddleware');

// مسار لإرسال بلاغ جديد
// POST /api/reports
router.route('/').post(protect, createReport);

module.exports = router;
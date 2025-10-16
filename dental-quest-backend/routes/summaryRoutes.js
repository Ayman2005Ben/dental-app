// routes/summaryRoutes.js
const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const { getBySubject } = require('../controllers/summaryController');

// GET /api/summaries/:subjectId
router.get('/:subjectId', protect, getBySubject);

module.exports = router;

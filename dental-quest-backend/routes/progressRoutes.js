const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const Progress = require('../models/progressModel');

// حفظ التقدم
router.post('/save', protect, async (req, res) => {
    try {
        const { lessonId, progressData } = req.body;
        const updated = await Progress.findOneAndUpdate(
            { user: req.user._id, lessonId },
            { ...progressData },
            { new: true, upsert: true }
        );
        res.json({ success: true, data: updated });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// استرجاع التقدم
router.get('/', protect, async (req, res) => {
    try {
        const { lessonId } = req.query;
        const data = await Progress.findOne({ user: req.user._id, lessonId });
        res.json({ success: true, data: data || null });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
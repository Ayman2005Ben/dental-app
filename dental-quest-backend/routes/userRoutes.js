// DENTAL-QUEST-BACKEND/routes/userRoutes.js

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/userModel');

const {
  updateUserYear,
  getUserProfile,
  activateUser,
  getUserWidgetData // ✨ إضافة جديدة
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware'); // Middleware للحماية

// ----------------------------------------------------------------
// ✅ المسار 1: تحديث السنة الدراسية للمستخدم
// PUT /api/user/year
// ----------------------------------------------------------------
router.put('/year', protect, updateUserYear);

// ----------------------------------------------------------------
// ✅ المسار 2: جلب بيانات بروفايل المستخدم (باستخدام middleware)
// GET /api/user/profile
// ----------------------------------------------------------------
router.get('/profile', protect, getUserProfile);

// ----------------------------------------------------------------
// ✅ المسار 3: تفعيل حساب المستخدم
// POST /api/user/activate
// ----------------------------------------------------------------
router.post('/activate', protect, activateUser);

// ----------------------------------------------------------------
// ✅ المسار 4: جلب بيانات الواجهة الرئيسية
// GET /api/user/widget-data
// ----------------------------------------------------------------
router.get('/widget-data', protect, getUserWidgetData);

// ----------------------------------------------------------------
// 🚀 المسار 5 (جديد): للتحقق من التوكن مباشرة (يُستخدم من واجهة المشرف)
// GET /api/user/profile (بدون protect)
// ----------------------------------------------------------------
router.get('/profile', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select('-__v -password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error('❌ Profile Token Verification Error:', err);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

module.exports = router;

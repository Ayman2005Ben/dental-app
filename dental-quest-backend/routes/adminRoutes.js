// DENTAL-QUEST-BACKEND/routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const { protectAdmin } = require('../middleware/authMiddleware'); // حماية المسارات الخاصة بالإدارة

// ✅ استيراد جميع دوال وحدة التحكم بما فيها الجديدة
const {
    getDashboardStats,
    getAllUsers,
    toggleUserActivation,
    getAllReports,
    getAiLogs,        // ⬅️ جديد
    toggleAiAccess    // ⬅️ جديد
} = require('../controllers/adminController');

// --- 📊 Dashboard ---
router.get('/stats', protectAdmin, getDashboardStats);

// --- 👥 User Management ---
router.get('/users', protectAdmin, getAllUsers);
router.put('/users/:id/activate', protectAdmin, toggleUserActivation);

// --- 🤖 التحكم في وصول المستخدمين للـ AI ---
router.put('/users/:id/toggle-ai', protectAdmin, toggleAiAccess); // ✅ جديد

// --- 🧠 AI Logs ---
router.get('/ailogs', protectAdmin, getAiLogs); // ✅ جديد

// --- 🚨 Report Management ---
router.get('/reports', protectAdmin, getAllReports);

module.exports = router;

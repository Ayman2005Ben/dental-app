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
    getAiLogs,
    toggleAiAccess,
    updateUserStudyYear,  // ⬅️ جديد
    updateUserExperience  // ⬅️ جديد
} = require('../controllers/adminController');

// --- 📊 Dashboard ---
router.get('/stats', protectAdmin, getDashboardStats);

// --- 👥 User Management ---
router.get('/users', protectAdmin, getAllUsers);
router.put('/users/:id/activate', protectAdmin, toggleUserActivation);

// --- 🤖 التحكم في وصول المستخدمين للـ AI ---
router.put('/users/:id/toggle-ai', protectAdmin, toggleAiAccess);

// --- 🚨 Report Management ---
router.get('/reports', protectAdmin, getAllReports);

// --- 🧠 AI Logs ---
router.get('/ailogs', protectAdmin, getAiLogs);

// --- ✅ [إضافة جديدة] تعديل بيانات المستخدم (السنة والخبرة) ---
router.put('/users/:id/year', protectAdmin, updateUserStudyYear);
router.put('/users/:id/xp', protectAdmin, updateUserExperience);

module.exports = router;
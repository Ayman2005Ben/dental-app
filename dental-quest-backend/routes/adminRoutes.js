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
    updateUserStudyYear,
    updateUserExperience,
    // --- 👇 الإضافات الجديدة 👇 ---
    toggleUserAdmin,
    getQuizzesBySubject,
    saveQuizChanges
} = require('../controllers/adminController');

// --- 📊 Dashboard ---
router.get('/stats', protectAdmin, getDashboardStats);

// --- 👥 User Management ---
router.get('/users', protectAdmin, getAllUsers);
router.put('/users/:id/activate', protectAdmin, toggleUserActivation);

// --- ✅ [إضافة جديدة] إدارة الصلاحيات (ترقية لمشرف) ---
router.put('/users/:id/toggle-admin', protectAdmin, toggleUserAdmin);

// --- 🤖 التحكم في وصول المستخدمين للـ AI ---
router.put('/users/:id/toggle-ai', protectAdmin, toggleAiAccess);

// --- ✅ تعديل بيانات المستخدم (السنة والخبرة) ---
router.put('/users/:id/year', protectAdmin, updateUserStudyYear);
router.put('/users/:id/xp', protectAdmin, updateUserExperience);

// --- 🚨 Report Management ---
router.get('/reports', protectAdmin, getAllReports);

// --- 🧠 AI Logs ---
router.get('/ailogs', protectAdmin, getAiLogs);

// --- ✅ [إضافة جديدة] إدارة المحتوى (Content Factory) ---
// ملاحظة: البراميتر هنا :id ليتوافق مع req.params.id في الكنترولر
router.get('/quizzes/subject/:id', protectAdmin, getQuizzesBySubject);
router.put('/quizzes/:quizId', protectAdmin, saveQuizChanges);

module.exports = router;
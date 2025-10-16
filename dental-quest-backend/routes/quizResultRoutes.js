// DENTAL-QUEST-BACKEND/routes/quizResultRoutes.js

const express = require('express');
const router = express.Router();

// --- استيراد وحدات التحكم والوسيط (Controllers & Middleware) ---

// 1. Controller: يحتوي على المنطق الفعلي الذي سيتم تنفيذه.
// ✅ التعديل الأول: أضفنا 'getMistakesQuiz' هنا
const { 
    saveQuizResult, 
    getDashboardStats, 
    getMistakesQuiz 
} = require('../controllers/quizResultController');

// 2. Middleware: طبقة حماية تتحقق من هوية المستخدم قبل السماح له بالوصول إلى Controller.
const { protect } = require('../middleware/authMiddleware');

/**
 * @description
 * مجموعة المسارات (Routes) المتعلقة بنتائج الاختبارات.
 * كل المسارات هنا تبدأ بالمسار الأساسي المعرف في server.js وهو '/api/results'.
 */

// --- تعريف المسارات ---

/**
 * @route   POST /api/results
 * @description
 * نقطة النهاية (Endpoint) الرئيسية لحفظ نتيجة اختبار جديد.
 * - `POST`: لأننا نقوم بإنشاء مورد (resource) جديد في قاعدة البيانات.
 * - `/`: يشير إلى المسار الجذر ('/api/results').
 * - `protect`: Middleware يتم تنفيذه أولاً. سيقوم بالتحقق من صحة توكن JWT.
 * إذا كان التوكن صالحًا، سيضيف بيانات المستخدم (req.user) ويسمح بالمرور.
 * إذا لم يكن صالحًا، سيرفض الطلب مباشرةً.
 * - `saveQuizResult`: الـ Controller الذي يتم استدعاؤه فقط إذا نجح `protect`.
 * سيقوم بأخذ بيانات الطلب وحفظها في قاعدة البيانات.
 */
router.route('/').post(protect, saveQuizResult);

/**
 * @route   GET /api/results/dashboard
 * @description
 * نقطة النهاية (Endpoint) لجلب إحصائيات لوحة الأداء للمستخدم الحالي.
 * - `GET`: لأننا نقوم بجلب بيانات وليس إنشاء أو تعديل.
 * - `/dashboard`: مسار فرعي مخصص للإحصائيات.
 * - `protect`: Middleware للتحقق من صحة المستخدم.
 * - `getDashboardStats`: الـ Controller الذي سيجلب الإحصائيات من قاعدة البيانات.
 */
router.route('/dashboard').get(protect, getDashboardStats);

/**
 * @route   GET /api/results/mistakes/:subjectId
 * @description
 * نقطة النهاية (Endpoint) لجلب كويز مخصص بأسئلة أخطأ فيها المستخدم في مادة معينة.
 * ✅ التعديل الثاني: هذا هو المسار الجديد الذي تمت إضافته للميزة
 */
router.route('/mistakes/:subjectId').get(protect, getMistakesQuiz);


// --- مسارات مستقبلية مقترحة (يمكن إضافتها لاحقًا) ---
/*
 * @route   GET /api/results
 * @description
 * لجلب جميع نتائج الاختبارات للمستخدم الحالي (لصفحة لوحة الأداء).
 * router.route('/').get(protect, getAllUserResults);
 */

/*
 * @route   GET /api/results/:id
 * @description
 * لجلب تفاصيل نتيجة اختبار محددة.
 * router.route('/:id').get(protect, getResultById);
 */

module.exports = router;
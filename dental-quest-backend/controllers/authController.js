// DENTAL-QUEST-BACKEND/controllers/authController.js

const jwt = require('jsonwebtoken');
const ADMIN_EMAIL = '0667969129a@gmail.com'; // <-- ✅ تعريف إيميل المدير هنا

/* ✅ للطلاب */
exports.googleCallback = (req, res) => {
    if (!req.user) {
        return res.redirect(`${process.env.CLIENT_URL}/login.html?error=no_user`);
    }

    // --- التأكد من أن المدير لا يدخل كطالب ---
    if (req.user.email === ADMIN_EMAIL) {
         return res.redirect(`${process.env.CLIENT_URL}/login.html?error=admin_should_use_admin_login`);
    }
    // --- نهاية التأكد ---

    const token = jwt.sign(
        { id: req.user.id, role: 'student' }, // نضمن أن التوكن دائماً 'student' هنا
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    );
    res.redirect(`${process.env.CLIENT_URL}/index.html?token=${token}`);
};

/* ✅ للمشرف (مع الإجبار بناءً على الإيميل) */
exports.googleAdminCallback = (req, res) => {
    console.log('🛠️ [Admin Login Attempt] User Profile from Google:', req.user);

    if (!req.user) {
        return res.redirect(`${process.env.CLIENT_URL}/admin-panel/login.html?error=no_user`);
    }

    // --- ✅ ✅ ✅ الحل القاطع هنا ✅ ✅ ✅ ---
    // التحقق أولاً وقبل كل شيء من الإيميل
    if (req.user.email !== ADMIN_EMAIL) {
        console.warn(`🚫 Access Denied. Email ${req.user.email} is not the designated admin.`);
        return res.redirect(`${process.env.CLIENT_URL}/admin-panel/login.html?error=not_the_admin_email`);
    }
    // --- نهاية الحل القاطع ---

    console.log(`✅ Access Granted. User ${req.user.email} is the admin.`);

    // 🔥 إنشاء توكن يحتوي على الدور الصحيح ('admin')
    const token = jwt.sign(
        { id: req.user.id, role: 'admin' }, // نجبر الدور هنا ليكون 'admin'
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    );

    // إعادة التوجيه مع التوكن
    res.redirect(`${process.env.CLIENT_URL}/admin-panel/login.html?token=${token}`);
};
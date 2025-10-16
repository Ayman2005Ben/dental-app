// DENTAL-QUEST-BACKEND/routes/authRoutes.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController'); // سيقوم باستيراد الكود (48 سطراً)

// --- مسار الطلاب ---
router.get('/google', passport.authenticate('google', { 
    scope: ['profile', 'email'],
    callbackURL: `${process.env.API_URL}/auth/google/callback` 
}));

// --- رابط عودة الطلاب ---
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: process.env.CLIENT_URL + '/login.html?error=failed' }),
    authController.googleCallback // ✅ الإصلاح هنا: استخدام الاسم الصحيح من الكود الخاص بك
);

// --- مسار المشرف ---
router.get('/google/admin', passport.authenticate('google-admin', { 
    scope: ['profile', 'email'],
    callbackURL: `${process.env.API_URL}/auth/google/callback/admin` 
}));

// --- رابط عودة المشرف ---
router.get('/google/callback/admin',
    passport.authenticate('google-admin', { failureRedirect: process.env.CLIENT_URL + '/admin-panel/login.html?error=failed' }),
    authController.googleAdminCallback // ✅ هذا الاسم صحيح في الكود الخاص بك
);

// --- مسار التشخيص (اختياري) ---
router.get('/debug-env', (req, res) => {
    res.status(200).json({
        NODE_ENV: process.env.NODE_ENV,
        API_URL: process.env.API_URL,
        CLIENT_URL: process.env.CLIENT_URL,
    });
});

module.exports = router;
// DENTAL-QUEST-BACKEND/routes/authRoutes.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');

// المسار 1: بدء عملية تسجيل الدخول (للجميع)
router.get('/google', passport.authenticate('google', { 
    scope: ['profile', 'email'],
    // <-- إضافة حاسمة: تحديد رابط العودة صراحةً
    callbackURL: '/auth/google/callback' 
}));

// المسار 2: رابط العودة الموحد (للجميع)
router.get('/google/callback',
    passport.authenticate('google', { 
        // إذا فشل الدخول، أعده إلى صفحة الطلاب كخيار افتراضي
        failureRedirect: process.env.CLIENT_URL + '/login.html?error=failed',
        // <-- إضافة حاسمة: تحديد رابط العودة صراحةً هنا أيضًا
        callbackURL: '/auth/google/callback' 
    }),
    authController.googleCallback // <-- استدعاء الدالة الموحدة
);

module.exports = router;
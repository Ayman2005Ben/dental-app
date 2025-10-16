// DENTAL-QUEST-BACKEND/routes/authRoutes.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');

// --- المسار 1: بدء عملية تسجيل الدخول (للطلاب) ---
router.get('/google', passport.authenticate('google', { 
    scope: ['profile', 'email'],
    // ✅ إضافة جديدة: إخبار جوجل بعنوان العودة الصحيح
    callbackURL: `${process.env.API_URL}/auth/google/callback` 
}));

// --- المسار 2: رابط عودة الطلاب ---
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: process.env.CLIENT_URL + '/login.html?error=failed' }),
    authController.googleStudentCallback
);

// --- ✅ إضافة جديدة: المسار 3: بدء عملية تسجيل دخول المشرف ---
router.get('/google/admin', passport.authenticate('google', { 
    scope: ['profile', 'email'],
    // ✅ إضافة جديدة: إخبار جوجل بعنوان العودة الصحيح
    callbackURL: `${process.env.API_URL}/auth/google/callback/admin` 
}));

// --- ✅ إضافة جديدة: المسار 4: رابط عودة المشرف ---
router.get('/google/callback/admin',
    passport.authenticate('google', { failureRedirect: process.env.CLIENT_URL + '/admin-panel/login.html?error=failed' }),
    authController.googleAdminCallback
);

module.exports = router;
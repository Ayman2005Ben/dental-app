// DENTAL-QUEST-BACKEND/routes/authRoutes.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');

// --- مسار الطلاب ---
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: process.env.CLIENT_URL + '/login.html?error=failed' }),
    authController.googleStudentCallback
);

// --- مسار المشرف ---
router.get('/google/admin', passport.authenticate('google-admin', { scope: ['profile', 'email'] }));

router.get('/google/callback/admin',
    passport.authenticate('google-admin', { failureRedirect: process.env.CLIENT_URL + '/admin-panel/login.html?error=failed' }),
    authController.googleAdminCallback
);

module.exports = router;
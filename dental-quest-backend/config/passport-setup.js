// DENTAL-QUEST-BACKEND/config/passport-setup.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

// --- الكود النظيف: تحديد الروابط بناءً على البيئة ---
const googleCallbackBaseURL = process.env.NODE_ENV === 'production' 
    ? process.env.API_URL 
    : 'http://localhost:5000';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

// --- استراتيجية الطلاب (تقرأ من قاعدة البيانات) ---
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${googleCallbackBaseURL}/auth/google/callback` 
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
            done(null, user); // وجد المستخدم، سيعتمد على الـ role الموجود في قاعدة البيانات
        } else {
            user = await User.create({
                googleId: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
            });
            done(null, user); // أنشأ مستخدماً جديداً (سيكون student افتراضياً)
        }
    } catch (err) {
        done(err, null);
    }
}));

// --- استراتيجية المشرف (تقرأ من قاعدة البيانات) ---
passport.use('google-admin', new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${googleCallbackBaseURL}/auth/google/callback/admin`
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
            done(null, user); // وجد المستخدم، سيعتمد على الـ role الموجود في قاعدة البيانات
        } else {
            done(null, false, { message: 'User not found' });
        }
    } catch (err) {
        done(err, null);
    }
}));
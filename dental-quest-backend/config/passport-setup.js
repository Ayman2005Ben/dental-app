// DENTAL-QUEST-BACKEND/config/passport-setup.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

// --- ✅ الحل النهائي هنا ---
// تحديد روابط العودة بناءً على بيئة التشغيل
const googleCallbackBaseURL = process.env.NODE_ENV === 'production' 
    ? process.env.API_URL // الرابط المنشور (https://...onrender.com)
    : 'http://localhost:5000'; // الرابط المحلي

// --- نهاية الحل ---

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // ✅ استخدام الرابط الصحيح بناءً على البيئة
    callbackURL: `${googleCallbackBaseURL}/auth/google/callback` 
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
            done(null, user);
        } else {
            user = await User.create({
                googleId: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
            });
            done(null, user);
        }
    } catch (err) {
        done(err, null);
    }
}));

// --- ✅ استراتيجية منفصلة للمشرف (Admin) ---
// هذا يضمن أن كل مسار له رابط العودة الخاص به
passport.use('google-admin', new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // ✅ استخدام رابط العودة الخاص بالمشرف
    callbackURL: `${googleCallbackBaseURL}/auth/google/callback/admin`
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
            done(null, user);
        } else {
            // لا تقم بإنشاء مستخدم جديد من بوابة المشرف إذا لم يكن موجوداً
            done(null, false, { message: 'User not found' });
        }
    } catch (err) {
        done(err, null);
    }
}));
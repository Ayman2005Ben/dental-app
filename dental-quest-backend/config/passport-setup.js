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

// --- استراتيجية الطلاب (تحتوي على الكود الخاص بك) ---
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${googleCallbackBaseURL}/auth/google/callback` 
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
            // --- ✅ ✅ ✅ الكود الخاص بك (الإجبار) ---
            // هنا نجبر الخادم على التعرف عليك كمدير
            if (user.email === '0667969129a@gmail.com') {
                user.role = 'admin';
            }
            // --- نهاية الكود الخاص بك ---
            done(null, user); // أرسل المستخدم (سواء كان طالباً أو مديراً)
        } else {
            user = await User.create({
                googleId: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
                // سيتم تعيين 'role' كـ 'student' افتراضياً
            });
            done(null, user);
_G_A_T_E_S_C_T_X_S_E_P_
        }
    } catch (err) {
        done(err, null);
    }
}));

// --- استراتيجية المشرف (تحتوي على الكود الخاص بك) ---
passport.use('google-admin', new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${googleCallbackBaseURL}/auth/google/callback/admin`
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
            // --- ✅ ✅ ✅ الكود الخاص بك (الإجبار) ---
            // هنا نتأكد من أنك المدير الوحيد المسموح له بالدخول
            if (user.email === '0667969129a@gmail.com') {
                user.role = 'admin';
                done(null, user); // اسمح للمدير بالدخول
            } else {
                done(null, false, { message: 'Not an admin' }); // ارفض أي مستخدم آخر
            }
            // --- نهاية الكود الخاص بك ---
        } else {
            done(null, false, { message: 'User not found' });
        }
    } catch (err) {
        done(err, null);
    }
}));
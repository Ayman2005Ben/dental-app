const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;

        // 🔥 تحديد الدور حسب البريد
        const role = email === '0667969129a@gmail.com' ? 'admin' : 'student';

        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          // نحدّث الدور في حال تغيّر
          if (user.role !== role) {
            user.role = role;
            await user.save();
          }
          return done(null, user);
        }

        // إنشاء مستخدم جديد
        const newUser = await User.create({
          googleId: profile.id,
          displayName: profile.displayName,
          email,
          image: profile.photos[0].value,
          role,
        });

        return done(null, newUser);
      } catch (err) {
        console.error('❌ Passport Error:', err);
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// server.js — النسخة النهائية والمضمونة 🚀

// 1️⃣ المكتبات الأساسية
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const reportRoutes = require('./routes/reportRoutes');

// 2️⃣ تحميل متغيرات البيئة
dotenv.config();

// 3️⃣ الاتصال بقاعدة البيانات وتهيئة Passport
const connectDB = require('./config/db.js');
require('./config/passport-setup.js');
connectDB();

// 4️⃣ إنشاء تطبيق Express
const app = express();
app.enable('trust proxy');


// --- Middleware (الترتيب مهم) ---

// 1. تفعيل CORS للسماح بالطلبات من الواجهة الأمامية
app.use(cors({
  origin: [process.env.CLIENT_URL, 'http://127.0.0.1:5500', 'http://localhost:5500'],
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

// 2. تفعيل Helmet مع الإعداد الصحيح للسماح بعرض الموارد عبر النطاقات
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com", "https://upload.wikimedia.org"],
            connectSrc: ["'self'", "http://localhost:5000", "https://accounts.google.com"],
            imgSrc: ["'self'", "data:", "https://upload.wikimedia.org", "https://lh3.googleusercontent.com"],
            frameSrc: ["'self'", "https://accounts.google.com"],
        },
    },
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// 3. تمكين JSON body parser
app.use(express.json());
app.use('/api/reports', reportRoutes);

// 4. إعداد الجلسات
app.use(session({
  secret: process.env.SESSION_SECRET || 'CHANGE_ME',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// ✅ --- بداية الجزء الذي تم إعادته وتصحيحه ---
app.use(express.static(path.join(__dirname, 'public')));
app.use('/Summaries', express.static(path.join(__dirname, 'Summaries')));

app.use('/lessons', (req, res) => {
  const decodedPath = decodeURIComponent(req.path);
  const filePath = path.join(__dirname, 'Lessons', decodedPath);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`❌ PDF not found at path: ${filePath}`);
      if (!res.headersSent) {
        res.status(404).send('PDF not found.');
      }
    }
  });
});
// ✅ --- نهاية الجزء الذي تم إعادته وتصحيحه ---

// 6. تحديد معدل الطلبات
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  trustProxy: 1,
});
app.use('/api/', apiLimiter);

// --- بداية الإضافة ---
const authController = require('./controllers/authController');

app.get('/auth/google/admin', passport.authenticate('google', {
    scope: ['profile', 'email'],
    callbackURL: '/auth/google/callback/admin'
}));

app.get('/auth/google/callback/admin',
    passport.authenticate('google', {
        failureRedirect: process.env.CLIENT_URL + '/admin-panel/login.html?error=failed',
        callbackURL: '/auth/google/callback/admin'
    }),
    authController.googleAdminCallback
);

// ✅ --- إضافة ذكية لتحديث الكويزات من السيرفر مباشرة ---
const { exec } = require('child_process');

app.get('/run-seeder', (req, res) => {
  const key = req.query.key;
  if (key !== process.env.SEEDER_KEY) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  res.send('Seeder started... check logs!');
  exec('node utils/seeder.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Seeder error: ${error.message}`);
      return;
    }
    if (stderr) console.error(`⚠️ Seeder stderr: ${stderr}`);
    console.log(`✅ Seeder output:\n${stdout}`);
  });
});
// --- نهاية الإضافة ---

// 7. المسارات (Routes)
app.get('/', (req, res) => res.send('Dental Quest API is running!'));

const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const contentRoutes = require('./routes/contentRoutes.js');
const aiRoutes = require('./routes/aiRoutes.js');
const translateRoutes = require('./routes/translateRoutes.js');
const summaryRoutes = require('./routes/summaryRoutes.js');
const geminiRoutes = require('./routes/geminiRoutes.js');
const quizResultRoutes = require('./routes/quizResultRoutes.js');
const flashcardRoutes = require('./routes/flashcardRoutes.js');
const savedQuizRoutes = require('./routes/savedQuizRoutes.js');
const adminRoutes = require('./routes/adminRoutes');

app.use('/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/translate', translateRoutes);
app.use('/api/summaries', summaryRoutes);
app.use('/api/gemini', geminiRoutes);
app.use('/api/results', quizResultRoutes);
app.use('/api/flashcards', flashcardRoutes);
app.use('/api/saved-quizzes', savedQuizRoutes);
app.use('/api/admin', adminRoutes);

// 8. تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});

module.exports = app;
// server.js — النسخة النهائية والمضمونة 🚀
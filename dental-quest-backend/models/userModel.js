const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String
  },
  studyYear: {
    type: String,
    default: null
  },
  isActivated: {
    type: Boolean,
    default: false
  },

  // === نظام التلعيب (Gamification) ===
  experiencePoints: {
    type: Number,
    default: 0
  },
  badges: {
    type: [String],
    default: []
  },

  // === تتبع النشاط ===
  lastSeen: {
    type: Date,
    default: Date.now
  },
  totalTimeSpent: {
    type: Number,
    default: 0
  },

  // --- تحديد دور المستخدم ---
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student'
  },

  // --- ✅ إضافة جديدة: التحكم في ميزات الذكاء الاصطناعي ---
  canUseAI: {
    type: Boolean,
    default: true // كل المستخدمين لديهم صلاحية استخدام AI افتراضيًا
  },

  // --- (اختياري) لتتبع الاستخدام لاحقًا ---
  aiUsageCount: {
    type: Number,
    default: 0 // عدد مرات استخدام الـ AI
  },
  aiLastUsed: {
    type: Date,
    default: null // آخر مرة استخدم فيها الذكاء الاصطناعي
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);

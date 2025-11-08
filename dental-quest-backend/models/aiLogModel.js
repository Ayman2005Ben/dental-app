// DENTAL-QUEST-BACKEND/models/aiLogModel.js

const mongoose = require('mongoose');

const aiLogSchema = new mongoose.Schema({
  // 🔹 المستخدم الذي أرسل الطلب
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  // 🔹 نوع المهمة (quiz, flashcards, chat, summary...)
  task: {
    type: String,
    required: true,
    enum: ['quiz', 'flashcards', 'chat', 'summary', 'mindmap', 'image', 'sculpture'], // لضبط القيم المقبولة
  },

  // 🔹 نص الطلب المرسل للذكاء الاصطناعي
  prompt: {
    type: String,
    required: true,
    trim: true
  },

  // 🔹 الرد الناتج من الـ AI (اختياري)
  response: {
    type: String,
    default: null
  },

  // 🔹 عدد الرموز (tokens) المستخدمة – لمراقبة الاستهلاك لاحقًا
  tokenCount: {
    type: Number,
    default: 0
  },

  // 🔹 حالة العملية (ناجحة / فاشلة)
  status: {
    type: String,
    enum: ['success', 'error'],
    default: 'success'
  },

  // 🔹 الوقت المستغرق (مفيد في التحليلات)
  durationMs: {
    type: Number,
    default: 0
  },

  // 🔹 مستوى الأهمية أو التصنيف (يمكنك استعماله لاحقًا)
  priority: {
    type: String,
    enum: ['low', 'normal', 'high'],
    default: 'normal'
  }

}, {
  timestamps: true // 🔥 يحفظ createdAt و updatedAt تلقائيًا
});

// 🔹 فهرسة لتحسين سرعة البحث في لوحة الإدارة
aiLogSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model('AiLog', aiLogSchema);

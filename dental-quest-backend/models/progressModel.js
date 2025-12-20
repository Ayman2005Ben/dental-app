const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lessonId: { type: String, required: true },
    drawings: { type: Object, default: {} },
    flashcards: { type: Object, default: {} },
    lastPage: { type: Number, default: 1 }
}, { timestamps: true });

// منع تكرار البيانات لنفس الدرس والمستخدم
progressSchema.index({ user: 1, lessonId: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);
// DENTAL-QUEST-BACKEND/models/flashcardModel.js

const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true // لتسريع جلب كل بطاقات المستخدم
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    // سنخزن الإجابة الصحيحة والشرح معًا في "الوجه الخلفي" للبطاقة
    backContent: {
        type: String,
        required: true
    },
    // حقول لنظام التكرار المتباعد (Spaced Repetition) في المستقبل
    reviewDate: { // التاريخ القادم للمراجعة
        type: Date,
        default: Date.now
    },
    interval: { // الفترة الفاصلة بالأيام
        type: Number,
        default: 1
    },
    easeFactor: { // معامل السهولة
        type: Number,
        default: 2.5
    }
}, {
    timestamps: true
});

// لمنع المستخدم من إضافة نفس السؤال مرتين
flashcardSchema.index({ user: 1, questionText: 1 }, { unique: true });

module.exports = mongoose.model('Flashcard', flashcardSchema);
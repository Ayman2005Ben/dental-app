// DENTAL-QUEST-BACKEND/models/reportModel.js

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    questionText: { // نستخدم نص السؤال كمعرف فريد له داخل الكويز
        type: String,
        required: true
    },
    reason: { // التبرير الذي يكتبه المستخدم
        type: String,
        required: true,
        maxlength: 500
    },
    reportedBy: { // هوية المستخدم الذي أبلغ
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    subject: { // نضيف هذه البيانات لتسهيل الفلترة عليك لاحقاً
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
}, {
    timestamps: true
});

// هذا السطر يمنع نفس المستخدم من الإبلاغ عن نفس السؤال أكثر من مرة
reportSchema.index({ questionText: 1, reportedBy: 1 }, { unique: true });

module.exports = mongoose.model('Report', reportSchema);
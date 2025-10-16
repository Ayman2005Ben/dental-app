// DENTAL-QUEST-BACKEND/models/questionStatsModel.js

const mongoose = require('mongoose');

const questionStatsSchema = new mongoose.Schema({
    questionText: { // نص السؤال كمعرف
        type: String,
        required: true,
    },
    quizId: { // معرّف الكويز لتمييز الأسئلة المتشابهة في كويزات مختلفة
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    // مصفوفة لتخزين عدد مرات اختيار كل خيار
    // مثال: [10, 5, 25, 8] يعني الخيار الأول تم اختياره 10 مرات، الثاني 5، وهكذا
    optionSelectionCounts: {
        type: [Number],
        default: []
    },
    totalAnswers: { // إجمالي عدد المرات التي تمت فيها الإجابة على هذا السؤال
        type: Number,
        default: 0
    }
});

// فهرس لضمان عدم تكرار نفس الإحصائية لنفس السؤال في نفس الكويز
questionStatsSchema.index({ questionText: 1, quizId: 1 }, { unique: true });

module.exports = mongoose.model('QuestionStats', questionStatsSchema);
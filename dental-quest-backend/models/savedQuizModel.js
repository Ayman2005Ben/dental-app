// models/savedQuizModel.js
const mongoose = require('mongoose');

// هذا القالب يصف شكل السؤال الواحد داخل الكويز
const questionSchema = new mongoose.Schema({
    question: { 
        type: String, 
        required: true 
    }, // ✅ تم التوحيد هنا ليتوافق مع مخرجات AI والكويزات المحفوظة
    options: [{ 
        type: String, 
        required: true 
    }],
    correctOptionIndexes: [{ 
        type: Number, 
        required: true 
    }],
    explanation: { 
        type: String, 
        required: true 
    }
});

// هذا القالب يصف شكل "الكويز المحفوظ" بالكامل في قاعدة البيانات
const savedQuizSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subjectName: {
        type: String,
        default: 'AI Generated'
    },
    questions: [questionSchema]
}, { 
    timestamps: true // لإضافة تاريخ إنشاء وتحديث الكويز تلقائياً
});

const SavedQuiz = mongoose.model('SavedQuiz', savedQuizSchema);
module.exports = SavedQuiz;
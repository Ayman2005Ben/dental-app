// models/quizModel.js
const mongoose = require('mongoose');

// تعريف شكل السؤال الواحد
// ...
const questionSchema = new mongoose.Schema({
    questionText: { 
        type: String, 
        required: true,
        trim: true 
    },
    options: [{ 
        type: String, 
        required: true,
        trim: true
    }],
    
    // --- الحقل الموحّد للإجابات الصحيحة ---
    correctOptionIndexes: {
        type: [Number],     
        required: true,
        validate: [
            {
                validator: function(arr) {
                    return arr.length > 0;
                },
                message: 'You must provide at least one correct answer index.'
            },
            {
                validator: function(arr) {
                    return arr.length === new Set(arr).size;
                },
                message: 'Correct answer indexes must be unique.'
            }
        ]
    },
    
    explanation: { 
        type: String, 
        required: false, 
        default: '',
        trim: true
    },
    timer: { 
        type: Number, 
        required: false, 
        default: 90, 
        min: 10 
    },
    // --- أضف هذا السطر ---
    imageUrl: {
        type: String,
        required: false, // اجعله اختياريًا لأن التشريح والـ SSH ليس لديهم صور
        default: null
    }
    // ----------------------
}, { 
    _id: false 
});

// تعريف شكل الكويز الرئيسي
const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Quiz title is required'],
        trim: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject', 
        required: [true, 'Each quiz must be linked to a subject']
    },
    lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson', 
        required: false 
    },
    questions: {
        type: [questionSchema], 
        validate: {
            validator: function(arr) {
                return arr.length > 0;
            },
            message: 'A quiz must have at least one question.'
        }
    }
}, {
    timestamps: true 
});

quizSchema.index({ subject: 1 });

module.exports = mongoose.model('Quiz', quizSchema);
// DENTAL-QUEST-BACKEND/models/quizResultModel.js
const mongoose = require('mongoose');

const incorrectQuestionSchema = new mongoose.Schema({
    questionText: { 
        type: String, 
        required: true 
    },
    options: [String],
    correctOptionIndexes: [Number],
    userSelectedIndexes: [Number] 
}, { _id: false });

const quizResultSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    // ✅ ================== THE FIX IS HERE ==================
    // We changed 'type' to String to allow for both real ObjectIds
    // and temporary IDs from "Mistakes Quizzes" (e.g., "mistakes_...").
    quiz: {
        type: String,
        required: true
    },
    // =======================================================
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: [0, 'Score cannot be negative.'],
        max: [20, 'Score cannot exceed 20.']
    },
    timeTaken: {
        type: Number,
        required: true,
        min: [0, 'Time taken cannot be negative.']
    },
    correctAnswers: {
        type: Number,
        required: true
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    incorrectQuestions: [incorrectQuestionSchema] 
}, {
    timestamps: true 
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = QuizResult;
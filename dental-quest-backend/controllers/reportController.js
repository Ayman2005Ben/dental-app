// DENTAL-QUEST-BACKEND/controllers/reportController.js

const Report = require('../models/reportModel');
const Quiz = require('../models/quizModel');
const mongoose = require('mongoose');

exports.createReport = async (req, res) => {
    const { quizId, questionText, reason } = req.body;
    const userId = req.user._id;

    if (!quizId || !questionText || !reason) {
        return res.status(400).json({ message: 'Quiz ID, question, and reason are required.' });
    }

    try {
        // 1. ابحث عن الكويز الأصلي لجلب معرّف المادة (subjectId)
        const quiz = await Quiz.findById(quizId).select('subject');
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found.' });
        }

        // 2. أنشئ بلاغًا جديدًا
        const newReport = new Report({
            quiz: quizId,
            questionText,
            reason,
            reportedBy: userId,
            subject: quiz.subject // حفظ معرّف المادة لسهولة المراجعة
        });

        await newReport.save();

        res.status(201).json({ message: 'Report submitted successfully. Thank you for your contribution!' });

    } catch (error) {
        // إذا كان الخطأ بسبب محاولة إبلاغ مكررة
        if (error.code === 11000) {
            return res.status(409).json({ message: 'You have already reported this question.' });
        }
        console.error('Error creating report:', error);
        res.status(500).json({ message: 'Server error while submitting the report.' });
    }
};
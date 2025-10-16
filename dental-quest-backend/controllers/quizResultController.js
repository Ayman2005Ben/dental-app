// DENTAL-QUEST-BACKEND/controllers/quizResultController.js

// --- استيراد النماذج (Models) المطلوبة ---
const mongoose = require('mongoose');
const QuizResult = require('../models/quizResultModel');
const Quiz = require('../models/quizModel');
const User = require('../models/userModel');
const QuestionStats = require('../models/questionStatsModel'); // ✅ استيراد النموذج الجديد

/**
 * @description
 * Controller لحفظ نتيجة اختبار وتطبيق منطق التلعيب (Gamification) وتحديث إحصائيات الأسئلة.
 */
const saveQuizResult = async (req, res) => {
    try {
        const {
            quizId,
            score,
            timeTaken,
            correctAnswers,
            totalQuestions,
            incorrectQuestions,
            subjectId,
            allUserAnswers // ✅ استلام إجابات المستخدم
        } = req.body;
        const userId = req.user._id;

        if (!quizId || score === undefined || timeTaken === undefined) {
            return res.status(400).json({ message: 'Missing required fields: quizId, score, and timeTaken are required.' });
        }

        let finalSubjectId;

        if (quizId.startsWith('mistakes_')) {
            if (!subjectId) {
                return res.status(400).json({ message: 'Subject ID is required when saving a mistakes quiz result.' });
            }
            finalSubjectId = subjectId;
        } else {
            const quiz = await Quiz.findById(quizId).select('subject');
            if (!quiz) {
                return res.status(404).json({ message: 'Quiz with the provided ID was not found.' });
            }
            finalSubjectId = quiz.subject;
        }

        const newResult = new QuizResult({
            user: userId,
            quiz: quizId,
            subject: finalSubjectId,
            score,
            timeTaken,
            correctAnswers,
            totalQuestions,
            incorrectQuestions
        });
        const savedResult = await newResult.save();

        // ✨ تحديث إحصائيات الأسئلة
        if (allUserAnswers && allUserAnswers.length > 0) {
            const quiz = await Quiz.findById(quizId).populate('questions');
            if (quiz) {
                for (const userAnswer of allUserAnswers) {
                    if (userAnswer && userAnswer.selectedIndexes.length > 0) {
                        const question = quiz.questions[userAnswer.questionIndex];
                        if (question) {
                            const updateQuery = { $inc: { totalAnswers: 1 } };
                            userAnswer.selectedIndexes.forEach(index => {
                                updateQuery.$inc[`optionSelectionCounts.${index}`] = 1;
                            });

                            await QuestionStats.findOneAndUpdate(
                                { quizId: quizId, questionText: question.questionText },
                                updateQuery,
                                { upsert: true, new: true }
                            );
                        }
                    }
                }
            }
        }

        // منطق التلعيب (XP + Badges)
        const earnedXP = 10 + Math.round(score);
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $inc: { experiencePoints: earnedXP } },
            { new: true }
        );

        let newBadge = null;
        const totalQuizzesCompleted = await QuizResult.countDocuments({ user: userId });

        if (totalQuizzesCompleted === 1 && !updatedUser.badges.includes('first-quiz')) {
            updatedUser.badges.push('first-quiz');
            newBadge = { name: 'First Quiz!', description: 'You completed your first quiz!' };
        }

        if (totalQuizzesCompleted === 10 && !updatedUser.badges.includes('persistent-learner')) {
            updatedUser.badges.push('persistent-learner');
            newBadge = { name: 'Persistent Learner', description: 'You completed 10 quizzes!' };
        }

        if (newBadge) {
            await updatedUser.save();
        }

        res.status(201).json({
            result: savedResult,
            earnedXP,
            newBadge,
            totalXP: updatedUser.experiencePoints
        });

    } catch (error) {
        console.error('Error saving quiz result:', error);
        if (error.name === 'ValidationError' || error.name === 'CastError') {
            return res.status(400).json({ message: 'Validation or Casting Error', error: error.message });
        }
        res.status(500).json({ message: 'Internal Server Error while saving quiz result.' });
    }
};

/**
 * @description
 * Controller لجلب وتجميع إحصائيات أداء المستخدم لعرضها في لوحة الأداء.
 */
const getDashboardStats = async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.user._id);

        const performanceBySubject = await QuizResult.aggregate([
            { $match: { user: userId } },
            {
                $group: {
                    _id: "$subject",
                    averageScore: { $avg: "$score" },
                    quizCount: { $sum: 1 },
                    mistakeCount: { $sum: { $size: { $ifNull: ["$incorrectQuestions", []] } } }
                }
            },
            { $lookup: { from: "subjects", localField: "_id", foreignField: "_id", as: "subjectDetails" } },
            { $unwind: "$subjectDetails" },
            {
                $project: {
                    _id: 0,
                    subjectId: "$subjectDetails._id",
                    subjectName: "$subjectDetails.name",
                    averageScore: { $round: ["$averageScore", 2] },
                    quizCount: 1,
                    mistakeCount: 1
                }
            },
            { $sort: { averageScore: -1 } }
        ]);

        const recentQuizzes = await QuizResult.find({ user: userId })
            .sort({ createdAt: -1 })
            .limit(5)
            .populate('quiz', 'title');

        const totalQuizzesTaken = await QuizResult.countDocuments({ user: userId });

        res.status(200).json({
            performanceBySubject,
            recentQuizzes,
            totalQuizzesTaken
        });
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

/**
 * @description
 * Controller لإنشاء "كويز أخطاء" مخصص للمستخدم.
 */
const getMistakesQuiz = async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.user._id);
        const subjectId = new mongoose.Types.ObjectId(req.params.subjectId);

        if (!subjectId) {
            return res.status(400).json({ message: "Subject ID is required." });
        }

        const results = await QuizResult.aggregate([
            { $match: { user: userId, subject: subjectId, 'incorrectQuestions.0': { $exists: true } } },
            { $unwind: "$incorrectQuestions" },
            { $replaceRoot: { newRoot: "$incorrectQuestions" } },
            { $group: { _id: "$questionText", firstOccurrence: { $first: "$$ROOT" } } },
            { $replaceRoot: { newRoot: "$firstOccurrence" } },
            { $sample: { size: 20 } }
        ]);

        if (results.length === 0) {
            return res.status(404).json({ message: "No mistakes found for this subject. Great job!" });
        }

        const mistakesQuiz = {
            _id: `mistakes_${subjectId}_${new Date().getTime()}`,
            title: "My Mistakes Review",
            subject: subjectId,
            questions: results.map(q => ({
                questionText: q.questionText,
                options: q.options,
                correctOptionIndexes: q.correctOptionIndexes,
                explanation: q.explanation,
                imageUrl: q.imageUrl || undefined
            }))
        };

        res.status(200).json(mistakesQuiz);

    } catch (error) {
        console.error('Error generating mistakes quiz:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    saveQuizResult,
    getDashboardStats,
    getMistakesQuiz
};

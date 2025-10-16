// controllers/quizController.js

const Quiz = require('../models/quizModel');
const QuestionStats = require('../models/questionStatsModel'); // ✅ استيراد النموذج الجديد

// @desc    جلب الكويزات الشاملة (المرتبطة بالمادة فقط)
// @route   GET /api/content/quizzes/subject/:subjectId
const getGeneralQuizzesBySubject = async (req, res) => {
    try {
        const quizzes = await Quiz.find({ 
            subject: req.params.subjectId,
            lesson: { $exists: false } // الشرط: ابحث فقط حيث حقل "lesson" غير موجود
        }).select('title'); 

        res.status(200).json(quizzes);
    } catch (error) {
        console.error('Error fetching general quizzes:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    جلب الكويزات الخاصة بدرس معين
// @route   GET /api/content/quizzes/lesson/:lessonId
const getQuizzesByLesson = async (req, res) => {
    try {
        const quizzes = await Quiz.find({ 
            lesson: req.params.lessonId 
        }).select('title');

        res.status(200).json(quizzes);
    } catch (error) {
        console.error('Error fetching lesson quizzes:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    جلب كويز واحد بكامل تفاصيله (مع الأسئلة والإحصائيات)
// @route   GET /api/content/quiz/:quizId
const getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.quizId).lean(); // ✅ تحويل إلى كائن عادي
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        // --- ✨ منطق الإحصائيات الجديد يبدأ هنا ---
        const stats = await QuestionStats.find({ quizId: quiz._id });
        const statsMap = new Map(stats.map(s => [s.questionText, s]));

        if (quiz.questions) {
            quiz.questions.forEach(question => {
                const questionStat = statsMap.get(question.questionText);
                if (questionStat) {
                    question.stats = {
                        optionSelectionCounts: questionStat.optionSelectionCounts,
                        totalAnswers: questionStat.totalAnswers
                    };
                }
            });
        }
        // --- نهاية منطق الإحصائيات ---

        res.status(200).json(quiz);
    } catch (error) {
        console.error('Error fetching quiz by ID:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getGeneralQuizzesBySubject,
    getQuizzesByLesson,
    getQuizById
};

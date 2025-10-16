// controllers/savedQuizController.js

const SavedQuiz = require('../models/savedQuizModel'); // We need the model for saved quizzes

/**
 * @desc    Save a new quiz structure (AI generated or otherwise)
 * @route   POST /api/saved-quizzes
 * @access  Private
 */
const saveQuiz = async (req, res) => {
    try {
        const { title, subjectName, questions } = req.body;

        // Basic validation
        if (!title || !questions || !Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ message: 'Title and questions are required.' });
        }

        // Create a new quiz instance using the model
        const newSavedQuiz = new SavedQuiz({
            user: req.user.id, // Get the logged-in user's ID from the 'protect' middleware
            title,
            subjectName,
            questions
        });

        // Save it to the database
        await newSavedQuiz.save();

        res.status(201).json({ message: 'Quiz saved successfully!', quiz: newSavedQuiz });

    } catch (error) {
        console.error('Error saving quiz structure:', error);
        res.status(500).json({ message: 'Server error while saving quiz.' });
    }
};

/**
 * @desc    Get all quizzes saved by the logged-in user
 * @route   GET /api/saved-quizzes
 * @access  Private
 */
const getSavedQuizzes = async (req, res) => {
    try {
        // Find all quizzes that belong to the current user
        const quizzes = await SavedQuiz.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(quizzes);
    } catch (error) {
        console.error('Error fetching saved quizzes:', error);
        res.status(500).json({ message: 'Server error while fetching quizzes.' });
    }
};

/**
 * @desc    Delete a quiz saved by the user
 * @route   DELETE /api/saved-quizzes/:id
 * @access  Private
 */
const deleteSavedQuiz = async (req, res) => {
    try {
        const quiz = await SavedQuiz.findById(req.params.id);

        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        // التأكد من أن المستخدم الذي يحاول الحذف هو مالك الكويز
        if (quiz.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        await quiz.deleteOne(); // استخدام النسخة الجديدة من Mongoose

        res.status(200).json({ message: 'Quiz removed successfully' });

    } catch (error) {
        console.error('Error deleting saved quiz:', error);
        res.status(500).json({ message: 'Server error while deleting quiz.' });
    }
};

module.exports = {
    saveQuiz,
    getSavedQuizzes,
    deleteSavedQuiz // ✅ إضافة جديدة
};

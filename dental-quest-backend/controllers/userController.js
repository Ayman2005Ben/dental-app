// controllers/userController.js

const User = require('../models/userModel');
const QuizResult = require('../models/quizResultModel');
const Quiz = require('../models/quizModel');

/**
 * @desc    Update user's study year
 * @route   PUT /api/user/year
 * @access  Private
 */
const updateUserYear = async (req, res) => {
  try {
    const userId = req.user.id;
    const { year } = req.body;

    if (!year) {
      return res.status(400).json({ message: 'Year is required' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { studyYear: year },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Year updated successfully',
      user: {
        id: updatedUser._id,
        displayName: updatedUser.displayName,
        studyYear: updatedUser.studyYear,
      },
    });
  } catch (error) {
    console.error('Error updating user year:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc    Get user profile data
 * @route   GET /api/user/profile
 * @access  Private
 */
const getUserProfile = async (req, res) => {
  try {
    // جلب المستخدم من قاعدة البيانات للتأكد من وجود الدور role
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // ✅ الآن نرجع الدور role مع بقية البيانات
    const userProfile = {
      id: user._id,
      displayName: user.displayName,
      email: user.email,
      image: user.image,
      studyYear: user.studyYear,
      isActivated: user.isActivated,
      experiencePoints: user.experiencePoints,
      badges: user.badges,
      totalTimeSpent: user.totalTimeSpent,
      role: user.role, // 🔥 مهم جداً لتحديد صلاحيات المشرف
    };

    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc    Activate a user account
 * @route   POST /api/user/activate
 * @access  Private
 */
const activateUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const activatedUser = await User.findByIdAndUpdate(
      userId,
      { isActivated: true },
      { new: true }
    );

    if (!activatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log(`User ${activatedUser.displayName} has been activated.`);

    res.status(200).json({
      message: 'Account activated successfully',
      user: {
        id: activatedUser._id,
        isActivated: activatedUser.isActivated,
      },
    });
  } catch (error) {
    console.error('Error activating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc    Get data for the home page widget (welcome card or stats)
 * @route   GET /api/user/widget-data
 * @access  Private
 */
const getUserWidgetData = async (req, res) => {
  try {
    const lastResult = await QuizResult.findOne({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate({
        path: 'quiz',
        populate: {
          path: 'subject',
          select: 'name',
        },
      });

    if (!lastResult) {
      return res.json({ hasActivity: false });
    }

    const { correctAnswers, totalQuestions } = lastResult;

    const getBadgeForScore = (correct, total) => {
      const percentage = total > 0 ? (correct / total) * 100 : 0;
      if (percentage >= 85)
        return { name: 'Gold Badge', imageUrl: 'images/badge-gold.png' };
      if (percentage >= 60)
        return { name: 'Silver Badge', imageUrl: 'images/badge-silver.png' };
      return { name: 'Bronze Badge', imageUrl: 'images/badge-bronze.png' };
    };

    const badge = getBadgeForScore(correctAnswers, totalQuestions);

    const data = {
      hasActivity: true,
      lastQuiz: {
        subjectName: lastResult.quiz.subject
          ? lastResult.quiz.subject.name
          : 'Unknown Subject',
        quizTitle: lastResult.quiz ? lastResult.quiz.title : 'Quiz',
        correctAnswers,
        incorrectAnswers: totalQuestions - correctAnswers,
        timeTaken: lastResult.timeTaken,
        badge: badge,
      },
    };

    res.json(data);
  } catch (error) {
    console.error('Error fetching widget data:', error);
    res.status(500).json({ hasActivity: false, message: 'Server error' });
  }
};

module.exports = {
  updateUserYear,
  getUserProfile,
  activateUser,
  getUserWidgetData,
};

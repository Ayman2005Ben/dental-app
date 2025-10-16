// DENTAL-QUEST-BACKEND/controllers/adminController.js

const User = require('../models/userModel');
const Report = require('../models/reportModel');
const AiLog = require('../models/aiLogModel'); // ✅ نستخدمه الآن فعلاً

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
// @access  Admin
exports.getDashboardStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const activeUsers = await User.countDocuments({ isActivated: true });
        const newReports = await Report.countDocuments({ resolved: false });

        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const newUsers = await User.countDocuments({ createdAt: { $gte: oneWeekAgo } });

        res.status(200).json({
            totalUsers,
            activeUsers,
            newReports,
            newUsers,
        });
    } catch (error) {
        console.error('[Admin Stats Error]:', error);
        res.status(500).json({ message: 'Server error fetching stats.' });
    }
};

// @desc    Get all users for admin panel
// @route   GET /api/admin/users
// @access  Admin
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (error) {
        console.error('[Admin Users Error]:', error);
        res.status(500).json({ message: 'Server error fetching users.' });
    }
};

// @desc    Activate or deactivate user
// @route   PUT /api/admin/users/:id/activate
// @access  Admin
exports.toggleUserActivation = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found.' });

        user.isActivated = !user.isActivated;
        await user.save();

        res.status(200).json({
            message: `User ${user.isActivated ? 'activated' : 'deactivated'} successfully.`,
            isActivated: user.isActivated,
        });
    } catch (error) {
        console.error('[Admin Activation Error]:', error);
        res.status(500).json({ message: 'Server error updating user.' });
    }
};

// @desc    Get all reports
// @route   GET /api/admin/reports
// @access  Admin
exports.getAllReports = async (req, res) => {
    try {
        const reports = await Report.find({})
            .populate('reportedBy', 'displayName email')
            .populate('subject', 'name')
            .sort({ createdAt: -1 });

        res.status(200).json(reports);
    } catch (error) {
        console.error('[Admin Reports Error]:', error);
        res.status(500).json({ message: 'Server error fetching reports.' });
    }
};

// --- ✅ [إضافة جديدة] جلب سجلات الـ AI ---
// @desc    Get all AI logs
// @route   GET /api/admin/ailogs
// @access  Admin
exports.getAiLogs = async (req, res) => {
    try {
        const logs = await AiLog.find({})
            .populate('user', 'displayName email')
            .sort({ createdAt: -1 })
            .limit(100); // آخر 100 سجل لتقليل الحمل

        res.status(200).json(logs);
    } catch (error) {
        console.error('[Admin AI Logs Error]:', error);
        res.status(500).json({ message: 'Server error fetching AI logs.' });
    }
};

// --- ✅ [إضافة جديدة] التحكم في وصول المستخدم للـ AI ---
// @desc    Toggle a user's AI access
// @route   PUT /api/admin/users/:id/toggle-ai
// @access  Admin
exports.toggleAiAccess = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found.' });

        user.canUseAI = !user.canUseAI;
        await user.save();

        res.status(200).json({
            message: `User AI access is now ${user.canUseAI ? 'ENABLED' : 'DISABLED'}.`,
            canUseAI: user.canUseAI,
        });
    } catch (error) {
        console.error('[Admin Toggle AI Error]:', error);
        res.status(500).json({ message: 'Server error updating user AI access.' });
    }
};

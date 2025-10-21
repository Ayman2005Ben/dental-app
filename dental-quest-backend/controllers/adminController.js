// DENTAL-QUEST-BACKEND/controllers/adminController.js

const User = require('../models/userModel');
const Report = require('../models/reportModel');
const AiLog = require('../models/aiLogModel');

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

        // --- ✅ [إضافة جديدة] إحصائيات المستخدمين حسب السنة ---
        const yearCounts = await User.aggregate([
            { $group: { _id: "$studyYear", count: { $sum: 1 } } }
        ]);

        const statsByYear = {
            year1: 0, year2: 0, year3: 0, year4: 0, year5: 0, yearOther: 0
        };

        for (const group of yearCounts) {
            switch (group._id) {
                case '1': statsByYear.year1 = group.count; break;
                case '2': statsByYear.year2 = group.count; break;
                case '3': statsByYear.year3 = group.count; break;
                case '4': statsByYear.year4 = group.count; break;
                case '5': statsByYear.year5 = group.count; break;
                default: statsByYear.yearOther += group.count; // (null أو N/A)
            }
        }
        // --- نهاية الإضافة ---

        res.status(200).json({
            totalUsers,
            activeUsers,
            newReports,
            newUsers,
            statsByYear, // ✅ إرجاع الإحصائيات الجديدة
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
        // ✅ جلب نقاط الخبرة مع باقي البيانات
        const users = await User.find({})
            .select('-password -__v') // تحسين الأداء
            .sort({ createdAt: -1 });
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

// @desc    Get all AI logs
// @route   GET /api/admin/ailogs
// @access  Admin
exports.getAiLogs = async (req, res) => {
    try {
        const logs = await AiLog.find({})
            .populate('user', 'displayName email')
            .sort({ createdAt: -1 })
            .limit(100);

        res.status(200).json(logs);
    } catch (error) {
        console.error('[Admin AI Logs Error]:', error);
        res.status(500).json({ message: 'Server error fetching AI logs.' });
    }
};

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

// --- ✅ [إضافة جديدة] تعديل السنة الدراسية للمستخدم ---
// @desc    Update user study year
// @route   PUT /api/admin/users/:id/year
// @access  Admin
exports.updateUserStudyYear = async (req, res) => {
    try {
        const { year } = req.body;
        if (!year) {
            return res.status(400).json({ message: 'Year is required.' });
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { studyYear: year },
            { new: true }
        );

        if (!user) return res.status(404).json({ message: 'User not found.' });

        res.status(200).json({
            message: 'User study year updated successfully.',
            studyYear: user.studyYear,
        });
    } catch (error) {
        console.error('[Admin Update Year Error]:', error);
        res.status(500).json({ message: 'Server error updating user study year.' });
    }
};

// --- ✅ [إضافة جديدة] تعديل نقاط الخبرة للمستخدم ---
// @desc    Update user experience points
// @route   PUT /api/admin/users/:id/xp
// @access  Admin
exports.updateUserExperience = async (req, res) => {
    try {
        const { experiencePoints } = req.body;
        if (experiencePoints === undefined || experiencePoints === null) {
            return res.status(400).json({ message: 'Experience points are required.' });
        }

        const xp = parseInt(experiencePoints, 10);
        if (isNaN(xp)) {
            return res.status(400).json({ message: 'Invalid experience points value.' });
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { experiencePoints: xp },
            { new: true }
        );

        if (!user) return res.status(404).json({ message: 'User not found.' });

        res.status(200).json({
            message: 'User experience points updated successfully.',
            experiencePoints: user.experiencePoints,
        });
    } catch (error) {
        console.error('[Admin Update XP Error]:', error);
        res.status(500).json({ message: 'Server error updating user XP.' });
    }
};
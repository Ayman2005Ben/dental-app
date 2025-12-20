// DENTAL-QUEST-BACKEND/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
    let token;

    try {
        // 1️⃣ استخراج التوكن من الهيدر
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1];
        }

        // 2️⃣ إذا لا يوجد توكن
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized, no token'
            });
        }

        // 3️⃣ التحقق من صحة التوكن
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 4️⃣ جلب المستخدم
        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized, user not found'
            });
        }

        // 5️⃣ ربط المستخدم بالطلب
        req.user = user;

        // 6️⃣ تحديث النشاط (كما كان عندك)
        const userToUpdate = await User.findById(user._id);
        if (userToUpdate) {
            const now = new Date();
            const lastSeen = new Date(userToUpdate.lastSeen || now);
            const diffSeconds = Math.round(
                (now.getTime() - lastSeen.getTime()) / 1000
            );

            if (diffSeconds < 300) {
                userToUpdate.totalTimeSpent =
                    (userToUpdate.totalTimeSpent || 0) + diffSeconds;
            }

            userToUpdate.lastSeen = now;
            await userToUpdate.save();
        }

        // 7️⃣ السماح للطلب بالمرور ✅ (النقطة الحاسمة)
        return next();

    } catch (error) {
        console.error('Authentication middleware error:', error.message);
        return res.status(401).json({
            success: false,
            message: 'Not authorized, token failed'
        });
    }
};

// --- حماية مسارات المشرف ---
const protectAdmin = (req, res, next) => {
    protect(req, res, () => {
        if (req.user && req.user.role === 'admin') {
            return next();
        } else {
            return res.status(403).json({
                success: false,
                message: 'Not authorized as admin'
            });
        }
    });
};

module.exports = { protect, protectAdmin };

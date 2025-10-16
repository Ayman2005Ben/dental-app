// DENTAL-QUEST-BACKEND/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // 1. استخلاص التوكن
            token = req.headers.authorization.split(' ')[1];

            // 2. التحقق من صحة التوكن
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // 3. البحث عن المستخدم وإرفاقه بالطلب
            req.user = await User.findById(decoded.id).select('-password');

            // 4. التحقق من وجود المستخدم (هذا هو الإصلاح الحاسم)
            if (!req.user) {
                return res.status(401).json({ message: 'Not authorized, user for this token no longer exists.' });
            }

            // 5. تحديث نشاط المستخدم
            // نحتاج لجلب الوثيقة الكاملة (بدون .select('-password')) للتعديل والحفظ
            const userToUpdate = await User.findById(req.user._id); 
             if (userToUpdate) {
                const now = new Date();
                const lastSeen = new Date(userToUpdate.lastSeen);
                // الفارق بالثواني
                const diffSeconds = Math.round((now.getTime() - lastSeen.getTime()) / 1000);

                // نعتبر الجلسة مستمرة إذا كان الفارق أقل من 5 دقائق (300 ثانية)
                if (diffSeconds < 300) { 
                    userToUpdate.totalTimeSpent += diffSeconds;
                }
                userToUpdate.lastSeen = now;
                await userToUpdate.save();
            }

            // 6. السماح للطلب بالمرور
            next();

        } catch (error) {
            console.error("Authentication middleware error:", error.message);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// --- ✅ إضافة جديدة: دالة حماية مسارات المشرف ---
const protectAdmin = (req, res, next) => {
    // أولاً، نستخدم دالة الحماية العادية للتأكد من أن المستخدم مسجل دخوله
    protect(req, res, () => {
        // إذا نجحت، نتحقق من دور المستخدم
        if (req.user && req.user.role === 'admin') {
            next(); // إذا كان مشرفاً، اسمح له بالمرور
        } else {
            // إذا لم يكن مشرفاً، امنعه من الوصول
            res.status(403).json({ message: 'Not authorized as an admin. Access denied.' });
        }
    });
};


module.exports = { protect, protectAdmin }; // <-- تم تصدير الدالة الجديدة
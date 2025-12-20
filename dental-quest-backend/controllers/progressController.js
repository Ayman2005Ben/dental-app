const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const fetch = require('node-fetch');
const LessonProgress = require('../models/UserLessonProgress');

// إعداد كلاوديناري بالمفاتيح الموجودة في ملف .env
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// --- 1. دالة الحفظ: ترفع الملف للسحاب وتحفظ الرابط في الداتابيز ---
exports.saveLessonProgress = async (req, res) => {
    try {
        const { lessonId, progressData } = req.body;
        const userId = req.user._id.toString();

        if (!lessonId || !progressData) {
            return res.status(400).json({ success: false, message: 'Missing data' });
        }

        // 1. تحويل البيانات (JSON) إلى نص
        const dataString = JSON.stringify(progressData);

        // 2. تجهيز اسم مميز للملف (عشان نحدث عليه دايماً وما نكثر ملفات)
        // الاسم سيكون: progress_USERID_LESSONID
        const publicId = `progress_${userId}_${lessonId.replace(/[^a-zA-Z0-9]/g, '_')}`;

        // 3. عملية الرفع المباشر من الذاكرة (Stream Upload)
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                resource_type: 'raw', // نوع "raw" يعني ملف عادي (json) مش صورة
                public_id: publicId,
                folder: 'smart_study_data', // اسم المجلد في كلاوديناري
                overwrite: true,
                format: 'json'
            },
            async (error, result) => {
                if (error) {
                    console.error('Cloudinary Upload Error:', error);
                    return res.status(500).json({ success: false, message: 'Cloud save failed' });
                }

                // 4. الرفع نجح! الآن نحفظ الرابط في MongoDB
                await LessonProgress.findOneAndUpdate(
                    { user: userId, lessonId: lessonId },
                    {
                        dataUrl: result.secure_url, // هذا الرابط الآمن
                        lastUpdated: Date.now()
                    },
                    { upsert: true, new: true } // Upsert: لو مش موجود أنشئه، لو موجود حدثه
                );

                res.status(200).json({ success: true, message: 'Progress saved successfully!' });
            }
        );

        // تنفيذ الرفع
        streamifier.createReadStream(dataString).pipe(uploadStream);

    } catch (err) {
        console.error('Save Error:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// --- 2. دالة الاسترجاع: تجيب الرابط ثم تحمل البيانات ---
exports.getLessonProgress = async (req, res) => {
    try {
        const { lessonId } = req.query;
        const userId = req.user._id;

        // 1. دور على الرابط في الداتابيز
        const record = await LessonProgress.findOne({ user: userId, lessonId: lessonId });

        if (!record || !record.dataUrl) {
            // الطالب جديد على هذا الدرس، نرجع له صفحة بيضاء
            return res.status(200).json({ success: true, data: {} });
        }

        // 2. عندنا الرابط، نروح نجيب البيانات من كلاوديناري
        const response = await fetch(record.dataUrl);

        if (!response.ok) {
            return res.status(200).json({ success: true, data: {} });
        }

        const jsonData = await response.json();

        // 3. نرجع البيانات للطالب
        res.status(200).json({ success: true, data: jsonData });

    } catch (err) {
        console.error('Get Progress Error:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
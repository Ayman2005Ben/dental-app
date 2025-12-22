const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const fetch = require('node-fetch'); // تأكد أن مكتبة node-fetch مثبتة
// ✅ استدعاء الموديل الصحيح (الذي يحتوي على dataUrl)
const LessonProgress = require('../models/UserLessonProgress');

// إعداد Cloudinary (يجب أن تكون هذه المتغيرات موجودة في ملف .env)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// =============================================================================
//  1. دالة الحفظ (Save Progress)
//  - تستقبل: بيانات الفلاش كاردز، تواريخ المراجعة، الكويزات، ومواقع الشات.
//  - تقوم بـ: رفع ملف JSON إلى Cloudinary وتحديث الرابط في MongoDB.
// =============================================================================
exports.saveLessonProgress = async (req, res) => {
    try {
        const { lessonId, progressData } = req.body;
        const userId = req.user._id.toString(); // نفترض وجود الـ User ID من الـ Middleware

        if (!lessonId || !progressData) {
            return res.status(400).json({ success: false, message: 'Missing lessonId or progressData' });
        }

        // 1. تحويل البيانات المعقدة (JSON) إلى نص
        const dataString = JSON.stringify(progressData);

        // 2. إنشاء اسم فريد للملف (يعتمد على ID الطالب والدرس)
        // هذا يضمن أننا نحدث نفس الملف دائماً ولا ننشئ ملفات جديدة بلا داعٍ
        const publicId = `progress_${userId}_${lessonId.replace(/[^a-zA-Z0-9]/g, '_')}`;

        // 3. الرفع المباشر (Stream Upload) إلى Cloudinary
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                resource_type: 'raw', // "raw" لأننا نرفع ملف JSON نصي وليس صورة
                public_id: publicId,
                folder: 'smart_study_data', // المجلد في سحابة Cloudinary
                overwrite: true, // استبدال الملف القديم بالجديد (تحديث التقدم)
                format: 'json'
            },
            async (error, result) => {
                if (error) {
                    console.error('Cloudinary Upload Error:', error);
                    return res.status(500).json({ success: false, message: 'Cloud save failed' });
                }

                // 4. بعد نجاح الرفع، نحفظ "الرابط" فقط في قاعدة البيانات
                await LessonProgress.findOneAndUpdate(
                    { user: userId, lessonId: lessonId },
                    {
                        dataUrl: result.secure_url, // رابط الملف الآمن (HTTPS)
                        lastUpdated: Date.now()
                    },
                    { upsert: true, new: true } // Upsert: أنشئ السجل لو لم يكن موجوداً
                );

                res.status(200).json({ success: true, message: 'Progress saved successfully!' });
            }
        );

        // تنفيذ عملية الرفع
        streamifier.createReadStream(dataString).pipe(uploadStream);

    } catch (err) {
        console.error('Save Controller Error:', err);
        res.status(500).json({ success: false, message: 'Server error during save' });
    }
};

// =============================================================================
//  2. دالة الاسترجاع (Get Progress)
//  - تقوم بـ: جلب الرابط من MongoDB، ثم تحميل ملف JSON من Cloudinary وإرجاعه للواجهة.
// =============================================================================
exports.getLessonProgress = async (req, res) => {
    try {
        const { lessonId } = req.query;
        const userId = req.user._id;

        // 1. البحث عن السجل في قاعدة البيانات
        const record = await LessonProgress.findOne({ user: userId, lessonId: lessonId });

        // حالة 1: الطالب يفتح الدرس لأول مرة (لا يوجد سجل)
        if (!record || !record.dataUrl) {
            return res.status(200).json({ success: true, data: null }); // نرجع null ليعرف الفرونت إند أنه درس جديد
        }

        // 2. جلب البيانات الفعلية من رابط Cloudinary
        const response = await fetch(record.dataUrl);

        if (!response.ok) {
            // في حالة نادرة (الرابط موجود لكن الملف حذف من السحابة)
            return res.status(200).json({ success: true, data: null });
        }

        const jsonData = await response.json();

        // 3. إرسال البيانات الكاملة (Spaced Repetition Data, Quiz Results, etc.)
        res.status(200).json({ success: true, data: jsonData });

    } catch (err) {
        console.error('Get Progress Error:', err);
        res.status(500).json({ success: false, message: 'Server error retrieving progress' });
    }
};
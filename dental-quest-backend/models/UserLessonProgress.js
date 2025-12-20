const mongoose = require('mongoose');

const LessonProgressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lessonId: { type: String, required: true }, // رابط الدرس أو الـ ID تبعه

    // هذا هو الرابط السحري من Cloudinary
    dataUrl: { type: String },

    lastUpdated: { type: Date, default: Date.now }
});

// هذا السطر يضمن أن كل طالب لديه "حفظ واحد" فقط لكل درس (عشان ما نكرر البيانات)
LessonProgressSchema.index({ user: 1, lessonId: 1 }, { unique: true });

module.exports = mongoose.model('LessonProgress', LessonProgressSchema);
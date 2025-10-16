// models/lessonModel.js
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    title: { // هذا سيصبح الآن اسم الدرس (اسم المجلد)
        type: String,
        required: true
    },
    // ▼▼▼  -- التغيير هنا -- ▼▼▼
    filePaths: [{ // أصبح اسمه filePaths وهو الآن مصفوفة
        type: String,
        required: true
    }],
    // ▲▲▲  -- انتهى التغيير -- ▲▲▲
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    }
});

module.exports = mongoose.model('Lesson', lessonSchema);
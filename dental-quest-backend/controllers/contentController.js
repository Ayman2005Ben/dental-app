// controllers/contentController.js
const Subject = require('../models/subjectModel');
const Lesson = require('../models/lessonModel');

// ... (دالة getSubjectsByYear تبقى كما هي)
const getSubjectsByYear = async (req, res) => {
    try {
        const subjects = await Subject.find({ year: req.params.year });
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};


const getLessonsBySubject = async (req, res) => {
    try {
        // ▼▼▼  -- التغيير هنا -- ▼▼▼
        const lessons = await Lesson.find({ subject: req.params.subjectId }).select('title filePaths');
        // ▲▲▲  -- انتهى التغيير -- ▲▲▲
        res.status(200).json(lessons);
    } catch (error) {
        console.error('Error fetching lessons:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getSubjectsByYear,
    getLessonsBySubject
};
// DENTAL-QUEST-BACKEND/controllers/flashcardController.js

const Flashcard = require('../models/flashcardModel');
const Subject = require('../models/subjectModel');

// ✅ النسخة المحدثة من دالة إنشاء البطاقة
const createFlashcard = async (req, res) => {
    try {
        // استقبلنا 'interval' الجديد من الطلب
        const { subjectId, questionText, backContent, interval } = req.body;

        if (!subjectId || !questionText || !backContent) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        const subjectExists = await Subject.findById(subjectId);
        if (!subjectExists) {
            return res.status(404).json({ message: 'Subject not found.' });
        }

        // --- منطق التكرار المتباعد ---
        const reviewDate = new Date();
        // إذا تم إرسال 'interval'، أضف عدد الأيام إلى التاريخ الحالي
        if (interval) {
            reviewDate.setDate(reviewDate.getDate() + parseInt(interval, 10));
        }

        const newFlashcard = new Flashcard({
            user: req.user._id,
            subject: subjectId,
            questionText,
            backContent,
            interval: interval || 1, // القيمة الافتراضية هي يوم واحد
            reviewDate: reviewDate   // التاريخ المحسوب للمراجعة
        });

        const savedFlashcard = await newFlashcard.save();
        res.status(201).json(savedFlashcard);

    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: 'This flashcard already exists in your collection.' });
        }
        console.error('Error creating flashcard:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// ✅ دالة جلب وتجميع البطاقات حسب المادة
const getFlashcards = async (req, res) => {
    try {
        const flashcardsBySubject = await Flashcard.aggregate([
            { $match: { user: req.user._id } },
            { $sort: { createdAt: 1 } },
            {
                $group: {
                    _id: "$subject",
                    cards: { $push: "$$ROOT" }
                }
            },
            {
                $lookup: {
                    from: "subjects",
                    localField: "_id",
                    foreignField: "_id",
                    as: "subjectDetails"
                }
            },
            { $unwind: "$subjectDetails" },
            {
                $project: {
                    _id: 0,
                    subjectId: "$_id",
                    subjectName: "$subjectDetails.name",
                    cards: 1
                }
            }
        ]);

        res.status(200).json(flashcardsBySubject);

    } catch (error) {
        console.error('Error fetching flashcards:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// ✅ التصدير النهائي للدوال
module.exports = { 
    createFlashcard,
    getFlashcards 
};

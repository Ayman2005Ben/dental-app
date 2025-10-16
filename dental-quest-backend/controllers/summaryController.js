// controllers/summaryController.js
const Summary = require('../models/summaryModel');

exports.getBySubject = async (req, res) => {
  try {
    const { subjectId } = req.params;
    if (!subjectId) return res.status(400).json({ message: 'subjectId is required' });

    // نرجّع العنوان والمسار فقط (كافي للفرونت)
    const items = await Summary.find({ subject: subjectId }).select('title filePath').lean();
    return res.json(items);
  } catch (e) {
    console.error('get summaries error:', e);
    return res.status(500).json({ message: 'Server Error' });
  }
};

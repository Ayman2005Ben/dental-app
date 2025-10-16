// utils/aiController.js
const { groqChat } = require('./aiClient');

exports.askAI = async (req, res) => {
  try {
    const { question, context = {} } = req.body || {};
    if (!question || !question.trim()) {
      return res.status(400).json({ message: 'No question' });
    }

    const systemPrompt = 'You are Dental Quest AI. Be clear, concise, and accurate for dentistry students.';
    const messages = [
      { role: 'system', content: systemPrompt },
      {
        role: 'user',
        content: context && Object.keys(context).length
          ? `${question}\n\n---\n${JSON.stringify(context)}`
          : question
      }
    ];

    const answer = await groqChat({ messages });
    return res.json({ answer });
  } catch (e) {
    console.error('askAI error:', e);
    return res.status(500).json({ message: 'AI server error' });
  }
};

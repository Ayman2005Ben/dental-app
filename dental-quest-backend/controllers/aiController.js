// controllers/aiController.js

const { groqChat } = require('../utils/aiClient.js');

// @desc    Ask a question to the Groq AI Chat
// @route   POST /api/ai/ask
// @access  Private
const askAI = async (req, res) => {
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ message: 'Question is required.' });
    }

    // إعداد سجل المحادثة الذي سيتم إرساله إلى Groq
    const chatHistory = [
        { 
            role: "system", 
            content: `
            أنت 'Dentist AI'، مساعد ذكاء اصطناعي أكاديمي فائق التخصص، تم تطويرك بواسطة الدكتور أيمن لمساعدة طلاب طب الأسنان في الجزائر.
            قواعدك الأساسية:
            1. الهوية: عرف عن نفسك دائمًا كـ 'Dentist AI'.
            2. الخبرة: تخصصك هو منهج طب الأسنان في الجزائر.
            3. اللغات: أجب بنفس لغة سؤال الطالب (عربية فصحى، فرنسية، أو إنجليزية).
            4. الدقة أولاً: الدقة العلمية هي أولويتك القصوى.
            5. الأسلوب التعليمي: اشرح المفاهيم بطريقة تربوية واستخدم تنسيق الماركدون دائمًا (عناوين، قوائم، نص عريض) لتنظيم إجاباتك.
            ` 
        },
        {
            role: "user",
            content: question
        }
    ];

    try {
        const aiResponse = await groqChat({ messages: chatHistory });
        res.status(200).json({ answer: aiResponse });
    } catch (error) {
        console.error('Groq Chat Error:', error);
        res.status(500).json({ message: 'Failed to get a response from the AI service.' });
    }
};

module.exports = { askAI };
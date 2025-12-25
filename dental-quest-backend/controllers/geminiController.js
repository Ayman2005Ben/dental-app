// controllers/geminiController.js

const { parseKeys } = require('../utils/keyPool');
const pdf = require('pdf-parse');
const { groqChat } = require('../utils/aiClient.js');
const fetch = require('node-fetch');
const AiLog = require('../models/aiLogModel');
const fs = require('fs');
const path = require('path');

// تحميل المفاتيح في مصفوفة
const geminiKeys = parseKeys('GEMINI_API_KEYS');

// --- 🛡️ نظام الإنقاذ الذكي (Failover System) ---
// هذه الدالة هي القلب الجديد: تحاول بالمفتاح الأول، إذا فشل تنتقل للثاني فوراً
async function executeGeminiRequest(model, requestBody) {
  let lastError = null;

  // التأكد من وجود مفاتيح
  if (!geminiKeys || geminiKeys.length === 0) {
    throw new Error('No Gemini API keys configured on server.');
  }

  // الدوران على جميع المفاتيح المتوفرة
  for (let i = 0; i < geminiKeys.length; i++) {
    const apiKey = geminiKeys[i].key || geminiKeys[i];

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (response.ok && !data.error) {
        return data;
      }

      console.warn(`⚠️ Key #${i + 1} failed (Status: ${response.status}). Trying next key... Error: ${data.error?.message || 'Unknown'}`);
      lastError = new Error(data.error?.message || `API Error ${response.status}`);

    } catch (err) {
      console.error(`❌ Connection error with Key #${i + 1}: ${err.message}. Trying next...`);
      lastError = err;
    }
  }

  throw new Error(`All Gemini keys failed. Last error: ${lastError?.message}`);
}

// --- الدوال المساعدة ---
async function logAiRequest(req, task, prompt, status, response = '', tokenCount = 0, duration = 0) {
  try {
    const promptToLog = prompt || `[No prompt available for task: ${task}]`;
    await AiLog.create({
      user: req.user?._id,
      task,
      prompt: promptToLog.slice(0, 1000),
      response: response?.toString().slice(0, 2000),
      status,
      tokenCount,
      duration
    });
  } catch (err) {
    console.error('⚠️ Failed to log AI request:', err.message);
  }
}

function checkAiAccess(req, res) {
  if (!req.user?.canUseAI) {
    res.status(403).json({ message: 'Your AI access has been restricted by the administrator.' });
    return false;
  }
  return true;
}


// ============================================================
// 1. دوال التعامل مع الوسائط والملفات (القديمة)
// ============================================================

// --- 🖼️ تحليل الصور ---
exports.handleImageQuery = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  try {
    if (!req.file || !req.body.prompt)
      return res.status(400).json({ message: 'Prompt and image file are required.' });

    const requestBody = {
      contents: [{ parts: [{ text: req.body.prompt }, { inline_data: { mime_type: req.file.mimetype, data: req.file.buffer.toString('base64') } }] }],
    };

    console.log('🖼️ Sending Image request with Failover...');
    const data = await executeGeminiRequest('gemini-2.5-flash-lite', requestBody);

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
    res.status(200).json({ answer });
    await logAiRequest(req, 'image', req.body.prompt, 'success', answer);
  } catch (error) {
    console.error('[Gemini Image Error]:', error);
    await logAiRequest(req, 'image', req.body.prompt || 'Prompt not available', 'error', error.message);
    res.status(500).json({ message: 'Error processing image (All keys failed).', errorDetail: error.message });
  }
};

// --- 🎧 تحليل الصوت ---
exports.handleAudioQuery = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  try {
    if (!req.file || !req.body.prompt)
      return res.status(400).json({ message: 'Prompt and audio file are required.' });

    const requestBody = {
      contents: [{ parts: [{ text: req.body.prompt }, { inline_data: { mime_type: req.file.mimetype, data: req.file.buffer.toString('base64') } }] }],
    };

    console.log('🎧 Sending Audio request with Failover...');
    const data = await executeGeminiRequest('gemini-2.5-flash-lite', requestBody);

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
    res.status(200).json({ answer });
    await logAiRequest(req, 'audio', req.body.prompt, 'success', answer);
  } catch (error) {
    console.error('[Gemini Audio Error]:', error);
    await logAiRequest(req, 'audio', req.body.prompt || 'Prompt not available', 'error', error.message);
    res.status(500).json({ message: 'Error processing audio.', errorDetail: error.message });
  }
};

// --- 🧠 الخريطة الذهنية (من ملف PDF) ---
exports.generateMindMap = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  let prompt = '';
  try {
    if (!req.file) return res.status(400).json({ message: 'No PDF file uploaded.' });
    const data = await pdf(req.file.buffer);
    if (!data.text) return res.status(400).json({ message: 'Could not extract text from PDF.' });

    prompt = `Summarize the following text as a hierarchical mind map in Markdown syntax. Use "#" for the main title, "##" for main topics, and "-" for subtopics. The main title should be the core subject of the text. The language must be the same as the source text. Do NOT include any explanation, only the structured mind map text in clean Markdown. TEXT:\n---\n${data.text.substring(0, 30000)}\n---`;

    const requestBody = { contents: [{ parts: [{ text: prompt }] }] };
    const responseData = await executeGeminiRequest('gemini-2.5-flash-lite', requestBody);

    const markdownContent = responseData.candidates?.[0]?.content?.parts?.[0]?.text?.replace(/```markdown|```/g, '').trim() || '# Error\n- Could not generate mind map.';
    res.status(200).json({ markdown: markdownContent });
    await logAiRequest(req, 'mindmap', prompt, 'success', markdownContent);
  } catch (err) {
    console.error('[Gemini Mind Map Error]:', err);
    await logAiRequest(req, 'mindmap', prompt, 'error', err.message);
    res.status(500).json({ message: 'Failed to generate mind map data', errorDetail: err.message });
  }
};

// --- ❓ إنشاء Quiz (من ملف PDF) ---
exports.generateQuiz = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  let prompt = '';
  try {
    console.log('📘 Sending Quiz request with Failover...');
    const { count = 10 } = req.body;
    const questionCount = Math.min(parseInt(count, 10), 20);
    if (!req.file) return res.status(400).json({ message: 'No PDF file uploaded.' });

    const data = await pdf(req.file.buffer);
    if (!data.text) return res.status(400).json({ message: 'Could not extract text from PDF.' });

    prompt = `
    Create exactly ${questionCount} multiple-choice questions based on this text.
    Format: JSON array of objects { question, options (array), correctOptionIndexes (array of indexes), explanation }.
    Return ONLY JSON.
    TEXT:\n---\n${data.text.substring(0, 30000)}\n---`;

    const requestBody = { contents: [{ parts: [{ text: prompt }] }] };
    const responseData = await executeGeminiRequest('gemini-2.0-flash-lite', requestBody);

    const quizText = responseData.candidates?.[0]?.content?.parts?.[0]?.text;
    const cleanedText = quizText.replace(/```json|```/g, '').trim();
    const quizJson = JSON.parse(cleanedText);

    res.status(200).json(quizJson);
    await logAiRequest(req, 'quiz', prompt, 'success', JSON.stringify(quizJson));

  } catch (error) {
    console.error('[Gemini Quiz Error]:', error);
    await logAiRequest(req, 'quiz', prompt, 'error', error.message);
    res.status(500).json({ message: 'Failed to generate quiz.', errorDetail: error.message });
  }
};

// --- 💡 إنشاء Flashcards (من ملف PDF - باستخدام Groq) ---
exports.generateFlashcards = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  let prompt = '';
  try {
    console.log('💡 Sending flashcards request to Groq...');
    const { count = 10 } = req.body;
    const cardCount = Math.min(parseInt(count, 10), 25);

    if (!req.file) return res.status(400).json({ message: 'No PDF file uploaded.' });
    const data = await pdf(req.file.buffer);
    if (!data.text) return res.status(400).json({ message: 'Could not extract text from PDF.' });

    prompt = `
    Create exactly ${cardCount} flashcards from this text.
    Format: JSON array of objects { front, back }. Return ONLY JSON.
    TEXT:\n---\n${data.text.substring(0, 30000)}\n---`;

    const responseText = await groqChat({ messages: [{ role: 'user', content: prompt }], json: true });
    const flashcardsJson = JSON.parse(responseText.replace(/```json|```/g, '').trim());

    res.status(200).json(flashcardsJson);
    await logAiRequest(req, 'flashcards', prompt, 'success', JSON.stringify(flashcardsJson));

  } catch (error) {
    console.error('[Groq Flashcards Error]:', error);
    await logAiRequest(req, 'flashcards', prompt, 'error', error.message);
    res.status(500).json({ message: 'Failed to generate flashcards.', errorDetail: error.message });
  }
};

// --- 🌍 الترجمة ---
exports.translateContent = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  let prompt = '';
  try {
    if (!req.body.content || !req.body.targetLanguage)
      return res.status(400).json({ message: 'Content and target language are required.' });

    const contentAsString = JSON.stringify(req.body.content, null, 2);
    prompt = `Translate only the string values in this JSON object to ${req.body.targetLanguage}. Keep keys unchanged. Return valid JSON only.\n\n${contentAsString}`;

    const translatedText = await groqChat({ messages: [{ role: 'user', content: prompt }] });
    const cleaned = translatedText.replace(/```json|```/g, '').trim();
    const translatedJson = JSON.parse(cleaned);

    res.status(200).json(translatedJson);
    await logAiRequest(req, 'translation', prompt, 'success', JSON.stringify(translatedJson));

  } catch (error) {
    console.error('Translation Error:', error);
    await logAiRequest(req, 'translation', prompt, 'error', error.message);
    res.status(500).json({ message: 'Failed to translate content.', errorDetail: error.message });
  }
};

// --- 📝 إنشاء ملخص (من ملف PDF) ---
exports.generateSummary = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  let prompt = '';
  try {
    if (!req.file) return res.status(400).json({ message: 'No PDF file uploaded.' });
    const data = await pdf(req.file.buffer);
    if (!data.text) return res.status(400).json({ message: 'Could not extract text from PDF.' });

    prompt = `Summarize the following academic text for dentistry students in clear, well-structured paragraphs. Use Markdown.\n\nTEXT:\n${data.text.substring(0, 30000)}`;

    const requestBody = { contents: [{ parts: [{ text: prompt }] }] };
    const responseData = await executeGeminiRequest('gemini-2.5-flash-lite', requestBody);

    const summaryText = responseData.candidates?.[0]?.content?.parts?.[0]?.text || 'Could not generate summary.';
    res.status(200).json({ summary: summaryText });
    await logAiRequest(req, 'summary', prompt, 'success', summaryText);
  } catch (error) {
    console.error("[Gemini Summary Error]:", error);
    await logAiRequest(req, 'summary', prompt, 'error', error.message);
    if (!res.headersSent) {
      res.status(500).json({ message: 'Failed to generate summary.', errorDetail: error.message });
    }
  }
};

// --- 🦷 تقييم النحت (Sculpture) ---
exports.handleSculptureEvaluation = async (req, res) => {
  if (req.user?.studyYear !== '2') {
    return res.status(403).json({ success: false, error: 'This feature is exclusively available for 2nd year students.' });
  }

  if (!checkAiAccess(req, res)) return;
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ success: false, error: 'No images uploaded.' });
  }

  let builtPrompt = '';
  let startTime = Date.now();

  try {
    console.log('🦷 Sending Sculpture Evaluation request with Failover...');

    let referenceText = '';
    try {
      const pdfPath = path.join(__dirname, '..', 'public', 'pdf', 'Les planches des dents.pdf');
      const pdfBuffer = fs.readFileSync(pdfPath);
      const pdfData = await pdf(pdfBuffer);
      referenceText = pdfData.text;
    } catch (pdfErr) {
      console.error("CRITICAL PDF LOAD ERROR:", pdfErr);
      throw new Error('Could not load the reference PDF document.');
    }

    const imageParts = req.files.map(file => ({
      inline_data: { mime_type: file.mimetype, data: file.buffer.toString('base64') }
    }));

    builtPrompt = `
    Evaluate these images of a soap-carved tooth based on the reference text.
    Return a single JSON object:
    { "evaluationText": "...", "grade": number, "errorCoordinates": [{ "x": 50, "y": 30, "comment": "..." }] }
    REFERENCE:\n${referenceText.substring(0, 30000)}`;

    const requestParts = [{ text: builtPrompt }, ...imageParts];
    const requestBody = {
      contents: [{ parts: requestParts }],
      generationConfig: { "maxOutputTokens": 8192 }
    };

    const data = await executeGeminiRequest('gemini-2.5-flash-lite', requestBody);
    const aiResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    // استخراج JSON من الرد باستخدام Regex (لضمان الدقة)
    let resultJson = { evaluationText: null, grade: null, errorCoordinates: [] };
    const evalMatch = aiResponseText.match(/"?evaluationText"?\s*:\s*"([\s\S]*?)"\s*,\s*"?grade"?/);
    if (evalMatch && evalMatch[1]) resultJson.evaluationText = evalMatch[1];

    const gradeMatch = aiResponseText.match(/"?grade"?\s*:\s*(\d+(\.\d+)?)/);
    if (gradeMatch && gradeMatch[1]) resultJson.grade = parseFloat(gradeMatch[1]);

    const coordsMatch = aiResponseText.match(/"?errorCoordinates"?\s*:\s*(\[[\s\S]*?\])/);
    if (coordsMatch && coordsMatch[1]) resultJson.errorCoordinates = JSON.parse(coordsMatch[1]);

    const durationMs = Date.now() - startTime;
    await logAiRequest(req, 'sculpture', builtPrompt, 'success', JSON.stringify(resultJson), 0, durationMs);
    res.status(200).json({ success: true, result: resultJson });

  } catch (error) {
    console.error('[Gemini Sculpture Error]:', error);
    const durationMs = Date.now() - startTime;
    logAiRequest(req, 'sculpture', builtPrompt, 'error', error.message, 0, durationMs).catch(() => { });
    res.status(500).json({ success: false, error: 'Server error processing evaluation', details: error.message });
  }
};


// ============================================================
// ✅ 2. دوال التعامل مع النصوص (الجديدة - لإصلاح الخطأ)
// ============================================================

// --- 1. كويز من نص مباشر ---
exports.generateQuizFromText = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  try {
    const { text, count = 5 } = req.body;
    if (!text) return res.status(400).json({ message: 'Text content is required' });

    const prompt = `Create a quiz with ${count} multiple-choice questions based on this text.
    Format: JSON array of objects { question, options (array), correctOptionIndexes (array of one index), explanation }.
    Return ONLY JSON. Do not include markdown formatting.
    TEXT: "${text.substring(0, 15000)}..."`;

    const requestBody = { contents: [{ parts: [{ text: prompt }] }] };
    const data = await executeGeminiRequest('gemini-2.0-flash-lite', requestBody);

    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textResponse) throw new Error("Empty response from AI");

    const cleanJson = textResponse.replace(/```json|```/g, '').trim();
    const validJson = JSON.parse(cleanJson);

    res.json(validJson);
    await logAiRequest(req, 'quiz-text', prompt, 'success', cleanJson);
  } catch (error) {
    console.error('Quiz Text Error:', error);
    res.status(500).json({ message: 'AI generation failed', errorDetail: error.message });
    await logAiRequest(req, 'quiz-text', 'text-request', 'error', error.message);
  }
};

// --- 2. فلاش كاردز من نص مباشر ---
// --- 2. فلاش كاردز من نص مباشر ---
exports.generateFlashcardsFromText = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  try {
    // 1. استقبال متغير اللغة من الطلب (language)
    const { text, count = 5, language = 'French' } = req.body;

    if (!text) return res.status(400).json({ message: 'Text content is required' });

    // 2. تحديث التعليمات لإجبار اللغة المطلوبة
    const prompt = `Create ${count} flashcards (front/back) from this text.
    The content MUST be in ${language} language (same as source text).
    Format: JSON array of objects { front, back }. Return ONLY JSON.
    TEXT: "${text.substring(0, 15000)}..."`;

    const requestBody = { contents: [{ parts: [{ text: prompt }] }] };
    const data = await executeGeminiRequest('gemini-2.5-flash', requestBody);

    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textResponse) throw new Error("Empty response from AI");

    const cleanJson = textResponse.replace(/```json|```/g, '').trim();
    res.json({ flashcards: JSON.parse(cleanJson) });

    await logAiRequest(req, 'flashcards-text', prompt, 'success', cleanJson);
  } catch (error) {
    console.error('Flashcards Text Error:', error);
    res.status(500).json({ message: 'AI generation failed', errorDetail: error.message });
  }
};

// --- 3. خريطة ذهنية من نص مباشر ---
exports.generateMindMapFromText = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'Text content is required' });

    const prompt = `Create a markdown mindmap (markmap format) for this text. Return ONLY markdown.
    TEXT: "${text.substring(0, 15000)}..."`;

    const requestBody = { contents: [{ parts: [{ text: prompt }] }] };
    const data = await executeGeminiRequest('gemini-2.5-flash-lite', requestBody);

    const markdown = data.candidates?.[0]?.content?.parts?.[0]?.text?.replace(/```markdown|```/g, '').trim();

    res.json({ markdown });
    await logAiRequest(req, 'mindmap-text', prompt, 'success', markdown);
  } catch (error) {
    console.error('Mindmap Text Error:', error);
    res.status(500).json({ message: 'AI generation failed', errorDetail: error.message });
  }
};
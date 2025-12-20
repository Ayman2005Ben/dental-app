// controllers/geminiController.js

const { parseKeys } = require('../utils/keyPool'); // removed makePool as we will iterate manually
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
    // استخراج نص المفتاح (سواء كان كائن أو نص مباشرة)
    const apiKey = geminiKeys[i].key || geminiKeys[i];

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      // إذا نجح الطلب (Status 200) ولم يكن هناك خطأ في الرد
      if (response.ok && !data.error) {
        return data; // مبروك! نرجع البيانات ونوقف المحاولات
      }

      // إذا كان الخطأ 429 (Too Many Requests) أو مشاكل سيرفر، نعتبره فشل للمفتاح ونكمل
      // أما إذا كان الخطأ 400 (مشكلة في الداتا المرسلة) غالباً لن يحلها تغيير المفتاح، لكن سنجرب التالي للاحتياط
      console.warn(`⚠️ Key #${i + 1} failed (Status: ${response.status}). Trying next key... Error: ${data.error?.message || 'Unknown'}`);
      lastError = new Error(data.error?.message || `API Error ${response.status}`);

    } catch (err) {
      console.error(`❌ Connection error with Key #${i + 1}: ${err.message}. Trying next...`);
      lastError = err;
    }
  }

  // إذا وصلنا هنا، يعني جربنا كل المفاتيح وكلها فشلت
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
      duration // تم إضافة المدة الزمنية
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
    // استخدام الدالة الجديدة بدلاً من fetch المباشر
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

// --- 🧠 الخريطة الذهنية ---
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

// --- ❓ إنشاء Quiz ---
exports.generateQuiz = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  let prompt = '';
  try {
    console.log('📘 Sending Quiz request with Failover...');
    const { count = 10, language = 'the same language as the document' } = req.body;
    const questionCount = Math.min(parseInt(count, 10), 20);
    if (!req.file) return res.status(400).json({ message: 'No PDF file uploaded.' });

    if (!req.file.buffer || req.file.buffer.length === 0) {
      return res.status(400).json({ message: 'The uploaded PDF file is empty.' });
    }

    const data = await pdf(req.file.buffer);
    if (!data.text) return res.status(400).json({ message: 'Could not extract text from PDF.' });

    prompt = `
You are an expert quiz designer known for creating brutally difficult exams that push the limits of even the most prepared students. Your task is to create a final exam for advanced dentistry students based on the provided text. The goal is maximum difficulty.

Generate exactly ${questionCount} multiple-choice questions in French.

**NON-NEGOTIABLE RULES FOR EVERY QUESTION:**
1.  **Extreme Difficulty:** Every single question must be exceptionally hard. They must target the most obscure, easy-to-miss details: specific percentages, uncommon classifications, exceptions to rules, subtle differences between similar concepts, and data points hidden in dense text. Avoid general knowledge questions entirely.
2.  **Mandatory Multiple Correct Answers:** Every question MUST have two or three correct answers. No question should have only one correct answer. This is a critical requirement.
3.  **Masterful Traps:** All incorrect options (distractors) must be highly plausible and cleverly designed to deceive students who have only a superficial understanding. Use common misconceptions, slightly incorrect numbers, or options that are correct in a different context as traps.

**CRITICAL OUTPUT FORMAT:**
-   Your entire response MUST be a single, valid JSON array. Do not include any introductory text, explanations, conversational filler like "Here is the quiz", or markdown code fences such as \`\`\`json.
-   Each object in the array represents one question and must have these exact keys:
    - "question": The question text (string).
    - "options": An array of 4-5 answer choices (array of strings).
    - "correctOptionIndexes": An array containing the 0-based indexes of ALL correct answers. Since every question has multiple correct answers, this array will always contain 2 or 3 numbers (e.g., \`[1, 3]\` or \`[0, 2, 4]\`).
    - "explanation": A detailed explanation that clearly justifies why EACH of the correct answers is right and why the incorrect options are wrong, referencing the source text.

**TEXT TO ANALYZE:**
---
${data.text.substring(0, 30000)}
---
`;

    const requestBody = { contents: [{ parts: [{ text: prompt }] }] };
    const responseData = await executeGeminiRequest('gemini-2.5-flash-lite', requestBody);

    if (!responseData.candidates?.[0]?.content?.parts?.[0]?.text) throw new Error("Gemini returned an empty or invalid response.");

    const quizText = responseData.candidates[0].content.parts[0].text;

    let cleanedText = quizText.replace(/```json|```/g, '').trim();
    cleanedText = cleanedText.replace(/[\x00-\x1F\x7F-\x9F]/g, ""); // تنظيف

    const quizJson = JSON.parse(cleanedText);

    res.status(200).json(quizJson);
    await logAiRequest(req, 'quiz', prompt, 'success', JSON.stringify(quizJson));

  } catch (error) {
    console.error('[Gemini Quiz Error]:', error);
    await logAiRequest(req, 'quiz', prompt, 'error', error.message);
    res.status(500).json({ message: 'Failed to generate quiz with Gemini.', errorDetail: error.message });
  }
};

// --- 💡 إنشاء Flashcards ---
exports.generateFlashcards = async (req, res) => {
  // هذه الدالة تستخدم Groq وليس Gemini، لذا تبقى كما هي
  if (!checkAiAccess(req, res)) return;
  let prompt = '';
  try {
    console.log('💡 Sending professional flashcards request to Groq...');
    const { count = 10, language = 'English' } = req.body;
    const cardCount = Math.min(parseInt(count, 10), 25);

    if (!req.file) return res.status(400).json({ message: 'No PDF file uploaded.' });
    const data = await pdf(req.file.buffer);
    if (!data.text) return res.status(400).json({ message: 'Could not extract text from PDF.' });

    prompt = `
You are an AI assistant tasked with creating extremely difficult flashcards for advanced students from the provided text. Your goal is to force deep learning and memorization of non-obvious information.

From the text below, extract exactly ${cardCount} flashcards in ${language}.

**MANDATORY RULES FOR ALL FLASHCARDS:**
1.  **[NEW] Expert Difficulty & Complexity:** Your goal is to create expert-level, exam-style "trap questions".
2.  **[NEW] Focus on Synthesis, Not Recall:** The 'front' of the card MUST force the student to think.
3.  **[NEW] Detailed Answers:** The 'back' must contain the detailed, comprehensive answer.
4.  **[EXISTING] Ignore Metadata.**

**CRITICAL OUTPUT FORMAT:**
-   The final output MUST be a valid JSON array of objects and nothing else.
-   Each object must have exactly two keys: "front" and "back".

**TEXT TO ANALYZE:**
---
${data.text.substring(0, 30000)}
---
`;

    const responseText = await groqChat({ messages: [{ role: 'user', content: prompt }], json: true });
    const flashcardsJson = JSON.parse(responseText.replace(/```json|```/g, '').trim());

    res.status(200).json(flashcardsJson);
    await logAiRequest(req, 'flashcards', prompt, 'success', JSON.stringify(flashcardsJson));

  } catch (error) {
    console.error('[Groq Flashcards Error]:', error);
    await logAiRequest(req, 'flashcards', prompt, 'error', error.message);
    res.status(500).json({ message: 'Failed to generate flashcards with Groq.', errorDetail: error.message });
  }
};

// --- 🌍 الترجمة ---
exports.translateContent = async (req, res) => {
  // تستخدم Groq - تبقى كما هي
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

// --- 📝 إنشاء ملخص ---
exports.generateSummary = async (req, res) => {
  if (!checkAiAccess(req, res)) return;
  let prompt = '';
  try {
    if (!req.file) return res.status(400).json({ message: 'No PDF file uploaded.' });
    const data = await pdf(req.file.buffer);
    if (!data.text) return res.status(400).json({ message: 'Could not extract text from PDF.' });

    prompt = `Summarize the following academic text for dentistry students in clear, well-structured paragraphs. Use Markdown for headings and bullet points if necessary.\n\nTEXT:\n${data.text.substring(0, 30000)}`;
    console.log('🧩 Sending Summary request with Failover...');

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
      if (!referenceText) throw new Error('PDF text is empty');
    } catch (pdfErr) {
      console.error("CRITICAL PDF LOAD ERROR:", pdfErr);
      throw new Error('Could not load the reference PDF document.');
    }

    const imageParts = req.files.map(file => ({
      inline_data: { mime_type: file.mimetype, data: file.buffer.toString('base64') }
    }));

    builtPrompt = `
You are a strict examiner in dental anatomy. Your *only* source of truth is the provided reference text ("Les planches des dents").
I am sending you ${req.files.length} images of a single soap-carved tooth.
You must also use this reference text to evaluate them:
--- REFERENCE TEXT START ---
${referenceText.substring(0, 30000)}
--- REFERENCE TEXT END ---

--- ANALYSIS TASKS ---
1. Analyze all images for a complete understanding.
2. Provide a detailed evaluation (in French) covering all anatomical errors compared to the REFERENCE TEXT.
3. Give a final numeric grade out of 20.
4. **CRITICAL TASK:** Identify 3-5 specific anatomical errors on the **first image**. For each error, provide its (x, y) coordinate and a brief comment. The (x, y) coordinates should be percentages (from 0.0 to 100.0) relative to the image dimensions.

--- CRITICAL OUTPUT FORMAT ---
You MUST respond with a single, valid JSON object.
{
  "evaluationText": "Your full text evaluation in French...",
  "grade": <numeric_grade_out_of_20>,
  "errorCoordinates": [ { "x": 50.5, "y": 30.2, "comment": "..." } ]
}
If you cannot find any errors, return an empty array: "errorCoordinates": []
    `;

    const requestParts = [{ text: builtPrompt }, ...imageParts];
    const requestBody = {
      contents: [{ parts: requestParts }],
      generationConfig: { "maxOutputTokens": 8192 }
    };

    // استخدام دالة Failover
    const data = await executeGeminiRequest('gemini-2.5-flash-lite', requestBody);

    if (!data.candidates || data.candidates.length === 0) {
      if (data.promptFeedback && data.promptFeedback.blockReason) {
        throw new Error(`Request blocked by Gemini. Reason: ${data.promptFeedback.blockReason}`);
      } else {
        throw new Error('Gemini returned an empty response (no candidates).');
      }
    }

    const aiResponseText = data.candidates[0]?.content?.parts?.[0]?.text;
    if (!aiResponseText) throw new Error('Gemini returned a candidate but the text part was empty.');

    // --- تحليل الرد (نفس المنطق القديم) ---
    let resultJson = { evaluationText: null, grade: null, errorCoordinates: [] };
    try {
      const evalMatch = aiResponseText.match(/"?evaluationText"?\s*:\s*"([\s\S]*?)"\s*,\s*"?grade"?/);
      if (evalMatch && evalMatch[1]) resultJson.evaluationText = evalMatch[1];

      const gradeMatch = aiResponseText.match(/"?grade"?\s*:\s*(\d+(\.\d+)?)/);
      if (gradeMatch && gradeMatch[1]) resultJson.grade = parseFloat(gradeMatch[1]);

      const coordsMatch = aiResponseText.match(/"?errorCoordinates"?\s*:\s*(\[[\s\S]*?\])/);
      if (coordsMatch && coordsMatch[1]) resultJson.errorCoordinates = JSON.parse(coordsMatch[1]);
    } catch (parseError) {
      console.error("Regex/JSON parsing failed:", parseError);
      throw new Error("AI returned a response, but it was in an unreadable format.");
    }

    if (!resultJson.evaluationText || resultJson.grade === null) {
      throw new Error("AI returned a response, but key information was missing.");
    }

    const durationMs = Date.now() - startTime;
    await logAiRequest(req, 'sculpture', builtPrompt, 'success', JSON.stringify(resultJson), 0, durationMs);
    res.status(200).json({ success: true, result: resultJson });

  } catch (error) {
    console.error('[Gemini Sculpture Error]:', error);
    const durationMs = Date.now() - startTime;
    logAiRequest(req, 'sculpture', builtPrompt, 'error', error.message, 0, durationMs).catch(() => { });

    if (!res.headersSent) {
      res.status(500).json({ success: false, error: 'Server error processing evaluation', details: error.message });
    }
  }
};
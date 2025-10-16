// test-gemini.js

// استيراد المكتبات الضرورية
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// دالة الاختبار الرئيسية
async function runTest() {
  console.log("--- Starting Gemini Test ---");

  // التأكد من وجود مفاتيح API
  const apiKeyString = process.env.GEMINI_API_KEYS;
  if (!apiKeyString) {
    console.error("❌ ERROR: GEMINI_API_KEYS not found in .env file.");
    return;
  }

  // استخدام أول مفتاح فقط للاختبار
  const firstApiKey = apiKeyString.split(',')[0].trim();
  if (!firstApiKey) {
    console.error("❌ ERROR: No valid API key found in GEMINI_API_KEYS.");
    return;
  }
  
  console.log("🔑 Using the first API key for the test...");

  try {
    // تهيئة Gemini
    const genAI = new GoogleGenerativeAI(firstApiKey);

    // تحديد النموذج بشكل صريح وصحيح
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("✅ Model 'gemini-1.5-flash' selected.");

    // إنشاء طلب بسيط جدًا
    const prompt = "Hello, world!";
    console.log("🚀 Sending a simple prompt...");
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("\n✅✅✅ SUCCESS! ✅✅✅");
    console.log("Gemini Response:", text);

  } catch (error) {
    console.error("\n❌❌❌ TEST FAILED ❌❌❌");
    console.error("An error occurred during the test:");
    console.error(error); // طباعة الخطأ الكامل
  } finally {
    console.log("\n--- Test Finished ---");
  }
}

// تشغيل دالة الاختبار
runTest();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5001; // سنستخدم منفذًا مختلفًا لتجنب أي تعارض

console.log("--- خادم اختبار CORS البسيط ---");

// تطبيق سياسة CORS بسيطة وواضحة
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    methods: "GET",
}));

// جعل مجلد LESSONS متاحًا
const lessonsPath = path.resolve(__dirname, 'LESSONS');
console.log(`Serving files from: ${lessonsPath}`);
app.use('/LESSONS', express.static(lessonsPath));

app.get('/', (req, res) => {
    res.send('خادم الاختبار يعمل. اطلب ملف PDF من مسار /LESSONS');
});

app.listen(PORT, () => {
    console.log(`🚀 خادم الاختبار يستمع على http://localhost:${PORT}`);
    console.log("اذهب الآن إلى pdf-viewer.html وغيّر المنفذ إلى 5001 للاختبار.");
});
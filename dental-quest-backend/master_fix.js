const fs = require('fs');
const path = require('path');

// ==========================================
// ⚙️ CONFIGURATION
// ==========================================
// المسار النسبي لمجلد quizzes انطلاقاً من مكان السكربت
const QUIZZES_DIR = path.join(__dirname, 'quizzes');

// ==========================================
// 🚀 MAIN SCRIPT
// ==========================================

console.log("🚀 Starting Master Fix & Merge for ALL years and subjects...");
console.log(`📂 Target Directory: ${QUIZZES_DIR}`);

if (!fs.existsSync(QUIZZES_DIR)) {
    console.error(`❌ Error: Could not find directory: ${QUIZZES_DIR}`);
    process.exit(1);
}

function processFile(filePath) {
    const fileName = path.basename(filePath);
    // نتجاهل الملف الرئيسي index.js وأي ملفات غير مرتبطة بالمواد
    if (fileName === 'index.js' || !fileName.endsWith('.js')) return;

    console.log(`\n📄 Processing: ${fileName}...`);

    try {
        let rawContent = fs.readFileSync(filePath, 'utf8');

        // 1. إصلاح الفواصل المفقودة (Fix missing commas between objects)
        let fixedContent = rawContent.replace(/}\s*\{/g, '}, {');

        // 2. إصلاح نهاية الملف (Fix closing syntax)
        if (!fixedContent.trim().endsWith('];') && !fixedContent.includes('module.exports')) {
            fixedContent = fixedContent.trim().replace(/,?\s*\]?$/, '');
            // نحاول استنتاج اسم المتغير من محتوى الملف
            const match = fixedContent.match(/const\s+(\w+)\s*=/);
            const varName = match ? match[1] : 'quizzes';
            fixedContent += `];\n\nmodule.exports = ${varName};`;
        }

        // 3. استخراج البيانات (Extract Array Data)
        let jsonString = fixedContent
            .replace(/const\s+\w+\s*=\s*/, '')
            .replace(/module\.exports\s*=\s*\w+;?/, '')
            .trim();

        // تنظيف أي فواصل منقوطة زائدة في النهاية
        if (jsonString.endsWith(';')) jsonString = jsonString.slice(0, -1);

        // تحويل النص إلى كائن JS
        const data = new Function('return ' + jsonString)();

        if (!Array.isArray(data)) {
            console.log(`⚠️  Skipping ${fileName}: Content is not an array.`);
            return;
        }

        // 4. دمج التكرارات (Merge Duplicates by Title)
        const mergedMap = new Map();

        data.forEach(item => {
            if (!item.title) return;

            const titleKey = item.title.trim();

            if (mergedMap.has(titleKey)) {
                const existing = mergedMap.get(titleKey);
                // دمج الأسئلة
                if (item.questions && Array.isArray(item.questions)) {
                    existing.questions = existing.questions.concat(item.questions);
                }
            } else {
                // إنشاء نسخة جديدة
                mergedMap.set(titleKey, item);
            }
        });

        const mergedData = Array.from(mergedMap.values());

        // 5. الحفظ (Save Changes)
        // استرجاع اسم المتغير الأصلي للحفاظ على التنسيق
        const matchVar = rawContent.match(/const\s+(\w+)\s*=/);
        const variableName = matchVar ? matchVar[1] : 'quizzes';

        const finalContent = `const ${variableName} = ${JSON.stringify(mergedData, null, 2)};\n\nmodule.exports = ${variableName};`;

        fs.writeFileSync(filePath, finalContent, 'utf8');
        console.log(`✅ Fixed & Merged: Reduced from ${data.length} to ${mergedData.length} lessons.`);

    } catch (e) {
        console.error(`❌ Failed to process ${fileName}: ${e.message}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (file.startsWith('year-')) {
                console.log(`\n📂 Entering directory: ${file}`);
                walkDir(fullPath);
            }
        } else {
            processFile(fullPath);
        }
    });
}

walkDir(QUIZZES_DIR);
console.log("\n🎉 All done! Your database is clean.");
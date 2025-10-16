// utils/seedLessons.js
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

dotenv.config();

const connectDB = require('../config/db');
const Lesson = require('../models/lessonModel');
const Subject = require('../models/subjectModel');

(async () => {
  try {
    await connectDB();

    const root = path.join(__dirname, '..', 'LESSONS');
    if (!fs.existsSync(root)) {
      console.log('LESSONS folder not found. Nothing to import.');
      process.exit(0);
    }

    console.log('Clearing old lessons from the database...');
    await Lesson.deleteMany({});

    const years = fs.readdirSync(root).filter(dir => fs.statSync(path.join(root, dir)).isDirectory());
    let lessonsToInsert = [];

    for (const year of years) {
      const yearPath = path.join(root, year);
      const subjectKeys = fs.readdirSync(yearPath).filter(dir => fs.statSync(path.join(yearPath, dir)).isDirectory());
      
      for (const subjectKey of subjectKeys) {
        const subjectPath = path.join(yearPath, subjectKey);
        const yearNumberMatch = year.match(/\d+/);
        if (!yearNumberMatch) continue;
        const yearNumber = parseInt(yearNumberMatch[0], 10);

        const subject = await Subject.findOne({ key: subjectKey, year: yearNumber });
        if (!subject) {
          console.warn(`[SKIP] No subject found in DB for key="${subjectKey}" and year=${yearNumber}`);
          continue;
        }

        // ✅ --- بداية التعديل المنطقي ---
        // الآن سنبحث عن مجلدات الدروس داخل مجلد المادة
        const lessonFolders = fs.readdirSync(subjectPath).filter(dir => fs.statSync(path.join(subjectPath, dir)).isDirectory());

        for (const lessonFolder of lessonFolders) {
            const lessonPath = path.join(subjectPath, lessonFolder);
            const pdfs = fs.readdirSync(lessonPath).filter(f => f.toLowerCase().endsWith('.pdf'));

            if (pdfs.length === 0) continue; // تجاهل المجلدات الفارغة

            // تجميع مسارات ملفات PDF لهذا الدرس
            const filePaths = pdfs.map(pdfFile => `/LESSONS/${year}/${subjectKey}/${lessonFolder}/${pdfFile}`);

            lessonsToInsert.push({
                title: lessonFolder.replace(/_/g, ' '), // اسم الدرس هو اسم المجلد
                filePaths: filePaths, // مصفوفة من ملفات الـ PDF
                subject: subject._id,
            });
        }
        // ✅ --- نهاية التعديل المنطقي ---
      }
    }

    if (lessonsToInsert.length === 0) {
      console.log('No lessons were found with the new folder structure.');
      process.exit(0);
    }

    await Lesson.insertMany(lessonsToInsert);
    console.log(`✅ Success! Imported ${lessonsToInsert.length} lessons (as folders) into the database.`);
    process.exit(0);
  } catch (e) {
    console.error('❌ Error during lesson seeding:', e);
    process.exit(1);
  }
})();
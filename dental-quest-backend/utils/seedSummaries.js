// utils/seedSummaries.js
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

dotenv.config();

const connectDB = require('../config/db');
const Summary = require('../models/summaryModel');
const Subject = require('../models/subjectModel');

(async () => {
  try {
    await connectDB();

    const root = path.join(__dirname, '..', 'Summaries');
    if (!fs.existsSync(root)) {
      console.log('Summaries folder not found. Nothing to import.');
      process.exit(0);
    }

    console.log('Clearing old summaries...');
    await Summary.deleteMany({});

    const years = fs.readdirSync(root).filter((y) => /^\d+$/.test(y)); // "1".."5"
    let toInsert = [];

    for (const year of years) {
      const yearPath = path.join(root, year);
      if (!fs.statSync(yearPath).isDirectory()) continue;

      const subjectKeys = fs.readdirSync(yearPath);
      for (const subjectKey of subjectKeys) {
        const subjectPath = path.join(yearPath, subjectKey);
        if (!fs.statSync(subjectPath).isDirectory()) continue;

        // نلاقي المادة بحسب key + year
        const subject = await Subject.findOne({ key: subjectKey, year: Number(year) }).lean();
        if (!subject) {
          console.warn(`Skip: no Subject for key="${subjectKey}" year=${year}`);
          continue;
        }

        const pdfs = fs.readdirSync(subjectPath).filter((f) => f.toLowerCase().endsWith('.pdf'));
        for (const file of pdfs) {
          toInsert.push({
            title: path.parse(file).name,
            filePath: `/Summaries/${year}/${subjectKey}/${file}`,
            subject: subject._id,
          });
        }
      }
    }

    if (toInsert.length === 0) {
      console.log('No PDFs found.');
      process.exit(0);
    }

    await Summary.insertMany(toInsert);
    console.log(`Imported ${toInsert.length} summaries successfully.`);
    process.exit(0);
  } catch (e) {
    console.error('seedSummaries error:', e);
    process.exit(1);
  }
})();

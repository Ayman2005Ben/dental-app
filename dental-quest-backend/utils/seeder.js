// utils/seeder.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db');

// --- Import Models ---
const Subject = require('../models/subjectModel');
const Quiz = require('../models/quizModel');

// --- Import Data Structures ---
const { allQuizzes } = require('../quizzes'); // Import the aggregated quizzes array

// --- Full and Correct Subject Data ---
const subjectsDatabase = {
    "1": [
        { "name": "GENETICS", "key": "genetics", "icon": "GENETICS.png" },
        { "name": "BIOMATHÉMATIQUES", "key": "biomathematiques", "icon": "BIOMATHS.png" },
        { "name": "ANATOMY", "key": "anatomy-y1", "icon": "ANATOMY.png" },
        { "name": "BIOCHEMISTRY", "key": "biochemistry", "icon": "BIOCHEMISTRY.png" },
        { "name": "CHEMISTRY", "key": "chemistry1", "icon": "CHEMISTRY.png" },
        { "name": "BIOPHYSIQUE", "key": "biophysique", "icon": "BIOPHYISICS.png" },
        { "name": "PHYSICS", "key": "physics", "icon": "PHISICS.png" },
        { "name": "EMBRYOLOGY", "key": "embryology", "icon": "EMBRYOLOGY.png" },
        { "name": "HISTOLOGY", "key": "histology-y1", "icon": "HISTOLOGY.png" },
        { "name": "CYTOLOGY", "key": "cytology", "icon": "CYTOLOGY.png" },
        { "name": "SSH", "key": "ssh", "icon": "SSH.png" },
        { "name": "PHYSIOLOGY", "key": "physiology", "icon": "PHYSIOLOGY.png" }
    ],
    "2": [
        { "name": "ODF", "key": "odf-y2", "icon": "ODF.png" },
        { "name": "PROTHÈSE", "key": "prothese-y2", "icon": "PROSTHESIS.png" },
        { "name": "OCE", "key": "oce", "icon": "OCE.png" },
        { "name": "PARO", "key": "paro-y2", "icon": "PARODONTOLOGY.png" },
        { "name": "PATHO", "key": "patho", "icon": "PATHO.png" },
        { "name": "BIOMATERIAU", "key": "biomateriau", "icon": "BIOMATERIALS.png" },
        { "name": "IMMUNOLOGIE", "key": "immunologie", "icon": "IMMUNOLOGY.png" },
        { "name": "HISTOLOGIE", "key": "histology-y2", "icon": "HISTOLOGY.png" },
        { "name": "HYGIÈNE", "key": "hygiene", "icon": "HYGIÈNE.png" },
        { "name": "MICROBIOLOGIE", "key": "microbiologie", "icon": "MICROBIOLOGY.png" },
        { "name": "ANATOMIE HUMAINE", "key": "anatomy-y2", "icon": "ANATOMY2.png" },
        { "name": "INFORMATIQUE", "key": "informatique", "icon": "default-icon.png" }
    ],
    "3": [
        { "name": "ANATOMO-PATHOLOGIE", "key": "anatomo-pathologie", "icon": "ANATOMO-PATHOLOGIE.png" },
        { "name": "ANESTHÉSIOLOGIE", "key": "anesthesiologie", "icon": "Anesthésiologie.png" },
        { "name": "IMAGERIE", "key": "imagrie", "icon": "IMAGERIE .png" },
        { "name": "OC", "key": "oc", "icon": "OCE.png" },
        { "name": "OCCLUSIO", "key": "occlusio", "icon": "OCCLUSIO.png" },
        { "name": "ODF", "key": "odf-y3", "icon": "ODF.png" },
        { "name": "OXYOLOGIE", "key": "oxyologie", "icon": "OXYOLOGIE.png" },
        { "name": "PARO", "key": "paro-y3", "icon": "PARODONTOLOGY.png" },
        { "name": "PATHOLOGIE", "key": "pathologie-y3", "icon": "PATHO.png" },
        { "name": "PHARMACOLOGIE", "key": "pharmacologie", "icon": "PHARMACOLOGIE.png" },
        { "name": "PROTHÈSE", "key": "prothese-y3", "icon": "PROSTHESIS.png" }
    ],
    "4": [
        { "name": "DÉONTOLOGIE", "key": "deontologie", "icon": "DEONTOLOGIE.png" },
        { "name": "IMPLANTO", "key": "implanto", "icon": "IMPLANTO.png" },
        { "name": "OCE", "key": "oce-y4", "icon": "OCE.png" },
        { "name": "ODF", "key": "odf-y4", "icon": "ODF.png" },
        { "name": "OG", "key": "og", "icon": "OG.png" },
        { "name": "OP", "key": "op", "icon": "OP.png" },
        { "name": "PARO", "key": "paro-y4", "icon": "PARODONTOLOGY.png" },
        { "name": "PATHO MÉDICALE", "key": "patho-medical", "icon": "PATHO MÉDICALE .png" },
        { "name": "PATHOLOGIE BUCCO-DENTAIRE", "key": "patho-bucco-dentaire", "icon": "PATHOLOGIE BUCCO-DENTAIRE.png" },
        { "name": "PROTHÈSE", "key": "prothese-y4", "icon": "PROSTHESIS.png" }
    ],
    "5": [
        { "name": "ÉPIDÉMIO", "key": "epidemio-y5", "icon": "EPIDEMIO.png" },
        { "name": "ERGONOMIE", "key": "ergonomie-y5", "icon": "ERGONOMIE.png" },
        { "name": "IMPLANTO", "key": "implanto-y5", "icon": "IMPLANTO.png" },
        { "name": "OCE", "key": "oce-y5", "icon": "OCE.png" },
        { "name": "ODF", "key": "odf-y5", "icon": "ODF.png" },
        { "name": "OP", "key": "op-y5", "icon": "OP.png" },
        { "name": "PARO", "key": "paro-y5", "icon": "PARODONTOLOGY.png" },
        { "name": "PATHO", "key": "patho-y5", "icon": "PATHO.png" },
        { "name": "PROTHÈSE", "key": "prothese-y5", "icon": "PROSTHESIS.png" }
    ]
};

dotenv.config({ path: './.env' });

const importData = async () => {
    try {
        await connectDB();
        console.log('MongoDB Connected for data import...');

        // Clear old Subjects and Quizzes only
        await Quiz.deleteMany();
        await Subject.deleteMany();
        console.log('Old Subjects and Quizzes cleared...');

        // 1. Import Subjects
        const subjectsToInsert = [];
        Object.keys(subjectsDatabase).forEach(year => {
            subjectsDatabase[year].forEach(subject => {
                subjectsToInsert.push({ ...subject, year: parseInt(year) });
            });
        });
        const insertedSubjects = await Subject.insertMany(subjectsToInsert);
        console.log(`✅ ${insertedSubjects.length} subjects imported.`);

        // 2. Import Quizzes
        const quizzesToInsert = [];
        for (const quizData of allQuizzes) {
            const parentSubject = insertedSubjects.find(s => s.key === quizData.subject);
            if (!parentSubject) {
                console.warn(`\x1b[33m[WARN] Skipping quiz "${quizData.title}" because its subject key "${quizData.subject}" was not found in the database.\x1b[0m`);
                continue;
            }
            const quizObject = {
                title: quizData.title,
                questions: quizData.questions,
                subject: parentSubject._id,
            };
            quizzesToInsert.push(quizObject);
        }

        if (quizzesToInsert.length > 0) {
            const insertedQuizzes = await Quiz.insertMany(quizzesToInsert);
            console.log(`✅ ${insertedQuizzes.length} quizzes imported successfully.`);
        }

        console.log('\x1b[32m[SUCCESS] Data Imported Successfully!\x1b[0m');
        process.exit();
    } catch (error) {
        console.error(`\x1b[31m[ERROR] ${error.message}\x1b[0m`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await connectDB();
        console.log('MongoDB Connected for data destruction...');

        await Quiz.deleteMany();
        await Subject.deleteMany();

        console.log('Subjects and Quizzes Destroyed!');
        process.exit();
    } catch (error) { // <-- THE FIX IS HERE
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
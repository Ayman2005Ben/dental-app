// models/subjectModel.js
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    key: { type: String, required: true, unique: true },
    icon: { type: String, required: true },
    year: { type: Number, required: true, min: 1, max: 5 }
});

module.exports = mongoose.model('Subject', subjectSchema);
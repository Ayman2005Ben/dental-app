// models/summaryModel.js
const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  filePath: { type: String, required: true }, // مثال: /Summaries/1/biochemistry/Les Glucides.pdf
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Summary', summarySchema);

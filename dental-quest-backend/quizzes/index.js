// DENTAL-QUEST-BACKEND/quizzes/index.js

// --- السنة الأولى ---
const anatomy_y1 = require('./year-1/anatomy-y1') || [];
const biochemistry_y1 = require('./year-1/biochemistry') || [];
const biomathematiques_y1 = require('./year-1/biomathematiques') || [];
const biophysique_y1 = require('./year-1/biophysique') || [];
const chemistry1_y1 = require('./year-1/chemistry1') || [];
const cytology_y1 = require('./year-1/cytology') || [];
const embryology_y1 = require('./year-1/embryology') || [];
const genetics_y1 = require('./year-1/genetics') || [];
const histology_y1 = require('./year-1/histology-y1') || [];
const physics_y1 = require('./year-1/physics') || [];
const physiology_y1 = require('./year-1/physiology') || [];
const ssh_y1 = require('./year-1/ssh') || [];

// --- السنة الثانية ---
const anatomieHumaine_y2 = require('./year-2/anatomie-humaine') || [];
const biomateriau_y2 = require('./year-2/biomateriau') || [];
const histology_y2 = require('./year-2/histology-y2') || [];
const hygiene_y2 = require('./year-2/hygiene') || [];
const immunologie_y2 = require('./year-2/immunologie') || [];
const informatique_y2 = require('./year-2/informatique') || [];
const microbiologie_y2 = require('./year-2/microbiologie') || [];
const oce_y2 = require('./year-2/oce') || [];
const odf_y2 = require('./year-2/odf-y2') || [];
const paro_y2 = require('./year-2/paro-y2') || [];
const patho_y2 = require('./year-2/patho') || [];
const prothese_y2 = require('./year-2/prothese-y2') || [];

// --- السنة الثالثة ---
const anatomoPathologie_y3 = require('./year-3/anatomo-pathologie') || [];
const anesthesiologie_y3 = require('./year-3/anesthesiologie') || [];
const imagrie_y3 = require('./year-3/imagrie') || [];
const oc_y3 = require('./year-3/oc') || [];
const occlusio_y3 = require('./year-3/occlusio') || [];
const odf_y3 = require('./year-3/odf-y3') || [];
const oxyologie_y3 = require('./year-3/oxyologie') || [];
const paro_y3 = require('./year-3/paro-y3') || [];
const pathologie_y3 = require('./year-3/pathologie-y3') || [];
const pharmacologie_y3 = require('./year-3/pharmacologie') || [];
const prothese_y3 = require('./year-3/prothese-y3') || [];

// --- السنة الرابعة ---
const deontologie_y4 = require('./year-4/deontologie') || [];
const implanto_y4 = require('./year-4/implanto') || [];
const oce_y4 = require('./year-4/oce-y4') || [];
const odf_y4 = require('./year-4/odf-y4') || [];
const og_y4 = require('./year-4/og') || [];
const op_y4 = require('./year-4/op') || [];
const paro_y4 = require('./year-4/paro-y4') || [];
const pathoBuccoDentaire_y4 = require('./year-4/patho-bucco-dentaire') || [];
const pathoMedical_y4 = require('./year-4/patho-medical') || [];
const prothese_y4 = require('./year-4/prothese-y4') || [];

// --- السنة الخامسة ---
const epidemio_y5 = require('./year-5/epidemio-y5') || [];
const ergonomie_y5 = require('./year-5/ergonomie-y5') || [];
const implanto_y5 = require('./year-5/implanto-y5') || [];
const oce_y5 = require('./year-5/oce-y5') || [];
const odf_y5 = require('./year-5/odf-y5') || [];
const op_y5 = require('./year-5/op-y5') || [];
const paro_y5 = require('./year-5/paro-y5') || [];
const patho_y5 = require('./year-5/patho-y5') || [];
const prothese_y5 = require('./year-5/prothese-y5') || [];


// تجميع كل الكويزات في مصفوفة واحدة كبيرة بطريقة آمنة
const allQuizzes = [
    ...anatomy_y1, ...biochemistry_y1, ...biomathematiques_y1, ...biophysique_y1, 
    ...chemistry1_y1, ...cytology_y1, ...embryology_y1, ...genetics_y1, 
    ...histology_y1, ...physics_y1, ...physiology_y1, ...ssh_y1,

    ...anatomieHumaine_y2, ...biomateriau_y2, ...histology_y2, ...hygiene_y2,
    ...immunologie_y2, ...informatique_y2, ...microbiologie_y2, ...oce_y2,
    ...odf_y2, ...paro_y2, ...patho_y2, ...prothese_y2,

    ...anatomoPathologie_y3, ...anesthesiologie_y3, ...imagrie_y3, ...oc_y3,
    ...occlusio_y3, ...odf_y3, ...oxyologie_y3, ...paro_y3,
    ...pathologie_y3, ...pharmacologie_y3, ...prothese_y3,

    ...deontologie_y4, ...implanto_y4, ...oce_y4, ...odf_y4,
    ...og_y4, ...op_y4, ...paro_y4, ...pathoBuccoDentaire_y4,
    ...pathoMedical_y4, ...prothese_y4,

    ...epidemio_y5, ...ergonomie_y5, ...implanto_y5, ...oce_y5,
    ...odf_y5, ...op_y5, ...paro_y5, ...patho_y5, ...prothese_y5
];

// تصدير كائن يحتوي على المفتاح 'allQuizzes' الذي يتوقعه الـ seeder
module.exports = {
  allQuizzes
};
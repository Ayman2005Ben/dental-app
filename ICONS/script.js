// === Content API helpers (added) ===
function buildPdfViewerUrl(filePath) {
    try {
        const base = 'pdf-viewer.html';
        const src = encodeURIComponent(filePath);
        const useViewer = (window && window.USE_PDF_VIEWER === true);
        return useViewer ? `${base}?src=${src}` : filePath;
    } catch (e) {
        return filePath;
    }
}

async function fetchSubjectsByYear(year) {
    const token = localStorage.getItem('userToken');
    const res = await fetch(`http://localhost:5000/api/content/subjects/${year}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to load subjects');
    return res.json();
}

async function fetchLessonsBySubject(subjectId) {
    const token = localStorage.getItem('userToken');
    const res = await fetch(`http://localhost:5000/api/content/lessons/${subjectId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to load lessons');
    return res.json();
}

async function fetchSummariesBySubject(subjectId) {
    const token = localStorage.getItem('userToken');
    const res = await fetch(`http://localhost:5000/api/content/summaries/${subjectId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to load summaries');
    return res.json();
}
// === end Content API helpers ===

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. تعريف متغيرات الحالة العامة للتطبيق ---
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    let isGuest = false;
    let isYearChosen = false;
    let selectedYear = null;
    let isActivated = false;
    let currentContentType = null;
    let particlesInstance = null;
    let performanceChart = null; // -- متغير الرسم البياني للوحة الأداء
    const originalDocTitle = document.title; // لحفظ عنوان الصفحة الأصلي
    // ✨ --- دالة جديدة لتشغيل الكويزات المولدة بالذكاء الاصطناعي --- ✨
function startAIGeneratedQuiz(quizData) {
    // 1. تجهيز بيانات الكويز لتتوافق مع نظام الكويز الاحترافي
    proQuiz = {
        _id: 'ai-generated-' + Date.now(), // نعطي الكويز معرفًا فريدًا
        title: 'AI Generated Quiz',
        subject: null, // لا يوجد موضوع محدد للكويزات المولدة
        questions: quizData // هنا نضع الأسئلة التي جاءت من Groq
    };

    // التأكد من أن الكويز يحتوي على أسئلة
    if (!proQuiz.questions || proQuiz.questions.length === 0) {
        showNotification('The generated quiz has no questions.', 'error');
        return;
    }

    // 2. إعادة تعيين كل متغيرات حالة الكويز (نفس ما تفعله دالة startQuiz)
    proQuestionIndex = 0;
    proUserAnswers = new Array(proQuiz.questions.length).fill(null);
    quizStartTime = Date.now();
    
    // إعداد واجهة الكويز
    quizLessonNameEl.textContent = proQuiz.title;
    quizSubjectNameEl.textContent = "AI Hub"; // يمكن تغييره حسب الرغبة

    // 3. استدعاء الدوال الحالية لديك لبناء واجهة الكويز
    renderQuestionList();
    renderCurrentQuestion();
    updateStats();
    
    // 4. عرض صفحة الكويز
    showPage('#quiz-taking-page');
}
    // --- نظام تنبيهات يجب تعريفه مبكراً ---
    function showNotification(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `notification-toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => { toast.classList.add('show'); }, 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
    
    // --- دالة لتسجيل الخروج الآمن ---
    function logoutUser() {
        console.log("Logging out user...");
        localStorage.removeItem('userToken');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isYearChosen');
        localStorage.removeItem('selectedYear');
        localStorage.removeItem('isActivated');
        window.location.href = 'login.html';
    }
    
    // --- دالة لجلب بيانات المستخدم من الباك-اند ---
    async function fetchUserProfile() {
        const token = localStorage.getItem('userToken');
        if (!token) {
            console.log("No token found, can't fetch profile.");
            return null;
        }
        try {
            const response = await fetch('http://localhost:5000/api/user/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const userProfile = await response.json();
                console.log("User profile fetched successfully:", userProfile);
                return userProfile;
            } else {
                if (response.status === 401) {
                    showNotification('Your session has expired. Please log in again.', 'error');
                    logoutUser();
                }
                return null;
            }
        } catch (error) {
            console.error('Network error while fetching profile:', error);
            showNotification('Could not connect to the server.', 'error');
            return null;
        }
    }
    
    // --- دالة تحديث واجهة المستخدم الرئيسية ---
// --- دالة تحديث واجهة المستخدم الرئيسية (نسخة معدلة بدون تفعيل إجباري) ---
function updateUI() {
    if (!isLoggedIn) {
        // إذا لم يكن المستخدم مسجلاً دخوله، انقله لصفحة التسجيل
        window.location.href = 'login.html';
        return;
    }

    if (!isYearChosen) {
        // إذا كان مسجلاً ولكن لم يختر السنة، اذهب لصفحة اختيار السنة
        showPage('#year-selection-page');
    } else {
        // إذا كان كل شيء على ما يرام، اذهب للصفحة الرئيسية
        // هذا الشرط يمنع إعادة تحميل الصفحة الرئيسية إذا كان المستخدم يتنقل في مكان آخر
        const isInitialLoad = !document.querySelector('.page-section.active') || document.querySelector('#year-selection-page.active');
        if (isInitialLoad) {
             showPage('#home-page');
        }
    }

    // هذا الجزء يبقى كما هو لتحديث النصوص في الصفحات الأخرى إن وجدت
    const currentSummaryYear = document.getElementById('current-summary-year');
    if(currentSummaryYear) {
        currentSummaryYear.textContent = selectedYear || 'N/A';
        document.getElementById('current-quiz-year').textContent = selectedYear || 'N/A';
        document.getElementById('current-lesson-year').textContent = selectedYear || 'N/A';
    }
    }
    // ✨ --- دالة جديدة لعرض الفلاش كاردز التي تم توليدها --- ✨
function displayGeneratedFlashcards(flashcardData) {
    // جلب المتغيرات العامة التي عرفناها سابقًا
    currentCollection = flashcardData;
    currentCardIndex = 0;

    // التأكد من وجود بطاقات لعرضها
    if (!currentCollection || currentCollection.length === 0) {
        showNotification("The AI didn't generate any flashcards.", "error");
        return;
    }

    // إخفاء شاشة اختيار المجموعات وإظهار عارض البطاقات
    document.getElementById('flashcards-content').style.display = 'none';
    document.getElementById('flashcard-viewer').classList.remove('flashcard-viewer-hidden');
    document.getElementById('flashcard-viewer-title').textContent = "AI Generated Flashcards";

    // استدعاء الدالة الحالية لديك لعرض أول بطاقة
    displayCurrentFlashcard();

    // الانتقال إلى صفحة بطاقات المراجعة
    showPage('#flashcards-page');
}
    // --- دالة لتحديث الهيدر بصورة المستخدم ---
    function updateHeaderWithUserData(user) {
        const headerLogoImg = document.querySelector('.ai-header-logo');
        if (headerLogoImg && user.image) {
            headerLogoImg.src = user.image;
            headerLogoImg.alt = `${user.displayName}'s profile picture`;
        }
    }
    
    // --- دالة رئيسية لتهيئة التطبيق ---
    async function initializeApp() {
        const userProfile = await fetchUserProfile();
        if (userProfile) {
            isLoggedIn = true;
            selectedYear = userProfile.studyYear;
            isYearChosen = !!userProfile.studyYear;
            isActivated = userProfile.isActivated;

            localStorage.setItem('isLoggedIn', 'true');
            if(isYearChosen) localStorage.setItem('isYearChosen', 'true');
            if(selectedYear) localStorage.setItem('selectedYear', selectedYear);
            if(isActivated) localStorage.setItem('isActivated', 'true');
            
            updateHeaderWithUserData(userProfile);
            document.getElementById('user-xp-display').textContent = `${userProfile.experiencePoints || 0} XP`; 

            updateUI();
        }
    }

    // --- دالة التحقق من التوكن ---
    async function checkForAuthToken() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            console.log("Token found in URL, setting up new session...");
            localStorage.setItem('userToken', token);
            localStorage.removeItem('isYearChosen');
            localStorage.removeItem('selectedYear');
            localStorage.removeItem('isActivated');
            window.history.replaceState({}, document.title, window.location.pathname);
            showNotification('Successfully signed in!', 'success');
            await initializeApp();
        } else if (localStorage.getItem('userToken')) {
            console.log("Token found in localStorage. Restoring session.");
            await initializeApp();
        } else {
            console.log("No token found. Redirecting to login page.");
            window.location.href = 'login.html';
        }
    }
    
    // --- تفعيل خلفية tsParticles ---
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("tsparticles", {
            particles: {
                number: { value: 50, density: { enable: true, value_area: 800 } },
                move: { enable: true, speed: 0.8, direction: "none", outModes: { default: "out" } },
                links: { enable: true, distance: 150, color: "random", opacity: 0.3, width: 1, triangles: { enable: false } },
                color: { value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"] },
                shape: { type: "circle" },
                opacity: { value: { min: 0.3, max: 0.7 } },
                size: { value: { min: 1, max: 4 } },
            },
            interactivity: {
                events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: false } },
                modes: { grab: { distance: 140, links: { opacity: 0.6 } } }
            },
            detectRetina: true,
            background: { color: "transparent" }
        }).then(container => {
            particlesInstance = container;
        });

        document.addEventListener("visibilitychange", () => {
            if (!particlesInstance) return;
            if (document.hidden) {
                particlesInstance.pause();
            } else {
                particlesInstance.play();
            }
        });
    }

    // --- [كامل] قاعدة بيانات المحتوى (بدون تغيير) ---
    const contentDatabase = {
        "1": {
            "biochemistry": {
                summaries: ["Glucides", "Lipides", "Acides aminés, peptides et protéines", "Enzymologie", "Métabolisme des glucides", "Métabolisme des lipides", "Métabolisme des acides aminés", "Bioénergétique"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Glucides", "Lipides", "Acides aminés, peptides et protéines", "Enzymologie", "Métabolisme des glucides", "Métabolisme des lipides", "Métabolisme des acides aminés", "Bioénergétique"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Glucides", "Lipides", "Acides aminés, peptides et protéines", "Enzymologie", "Métabolisme des glucides", "Métabolisme des lipides", "Métabolisme des acides aminés", "Bioénergétique"]
            },
            "anatomy-y1": {
                summaries: ["Introduction à l'anatomie", "Généralités sur l'ostéologie", "Le système articulaire", "Le système musculaire", "Système nerveux", "Anatomie de l’appareil respiratoire", "Appareil cardio-vasculaire", "Le système digestif", "Système reproducteur", "Système urinaire", "Organes des sens", "Système glandulaire endocrinien", "Système tégumentaire (peau et ses annexes)", "Structure du crâne", "Mandibule", "Articulation temporo-mandibulaire (ATM)", "Anatomie topographique de la tête et du cou"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à l'anatomie", "Généralités sur l'ostéologie", "Le système articulaire", "Le système musculaire", "Système nerveux", "Anatomie de l’appareil respiratoire", "Appareil cardio-vasculaire", "Le système digestif", "Système reproducteur", "Système urinaire", "Organes des sens", "Système glandulaire endocrinien", "Système tégumentaire (peau et ses annexes)", "Structure du crâne", "Mandibule", "Articulation temporo-mandibulaire (ATM)", "Anatomie topographique de la tête et du cou"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à l'anatomie", "Généralités sur l'ostéologie", "Le système articulaire", "Le système musculaire", "Système nerveux", "Anatomie de l’appareil respiratoire", "Appareil cardio-vasculaire", "Le système digestif", "Système reproducteur", "Système urinaire", "Organes des sens", "Système glandulaire endocrinien", "Système tégumentaire (peau et ses annexes)", "Structure du crâne", "Mandibule", "Articulation temporo-mandibulaire (ATM)", "Anatomie topographique de la tête et du cou"]
            },
            "embryology": {
                summaries: ["Introduction à l'embryologie / Les divisions cellulaires (mitose, méiose)", "La gamétogenèse : Spermatogenèse", "Ovogenèse, folliculogenèse et ovulation", "La première semaine du développement embryonnaire", "La deuxième semaine du développement embryonnaire", "La troisième semaine du développement embryonnaire", "Le développement embryonnaire (4ème semaine)", "L'appareil branchial", "Les malformations congénitales", "Les annexes embryonnaires"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à l'embryologie / Les divisions cellulaires (mitose, méiose)", "La gamétogenèse : Spermatogenèse", "Ovogenèse, folliculogenèse et ovulation", "La première semaine du développement embryonnaire", "La deuxième semaine du développement embryonnaire", "La troisième semaine du développement embryonnaire", "Le développement embryonnaire (4ème semaine)", "L'appareil branchial", "Les malformations congénitales", "Les annexes embryonnaires"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à l'embryologie / Les divisions cellulaires (mitose, méiose)", "La gamétogenèse : Spermatogenèse", "Ovogenèse, folliculogenèse et ovulation", "La première semaine du développement embryonnaire", "La deuxième semaine du développement embryonnaire", "La troisième semaine du développement embryonnaire", "Le développement embryonnaire (4ème semaine)", "L'appareil branchial", "Les malformations congénitales", "Les annexes embryonnaires"]
            },
            "histology-y1": {
                summaries: ["Introduction à l'histologie et techniques d'étude", "Tissus épithéliaux", "Tissu conjonctif", "Tissu osseux", "Tissus musculaires", "Tissu sanguin", "Tissu nerveux"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à l'histologie et techniques d'étude", "Tissus épithéliaux", "Tissu conjonctif", "Tissu osseux", "Tissus musculaires", "Tissu sanguin", "Tissu nerveux"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à l'histologie et techniques d'étude", "Tissus épithéliaux", "Tissu conjonctif", "Tissu osseux", "Tissus musculaires", "Tissu sanguin", "Tissu nerveux"]
            },
            "genetics": {
                summaries: ["Introduction à la génétique", "Monohybridisme", "Dihybridisme", "Modes de transmission héréditaires", "Hérédité monogénique", "Caryotype et anomalies chromosomiques", "Acides ribonucléiques (ARN)", "Réplication de l'ADN", "Transcription", "Traduction", "Mutations de l'ADN", "Régulation de l'expression génique", "Gènes des globines", "Outils de la biologie moléculaire", "Structure et organisation du génome humain", "Transfert des gènes chez les bactéries"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à la génétique", "Monohybridisme", "Dihybridisme", "Modes de transmission héréditaires", "Hérédité monogénique", "Caryotype et anomalies chromosomiques", "Acides ribonucléiques (ARN)", "Réplication de l'ADN", "Transcription", "Traduction", "Mutations de l'ADN", "Régulation de l'expression génique", "Gènes des globines", "Outils de la biologie moléculaire", "Structure et organisation du génome humain", "Transfert des gènes chez les bactéries"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à la génétique", "Monohybridisme", "Dihybridisme", "Modes de transmission héréditaires", "Hérédité monogénique", "Caryotype et anomalies chromosomiques", "Acides ribonucléiques (ARN)", "Réplication de l'ADN", "Transcription", "Traduction", "Mutations de l'ADN", "Régulation de l'expression génique", "Gènes des globines", "Outils de la biologie moléculaire", "Structure et organisation du génome humain", "Transfert des gènes chez les bactéries"]
            },
            "chemistry1": {
                summaries: ["Structure de la matière et des atomes", "Structure électronique et tableau périodique", "Liaisons chimiques", "Chimie organique", "Cinétique chimique", "Thermochimie", "Équilibres chimiques", "Acides et bases", "La solubilité"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Structure de la matière et des atomes", "Structure électronique et tableau périodique", "Liaisons chimiques", "Chimie organique", "Cinétique chimique", "Thermochimie", "Équilibres chimiques", "Acides et bases", "La solubilité"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Structure de la matière et des atomes", "Structure électronique et tableau périodique", "Liaisons chimiques", "Chimie organique", "Cinétique chimique", "Thermochimie", "Équilibres chimiques", "Acides et bases", "La solubilité"]
            },
            "physics": {
                summaries: ["Électrostatique", "Électrocinétique", "Électrophysiologie cellulaire", "Optique géométrique"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Électrostatique", "Électrocinétique", "Électrophysiologie cellulaire", "Optique géométrique"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Électrostatique", "Électrocinétique", "Électrophysiologie cellulaire", "Optique géométrique"]
            },
            "physiology": {
                summaries: ["Vue globale sur la physiologie cardiaque", "Généralités sur la physiologie digestive", "Généralités physio-digestive", "Cours physio-respiratoire", "SNC partie", "Physiologie rénale", "Groupes sanguins", "Physiologie musculaire", "Milieu intérieur", "Physiologie du sang"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Vue globale sur la physiologie cardiaque", "Généralités sur la physiologie digestive", "Généralités physio-digestive", "Cours physio-respiratoire", "SNC partie", "Physiologie rénale", "Groupes sanguins", "Physiologie musculaire", "Milieu intérieur", "Physiologie du sang"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Vue globale sur la physiologie cardiaque", "Généralités sur la physiologie digestive", "Généralités physio-digestive", "Cours physio-respiratoire", "SNC partie", "Physiologie rénale", "Groupes sanguins", "Physiologie musculaire", "Milieu intérieur", "Physiologie du sang"]
            },
            "biophysique": {
                summaries: ["Biophysique des solutions", "Biomécanique des fluides", "Biophysique des rayonnements", "Ondes sonores et ultrasonores"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Biophysique des solutions", "Biomécanique des fluides", "Biophysique des rayonnements", "Ondes sonores et ultrasonores"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Biophysique des solutions", "Biomécanique des fluides", "Biophysique des rayonnements", "Ondes sonores et ultrasonores"]
            },
            "ssh": {
                summaries: ["Santé et société", "Facteurs influençant la santé et la biodiversité", "Relation soignant-soigné et concepts humains"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Santé et société", "Facteurs influençant la santé et la biodiversité", "Relation soignant-soigné et concepts humains"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Santé et société", "Facteurs influençant la santé et la biodiversité", "Relation soignant-soigné et concepts humains"]
            },
            "cytology": {
                summaries: [],
                quizzes: [],
                lessons: [
                    "Organisation générale de la cellule",
                    "Méthodes d'étude de la cellule",
                    "La membrane plasmique : Structure et composition",
                    "La membrane plasmique : Aspect ultrastructural",
                    "Les jonctions intercellulaires",
                    "L'adhésivité cellulaire",
                    "La perméabilité membranaire et transport",
                    "La communication intercellulaire",
                    "Le cytosquelette",
                    "Le système endomembranaire",
                    "Le noyau interphasique"
                ]
            },
            "biomathematiques": { summaries: [], quizzes: [], lessons: [] }
        },
        "2": {
            "odf-y2": { summaries: [], quizzes: [], lessons: [] },
            "prothese-y2": { summaries: [], quizzes: [], lessons: [] },
            "oce": { summaries: [], quizzes: [], lessons: [] },
            "paro-y2": { summaries: [], quizzes: [], lessons: [] },
            "patho": { summaries: [], quizzes: [], lessons: [] },
            "biomateriau": { summaries: [], quizzes: [], lessons: [] },
            "immunologie": { summaries: [], quizzes: [], lessons: [] },
            "histology-y2": { summaries: [], quizzes: [], lessons: [] },
            "hygiene": { summaries: [], quizzes: [], lessons: [] },
            "microbiologie": { summaries: [], quizzes: [], lessons: [] },
            "anatomie-humaine": { summaries: [], quizzes: [], lessons: [] },
            "informatique": { summaries: [], quizzes: [], lessons: [] }
        },
        "3": {
            "anatomo-pathologie": {
                summaries: ["Anatomie et cytologie pathologiques", "Pathologie cellulaire et tissulaire", "Pathologie des substances intercellulaires", "L'inflammation chronique", "Généralités sur les tumeurs", "Les tumeurs bénignes", "Le tissu cancéreux", "Les tumeurs épithéliales", "Les tumeurs des tissus conjonctifs", "Pathologie de la cavité buccale", "Pathologie des glandes salivaires"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Anatomie et cytologie pathologiques", "Pathologie cellulaire et tissulaire", "Pathologie des substances intercellulaires", "L'inflammation chronique", "Généralités sur les tumeurs", "Les tumeurs bénignes", "Le tissu cancéreux", "Les tumeurs épithéliales", "Les tumeurs des tissus conjonctifs", "Pathologie de la cavité buccale", "Pathologie des glandes salivaires"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Anatomie et cytologie pathologiques", "Pathologie cellulaire et tissulaire", "Pathologie des substances intercellulaires", "L'inflammation chronique", "Généralités sur les tumeurs", "Les tumeurs bénignes", "Le tissu cancéreux", "Les tumeurs épithéliales", "Les tumeurs des tissus conjonctifs", "Pathologie de la cavité buccale", "Pathologie des glandes salivaires"]
            },
            "anesthesiologie": {
                summaries: ["Pharmacologie de l'anesthésie générale", "Accidents et incidents de l'anesthésie générale", "Indications et contre-indications de l'anesthésie générale", "Examen préopératoire, prémédication et préparation du patient à l'anesthésie générale", "Structures anatomiques impliquées en anesthésie loco-régionale", "Pharmacologie des anesthésiques locaux", "Indications et contre-indications des anesthésiques locaux", "Accidents toxiques des anesthésiques locaux"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Pharmacologie de l'anesthésie générale", "Accidents et incidents de l'anesthésie générale", "Indications et contre-indications de l'anesthésie générale", "Examen préopératoire, prémédication et préparation du patient à l'anesthésie générale", "Structures anatomiques impliquées en anesthésie loco-régionale", "Pharmacologie des anesthésiques locaux", "Indications et contre-indications des anesthésiques locaux", "Accidents toxiques des anesthésiques locaux"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Pharmacologie de l'anesthésie générale", "Accidents et incidents de l'anesthésie générale", "Indications et contre-indications de l'anesthésie générale", "Examen préopératoire, prémédication et préparation du patient à l'anesthésie générale", "Structures anatomiques impliquées en anesthésie loco-régionale", "Pharmacologie des anesthésiques locaux", "Indications et contre-indications des anesthésiques locaux", "Accidents toxiques des anesthésiques locaux"]
            },
            "imagrie": {
                summaries: ["Introduction à la radiologie", "Principes fondamentaux de la radiologie", "Appareils à rayons X", "Production et émission des rayons X, interaction avec la matière", "Formation de l'image, mathématiques de l'exposition et films radiographiques", "Facteurs influençant la qualité de l'image radiographique", "Le film dentaire : supports, critères de choix, traitements", "Contrôle de la qualité en radiologie dentaire", "Biologie de la radiation et protection du patient et de l'opérateur", "Techniques conventionnelles d'imagerie", "Repères anatomiques sur radiographies endobuccales et exobuccales", "L'imagerie numérique : principes et intérêts", "Tomodensitométrie (scanner à rayons X) : principes, acquisition et mise au point de l'image", "Tomographie volumique par faisceau conique (Cone Beam)", "Imagerie par résonance magnétique (IRM) : principes, acquisition d'image, traitement et archivage", "Dosimétrie et radioprotection en imagerie cranio-dentaire"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à la radiologie", "Principes fondamentaux de la radiologie", "Appareils à rayons X", "Production et émission des rayons X, interaction avec la matière", "Formation de l'image, mathématiques de l'exposition et films radiographiques", "Facteurs influençant la qualité de l'image radiographique", "Le film dentaire : supports, critères de choix, traitements", "Contrôle de la qualité en radiologie dentaire", "Biologie de la radiation et protection du patient et de l'opérateur", "Techniques conventionnelles d'imagerie", "Repères anatomiques sur radiographies endobuccales et exobuccales", "L'imagerie numérique : principes et intérêts", "Tomodensitométrie (scanner à rayons X) : principes, acquisition et mise au point de l'image", "Tomographie volumique par faisceau conique (Cone Beam)", "Imagerie par résonance magnétique (IRM) : principes, acquisition d'image, traitement et archivage", "Dosimétrie et radioprotection en imagerie cranio-dentaire"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à la radiologie", "Principes fondamentaux de la radiologie", "Appareils à rayons X", "Production et émission des rayons X, interaction avec la matière", "Formation de l'image, mathématiques de l'exposition et films radiographiques", "Facteurs influençant la qualité de l'image radiographique", "Le film dentaire : supports, critères de choix, traitements", "Contrôle de la qualité en radiologie dentaire", "Biologie de la radiation et protection du patient et de l'opérateur", "Techniques conventionnelles d'imagerie", "Repères anatomiques sur radiographies endobuccales et exobuccales", "L'imagerie numérique : principes et intérêts", "Tomodensitométrie (scanner à rayons X) : principes, acquisition et mise au point de l'image", "Tomographie volumique par faisceau conique (Cone Beam)", "Imagerie par résonance magnétique (IRM) : principes, acquisition d'image, traitement et archivage", "Dosimétrie et radioprotection en imagerie cranio-dentaire"]
            },
            "oc": {
                summaries: ["L'endodontie : généralités, buts, principes et cavités d'accès", "Moyens et conduite diagnostique en odontologie", "Désinfection, stérilisation, asepsie et antisepsie", "L'insensibilisation dentaire en odontologie", "L'instrumentation en endodontie", "La pharmacologie endodontique", "Les atteintes pulpo-dentinaires", "Les mortifications pulpaires", "Les préparations canalaires : différentes techniques", "Pathologies pulpaires : pulpites asymptomatiques et symptomatiques", "Protections dentino-pulpaires et thérapeutiques bio-conservatrices des dentinites (les coiffages pulpaires)", "Sensibilité et hypersensibilité dentinaire"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["L'endodontie : généralités, buts, principes et cavités d'accès", "Moyens et conduite diagnostique en odontologie", "Désinfection, stérilisation, asepsie et antisepsie", "L'insensibilisation dentaire en odontologie", "L'instrumentation en endodontie", "La pharmacologie endodontique", "Les atteintes pulpo-dentinaires", "Les mortifications pulpaires", "Les préparations canalaires : différentes techniques", "Pathologies pulpaires : pulpites asymptomatiques et symptomatiques", "Protections dentino-pulpaires et thérapeutiques bio-conservatrices des dentinites (les coiffages pulpaires)", "Sensibilité et hypersensibilité dentinaire"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["L'endodontie : généralités, buts, principes et cavités d'accès", "Moyens et conduite diagnostique en odontologie", "Désinfection, stérilisation, asepsie et antisepsie", "L'insensibilisation dentaire en odontologie", "L'instrumentation en endodontie", "La pharmacologie endodontique", "Les atteintes pulpo-dentinaires", "Les mortifications pulpaires", "Les préparations canalaires : différentes techniques", "Pathologies pulpaires : pulpites asymptomatiques et symptomatiques", "Protections dentino-pulpaires et thérapeutiques bio-conservatrices des dentinites (les coiffages pulpaires)", "Sensibilité et hypersensibilité dentinaire"]
            },
            "occlusio": {
                summaries: ["Occlusion : généralités et terminologie", "Anatomie physiologique", "Occlusion clinique", "Approche clinique et moyens de diagnostic", "Les dysfonctionnements de l'appareil manducateur", "Conceptions thérapeutiques générales et prévention"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Occlusion : généralités et terminologie", "Anatomie physiologique", "Occlusion clinique", "Approche clinique et moyens de diagnostic", "Les dysfonctionnements de l'appareil manducateur", "Conceptions thérapeutiques générales et prévention"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Occlusion : généralités et terminologie", "Anatomie physiologique", "Occlusion clinique", "Approche clinique et moyens de diagnostic", "Les dysfonctionnements de l'appareil manducateur", "Conceptions thérapeutiques générales et prévention"]
            },
            "odf-y3": {
                summaries: ["La terminologie en ODF", "L'examen clinique en ODF", "Le dossier orthodontique", "La céphalométrie", "Physiologie de l'occlusion chez l'enfant", "Les étiologies des anomalies dento-maxillo-faciales", "Étude diagnostique des anomalies dentaires de nombre (excès ou défaut)", "Étude diagnostique des dents incluses", "Étude diagnostique de la dysharmonie dento-maxillaire et dento-dentaire", "Diagnostic des anomalies dento-alvéolaires du sens transversal", "Diagnostic des anomalies dento-alvéolaires du sens vertical", "Diagnostic des anomalies dento-alvéolaires du sens sagittal", "Diagnostic des anomalies basales du sens transversal", "Diagnostic des anomalies basales du sens vertical", "Diagnostic des anomalies basales du sens sagittal : La classe II/1", "Diagnostic des anomalies basales du sens sagittal : La classe II/2", "Diagnostic des anomalies basales du sens sagittal : La classe III", "Les grands syndromes en ODF", "La biomécanique appliquée à l'ODF", "Réactions tissulaires au cours du déplacement dentaire"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["La terminologie en ODF", "L'examen clinique en ODF", "Le dossier orthodontique", "La céphalométrie", "Physiologie de l'occlusion chez l'enfant", "Les étiologies des anomalies dento-maxillo-faciales", "Étude diagnostique des anomalies dentaires de nombre (excès ou défaut)", "Étude diagnostique des dents incluses", "Étude diagnostique de la dysharmonie dento-maxillaire et dento-dentaire", "Diagnostic des anomalies dento-alvéolaires du sens transversal", "Diagnostic des anomalies dento-alvéolaires du sens vertical", "Diagnostic des anomalies dento-alvéolaires du sens sagittal", "Diagnostic des anomalies basales du sens transversal", "Diagnostic des anomalies basales du sens vertical", "Diagnostic des anomalies basales du sens sagittal : La classe II/1", "Diagnostic des anomalies basales du sens sagittal : La classe II/2", "Diagnostic des anomalies basales du sens sagittal : La classe III", "Les grands syndromes en ODF", "La biomécanique appliquée à l'ODF", "Réactions tissulaires au cours du déplacement dentaire"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["La terminologie en ODF", "L'examen clinique en ODF", "Le dossier orthodontique", "La céphalométrie", "Physiologie de l'occlusion chez l'enfant", "Les étiologies des anomalies dento-maxillo-faciales", "Étude diagnostique des anomalies dentaires de nombre (excès ou défaut)", "Étude diagnostique des dents incluses", "Étude diagnostique de la dysharmonie dento-maxillaire et dento-dentaire", "Diagnostic des anomalies dento-alvéolaires du sens transversal", "Diagnostic des anomalies dento-alvéolaires du sens vertical", "Diagnostic des anomalies dento-alvéolaires du sens sagittal", "Diagnostic des anomalies basales du sens transversal", "Diagnostic des anomalies basales du sens vertical", "Diagnostic des anomalies basales du sens sagittal : La classe II/1", "Diagnostic des anomalies basales du sens sagittal : La classe II/2", "Diagnostic des anomalies basales du sens sagittal : La classe III", "Les grands syndromes en ODF", "La biomécanique appliquée à l'ODF", "Réactions tissulaires au cours du déplacement dentaire"]
            },
            "oxyologie": {
                summaries: ["Introduction à l'oxyologie", "Matériel de réanimation et drogues d'urgence", "CAT devant une détresse respiratoire", "CAT devant une détresse cardio-circulatoire", "CAT devant une détresse neurologique", "Crise d'épilepsie et crise convulsive", "Choc anaphylactique et anaphylaxie", "CAT devant une inhalation et ingestion d'un corps étranger", "Hémorragie au cabinet dentaire"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à l'oxyologie", "Matériel de réanimation et drogues d'urgence", "CAT devant une détresse respiratoire", "CAT devant une détresse cardio-circulatoire", "CAT devant une détresse neurologique", "Crise d'épilepsie et crise convulsive", "Choc anaphylactique et anaphylaxie", "CAT devant une inhalation et ingestion d'un corps étranger", "Hémorragie au cabinet dentaire"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à l'oxyologie", "Matériel de réanimation et drogues d'urgence", "CAT devant une détresse respiratoire", "CAT devant une détresse cardio-circulatoire", "CAT devant une détresse neurologique", "Crise d'épilepsie et crise convulsive", "Choc anaphylactique et anaphylaxie", "CAT devant une inhalation et ingestion d'un corps étranger", "Hémorragie au cabinet dentaire"]
            },
            "paro-y3": {
                summaries: ["Étiologies des maladies parodontales", "Inflammation et histopathogénie des maladies parodontales", "Classifications des maladies parodontales et formes cliniques", "La poche parodontale", "Troubles gingivaux", "Les parodontites", "Les urgences parodontales", "Maladies parodontales et maladies générales", "Épidémiologie des maladies parodontales", "Clinique d'examen en parodontologie", "Détartrage-surfaçage radiculaire", "Prescription médicamenteuse en parodontologie", "Prévention des maladies parodontales", "Entretien parodontal"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Étiologies des maladies parodontales", "Inflammation et histopathogénie des maladies parodontales", "Classifications des maladies parodontales et formes cliniques", "La poche parodontale", "Troubles gingivaux", "Les parodontites", "Les urgences parodontales", "Maladies parodontales et maladies générales", "Épidémiologie des maladies parodontales", "Clinique d'examen en parodontologie", "Détartrage-surfaçage radiculaire", "Prescription médicamenteuse en parodontologie", "Prévention des maladies parodontales", "Entretien parodontal"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Étiologies des maladies parodontales", "Inflammation et histopathogénie des maladies parodontales", "Classifications des maladies parodontales et formes cliniques", "La poche parodontale", "Troubles gingivaux", "Les parodontites", "Les urgences parodontales", "Maladies parodontales et maladies générales", "Épidémiologie des maladies parodontales", "Clinique d'examen en parodontologie", "Détartrage-surfaçage radiculaire", "Prescription médicamenteuse en parodontologie", "Prévention des maladies parodontales", "Entretien parodontal"]
            },
            "pathologie-y3": {
                summaries: ["Physiopathologie de l'infection", "Physiopathologie de l'inflammation", "Physiopathologie de la douleur", "Cellulites cervico-faciales d'origine dentaire", "Les ostéites des maxillaires", "Ostéoradionécrose / Ostéonécroses dues aux bisphosphonates", "Dents et sinus", "Manifestations à distance des foyers bucco-dentaires", "Septicémies et thrombophlébites cranio-faciales", "Les antibiotiques", "Les anti-inflammatoires (AINS et AIS)", "Les antalgiques et les vitamines", "Explorations biologiques", "Explorations radiologiques", "Les lésions élémentaires", "Aphtes et aphtoses", "Les mycoses de la cavité buccale", "Les infections spécifiques de la muqueuse buccale", "Les douleurs oro-faciales", "Les paralysies faciales", "Tumeurs bénignes de la muqueuse buccale", "Tumeurs bénignes des maxillaires", "Les kystes des maxillaires", "Les urgences au cabinet dentaire et notions de réanimation"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Physiopathologie de l'infection", "Physiopathologie de l'inflammation", "Physiopathologie de la douleur", "Cellulites cervico-faciales d'origine dentaire", "Les ostéites des maxillaires", "Ostéoradionécrose / Ostéonécroses dues aux bisphosphonates", "Dents et sinus", "Manifestations à distance des foyers bucco-dentaires", "Septicémies et thrombophlébites cranio-faciales", "Les antibiotiques", "Les anti-inflammatoires (AINS et AIS)", "Les antalgiques et les vitamines", "Explorations biologiques", "Explorations radiologiques", "Les lésions élémentaires", "Aphtes et aphtoses", "Les mycoses de la cavité buccale", "Les infections spécifiques de la muqueuse buccale", "Les douleurs oro-faciales", "Les paralysies faciales", "Tumeurs bénignes de la muqueuse buccale", "Tumeurs bénignes des maxillaires", "Les kystes des maxillaires", "Les urgences au cabinet dentaire et notions de réanimation"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Physiopathologie de l'infection", "Physiopathologie de l'inflammation", "Physiopathologie de la douleur", "Cellulites cervico-faciales d'origine dentaire", "Les ostéites des maxillaires", "Ostéoradionécrose / Ostéonécroses dues aux bisphosphonates", "Dents et sinus", "Manifestations à distance des foyers bucco-dentaires", "Septicémies et thrombophlébites cranio-faciales", "Les antibiotiques", "Les anti-inflammatoires (AINS et AIS)", "Les antalgiques et les vitamines", "Explorations biologiques", "Explorations radiologiques", "Les lésions élémentaires", "Aphtes et aphtoses", "Les mycoses de la cavité buccale", "Les infections spécifiques de la muqueuse buccale", "Les douleurs oro-faciales", "Les paralysies faciales", "Tumeurs bénignes de la muqueuse buccale", "Tumeurs bénignes des maxillaires", "Les kystes des maxillaires", "Les urgences au cabinet dentaire et notions de réanimation"]
            },
            "pharmacologie": {
                summaries: ["Introduction à la pharmacologie", "Pharmacologie générale", "Pharmacocinétique : Absorption", "Pharmacocinétique : Distribution", "Pharmacocinétique : Métabolisme", "Pharmacocinétique : Élimination", "Cibles des médicaments", "Pharmacodynamie et pharmacométrie", "Facteurs modifiant l'activité des médicaments", "Les interactions médicamenteuses", "Effets indésirables des médicaments", "AIS", "AINS", "Système nerveux central", "Système nerveux autonome", "Médicaments de la douleur et incidences odontologiques : les analgésiques et les anti-infectieux", "Antibiotiques", "Antibiotiques : incidence odontologique", "Antifongiques", "Antiseptiques", "Médicaments des troubles de l'hémostase et incidences odontologiques", "Médicaments de l'appareil cardio-vasculaire et odontologie", "Médicaments de l'appareil urinaire et incidences odontologiques", "Médicaments de l'appareil digestif et incidences odontologiques", "Médicaments de l'appareil respiratoire et incidences odontologiques", "Les hypoglycémiants et incidences odontologiques", "Les médicaments de l'urgence au cabinet dentaire"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à la pharmacologie", "Pharmacologie générale", "Pharmacocinétique : Absorption", "Pharmacocinétique : Distribution", "Pharmacocinétique : Métabolisme", "Pharmacocinétique : Élimination", "Cibles des médicaments", "Pharmacodynamie et pharmacométrie", "Facteurs modifiant l'activité des médicaments", "Les interactions médicamenteuses", "Effets indésirables des médicaments", "AIS", "AINS", "Système nerveux central", "Système nerveux autonome", "Médicaments de la douleur et incidences odontologiques : les analgésiques et les anti-infectieux", "Antibiotiques", "Antibiotiques : incidence odontologique", "Antifongiques", "Antiseptiques", "Médicaments des troubles de l'hémostase et incidences odontologiques", "Médicaments de l'appareil cardio-vasculaire et odontologie", "Médicaments de l'appareil urinaire et incidences odontologiques", "Médicaments de l'appareil digestif et incidences odontologiques", "Médicaments de l'appareil respiratoire et incidences odontologiques", "Les hypoglycémiants et incidences odontologiques", "Les médicaments de l'urgence au cabinet dentaire"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à la pharmacologie", "Pharmacologie générale", "Pharmacocinétique : Absorption", "Pharmacocinétique : Distribution", "Pharmacocinétique : Métabolisme", "Pharmacocinétique : Élimination", "Cibles des médicaments", "Pharmacodynamie et pharmacométrie", "Facteurs modifiant l'activité des médicaments", "Les interactions médicamenteuses", "Effets indésirables des médicaments", "AIS", "AINS", "Système nerveux central", "Système nerveux autonome", "Médicaments de la douleur et incidences odontologiques : les analgésiques et les anti-infectieux", "Antibiotiques", "Antibiotiques : incidence odontologique", "Antifongiques", "Antiseptiques", "Médicaments des troubles de l'hémostase et incidences odontologiques", "Médicaments de l'appareil cardio-vasculaire et odontologie", "Médicaments de l'appareil urinaire et incidences odontologiques", "Médicaments de l'appareil digestif et incidences odontologiques", "Médicaments de l'appareil respiratoire et incidences odontologiques", "Les hypoglycémiants et incidences odontologiques", "Les médicaments de l'urgence au cabinet dentaire"]
            },
            "prothese-y3": {
                summaries: ["Ostéologie, myologie et physiologie de la cavité buccale totalement édentée", "L'observation clinique", "Apport de la chirurgie pré-prothétique au niveau des tissus mous et des tissus durs", "La mise en condition tissulaire et neuro-articulo-musculaire", "Les empreintes primaires et leurs traitements", "Les empreintes secondaires et leurs traitements", "Le plan d'occlusion", "Les dimensions verticales", "La relation centrée", "Les articulateurs semi-adaptables et arcs faciaux", "L'occlusion bilatérale équilibrée", "La résorption osseuse : choix et montage des dents", "L'essai fonctionnel en bouche des maquettes de montage", "La polymérisation et la finition des prothèses complètes", "L'insertion en bouche et conseils post-prothétiques", "La stabilisation des prothèses par les empreintes tertiaires", "Les équilibrations occlusales immédiates et médiates", "Adhésion, rétention et sustentation en prothèse adjointe complète", "Les prothèses immédiates (provisoires et d'usage)", "Les prothèses piézographiques", "La réfection des bases prothétiques", "Les prothèses amovibles complètes supra-implantaires", "Les bases souples permanentes", "L'édentement total unimaxillaire"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Ostéologie, myologie et physiologie de la cavité buccale totalement édentée", "L'observation clinique", "Apport de la chirurgie pré-prothétique au niveau des tissus mous et des tissus durs", "La mise en condition tissulaire et neuro-articulo-musculaire", "Les empreintes primaires et leurs traitements", "Les empreintes secondaires et leurs traitements", "Le plan d'occlusion", "Les dimensions verticales", "La relation centrée", "Les articulateurs semi-adaptables et arcs faciaux", "L'occlusion bilatérale équilibrée", "La résorption osseuse : choix et montage des dents", "L'essai fonctionnel en bouche des maquettes de montage", "La polymérisation et la finition des prothèses complètes", "L'insertion en bouche et conseils post-prothétiques", "La stabilisation des prothèses par les empreintes tertiaires", "Les équilibrations occlusales immédiates et médiates", "Adhésion, rétention et sustentation en prothèse adjointe complète", "Les prothèses immédiates (provisoires et d'usage)", "Les prothèses piézographiques", "La réfection des bases prothétiques", "Les prothèses amovibles complètes supra-implantaires", "Les bases souples permanentes", "L'édentement total unimaxillaire"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Ostéologie, myologie et physiologie de la cavité buccale totalement édentée", "L'observation clinique", "Apport de la chirurgie pré-prothétique au niveau des tissus mous et des tissus durs", "La mise en condition tissulaire et neuro-articulo-musculaire", "Les empreintes primaires et leurs traitements", "Les empreintes secondaires et leurs traitements", "Le plan d'occlusion", "Les dimensions verticales", "La relation centrée", "Les articulateurs semi-adaptables et arcs faciaux", "L'occlusion bilatérale équilibrée", "La résorption osseuse : choix et montage des dents", "L'essai fonctionnel en bouche des maquettes de montage", "La polymérisation et la finition des prothèses complètes", "L'insertion en bouche et conseils post-prothétiques", "La stabilisation des prothèses par les empreintes tertiaires", "Les équilibrations occlusales immédiates et médiates", "Adhésion, rétention et sustentation en prothèse adjointe complète", "Les prothèses immédiates (provisoires et d'usage)", "Les prothèses piézographiques", "La réfection des bases prothétiques", "Les prothèses amovibles complètes supra-implantaires", "Les bases souples permanentes", "L'édentement total unimaxillaire"]
            }
        },
        "4": {
            "deontologie": {
                summaries: ["Déontologie médicale et éthique, code de la déontologie dentaire", "Ordre des médecins-dentistes", "Organisation judiciaire et son fonctionnement", "Secret professionnel et certificats médicaux", "Les institutions internationales, relation praticien-malade, consentement éclairé", "Droit de prescription des médecins-dentistes", "Odontologie légale, exercice légal et illégal de la médecine dentaire", "Les médicaments génériques : autorisation de mise sur le marché", "Relation praticien-confrère, nomenclature des actes professionnels", "Sécurité sociale : mission et rôles, médecin-conseil, tarification", "Odontologie médico-légale : expertise et identification"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Déontologie médicale et éthique, code de la déontologie dentaire", "Ordre des médecins-dentistes", "Organisation judiciaire et son fonctionnement", "Secret professionnel et certificats médicaux", "Les institutions internationales, relation praticien-malade, consentement éclairé", "Droit de prescription des médecins-dentistes", "Odontologie légale, exercice légal et illégal de la médecine dentaire", "Les médicaments génériques : autorisation de mise sur le marché", "Relation praticien-confrère, nomenclature des actes professionnels", "Sécurité sociale : mission et rôles, médecin-conseil, tarification", "Odontologie médico-légale : expertise et identification"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Déontologie médicale et éthique, code de la déontologie dentaire", "Ordre des médecins-dentistes", "Organisation judiciaire et son fonctionnement", "Secret professionnel et certificats médicaux", "Les institutions internationales, relation praticien-malade, consentement éclairé", "Droit de prescription des médecins-dentistes", "Odontologie légale, exercice légal et illégal de la médecine dentaire", "Les médicaments génériques : autorisation de mise sur le marché", "Relation praticien-confrère, nomenclature des actes professionnels", "Sécurité sociale : mission et rôles, médecin-conseil, tarification", "Odontologie médico-légale : expertise et identification"]
            },
            "implanto": {
                summaries: ["Introduction à l'implantologie orale", "L'ostéointégration", "Rappels sur les bases fondamentales de l'anatomie et de la physiologie osseuse", "Biomécanique implantaire", "Le système implantaire", "Bilan pré-implantaire", "Le dossier clinique", "Moyens de diagnostic complémentaires", "Contre-indications du traitement implantaire", "Stratégies thérapeutiques et notions de consentement éclairé en implantologie", "Notions d'aménagement tissulaire pré-implantaire"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à l'implantologie orale", "L'ostéointégration", "Rappels sur les bases fondamentales de l'anatomie et de la physiologie osseuse", "Biomécanique implantaire", "Le système implantaire", "Bilan pré-implantaire", "Le dossier clinique", "Moyens de diagnostic complémentaires", "Contre-indications du traitement implantaire", "Stratégies thérapeutiques et notions de consentement éclairé en implantologie", "Notions d'aménagement tissulaire pré-implantaire"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à l'implantologie orale", "L'ostéointégration", "Rappels sur les bases fondamentales de l'anatomie et de la physiologie osseuse", "Biomécanique implantaire", "Le système implantaire", "Bilan pré-implantaire", "Le dossier clinique", "Moyens de diagnostic complémentaires", "Contre-indications du traitement implantaire", "Stratégies thérapeutiques et notions de consentement éclairé en implantologie", "Notions d'aménagement tissulaire pré-implantaire"]
            },
            "oce-y4": {
                summaries: ["La cicatrisation dentino-pulpaire", "Indications et contre-indications des traitements endodontiques", "La cicatrisation apicale", "Accidents et incidents survenant lors des thérapeutiques en odontologie conservatrice-endodontie", "Les urgences en odontologie conservatrice-endodontie", "Les traumatismes alvéolo-dentaires : données étiologiques, épidémiologiques, classification, 1ère consultation et diagnostic", "Prise en charge des traumatismes dentaires", "Évaluation de la situation clinique et du besoin thérapeutique, prévention et traitement des pathologies iatrogènes", "La dentisterie préventive et/ou non invasive", "Reconstitutions complexes des dents : moyens d'ancrages et techniques", "Thérapeutiques esthétiques des dyschromies dentaires sur dents vitales et dents mortifiées : facettes collées, éclaircissement chimique"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["La cicatrisation dentino-pulpaire", "Indications et contre-indications des traitements endodontiques", "La cicatrisation apicale", "Accidents et incidents survenant lors des thérapeutiques en odontologie conservatrice-endodontie", "Les urgences en odontologie conservatrice-endodontie", "Les traumatismes alvéolo-dentaires : données étiologiques, épidémiologiques, classification, 1ère consultation et diagnostic", "Prise en charge des traumatismes dentaires", "Évaluation de la situation clinique et du besoin thérapeutique, prévention et traitement des pathologies iatrogènes", "La dentisterie préventive et/ou non invasive", "Reconstitutions complexes des dents : moyens d'ancrages et techniques", "Thérapeutiques esthétiques des dyschromies dentaires sur dents vitales et dents mortifiées : facettes collées, éclaircissement chimique"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["La cicatrisation dentino-pulpaire", "Indications et contre-indications des traitements endodontiques", "La cicatrisation apicale", "Accidents et incidents survenant lors des thérapeutiques en odontologie conservatrice-endodontie", "Les urgences en odontologie conservatrice-endodontie", "Les traumatismes alvéolo-dentaires : données étiologiques, épidémiologiques, classification, 1ère consultation et diagnostic", "Prise en charge des traumatismes dentaires", "Évaluation de la situation clinique et du besoin thérapeutique, prévention et traitement des pathologies iatrogènes", "La dentisterie préventive et/ou non invasive", "Reconstitutions complexes des dents : moyens d'ancrages et techniques", "Thérapeutiques esthétiques des dyschromies dentaires sur dents vitales et dents mortifiées : facettes collées, éclaircissement chimique"]
            },
            "odf-y4": {
                summaries: ["La place du diagnostic dans le plan de traitement en ODF", "Les objectifs de traitement en ODF et critères de décision", "La rééducation neuromusculaire des fonctions orofaciales", "Traitement des inclusions dentaires", "La thérapeutique amovible en ODF", "Traitement des agénésies dentaires", "Traitement de la dysharmonie dento-maxillaire et dento-dentaire", "Traitement des anomalies alvéolaires du sens sagittal, vertical et transversal", "Traitement des anomalies basales du sens sagittal : la classe II div 1", "Traitement de la classe II div 2", "Traitement de la classe III", "Traitement des anomalies basales du sens vertical", "Traitement des anomalies basales du sens transversal", "Les forces extra-buccales et élastiques intermaxillaires", "La thérapeutique fonctionnelle", "La thérapeutique orthopédique", "La thérapeutique orthodontico-chirurgicale", "Thérapeutiques fixées : l'Edgewise standard", "Les techniques de l'arc droit : Andrews, Roth, Tip-Edge", "Les techniques bioprogressives de Ricketts", "L'orthodontie invisible : technique linguale, Invisalign", "Critères de fin de traitement et équilibration occlusale post-orthodontique", "Contention et récidive", "L'orthodontie de l'adulte"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["La place du diagnostic dans le plan de traitement en ODF", "Les objectifs de traitement en ODF et critères de décision", "La rééducation neuromusculaire des fonctions orofaciales", "Traitement des inclusions dentaires", "La thérapeutique amovible en ODF", "Traitement des agénésies dentaires", "Traitement de la dysharmonie dento-maxillaire et dento-dentaire", "Traitement des anomalies alvéolaires du sens sagittal, vertical et transversal", "Traitement des anomalies basales du sens sagittal : la classe II div 1", "Traitement de la classe II div 2", "Traitement de la classe III", "Traitement des anomalies basales du sens vertical", "Traitement des anomalies basales du sens transversal", "Les forces extra-buccales et élastiques intermaxillaires", "La thérapeutique fonctionnelle", "La thérapeutique orthopédique", "La thérapeutique orthodontico-chirurgicale", "Thérapeutiques fixées : l'Edgewise standard", "Les techniques de l'arc droit : Andrews, Roth, Tip-Edge", "Les techniques bioprogressives de Ricketts", "L'orthodontie invisible : technique linguale, Invisalign", "Critères de fin de traitement et équilibration occlusale post-orthodontique", "Contention et récidive", "L'orthodontie de l'adulte"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["La place du diagnostic dans le plan de traitement en ODF", "Les objectifs de traitement en ODF et critères de décision", "La rééducation neuromusculaire des fonctions orofaciales", "Traitement des inclusions dentaires", "La thérapeutique amovible en ODF", "Traitement des agénésies dentaires", "Traitement de la dysharmonie dento-maxillaire et dento-dentaire", "Traitement des anomalies alvéolaires du sens sagittal, vertical et transversal", "Traitement des anomalies basales du sens sagittal : la classe II div 1", "Traitement de la classe II div 2", "Traitement de la classe III", "Traitement des anomalies basales du sens vertical", "Traitement des anomalies basales du sens transversal", "Les forces extra-buccales et élastiques intermaxillaires", "La thérapeutique fonctionnelle", "La thérapeutique orthopédique", "La thérapeutique orthodontico-chirurgicale", "Thérapeutiques fixées : l'Edgewise standard", "Les techniques de l'arc droit : Andrews, Roth, Tip-Edge", "Les techniques bioprogressives de Ricketts", "L'orthodontie invisible : technique linguale, Invisalign", "Critères de fin de traitement et équilibration occlusale post-orthodontique", "Contention et récidive", "L'orthodontie de l'adulte"]
            },
            "og": {
                summaries: ["Notions générales sur le vieillissement et la sénescence de la cavité buccale, le vieillissement des fonctions", "Spécificités de l'examen clinique chez le sujet âgé", "Sécheresse buccale et hyposialie", "Les pathologies générales dégénératives du sujet âgé", "Soins conservateurs et endodontiques chez le sujet âgé", "Traitements parodontaux chez le sujet âgé", "Réhabilitation prothétique chez le sujet âgé", "Traitement implantaire chez le sujet âgé", "Soins à domicile chez le sujet âgé", "Prescriptions et interactions médicamenteuses chez le sujet âgé", "Douleurs oro-faciales chez le sujet âgé"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Notions générales sur le vieillissement et la sénescence de la cavité buccale, le vieillissement des fonctions", "Spécificités de l'examen clinique chez le sujet âgé", "Sécheresse buccale et hyposialie", "Les pathologies générales dégénératives du sujet âgé", "Soins conservateurs et endodontiques chez le sujet âgé", "Traitements parodontaux chez le sujet âgé", "Réhabilitation prothétique chez le sujet âgé", "Traitement implantaire chez le sujet âgé", "Soins à domicile chez le sujet âgé", "Prescriptions et interactions médicamenteuses chez le sujet âgé", "Douleurs oro-faciales chez le sujet âgé"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Notions générales sur le vieillissement et la sénescence de la cavité buccale, le vieillissement des fonctions", "Spécificités de l'examen clinique chez le sujet âgé", "Sécheresse buccale et hyposialie", "Les pathologies générales dégénératives du sujet âgé", "Soins conservateurs et endodontiques chez le sujet âgé", "Traitements parodontaux chez le sujet âgé", "Réhabilitation prothétique chez le sujet âgé", "Traitement implantaire chez le sujet âgé", "Soins à domicile chez le sujet âgé", "Prescriptions et interactions médicamenteuses chez le sujet âgé", "Douleurs oro-faciales chez le sujet âgé"]
            },
            "op": {
                summaries: ["Introduction à l'odontologie pédiatrique, approche psychologique de l'enfant", "Morphologie, histophysiologie et physiopathologie des dents temporaires et permanentes immatures", "Parodonte de l'enfant : particularités", "Pathologie des dents temporaires", "Pathologie des dents permanentes immatures", "Accidents d'éruption et d'évolution des dents", "Ergonomie et matériel spécifique en odontologie pédiatrique", "L'examen clinique en odontologie pédiatrique", "Explorations radiologiques en odontologie pédiatrique", "Les dents de 6 ans", "Anesthésie en pédodontie", "Aspects cliniques de l'odontologie restauratrice chez l'enfant et l'adolescent", "Sémiologie en pédodontie", "Thérapeutiques préventives en dentisterie pédiatrique", "Approches thérapeutiques selon l'âge de l'enfant et la dent causale"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à l'odontologie pédiatrique, approche psychologique de l'enfant", "Morphologie, histophysiologie et physiopathologie des dents temporaires et permanentes immatures", "Parodonte de l'enfant : particularités", "Pathologie des dents temporaires", "Pathologie des dents permanentes immatures", "Accidents d'éruption et d'évolution des dents", "Ergonomie et matériel spécifique en odontologie pédiatrique", "L'examen clinique en odontologie pédiatrique", "Explorations radiologiques en odontologie pédiatrique", "Les dents de 6 ans", "Anesthésie en pédodontie", "Aspects cliniques de l'odontologie restauratrice chez l'enfant et l'adolescent", "Sémiologie en pédodontie", "Thérapeutiques préventives en dentisterie pédiatrique", "Approches thérapeutiques selon l'âge de l'enfant et la dent causale"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à l'odontologie pédiatrique, approche psychologique de l'enfant", "Morphologie, histophysiologie et physiopathologie des dents temporaires et permanentes immatures", "Parodonte de l'enfant : particularités", "Pathologie des dents temporaires", "Pathologie des dents permanentes immatures", "Accidents d'éruption et d'évolution des dents", "Ergonomie et matériel spécifique en odontologie pédiatrique", "L'examen clinique en odontologie pédiatrique", "Explorations radiologiques en odontologie pédiatrique", "Les dents de 6 ans", "Anesthésie en pédodontie", "Aspects cliniques de l'odontologie restauratrice chez l'enfant et l'adolescent", "Sémiologie en pédodontie", "Thérapeutiques préventives en dentisterie pédiatrique", "Approches thérapeutiques selon l'âge de l'enfant et la dent causale"]
            },
            "paro-y4": {
                summaries: ["Conception et organisation du traitement parodontal", "La chirurgie parodontale", "Thérapeutique chirurgicale des maladies gingivales", "Thérapeutique chirurgicale des parodontites", "Les récessions parodontales", "Thérapeutique des défauts du complexe muco-gingival et des récessions parodontales", "Les lésions interradiculaires", "Les défauts osseux parodontaux", "La cicatrisation parodontale", "Le pronostic", "La réévaluation des thérapeutiques parodontales"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Conception et organisation du traitement parodontal", "La chirurgie parodontale", "Thérapeutique chirurgicale des maladies gingivales", "Thérapeutique chirurgicale des parodontites", "Les récessions parodontales", "Thérapeutique des défauts du complexe muco-gingival et des récessions parodontales", "Les lésions interradiculaires", "Les défauts osseux parodontaux", "La cicatrisation parodontale", "Le pronostic", "La réévaluation des thérapeutiques parodontales"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Conception et organisation du traitement parodontal", "La chirurgie parodontale", "Thérapeutique chirurgicale des maladies gingivales", "Thérapeutique chirurgicale des parodontites", "Les récessions parodontales", "Thérapeutique des défauts du complexe muco-gingival et des récessions parodontales", "Les lésions interradiculaires", "Les défauts osseux parodontaux", "La cicatrisation parodontale", "Le pronostic", "La réévaluation des thérapeutiques parodontales"]
            },
            "patho-medical": {
                summaries: ["Dysthyroïdies et maladies des surrénales", "Diabète et nutrition", "Syndrome hémorragique et anémies", "Maladie thromboembolique veineuse", "Syndrome coronarien aigu", "Urticaire, eczéma et psoriasis", "Endocardite infectieuse et valvulopathies", "Maladies systémiques", "Insuffisance cardiaque", "Ulcère gastroduodénal et colopathie fonctionnelle", "Arthroses, arthrites et prothèses articulaires", "Ostéoporose et ostéomalacie", "Glomérulonéphrites, insuffisance rénale et dialyse", "Septicémies et antibiothérapie", "Asthme et allergies", "Hépatites et cirrhoses", "Céphalées et algies faciales", "Hypertension artérielle et AVC", "Syndrome d'immunodéficience acquise (SIDA)", "Épilepsies", "Les leucémies", "Infections des voies aériennes supérieures (VAS) et vertiges", "Maladies chroniques inflammatoires de l'intestin (MICI)"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Dysthyroïdies et maladies des surrénales", "Diabète et nutrition", "Syndrome hémorragique et anémies", "Maladie thromboembolique veineuse", "Syndrome coronarien aigu", "Urticaire, eczéma et psoriasis", "Endocardite infectieuse et valvulopathies", "Maladies systémiques", "Insuffisance cardiaque", "Ulcère gastroduodénal et colopathie fonctionnelle", "Arthroses, arthrites et prothèses articulaires", "Ostéoporose et ostéomalacie", "Glomérulonéphrites, insuffisance rénale et dialyse", "Septicémies et antibiothérapie", "Asthme et allergies", "Hépatites et cirrhoses", "Céphalées et algies faciales", "Hypertension artérielle et AVC", "Syndrome d'immunodéficience acquise (SIDA)", "Épilepsies", "Les leucémies", "Infections des voies aériennes supérieures (VAS) et vertiges", "Maladies chroniques inflammatoires de l'intestin (MICI)"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Dysthyroïdies et maladies des surrénales", "Diabète et nutrition", "Syndrome hémorragique et anémies", "Maladie thromboembolique veineuse", "Syndrome coronarien aigu", "Urticaire, eczéma et psoriasis", "Endocardite infectieuse et valvulopathies", "Maladies systémiques", "Insuffisance cardiaque", "Ulcère gastroduodénal et colopathie fonctionnelle", "Arthroses, arthrites et prothèses articulaires", "Ostéoporose et ostéomalacie", "Glomérulonéphrites, insuffisance rénale et dialyse", "Septicémies et antibiothérapie", "Asthme et allergies", "Hépatites et cirrhoses", "Céphalées et algies faciales", "Hypertension artérielle et AVC", "Syndrome d'immunodéficience acquise (SIDA)", "Épilepsies", "Les leucémies", "Infections des voies aériennes supérieures (VAS) et vertiges", "Maladies chroniques inflammatoires de l'intestin (MICI)"]
            },
            "patho-bucco-dentaire": {
                summaries: ["Les cardiopathies", "Diabète et troubles endocriniens", "Terrains particuliers : la femme enceinte", "L'insuffisance rénale", "Les hémopathies", "Patients sous chimiothérapie anticancéreuse", "Patients irradiés de la région cervico-faciale", "Patients sous inhibiteurs de la résorption osseuse et anti-angiogéniques", "Patients immunodéprimés", "Les traumatismes alvéolo-dentaires", "Les fractures de la mandibule", "Les fractures du massif facial supérieur", "Traitement des fractures des maxillaires", "Sémiologie et examen spécifique d'un patient atteint de troubles de l'ATM", "Pathologie inflammatoire et dégénérative de l'ATM", "Limitations de l'ouverture buccale : trismus et ankylose temporo-mandibulaire", "Les luxations des ATM", "Introduction à la pathologie salivaire : lithiase des glandes salivaires", "Pathologie inflammatoire des glandes salivaires", "Diagnostic des tumeurs bénignes des glandes salivaires", "Diagnostic des tumeurs malignes des glandes salivaires", "Diagnostic des ulcérations", "Affections bulleuses et vésiculeuses de la muqueuse buccale", "Lésions blanches de la muqueuse buccale", "Lésions pigmentées de la muqueuse buccale", "Les adénopathies cervico-faciales", "Les allergies en odontologie"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Les cardiopathies", "Diabète et troubles endocriniens", "Terrains particuliers : la femme enceinte", "L'insuffisance rénale", "Les hémopathies", "Patients sous chimiothérapie anticancéreuse", "Patients irradiés de la région cervico-faciale", "Patients sous inhibiteurs de la résorption osseuse et anti-angiogéniques", "Patients immunodéprimés", "Les traumatismes alvéolo-dentaires", "Les fractures de la mandibule", "Les fractures du massif facial supérieur", "Traitement des fractures des maxillaires", "Sémiologie et examen spécifique d'un patient atteint de troubles de l'ATM", "Pathologie inflammatoire et dégénérative de l'ATM", "Limitations de l'ouverture buccale : trismus et ankylose temporo-mandibulaire", "Les luxations des ATM", "Introduction à la pathologie salivaire : lithiase des glandes salivaires", "Pathologie inflammatoire des glandes salivaires", "Diagnostic des tumeurs bénignes des glandes salivaires", "Diagnostic des tumeurs malignes des glandes salivaires", "Diagnostic des ulcérations", "Affections bulleuses et vésiculeuses de la muqueuse buccale", "Lésions blanches de la muqueuse buccale", "Lésions pigmentées de la muqueuse buccale", "Les adénopathies cervico-faciales", "Les allergies en odontologie"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Les cardiopathies", "Diabète et troubles endocriniens", "Terrains particuliers : la femme enceinte", "L'insuffisance rénale", "Les hémopathies", "Patients sous chimiothérapie anticancéreuse", "Patients irradiés de la région cervico-faciale", "Patients sous inhibiteurs de la résorption osseuse et anti-angiogéniques", "Patients immunodéprimés", "Les traumatismes alvéolo-dentaires", "Les fractures de la mandibule", "Les fractures du massif facial supérieur", "Traitement des fractures des maxillaires", "Sémiologie et examen spécifique d'un patient atteint de troubles de l'ATM", "Pathologie inflammatoire et dégénérative de l'ATM", "Limitations de l'ouverture buccale : trismus et ankylose temporo-mandibulaire", "Les luxations des ATM", "Introduction à la pathologie salivaire : lithiase des glandes salivaires", "Pathologie inflammatoire des glandes salivaires", "Diagnostic des tumeurs bénignes des glandes salivaires", "Diagnostic des tumeurs malignes des glandes salivaires", "Diagnostic des ulcérations", "Affections bulleuses et vésiculeuses de la muqueuse buccale", "Lésions blanches de la muqueuse buccale", "Lésions pigmentées de la muqueuse buccale", "Les adénopathies cervico-faciales", "Les allergies en odontologie"]
            },
            "prothese-y4": {
                summaries: ["Introduction à la prothèse conjointe", "L'examen clinique et le plan de traitement", "Les principes généraux des préparations", "Les limites cervicales et les profils d'émergence", "La couronne coulée", "La couronne à incrustation vestibulaire (CIV)", "La couronne céramo-métallique (CCM)", "La couronne jacket", "Les ancrages corono-radiculaires : la Richmond et l'inlay-core", "Les ancrages partiels en alliages", "Choix et indications des ancrages", "La classification des ponts (bridges) et principes biomécaniques", "Les intermédiaires de ponts (bridges)", "Les empreintes en prothèse fixée", "Les traitements des empreintes", "Les techniques de réalisation prothétique au laboratoire", "L'occlusion en prothèse conjointe", "Le scellement", "La prothèse conjointe et le parodonte", "Introduction à la prothèse collée", "Les restaurations collées : inlays, onlays et overlays", "Les procédés céramo-céramiques", "CFAO (Conception et Fabrication Assistées par Ordinateur)"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à la prothèse conjointe", "L'examen clinique et le plan de traitement", "Les principes généraux des préparations", "Les limites cervicales et les profils d'émergence", "La couronne coulée", "La couronne à incrustation vestibulaire (CIV)", "La couronne céramo-métallique (CCM)", "La couronne jacket", "Les ancrages corono-radiculaires : la Richmond et l'inlay-core", "Les ancrages partiels en alliages", "Choix et indications des ancrages", "La classification des ponts (bridges) et principes biomécaniques", "Les intermédiaires de ponts (bridges)", "Les empreintes en prothèse fixée", "Les traitements des empreintes", "Les techniques de réalisation prothétique au laboratoire", "L'occlusion en prothèse conjointe", "Le scellement", "La prothèse conjointe et le parodonte", "Introduction à la prothèse collée", "Les restaurations collées : inlays, onlays et overlays", "Les procédés céramo-céramiques", "CFAO (Conception et Fabrication Assistées par Ordinateur)"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à la prothèse conjointe", "L'examen clinique et le plan de traitement", "Les principes généraux des préparations", "Les limites cervicales et les profils d'émergence", "La couronne coulée", "La couronne à incrustation vestibulaire (CIV)", "La couronne céramo-métallique (CCM)", "La couronne jacket", "Les ancrages corono-radiculaires : la Richmond et l'inlay-core", "Les ancrages partiels en alliages", "Choix et indications des ancrages", "La classification des ponts (bridges) et principes biomécaniques", "Les intermédiaires de ponts (bridges)", "Les empreintes en prothèse fixée", "Les traitements des empreintes", "Les techniques de réalisation prothétique au laboratoire", "L'occlusion en prothèse conjointe", "Le scellement", "La prothèse conjointe et le parodonte", "Introduction à la prothèse collée", "Les restaurations collées : inlays, onlays et overlays", "Les procédés céramo-céramiques", "CFAO (Conception et Fabrication Assistées par Ordinateur)"]
            }
        },
        "5": {
            "epidemio-y5": {
                summaries: ["Introduction à l'épidémiologie", "Différentes étapes d'un projet de recherche", "Types d'études épidémiologiques", "Branches de l'épidémiologie", "Indicateurs de santé", "Biostatistiques", "Mesures d'association", "Concepts de santé publique", "Programme national de santé bucco-dentaire en milieu scolaire", "Test d'hypothèse du Khi-deux", "Table de Khi-deux et DDL", "Hygiène de l'eau", "Hygiène de base dans un cabinet dentaire"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à l'épidémiologie", "Différentes étapes d'un projet de recherche", "Types d'études épidémiologiques", "Branches de l'épidémiologie", "Indicateurs de santé", "Biostatistiques", "Mesures d'association", "Concepts de santé publique", "Programme national de santé bucco-dentaire en milieu scolaire", "Test d'hypothèse du Khi-deux", "Table de Khi-deux et DDL", "Hygiène de l'eau", "Hygiène de base dans un cabinet dentaire"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à l'épidémiologie", "Différentes étapes d'un projet de recherche", "Types d'études épidémiologiques", "Branches de l'épidémiologie", "Indicateurs de santé", "Biostatistiques", "Mesures d'association", "Concepts de santé publique", "Programme national de santé bucco-dentaire en milieu scolaire", "Test d'hypothèse du Khi-deux", "Table de Khi-deux et DDL", "Hygiène de l'eau", "Hygiène de base dans un cabinet dentaire"]
            },
            "ergonomie-y5": {
                summaries: ["Introduction à l'ergonomie", "Conception architecturale d'un cabinet dentaire", "Risques professionnels en médecine dentaire", "Éclairage au cabinet dentaire", "Ergonomie et postures de travail", "La couleur, composante de l'ambiance au cabinet dentaire", "Les accidents du travail et les maladies professionnelles en odontologie", "Matériel dentaire et équipement de travail", "Prévention des risques professionnels et contrôle de l'infection au cabinet dentaire"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Introduction à l'ergonomie", "Conception architecturale d'un cabinet dentaire", "Risques professionnels en médecine dentaire", "Éclairage au cabinet dentaire", "Ergonomie et postures de travail", "La couleur, composante de l'ambiance au cabinet dentaire", "Les accidents du travail et les maladies professionnelles en odontologie", "Matériel dentaire et équipement de travail", "Prévention des risques professionnels et contrôle de l'infection au cabinet dentaire"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Introduction à l'ergonomie", "Conception architecturale d'un cabinet dentaire", "Risques professionnels en médecine dentaire", "Éclairage au cabinet dentaire", "Ergonomie et postures de travail", "La couleur, composante de l'ambiance au cabinet dentaire", "Les accidents du travail et les maladies professionnelles en odontologie", "Matériel dentaire et équipement de travail", "Prévention des risques professionnels et contrôle de l'infection au cabinet dentaire"]
            },
            "implanto-y5": {
                summaries: ["Planification et projet prothétique en implantologie", "Techniques chirurgicales", "Extraction atraumatique", "Notions sur la prothèse implantaire", "Les péri-implantites : clinique et traitement", "Les échecs et complications en implantologie"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Planification et projet prothétique en implantologie", "Techniques chirurgicales", "Extraction atraumatique", "Notions sur la prothèse implantaire", "Les péri-implantites : clinique et traitement", "Les échecs et complications en implantologie"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Planification et projet prothétique en implantologie", "Techniques chirurgicales", "Extraction atraumatique", "Notions sur la prothèse implantaire", "Les péri-implantites : clinique et traitement", "Les échecs et complications en implantologie"]
            },
            "oce-y5": {
                summaries: ["Principes de base et techniques en colorimétrie", "Les nouvelles approches diagnostiques", "La dentisterie cosmétique", "Les reconstitutions par stratification", "Les restaurations corono-radiculaires indirectes", "Les retraitements : moyens et techniques", "Les retraitements orthogrades et rétrogrades", "Éviction des bris d'instruments endocanalaires", "Complications loco-régionales d'origine dentaire", "Conduite à tenir et thérapeutiques des complications loco-régionales", "Maladies générales et OCE", "La relation endo-parodontale", "Thérapeutiques des résorptions internes et externes", "Endodontie chirurgicale"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Principes de base et techniques en colorimétrie", "Les nouvelles approches diagnostiques", "La dentisterie cosmétique", "Les reconstitutions par stratification", "Les restaurations corono-radiculaires indirectes", "Les retraitements : moyens et techniques", "Les retraitements orthogrades et rétrogrades", "Éviction des bris d'instruments endocanalaires", "Complications loco-régionales d'origine dentaire", "Conduite à tenir et thérapeutiques des complications loco-régionales", "Maladies générales et OCE", "La relation endo-parodontale", "Thérapeutiques des résorptions internes et externes", "Endodontie chirurgicale"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Principes de base et techniques en colorimétrie", "Les nouvelles approches diagnostiques", "La dentisterie cosmétique", "Les reconstitutions par stratification", "Les restaurations corono-radiculaires indirectes", "Les retraitements : moyens et techniques", "Les retraitements orthogrades et rétrogrades", "Éviction des bris d'instruments endocanalaires", "Complications loco-régionales d'origine dentaire", "Conduite à tenir et thérapeutiques des complications loco-régionales", "Maladies générales et OCE", "La relation endo-parodontale", "Thérapeutiques des résorptions internes et externes", "Endodontie chirurgicale"]
            },
            "odf-y5": {
                summaries: ["Prévention et interception", "Les fentes labio-palatines", "Orthodontie et dysfonctionnement de l'appareil manducateur", "Le syndrome d'apnée-hypopnée obstructive du sommeil (SAHOS)", "Le rôle de l'orthodontie dans la chirurgie orthognathique", "Les grands syndromes en ODF", "Le diagnostic parodontal en orthodontie", "Le distaliseur actif : concepts", "L'informatique en ODF", "Les interrelations ODF-Paro-Patho-Prothèse", "Interrelations orthodontie-orthophonie-ORL", "Les mini-vis en orthodontie", "La réhabilitation neuro-occlusale (RNO)", "Superpositions et prévisions de croissance", "Les biostatistiques appliquées à l'orthodontie"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Prévention et interception", "Les fentes labio-palatines", "Orthodontie et dysfonctionnement de l'appareil manducateur", "Le syndrome d'apnée-hypopnée obstructive du sommeil (SAHOS)", "Le rôle de l'orthodontie dans la chirurgie orthognathique", "Les grands syndromes en ODF", "Le diagnostic parodontal en orthodontie", "Le distaliseur actif : concepts", "L'informatique en ODF", "Les interrelations ODF-Paro-Patho-Prothèse", "Interrelations orthodontie-orthophonie-ORL", "Les mini-vis en orthodontie", "La réhabilitation neuro-occlusale (RNO)", "Superpositions et prévisions de croissance", "Les biostatistiques appliquées à l'orthodontie"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Prévention et interception", "Les fentes labio-palatines", "Orthodontie et dysfonctionnement de l'appareil manducateur", "Le syndrome d'apnée-hypopnée obstructive du sommeil (SAHOS)", "Le rôle de l'orthodontie dans la chirurgie orthognathique", "Les grands syndromes en ODF", "Le diagnostic parodontal en orthodontie", "Le distaliseur actif : concepts", "L'informatique en ODF", "Les interrelations ODF-Paro-Patho-Prothèse", "Interrelations orthodontie-orthophonie-ORL", "Les mini-vis en orthodontie", "La réhabilitation neuro-occlusale (RNO)", "Superpositions et prévisions de croissance", "Les biostatistiques appliquées à l'orthodontie"]
            },
            "op-y5": {
                summaries: ["Prévention et éducation à l'hygiène", "Bilan alimentaire", "Les sealants : séquence et surveillance", "Endodontie des dents temporaires et permanentes immatures", "Conduite d'urgence face à un traumatisme", "Prise en charge des fractures alvéolaires", "Traumatismes des dents temporaires et permanentes immatures et leur prise en charge", "Prise en charge des pathologies bucco-dentaires chez l'enfant handicapé", "Thérapeutique sous anesthésie générale et sous sédation consciente", "Pathologies bucco-dentaires, patients à risques et prise en charge", "Pathologie parodontale chez l'enfant et prise en charge", "Prothèse dentaire infantile", "Le maintien de l'espace après avulsion d'une dent temporaire ou permanente", "Dysfonctions et parafonctions", "Établissement de l'occlusion chez l'enfant", "Prescription médicamenteuse"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Prévention et éducation à l'hygiène", "Bilan alimentaire", "Les sealants : séquence et surveillance", "Endodontie des dents temporaires et permanentes immatures", "Conduite d'urgence face à un traumatisme", "Prise en charge des fractures alvéolaires", "Traumatismes des dents temporaires et permanentes immatures et leur prise en charge", "Prise en charge des pathologies bucco-dentaires chez l'enfant handicapé", "Thérapeutique sous anesthésie générale et sous sédation consciente", "Pathologies bucco-dentaires, patients à risques et prise en charge", "Pathologie parodontale chez l'enfant et prise en charge", "Prothèse dentaire infantile", "Le maintien de l'espace après avulsion d'une dent temporaire ou permanente", "Dysfonctions et parafonctions", "Établissement de l'occlusion chez l'enfant", "Prescription médicamenteuse"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Prévention et éducation à l'hygiène", "Bilan alimentaire", "Les sealants : séquence et surveillance", "Endodontie des dents temporaires et permanentes immatures", "Conduite d'urgence face à un traumatisme", "Prise en charge des fractures alvéolaires", "Traumatismes des dents temporaires et permanentes immatures et leur prise en charge", "Prise en charge des pathologies bucco-dentaires chez l'enfant handicapé", "Thérapeutique sous anesthésie générale et sous sédation consciente", "Pathologies bucco-dentaires, patients à risques et prise en charge", "Pathologie parodontale chez l'enfant et prise en charge", "Prothèse dentaire infantile", "Le maintien de l'espace après avulsion d'une dent temporaire ou permanente", "Dysfonctions et parafonctions", "Établissement de l'occlusion chez l'enfant", "Prescription médicamenteuse"]
            },
            "paro-y5": {
                summaries: ["La mobilité dentaire", "Les thérapeutiques non chirurgicales", "Les péri-implantites", "Les interrelations parodontie-endodontie", "Les interrelations parodontie-prothèse", "Les interrelations parodontie-orthodontie"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["La mobilité dentaire", "Les thérapeutiques non chirurgicales", "Les péri-implantites", "Les interrelations parodontie-endodontie", "Les interrelations parodontie-prothèse", "Les interrelations parodontie-orthodontie"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["La mobilité dentaire", "Les thérapeutiques non chirurgicales", "Les péri-implantites", "Les interrelations parodontie-endodontie", "Les interrelations parodontie-prothèse", "Les interrelations parodontie-orthodontie"]
            },
            "patho-y5": {
                summaries: ["Notions générales de cancérologie", "Prévention et dépistage des cancers de la cavité buccale", "Les lésions potentiellement malignes de la muqueuse buccale", "Carcinomes épidermoïdes de la muqueuse buccale", "Carcinomes des maxillaires", "Sarcomes des maxillaires", "Traitement chirurgical des cancers de la cavité buccale", "Traitement par chimiothérapie des cancers de la cavité buccale", "Le traitement par radiothérapie des cancers de la cavité buccale", "Traitement par thérapie ciblée", "Troubles congénitaux cranio-faciaux du développement", "Ostéopathies des maxillaires", "Les pertes de substance des maxillaires", "Les prothèses maxillo-faciales"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Notions générales de cancérologie", "Prévention et dépistage des cancers de la cavité buccale", "Les lésions potentiellement malignes de la muqueuse buccale", "Carcinomes épidermoïdes de la muqueuse buccale", "Carcinomes des maxillaires", "Sarcomes des maxillaires", "Traitement chirurgical des cancers de la cavité buccale", "Traitement par chimiothérapie des cancers de la cavité buccale", "Le traitement par radiothérapie des cancers de la cavité buccale", "Traitement par thérapie ciblée", "Troubles congénitaux cranio-faciaux du développement", "Ostéopathies des maxillaires", "Les pertes de substance des maxillaires", "Les prothèses maxillo-faciales"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Notions générales de cancérologie", "Prévention et dépistage des cancers de la cavité buccale", "Les lésions potentiellement malignes de la muqueuse buccale", "Carcinomes épidermoïdes de la muqueuse buccale", "Carcinomes des maxillaires", "Sarcomes des maxillaires", "Traitement chirurgical des cancers de la cavité buccale", "Traitement par chimiothérapie des cancers de la cavité buccale", "Le traitement par radiothérapie des cancers de la cavité buccale", "Traitement par thérapie ciblée", "Troubles congénitaux cranio-faciaux du développement", "Ostéopathies des maxillaires", "Les pertes de substance des maxillaires", "Les prothèses maxillo-faciales"]
            },
            "prothese-y5": {
                summaries: ["Les différents éléments d'un châssis métallique", "Traitement des édentements distaux et intercalés en prothèse partielle métallique amovible", "Traitements pré-prothétiques", "Traitement prothétique des édentements distaux", "Traitement prothétique des édentements intercalés", "Traitements post-prothétiques : doléances et maintenance", "Traitement post-prothétique : équilibration occlusale", "Les schémas occlusaux en prothèse partielle métallique amovible", "Les attachements", "La prothèse composite", "Prothèse partielle métallique amovible et tissus de soutien", "La prothèse maxillo-faciale : généralités", "La prothèse maxillo-faciale : salive, radiations ionisantes et prothèse", "La prothèse maxillo-faciale : les empreintes, biomatériaux et techniques", "La prothèse maxillo-faciale : l'apport de l'implantologie", "Passage de l'édentement partiel à l'édentement total"].map(title => ({ title: `Summary: ${title}`, link: '#' })),
                quizzes: ["Les différents éléments d'un châssis métallique", "Traitement des édentements distaux et intercalés en prothèse partielle métallique amovible", "Traitements pré-prothétiques", "Traitement prothétique des édentements distaux", "Traitement prothétique des édentements intercalés", "Traitements post-prothétiques : doléances et maintenance", "Traitement post-prothétique : équilibration occlusale", "Les schémas occlusaux en prothèse partielle métallique amovible", "Les attachements", "La prothèse composite", "Prothèse partielle métallique amovible et tissus de soutien", "La prothèse maxillo-faciale : généralités", "La prothèse maxillo-faciale : salive, radiations ionisantes et prothèse", "La prothèse maxillo-faciale : les empreintes, biomatériaux et techniques", "La prothèse maxillo-faciale : l'apport de l'implantologie", "Passage de l'édentement partiel à l'édentement total"].map(title => ({ title: `Quiz: ${title}`, link: '#' })),
                lessons: ["Les différents éléments d'un châssis métallique", "Traitement des édentements distaux et intercalés en prothèse partielle métallique amovible", "Traitements pré-prothétiques", "Traitement prothétique des édentements distaux", "Traitement prothétique des édentements intercalés", "Traitements post-prothétiques : doléances et maintenance", "Traitement post-prothétique : équilibration occlusale", "Les schémas occlusaux en prothèse partielle métallique amovible", "Les attachements", "La prothèse composite", "Prothèse partielle métallique amovible et tissus de soutien", "La prothèse maxillo-faciale : généralités", "La prothèse maxillo-faciale : salive, radiations ionisantes et prothèse", "La prothèse maxillo-faciale : les empreintes, biomatériaux et techniques", "La prothèse maxillo-faciale : l'apport de l'implantologie", "Passage de l'édentement partiel à l'édentement total"]
            }
        }
    };


    // --- [كامل] قاعدة بيانات المواد مع الأيقونات ---
    const subjectsDatabase = {
        "1": [
            { name: "GENETICS", key: "genetics", icon: "GENETICS.png" },
            { name: "BIOMATHÉMATIQUES", key: "biomathematiques", icon: "BIOMATHS.png" },
            { name: "ANATOMY", key: "anatomy-y1", icon: "ANATOMY.png" },
            { name: "BIOCHEMISTRY", key: "biochemistry", icon: "BIOCHEMISTRY.png" },
            { name: "CHEMISTRY", key: "chemistry1", icon: "CHEMISTRY.png" },
            { name: "BIOPHYSIQUE", key: "biophysique", icon: "BIOPHYISICS.png" },
            { name: "PHYSICS", key: "physics", icon: "PHISICS.png" },
            { name: "EMBRYOLOGY", key: "embryology", icon: "EMBRYOLOGY.png" },
            { name: "HISTOLOGY", key: "histology-y1", icon: "HISTOLOGY.png" },
            { name: "CYTOLOGY", key: "cytology", icon: "CYTOLOGY.png" },
            { name: "SSH", key: "ssh", icon: "SSH.png" },
            { name: "PHYSIOLOGY", key: "physiology", icon: "PHYSIOLOGY.png" }
        ],
        "2": [
            { name: "ODF", key: "odf-y2", icon: "ODF.png" },
            { name: "PROTHÈSE", key: "prothese-y2", icon: "PROSTHESIS.png" },
            { name: "OCE", key: "oce", icon: "OCE.png" },
            { name: "PARO", key: "paro-y2", icon: "PARODONTOLOGY.png" },
            { name: "PATHO", key: "patho", icon: "PATHO.png" },
            { name: "BIOMATERIAU", key: "biomateriau", icon: "BIOMATERIALS.png" },
            { name: "IMMUNOLOGIE", key: "immunologie", icon: "IMMUNOLOGY.png" },
            { name: "HISTOLOGIE", key: "histology-y2", icon: "HISTOLOGY.png" },
            { name: "HYGIÈNE", key: "hygiene", icon: "HYGIÈNE.png" },
            { name: "MICROBIOLOGIE", key: "microbiologie", icon: "MICROBIOLOGY.png" },
            { name: "ANATOMIE HUMAINE", key: "anatomie-humaine", icon: "ANATOMY2.png" },
            { name: "INFORMATIQUE", key: "informatique", icon: "default-icon.png" }
        ],
        "3": [
            { name: "ANATOMO-PATHOLOGIE", key: "anatomo-pathologie", icon: "ANATOMO-PATHOLOGIE.png" },
            { name: "ANESTHÉSIOLOGIE", key: "anesthesiologie", icon: "Anesthésiologie.png" },
            { name: "IMAGERIE", key: "imagrie", icon: "IMAGERIE .png" },
            { name: "OC", key: "oc", icon: "OCE.png" },
            { name: "OCCLUSIO", key: "occlusio", icon: "OCCLUSIO.png" },
            { name: "ODF", key: "odf-y3", icon: "ODF.png" },
            { name: "OXYOLOGIE", key: "oxyologie", icon: "OXYOLOGIE.png" },
            { name: "PARO", key: "paro-y3", icon: "PARODONTOLOGY.png" },
            { name: "PATHOLOGIE", key: "pathologie-y3", icon: "PATHO.png" },
            { name: "PHARMACOLOGIE", key: "pharmacologie", icon: "PHARMACOLOGIE.png" },
            { name: "PROTHÈSE", key: "prothese-y3", icon: "PROSTHESIS.png" }
        ],
        "4": [
            { name: "DÉONTOLOGIE", key: "deontologie", icon: "DEONTOLOGIE.png" },
            { name: "IMPLANTO", key: "implanto", icon: "IMPLANTO.png" },
            { name: "OCE", key: "oce-y4", icon: "OCE.png" },
            { name: "ODF", key: "odf-y4", icon: "ODF.png" },
            { name: "OG", key: "og", icon: "OG.png" },
            { name: "OP", key: "op", icon: "OP.png" },
            { name: "PARO", key: "paro-y4", icon: "PARODONTOLOGY.png" },
            { name: "PATHO MÉDICALE", key: "patho-medical", icon: "PATHO MÉDICALE .png" },
            { name: "PATHOLOGIE BUCCO-DENTAIRE", key: "patho-bucco-dentaire", icon: "PATHOLOGIE BUCCO-DENTAIRE.png" },
            { name: "PROTHÈSE", key: "prothese-y4", icon: "PROSTHESIS.png" }
        ],
        "5": [
            { name: "ÉPIDÉMIO", key: "epidemio-y5", icon: "EPIDEMIO.png" },
            { name: "ERGONOMIE", key: "ergonomie-y5", icon: "ERGONOMIE.png" },
            { name: "IMPLANTO", key: "implanto-y5", icon: "IMPLANTO.png" },
            { name: "OCE", key: "oce-y5", icon: "OCE.png" },
            { name: "ODF", key: "odf-y5", icon: "ODF.png" },
            { name: "OP", key: "op-y5", icon: "OP.png" },
            { name: "PARO", key: "paro-y5", icon: "PARODONTOLOGY.png" },
            { name: "PATHO", key: "patho-y5", icon: "PATHO.png" },
            { name: "PROTHÈSE", key: "prothese-y5", icon: "PROSTHESIS.png" }
        ]
    };
    // --- عناصر DOM ---
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    // --- ✨ [إضافة جديدة] تعريف عناصر الواجهة الجديدة ✨ ---
    const exploreContentBtnNew = document.getElementById('explore-content-btn');
    const videoLessonsCard = document.getElementById('video-lessons-card');
    const summariesCard = document.getElementById('summaries-card');
    const quizzesCard = document.getElementById('quizzes-card');
    const articlesCard = document.getElementById('articles-card');
    const articlesModal = document.getElementById('articles-modal');
    const closeArticlesModalBtn = document.getElementById('close-articles-modal-btn');
    const exploreModal = document.getElementById('explore-modal');
    const closeExploreModalBtn = document.getElementById('close-explore-modal-btn');
    const body = document.body;
    const navLinks = document.querySelectorAll('.main-nav a');
    const pageSections = document.querySelectorAll('.page-section');
    const startLearningBtn = document.getElementById('start-learning-btn');
    const exploreContentBtn = document.getElementById('explore-content-btn');
    const yearSelectBtns = document.querySelectorAll('.year-select-btn');
    const pricingDetailsDiv = document.querySelector('.pricing-details');
    const confirmActivationBtn = document.getElementById('confirm-activation-btn');
    const activationStatusMessage = document.getElementById('activation-status');
    const aiChatBtn = document.querySelector('.ai-chat-btn');
    const aiChatModal = document.getElementById('aiChatModal');
    const closeChatBtn = document.querySelector('.close-chat-btn');
    const chatMessagesDiv = document.getElementById('chat-messages');
    const userChatInput = document.getElementById('user-chat-input');
    const sendChatButton = document.getElementById('send-chat-button');
    const backToHomeBtn = document.getElementById('back-to-home-from-year');
    const backToYearSelectBtn = document.getElementById('back-to-year-select');
    const backToSubjectsBtn = document.getElementById('back-to-subjects-btn');
    const uploadPdfBtn = document.getElementById('upload-pdf-btn');
    const pdfFileInput = document.getElementById('pdf-file-input');
    const uploadImageBtn = document.getElementById('upload-image-btn');
    const imageFileInput = document.getElementById('image-file-input');
    const uploadAudioBtn = document.getElementById('upload-audio-btn');
    const audioFileInput = document.getElementById('audio-file-input');
    const aiChatBox = document.getElementById('aiChatBox');
    const chatHeader = document.getElementById('chatHeader');
    const resizeHandle = document.getElementById('resizeHandle');
    const typingHeadline = document.getElementById('typing-headline');
    let typingAnimationTriggered = false; 
    const tempYearSwitcher = document.getElementById('temp-year-switcher');
    const exportPdfBtn = document.getElementById('export-pdf-btn');
    const pinnedMessageBar = document.getElementById('pinned-message-bar');
    const pinnedMessageText = document.getElementById('pinned-message-text');
    const unpinBtn = document.getElementById('unpin-btn');
    const chatPlusBtn = document.getElementById('chat-plus-btn');
    const uploadOptions = document.getElementById('upload-options');

    // --- عناصر ومتغيرات الكاروسيل ---
    const carousel = document.getElementById('subjects-carousel');
    const carouselScene = document.querySelector('.carousel-scene');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    let carouselItems = [];
    let currentIndex = 0;
    let numItems = 0;
    let angle = 0;
    let tz = 0;
    
    // --- متغيرات عامة لقسم البطاقات ---
    let allFlashcardCollections = [];
    let currentCollection = [];
    let currentCardIndex = 0;

    // --- عناصر صفحة عرض الدروس ---
    const backToSubjectsFromLessonsBtn = document.getElementById('back-to-subjects-from-lessons-btn');
    const lessonSubjectIcon = document.getElementById('lesson-subject-icon');
    const lessonSubjectTitle = document.getElementById('lesson-subject-title');
    const lessonsListContainer = document.getElementById('lessons-list-container');

    // --- (إضافة جديدة) عناصر ومُتغيرات مؤقت البومودورو ---
    const pomodoroToggleBtn = document.getElementById('pomodoro-toggle-btn');
    const pomodoroModal = document.getElementById('pomodoroModal');
    const pomodoroBox = document.getElementById('pomodoroBox');
    const closePomodoroBtns = document.querySelectorAll('.close-pomodoro-btn');
    
    // واجهة الإعدادات
    const pomodoroSettingsView = document.getElementById('pomodoro-settings-view');
    const focusDurationInput = document.getElementById('focus-duration');
    const shortBreakDurationInput = document.getElementById('short-break-duration');
    const longBreakDurationInput = document.getElementById('long-break-duration');
    const sessionsInput = document.getElementById('sessions-before-long-break');
    const startPomodoroBtn = document.getElementById('start-pomodoro-btn');
    
    // واجهة المؤقت
    const pomodoroTimerView = document.getElementById('pomodoro-timer-view');
    const sessionTitleEl = document.getElementById('timer-session-title');
    const timeDisplayEl = document.getElementById('time-display');
    const sessionCounterEl = document.getElementById('session-counter');
    const pauseResumeBtn = document.getElementById('pause-resume-btn');
    const resetBtn = document.getElementById('reset-btn');
    const skipBtn = document.getElementById('skip-btn');
    const alarmSound = document.getElementById('alarm-sound');

    // متغيرات حالة البومودورو
    let pomodoroInterval = null;
    let totalSeconds = 0;
    let secondsLeft = 0;
    let currentSession = 'focus'; // focus, shortBreak, longBreak
    let sessionsCompleted = 0;
    let isPaused = true;
    let isPomodoroActive = false; // <-- متغير الحالة الجديد
    let settings = {};

    // عناصر SVG للدائرة
    const progressRingFg = document.querySelector('.progress-ring-fg');
    const radius = progressRingFg.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    progressRingFg.style.strokeDasharray = `${circumference} ${circumference}`;

    // ===================================================================
    // --- إعدادات واجهات برمجة التطبيقات (APIs) ---
    // ===================================================================
    let chatHistory = [{ 
    role: "system", 
    content: `
أنت 'Dentist AI'، مساعد ذكاء اصطناعي أكاديمي فائق التخصص، تم تطويرك بواسطة الدكتور أيمن لمساعدة طلاب طب الأسنان في الجزائر.

**قواعدك الأساسية:**
1.  **الهوية:** عرف عن نفسك دائمًا كـ 'Dentist AI'.
2.  **الخبرة:** تخصصك هو منهج السنة الأولى والثانية والثالثة والرابعة والخامسة لطب الأسنان في الجزائر.
3.  **اللغات:** أجب بنفس لغة سؤال الطالب (عربية فصحى، فرنسية، أو إنجليزية).
4.  **الدقة أولاً:** الدقة العلمية هي أولويتك القصوى. إذا لم تكن متأكدًا 100% من معلومة، اذكر ذلك.
5.  **الأسلوب التعليمي:** اشرح المفاهيم بطريقة تربوية وتجنب الإجابات الجافة.

**(مهم جدًا) التنسيق والترتيب:**
يجب عليك *دائمًا* استخدام تنسيق الماركداون (Markdown) لجعل إجاباتك منظمة وسهلة القراءة. قم بما يلي:
-   **استخدم العناوين:** استعمل \`##\` أو \`###\` للعناوين الفرعية لتنظيم الأفكار.
-   **استخدم القوائم:** استعمل القوائم النقطية (\`-\` أو \`*\`) أو الرقمية (\`1.\`, \`2.\`) لتقسيم المعلومات إلى نقاط واضحة.
-   **استخدم النص العريض:** استعمل \`**نص عريض**\` لتأكيد النقاط والمصطلحات المهمة.
-   **استخدم الفقرات:** **اترك سطرًا فارغًا بين الفقرات** لفصل الأفكار ومنع ظهور النص ككتلة واحدة.
-   **استخدم الرياضيات:** استخدم صيغة LaTeX للرياضيات، مثل \`$E=mc^2$\`.
` 
}];    
    const contentTypes = ['summaries', 'quizzes', 'lessons'];
// --- وظائف مساعدة ---
    function updateThemeToggleIcon(theme) {
        if(themeToggleBtn) themeToggleBtn.innerHTML = theme === 'dark-mode' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }

    // ✨ ================== NEW/UPDATED FUNCTIONS START ================== ✨
    // دالة جديدة مخصصة لزر البطاقة الترحيبية
    function handleStartFirstQuiz() {
        // 1. تعيين نوع المحتوى إلى "كويزات"
        currentContentType = 'quizzes';

        // 2. تفعيل رابط "Quizzes" في شريط التنقل
        navLinks.forEach(l => l.classList.remove('active-link'));
        const quizzesLink = document.querySelector('a[data-page-type="quizzes"]');
        if (quizzesLink) {
            quizzesLink.classList.add('active-link');
        }

        // 3. الانتقال إلى صفحة اختيار المواد
        showPage('#subjects-page');
    }

    // النسخة النهائية والمحدثة للدالة
    async function renderHomePageWidget() {
        const token = localStorage.getItem('userToken');
        const welcomeContainer = document.getElementById('welcome-card-container');
        const statsContainer = document.getElementById('stats-dashboard');

        if (!welcomeContainer || !statsContainer) {
            console.error("Home page widget containers not found in the DOM.");
            return;
        }

        // إخفاء الواجهتين مبدئيًا
        welcomeContainer.style.display = 'none';
        statsContainer.style.display = 'none';

        try {
            const res = await fetch('http://localhost:5000/api/user/widget-data', {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!res.ok) {
                throw new Error('Could not load widget data');
            }
            
            const data = await res.json();

            if (data.hasActivity) {
                // ✅  الحالة 1: المستخدم لديه نشاط - عرض لوحة الإحصائيات
                statsContainer.style.display = 'grid';

                const { lastQuiz } = data;

                // ملء البيانات الديناميكية من الباك اند
                document.getElementById('stats-last-lesson-title').textContent = lastQuiz.quizTitle;
                document.getElementById('stats-last-lesson-module').textContent = lastQuiz.subjectName;
                document.getElementById('stats-quizzes-correct').textContent = lastQuiz.correctAnswers;
                document.getElementById('stats-quizzes-incorrect').textContent = lastQuiz.incorrectAnswers;

                const minutes = Math.floor(lastQuiz.timeTaken / 60);
                const seconds = lastQuiz.timeTaken % 60;
                document.getElementById('stats-quizzes-time').textContent = `${minutes}m ${seconds}s`;

                const badgeImg = document.getElementById('achievement-badge-img');
                const badgeText = document.getElementById('achievement-badge-text');
                if (badgeImg) {
                    badgeImg.src = lastQuiz.badge.imageUrl;
                    badgeImg.alt = lastQuiz.badge.name;
                }
                if (badgeText) {
                    if (lastQuiz.badge.name.includes('Gold')) badgeText.textContent = "Excellent!";
                    else if (lastQuiz.badge.name.includes('Silver')) badgeText.textContent = "Well Done!";
                    else badgeText.textContent = "Good Effort!";
                }
                
            } else {
                // ❌  الحالة 2: المستخدم جديد - عرض البطاقة الترحيبية
                welcomeContainer.style.display = 'block'; 
                
                const welcomeButton = document.getElementById('welcome-start-quiz-btn');
                if (welcomeButton) {
                    if (!welcomeButton.dataset.listenerAttached) {
                        welcomeButton.addEventListener('click', handleStartFirstQuiz);
                        welcomeButton.dataset.listenerAttached = 'true';
                    }
                }
            }
        } catch (error) {
            console.error("Error rendering home page widget:", error);
            // في حالة فشل الاتصال، عرض البطاقة الترحيبية كخيار آمن
            welcomeContainer.style.display = 'block';
            const welcomeButton = document.getElementById('welcome-start-quiz-btn');
            if (welcomeButton && !welcomeButton.dataset.listenerAttached) {
                welcomeButton.addEventListener('click', handleStartFirstQuiz);
                welcomeButton.dataset.listenerAttached = 'true';
            }
        }
    }
    // ✨ =================== NEW/UPDATED FUNCTIONS END ==================== ✨
    
    function showPage(targetId) {
        pageSections.forEach(section => section.classList.remove('active'));
        const targetPage = document.querySelector(targetId);
        
        if (targetPage) {
            targetPage.classList.add('active');
            
            if (targetId === '#home-page') {
                renderHomePageWidget(); 
            }

            if (particlesInstance) {
                if (targetId === '#quiz-taking-page' || targetId === '#quiz-summary-page') {
                    particlesInstance.pause();
                } else {
                    particlesInstance.play();
                }
            }

            if (targetId === '#subjects-page') {
                animateCarouselAssembly(selectedYear);
            }

            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                const linkPageType = link.dataset.pageType;
                let isActive = false;
                if (linkPageType) {
                    if ((targetId === '#subjects-page' || targetId === '#content-display-page' || targetId === '#lessons-display-page') && linkPageType === currentContentType) {
                        isActive = true;
                    }
                } else {
                    if (linkHref === targetId) {
                        isActive = true;
                    }
                }
                link.classList.toggle('active-link', isActive);
            });
            
            setTimeout(() => triggerScrollReveal(targetPage), 50);
        }
    }

    function startTypingAnimation(element) {
        if (!element || typingAnimationTriggered) return; 
        typingAnimationTriggered = true; 
        const text = element.dataset.text;
        if (!text) return;
        let i = 0;
        element.innerHTML = "";
        const speed = 100;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                element.classList.add('typing-complete');
            }
        }, speed);
    }

    function setupScrollReveal(elements) {
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    if (entry.target.contains(typingHeadline)) {
                        setTimeout(() => startTypingAnimation(typingHeadline), 300);
                    }
                    currentObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        elements.forEach(element => {
            element.classList.remove('fade-in');
            observer.observe(element);
        });
    }
    
    function triggerScrollReveal(pageElement) {
        if (pageElement) {
            setupScrollReveal(pageElement.querySelectorAll('.scroll-reveal-element'));
        }
    }
    
    function addMessageToChat(message, senderClass, rawMessageContent) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('message-wrapper', `${senderClass}-wrapper`);
        messageWrapper.dataset.rawMessage = rawMessageContent || message;

        const p = document.createElement('p');
        p.classList.add(senderClass);
        
        if (senderClass === 'user-message') {
            p.textContent = message;
        } else {
            if (typeof marked !== 'undefined' && typeof DOMPurify !== 'undefined') {
                 p.innerHTML = DOMPurify.sanitize(marked.parse(message));
            } else {
                 p.textContent = message;
            }
        }
        messageWrapper.appendChild(p);

        const messageActions = document.createElement('div');
        messageActions.className = 'message-actions';

        const copyBtn = document.createElement('button');
        copyBtn.title = 'Copy Text';
        copyBtn.innerHTML = '<i class="far fa-copy"></i>';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(messageWrapper.dataset.rawMessage).then(() => showNotification('Copied!', 'success'));
        };
        messageActions.appendChild(copyBtn);

        if (senderClass === 'ai-message') {
            const summarizeBtn = document.createElement('button');
            summarizeBtn.title = 'Summarize this';
            summarizeBtn.innerHTML = '<i class="fas fa-stream"></i>';
            summarizeBtn.onclick = () => summarizeMessage(messageWrapper.dataset.rawMessage);
            messageActions.appendChild(summarizeBtn);

            const pinBtn = document.createElement('button');
            pinBtn.title = 'Pin this message';
            pinBtn.innerHTML = '<i class="fas fa-thumbtack"></i>';
            pinBtn.onclick = () => pinMessage(messageWrapper.dataset.rawMessage);
            messageActions.appendChild(pinBtn);
        }
        
        if (senderClass === 'user-message') {
            messageWrapper.insertBefore(messageActions, p);
        } else {
            messageWrapper.appendChild(messageActions);
        }

        chatMessagesDiv.appendChild(messageWrapper);
        chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
        
        if (senderClass === 'ai-message' && typeof renderMathInElement === 'function') {
            renderMathInElement(p, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
        }
        return p;
    }
    
    async function summarizeMessage(textToSummarize) {
        showNotification('Summarizing...', 'info');
        const summaryPrompt = `Please summarize the following text into concise bullet points for a student, in the same language as the text:\n\n--- TEXT ---\n${textToSummarize}`;
        const tempChatHistory = [...chatHistory, {role: 'user', content: summaryPrompt}];
        sendApiRequest(tempChatHistory, false);
    }

    function pinMessage(textToPin) {
        if(pinnedMessageText) pinnedMessageText.textContent = textToPin;
        if(pinnedMessageBar) pinnedMessageBar.style.display = 'block';
        showNotification('Message pinned!', 'success');
    }

    async function sendChatMessage() {
        const userText = userChatInput.value.trim();
        if (!userText) return;
        addMessageToChat(userText, 'user-message');
        chatHistory.push({ role: "user", content: userText });
        userChatInput.value = '';
        sendApiRequest(chatHistory, true);
    }

    async function sendApiRequest(history, isMainConversation) {
        userChatInput.disabled = true;
        sendChatButton.disabled = true;

        const aiMessageContainer = addMessageToChat("", 'ai-message', "");
        aiMessageContainer.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;

        const userQuestion = history[history.length - 1].content;
        const token = localStorage.getItem('userToken');

        try {
            const response = await fetch('http://localhost:5000/api/ai/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ question: userQuestion }) 
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to get response from server');
            }

            const data = await response.json();
            const fullReply = data.answer;

            aiMessageContainer.innerHTML = DOMPurify.sanitize(marked.parse(fullReply));
            aiMessageContainer.parentElement.dataset.rawMessage = fullReply;
            if (isMainConversation) {
                chatHistory.push({ role: "assistant", content: fullReply });
            }
            if (typeof renderMathInElement === 'function') {
                renderMathInElement(aiMessageContainer, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }] });
            }

        } catch (error) {
            console.error("AI Request Error:", error);
            aiMessageContainer.innerHTML = `Sorry, an error occurred: ${error.message}`;
            if (isMainConversation) {
                chatHistory.pop(); 
            }
        } finally {
            userChatInput.disabled = false;
            sendChatButton.disabled = false;
            userChatInput.focus();
        }
    }
    
    async function extractTextFromPdf(file) {
        if (typeof pdfjsLib === 'undefined') {
            throw new Error("PDF processing library is not loaded.");
        }
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js`;

        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = async (event) => {
                try {
                    const pdfData = new Uint8Array(event.target.result);
                    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
                    let fullText = '';
                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const textContent = await page.getTextContent();
                        fullText += textContent.items.map(item => item.str).join(' ') + '\n\n';
                    }
                    resolve(fullText);
                } catch (error) {
                    reject("Failed to parse the PDF.");
                }
            };
            reader.onerror = () => reject("Error reading the file.");
            reader.readAsArrayBuffer(file);
        });
    }

    async function sendImageAndPromptToGemini(prompt, imageFile) {
        addMessageToChat(`Analyzing image: "${prompt}"`, 'user-message');
        const aiMsg = addMessageToChat("", 'ai-message');
        aiMsg.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;

        const formData = new FormData();
        formData.append('prompt', prompt);
        formData.append('image', imageFile);

        const token = localStorage.getItem('userToken');

        try {
            const response = await fetch('http://localhost:5000/api/gemini/image', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Server failed to process the image.');
            }

            const data = await response.json();
            const aiReply = data.answer;
            
            aiMsg.innerHTML = DOMPurify.sanitize(marked.parse(aiReply));
            aiMsg.parentElement.dataset.rawMessage = aiReply;

        } catch (error) {
            console.error("Image Analysis Error:", error);
            aiMsg.textContent = `Error analyzing image: ${error.message}`;
        }
    }

    async function sendAudioAndPromptToGemini(prompt, audioFile) {
        addMessageToChat(`Analyzing audio: "${audioFile.name}"...`, 'user-message');
        const aiMsg = addMessageToChat("", 'ai-message');
        aiMsg.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;

        const formData = new FormData();
        formData.append('prompt', prompt);
        formData.append('audio', audioFile);

        const token = localStorage.getItem('userToken');

        try {
            const response = await fetch('http://localhost:5000/api/gemini/audio', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Server failed to process the audio.');
            }

            const data = await response.json();
            const aiReply = data.answer;
            
            aiMsg.innerHTML = DOMPurify.sanitize(marked.parse(aiReply));
            aiMsg.parentElement.dataset.rawMessage = aiReply;

        } catch (error) {
            console.error("Audio Analysis Error:", error);
            aiMsg.textContent = `Error analyzing audio: ${error.message}`;
        }
    }
    
function rotateCarousel() {
    if (!carousel) return;
    
    // ✨ [تطبيق حل الأستاذ] حساب زاوية الإزاحة (نصف خطوة)
    const offsetAngle = (360 / numItems) / 2;
    const rotation = (-currentIndex * angle) + offsetAngle;
    
    carousel.style.transform = `translateZ(${-tz}px) rotateX(${rotation}deg)`;

    carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === currentIndex);
    });
}

function animateCarouselAssembly(year) {
    if (!carousel) return;
    carousel.innerHTML = '';
    
    const subjects = subjectsDatabase[year] || [];
    numItems = subjects.length;
    if (numItems === 0) return;

    angle = 360 / numItems;
    const itemHeight = 80;
    
    // المعادلة الأصلية لحساب العمق (tz)
    tz = Math.round((itemHeight / 2) / Math.tan(Math.PI / numItems));

    // ✨ [تطبيق حل الأستاذ] حساب زاوية الإزاحة (نصف خطوة)
    const offsetAngle = angle / 2;

    subjects.forEach((subject, i) => {
        const item = document.createElement('button');
        item.className = 'subject-button carousel-item';
        item.dataset.subjectKey = subject.key;
        item.dataset.subjectName = subject.name;
        item.dataset.subjectIcon = subject.icon || "default-icon.png";

        let iconHtml = subject.icon ? `<img src="ICONS/${subject.icon}" alt="${subject.name} Icon" class="custom-icon">` : `<i class="fas fa-book"></i>`;
        item.innerHTML = `${iconHtml} <span>${subject.name}</span>`;
        
        // ✨ [تطبيق حل الأستاذ] إضافة الإزاحة لزاوية دوران كل عنصر
        const rotationAngle = (i * angle) + offsetAngle;

        const initialTransform = `rotateX(${rotationAngle}deg) translateZ(${tz}px) translateY(50px) scale(0.8)`;
        item.style.transform = initialTransform;

        item.addEventListener('click', () => {
            if (i !== currentIndex) {
                currentIndex = i;
                rotateCarousel();
            } else {
                if (currentContentType === 'lessons') {
                    showLessonsForSubject(item.dataset.subjectKey); 
                } else if (currentContentType === 'summaries' || currentContentType === 'quizzes') {
                    showContentListForSubject(item.dataset.subjectKey, currentContentType);
                } 
                else {
                    showNotification('Please select a content type (Summaries, Quizzes, or Lessons) from the top menu first.', 'error');
                }
            }
        });
        
        carousel.appendChild(item);
    });

    carouselItems = document.querySelectorAll('.carousel-item');
    currentIndex = 0;
    rotateCarousel();

    carouselItems.forEach((item, i) => {
        setTimeout(() => {
            // ✨ [تطبيق حل الأستاذ] تطبيق نفس الإزاحة عند الظهور النهائي
            const finalRotationAngle = (i * angle) + offsetAngle;
            const finalTransform = `rotateX(${finalRotationAngle}deg) translateZ(${tz}px)`;
            item.style.opacity = '1';
            item.style.transform = finalTransform;
        }, 100 + (i * 80));
    });
}
    
    // script.js (داخل DOMContentLoaded)

// ...

    async function showContentListForSubject(subjectKey, contentType) {
        const subjectData = (subjectsDatabase[selectedYear] || []).find(s => s.key === subjectKey);
        if (!subjectData) return;

        const contentTitle = document.getElementById('content-title');
        const contentListContainer = document.getElementById('content-list');

        contentTitle.textContent = `${subjectData.name} ${contentType.charAt(0).toUpperCase() + contentType.slice(1)}`;
        contentListContainer.innerHTML = '<p>Loading content...</p>';
        showPage('#content-display-page');

        let contentItems = [];
        try {
            const token = localStorage.getItem('userToken');
            const subjectsInYear = await fetchSubjectsByYear(selectedYear);
            const currentSubject = subjectsInYear.find(s => s.key === subjectKey);

            if (currentSubject) {
                if (contentType === 'summaries') {
                    // استدعاء الواجهة الخلفية لجلب الملخصات
                    contentItems = await fetchSummariesBySubject(currentSubject._id);
                } else if (contentType === 'quizzes') {
                    // استدعاء الواجهة الخلفية لجلب الكويزات
                    const res = await fetch(`http://localhost:5000/api/content/quizzes/subject/${currentSubject._id}`, { 
                        headers: { 'Authorization': `Bearer ${token}` } 
                    });
                    if (!res.ok) throw new Error('Could not load quizzes.');
                    contentItems = await res.json();
                }
            }
        } catch (error) {
            console.error(`Failed to fetch ${contentType}:`, error);
            showNotification(`Could not load ${contentType}.`, 'error');
            contentListContainer.innerHTML = `<p>Error loading content. Please try again later.</p>`;
            return;
        }

        contentListContainer.innerHTML = '';
        if (contentItems.length > 0) {
            contentItems.forEach(item => {
                const link = document.createElement('a');
                link.className = 'content-item';

                if (contentType === 'summaries') {
                    // الدالة المعدلة ستنشئ الرابط الصحيح تلقائيًا
                    link.href = buildPdfViewerUrl(item.filePath);
                    link.target = "_blank"; // <-- إضافة مهمة لفتح العارض في تبويب جديد
                    link.innerHTML = `<i class="fas fa-book-open"></i><span>${item.title}</span>`;
                } else if (contentType === 'quizzes') {
                    link.innerHTML = `<i class="fas fa-question-circle"></i><span>${item.title}</span>`;
                    link.href = '#'; 
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        startQuiz(item._id);
                    });
                }
                contentListContainer.appendChild(link);
            });
        } else {
            contentListContainer.innerHTML = `<p>No ${contentType} available for this subject yet.</p>`;
        }
    }

    // script.js (داخل DOMContentLoaded)

// ...

    async function showLessonsForSubject(subjectKey) {
        const subjectData = (subjectsDatabase[selectedYear] || []).find(s => s.key === subjectKey);
        if (!subjectData) return;

        const contentTitle = document.getElementById('content-title');
        const contentListContainer = document.getElementById('content-list');

        // سنستخدم نفس صفحة عرض المحتوى الخاصة بالملخصات
        contentTitle.textContent = `${subjectData.name} Lessons`;
        contentListContainer.innerHTML = '<p>Loading lessons...</p>';
        showPage('#content-display-page'); 

        let lessons = [];
        try {
            // الواجهة الخلفية الآن سترجع الدروس مع filePath
            const subjectsFromDB = await fetchSubjectsByYear(selectedYear);
            const subjectFromDB = subjectsFromDB.find(s => s.key === subjectKey);
            if (subjectFromDB) {
                lessons = await fetchLessonsBySubject(subjectFromDB._id);
            }
        } catch (e) {
            showNotification('Could not load lessons.', 'error');
            contentListContainer.innerHTML = `<p>Error loading content.</p>`;
            return;
        }

        contentListContainer.innerHTML = '';
        if (lessons.length > 0) {
            lessons.forEach(lesson => {
                const link = document.createElement('a');
                link.className = 'content-item';
                // نستخدم نفس الدالة الموحدة لإنشاء رابط الـ PDF
                link.href = buildPdfViewerUrl(lesson.filePath);
                link.target = "_blank"; // <-- لفتح العارض في تبويب جديد
                link.innerHTML = `<i class="fas fa-chalkboard-teacher"></i><span>${lesson.title}</span>`;
                contentListContainer.appendChild(link);
            });
        } else {
            contentListContainer.innerHTML = `<p>No lessons available for this subject yet.</p>`;
        }
    }
    // ===================================================================
    // === [النسخة النهائية] منطق الكويز الاحترافي ---
    // ===================================================================
    let proQuiz = null;
    let proQuestionIndex = 0;
    let proUserAnswers = [];
    let quizTimerInterval = null;
    let quizStartTime = 0;
    const quizQuestionNumbersContainer = document.getElementById('quiz-question-numbers-pro');
    const quizSubjectNameEl = document.getElementById('quiz-subject-name-pro');
    const quizLessonNameEl = document.getElementById('quiz-lesson-name-pro');
    const quizTimerDisplay = document.getElementById('quiz-timer-display-pro');
    const quizTimerContainer = document.querySelector('.quiz-timer-pro');
    const quizProgressEl_pro = document.getElementById('quiz-progress-pro');
    const quizQuestionTextEl_pro = document.getElementById('quiz-question-text-pro');
    const quizOptionsContainer_pro = document.getElementById('quiz-options-container-pro');    const quizExplanationContainer = document.getElementById('quiz-explanation-container-pro');
    const quizExplanationText = document.getElementById('quiz-explanation-text-pro');
    const quizPrevBtn = document.getElementById('quiz-prev-btn-pro');
    const quizActionBtn = document.getElementById('quiz-action-btn-pro');
    const quizNextBtn_pro = document.getElementById('quiz-next-btn-pro');
    const quizCorrectCountEl = document.getElementById('quiz-correct-count-pro');
    const quizIncorrectCountEl = document.getElementById('quiz-incorrect-count-pro');
    const quizScoreEl = document.getElementById('quiz-score-pro');

    // ✅ 3. النسخة المصححة لـ submitQuizResults
async function submitQuizResults() {
    // 1. إيقاف المؤقت وجمع البيانات الأساسية
    clearInterval(quizTimerInterval);
    const correctCount = proUserAnswers.filter(a => a && a.isCorrect).length;
    const totalQuestions = proQuiz.questions.length;
    const score = totalQuestions > 0 ? (correctCount / totalQuestions) * 20 : 0;
    const quizEndTime = Date.now();
    const timeTakenInSeconds = Math.round((quizEndTime - quizStartTime) / 1000);

    // تجهيز بيانات العرض لصفحة الملخص
    const resultPayload = {
        quizId: proQuiz._id,
        subjectId: proQuiz.subject,
        score: parseFloat(score.toFixed(2)),
        timeTaken: timeTakenInSeconds,
        correctAnswers: correctCount,
        totalQuestions: totalQuestions,
        incorrectQuestions: proUserAnswers.map((answer, index) => {
            if (answer && !answer.isCorrect) {
                const question = proQuiz.questions[index];
                return {
                    questionText: question.question,
                    options: question.options,
                    correctOptionIndexes: Array.isArray(question.answer) ? question.answer : [question.answer],
                    userSelectedIndexes: answer.selectedIndexes,
                    explanation: question.explanation,
                    imageUrl: question.imageUrl || null
                };
            }
            return null;
        }).filter(q => q !== null)
    };

    // ✨ --- التعديل الجديد هنا --- ✨
    if (proQuiz._id && proQuiz._id.startsWith('ai-generated-')) {
        console.log("AI-generated quiz finished. Displaying summary and downloading PDF.");
        
        // الخطوة 1: عرض صفحة الملخص على الشاشة
        showQuizSummaryPage(resultPayload);
        
        // الخطوة 2: توليد وتنزيل ملف الـ PDF تلقائيًا
        try {
            generateQuizSummaryPDF(resultPayload, proQuiz.title || "AI Generated Quiz");
            showNotification('Your PDF summary is downloading!', 'success');
        } catch(pdfError) {
            console.error("PDF Generation Error for AI Quiz:", pdfError);
            showNotification('Could not generate PDF summary.', 'error');
        }
        
        return; // الخروج من الدالة
    }
    // --- نهاية التعديل ---

    // 3. إرسال النتيجة إلى الباك اند (فقط للكويزات العادية)
    const token = localStorage.getItem('userToken');
    try {
        const response = await fetch('http://localhost:5000/api/results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(resultPayload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to save results.');
        }

        const savedResultWithXP = await response.json();
        
        document.getElementById('user-xp-display').textContent = `${savedResultWithXP.totalXP} XP`;
        showNotification(`+${savedResultWithXP.earnedXP} XP earned!`, 'success');
        if (savedResultWithXP.newBadge) {
            showNewBadgePopup(savedResultWithXP.newBadge); 
        }

    } catch (error) {
        console.error('Error submitting quiz result:', error);
        showNotification(`Failed to save progress: ${error.message}`, 'error');
    }
    
    // 5. عرض صفحة ملخص الكويز
    showQuizSummaryPage(resultPayload);
}
    
    function showNewBadgePopup(badge) {
        document.getElementById('badge-popup-name').textContent = badge.name;
        document.getElementById('badge-popup-desc').textContent = badge.description;
        const overlay = document.getElementById('badge-popup-overlay');
        overlay.classList.add('show');
        document.getElementById('badge-popup-close').onclick = () => {
            overlay.classList.remove('show');
        };
    }
    
    function showQuizSummaryPage(resultData) {
        const summaryScoreEl = document.getElementById('summary-score');
        const summaryCorrectAnswersEl = document.getElementById('summary-correct-answers');
        const summaryTimeTakenEl = document.getElementById('summary-time-taken');
        const summaryBadgeImg = document.getElementById('summary-badge-img');

        const scorePercentage = (resultData.correctAnswers / resultData.totalQuestions) * 100;
        if (summaryBadgeImg) {
            if (scorePercentage >= 85) summaryBadgeImg.src = 'images/badge-gold.png';
            else if (scorePercentage >= 60) summaryBadgeImg.src = 'images/badge-silver.png';
            else summaryBadgeImg.src = 'images/badge-bronze.png';
        }

        if (summaryScoreEl) summaryScoreEl.textContent = `${resultData.score.toFixed(2)} / 20`;
        if (summaryCorrectAnswersEl) summaryCorrectAnswersEl.textContent = `${resultData.correctAnswers} / ${resultData.totalQuestions}`;

        const minutes = Math.floor(resultData.timeTaken / 60);
        const seconds = resultData.timeTaken % 60;
        if (summaryTimeTakenEl) summaryTimeTakenEl.textContent = `${minutes}m ${seconds}s`;

        // 1. عرض الأسئلة الخاطئة
        const incorrectQuestionsContainer = document.getElementById('incorrect-questions-summary');
        displayReviewQuestions(incorrectQuestionsContainer, resultData.incorrectQuestions, proQuiz.subject);

        // 2. عرض الأسئلة الصحيحة
        const correctQuestionsContainer = document.getElementById('correct-questions-summary');
        if (correctQuestionsContainer) {
            const correctQuestions = proQuiz.questions.filter((q, index) => {
                const answer = proUserAnswers[index];
                return answer && answer.isCorrect;
            });
            displayReviewQuestions(correctQuestionsContainer, correctQuestions, proQuiz.subject);
        }

        const backBtn = document.getElementById('back-to-subjects-from-summary-btn');
        if (backBtn) backBtn.onclick = () => showPage('#subjects-page');

        const retryBtn = document.getElementById('retry-quiz-btn');
        if (retryBtn) retryBtn.onclick = () => startQuiz(proQuiz._id);

        const exportBtn = document.getElementById('export-summary-pdf-btn');
        if (exportBtn) {
            exportBtn.onclick = () => {
                showNotification('Generating PDF, please wait...', 'info');
                setTimeout(() => {
                    try {
                        generateQuizSummaryPDF(resultData, proQuiz.title);
                    } catch (error) {
                        console.error("PDF Generation Error:", error);
                        showNotification('An error occurred while creating the PDF.', 'error');
                    }
                }, 50);
            };
        }
        showPage('#quiz-summary-page');
    }

    // =================== START: CORRECTED CODE ===================
    
    /**
     * @description Displays a list of questions (correct or incorrect) in the summary page.
     * @param {HTMLElement} container - The HTML element to append the questions to.
     * @param {Array} questions - The array of question objects to display.
     * @param {string} subjectId - The ID of the subject for saving flashcards.
     */
    // ✅ --- النسخة المصححة والمحسّنة لدالة displayReviewQuestions --- ✅
function displayReviewQuestions(container, questions, subjectId) {
    container.innerHTML = '';
    if (!questions || questions.length === 0) {
        container.innerHTML = '<p>No questions to display in this section.</p>';
        return;
    }

    const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

    questions.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.className = q.userSelectedIndexes ? 'review-q-summary incorrect-q-summary' : 'review-q-summary';

        // ✨ --- التصحيح هنا: جعل الدالة تتعرف على كلا شكلي البيانات --- ✨
        // ابحث عن correctOptionIndexes، وإذا لم تجدها، استخدم answer
        const correctIndexesRaw = q.correctOptionIndexes || q.answer;
        // تأكد دائمًا من أنها مصفوفة
        const correctIndexesArray = Array.isArray(correctIndexesRaw) ? correctIndexesRaw : [correctIndexesRaw];
        // --- نهاية التصحيح ---

        const correctAnswersText = correctIndexesArray.map(i => optionLabels[i]).join(', ');
        const imageHtml = q.imageUrl ? `<div class="review-q-image"><img src="http://localhost:5000${q.imageUrl}" alt="Review Illustration"></div>` : '';

        let detailsHtml = '';
        if (q.userSelectedIndexes) {
            const userAnswersText = q.userSelectedIndexes.map(i => optionLabels[i]).join(', ') || "No answer";
            detailsHtml = `
                <p><em>Your Answer:</em> <span class="user-answer">${userAnswersText}</span></p>
                <p><em>Correct Answer:</em> <span class="correct-answer">${correctAnswersText}</span></p>
            `;
        }

        // استخدام questionText للأسئلة الخاطئة، و question للأسئلة الصحيحة
        const questionText = q.questionText || q.question;

        questionDiv.innerHTML = `
            <div class="review-q-text">
                <p><strong>Q:</strong> ${questionText}</p>
                ${detailsHtml}
            </div>
            ${imageHtml}
            <div class="review-q-actions">
                <button class="action-btn save-flashcard-btn" title="Save as Flashcard">
                    <i class="fas fa-plus-square"></i>
                </button>
            </div>
        `;

        container.appendChild(questionDiv);

        const saveBtn = questionDiv.querySelector('.save-flashcard-btn');
        const backContent = `Correct Answer(s): ${correctAnswersText}\n\nExplanation: ${q.explanation || 'No explanation provided.'}`;
        
        saveBtn.onclick = () => {
            saveBtn.innerHTML = '<i class="fas fa-check-square"></i>';
            saveBtn.disabled = true;
            createFlashcardAPI({
                subjectId,
                questionText: questionText,
                backContent,
                imageUrl: q.imageUrl ? `http://localhost:5000${q.imageUrl}` : null
            });
        };
    });
}

    /**
     * @description Sends a request to the backend to create a new flashcard.
     * @param {object} flashcardData - The data for the flashcard.
     */
    async function createFlashcardAPI(flashcardData) {
        const token = localStorage.getItem('userToken');
        try {
            const response = await fetch('http://localhost:5000/api/flashcards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(flashcardData)
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to save flashcard.');
            }
            showNotification('Flashcard saved!', 'success');
        } catch (error) {
            showNotification(error.message, 'error');
            // Note: We don't re-enable the button to prevent duplicate submissions on error.
            // The user can try again on the next quiz.
        }
    }
    
    // =================== END: CORRECTED CODE ===================

    function generateQuizSummaryPDF(resultData, quizTitle) {
        if (typeof window.jspdf === 'undefined') {
            showNotification('PDF library not loaded. Please try again.', 'error');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const pageHeight = doc.internal.pageSize.height;
        const pageWidth = doc.internal.pageSize.width;
        const margin = 15;
        let y = margin;

        const addPageIfNeeded = (requiredHeight) => {
            if (y + requiredHeight > pageHeight - margin) {
                doc.addPage();
                y = margin;
            }
        };

        doc.setFontSize(20);
        doc.setFont("helvetica", "bold");
        doc.text("Dentist - Quiz Summary", pageWidth / 2, y, { align: "center" });
        y += 8;
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text(quizTitle, pageWidth / 2, y, { align: "center" });
        y += 10;
        doc.setLineWidth(0.5);
        doc.line(margin, y, pageWidth - margin, y);
        y += 15;

        doc.setFontSize(12);
        doc.text(`Final Score: ${resultData.score.toFixed(2)} / 20`, margin, y);
        const minutes = Math.floor(resultData.timeTaken / 60);
        const seconds = resultData.timeTaken % 60;
        doc.text(`Time Taken: ${minutes}m ${seconds}s`, pageWidth - margin, y, { align: "right" });
        y += 8;
        doc.text(`Correct Answers: ${resultData.correctAnswers} / ${resultData.totalQuestions}`, margin, y);
        y += 10;
        doc.line(margin, y, pageWidth - margin, y);
        y += 15;

        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Mistake Review Section", margin, y);
        y += 10;

        if (resultData.incorrectQuestions.length === 0) {
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.text("Excellent work! You made no mistakes.", margin, y);
        } else {
            resultData.incorrectQuestions.forEach((q, index) => {
                const questionLines = doc.splitTextToSize(`Q${index + 1}: ${q.questionText}`, pageWidth - (margin * 2));
                const requiredHeight = (questionLines.length * 5) + 35;
                addPageIfNeeded(requiredHeight);

                doc.setFontSize(12);
                doc.setFont("helvetica", "bold");
                doc.text(questionLines, margin, y);
                y += questionLines.length * 5 + 5;

                doc.setFont("helvetica", "normal");
                
                doc.setTextColor(200, 0, 0); // Red
                // ✨ --- التصحيح الأول هنا: استخدام q.options بدلاً من optionLabels --- ✨
                const userAnswersText = q.userSelectedIndexes.map(i => q.options[i]).join(', ') || "No answer";
                doc.text(`- Your Answer: ${userAnswersText}`, margin + 5, y);
                y += 7;

                doc.setTextColor(34, 139, 34); // ForestGreen
                // ✨ --- التصحيح الثاني هنا: استخدام q.options بدلاً من optionLabels --- ✨
                const correctAnswersText = q.correctOptionIndexes.map(i => q.options[i]).join(', ');
                doc.text(`- Correct Answer: ${correctAnswersText}`, margin + 5, y);
                y += 7;
                
                doc.setTextColor(0, 0, 0); // Black
                if (q.explanation) {
                    doc.setFont("helvetica", "italic");
                    const explanationLines = doc.splitTextToSize(`Explanation: ${q.explanation}`, pageWidth - (margin * 2) - 5);
                    doc.text(explanationLines, margin + 5, y);
                    y += explanationLines.length * 5 + 5;
                }
                y += 5;
            });
        }

        const date = new Date().toISOString().slice(0, 10);
        doc.save(`Dentist-${quizTitle.replace(/\s/g, '-')}-${date}.pdf`);
        showNotification('PDF summary has been downloaded!', 'success');
    }

    async function startQuiz(quizId) {
        try {
            const token = localStorage.getItem('userToken');
            const res = await fetch(`http://localhost:5000/api/content/quiz/${quizId}`, { headers: { 'Authorization': `Bearer ${token}` } });
            if (!res.ok) throw new Error('Failed to load quiz data.');
            
            proQuiz = await res.json();
            if (!proQuiz || !proQuiz.questions || proQuiz.questions.length === 0) {
                showNotification('This quiz has no questions yet.', 'error');
                return;
            }

            proQuestionIndex = 0;
            proUserAnswers = new Array(proQuiz.questions.length).fill(null);
            quizStartTime = Date.now();
            quizLessonNameEl.textContent = proQuiz.title;

            renderQuestionList();
            renderCurrentQuestion();
            updateStats();
            
            showPage('#quiz-taking-page');
        } catch (error) {
            showNotification(error.message, 'error');
        }
    }

    function renderQuestionList() {
        quizQuestionNumbersContainer.innerHTML = '';
        proQuiz.questions.forEach((_, index) => {
            const numEl = document.createElement('div');
            numEl.className = 'question-number-pro';
            numEl.textContent = index + 1;
            numEl.dataset.index = index;
            if (index === proQuestionIndex) numEl.classList.add('current');
            
            const answer = proUserAnswers[index];
            if (answer !== null) {
                numEl.classList.add('answered', answer.isCorrect ? 'correct' : 'incorrect');
            }

            numEl.addEventListener('click', () => {
                proQuestionIndex = index;
                renderCurrentQuestion();
            });
            quizQuestionNumbersContainer.appendChild(numEl);
        });
    }

   // ✅ 1. النسخة المصححة لـ renderCurrentQuestion
// ✅ --- النسخة النهائية والمصححة لـ renderCurrentQuestion --- ✅
// ✅ --- النسخة النهائية "ثنائية اللغة" التي تفهم كلا المصدرين --- ✅
function renderCurrentQuestion() {
    // Stop any previous timers
    clearInterval(quizTimerInterval);
    
    // Get the current question from the active quiz data
    const question = proQuiz.questions[proQuestionIndex];

    if (!question) {
        console.error("Could not find question at index:", proQuestionIndex);
        quizQuestionTextEl_pro.textContent = "Error: Could not load question.";
        return;
    }

    // --- START OF THE FINAL FIX ---
    // This part makes the function "bilingual" and correctly handles the number 0
    const questionText = question.questionText || question.question;
    const correctIndexesRaw = question.correctOptionIndexes ?? question.correctIndex ?? question.answer ?? question.answerIndex;
    
    // Ensure the correct answers are always an array for consistency
    const correctIndexes = Array.isArray(correctIndexesRaw) ? correctIndexesRaw : [correctIndexesRaw];

    // Check for essential data before proceeding
    if (!question.options || !questionText || correctIndexesRaw === undefined) {
        console.error("Malformed or incomplete question object at index:", proQuestionIndex, question);
        quizQuestionTextEl_pro.textContent = "Error: Question data is incomplete. Please skip.";
        if (quizOptionsContainer_pro) quizOptionsContainer_pro.innerHTML = '';
        updateQuizControls();
        return;
    }
    // --- END OF THE FINAL FIX ---

    const isAnswered = proUserAnswers[proQuestionIndex] !== null;
    const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
    const isMultipleChoice = correctIndexes.length > 1;

    // Set up the UI elements
    quizOptionsContainer_pro.className = 'quiz-options-container-pro ' + (isMultipleChoice ? 'multiple-choice' : 'single-choice');
    quizProgressEl_pro.textContent = `Question ${proQuestionIndex + 1} of ${proQuiz.questions.length}`;
    quizQuestionTextEl_pro.textContent = questionText;
    quizOptionsContainer_pro.innerHTML = '';
    quizExplanationContainer.style.display = 'none';

    // Handle image display
    const parentArea = quizQuestionTextEl_pro.parentElement;
    const oldImageContainer = parentArea.querySelector('.quiz-image-display');
    if (oldImageContainer) { oldImageContainer.remove(); }

    if (question.imageUrl) {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'quiz-image-display';
        const serverUrl = 'http://localhost:5000';
        imgContainer.innerHTML = `<img src="${serverUrl}${question.imageUrl}" alt="Question Illustration">`;
        quizQuestionTextEl_pro.after(imgContainer);
    }

    // Render the options
    question.options.forEach((optionText, index) => {
        const optionEl = document.createElement('button');
        optionEl.className = 'quiz-option-pro';
        optionEl.innerHTML = `<div class="quiz-option-prefix"><span class="quiz-option-label">${optionLabels[index] || ''}</span></div><div class="quiz-option-text">${optionText}</div>`;
        optionEl.dataset.index = index;
        optionEl.disabled = isAnswered;

        if (!isAnswered) {
            if (isMultipleChoice) {
                optionEl.addEventListener('click', () => toggleOption(index));
            } else {
                optionEl.addEventListener('click', () => selectOption(index));
            }
        } else {
            const answerData = proUserAnswers[proQuestionIndex];
            
            if (correctIndexes.includes(index)) optionEl.classList.add('correct');
            
            if (answerData.selectedIndexes.includes(index)) {
                optionEl.classList.add('selected');
                if (!correctIndexes.includes(index)) optionEl.classList.add('incorrect');
            }
        }
        quizOptionsContainer_pro.appendChild(optionEl);
    });

    // Show explanation if the question is already answered
    if (isAnswered && (question.explanation || question.Explanation)) {
        quizExplanationText.textContent = question.explanation || question.Explanation;
        quizExplanationContainer.style.display = 'block';
    }

    // Handle the timer
    if (!isAnswered) {
        startTimer(question.timer || 90);
    } else {
        quizTimerDisplay.textContent = "Done!";
        quizTimerContainer.classList.remove('warning');
    }
    
    updateQuizControls();
    renderQuestionList();
}

    function startTimer(duration) {
        let timeLeft = duration;
        quizTimerContainer.classList.remove('warning');

        function updateDisplay() {
            const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
            const seconds = (timeLeft % 60).toString().padStart(2, '0');
            quizTimerDisplay.textContent = `${minutes}:${seconds}`;
            if (timeLeft <= 10) quizTimerContainer.classList.add('warning');
        }
        updateDisplay();
        quizTimerInterval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(quizTimerInterval);
                timeUp();
            }
        }, 1000);
    }

    function timeUp() {
        showNotification("Time's up!", 'error');
        proUserAnswers[proQuestionIndex] = { selectedIndexes: [], isCorrect: false };
        renderCurrentQuestion();
        updateStats();
    }

    // الكود المصحح
function selectOption(selectedIndex) {
    document.querySelectorAll('.quiz-option-pro').forEach(btn => btn.classList.remove('selected'));
    const selectedBtn = quizOptionsContainer_pro.querySelector(`[data-index="${selectedIndex}"]`); // <-- تم التصحيح هنا
    selectedBtn.classList.add('selected');
    quizActionBtn.disabled = false;
}

    function toggleOption(selectedIndex) {
        const selectedBtn = quizOptionsContainerEl_pro.querySelector(`[data-index="${selectedIndex}"]`);
        selectedBtn.classList.toggle('selected');
        quizActionBtn.disabled = !quizOptionsContainerEl_pro.querySelector('.selected');
    }

    // ✅ 2. النسخة المصححة لـ checkAnswer
// ▼▼▼ استبدل دالة checkAnswer القديمة بهذه النسخة النهائية ▼▼▼

function checkAnswer() {
    clearInterval(quizTimerInterval);
    const question = proQuiz.questions[proQuestionIndex];

    // --- التصحيح الرئيسي هنا ---
    // 1. استخدام اسم المتغير الصحيح (بدون El)
    const selectedElements = quizOptionsContainer_pro.querySelectorAll('.selected');
    
    // 2. استخدام نفس المنطق الذكي لجلب الإجابة الصحيحة (مع ??)
    const correctIndexesRaw = question.correctOptionIndexes ?? question.correctIndex ?? question.answer ?? question.answerIndex;
    const correctIndexes = (Array.isArray(correctIndexesRaw) ? correctIndexesRaw : [correctIndexesRaw]).sort((a, b) => a - b);
    // --- نهاية التصحيح ---

    const selectedIndexes = Array.from(selectedElements).map(el => parseInt(el.dataset.index)).sort((a, b) => a - b);
    
    let isCorrect = false;
    if (selectedElements.length > 0) {
        isCorrect = selectedIndexes.length === correctIndexes.length && selectedIndexes.every((val, i) => val === correctIndexes[i]);
    }
    
    proUserAnswers[proQuestionIndex] = { selectedIndexes: selectedIndexes, isCorrect: isCorrect };
    
    renderCurrentQuestion();
    updateStats();
}
    function updateStats() {
        const correctCount = proUserAnswers.filter(a => a && a.isCorrect).length;
        const incorrectCount = proUserAnswers.filter(a => a && a.isCorrect === false).length;
        const totalAnswered = correctCount + incorrectCount;
        const score = totalAnswered > 0 ? (correctCount / proQuiz.questions.length) * 20 : 0;
        quizCorrectCountEl.textContent = correctCount;
        quizIncorrectCountEl.textContent = incorrectCount;
        quizScoreEl.textContent = `${score.toFixed(2)} / 20`;
    }

    function updateQuizControls() {
        const isAnswered = proUserAnswers[proQuestionIndex] !== null;
        quizPrevBtn.disabled = proQuestionIndex === 0;
        quizActionBtn.style.display = isAnswered ? 'none' : 'block';
        quizActionBtn.disabled = true;
        quizNextBtn_pro.style.display = isAnswered ? 'block' : 'none';
        const isLastQuestion = proQuestionIndex === proQuiz.questions.length - 1;
        quizNextBtn_pro.textContent = isLastQuestion ? 'Finish' : 'Next';
    }

    // ===================================================================
    // --- [إضافة جديدة ومحصّنة] منطق لوحة الأداء (Dashboard) ---
    // ===================================================================
    async function fetchAndDisplayDashboardData() {
        const token = localStorage.getItem('userToken');
        if (!token) return;
    
        try {
            const response = await fetch('http://localhost:5000/api/results/dashboard', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch dashboard data.');
            }
    
            const data = await response.json();
            const performanceData = data.performanceBySubject || [];
            const recentQuizzesData = data.recentQuizzes || [];
    
            const userProfile = await fetchUserProfile();
    
            document.getElementById('dashboard-total-xp').textContent = userProfile.experiencePoints || 0;
            document.getElementById('dashboard-badge-count').textContent = (userProfile.badges && userProfile.badges.length) || 0;
            document.getElementById('dashboard-quiz-count').textContent = data.totalQuizzesTaken || 0;
    
            const recentList = document.getElementById('recent-quizzes-list');
            recentList.innerHTML = '';
            if (recentQuizzesData.length === 0) {
                recentList.innerHTML = '<li>No quizzes completed yet. Start a quiz to see your progress!</li>';
            } else {
                recentQuizzesData.forEach(result => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span class="quiz-title">${result.quiz ? result.quiz.title : 'A Quiz'}</span>
                        <span class="quiz-score">${result.score.toFixed(2)} / 20</span>
                    `;
                    recentList.appendChild(li);
                });
            }
            
            const chartCard = document.querySelector('.chart-card');
            chartCard.innerHTML = `<h3>Performance by Subject</h3>`; 
            if (performanceData.length === 0) {
                chartCard.innerHTML += `<p>No performance data yet. Complete some quizzes to see your stats!</p>`;
            } else {
                const subjectList = document.createElement('ul');
                subjectList.className = 'performance-list';

                performanceData.forEach(subject => {
                    if (!subject.subjectId) return;

                    const listItem = document.createElement('li');
                    const percentage = subject.averageScore ? (subject.averageScore / 20) * 100 : 0;

                    listItem.innerHTML = `
                        <div class="subject-info">
                            <span class="subject-name">${subject.subjectName}</span>
                            <span class="subject-score">${(subject.averageScore || 0).toFixed(1)}/20</span>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: ${percentage}%;"></div>
                        </div>
                        <button class="btn secondary-btn review-mistakes-btn" data-subject-id="${subject.subjectId}" data-subject-name="${subject.subjectName}">
                            <i class="fas fa-search"></i> Review Mistakes (${subject.mistakeCount || 0})
                        </button>
                    `;

                    subjectList.appendChild(listItem);
                });

                chartCard.appendChild(subjectList);

                chartCard.addEventListener('click', (event) => {
                    const reviewButton = event.target.closest('.review-mistakes-btn');
                    if (reviewButton) {
                        const subjectId = reviewButton.dataset.subjectId;
                        const subjectName = reviewButton.dataset.subjectName;
                        startMistakesQuiz(subjectId, subjectName);
                    }
                });
            }
    
        } catch (error) {
            console.error('Error rendering dashboard:', error);
            document.getElementById('recent-quizzes-list').innerHTML = '<li>Could not load recent activities.</li>';
        }
    }

    async function startMistakesQuiz(subjectId, subjectName) {
        showNotification(`Building your personalized review for ${subjectName}...`, 'info');
        const token = localStorage.getItem('userToken');

        try {
            const response = await fetch(`http://localhost:5000/api/results/mistakes/${subjectId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message);
            }

            const mistakesQuizData = await response.json();
            
            proQuiz = mistakesQuizData;
            
            proQuestionIndex = 0;
            proUserAnswers = new Array(proQuiz.questions.length).fill(null);
            quizStartTime = Date.now();
            
            quizSubjectNameEl.textContent = subjectName;
            quizLessonNameEl.textContent = "Mistakes Review";

            renderQuestionList();
            renderCurrentQuestion();
            updateStats();
            
            showPage('#quiz-taking-page');

        } catch (error) {
            console.error('Error starting mistakes quiz:', error);
            showNotification(error.message, 'error');
        }
    }
    
    // ===============================================
    // === [تعديل] دوال منطق مؤقت البومودورو   ===
    // ===============================================

    // دالة جديدة لإيقاف دورة البومودورو بالكامل وإعادة التعيين
    function stopAndResetPomodoroCycle() {
        clearInterval(pomodoroInterval);
        isPomodoroActive = false; // <-- أهم تعديل
        isPaused = true;
        sessionsCompleted = 0;
        document.title = originalDocTitle;
        switchView('settings');
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;
        timeDisplayEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        const progress = (totalSeconds - secondsLeft) / totalSeconds;
        const offset = circumference - progress * circumference;
        progressRingFg.style.strokeDashoffset = offset;

        document.title = `${timeDisplayEl.textContent} - ${sessionTitleEl.textContent}`;
    }

    function switchView(view) {
        if (view === 'timer') {
            pomodoroSettingsView.style.display = 'none';
            pomodoroTimerView.style.display = 'block';
        } else {
            pomodoroTimerView.style.display = 'none';
            pomodoroSettingsView.style.display = 'block';
        }
    }
    
    function switchSession() {
        clearInterval(pomodoroInterval);
        isPaused = true;
        pauseResumeBtn.innerHTML = '<i class="fas fa-play"></i>';
        alarmSound.play();

        if (currentSession === 'focus') {
            sessionsCompleted++;
            if (sessionsCompleted % settings.sessionsBeforeLongBreak === 0) {
                currentSession = 'longBreak';
                sessionTitleEl.textContent = 'Long Break';
                totalSeconds = settings.longBreakDuration * 60;
            } else {
                currentSession = 'shortBreak';
                sessionTitleEl.textContent = 'Short Break';
                totalSeconds = settings.shortBreakDuration * 60;
            }
        } else {
            currentSession = 'focus';
            sessionTitleEl.textContent = 'Focus';
            totalSeconds = settings.focusDuration * 60;
        }
        
        secondsLeft = totalSeconds;
        sessionCounterEl.textContent = `Session ${sessionsCompleted + 1} of ${settings.sessionsBeforeLongBreak}`;
        updateTimerDisplay();
        showNotification(`${sessionTitleEl.textContent} session has started!`, 'info');
    }

    function startTimer() {
        if (secondsLeft <= 0) return;
        isPaused = false;
        pauseResumeBtn.innerHTML = '<i class="fas fa-pause"></i>';

        pomodoroInterval = setInterval(() => {
            secondsLeft--;
            updateTimerDisplay();
            if (secondsLeft <= 0) {
                switchSession();
            }
        }, 1000);
    }
    
    function pauseTimer() {
        isPaused = true;
        clearInterval(pomodoroInterval);
        pauseResumeBtn.innerHTML = '<i class="fas fa-play"></i>';
    }

    function resetTimer() {
        pauseTimer();
        secondsLeft = totalSeconds;
        updateTimerDisplay();
    }
    
    // ===================================================================
    // --- [إضافة جديدة] دوال قسم بطاقات المراجعة       ===
    // ===================================================
    /**
     * @description تجلب كل مجموعات البطاقات من الـ API وتعرضها
     */
    async function fetchAndDisplayCollections() {
        const token = localStorage.getItem('userToken');
        const contentDiv = document.getElementById('flashcards-content');
        const viewerDiv = document.getElementById('flashcard-viewer');

        // التأكد من إعادة الواجهة لحالتها الأولية عند الدخول للصفحة
        contentDiv.style.display = 'grid';
        viewerDiv.classList.add('flashcard-viewer-hidden');
        contentDiv.innerHTML = '<p>Loading your collections...</p>';

        try {
            const response = await fetch('http://localhost:5000/api/flashcards', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.message || 'Could not fetch collections.');
            }

            allFlashcardCollections = await response.json();
            contentDiv.innerHTML = '';

            if (allFlashcardCollections.length === 0) {
                contentDiv.innerHTML = '<p>You haven\'t saved any flashcards yet. Start by saving important questions from your quiz results!</p>';
                return;
            }

            allFlashcardCollections.forEach(collection => {
                const card = document.createElement('div');
                card.className = 'collection-card';
                card.innerHTML = `
                    <h3>${collection.subjectName}</h3>
                    <p>${collection.cards.length} cards</p>
                `;
                card.onclick = () => showFlashcardViewer(collection);
                contentDiv.appendChild(card);
            });

        } catch (error) {
            contentDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    }
    /**
     * @description تعرض واجهة عارض البطاقات لمجموعة محددة
     */
    function showFlashcardViewer(collection) {
        currentCollection = collection.cards;
        currentCardIndex = 0;

        document.getElementById('flashcards-content').style.display = 'none';
        document.getElementById('flashcard-viewer').classList.remove('flashcard-viewer-hidden');
        document.getElementById('flashcard-viewer-title').textContent = collection.subjectName;

        displayCurrentFlashcard();
    }
    
    /**
     * @description تعرض البطاقة الحالية في العارض
     */
    function displayCurrentFlashcard() {
        if (!currentCollection || currentCollection.length === 0) return;

        const card = currentCollection[currentCardIndex];
        if (!card) return; // حماية إضافية

        // ✨ التصحيح هنا: استخدام card.front و card.back
        document.getElementById('flashcard-question').textContent = card.front;
        document.getElementById('flashcard-answer').textContent = card.back;

        // بقية الدالة تبقى كما هي
        document.getElementById('flashcard-progress').textContent = `${currentCardIndex + 1} / ${currentCollection.length}`;
        
        const flashcard = document.querySelector('.flashcard');
        if (flashcard) {
            flashcard.classList.remove('is-flipped');
        }

        document.getElementById('prev-flashcard-btn').disabled = currentCardIndex === 0;
        document.getElementById('next-flashcard-btn').disabled = currentCardIndex === currentCollection.length - 1;
    }

    // ===================================================================
    // --- معالجات الأحداث (Event Handlers) ---
    // ===================================================================
    // --- منطق حفظ الكويز ---
const saveQuizBtn = document.getElementById('save-quiz-btn');
if (saveQuizBtn) {
    saveQuizBtn.addEventListener('click', async () => {
        if (!proQuiz || !proQuiz.questions) {
            showNotification('No quiz data to save.', 'error');
            return;
        }

        saveQuizBtn.disabled = true;
        saveQuizBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
        const token = localStorage.getItem('userToken');

        try {
            const response = await fetch('http://localhost:5000/api/saved-quizzes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: proQuiz.title,
                    subjectName: quizSubjectNameEl.textContent,
                    questions: proQuiz.questions
                })
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message || 'Failed to save.');
            }
            showNotification('Quiz saved successfully!', 'success');
        } catch (error) {
            showNotification(error.message, 'error');
        } finally {
            saveQuizBtn.disabled = false;
            saveQuizBtn.innerHTML = '<i class="fas fa-save"></i> Save this Quiz';
        }
    });
}
    // --- منطق الترجمة ---
const quizMainArea = document.querySelector('.quiz-main-area-pro');
if (quizMainArea) {
    quizMainArea.addEventListener('click', async (e) => {
        const translateBtn = e.target.closest('.btn-translate');
        if (!translateBtn) return;

        const targetLanguage = translateBtn.dataset.lang;
        if (!proQuiz || !proQuiz.questions) {
            showNotification('No quiz to translate.', 'error');
            return;
        }

        showNotification(`Translating to ${targetLanguage}...`, 'info');
        const token = localStorage.getItem('userToken');

        try {
            // نرسل الأسئلة فقط للترجمة
            const response = await fetch('http://localhost:5000/api/ai/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    content: proQuiz.questions,
                    targetLanguage: targetLanguage
                })
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message || 'Translation failed.');
            }

            const translatedQuestions = await response.json();
            
            // تحديث الكويز بالأسئلة المترجمة وإعادة عرضه
            proQuiz.questions = translatedQuestions;
            renderCurrentQuestion();
            showNotification('Translation successful!', 'success');

        } catch (error) {
            showNotification(error.message, 'error');
        }
    });
}
    const flashcard = document.querySelector('.flashcard');
    if (flashcard) {
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('is-flipped');
        });
    }
    const backToCollectionsBtn = document.getElementById('back-to-collections-btn');
    if (backToCollectionsBtn) {
        backToCollectionsBtn.addEventListener('click', () => {
            document.getElementById('flashcards-content').style.display = 'grid';
            document.getElementById('flashcard-viewer').classList.add('flashcard-viewer-hidden');
        });
    }
    const nextFlashcardBtn = document.getElementById('next-flashcard-btn');
    if (nextFlashcardBtn) {
        nextFlashcardBtn.addEventListener('click', () => {
            if (currentCardIndex < currentCollection.length - 1) {
                currentCardIndex++;
                displayCurrentFlashcard();
            }
        });
    }
    const prevFlashcardBtn = document.getElementById('prev-flashcard-btn');
    if (prevFlashcardBtn) {
        prevFlashcardBtn.addEventListener('click', () => {
            if (currentCardIndex > 0) {
                currentCardIndex--;
                displayCurrentFlashcard();
            }
        });
    }

    if(themeToggleBtn) themeToggleBtn.addEventListener('click', () => { 
        body.classList.toggle('dark-mode'); 
        const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode'; 
        localStorage.setItem('theme', currentTheme); 
        updateThemeToggleIcon(currentTheme); 
    });
    
    navLinks.forEach(link => { 
        link.addEventListener('click', function(e) { 
            e.preventDefault(); 
            const targetId = this.getAttribute('href');

            if (targetId === '#dashboard-page') {
                fetchAndDisplayDashboardData();
            } else if (targetId === '#flashcards-page') {
                fetchAndDisplayCollections();
            }

            const pageType = this.dataset.pageType;
            if (pageType) {
                currentContentType = pageType;
                navLinks.forEach(l => l.classList.remove('active-link'));
                this.classList.add('active-link');
            }

            if (targetId === '#home-page') {
                showPage('#home-page');
                return;
            }
            if (pageType) {
                if (!isLoggedIn) { 
                    window.location.href = 'login.html'; 
                } else if (isGuest) { 
                    showNotification('This feature is for registered and activated users only.', 'error'); 
                } else if (!isYearChosen) { 
                    showPage('#year-selection-page'); 
                } else if (!isActivated) { 
                    showPage('#activation-page'); 
                } else {
                    showPage('#subjects-page');
                }
            } else {
                showPage(targetId);
            }
        }); 
    });
    
    function handleStartAndExplore() { 
        if (!isLoggedIn) { 
            window.location.href = 'login.html'; 
        } else if (isGuest) { 
            showNotification('This feature is for registered and activated users only.', 'error'); 
        } else if (!isYearChosen) { 
            showPage('#year-selection-page'); 
        } else if (!isActivated) { 
            showPage('#activation-page'); 
        } else { 
            if (!currentContentType) {
                currentContentType = 'lessons'; 
                const lessonsLink = document.querySelector('a[data-page-type="lessons"]');
                if (lessonsLink) lessonsLink.classList.add('active-link');
            }
            showPage('#subjects-page');
        }
    }
    
    if(startLearningBtn) startLearningBtn.addEventListener('click', handleStartAndExplore);
    if(exploreContentBtn) exploreContentBtn.addEventListener('click', handleStartAndExplore);
    
    if (yearSelectBtns) yearSelectBtns.forEach(btn => {
        btn.addEventListener('click', async function() {
            const year = this.dataset.year;
            const token = localStorage.getItem('userToken');
            if (!token) {
                showNotification('Authentication error. Please log in again.', 'error');
                logoutUser();
                return;
            }
            try {
                const response = await fetch('http://localhost:5000/api/user/year', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ year: year })
                });
                if (response.ok) {
                    const data = await response.json();
                    selectedYear = data.user.studyYear;
                    isYearChosen = true;
                    localStorage.setItem('isYearChosen', 'true');
                    localStorage.setItem('selectedYear', selectedYear);
                    showNotification(`Year ${selectedYear} has been saved!`, 'success');
                    updateUI();
                } else {
                    const errorData = await response.json();
                    showNotification(errorData.message || 'Failed to save selection.', 'error');
                }
            } catch (error) {
                console.error('Error updating year:', error);
                showNotification('Connection error. Could not save your selection.', 'error');
            }
        });
    });
    
    if (confirmActivationBtn) {
        confirmActivationBtn.addEventListener('click', async () => {
            const token = localStorage.getItem('userToken');
            if (!token) {
                showNotification('Authentication error. Please log in again.', 'error');
                logoutUser();
                return;
            }
            confirmActivationBtn.disabled = true;
            confirmActivationBtn.textContent = 'Activating...';
            try {
                const response = await fetch('http://localhost:5000/api/user/activate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    isActivated = true;
                    localStorage.setItem('isActivated', 'true');
                    showNotification(data.message, 'success');
                    if (activationStatusMessage) {
                        activationStatusMessage.textContent = 'Redirecting to your dashboard...';
                        activationStatusMessage.style.color = 'green';
                    }
                    setTimeout(() => {
                        updateUI();
                        if (activationStatusMessage) activationStatusMessage.textContent = '';
                    }, 1500);
                } else {
                    const errorData = await response.json();
                    showNotification(errorData.message || 'Activation failed.', 'error');
                    if (activationStatusMessage) {
                        activationStatusMessage.textContent = 'Activation failed. Please try again.';
                        activationStatusMessage.style.color = 'red';
                    }
                }
            } catch (error) {
                console.error('Error during activation:', error);
                showNotification('Connection error during activation.', 'error');
            } finally {
                confirmActivationBtn.disabled = false;
                confirmActivationBtn.textContent = 'Confirm Activation (Simulated)';
            }
        });
    }
    
    if (backToHomeBtn) backToHomeBtn.addEventListener('click', () => showPage('#home-page'));
    if (backToYearSelectBtn) backToYearSelectBtn.addEventListener('click', () => { 
        isYearChosen = false; 
        localStorage.removeItem('isYearChosen'); 
        localStorage.removeItem('selectedYear'); 
        updateUI(); 
    });
    if (backToSubjectsBtn) backToSubjectsBtn.addEventListener('click', () => showPage('#subjects-page'));
    if (backToSubjectsFromLessonsBtn) backToSubjectsFromLessonsBtn.addEventListener('click', () => showPage('#subjects-page'));

    if (tempYearSwitcher) { 
        tempYearSwitcher.addEventListener('click', () => { 
            const totalYears = 5;
            let currentYearNum = parseInt(selectedYear, 10) || 0;
            let nextYearNum = (currentYearNum % totalYears) + 1;
            selectedYear = nextYearNum.toString();
            
            localStorage.setItem('selectedYear', selectedYear); 
            showNotification(`Switched to Year ${selectedYear}`, 'info'); 
            if (document.querySelector('#subjects-page.active')) { 
                animateCarouselAssembly(selectedYear);
            } 
        }); 
    }

    if(prevButton) {
        prevButton.addEventListener('click', () => {
            if (numItems > 0) {
                currentIndex = (currentIndex - 1 + numItems) % numItems;
                rotateCarousel();
            }
        });
    }

    if(nextButton) {
        nextButton.addEventListener('click', () => {
            if (numItems > 0) {
                currentIndex = (currentIndex + 1) % numItems;
                rotateCarousel();
            }
        });
    }

    if(carouselScene) {
        carouselScene.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (numItems > 0) {
                if (e.deltaY > 0) currentIndex = (currentIndex + 1) % numItems;
                else currentIndex = (currentIndex - 1 + numItems) % numItems;
                rotateCarousel();
            }
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (document.querySelector('#subjects-page.active')) {
             if (numItems > 0) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    currentIndex = (currentIndex + 1) % numItems;
                    rotateCarousel();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    currentIndex = (currentIndex - 1 + numItems) % numItems;
                    rotateCarousel();
                }
             }
        }
    });

    if(aiChatBtn) aiChatBtn.addEventListener('click', () => { if (aiChatModal) aiChatModal.classList.add('active'); if (userChatInput) userChatInput.focus(); });
    if(closeChatBtn) closeChatBtn.addEventListener('click', () => { if (aiChatModal) aiChatModal.classList.remove('active'); });
    if(aiChatModal) aiChatModal.addEventListener('click', (e) => { if (e.target === aiChatModal) aiChatModal.classList.remove('active'); });
    if(document) document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && aiChatModal.classList.contains('active')) aiChatModal.classList.remove('active'); });
    
    if(sendChatButton) sendChatButton.addEventListener('click', sendChatMessage);
    if(userChatInput) userChatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') { e.preventDefault(); sendChatMessage(); } });
    
    if(uploadPdfBtn) uploadPdfBtn.addEventListener('click', () => pdfFileInput.click());
    if(pdfFileInput) pdfFileInput.addEventListener('change', async (event) => { 
        const file = event.target.files[0]; 
        if (!file) return;
        addMessageToChat(`Processing "${file.name}"...`, 'user-message'); 
        try { 
            const extractedText = await extractTextFromPdf(file);
            showNotification('PDF processed successfully!', 'success');
            if (extractedText.trim().length === 0) {
                showNotification('PDF seems to be image-based. No text could be extracted.', 'error');
                return;
            }
            const userQuestion = prompt("PDF processed. What's your question about it?", "Summarize this document");
            if (userQuestion) { 
                const userFriendlyQuestion = `(About PDF: ${file.name}) ${userQuestion}`;
                addMessageToChat(userFriendlyQuestion, 'user-message');
                const fullPromptForApi = `Based on the following document text, please answer the user's request.\n\nUser Request: "${userQuestion}"\n\n--- Document Text ---\n\n${extractedText.substring(0, 15000)}`;
                const apiHistory = [...chatHistory, { role: "user", content: fullPromptForApi }];
                sendApiRequest(apiHistory, true); 
            }
        } catch (err) { 
            showNotification(err.toString(), 'error'); 
        } finally { 
            pdfFileInput.value = ''; 
        } 
    });

    if(uploadImageBtn) uploadImageBtn.addEventListener('click', () => imageFileInput.click());
    if(imageFileInput) imageFileInput.addEventListener('change', async (event) => { 
        const file = event.target.files[0]; 
        if (!file) return; 
        const q = prompt("Image selected. What should I do with it? (e.g., 'Describe this image')", "Describe this image in detail."); 
        if (q) { await sendImageAndPromptToGemini(q, file); } 
        imageFileInput.value = ''; 
    });
    
    if(uploadAudioBtn) uploadAudioBtn.addEventListener('click', () => audioFileInput.click());
    if(audioFileInput) audioFileInput.addEventListener('change', async (event) => { 
        const file = event.target.files[0]; 
        if (!file) return; 
        const q = prompt("Audio file selected. What should I do with it? (e.g., 'Transcribe this audio', 'Summarize this lecture')", "Transcribe this audio for me."); 
        if (q) { await sendAudioAndPromptToGemini(q, file); } 
        audioFileInput.value = ''; 
    });

    if (chatPlusBtn && uploadOptions) {
        chatPlusBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            uploadOptions.classList.toggle('show');
            chatPlusBtn.classList.toggle('rotated');
        });
        document.addEventListener('click', () => {
            if (uploadOptions.classList.contains('show')) {
                uploadOptions.classList.remove('show');
                chatPlusBtn.classList.remove('rotated');
            }
        });
        uploadOptions.addEventListener('click', (e) => e.stopPropagation());
    }

    let isDragging = false, isResizing = false;
    let offsetX, offsetY, initialWidth, initialHeight, initialMouseX, initialMouseY;

    if (chatHeader) {
        chatHeader.addEventListener('mousedown', (e) => {
            if (e.target.closest('.close-chat-btn') || e.target.closest('#chat-controls button')) return;
            isDragging = true;
            offsetX = e.clientX - aiChatBox.offsetLeft;
            offsetY = e.clientY - aiChatBox.offsetTop;
            aiChatBox.classList.add('is-dragging');
        });
    }

    if (resizeHandle) {
        resizeHandle.addEventListener('mousedown', (e) => {
            e.preventDefault(); 
            isResizing = true;
            initialWidth = aiChatBox.offsetWidth;
            initialHeight = aiChatBox.offsetHeight;
            initialMouseX = e.clientX;
            initialMouseY = e.clientY;
        });
    }

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;
            const maxLeft = window.innerWidth - aiChatBox.offsetWidth;
            const maxTop = window.innerHeight - aiChatBox.offsetHeight;
            aiChatBox.style.left = `${Math.max(0, Math.min(newLeft, maxLeft))}px`;
            aiChatBox.style.top = `${Math.max(0, Math.min(newTop, maxTop))}px`;
            aiChatBox.style.transform = 'none'; 
        }
        if (isResizing) {
            e.preventDefault();
            const dx = e.clientX - initialMouseX;
            const dy = e.clientY - initialMouseY;
            aiChatBox.style.width = `${initialWidth + dx}px`;
            aiChatBox.style.height = `${initialHeight + dy}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if(isDragging) {
            isDragging = false;
            aiChatBox.classList.remove('is-dragging');
        }
        if(isResizing) {
            isResizing = false;
        }
    });

    // --- (تعديل) معالجات أحداث البومودورو ---
    if (pomodoroToggleBtn) {
        pomodoroToggleBtn.addEventListener('click', () => {
            // إذا كان البومودورو يعمل، اظهر المؤقت. وإلا، اظهر الإعدادات
            if (isPomodoroActive) {
                switchView('timer');
            } else {
                switchView('settings');
            }
            pomodoroModal.classList.add('active');
        });
    }

    if (pomodoroModal) {
        pomodoroModal.addEventListener('click', (e) => {
            if (e.target === pomodoroModal) {
                pomodoroModal.classList.remove('active');
                document.title = originalDocTitle; // فقط أغلق النافذة وأعد العنوان
            }
        });
    }

    closePomodoroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            pomodoroModal.classList.remove('active');
            document.title = originalDocTitle; // فقط أغلق النافذة وأعد العنوان
        });
    });

    if (startPomodoroBtn) {
        startPomodoroBtn.addEventListener('click', () => {
            settings = {
                focusDuration: parseInt(focusDurationInput.value),
                shortBreakDuration: parseInt(shortBreakDurationInput.value),
                longBreakDuration: parseInt(longBreakDurationInput.value),
                sessionsBeforeLongBreak: parseInt(sessionsInput.value)
            };
            isPomodoroActive = true; 
            
            currentSession = 'focus';
            sessionsCompleted = 0;
            totalSeconds = settings.focusDuration * 60;
            secondsLeft = totalSeconds;
            
            sessionTitleEl.textContent = 'Focus';
            sessionCounterEl.textContent = `Session 1 of ${settings.sessionsBeforeLongBreak}`;
            updateTimerDisplay();
            switchView('timer');
        });
    }

    if (pauseResumeBtn) {
        pauseResumeBtn.addEventListener('click', () => {
            if (isPaused) {
                startTimer();
            } else {
                pauseTimer();
            }
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to stop and reset the entire Pomodoro cycle?')) {
                stopAndResetPomodoroCycle();
            }
        });
    }
    
    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to skip to the next session?')) {
                switchSession();
            }
        });
    }
    quizActionBtn.addEventListener('click', checkAnswer);
    quizPrevBtn.addEventListener('click', () => {
        if (proQuestionIndex > 0) {
            proQuestionIndex--;
            renderCurrentQuestion();
        }
    });
    quizNextBtn_pro.addEventListener('click', () => {
        if (proUserAnswers[proQuestionIndex] === null) {
            showNotification('Please select an answer before proceeding.', 'info');
            return;
        }
        if (proQuestionIndex === proQuiz.questions.length - 1) {
            submitQuizResults();
        } else {
            proQuestionIndex++;
            renderCurrentQuestion();
        }
    });

    // --- AI HUB IMPLEMENTATION ---
    
    // 1. Get references to all new elements
    const aiHubBtn = document.querySelector('.ai-chat-btn');
    //const aiChatModal = document.getElementById('aiChatModal'); // Your existing chat modal
    
    const aiHubOverlay = document.getElementById('aiHubModalOverlay');
    const closeHubBtn = document.getElementById('closeHubBtn');
    const aiOptionCards = document.querySelectorAll('.ai-option-card');

    const aiProcessorOverlay = document.getElementById('aiProcessorModalOverlay');
    const closeProcessorBtn = document.getElementById('closeProcessorBtn');
    const aiFileForm = document.getElementById('aiFileForm');
    const aiPdfInput = document.getElementById('aiPdfInput');
    const processorTitle = document.getElementById('processorTitle');
    const aiLoadingIndicator = document.getElementById('aiLoadingIndicator');
    const aiProcessBtn = document.getElementById('aiProcessBtn');

    let currentAiTask = ''; // To know what to do with the uploaded file

    // 2. Event Listeners
    aiHubBtn.addEventListener('click', () => {
        aiHubOverlay.style.display = 'flex';
    });

    closeHubBtn.addEventListener('click', () => {
        aiHubOverlay.style.display = 'none';
    });

    closeProcessorBtn.addEventListener('click', () => {
        aiProcessorOverlay.style.display = 'none';
    });

    aiOptionCards.forEach(card => {
        card.addEventListener('click', () => {
            currentAiTask = card.dataset.task;
            aiHubOverlay.style.display = 'none'; // Close the hub

            if (currentAiTask === 'chat') {
                aiChatModal.classList.add('active'); // Open existing chat
            } else {
                // Prepare and open the file processor modal
                processorTitle.textContent = `Generate ${currentAiTask}`;
                aiFileForm.style.display = 'flex';
                aiLoadingIndicator.style.display = 'none';
                aiProcessBtn.disabled = false;
                aiFileForm.reset();
                aiProcessorOverlay.style.display = 'flex';
            }
        });
    });

    // 3. Handle the file submission
    aiFileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const file = aiPdfInput.files[0];
    if (!file) {
        showNotification('Please select a PDF file.', 'error');
        return;
    }

    // إظهار حالة التحميل
    aiFileForm.style.display = 'none';
    aiLoadingIndicator.style.display = 'block';
    aiProcessBtn.disabled = true;

    const formData = new FormData();
    formData.append('pdfFile', file);

    const token = localStorage.getItem('userToken');
    let endpoint = '';
    
    // تحديد المسار الصحيح بناءً على المهمة المختارة
    switch (currentAiTask) {
        case 'quiz':
            endpoint = '/api/ai/generate-quiz';
            break;
        case 'flashcards':
            endpoint = '/api/ai/generate-flashcards';
            break;
        case 'summary':
            endpoint = '/api/ai/generate-summary';
            break;
        default:
            showNotification('Unknown task.', 'error');
            aiProcessorOverlay.style.display = 'none';
            return;
    }

    try {
        const response = await fetch(`http://localhost:5000${endpoint}`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to process the request.');
        }

        // إخفاء نافذة المعالجة عند النجاح
        aiProcessorOverlay.style.display = 'none';

        if (currentAiTask === 'summary') {
            // معالجة تحميل ملف الملخص PDF
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `summary_${Date.now()}.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            showNotification('Summary PDF has been downloaded!', 'success');
        } else {
            // معالجة بيانات JSON للكويز أو الفلاش كاردز
            const data = await response.json();
            showNotification('Generation successful!', 'success');
            console.log(`Received data for ${currentAiTask}:`, data);

            // المنطق الصحيح لتوجيه البيانات إلى الدالة المناسبة
            if (currentAiTask === 'quiz') {
                startAIGeneratedQuiz(data);
            } else if (currentAiTask === 'flashcards') {
                displayGeneratedFlashcards(data);
            }
        }

    } catch (error) {
        showNotification(error.message, 'error');
        // إعادة تعيين نافذة المعالجة عند حدوث خطأ
        aiProcessorOverlay.style.display = 'none';
    }
});
    
    // ===================================================================
    // --- الترتيب النهائي والصحيح لتهيئة التطبيق ---
    // ===================================================================
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) { 
        body.classList.add(savedTheme); 
        updateThemeToggleIcon(savedTheme); 
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { 
        body.classList.add('dark-mode'); 
        updateThemeToggleIcon('dark-mode'); 
    } else { 
        updateThemeToggleIcon('light-mode'); 
    }
    // --- ✨ [إضافة جديدة] منطق الأزرار والبطاقات الجديدة ✨ ---

// 1. منطق زر "Explore Content" للتمرير السلس
// ✨ [تعديل] تفعيل زر Explore Content لفتح النافذة المنبثقة
if (exploreContentBtnNew) {
    exploreContentBtnNew.addEventListener('click', (e) => {
        e.preventDefault(); // منع السلوك الافتراضي للرابط
        if (exploreModal) {
            exploreModal.classList.add('active');
        }
    });
}
// ✨ [إضافة جديدة] منطق إغلاق نافذة Explore
if (closeExploreModalBtn) {
    closeExploreModalBtn.addEventListener('click', () => {
        if (exploreModal) exploreModal.classList.remove('active');
    });
}

if (exploreModal) {
    exploreModal.addEventListener('click', (e) => {
        // الإغلاق عند النقر على الخلفية فقط
        if (e.target === exploreModal) {
            exploreModal.classList.remove('active');
        }
    });
}

// 2. منطق البطاقات السفلية
if (videoLessonsCard) {
    videoLessonsCard.addEventListener('click', () => {
        showNotification('Coming Soon! Video explanations will be added very soon.', 'info');
    });
}

if (summariesCard) {
    summariesCard.addEventListener('click', () => {
        // محاكاة الضغط على رابط الملخصات في الهيدر
        const summariesLink = document.querySelector('a[data-page-type="summaries"]');
        if (summariesLink) {
            summariesLink.click();
            showNotification('Showing all summaries.', 'info');
        }
    });
}

if (quizzesCard) {
    quizzesCard.addEventListener('click', () => {
        // محاكاة الضغط على رابط الكويزات في الهيدر
        const quizzesLink = document.querySelector('a[data-page-type="quizzes"]');
        if (quizzesLink) {
            quizzesLink.click();
            showNotification('Showing all quizzes.', 'info');
        }
    });
}

// 3. منطق بطاقة "Articles" والنافذة المنبثقة
if (articlesCard) {
    articlesCard.addEventListener('click', () => {
        if (articlesModal) articlesModal.classList.add('active');
    });
}

if (closeArticlesModalBtn) {
    closeArticlesModalBtn.addEventListener('click', () => {
        if (articlesModal) articlesModal.classList.remove('active');
    });
}

if (articlesModal) {
    articlesModal.addEventListener('click', (e) => {
        if (e.target === articlesModal) {
            articlesModal.classList.remove('active');
        }
    });
}
    checkForAuthToken();
    
    triggerScrollReveal(document.querySelector('.page-section.active'));

});
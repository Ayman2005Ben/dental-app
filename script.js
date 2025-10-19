// === [إضافة جديدة] دالة مساعدة للتعامل مع طلبات الخادم (API) ===
/**
 * @description دالة مركزية لإرسال الطلبات إلى الخادم مع إضافة التوكن تلقائياً
 * @param {string} endpoint - مسار الطلب (مثال: '/api/user/profile')
 * @param {object} options - إعدادات الطلب (method, headers, body, etc.)
 * @returns {Promise<any>} - البيانات المستلمة من الخادم بصيغة JSON
 */
async function fetchApi(endpoint, options = {}) {
    const token = localStorage.getItem('userToken');
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`https://dental-app-he1p.onrender.com${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }
    
    // بعض الطلبات قد لا ترجع بيانات (مثل DELETE)، لذلك نتحقق أولاً
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json();
    }
}


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
    const res = await fetch(`https://dental-app-he1p.onrender.com/api/content/subjects/${year}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to load subjects');
    return res.json();
}

async function fetchLessonsBySubject(subjectId) {
    const token = localStorage.getItem('userToken');
    const res = await fetch(`https://dental-app-he1p.onrender.com/api/content/lessons/${subjectId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to load lessons');
    return res.json();
}

async function fetchSummariesBySubject(subjectId) {
    const token = localStorage.getItem('userToken');
    const res = await fetch(`https://dental-app-he1p.onrender.com/api/content/summaries/${subjectId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to load summaries');
    return res.json();
}
// === end Content API helpers ===

document.addEventListener('DOMContentLoaded', function () {

    // ✅ تصحيح: توحيد تنسيق الأسئلة
    function normalizeIncorrectQuestions(questions) {
        return (questions || []).map(function (q, i) {
            return {
                questionText: q && (q.questionText || q.question) || "Question " + (i + 1),
                options: (q && q.options) || [],
                correctOptionIndexes: (q && q.correctOptionIndexes) || [],
                userSelectedIndexes: (q && q.userSelectedIndexes) || [],
                explanation: (q && q.explanation) || ''
            };
        });
    }

    // ✅ إضافة جديدة: تفعيل قائمة الموبايل مع حماية من الأخطاء
    // هذا هو الكود الصحيح والوحيد لزر البرغر
    var mobileToggle = document.querySelector('.mobile-nav-toggle');
    var mainNav = document.querySelector('.main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');

            // تبديل الأيقونة بين ☰ و ✖ (FontAwesome classes)
            var icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // ➤ إغلاق القائمة تلقائياً عند الضغط على أي رابط داخل الـ nav (مفيد للهواتف)
        var navLinks = mainNav.querySelectorAll('a');
        if (navLinks && navLinks.length) {
            navLinks.forEach(function (link) {
                link.addEventListener('click', function () {
                    // إذا كانت القائمة مفتوحة نغلقها
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        var icon = mobileToggle.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                });
            });
        }
    }

});

    
    // --- 1. تعريف متغيرات الحالة العامة للتطبيق ---
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    let isGuest = false;
    let isYearChosen = false;
    let selectedYear = null;
    let isActivated = false;
    let currentContentType = null;
// ✅ إضافة جديدة: أضف هذا المتغير لتخزين سياق الإنشاء
    let currentAiGenerationContext = { subjectId: null, subjectName: null };
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
            const response = await fetch('https://dental-app-he1p.onrender.com/api/user/profile', {
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

    let markmapInstance = null;

    // ✅ 1. استبدل دالة displayMindMap القديمة بهذه النسخة المطورة
// في ملف script.js

// ✅ استبدل دالة displayMindMap القديمة بهذه النسخة الجديدة
/**
 * تقوم هذه الدالة بحفظ بيانات الخريطة وفتحها في نافذة جديدة
 * @param {object} mindmapData - كائن يحتوي على مفتاح markdown
 */
function displayMindMap(mindmapData) {
    if (!mindmapData || !mindmapData.markdown) {
        showNotification('Received empty data for mind map.', 'error');
        return;
    }
    
    // 1. حفظ نص الماركداون في الذاكرة المؤقتة للمتصفح
    localStorage.setItem('mindmapMarkdown', mindmapData.markdown);
    
    // 2. فتح ملف العارض في نافذة منبثقة جديدة
    const width = 1200;
    const height = 800;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    
    window.open(
        'mindmap-viewer.html', 
        'MindMapViewer', 
        `width=${width},height=${height},top=${top},left=${left}`
    );
}
    
    // ✅ استبدل دالة displayGeneratedFlashcards القديمة بهذه النسخة
function displayGeneratedFlashcards(flashcardData) {
    currentCollection = flashcardData;
    currentCardIndex = 0;

    if (!currentCollection || currentCollection.length === 0) {
        showNotification("The AI didn't generate any flashcards.", "error");
        return;
    }
    
    // --- التحسين الأمني ---
    const ratingControls = document.getElementById('ai-flashcard-rating-controls');
    const viewerControls = document.getElementById('flashcard-viewer-controls');

    if (ratingControls) ratingControls.style.display = 'flex';
    if (viewerControls) viewerControls.style.display = 'none';
    // --- نهاية التحسين ---

    document.getElementById('flashcards-content').style.display = 'none';
    document.getElementById('flashcard-viewer').classList.remove('flashcard-viewer-hidden');
    document.getElementById('flashcard-viewer-title').textContent = "AI Generated Flashcards (Review & Save)";

    displayCurrentFlashcard();
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
            { name: "ANATOMIE HUMAINE", key: "anatomy-y2", icon: "ANATOMY2.png" },
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
    // --- ✅ إضافة جديدة: عناصر القائمة المتجاوبة ---
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
// --- نهاية الإضافة ---
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
            const res = await fetch('https://dental-app-he1p.onrender.com/api/user/widget-data', {
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
            
            if (targetId === '#dashboard-page') {
                fetchAndDisplayDashboardData();
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
            const response = await fetch('https://dental-app-he1p.onrender.com/api/ai/ask', {
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
            const response = await fetch('https://dental-app-he1p.onrender.com/api/gemini/image', {
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
            const response = await fetch('https://dental-app-he1p.onrender.com/api/gemini/audio', {
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
                    showLessonListForSubject(item.dataset.subjectKey); 
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
                    const res = await fetch(`https://dental-app-he1p.onrender.com/api/content/quizzes/subject/${currentSubject._id}`, { 
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

// ✅ --- النسخة الجديدة والمحسنة ---
// الصق هذا الكود الجديد بالكامل

// 1. الدالة الجديدة لعرض قائمة الدروس
async function showLessonListForSubject(subjectKey) {
    const subjectData = (subjectsDatabase[selectedYear] || []).find(s => s.key === subjectKey);
    if (!subjectData) return;

    const contentTitle = document.getElementById('content-title');
    const contentListContainer = document.getElementById('content-list');

    contentTitle.textContent = `${subjectData.name} Lessons`;
    contentListContainer.innerHTML = '<p>Loading lessons...</p>';
    showPage('#content-display-page'); 

    let lessons = [];
    try {
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
            link.href = '#';
            link.innerHTML = `<i class="fas fa-folder-open"></i><span>${lesson.title}</span>`;
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showPdfsForLesson(lesson);
            });

            contentListContainer.appendChild(link);
        });
    } else {
        contentListContainer.innerHTML = `<p>No lessons available for this subject yet.</p>`;
    }
}

// 2. الدالة الجديدة لعرض ملفات PDF
function showPdfsForLesson(lesson) {
    const pdfsTitle = document.getElementById('pdfs-lesson-title');
    const pdfsListContainer = document.getElementById('pdfs-list');
    
    pdfsTitle.textContent = lesson.title;
    pdfsListContainer.innerHTML = '';

    if (lesson.filePaths && lesson.filePaths.length > 0) {
        lesson.filePaths.forEach(filePath => {
            const link = document.createElement('a');
            link.className = 'content-item';
            
            const viewerUrl = `pdf-viewer.html?src=${encodeURIComponent(filePath)}`;
            link.href = viewerUrl;
            link.target = "_blank";

            const fileName = filePath.split('/').pop().replace('.pdf', '');
            link.innerHTML = `<i class="fas fa-file-pdf"></i><span>${fileName}</span>`;
            
            pdfsListContainer.appendChild(link);
        });
    } else {
        pdfsListContainer.innerHTML = '<p>No PDF files found for this lesson.</p>';
    }

    document.getElementById('back-to-lessons-btn').onclick = () => showPage('#content-display-page');

    showPage('#pdfs-display-page');
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

    // =======================================================
    // START: MODIFIED submitQuizResults FUNCTION
    // =======================================================
    // في ملف script.js
    // ✅ استبدل هذه الدالة بالكامل
    async function submitQuizResults() {
    clearInterval(quizTimerInterval);
    const timeTakenInSeconds = Math.round((Date.now() - quizStartTime) / 1000);

    const incorrectQuestionsPayload = proUserAnswers.map((answer, index) => {
        if (answer && !answer.isCorrect) {
            const questionData = proQuiz.questions[index];
            return {
                questionText: questionData.questionText || questionData.question,
                options: questionData.options,
                correctOptionIndexes: questionData.correctOptionIndexes,
                explanation: questionData.explanation,
                userSelectedIndexes: answer.selectedIndexes
            };
        }
        return null;
    }).filter(q => q !== null);

    const correctCount = proQuiz.questions.length - incorrectQuestionsPayload.length;
    const score = proQuiz.questions.length > 0 ? (correctCount / proQuiz.questions.length) * 20 : 0;

    // ✨ إضافة جديدة: تجهيز جميع إجابات المستخدم لإرسالها
    const allUserAnswersPayload = proUserAnswers.map((answer, index) => {
        if (answer) {
            return {
                questionIndex: index,
                selectedIndexes: answer.selectedIndexes
            };
        }
        return null;
    }).filter(a => a !== null);

    const resultPayload = {
        quizId: proQuiz._id,
        score: parseFloat(score.toFixed(2)),
        timeTaken: timeTakenInSeconds,
        correctAnswers: correctCount,
        totalQuestions: proQuiz.questions.length,
        incorrectQuestions: incorrectQuestionsPayload,
        subjectId: proQuiz.subject,
        allUserAnswers: allUserAnswersPayload // <-- ✨ إرسال جميع الإجابات هنا
    };

    showQuizSummaryPage(resultPayload, proQuiz.subject);

    if (!proQuiz.subject) {
        showNotification('Result displayed, but could not be saved without a subject.', 'info');
        return;
    }

    try {
        const savedResultWithXP = await fetchApi('/api/results', {
            method: 'POST',
            body: JSON.stringify(resultPayload)
        });
        document.getElementById('user-xp-display').textContent = `${savedResultWithXP.totalXP} XP`;
        showNotification(`+${savedResultWithXP.earnedXP} XP earned!`, 'success');
        if (savedResultWithXP.newBadge) showNewBadgePopup(savedResultWithXP.newBadge);
    } catch (error) {
        showNotification(`Failed to save progress: ${error.message}`, 'error');
    }
}

    // =======================================================
    // END: MODIFIED submitQuizResults FUNCTION
    // =======================================================
    
    function showNewBadgePopup(badge) {
        document.getElementById('badge-popup-name').textContent = badge.name;
        document.getElementById('badge-popup-desc').textContent = badge.description;
        const overlay = document.getElementById('badge-popup-overlay');
        overlay.classList.add('show');
        document.getElementById('badge-popup-close').onclick = () => {
            overlay.classList.remove('show');
        };
    }
    
    // =======================================================
    // START: MODIFIED showQuizSummaryPage FUNCTION
    // =======================================================
    // ✅ FIX 3.3: تعديل الدالة لاستقبال معرّف المادة
    function showQuizSummaryPage(resultData, subjectId) {
        const summaryScoreEl = document.getElementById('summary-score');
        const summaryCorrectAnswersEl = document.getElementById('summary-correct-answers');
        const summaryTimeTakenEl = document.getElementById('summary-time-taken');
        
        if (summaryScoreEl) summaryScoreEl.textContent = `${(resultData.score || 0).toFixed(2)} / 20`;
        if (summaryCorrectAnswersEl) summaryCorrectAnswersEl.textContent = `${resultData.correctAnswers} / ${resultData.totalQuestions}`;
        const minutes = Math.floor(resultData.timeTaken / 60);
        const seconds = resultData.timeTaken % 60;
        if(summaryTimeTakenEl) summaryTimeTakenEl.textContent = `${minutes}m ${seconds}s`;
    
        const incorrectQuestionsContainer = document.getElementById('incorrect-questions-summary');
        // ✅ FIX 3.4: تمرير معرّف المادة لعرض الأسئلة
        displayReviewQuestions(incorrectQuestionsContainer, resultData.incorrectQuestions, subjectId);
        
        const correctQuestionsContainer = document.getElementById('correct-questions-summary');
        if (correctQuestionsContainer) {
            const correctQuestions = proQuiz.questions.filter((q, index) => {
                const answer = proUserAnswers[index];
                return answer && answer.isCorrect;
            });
            // ✅ FIX 3.4: تمرير معرّف المادة لعرض الأسئلة
            displayReviewQuestions(correctQuestionsContainer, correctQuestions, subjectId);
        }
    
        document.getElementById('back-to-subjects-from-summary-btn').onclick = () => showPage('#subjects-page');
        document.getElementById('retry-quiz-btn').onclick = () => {
            if (proQuiz._id.startsWith('ai-generated-')) {
                showNotification("Cannot retry an AI-generated quiz directly. Please generate a new one.", "info");
            } else {
                startQuiz(proQuiz._id);
            }
        };

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
    // =======================================================
    // END: MODIFIED showQuizSummaryPage FUNCTION
    // =======================================================

    // =======================================================
    // START: MODIFIED displayReviewQuestions FUNCTION
    // =======================================================
    // في ملف script.js
    // ✅ استبدل هذه الدالة بالكامل
    function displayReviewQuestions(container, questions, subjectId) {
        container.innerHTML = '';
        if (!questions || questions.length === 0) {
            container.innerHTML = '<p>No questions to display in this section.</p>';
            return;
        }

        questions.forEach(q => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'review-q-summary incorrect-q-summary';

            // --- ✨ الإصلاح هنا ---
            // 1. عرض نص الإجابة الكامل بدلاً من الحرف فقط
            const correctAnswersText = q.correctOptionIndexes.map(i => q.options[i]).join(', ');
            const userAnswersText = (q.userSelectedIndexes && q.userSelectedIndexes.length > 0)
                ? q.userSelectedIndexes.map(i => q.options[i]).join(', ')
                : "No answer";

            let detailsHtml = `<p><em>Your Answer:</em> <span class="user-answer">${userAnswersText}</span></p>
                            <p><em>Correct Answer:</em> <span class="correct-answer">${correctAnswersText}</span></p>`;
            // --- نهاية الإصلاح ---

            const questionText = q.questionText || q.question;
            questionDiv.innerHTML = `<div class="review-q-text">
                                        <p><strong>Q:</strong> ${questionText}</p>
                                        ${detailsHtml}
                                    </div>
                                    <div class="review-q-actions">
                                        <button class="action-btn save-flashcard-btn" title="Save as Flashcard">
                                            <i class="fas fa-plus-square"></i>
                                        </button>
                                    </div>`;
            container.appendChild(questionDiv);

            const saveBtn = questionDiv.querySelector('.save-flashcard-btn');
            const backContent = `Correct Answer(s): ${correctAnswersText}\n\nExplanation: ${q.explanation || 'No explanation provided.'}`;
            
            saveBtn.onclick = () => {
                if (!subjectId) {
                    showNotification('Cannot save flashcard without a subject context.', 'error');
                    return;
                }
                saveBtn.innerHTML = '<i class="fas fa-check-square"></i>';
                saveBtn.disabled = true;

                // --- ✨ الإصلاح هنا ---
                // 2. استخدام أسماء الحقول الصحيحة التي يتوقعها الخادم
                createFlashcardAPI({
                    subjectId,
                    questionText: questionText,   // <-- FIX: use questionText
                    backContent: backContent,     // <-- FIX: use backContent
                });
                // --- نهاية الإصلاح ---
            };
        });
    }
    // =======================================================
    // END: MODIFIED displayReviewQuestions FUNCTION
    // =======================================================

    async function createFlashcardAPI(flashcardData) {
        try {
            // استخدام الدالة المساعدة لإجراء الطلب
            const data = await fetchApi('/api/flashcards', {
                method: 'POST',
                body: JSON.stringify(flashcardData)
            });
            showNotification('Flashcard saved!', 'success');
        } catch (error) {
            showNotification(error.message, 'error');
        }
    }
    
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
                // ✅ FIX 2: استخدام 'questionText' بدلاً من 'question' هنا أيضاً
                const questionLines = doc.splitTextToSize(`Q${index + 1}: ${q.questionText}`, pageWidth - (margin * 2));
                const requiredHeight = (questionLines.length * 5) + 35;
                addPageIfNeeded(requiredHeight);

                doc.setFontSize(12);
                doc.setFont("helvetica", "bold");
                doc.text(questionLines, margin, y);
                y += questionLines.length * 5 + 5;

                doc.setFont("helvetica", "normal");
                
                doc.setTextColor(200, 0, 0); // Red
                const userAnswersText = q.userSelectedIndexes.map(i => q.options[i]).join(', ') || "No answer";
                doc.text(`- Your Answer: ${userAnswersText}`, margin + 5, y);
                y += 7;

                doc.setTextColor(34, 139, 34); // ForestGreen
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
            const res = await fetch(`https://dental-app-he1p.onrender.com/api/content/quiz/${quizId}`, { headers: { 'Authorization': `Bearer ${token}` } });
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

function renderCurrentQuestion() {
    clearInterval(quizTimerInterval);
    const question = proQuiz.questions[proQuestionIndex];

    if (!question) {
        console.error("Could not find question at index:", proQuestionIndex);
        quizQuestionTextEl_pro.textContent = "Error: Could not load question.";
        return;
    }

    const questionText = question.questionText || question.question;
    const correctIndexesRaw = question.correctOptionIndexes ?? question.correctIndex ?? question.answer ?? question.answerIndex;
    const correctIndexes = Array.isArray(correctIndexesRaw) ? correctIndexesRaw : [correctIndexesRaw];

    if (!question.options || !questionText || correctIndexesRaw === undefined) {
        console.error("Malformed or incomplete question object at index:", proQuestionIndex, question);
        quizQuestionTextEl_pro.textContent = "Error: Question data is incomplete. Please skip.";
        if (quizOptionsContainer_pro) quizOptionsContainer_pro.innerHTML = '';
        updateQuizControls();
        return;
    }

    const isAnswered = proUserAnswers[proQuestionIndex] !== null;
    const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
    const isMultipleChoice = correctIndexes.length > 1;

    quizOptionsContainer_pro.className = 'quiz-options-container-pro ' + (isMultipleChoice ? 'multiple-choice' : 'single-choice');
    quizProgressEl_pro.textContent = `Question ${proQuestionIndex + 1} of ${proQuiz.questions.length}`;
    quizQuestionTextEl_pro.textContent = questionText;
    quizOptionsContainer_pro.innerHTML = '';
    quizExplanationContainer.style.display = 'none';

    const parentArea = quizQuestionTextEl_pro.parentElement;
    const oldImageContainer = parentArea.querySelector('.quiz-image-display');
    if (oldImageContainer) { oldImageContainer.remove(); }

    if (question.imageUrl) {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'quiz-image-display';
        const serverUrl = 'https://dental-app-he1p.onrender.com';
        imgContainer.innerHTML = `<img src="${serverUrl}${question.imageUrl}" alt="Question Illustration">`;
        quizQuestionTextEl_pro.after(imgContainer);
    }

    question.options.forEach((optionText, index) => {
        const optionEl = document.createElement('button');
        optionEl.className = 'quiz-option-pro';

        // --- ✨ منطق عرض الإحصائيات الجديد ---
        let statsHtml = '';
        // نعرض الإحصائيات فقط إذا تمت الإجابة على السؤال وكان هناك بيانات إحصائية
        if (isAnswered && question.stats && question.stats.totalAnswers > 0 && question.stats.optionSelectionCounts) {
            const count = question.stats.optionSelectionCounts[index] || 0;
            const total = question.stats.totalAnswers;
            const percentage = Math.round((count / total) * 100);
            
            // شريط التقدم الذي يمثل النسبة
            statsHtml = `
                <div class="option-stats-bar" style="width: ${percentage}%;"></div>
                <span class="option-stats-text">${percentage}%</span>
            `;
        }

        optionEl.innerHTML = `
            <div class="quiz-option-prefix"><span class="quiz-option-label">${optionLabels[index] || ''}</span></div>
            <div class="quiz-option-text">${optionText}</div>
            ${statsHtml} 
        `; // <-- إضافة وسم الإحصائيات هنا

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

    if (isAnswered && (question.explanation || question.Explanation)) {
        quizExplanationText.textContent = question.explanation || question.Explanation;
        quizExplanationContainer.style.display = 'block';
    }

    if (!isAnswered) {
        // ✅ [تعديل] استدعاء startTimer سيحترم حالة isQuizTimerActive
        startTimer(question.timer || 90);
    } else {
        quizTimerDisplay.textContent = "Done!";
        quizTimerContainer.classList.remove('warning');
        quizTimerDisplay.style.opacity = '1';
    }
    
    updateQuizControls();
    renderQuestionList();
}

    // ✅ --- [تعديل] دالة بدء العداد ---
    let isQuizTimerActive = true; // متغير لتتبع حالة العداد
    function startTimer(duration) {
        // ✅ --- [تعديل] التأكد من أن العداد مطلوب تشغيله ---
        if (!isQuizTimerActive) {
            quizTimerDisplay.textContent = "Off";
            quizTimerDisplay.style.opacity = '0.6';
            quizTimerContainer.classList.remove('warning');
            return; // لا تبدأ العداد إذا كان مغلقاً
        }
        // --- نهاية التعديل ---

        let timeLeft = duration;
        quizTimerContainer.classList.remove('warning');
        quizTimerDisplay.style.opacity = '1'; // التأكد من ظهوره

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

    function selectOption(selectedIndex) {
        document.querySelectorAll('.quiz-option-pro').forEach(btn => btn.classList.remove('selected'));
        const selectedBtn = quizOptionsContainer_pro.querySelector(`[data-index="${selectedIndex}"]`);
        selectedBtn.classList.add('selected');
        quizActionBtn.disabled = false;
    }

    function toggleOption(selectedIndex) {
        const selectedBtn = quizOptionsContainer_pro.querySelector(`[data-index="${selectedIndex}"]`);
        if (selectedBtn) {
            selectedBtn.classList.toggle('selected');
        }
        const anySelected = quizOptionsContainer_pro.querySelector('.selected');
        quizActionBtn.disabled = !anySelected;
    }

    function checkAnswer() {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null; // ✅ [إضافة] إيقاف تام للعداد عند الإجابة
        const question = proQuiz.questions[proQuestionIndex];
        const selectedElements = quizOptionsContainer_pro.querySelectorAll('.selected');
        const correctIndexesRaw = question.correctOptionIndexes ?? question.correctIndex ?? question.answer ?? question.answerIndex;
        const correctIndexes = (Array.isArray(correctIndexesRaw) ? correctIndexesRaw : [correctIndexesRaw]).sort((a, b) => a - b);
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
    // ✅ قم بتحديث دالة fetchAndDisplayDashboardData
    // في ملف script.js
    // ✅ استبدل هذه الدالة بالكامل
    async function fetchAndDisplayDashboardData() {
        try {
            const data = await fetchApi('/api/results/dashboard');
            const userProfile = await fetchUserProfile();

            // تحديث الإحصائيات العامة
            document.getElementById('dashboard-total-xp').textContent = userProfile.experiencePoints || 0;
            document.getElementById('dashboard-badge-count').textContent = (userProfile.badges && userProfile.badges.length) || 0;
            document.getElementById('dashboard-quiz-count').textContent = data.totalQuizzesTaken || 0;

            // --- ✨ الإصلاح هنا ---
            const recentList = document.getElementById('recent-quizzes-list');
            recentList.innerHTML = '';
            if (data.recentQuizzes.length === 0) {
                recentList.innerHTML = '<li>No quizzes completed yet. Start a quiz!</li>';
            } else {
                data.recentQuizzes.forEach(result => {
                    let quizTitle = 'Quiz'; // قيمة افتراضية
                    // التحقق الذكي من نوع الكويز
                    if (result.quiz && typeof result.quiz === 'object' && result.quiz.title) {
                        quizTitle = result.quiz.title; // كويز عادي له اسم
                    } else if (typeof result.quiz === 'string' && result.quiz.startsWith('mistakes_')) {
                        quizTitle = 'Mistakes Review'; // كويز مراجعة الأخطاء
                    } else if (typeof result.quiz === 'string' && result.quiz.startsWith('ai-generated-')) {
                        quizTitle = 'AI Generated Quiz'; // كويز مولّد بالذكاء الاصطناعي
                    }

                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span class="quiz-title">${quizTitle}</span>
                        <span class="quiz-score">${result.score.toFixed(2)} / 20</span>
                    `;
                    recentList.appendChild(li);
                });
            }
            // --- نهاية الإصلاح ---
            
            // عرض بيانات الأداء حسب المادة (Performance by Subject)
            const chartCard = document.querySelector('.chart-card');
            chartCard.innerHTML = `<h3>Performance by Subject</h3>`; 
            if (data.performanceBySubject.length === 0) {
                chartCard.innerHTML += `<p>No performance data yet. Complete quizzes to see stats!</p>`;
            } else {
                const subjectList = document.createElement('ul');
                subjectList.className = 'performance-list';
                data.performanceBySubject.forEach(subject => {
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
                        startMistakesQuiz(reviewButton.dataset.subjectId, reviewButton.dataset.subjectName);
                    }
                });
            }

            // عرض الكويزات المحفوظة (Saved Quizzes)
            const savedQuizzes = await fetchApi('/api/saved-quizzes');
            const savedListContainer = document.getElementById('saved-quizzes-list');
            savedListContainer.innerHTML = '';
            if (savedQuizzes.length === 0) {
                savedListContainer.innerHTML = '<p>You have not saved any AI-generated quizzes yet.</p>';
            } else {
                savedQuizzes.forEach(quiz => {
                    const quizCard = document.createElement('div');
                    quizCard.className = 'saved-quiz-item';
                    quizCard.innerHTML = `
                        <div class="saved-quiz-info">
                            <i class="fas fa-robot"></i>
                            <div class="saved-quiz-details">
                                <span class="saved-quiz-title">${quiz.title}</span>
                                <span class="saved-quiz-meta">${quiz.questions.length} Questions | ${quiz.subjectName}</span>
                            </div>
                        </div>
                        <div class="saved-quiz-actions">
                            <button class="btn-start-saved-quiz" title="Start Quiz"><i class="fas fa-play"></i></button>
                            <button class="btn-delete-saved-quiz" title="Delete Quiz"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    `;
                    savedListContainer.appendChild(quizCard);
                    quizCard.querySelector('.btn-start-saved-quiz').addEventListener('click', () => startSavedQuiz(quiz));
                    quizCard.querySelector('.btn-delete-saved-quiz').addEventListener('click', () => handleDeleteSavedQuiz(quiz._id, quizCard));
                });
            }

        } catch (error) {
            console.error('Error rendering dashboard:', error);
            document.getElementById('recent-quizzes-list').innerHTML = '<li>Could not load recent activities.</li>';
            document.getElementById('saved-quizzes-list').innerHTML = '<p>Error loading saved quizzes.</p>';
        }
    }


    async function startMistakesQuiz(subjectId, subjectName) {
        showNotification(`Building your personalized review for ${subjectName}...`, 'info');
        const token = localStorage.getItem('userToken');

        try {
            const response = await fetch(`https://dental-app-he1p.onrender.com/api/results/mistakes/${subjectId}`, {
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

function stopAndResetPomodoroCycle() {
    clearInterval(pomodoroInterval);
    isPomodoroActive = false;
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
// ===================================================================
async function fetchAndDisplayCollections() {
    try {
        // استخدام الدالة المساعدة
        allFlashcardCollections = await fetchApi('/api/flashcards');
        
        const contentDiv = document.getElementById('flashcards-content');
        const viewerDiv = document.getElementById('flashcard-viewer');

        contentDiv.style.display = 'grid';
        viewerDiv.classList.add('flashcard-viewer-hidden');
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
        const contentDiv = document.getElementById('flashcards-content');
        contentDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// ✅ استبدل دالة showFlashcardViewer القديمة بهذه النسخة
function showFlashcardViewer(collection) {
    currentCollection = collection.cards;
    currentCardIndex = 0;

    // --- التحسين الأمني ---
    const ratingControls = document.getElementById('ai-flashcard-rating-controls');
    const viewerControls = document.getElementById('flashcard-viewer-controls');

    if (ratingControls) ratingControls.style.display = 'none';
    if (viewerControls) viewerControls.style.display = 'flex';
    // --- نهاية التحسين ---

    document.getElementById('flashcards-content').style.display = 'none';
    document.getElementById('flashcard-viewer').classList.remove('flashcard-viewer-hidden');
    document.getElementById('flashcard-viewer-title').textContent = collection.subjectName;

    displayCurrentFlashcard();
}
// ✅ استبدل دالة displayCurrentFlashcard القديمة بهذه النسخة

// في ملف script.js

/**
 * @description تعرض البطاقة الحالية في العارض (النسخة النهائية والذكية)
 */
function displayCurrentFlashcard() {
    if (!currentCollection || currentCollection.length === 0) return;

    const card = currentCollection[currentCardIndex];
    if (!card) {
        console.error("Card data is missing at index:", currentCardIndex);
        return; 
    }

    // --- ✅ الحل النهائي هنا ---
    // الدالة الآن تبحث عن كلا الاسمين المحتملين للوجه الأمامي والخلفي
    const frontText = card.front || card.questionText;
    const backText = card.back || card.backContent;

    const questionElement = document.getElementById('flashcard-question');
    const answerElement = document.getElementById('flashcard-answer');

    // التأكد من وجود العناصر قبل تعديلها
    if (questionElement) {
        // نستخدم "" كقيمة احتياطية في حال كانت البيانات فارغة تماماً
        questionElement.textContent = frontText || "No content for front side."; 
    }
    if (answerElement) {
        answerElement.textContent = backText || "No content for back side.";
    }
    // --- نهاية الحل ---

    // بقية الدالة تبقى كما هي بدون تغيير
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

// =======================================================
// START: MODIFIED saveQuizBtn Event Listener
// =======================================================
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
            // توحيد بيانات الأسئلة قبل إرسالها
            const formattedQuestions = proQuiz.questions.map(q => ({
                question: q.question, // التأكد من استخدام الاسم الصحيح
                options: q.options,
                correctOptionIndexes: Array.isArray(q.correctOptionIndexes) ? q.correctOptionIndexes : [q.correctOptionIndexes],
                explanation: q.explanation,
            }));

            const response = await fetch('https://dental-app-he1p.onrender.com/api/saved-quizzes', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                 },
                body: JSON.stringify({
                    title: proQuiz.title || 'AI Generated Quiz',
                    subjectName: document.getElementById('quiz-subject-name-pro').textContent || 'AI Generated',
                    questions: formattedQuestions
                })
            });

             if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save quiz.');
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
// =======================================================
// END: MODIFIED saveQuizBtn Event Listener
// =======================================================

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
                const response = await fetch('https://dental-app-he1p.onrender.com/api/ai/translate', {
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
        const pageType = this.dataset.pageType;

        // 1. التعامل مع أنواع المحتوى (Summaries, Quizzes, etc.)
        if (pageType) {
            currentContentType = pageType;
            navLinks.forEach(l => l.classList.remove('active-link'));
            this.classList.add('active-link');
        }

        // 2. التحقق من صلاحية المستخدم قبل عرض الصفحات المحمية
        const protectedPages = ['#dashboard-page', '#flashcards-page', '#subjects-page'];
        if (protectedPages.includes(targetId) || pageType) {
            if (!isLoggedIn) { 
                window.location.href = 'login.html'; 
                return; // إيقاف التنفيذ
            } else if (!isYearChosen) { 
                showPage('#year-selection-page'); 
                return; // إيقاف التنفيذ
            }
        }
        
        // ✅ --- المنطق السحري هنا: جلب البيانات أولاً، ثم عرض الصفحة --- ✅
        if (targetId === '#dashboard-page') {
            fetchAndDisplayDashboardData(); // <-- أولاً: جلب بيانات لوحة الأداء
        } else if (targetId === '#flashcards-page') {
            fetchAndDisplayCollections(); // <-- أولاً: جلب مجموعات البطاقات المحفوظة
        }

        // 4. أخيراً: عرض الصفحة الصحيحة
        if (pageType) {
            showPage('#subjects-page');
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
                const response = await fetch('https://dental-app-he1p.onrender.com/api/user/year', {
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
                const response = await fetch('https://dental-app-he1p.onrender.com/api/user/activate', {
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
                chatPlusBtn.classList.toggle('rotated');
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

    if (pomodoroToggleBtn) {
        pomodoroToggleBtn.addEventListener('click', () => {
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
                document.title = originalDocTitle;
            }
        });
    }

    closePomodoroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            pomodoroModal.classList.remove('active');
            document.title = originalDocTitle;
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
    
    // ✅ --- [إضافة جديدة] إصلاح مشكلة زر إيقاف/تشغيل العداد ---
    const toggleQuizTimerBtn = document.getElementById('toggle-quiz-timer-btn');
    if (toggleQuizTimerBtn) {
        toggleQuizTimerBtn.addEventListener('click', () => {
            isQuizTimerActive = !isQuizTimerActive; // عكس الحالة
            
            if (isQuizTimerActive) {
                // إذا أعدنا تشغيله، وكان العداد متوقفاً، نعيد تشغيله
                if (quizTimerInterval === null && proUserAnswers[proQuestionIndex] === null) {
                    const remainingTime = parseInt(quizTimerDisplay.textContent.split(':')[0]) * 60 + parseInt(quizTimerDisplay.textContent.split(':')[1]);
                    if (remainingTime > 0) {
                        startTimer(remainingTime); // استئناف من الوقت المتبقي
                    } else if (proQuiz && proQuiz.questions[proQuestionIndex]) {
                        startTimer(proQuiz.questions[proQuestionIndex].timer || 90); // بدء عداد جديد
                    }
                }
                toggleQuizTimerBtn.innerHTML = '<i class="fas fa-power-off"></i>';
                showNotification('Question timer ON', 'info');
            } else {
                // إيقاف العداد
                clearInterval(quizTimerInterval);
                quizTimerInterval = null; // نضع null للإشارة أنه متوقف
                toggleQuizTimerBtn.innerHTML = '<i class="fas fa-play"></i>'; // تغيير الأيقونة
                quizTimerDisplay.textContent = 'Off';
                quizTimerDisplay.style.opacity = '0.6';
                quizTimerContainer.classList.remove('warning');
                showNotification('Question timer OFF', 'info');
            }
        });
    }
    // --- نهاية الإضافة ---

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
    const aiHubBtn = document.querySelector('.ai-chat-btn');
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

    let currentAiTask = '';

    aiHubBtn.addEventListener('click', () => {
        aiHubOverlay.style.display = 'flex';
    });

    closeHubBtn.addEventListener('click', () => {
        aiHubOverlay.style.display = 'none';
    });

    closeProcessorBtn.addEventListener('click', () => {
        aiProcessorOverlay.style.display = 'none';
    });

    // في ملف script.js

// ✅ 1. استبدل دالة aiOptionCards.forEach بالكامل
const quizOptionsContainer = document.getElementById('quiz-options-container');
const flashcardOptionsContainer = document.getElementById('flashcard-options-container');

aiOptionCards.forEach(card => {
    card.addEventListener('click', () => {
        currentAiTask = card.dataset.task;
        aiHubOverlay.style.display = 'none'; // أغلق نافذة الخيارات

        if (currentAiTask === 'chat') {
            aiChatModal.classList.add('active'); // افتح الشات
        } else {
            // جهز واجهة الرفع
            processorTitle.textContent = `Generate ${currentAiTask}`;
            aiFileForm.style.display = 'flex';
            aiLoadingIndicator.style.display = 'none';
            aiProcessBtn.disabled = false;
            aiFileForm.reset();
            
            // ✨ إظهار/إخفاء حاويات الخيارات بذكاء
            quizOptionsContainer.style.display = (currentAiTask === 'quiz') ? 'block' : 'none';
            flashcardOptionsContainer.style.display = (currentAiTask === 'flashcards') ? 'block' : 'none';

            aiProcessorOverlay.style.display = 'flex'; // افتح واجهة الرفع
        }
    });
});

// في ملف script.js، احذف كل المقاطع التي تبدأ بـ aiFileForm.addEventListener
// ثم الصق هذا الكود بدلاً منها.
// في ملف script.js

// ✅ استبدل هذه الدالة بالكامل بالكود الصحيح
aiFileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const file = aiPdfInput.files[0];
    if (!file) {
        showNotification('Please select a PDF file.', 'error');
        return;
    }
    
    // ... (منطق "تذكر المادة" يبقى كما هو)
    const activeCarouselItem = document.querySelector('.carousel-item.active');
    if (!activeCarouselItem) {
        showNotification("Error: No active subject selected. Please select a subject first.", "error");
        return;
    }
    try {
        const subjectsInYear = await fetchApi(`/api/content/subjects/${selectedYear}`);
        const currentSubject = subjectsInYear.find(s => s.key === activeCarouselItem.dataset.subjectKey);
        if (!currentSubject) {
            showNotification('Could not verify the selected subject.', 'error');
            return;
        }
        currentAiGenerationContext = {
            subjectId: currentSubject._id,
            subjectName: currentSubject.name
        };
    } catch (error) {
        showNotification('Error fetching subject data before generation.', 'error');
        return;
    }
    // ... (نهاية منطق "تذكر المادة")

    aiFileForm.style.display = 'none';
    aiLoadingIndicator.style.display = 'block';
    aiProcessBtn.disabled = true;

    const formData = new FormData();
    formData.append('pdfFile', file);
    const token = localStorage.getItem('userToken');
    let endpoint = '';
    
    // --- ✨✨✨ الإصلاح هنا ✨✨✨ ---
    switch (currentAiTask) {
        case 'quiz':
            // ❌ الخطأ كان هنا: '/api/ai/generateQuiz'
            endpoint = '/api/gemini/generateQuiz'; // ✅ المسار الصحيح
            formData.append('count', document.getElementById('ai-quiz-count').value);
            break;
        case 'flashcards':
            // ❌ الخطأ كان هنا: '/api/ai/generateFlashcards'
            endpoint = '/api/gemini/generateFlashcards'; // ✅ المسار الصحيح
            formData.append('count', document.getElementById('ai-flashcard-count').value);
            formData.append('language', document.getElementById('ai-generation-language').value);
            break;
        case 'summary':
            endpoint = '/api/gemini/generateMindMap';
            break;
        default:
            showNotification('Unknown task.', 'error');
            aiFileForm.style.display = 'flex';
            aiLoadingIndicator.style.display = 'none';
            aiProcessBtn.disabled = false;
            return;
    }
    // --- نهاية الإصلاح ---

    try {
        const response = await fetch(`https://dental-app-he1p.onrender.com${endpoint}`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            body: formData 
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to process the request.');
        }
        aiProcessorOverlay.style.display = 'none';
        const data = await response.json();
        
        if (currentAiTask === 'summary') { displayMindMap(data); } 
        else if (currentAiTask === 'quiz') { startAIGeneratedQuiz(data); }
        else if (currentAiTask === 'flashcards') { displayGeneratedFlashcards(data); }

    } catch (error) {
        // سيتم التقاط خطأ "Unexpected token" هنا الآن
        if (error instanceof SyntaxError) {
            showNotification("The AI returned an invalid response. Please try again.", "error");
        } else {
            showNotification(error.message, "error");
        }
    } finally {
        aiFileForm.style.display = 'flex';
        aiLoadingIndicator.style.display = 'none';
        aiProcessBtn.disabled = false;
        aiFileForm.reset();
        if (aiProcessorOverlay.style.display !== 'none') {
             aiProcessorOverlay.style.display = 'none';
        }
    }
});
    
    const mindmapBackBtn = document.getElementById('mindmap-back-btn');
    if (mindmapBackBtn) {
        mindmapBackBtn.addEventListener('click', () => {
            showPage('#home-page');
        });
    }

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

    if (exploreContentBtnNew) {
        exploreContentBtnNew.addEventListener('click', (e) => {
            e.preventDefault();
            if (exploreModal) {
                exploreModal.classList.add('active');
            }
        });
    }
    if (closeExploreModalBtn) {
        closeExploreModalBtn.addEventListener('click', () => {
            if (exploreModal) exploreModal.classList.remove('active');
        });
    }

    if (exploreModal) {
        exploreModal.addEventListener('click', (e) => {
            if (e.target === exploreModal) {
                exploreModal.classList.remove('active');
            }
        });
    }

    if (videoLessonsCard) {
        videoLessonsCard.addEventListener('click', () => {
            showNotification('Coming Soon! Video explanations will be added very soon.', 'info');
        });
    }

    if (summariesCard) {
        summariesCard.addEventListener('click', () => {
            const summariesLink = document.querySelector('a[data-page-type="summaries"]');
            if (summariesLink) {
                summariesLink.click();
                showNotification('Showing all summaries.', 'info');
            }
        });
    }

    if (quizzesCard) {
        quizzesCard.addEventListener('click', () => {
            const quizzesLink = document.querySelector('a[data-page-type="quizzes"]');
            if (quizzesLink) {
                quizzesLink.click();
                showNotification('Showing all quizzes.', 'info');
            }
        });
    }

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

    // --- ❌ تم حذف كود زر البرغر المكرر من هنا ---

    function loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            return resolve();
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('Failed to load script: ' + src));
        document.head.appendChild(s);
      });
    }

    async function ensureMarkmap() {
      if (window.markmap && window.markmap.Markmap && window.markmap.transformer) {
        return;
      }

      try {
        console.log("Markmap not found. Loading libraries dynamically...");
        await loadScript('https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/markmap-lib@0.15.4/dist/browser/index.js');
        await loadScript('https://cdn.jsdelivr.net/npm/markmap-view@0.15.4/dist/browser/index.js');
        console.log("Markmap libraries loaded successfully.");
      } catch (error) {
        console.error(error);
        throw new Error('Failed to load one or more Markmap libraries.');
      }
    }
    
    // ✅ أضف هذه الدالة الجديدة في أي مكان مع دوال الفلاش كارد
    // في ملف script.js
    // ✅ استبدل هذه الدالة بالكامل
async function handleFlashcardRating(rating, interval) {
    const card = currentCollection[currentCardIndex];
    if (!card) return;

    if (rating === 'hard' || rating === 'medium') {
        
        // --- ✨ الإصلاح هنا: نستخدم المتغير العام بدلاً من البحث ---
        if (!currentAiGenerationContext.subjectId) {
            // رسالة الخطأ الآن منطقية أكثر
            showNotification('Error: Could not find the original subject to save this card.', 'error');
            return;
        }
        // --- نهاية الإصلاح ---
            
        try {
            await createFlashcardAPI({
                subjectId: currentAiGenerationContext.subjectId, // <-- استخدام القيمة المحفوظة
                questionText: card.front,
                backContent: card.back,
                interval: interval
            });
            showNotification(`Card saved! Will be reviewed in ${interval} day(s).`, 'success');
        } catch (e) {
            showNotification(`Error saving card: ${e.message}`, 'error');
        }
    }

    // الانتقال للبطاقة التالية تلقائياً
    if (currentCardIndex < currentCollection.length - 1) {
        currentCardIndex++;
        displayCurrentFlashcard();
    } else {
        showNotification('All generated cards have been reviewed!', 'success');
        document.getElementById('back-to-collections-btn').click();
    }
}


    // ✅ أضف هذا الكود في قسم معالجات الأحداث (Event Handlers) في الأسفل
    document.querySelectorAll('.rating-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const rating = this.dataset.rating;
            const interval = this.dataset.interval; // قد يكون 'undefined' للزر السهل
            handleFlashcardRating(rating, interval);
        });
    });

    // ✅ أضف هذه الدالة الجديدة في أي مكان مناسب
    function startSavedQuiz(quizData) {
        // هذه الدالة تحول الكويز المحفوظ ليتوافق مع نظام الكويز الاحترافي
        proQuiz = {
            _id: quizData._id, // نستخدم المعرف الحقيقي من قاعدة البيانات
            title: quizData.title,
            subject: null, // لا يوجد موضوع مرتبط مباشرةً
            questions: quizData.questions.map(q => ({
                // نقوم بتوحيد أسماء الحقول
                questionText: q.question, 
                options: q.options,
                correctOptionIndexes: q.correctOptionIndexes,
                explanation: q.explanation,
            }))
        };

        if (!proQuiz.questions || proQuiz.questions.length === 0) {
            showNotification('This quiz has no questions.', 'error');
            return;
        }

        proQuestionIndex = 0;
        proUserAnswers = new Array(proQuiz.questions.length).fill(null);
        quizStartTime = Date.now();
        
        quizLessonNameEl.textContent = proQuiz.title;
        quizSubjectNameEl.textContent = quizData.subjectName || "Saved Quiz";

        renderQuestionList();
        renderCurrentQuestion();
        updateStats();
        
        showPage('#quiz-taking-page');
    }

    // ✅ أضف هذه الدالة الجديدة أيضاً
    async function handleDeleteSavedQuiz(quizId, quizElement) {
        if (!confirm('Are you sure you want to delete this saved quiz?')) {
            return;
        }

        try {
            await fetchApi(`/api/saved-quizzes/${quizId}`, { method: 'DELETE' });
            showNotification('Quiz deleted successfully!', 'success');
            quizElement.remove(); // إزالة العنصر من الواجهة فوراً
        } catch (error) {
            showNotification(`Failed to delete quiz: ${error.message}`, 'error');
        }
    }
    const reportBtn = document.getElementById('report-question-btn');
const reportModal = document.getElementById('report-modal');
const reportForm = document.getElementById('report-form');
const cancelReportBtn = document.getElementById('cancel-report-btn');
if (reportBtn) {
    reportBtn.addEventListener('click', () => {
        if (!proQuiz || !proQuiz.questions[proQuestionIndex]) {
            showNotification('Cannot report this question.', 'error');
            return;
        }
        reportModal.classList.add('active');
        document.getElementById('report-reason').focus();
    });
}
if (cancelReportBtn) {
    cancelReportBtn.addEventListener('click', () => {
        reportModal.classList.remove('active');
        reportForm.reset();
    });
}
if (reportForm) {
    reportForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const reason = document.getElementById('report-reason').value;
        const currentQuestion = proQuiz.questions[proQuestionIndex];

        try {
            const response = await fetchApi('/api/reports', {
                method: 'POST',
                body: JSON.stringify({
                    quizId: proQuiz._id,
                    questionText: currentQuestion.questionText || currentQuestion.question,
                    reason: reason
                })
            });
            showNotification(response.message, 'success');
        } catch (error) {
            showNotification(error.message, 'error');
        } finally {
            reportModal.classList.remove('active');
            reportForm.reset();
        }
    });
}
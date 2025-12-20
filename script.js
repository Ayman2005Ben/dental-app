// === [إضافة جديدة] دالة مساعدة للتعامل مع طلبات الخادم (API) ===
/**
 * @description دالة مركزية لإرسال الطلبات إلى الخادم مع إضافة التوكن تلقائياً
 * @param {string} endpoint - مسار الطلب (مثال: '/api/user/profile')
 * @param {object} options - إعدادات الطلب (method, headers, body, etc.)
 * @returns {Promise<any>} - البيانات المستلمة من الخادم بصيغة JSON
 */
async function fetchApi(endpoint, options = {}) {
    const token = localStorage.getItem('userToken');
    // === الصق هذا الكود الصحيح مكانه ===
    const headers = {
        ...options.headers, // ابدأ بالهيدرز الممررة (إن وجدت)
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    // (هذا هو السطر الأهم)
    // لا تقم بإضافة 'Content-Type' إذا كان الجسم عبارة عن FormData
    // المتصفح سيقوم بإضافته تلقائياً (multipart/form-data)
    if (!(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }

    try {
        const response = await fetch(`https://dental-app-he1p.onrender.com${endpoint}`, {
            ...options, // <-- هذا السطر هو المفتاح!
            headers,    // <-- وهذا أيضاً!
        });

        const contentType = response.headers.get("content-type");
        let responseData;

        if (contentType && contentType.indexOf("application/json") !== -1) {
            responseData = await response.json();
        } else {
            // Handle non-JSON responses if necessary, e.g., for DELETE which might return no content
            if (response.status === 204) { // No Content
                return; // Or return a specific success indicator
            }
            // Handle other content types or text responses if needed
            responseData = await response.text(); // Example for text response
        }


        if (!response.ok) {
            // Use message from JSON if available, otherwise use status text or default message
            const errorMessage = responseData?.message || response.statusText || `Request failed with status ${response.status}`;
            // Special handling for 401 Unauthorized
            if (response.status === 401) {
                showNotification('Your session has expired. Please log in again.', 'error');
                logoutUser(); // Log out the user automatically
            }
            throw new Error(errorMessage);
        }

        return responseData; // Return JSON data or text data

    } catch (error) {
        console.error('API Fetch Error:', error);
        // Rethrow the error to be caught by the calling function, which can show a notification
        throw error;
    }
}


// === Content API helpers (added) ===
function buildPdfViewerUrl(filePath) {
    try {
        const base = 'pdf-viewer.html';
        const src = encodeURIComponent(filePath);
        // Use viewer only if explicitly enabled (useful for debugging or specific environments)
        const useViewer = (typeof window !== 'undefined' && window.USE_PDF_VIEWER === true);
        return useViewer ? `${base}?src=${src}` : filePath;
    } catch (e) {
        // Fallback in case of errors (e.g., encodeURIComponent fails)
        console.error("Error building PDF viewer URL:", e);
        return filePath;
    }
}

async function fetchSubjectsByYear(year) {
    // Using fetchApi helper
    return fetchApi(`/api/content/subjects/${year}`);
}

async function fetchLessonsBySubject(subjectId) {
    // Using fetchApi helper
    return fetchApi(`/api/content/lessons/${subjectId}`);
}

async function fetchSummariesBySubject(subjectId) {
    // Using fetchApi helper
    return fetchApi(`/api/summaries/${subjectId}`);
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
let isGuest = false; // Note: Guest mode seems unused, consider removing if not implemented
let isYearChosen = localStorage.getItem('isYearChosen') === 'true';
let selectedYear = localStorage.getItem('selectedYear');
let isActivated = localStorage.getItem('isActivated') === 'true';
let currentContentType = localStorage.getItem('currentContentType'); // ✅ حفظ نوع المحتوى
// ✅ إضافة جديدة: أضف هذا المتغير لتخزين سياق الإنشاء
let currentAiGenerationContext = { subjectId: null, subjectName: null };
let particlesInstance = null;
let performanceChart = null; // -- متغير الرسم البياني للوحة الأداء
const originalDocTitle = document.title; // لحفظ عنوان الصفحة الأصلي

// ✨ --- دالة جديدة لتشغيل الكويزات المولدة بالذكاء الاصطناعي --- ✨
function startAIGeneratedQuiz(quizData) {
    // 1. تجهيز بيانات الكويز لتتوافق مع نظام الكويز الاحترافي
    const generatedQuiz = { // Use a local variable to avoid potential conflicts
        _id: 'ai-generated-' + Date.now(), // نعطي الكويز معرفًا فريدًا
        title: 'AI Generated Quiz',
        subject: currentAiGenerationContext.subjectId, // Use context
        subjectName: currentAiGenerationContext.subjectName, // Use context
        questions: quizData // هنا نضع الأسئلة التي جاءت من Groq
    };

    // التأكد من أن الكويز يحتوي على أسئلة
    if (!generatedQuiz.questions || generatedQuiz.questions.length === 0) {
        showNotification('The generated quiz has no questions.', 'error');
        return;
    }

    // 2. إعادة تعيين كل متغيرات حالة الكويز واستدعاء دالة البدء
    initializeAndStartQuiz(generatedQuiz);
}

// --- نظام تنبيهات يجب تعريفه مبكراً ---
function showNotification(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `notification-toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    // Delay showing to allow CSS transition
    setTimeout(() => { toast.classList.add('show'); }, 10);
    // Auto-remove after duration
    setTimeout(() => {
        toast.classList.remove('show');
        // Remove from DOM after transition finishes
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 500); // Should match CSS transition duration
    }, 3000);
}

// --- دالة لتسجيل الخروج الآمن ---
function logoutUser() {
    console.log("Logging out user...");
    // Clear all relevant user data from localStorage
    localStorage.removeItem('userToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isYearChosen');
    localStorage.removeItem('selectedYear');
    localStorage.removeItem('isActivated');
    localStorage.removeItem('currentPageId'); // ✅ مسح الصفحة الحالية
    localStorage.removeItem('quizState'); // ✅ مسح حالة الكويز
    localStorage.removeItem('currentContentType'); // ✅ مسح نوع المحتوى
    // Redirect to login page
    window.location.href = 'login.html';
}

// --- دالة لجلب بيانات المستخدم من الباك-اند ---
async function fetchUserProfile() {
    try {
        // Use fetchApi which handles token and errors including 401
        const userProfile = await fetchApi('/api/user/profile');
        if (userProfile) {
            console.log("User profile fetched successfully:", userProfile);
            return userProfile;
        }
        return null; // Should not happen if fetchApi works correctly, but good practice
    } catch (error) {
        // fetchApi already logs detailed errors and handles 401
        // You might want to show a generic error here if fetchApi didn't handle it
        if (error.message.includes('Failed to fetch')) { // Network error example
            showNotification('Could not connect to the server. Please check your connection.', 'error');
        }
        // No need to show 'session expired' here, fetchApi handles it
        return null;
    }
}

// --- دالة تحديث واجهة المستخدم الرئيسية (نسخة معدلة بدون تفعيل إجباري) ---
function updateUI() {
    // No user profile means not logged in
    if (!isLoggedIn) {
        // Redirect immediately if not logged in
        window.location.href = 'login.html';
        return; // Stop further execution
    }

    // Check if year is chosen
    if (!isYearChosen) {
        showPage('#year-selection-page');
        return; // Stop if year selection is needed
    }

    // If logged in and year chosen, handle activation (if applicable)
    // This part seems complex and might depend on activation logic.
    // Assuming activation is checked elsewhere or handled by page content

    // Restore last page or show home page
    const lastPageId = localStorage.getItem('currentPageId');
    // Ensure the last page is valid and not a restricted page if state changed
    const validPages = ['#home-page', '#dashboard-page', '#subjects-page', '#content-display-page', '#lessons-display-page', '#flashcards-page', '#pdfs-display-page'];

    if (lastPageId && validPages.includes(lastPageId) && lastPageId !== '#year-selection-page' && lastPageId !== '#activation-page') {
        // Don't restore if it tries to go back to year/activation
        console.log("Restoring last page:", lastPageId);
        showPage(lastPageId);
    } else {
        // Default to home page if no valid last page or if it was year/activation
        console.log("Showing default home page.");
        showPage('#home-page');
    }


    // Update year display elements if they exist
    const currentSummaryYear = document.getElementById('current-summary-year');
    if (currentSummaryYear) { // Check if the element exists
        currentSummaryYear.textContent = selectedYear || 'N/A';
        // Assuming these IDs exist as well
        const currentQuizYear = document.getElementById('current-quiz-year');
        const currentLessonYear = document.getElementById('current-lesson-year');
        if (currentQuizYear) currentQuizYear.textContent = selectedYear || 'N/A';
        if (currentLessonYear) currentLessonYear.textContent = selectedYear || 'N/A';
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

    // Use a relative path assuming mindmap-viewer.html is in the same directory
    window.open(
        'mindmap-viewer.html',
        'MindMapViewer',
        `width=${width},height=${height},top=${top},left=${left}`
    );
}

// ✅ استبدل دالة displayGeneratedFlashcards القديمة بهذه النسخة
// [السطر 340]
// ✅ استبدل دالة displayGeneratedFlashcards القديمة بهذه النسخة
// ✅ [استبدل الدالة القديمة بهذه]
// [السطر 360]
function displayGeneratedFlashcards(flashcardData) {
    // 1. التحقق من البيانات
    if (!Array.isArray(flashcardData)) {
        showNotification("Invalid flashcard data received from AI.", "error");
        console.error("Expected flashcardData to be an array, but received:", flashcardData);
        return;
    }

    currentCollection = flashcardData;
    currentCardIndex = 0;

    if (!currentCollection || currentCollection.length === 0) {
        showNotification("The AI didn't generate any flashcards.", "error");
        return;
    }

    // --- ✅ [الخطوة 1: الانتقال "يدوياً" إلى صفحة الفلاش كارد] ---
    // (هذا هو البديل الصحيح لـ `showPage('#flashcards-page')` المسبب للمشكلة)

    // أ. إخفاء جميع الصفحات الأخرى
    pageSections.forEach(section => section.classList.remove('active'));

    // ب. إظهار صفحة الفلاش كارد
    const targetPage = document.querySelector('#flashcards-page');
    if (targetPage) {
        targetPage.classList.add('active');
        localStorage.setItem('currentPageId', '#flashcards-page'); // حفظ الصفحة الحالية

        // ج. تحديث الرابط النشط في شريط التنقل
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            link.classList.remove('active-link'); // إلغاء تنشيط الكل
            if (linkHref === '#flashcards-page') {
                link.classList.add('active-link'); // تنشيط رابط الفلاش كارد
            }
        });
    } else {
        console.error("Could not find #flashcards-page to display.");
        return; // لا يمكن المتابعة
    }
    // --- [نهاية الخطوة 1] ---


    // --- [الخطوة 2: إعداد واجهة العارض (هذا الكود سليم)] ---
    const ratingControls = document.getElementById('ai-flashcard-rating-controls');
    const viewerControls = document.getElementById('flashcard-viewer-controls');

    if (ratingControls) ratingControls.style.display = 'flex'; // إظهار أزرار التقييم
    if (viewerControls) viewerControls.style.display = 'none'; // إخفاء أزرار التالي/السابق

    // إخفاء شبكة المجموعات
    document.getElementById('flashcards-content').style.display = 'none';
    // إظهار العارض
    document.getElementById('flashcard-viewer').classList.remove('flashcard-viewer-hidden');
    document.getElementById('flashcard-viewer-title').textContent = "AI Generated Flashcards (Review & Save)";

    displayCurrentFlashcard(); // عرض البطاقة الأولى
}
// [السطر 371 في الكود الأصلي]
// --- دالة لتحديث الهيدر بصورة المستخدم ---
// [السطر 371]
// --- دالة لتحديث الهيدر بصورة المستخدم ---

// --- دالة لتحديث الهيدر بصورة المستخدم ---
function updateHeaderWithUserData(user) {
    const headerLogoImg = document.querySelector('.ai-header-logo');
    if (headerLogoImg && user && user.image) { // Added check for user object
        headerLogoImg.src = user.image;
        headerLogoImg.alt = `${user.displayName || 'User'}'s profile picture`;
    }
    // Update XP display if the element exists
    const xpDisplay = document.getElementById('user-xp-display');
    if (xpDisplay && user) {
        xpDisplay.textContent = `${user.experiencePoints || 0} XP`;
    }
}

// --- دالة رئيسية لتهيئة التطبيق ---
async function initializeApp() {
    const userProfile = await fetchUserProfile();
    if (userProfile) {
        isLoggedIn = true;
        selectedYear = userProfile.studyYear;
        isYearChosen = !!userProfile.studyYear; // True if studyYear exists and is not null/empty
        isActivated = userProfile.isActivated;

        // Update localStorage based on fetched profile
        localStorage.setItem('isLoggedIn', 'true');
        if (isYearChosen) {
            localStorage.setItem('isYearChosen', 'true');
            localStorage.setItem('selectedYear', selectedYear);
        } else {
            localStorage.removeItem('isYearChosen');
            localStorage.removeItem('selectedYear');
        }
        if (isActivated) {
            localStorage.setItem('isActivated', 'true');
        } else {
            localStorage.removeItem('isActivated');
        }

        updateHeaderWithUserData(userProfile);

        // ✅ --- استعادة حالة الكويز أو الصفحة ---
        const savedQuizState = localStorage.getItem('quizState');
        if (savedQuizState) {
            console.log("Restoring quiz state...");
            try {
                const { savedProQuiz, savedProQuestionIndex, savedProUserAnswers, savedQuizStartTime } = JSON.parse(savedQuizState);
                // Restore quiz variables
                proQuiz = savedProQuiz;
                proQuestionIndex = savedProQuestionIndex;
                proUserAnswers = savedProUserAnswers;
                quizStartTime = savedQuizStartTime; // Restore start time

                // Check if restored data is valid
                if (proQuiz && proQuiz.questions && proQuiz.questions.length > proQuestionIndex) {
                    quizLessonNameEl.textContent = proQuiz.title || 'Quiz';
                    quizSubjectNameEl.textContent = proQuiz.subjectName || ''; // Restore subject name too

                    renderQuestionList(); // Render the list based on restored answers
                    renderCurrentQuestion(); // Render the specific question index
                    updateStats(); // Update stats display

                    showPage('#quiz-taking-page'); // Show the quiz page directly
                    console.log("Quiz state restored successfully.");
                    return; // Stop further UI updates if quiz is restored
                } else {
                    console.error("Invalid quiz state data found. Clearing.");
                    localStorage.removeItem('quizState'); // Clear invalid state
                }
            } catch (e) {
                console.error("Error parsing quiz state:", e);
                localStorage.removeItem('quizState'); // Clear corrupted state
            }
        }

        // If no quiz state, proceed with normal UI update (which restores last page or shows home)
        updateUI();

    } else {
        // If fetchUserProfile fails (e.g., token invalid), logout
        logoutUser();
    }
}

// --- دالة التحقق من التوكن ---
async function checkForAuthToken() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
        console.log("Token found in URL, setting up new session...");
        // Store the new token
        localStorage.setItem('userToken', token);
        // Clear potentially outdated state from previous sessions
        localStorage.removeItem('isYearChosen');
        localStorage.removeItem('selectedYear');
        localStorage.removeItem('isActivated');
        localStorage.removeItem('currentPageId'); // Clear last page
        localStorage.removeItem('quizState'); // Clear any old quiz state
        localStorage.removeItem('currentContentType'); // Clear content type
        // Remove token from URL for security
        window.history.replaceState({}, document.title, window.location.pathname);
        showNotification('Successfully signed in!', 'success');
        // Initialize app with the new token
        await initializeApp();
    } else if (localStorage.getItem('userToken')) {
        console.log("Token found in localStorage. Restoring session.");
        // Initialize app using existing token
        await initializeApp();
    } else {
        console.log("No token found. Redirecting to login page.");
        // Redirect to login if no token anywhere
        window.location.href = 'login.html';
    }
}

// --- تفعيل خلفية tsParticles ---
if (typeof tsParticles !== 'undefined') {
    tsParticles.load("tsparticles", {
        // Your particles config here...
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
        // Pause initially if quiz page is loaded directly
        const activePage = document.querySelector('.page-section.active');
        if (activePage && (activePage.id === 'quiz-taking-page' || activePage.id === 'quiz-summary-page')) {
            particlesInstance.pause();
        }
    }).catch(error => {
        console.error("tsParticles load error:", error);
    });

    // Handle visibility change
    document.addEventListener("visibilitychange", () => {
        if (!particlesInstance) return;
        if (document.hidden) {
            particlesInstance.pause();
        } else {
            // Only play if not on quiz pages
            const activePage = document.querySelector('.page-section.active');
            if (!activePage || (activePage.id !== 'quiz-taking-page' && activePage.id !== 'quiz-summary-page')) {
                particlesInstance.play();
            }
        }
    });
}


// --- [كامل] قاعدة بيانات المواد مع الأيقونات (Keep as is) ---
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
// const mainNav = document.querySelector('.main-nav'); // Already defined earlier
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
// ✅ --- عناصر القائمة المنسدلة للمستخدم ---
const userMenuToggle = document.getElementById('user-menu-toggle');
const userDropdown = document.getElementById('user-dropdown');
const logoutBtn = document.getElementById('logout-btn');


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
const skipPomodoroBtn = document.getElementById('skip-btn'); // Renamed to avoid confusion
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
const radius = progressRingFg ? progressRingFg.r.baseVal.value : 0; // Added check
const circumference = 2 * Math.PI * radius;
if (progressRingFg) progressRingFg.style.strokeDasharray = `${circumference} ${circumference}`;

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
    if (themeToggleBtn) themeToggleBtn.innerHTML = theme === 'dark-mode' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

// ✨ ================== NEW/UPDATED FUNCTIONS START ================== ✨
// دالة جديدة مخصصة لزر البطاقة الترحيبية
function handleStartFirstQuiz() {
    // 1. تعيين نوع المحتوى إلى "كويزات"
    currentContentType = 'quizzes';
    localStorage.setItem('currentContentType', currentContentType); // ✅ حفظ النوع

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
        // Using fetchApi helper
        const data = await fetchApi('/api/user/widget-data');

        if (data.hasActivity) {
            // ✅  الحالة 1: المستخدم لديه نشاط - عرض لوحة الإحصائيات
            statsContainer.style.display = 'grid'; // Use grid for stats

            const { lastQuiz } = data;

            // ملء البيانات الديناميكية من الباك اند (with checks for element existence)
            const lastLessonTitleEl = document.getElementById('stats-last-lesson-title');
            const lastLessonModuleEl = document.getElementById('stats-last-lesson-module');
            const quizzesCorrectEl = document.getElementById('stats-quizzes-correct');
            const quizzesIncorrectEl = document.getElementById('stats-quizzes-incorrect');
            const quizzesTimeEl = document.getElementById('stats-quizzes-time');
            const badgeImg = document.getElementById('achievement-badge-img');
            const badgeText = document.getElementById('achievement-badge-text');

            if (lastLessonTitleEl) lastLessonTitleEl.textContent = lastQuiz.quizTitle || 'N/A';
            if (lastLessonModuleEl) lastLessonModuleEl.textContent = lastQuiz.subjectName || 'N/A';
            if (quizzesCorrectEl) quizzesCorrectEl.textContent = lastQuiz.correctAnswers ?? '0';
            if (quizzesIncorrectEl) quizzesIncorrectEl.textContent = lastQuiz.incorrectAnswers ?? '0';

            if (quizzesTimeEl && lastQuiz.timeTaken != null) {
                const minutes = Math.floor(lastQuiz.timeTaken / 60);
                const seconds = lastQuiz.timeTaken % 60;
                quizzesTimeEl.textContent = `${minutes}m ${seconds}s`;
            } else if (quizzesTimeEl) {
                quizzesTimeEl.textContent = 'N/A';
            }

            if (lastQuiz.badge) { // Check if badge exists
                if (badgeImg) {
                    badgeImg.src = lastQuiz.badge.imageUrl || 'images/badge-default.png'; // Default image
                    badgeImg.alt = lastQuiz.badge.name || 'Badge';
                }
                if (badgeText) {
                    const badgeName = lastQuiz.badge.name || "";
                    if (badgeName.includes('Gold')) badgeText.textContent = "Excellent!";
                    else if (badgeName.includes('Silver')) badgeText.textContent = "Well Done!";
                    else badgeText.textContent = "Good Effort!";
                }
            } else {
                // Handle case where no badge is returned
                if (badgeImg) badgeImg.style.display = 'none'; // Hide image area
                if (badgeText) badgeText.textContent = "Keep Going!";
            }

        } else {
            // ❌  الحالة 2: المستخدم جديد - عرض البطاقة الترحيبية
            welcomeContainer.style.display = 'block'; // Show welcome card

            const welcomeButton = document.getElementById('welcome-start-quiz-btn');
            if (welcomeButton) {
                // Ensure listener is attached only once
                if (!welcomeButton.dataset.listenerAttached) {
                    welcomeButton.addEventListener('click', handleStartFirstQuiz);
                    welcomeButton.dataset.listenerAttached = 'true';
                }
            }
        }
    } catch (error) {
        console.error("Error rendering home page widget:", error);
        showNotification('Could not load home page data.', 'error');
        // Fallback: show welcome card if API fails
        statsContainer.style.display = 'none';
        welcomeContainer.style.display = 'block';
        const welcomeButton = document.getElementById('welcome-start-quiz-btn');
        if (welcomeButton && !welcomeButton.dataset.listenerAttached) {
            welcomeButton.addEventListener('click', handleStartFirstQuiz);
            welcomeButton.dataset.listenerAttached = 'true';
        }
    }
}
// ✨ =================== NEW/UPDATED FUNCTIONS END ==================== ✨

// ✅ --- (تعديل) دالة عرض الصفحات مع حفظ الحالة ---
function showPage(targetId) {
    // Hide all page sections first
    pageSections.forEach(section => section.classList.remove('active'));

    const targetPage = document.querySelector(targetId);

    if (targetPage) {
        targetPage.classList.add('active');
        localStorage.setItem('currentPageId', targetId); // ✅ حفظ الصفحة الحالية

        // Specific actions for certain pages
        if (targetId === '#home-page') {
            renderHomePageWidget();
        } else if (targetId === '#subjects-page' && selectedYear) { // Ensure year is selected
            animateCarouselAssembly(selectedYear);
        } else if (targetId === '#dashboard-page') {
            fetchAndDisplayDashboardData(); // Fetch data when dashboard is shown
        } else if (targetId === '#flashcards-page') {
            fetchAndDisplayCollections(); // Fetch collections when flashcards page is shown
        }

        // Pause/Play particles based on the page
        if (particlesInstance) {
            if (targetId === '#quiz-taking-page' || targetId === '#quiz-summary-page') {
                particlesInstance.pause();
            } else {
                particlesInstance.play();
            }
        }

        // Update active link in navigation
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            const linkPageType = link.dataset.pageType;
            let isActive = false;

            if (linkPageType) { // For content type links (Summaries, Quizzes, Lessons)
                // Activate if the target is subjects, content list, lessons list, or pdf list AND content type matches
                if ((targetId === '#subjects-page' || targetId === '#content-display-page' || targetId === '#lessons-display-page' || targetId === '#pdfs-display-page') && linkPageType === currentContentType) {
                    isActive = true;
                }
            } else { // For direct page links (Home, Dashboard, Flashcards)
                if (linkHref === targetId) {
                    isActive = true;
                }
            }
            link.classList.toggle('active-link', isActive);
        });

        // Trigger scroll reveal animations for the newly displayed page
        setTimeout(() => triggerScrollReveal(targetPage), 50); // Small delay

    } else {
        console.error(`Page with ID ${targetId} not found.`);
        // Fallback: If target page doesn't exist, show home page
        const homePage = document.querySelector('#home-page');
        if (homePage) {
            homePage.classList.add('active');
            localStorage.setItem('currentPageId', '#home-page');
            renderHomePageWidget();
        }
    }
}

function startTypingAnimation(element) {
    if (!element || typingAnimationTriggered) return;
    typingAnimationTriggered = true;
    const text = element.dataset.text;
    if (!text) return;
    let i = 0;
    element.innerHTML = ""; // Clear content before typing
    const speed = 100; // Typing speed in ms

    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            element.classList.add('typing-complete'); // Add class when done
        }
    }
    typeWriter(); // Start the typing
}

function setupScrollReveal(elements) {
    // Ensure IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        console.warn("IntersectionObserver not supported, animations disabled.");
        // Optionally, make elements visible immediately
        elements.forEach(element => element.classList.add('fade-in'));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Special handling for typing animation
                if (entry.target.contains(typingHeadline)) {
                    // Delay typing start slightly after fade-in
                    setTimeout(() => startTypingAnimation(typingHeadline), 300);
                }
                currentObserver.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% is visible

    elements.forEach(element => {
        element.classList.remove('fade-in'); // Ensure it starts hidden
        observer.observe(element);
    });
}

function triggerScrollReveal(pageElement) {
    if (pageElement) {
        // Find all elements within the page that need revealing
        setupScrollReveal(pageElement.querySelectorAll('.scroll-reveal-element'));
    }
}

// --- الشات والـ AI (Keep largely as is, ensure fetchApi is used where appropriate) ---
function addMessageToChat(message, senderClass, rawMessageContent) {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message-wrapper', `${senderClass}-wrapper`);
    // Store raw message for actions like copy, summarize
    messageWrapper.dataset.rawMessage = rawMessageContent !== undefined ? rawMessageContent : message;

    const p = document.createElement('p');
    p.classList.add(senderClass);

    // Sanitize AI messages rendered as HTML
    if (senderClass === 'ai-message') {
        if (typeof marked !== 'undefined' && typeof DOMPurify !== 'undefined') {
            // Ensure message is a string before parsing
            const messageString = String(message || '');
            p.innerHTML = DOMPurify.sanitize(marked.parse(messageString));
        } else {
            p.textContent = message; // Fallback to text content
        }
    } else {
        p.textContent = message; // User messages as plain text
    }
    messageWrapper.appendChild(p);

    // --- Message Actions (Copy, Summarize, Pin) ---
    const messageActions = document.createElement('div');
    messageActions.className = 'message-actions';

    // Copy Button (for all messages)
    const copyBtn = document.createElement('button');
    copyBtn.title = 'Copy Text';
    copyBtn.innerHTML = '<i class="far fa-copy"></i>';
    copyBtn.onclick = () => {
        // Use raw message from dataset for accurate copying
        navigator.clipboard.writeText(messageWrapper.dataset.rawMessage)
            .then(() => showNotification('Copied!', 'success'))
            .catch(err => {
                console.error('Failed to copy text: ', err);
                showNotification('Copy failed!', 'error');
            });
    };
    messageActions.appendChild(copyBtn);

    // Actions specific to AI messages
    if (senderClass === 'ai-message') {
        const summarizeBtn = document.createElement('button');
        summarizeBtn.title = 'Summarize this';
        summarizeBtn.innerHTML = '<i class="fas fa-stream"></i>'; // Icon for summarize
        summarizeBtn.onclick = () => summarizeMessage(messageWrapper.dataset.rawMessage);
        messageActions.appendChild(summarizeBtn);

        const pinBtn = document.createElement('button');
        pinBtn.title = 'Pin this message';
        pinBtn.innerHTML = '<i class="fas fa-thumbtack"></i>'; // Icon for pin
        pinBtn.onclick = () => pinMessage(messageWrapper.dataset.rawMessage);
        messageActions.appendChild(pinBtn);
    }

    // Position actions differently for user vs AI messages
    if (senderClass === 'user-message') {
        messageWrapper.insertBefore(messageActions, p); // Actions before user message
    } else {
        messageWrapper.appendChild(messageActions); // Actions after AI message
    }

    chatMessagesDiv.appendChild(messageWrapper);
    // Scroll to the bottom to show the new message
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;

    // Render MathJax/KaTeX if applicable for AI messages
    if (senderClass === 'ai-message' && typeof renderMathInElement === 'function') {
        renderMathInElement(p, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ]
        });
    }
    return p; // Return the paragraph element for potential further manipulation (like typing indicator)
}

async function summarizeMessage(textToSummarize) {
    if (!textToSummarize || textToSummarize.trim() === '') {
        showNotification('Nothing to summarize.', 'info');
        return;
    }
    showNotification('Summarizing...', 'info');
    // Construct the prompt clearly asking for summarization in bullet points
    const summaryPrompt = `Please summarize the following text into concise bullet points for a student, in the same language as the text:\n\n--- TEXT ---\n${textToSummarize}`;

    // Create a temporary history for this specific request
    // Don't modify the main chatHistory directly for utility functions
    const tempChatHistory = [...chatHistory, { role: 'user', content: summaryPrompt }];

    // Call sendApiRequest with isMainConversation set to false
    sendApiRequest(tempChatHistory, false);
}

function pinMessage(textToPin) {
    if (pinnedMessageText && pinnedMessageBar) {
        pinnedMessageText.textContent = textToPin;
        pinnedMessageBar.style.display = 'block'; // Show the bar
        showNotification('Message pinned!', 'success');
    } else {
        console.error("Pin message elements not found.");
    }
}

async function sendChatMessage() {
    const userText = userChatInput.value.trim();
    if (!userText) return; // Don't send empty messages

    // Add user message to UI immediately
    addMessageToChat(userText, 'user-message');
    // Add user message to the conversation history
    chatHistory.push({ role: "user", content: userText });

    userChatInput.value = ''; // Clear the input field

    // Send the updated history to the API
    sendApiRequest(chatHistory, true); // true indicates it's part of the main conversation
}

async function sendApiRequest(historyToSend, isMainConversation) {
    // Disable input while waiting for response
    userChatInput.disabled = true;
    sendChatButton.disabled = true;

    // Add a temporary AI message with typing indicator
    const aiMessageContainer = addMessageToChat("", 'ai-message', ""); // Start with empty content
    aiMessageContainer.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight; // Ensure indicator is visible

    // Extract the last user question (or the utility prompt)
    const userQuestion = historyToSend[historyToSend.length - 1].content;

    try {
        // Use fetchApi helper for the request
        const data = await fetchApi('/api/ai/ask', {
            method: 'POST',
            body: JSON.stringify({ question: userQuestion })
        });

        const fullReply = data.answer; // Assuming the backend returns { answer: "..." }

        // Update the temporary message container with the actual AI reply
        if (typeof marked !== 'undefined' && typeof DOMPurify !== 'undefined') {
            aiMessageContainer.innerHTML = DOMPurify.sanitize(marked.parse(fullReply || ""));
        } else {
            aiMessageContainer.textContent = fullReply || ""; // Fallback
        }
        // Store the raw reply in the dataset for actions
        aiMessageContainer.parentElement.dataset.rawMessage = fullReply;

        // Add the AI response to the main chat history ONLY if it's part of the main conversation
        if (isMainConversation) {
            chatHistory.push({ role: "assistant", content: fullReply });
        }

        // Render math if necessary
        if (typeof renderMathInElement === 'function') {
            renderMathInElement(aiMessageContainer, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false }
                ]
            });
        }

    } catch (error) {
        console.error("AI Request Error:", error);
        // Display error message in the chat
        aiMessageContainer.textContent = `Sorry, an error occurred: ${error.message}`;
        // If it was a main conversation message that failed, remove the user's last message from history 
        // to allow them to retry potentially. (Optional, depends on desired UX)
        // if (isMainConversation) {
        //     chatHistory.pop(); 
        // }
    } finally {
        // Re-enable input fields regardless of success or failure
        userChatInput.disabled = false;
        sendChatButton.disabled = false;
        userChatInput.focus(); // Set focus back to input
        chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight; // Ensure final message/error is visible
    }
}

async function extractTextFromPdf(file) {
    // Check if pdfjsLib is loaded
    if (typeof pdfjsLib === 'undefined') {
        showNotification("PDF library not loaded. Cannot process PDF.", "error");
        throw new Error("PDF processing library is not loaded.");
    }
    // Ensure workerSrc is set (adjust path if needed)
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js`;

    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onload = async (event) => {
            try {
                const pdfData = new Uint8Array(event.target.result);
                const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
                let fullText = '';

                // Iterate through all pages
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    // Join text items, handling potential undefined items gracefully
                    fullText += textContent.items.map(item => item?.str || '').join(' ') + '\n\n';
                }
                resolve(fullText.trim()); // Trim whitespace from the final result
            } catch (error) {
                console.error("PDF Parsing Error:", error);
                reject("Failed to parse the PDF file.");
            }
        };
        reader.onerror = (error) => {
            console.error("File Reading Error:", error);
            reject("Error reading the PDF file.");
        };
        // Read the file as ArrayBuffer
        reader.readAsArrayBuffer(file);
    });
}

// --- Gemini API Calls (Image & Audio) ---
async function sendDataAndPromptToGemini(endpoint, prompt, file, fileType = 'image') {
    // Add user message indicating the action
    addMessageToChat(`Analyzing ${fileType}: "${prompt}"`, 'user-message');

    // Add AI typing indicator
    const aiMsg = addMessageToChat("", 'ai-message');
    aiMsg.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;

    const formData = new FormData();
    formData.append('prompt', prompt);
    formData.append(fileType, file); // Use dynamic key 'image' or 'audio'

    try {
        // Use fetchApi helper for the request
        const data = await fetchApi(endpoint, {
            method: 'POST',
            // Content-Type is set automatically for FormData by the browser
            headers: {}, // Remove Content-Type header
            body: formData
        });

        const aiReply = data.answer; // Assuming backend returns { answer: "..." }

        // Update UI with the AI response
        if (typeof marked !== 'undefined' && typeof DOMPurify !== 'undefined') {
            aiMsg.innerHTML = DOMPurify.sanitize(marked.parse(aiReply || ""));
        } else {
            aiMsg.textContent = aiReply || ""; // Fallback
        }
        aiMsg.parentElement.dataset.rawMessage = aiReply; // Store raw message

        // Render math if needed
        if (typeof renderMathInElement === 'function') {
            renderMathInElement(aiMsg, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false }
                ]
            });
        }

    } catch (error) {
        console.error(`${fileType.charAt(0).toUpperCase() + fileType.slice(1)} Analysis Error:`, error);
        aiMsg.textContent = `Error analyzing ${fileType}: ${error.message}`;
    } finally {
        chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight; // Scroll to final message/error
    }
}

// Wrapper functions for specific file types
async function sendImageAndPromptToGemini(prompt, imageFile) {
    await sendDataAndPromptToGemini('/api/gemini/image', prompt, imageFile, 'image');
}

async function sendAudioAndPromptToGemini(prompt, audioFile) {
    await sendDataAndPromptToGemini('/api/gemini/audio', prompt, audioFile, 'audio');
}

// --- Carousel Logic ---


// ✅ --- الدالة الجديدة لبناء شبكة الأسنان (Tooth Grid) ---
// ✅ --- الدالة الجديدة لبناء شبكة الأسنان (Tooth Grid) ---
function animateCarouselAssembly(year) {
    const subjectsGrid = document.getElementById('subjects-grid');
    if (!subjectsGrid) return;

    subjectsGrid.innerHTML = ''; // تنظيف المحتوى السابق

    // جلب المواد للسنة المختارة
    const subjects = subjectsDatabase[year] || [];

    if (subjects.length === 0) {
        subjectsGrid.innerHTML = '<p>No subjects available for this year yet.</p>';
        return;
    }

    subjects.forEach((subject, i) => {
        const card = document.createElement('div');
        card.className = 'tooth-subject-card';
        card.dataset.subjectKey = subject.key;

        // --- شرط تصغير الخط (13 حرفاً أو أكثر) ---
        let textClass = 'tooth-card-name';

        // يشمل PHARMACOLOGIE و PATHOLOGIE BUCCO-DENTAIRE
        if (subject.name.length >= 12) {
            textClass += ' long-text';
        }

        // ✅ الترتيب المطلوب: الأيقونة أولاً (في الأعلى)، ثم النص (تحت)
        card.innerHTML = `
            <img src="ICONS/${subject.icon || 'default-icon.png'}" alt="${subject.name}" class="tooth-card-subject-icon">
            <h4 class="${textClass}">${subject.name}</h4>
        `;

        // تأثير بسيط لتتابع ظهور البطاقات
        card.style.animationDelay = `${i * 0.05}s`;

        // إضافة مستمع النقر
        card.addEventListener('click', () => {
            if (currentContentType === 'lessons') {
                showLessonListForSubject(subject.key);
            }
            // ✅ إضافة: دعم Smart Study
            else if (currentContentType === 'smart-study') {
                showLessonListForSubject(subject.key);
            }
            else if (currentContentType === 'summaries' || currentContentType === 'quizzes') {
                showContentListForSubject(subject.key, currentContentType);
            }
            else {
                // الافتراضي: الدروس
                currentContentType = 'lessons';
                const lessonsLink = document.querySelector('a[data-page-type="lessons"]');
                if (lessonsLink) lessonsLink.classList.add('active-link');
                showLessonListForSubject(subject.key);
            }
        });

        subjectsGrid.appendChild(card);
    });
}

// --- عرض قائمة المحتوى (ملخصات وكويزات) ---
async function showContentListForSubject(subjectKey, contentType) {
    const subjectData = (subjectsDatabase[selectedYear] || []).find(s => s.key === subjectKey);
    if (!subjectData) {
        console.error(`Subject data not found for key: ${subjectKey}`);
        return;
    }

    const contentTitle = document.getElementById('content-title');
    const contentListContainer = document.getElementById('content-list');

    // Set title and show loading state
    contentTitle.textContent = `${subjectData.name} ${contentType.charAt(0).toUpperCase() + contentType.slice(1)}`;
    contentListContainer.innerHTML = '<p>Loading content...</p>';
    showPage('#content-display-page'); // Navigate to the content list page

    let contentItems = [];
    try {
        // Fetch subjects for the year to get the subject ID
        const subjectsInYear = await fetchSubjectsByYear(selectedYear);
        const currentSubject = subjectsInYear.find(s => s.key === subjectKey);

        if (currentSubject && currentSubject._id) { // Ensure subject and its ID exist
            if (contentType === 'summaries') {
                // Fetch summaries using the API helper
                contentItems = await fetchSummariesBySubject(currentSubject._id);
            } else if (contentType === 'quizzes') {
                // Fetch quizzes using the API helper
                contentItems = await fetchApi(`/api/content/quizzes/subject/${currentSubject._id}`);
            }
            // Add more content types here if needed (e.g., 'videos')
        } else {
            throw new Error(`Subject ID not found for key: ${subjectKey}`);
        }
    } catch (error) {
        console.error(`Failed to fetch ${contentType}:`, error);
        showNotification(`Could not load ${contentType}. ${error.message}`, 'error');
        contentListContainer.innerHTML = `<p>Error loading content. Please try again later.</p>`;
        return; // Stop execution if fetching fails
    }

    // Render the fetched content items
    contentListContainer.innerHTML = ''; // Clear loading message
    if (contentItems && contentItems.length > 0) {
        contentItems.forEach(item => {
            const link = document.createElement('a');
            link.className = 'content-item';

            if (contentType === 'summaries' && item.filePath) {
                // ❌ القديم (احذفه):
                // const serverUrl = 'http://localhost:5000';

                // ✅ الجديد (ضعه مكانه): رابط موقعك على Render
                const serverUrl = 'https://dental-app-he1p.onrender.com';

                // نتأكد أن المسار يبدأ بـ / لضمان دمج صحيح
                const filePath = item.filePath.startsWith('/') ? item.filePath : '/' + item.filePath;

                // بناء الرابط الكامل
                const fullPath = `${serverUrl}${filePath}`;

                link.href = buildPdfViewerUrl(fullPath);
                link.target = "_blank";
                link.innerHTML = `<i class="fas fa-book-open"></i><span>${item.title || 'Summary'}</span>`;
            } else if (contentType === 'quizzes' && item._id) {
                link.innerHTML = `<i class="fas fa-question-circle"></i><span>${item.title || 'Quiz'}</span>`;
                link.href = '#'; // Prevent default link behavior
                link.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent page jump
                    startQuiz(item._id); // Start the quiz using its ID
                });
            } else {
                // Handle items with missing data or unknown types
                console.warn("Skipping item with missing data:", item);
                return; // Skip this item
            }
            contentListContainer.appendChild(link);
        });
    } else {
        // Display message if no content is available
        contentListContainer.innerHTML = `<p>No ${contentType} available for this subject yet.</p>`;
    }
}

// ✅ --- النسخة الجديدة والمحسنة ---
// الصق هذا الكود الجديد بالكامل

// 1. الدالة الجديدة لعرض قائمة الدروس
async function showLessonListForSubject(subjectKey) {
    const subjectData = (subjectsDatabase[selectedYear] || []).find(s => s.key === subjectKey);
    if (!subjectData) {
        console.error(`Subject data not found for key: ${subjectKey}`);
        return;
    }

    const contentTitle = document.getElementById('content-title');
    const contentListContainer = document.getElementById('content-list');

    // Update title based on mode
    const modeTitle = currentContentType === 'smart-study' ? 'Smart Study' : 'Lessons';
    contentTitle.textContent = `${subjectData.name} - ${modeTitle}`;

    contentListContainer.innerHTML = ''; // تنظيف

    // ✅ [حصري لـ Smart Study] إضافة زر "رفع درس جديد"
    if (currentContentType === 'smart-study') {
        const uploadContainer = document.createElement('div');
        uploadContainer.style.marginBottom = '20px';
        uploadContainer.style.textAlign = 'center';

        const uploadBtn = document.createElement('button');
        uploadBtn.className = 'btn primary-btn';
        uploadBtn.style.width = '100%';
        uploadBtn.style.padding = '15px';
        uploadBtn.style.fontSize = '1.1rem';
        uploadBtn.innerHTML = `<i class="fas fa-cloud-upload-alt"></i> Upload New PDF to ${subjectData.name}`;

        uploadBtn.onclick = () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'application/pdf';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const fileURL = URL.createObjectURL(file);
                    // فتح العارض في نافذة جديدة
                    window.open(`pdf-viewer.html?src=${encodeURIComponent(fileURL)}`, '_blank');
                }
            };
            input.click();
        };

        uploadContainer.appendChild(uploadBtn);
        contentListContainer.appendChild(uploadContainer);

        // فاصل
        const divider = document.createElement('div');
        divider.innerHTML = '<p style="color:#888; margin: 10px 0;">— Saved Lessons —</p>';
        divider.style.textAlign = 'center';
        contentListContainer.appendChild(divider);
    } else {
        contentListContainer.innerHTML = '<p>Loading lessons...</p>';
    }

    showPage('#content-display-page');

    let lessons = [];
    try {
        // Fetch subjects to get the ID
        const subjectsFromDB = await fetchSubjectsByYear(selectedYear);
        const subjectFromDB = subjectsFromDB.find(s => s.key === subjectKey);

        if (subjectFromDB && subjectFromDB._id) {
            // Fetch lessons for the specific subject ID
            lessons = await fetchLessonsBySubject(subjectFromDB._id);
        } else {
            throw new Error(`Subject ID not found for key: ${subjectKey}`);
        }
    } catch (e) {
        console.error("Error loading lessons:", e);
        showNotification(`Could not load lessons. ${e.message}`, 'error');
        contentListContainer.innerHTML = `<p>Error loading lessons.</p>`;
        return; // Stop if loading fails
    }

    // Render the list of lessons
    contentListContainer.innerHTML = ''; // Clear loading message
    if (lessons && lessons.length > 0) {
        lessons.forEach(lesson => {
            const link = document.createElement('a');
            link.className = 'content-item'; // Use the same styling as other content items
            link.href = '#'; // Prevent default navigation
            link.innerHTML = `<i class="fas fa-folder-open"></i><span>${lesson.title || 'Lesson'}</span>`;

            // Add click listener to show PDFs for this lesson
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent page jump
                showPdfsForLesson(lesson, subjectKey); // Pass subjectKey for back navigation
            });

            contentListContainer.appendChild(link);
        });
    } else {
        contentListContainer.innerHTML = `<p>No lessons available for this subject yet.</p>`;
    }
}

// 2. الدالة الجديدة لعرض ملفات PDF لدرس معين
function showPdfsForLesson(lesson, subjectKey) { // Added subjectKey parameter
    const pdfsTitle = document.getElementById('pdfs-lesson-title');
    const pdfsListContainer = document.getElementById('pdfs-list');

    if (!pdfsTitle || !pdfsListContainer) {
        console.error("PDF display elements not found.");
        return;
    }

    pdfsTitle.textContent = lesson.title || 'Lesson PDFs'; // Set the title for the PDF list page
    pdfsListContainer.innerHTML = ''; // Clear previous PDFs

    if (lesson.filePaths && lesson.filePaths.length > 0) {
        lesson.filePaths.forEach(filePath => {
            if (!filePath) return; // Skip empty file paths

            const link = document.createElement('a');
            link.className = 'content-item'; // Use consistent styling

            // Generate the URL for the PDF viewer page
            const viewerUrl = `pdf-viewer.html?src=${encodeURIComponent(filePath)}`;
            link.href = viewerUrl;
            link.target = "_blank"; // Open PDF viewer in a new tab

            // Extract filename for display, remove .pdf extension
            const fileName = filePath.split('/').pop().replace(/\.pdf$/i, '');
            link.innerHTML = `<i class="fas fa-file-pdf"></i><span>${fileName || 'PDF Document'}</span>`;

            pdfsListContainer.appendChild(link);
        });
    } else {
        pdfsListContainer.innerHTML = '<p>No PDF files found for this lesson.</p>';
    }

    // Setup the back button to return to the lesson list (content-display-page)
    const backToLessonsBtn = document.getElementById('back-to-lessons-btn');
    if (backToLessonsBtn) {
        // Re-attach listener to ensure it goes back to the correct lesson list
        backToLessonsBtn.onclick = () => showLessonListForSubject(subjectKey);
    }

    showPage('#pdfs-display-page'); // Navigate to the PDF list page
}
// ===================================================================
// === [النسخة النهائية] منطق الكويز الاحترافي ---
// ===================================================================
let proQuiz = null; // Holds the current quiz data
let proQuestionIndex = 0; // Index of the currently displayed question
let proUserAnswers = []; // Array to store user answers { selectedIndexes: [], isCorrect: bool }
let quizTimerInterval = null; // Interval ID for the question timer
let quizStartTime = 0; // Timestamp when the quiz started

// DOM Elements for Quiz UI
const quizQuestionNumbersContainer = document.getElementById('quiz-question-numbers-pro');
const quizSubjectNameEl = document.getElementById('quiz-subject-name-pro');
const quizLessonNameEl = document.getElementById('quiz-lesson-name-pro');
const quizTimerDisplay = document.getElementById('quiz-timer-display-pro');
const quizTimerContainer = document.querySelector('.quiz-timer-pro');
const quizProgressEl_pro = document.getElementById('quiz-progress-pro');
const quizQuestionTextEl_pro = document.getElementById('quiz-question-text-pro');
const quizOptionsContainer_pro = document.getElementById('quiz-options-container-pro');
const quizExplanationContainer = document.getElementById('quiz-explanation-container-pro');
const quizExplanationText = document.getElementById('quiz-explanation-text-pro');
const quizPrevBtn = document.getElementById('quiz-prev-btn-pro');
const quizActionBtn = document.getElementById('quiz-action-btn-pro'); // Check Answer button
const quizNextBtn_pro = document.getElementById('quiz-next-btn-pro'); // Next/Finish button
const quizSkipBtn = document.getElementById('quiz-skip-btn-pro'); // ✅ Skip button
const quizCorrectCountEl = document.getElementById('quiz-correct-count-pro');
const quizIncorrectCountEl = document.getElementById('quiz-incorrect-count-pro');
const quizScoreEl = document.getElementById('quiz-score-pro');
const toggleQuizTimerBtn = document.getElementById('toggle-quiz-timer-btn'); // Timer toggle


// =======================================================
// START: MODIFIED submitQuizResults FUNCTION
// =======================================================
// في ملف script.js
// ✅ استبدل هذه الدالة بالكامل
async function submitQuizResults() {
    clearInterval(quizTimerInterval); // Stop the timer if running
    quizTimerInterval = null;
    const timeTakenInSeconds = Math.round((Date.now() - quizStartTime) / 1000);

    // Filter out only the incorrectly answered questions for the payload
    const incorrectQuestionsPayload = proUserAnswers.map((answer, index) => {
        // Check if answer exists and is incorrect
        if (answer && answer.isCorrect === false) {
            const questionData = proQuiz.questions[index];
            // Ensure questionData exists before accessing properties
            if (!questionData) return null;
            return {
                questionText: questionData.questionText || questionData.question,
                options: questionData.options || [],
                correctOptionIndexes: questionData.correctOptionIndexes || [],
                explanation: questionData.explanation || '',
                userSelectedIndexes: answer.selectedIndexes || [] // Use stored selected indexes
            };
        }
        return null; // Return null for correct or unanswered questions
    }).filter(q => q !== null); // Remove null entries

    // Calculate correct count and score
    const totalQuestions = proQuiz.questions.length;
    // Count answers that are explicitly marked as correct
    const correctCount = proUserAnswers.filter(a => a && a.isCorrect === true).length;
    const score = totalQuestions > 0 ? (correctCount / totalQuestions) * 20 : 0;

    // Prepare payload for all user answers (answered questions only)
    const allUserAnswersPayload = proUserAnswers.map((answer, index) => {
        if (answer) { // Only include questions that have an answer object
            return {
                questionIndex: index,
                selectedIndexes: answer.selectedIndexes || [] // Include selected indexes
            };
        }
        return null;
    }).filter(a => a !== null); // Filter out unanswered questions

    // Construct the final result payload to send to the backend
    const resultPayload = {
        // Use quiz ID, handle different types (normal, AI, mistakes)
        quizId: proQuiz._id || 'unknown-quiz',
        score: parseFloat(score.toFixed(2)),
        timeTaken: timeTakenInSeconds,
        correctAnswers: correctCount,
        totalQuestions: totalQuestions,
        incorrectQuestions: incorrectQuestionsPayload,
        // Ensure subject ID exists before sending
        subjectId: proQuiz.subject || null,
        allUserAnswers: allUserAnswersPayload
    };

    // Display the summary page immediately
    showQuizSummaryPage(resultPayload, proQuiz.subject);
    localStorage.removeItem('quizState'); // ✅ Clear saved quiz state after finishing

    // Attempt to save results to backend if it's a standard quiz with a subject ID
    if (proQuiz.subject && !proQuiz._id.startsWith('ai-generated-') && !proQuiz._id.startsWith('mistakes_')) {
        try {
            const savedResultWithXP = await fetchApi('/api/results', {
                method: 'POST',
                body: JSON.stringify(resultPayload)
            });

            // Update XP display and show notifications based on response
            if (savedResultWithXP && savedResultWithXP.totalXP != null) {
                document.getElementById('user-xp-display').textContent = `${savedResultWithXP.totalXP} XP`;
                showNotification(`+${savedResultWithXP.earnedXP || 0} XP earned!`, 'success');
                if (savedResultWithXP.newBadge) {
                    showNewBadgePopup(savedResultWithXP.newBadge);
                }
            }
        } catch (error) {
            // Notify user about failure to save progress
            showNotification(`Failed to save progress: ${error.message}`, 'error');
            console.error("Error saving quiz results:", error);
        }
    } else {
        // Notify if results weren't saved (AI quiz, mistakes quiz, or missing subject)
        let reason = !proQuiz.subject ? 'quiz subject is missing' : 'it\'s an AI or mistakes review quiz';
        showNotification(`Result displayed, but not saved (${reason}).`, 'info');
    }
}


// =======================================================
// END: MODIFIED submitQuizResults FUNCTION
// =======================================================

// --- دالة إظهار نافذة الوسام الجديد ---
function showNewBadgePopup(badge) {
    // Find elements and ensure they exist
    const nameEl = document.getElementById('badge-popup-name');
    const descEl = document.getElementById('badge-popup-desc');
    const imgEl = document.getElementById('badge-popup-img'); // Get the image element too
    const overlay = document.getElementById('badge-popup-overlay');
    const closeBtn = document.getElementById('badge-popup-close');

    if (!nameEl || !descEl || !imgEl || !overlay || !closeBtn || !badge) {
        console.error("Badge popup elements or badge data missing.");
        return;
    }

    // Populate popup content
    nameEl.textContent = badge.name || 'New Badge!';
    descEl.textContent = badge.description || 'You unlocked a new achievement!';
    imgEl.src = badge.imageUrl || 'images/badge-default.png'; // Set image source
    imgEl.alt = badge.name || 'Achievement Badge';

    // Display the overlay
    overlay.classList.add('show');

    // Add event listener to the close button (ensure it's added only once)
    if (!closeBtn.dataset.listenerAttached) {
        closeBtn.onclick = () => {
            overlay.classList.remove('show');
        };
        closeBtn.dataset.listenerAttached = 'true'; // Mark as attached
    }
}

// =======================================================
// START: MODIFIED showQuizSummaryPage FUNCTION
// =======================================================
// ✅ FIX 3.3: تعديل الدالة لاستقبال معرّف المادة
function showQuizSummaryPage(resultData, subjectId) {
    // Get summary elements
    const summaryScoreEl = document.getElementById('summary-score');
    const summaryCorrectAnswersEl = document.getElementById('summary-correct-answers');
    const summaryTimeTakenEl = document.getElementById('summary-time-taken');
    const summaryBadgeImg = document.getElementById('summary-badge-img'); // Get badge image element

    // Populate summary metrics
    if (summaryScoreEl) summaryScoreEl.textContent = `${(resultData.score || 0).toFixed(2)} / 20`;
    if (summaryCorrectAnswersEl) summaryCorrectAnswersEl.textContent = `${resultData.correctAnswers} / ${resultData.totalQuestions}`;

    // Format time taken
    const minutes = Math.floor(resultData.timeTaken / 60);
    const seconds = resultData.timeTaken % 60;
    if (summaryTimeTakenEl) summaryTimeTakenEl.textContent = `${minutes}m ${seconds}s`;

    // Update badge based on score (example logic, adjust as needed)
    if (summaryBadgeImg) {
        let badgeSrc = 'images/badge-bronze.png'; // Default badge
        if (resultData.score >= 18) badgeSrc = 'images/badge-gold.png';
        else if (resultData.score >= 14) badgeSrc = 'images/badge-silver.png';
        summaryBadgeImg.src = badgeSrc;
        summaryBadgeImg.alt = badgeSrc.includes('gold') ? 'Gold Badge' : (badgeSrc.includes('silver') ? 'Silver Badge' : 'Bronze Badge');
    }

    // Display incorrect questions review section
    const incorrectQuestionsContainer = document.getElementById('incorrect-questions-summary');
    // ✅ FIX 3.4: تمرير معرّف المادة لعرض الأسئلة
    if (incorrectQuestionsContainer) { // Check if container exists
        displayReviewQuestions(incorrectQuestionsContainer, resultData.incorrectQuestions, subjectId);
    }

    // Display correct questions review section
    const correctQuestionsContainer = document.getElementById('correct-questions-summary');
    if (correctQuestionsContainer && proQuiz && proQuiz.questions) { // Check if container and quiz data exist
        // Filter questions that were answered correctly
        const correctQuestions = proQuiz.questions.filter((q, index) => {
            const answer = proUserAnswers[index];
            return answer && answer.isCorrect === true; // Check for explicit true
        }).map((q, index) => {
            // Map to include user's answer (which is the correct one)
            const originalIndex = proQuiz.questions.findIndex(origQ => origQ === q); // Find original index if needed
            const answer = proUserAnswers[originalIndex];
            return { ...q, userSelectedIndexes: answer ? answer.selectedIndexes : [] };
        });
        // ✅ FIX 3.4: تمرير معرّف المادة لعرض الأسئلة
        displayReviewQuestions(correctQuestionsContainer, correctQuestions, subjectId, true); // Pass true for correct questions
    }

    // Setup action buttons on the summary page
    const backBtn = document.getElementById('back-to-subjects-from-summary-btn');
    const retryBtn = document.getElementById('retry-quiz-btn');
    const exportBtn = document.getElementById('export-summary-pdf-btn');
    const saveQuizBtnSummary = document.getElementById('save-quiz-btn'); // Save button on summary

    if (backBtn) backBtn.onclick = () => showPage('#subjects-page');
    if (retryBtn) {
        retryBtn.onclick = () => {
            if (proQuiz && proQuiz._id && !proQuiz._id.startsWith('ai-generated-') && !proQuiz._id.startsWith('mistakes_')) {
                startQuiz(proQuiz._id); // Allow retry only for standard quizzes
            } else {
                showNotification("Cannot retry this type of quiz directly. Please generate a new one or review mistakes again.", "info");
            }
        };
        // Disable retry for AI/Mistakes quizzes
        retryBtn.disabled = !proQuiz || proQuiz._id.startsWith('ai-generated-') || proQuiz._id.startsWith('mistakes_');
    }

    if (exportBtn) {
        // Ensure listener is attached only once
        if (!exportBtn.dataset.listenerAttached) {
            exportBtn.onclick = () => {
                showNotification('Generating PDF, please wait...', 'info');
                // Use setTimeout to allow UI update before potentially blocking PDF generation
                setTimeout(() => {
                    try {
                        if (proQuiz) {
                            generateQuizSummaryPDF(resultData, proQuiz.title || 'Quiz Summary');
                        } else {
                            showNotification('Cannot generate PDF. Quiz data is missing.', 'error');
                        }
                    } catch (error) {
                        console.error("PDF Generation Error:", error);
                        showNotification('An error occurred while creating the PDF.', 'error');
                    }
                }, 50); // Short delay
            };
            exportBtn.dataset.listenerAttached = 'true';
        }
    }

    // Show/Hide Save Quiz button based on quiz type
    if (saveQuizBtnSummary) {
        if (proQuiz && proQuiz._id.startsWith('ai-generated-')) {
            saveQuizBtnSummary.style.display = 'block'; // Show for AI quizzes
            // Ensure listener is attached
            if (!saveQuizBtnSummary.dataset.listenerAttached) {
                attachSaveQuizListener(saveQuizBtnSummary);
                saveQuizBtnSummary.dataset.listenerAttached = 'true';
            }
        } else {
            saveQuizBtnSummary.style.display = 'none'; // Hide for non-AI quizzes
        }
    }

    showPage('#quiz-summary-page'); // Navigate to the summary page
}
// =======================================================
// END: MODIFIED showQuizSummaryPage FUNCTION
// =======================================================

// =======================================================
// START: MODIFIED displayReviewQuestions FUNCTION
// =======================================================
// في ملف script.js
// ✅ استبدل هذه الدالة بالكامل
function displayReviewQuestions(container, questions, subjectId, isCorrectSection = false) {
    if (!container) return; // Exit if container doesn't exist
    container.innerHTML = ''; // Clear previous content

    if (!questions || questions.length === 0) {
        const message = isCorrectSection ? 'You answered all questions incorrectly.' : 'No mistakes here. Well done!';
        container.innerHTML = `<p>${message}</p>`;
        return;
    }

    questions.forEach((q, index) => {
        // Basic validation for question object
        if (!q || !q.options || !q.correctOptionIndexes) {
            console.warn(`Skipping invalid question object at index ${index}:`, q);
            return;
        }

        const questionDiv = document.createElement('div');
        questionDiv.className = `review-q-summary ${isCorrectSection ? 'correct-q-summary' : 'incorrect-q-summary'}`;

        // Ensure options and indexes are valid before mapping
        const correctAnswersText = Array.isArray(q.correctOptionIndexes)
            ? q.correctOptionIndexes.map(i => q.options[i] || `[Option ${i + 1}]`).join(', ')
            : `[Invalid Correct Index: ${q.correctOptionIndexes}]`;

        const userAnswersText = (q.userSelectedIndexes && Array.isArray(q.userSelectedIndexes) && q.userSelectedIndexes.length > 0)
            ? q.userSelectedIndexes.map(i => q.options[i] || `[Option ${i + 1}]`).join(', ')
            : (isCorrectSection ? correctAnswersText : "No answer / Skipped"); // Show correct if in correct section

        // Build HTML for question details
        let detailsHtml = '';
        if (!isCorrectSection) { // Only show User Answer vs Correct Answer in the mistakes section
            detailsHtml = `<p><em>Your Answer:</em> <span class="user-answer">${userAnswersText}</span></p>
                                <p><em>Correct Answer:</em> <span class="correct-answer">${correctAnswersText}</span></p>`;
        } else { // In the correct section, just show the answer
            detailsHtml = `<p><em>Answer:</em> <span class="correct-answer">${correctAnswersText}</span></p>`;
        }

        const questionText = q.questionText || q.question || `Question ${index + 1}`; // Fallback text

        // Construct the inner HTML for the question review item
        questionDiv.innerHTML = `
                <div class="review-q-text">
                    <p><strong>Q:</strong> ${questionText}</p>
                    ${detailsHtml}
                </div>
                <div class="review-q-actions">
                    <button class="action-btn save-flashcard-btn" title="Save as Flashcard">
                        <i class="fas fa-plus-square"></i>
                    </button>
                </div>`;
        container.appendChild(questionDiv);

        // --- Flashcard Saving Logic ---
        const saveBtn = questionDiv.querySelector('.save-flashcard-btn');
        if (saveBtn) {
            // Prepare content for the back of the flashcard
            const backContent = `Correct Answer(s): ${correctAnswersText}\n\nExplanation: ${q.explanation || 'No explanation provided.'}`;

            saveBtn.onclick = async () => { // Make onclick async
                if (!subjectId) {
                    showNotification('Cannot save flashcard without a subject context.', 'error');
                    return;
                }
                saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; // Show loading state
                saveBtn.disabled = true;

                try {
                    // Call API to create flashcard
                    await createFlashcardAPI({
                        subjectId,
                        questionText: questionText,   // Use the displayed question text
                        backContent: backContent,     // Use the prepared back content
                    });
                    // Update button state on success
                    saveBtn.innerHTML = '<i class="fas fa-check-square"></i>'; // Show success
                    showNotification('Flashcard saved!', 'success');
                    // Keep button disabled after successful save to prevent duplicates
                } catch (error) {
                    // Re-enable button on failure to allow retry
                    saveBtn.innerHTML = '<i class="fas fa-plus-square"></i>';
                    saveBtn.disabled = false;
                    console.error("Error saving flashcard:", error);
                    // Show error notification (createFlashcardAPI already shows one)
                }
            };
        }
    });
}
// =======================================================
// END: MODIFIED displayReviewQuestions FUNCTION
// =======================================================

// --- دالة إنشاء بطاقة مراجعة عبر API ---
async function createFlashcardAPI(flashcardData) {
    try {
        // Use fetchApi helper which handles errors and notifications
        const data = await fetchApi('/api/flashcards', {
            method: 'POST',
            body: JSON.stringify(flashcardData)
        });
        // No need for success notification here, handled by the caller (displayReviewQuestions)
        return data; // Return data if needed by caller
    } catch (error) {
        // fetchApi should have shown a notification for API errors (like 400, 500)
        // If fetchApi itself failed (network error), show a notification
        if (error.message.includes('Failed to fetch')) {
            showNotification('Network error: Could not save flashcard.', 'error');
        } else {
            // For errors thrown by fetchApi (like bad request), let the caller know
            showNotification(`Error: ${error.message}`, 'error');
        }
        throw error; // Re-throw error so the caller knows it failed
    }
}

// --- دالة إنشاء ملخص PDF للكويز ---
function generateQuizSummaryPDF(resultData, quizTitle) {
    // Check if jsPDF library is loaded
    if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
        showNotification('PDF library (jsPDF) not loaded. Cannot generate PDF.', 'error');
        console.error("jsPDF library is missing.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // --- Document Setup ---
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const margin = 15;
    let y = margin; // Current Y position on the page
    const lineHeight = 7; // Approximate height for a line of text
    const titleFontSize = 20;
    const headingFontSize = 16;
    const textFontSize = 12;
    const smallFontSize = 10;

    // Helper function to add new page if needed
    const addPageIfNeeded = (requiredHeight) => {
        if (y + requiredHeight > pageHeight - margin) {
            doc.addPage();
            y = margin; // Reset Y position for the new page
        }
    };

    // --- Header ---
    addPageIfNeeded(titleFontSize + 8 + 10 + 15); // Title + Subtitle + Line + Spacing
    doc.setFontSize(titleFontSize);
    doc.setFont("helvetica", "bold");
    doc.text("Dentist - Quiz Summary", pageWidth / 2, y, { align: "center" });
    y += 8;
    doc.setFontSize(headingFontSize - 2); // Slightly smaller for subtitle
    doc.setFont("helvetica", "normal");
    doc.text(quizTitle || 'Quiz Results', pageWidth / 2, y, { align: "center" });
    y += 10;
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y); // Separator line
    y += 15;

    // --- Summary Metrics ---
    addPageIfNeeded((lineHeight * 2) + 10 + 15); // Metrics + Line + Spacing
    doc.setFontSize(textFontSize);
    doc.setFont("helvetica", "normal");
    doc.text(`Final Score: ${(resultData.score || 0).toFixed(2)} / 20`, margin, y);
    // Format time
    const minutes = Math.floor(resultData.timeTaken / 60);
    const seconds = resultData.timeTaken % 60;
    doc.text(`Time Taken: ${minutes}m ${seconds}s`, pageWidth - margin, y, { align: "right" });
    y += lineHeight;
    doc.text(`Correct Answers: ${resultData.correctAnswers} / ${resultData.totalQuestions}`, margin, y);
    y += 10;
    doc.line(margin, y, pageWidth - margin, y); // Separator line
    y += 15;

    // --- Mistake Review Section ---
    addPageIfNeeded(headingFontSize + 10); // Heading + Spacing
    doc.setFontSize(headingFontSize);
    doc.setFont("helvetica", "bold");
    doc.text("Mistake Review Section", margin, y);
    y += 10;

    doc.setFontSize(textFontSize);
    doc.setFont("helvetica", "normal");

    if (!resultData.incorrectQuestions || resultData.incorrectQuestions.length === 0) {
        addPageIfNeeded(lineHeight);
        doc.text("Excellent work! You made no mistakes in this quiz.", margin, y);
        y += lineHeight; // Add some space even if no mistakes
    } else {
        resultData.incorrectQuestions.forEach((q, index) => {
            // Basic validation
            if (!q || !q.options || !q.correctOptionIndexes) return;

            const questionText = q.questionText || `Question ${index + 1}`;
            const userAnswersText = (q.userSelectedIndexes && q.userSelectedIndexes.length > 0)
                ? q.userSelectedIndexes.map(i => q.options[i] || `Opt ${i + 1}`).join(', ')
                : "No answer / Skipped";
            const correctAnswersText = q.correctOptionIndexes.map(i => q.options[i] || `Opt ${i + 1}`).join(', ');
            const explanation = q.explanation || 'No explanation provided.';

            // Estimate required height
            const questionLines = doc.splitTextToSize(`Q${index + 1}: ${questionText}`, pageWidth - (margin * 2));
            const explanationLines = doc.splitTextToSize(`Explanation: ${explanation}`, pageWidth - (margin * 2) - 5); // Indented slightly
            const requiredHeight = (questionLines.length * lineHeight * 0.8) + (lineHeight * 2) + (explanationLines.length * lineHeight * 0.8) + 15; // Estimate height

            addPageIfNeeded(requiredHeight);

            // Print Question
            doc.setFont("helvetica", "bold");
            doc.text(questionLines, margin, y);
            y += questionLines.length * lineHeight * 0.8 + 5; // Adjust spacing

            // Print User Answer (Red)
            doc.setFont("helvetica", "normal");
            doc.setTextColor(200, 0, 0); // Red color
            doc.text(`- Your Answer: ${userAnswersText}`, margin + 5, y);
            y += lineHeight;

            // Print Correct Answer (Green)
            doc.setTextColor(34, 139, 34); // ForestGreen color
            doc.text(`- Correct Answer: ${correctAnswersText}`, margin + 5, y);
            y += lineHeight;

            // Print Explanation (Black, Italic)
            doc.setTextColor(0, 0, 0); // Reset to black
            doc.setFont("helvetica", "italic");
            doc.setFontSize(smallFontSize); // Smaller font for explanation
            doc.text(explanationLines, margin + 5, y);
            y += explanationLines.length * lineHeight * 0.8 + 5; // Adjust spacing
            doc.setFontSize(textFontSize); // Reset font size
            doc.setFont("helvetica", "normal"); // Reset font style

            y += 5; // Extra space between questions
        });
    }

    // --- Save the PDF ---
    try {
        const date = new Date().toISOString().slice(0, 10);
        // Sanitize title for filename
        const safeTitle = (quizTitle || 'Quiz').replace(/[^a-z0-9]/gi, '_').toLowerCase();
        doc.save(`Dentist-${safeTitle}-${date}.pdf`);
        showNotification('PDF summary has been downloaded!', 'success');
    } catch (error) {
        console.error("Error saving PDF:", error);
        showNotification('Failed to save the PDF summary.', 'error');
    }
}

// --- دالة بدء كويز جديد ---
async function startQuiz(quizId) {
    // Clear any previous quiz state first
    localStorage.removeItem('quizState');
    proQuiz = null;
    proQuestionIndex = 0;
    proUserAnswers = [];
    quizStartTime = 0;
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;

    showNotification('Loading quiz...', 'info'); // Loading indicator

    try {
        // Use fetchApi to get quiz data
        const quizData = await fetchApi(`/api/content/quiz/${quizId}`);

        if (!quizData || !quizData.questions || quizData.questions.length === 0) {
            showNotification('This quiz has no questions or failed to load.', 'error');
            return; // Stop if quiz data is invalid
        }

        // Initialize and start the quiz with the fetched data
        initializeAndStartQuiz(quizData);

    } catch (error) {
        showNotification(`Error loading quiz: ${error.message}`, 'error');
        console.error('Failed to start quiz:', error);
        // Optionally, navigate back or show an error message on the page
        showPage('#subjects-page'); // Example: Go back to subjects on error
    }
}

// ✅ --- دالة جديدة لتهيئة وبدء الكويز (لتجنب التكرار) ---
function initializeAndStartQuiz(quizData) {
    proQuiz = quizData; // Store the quiz data
    proQuestionIndex = 0; // Start at the first question
    proUserAnswers = new Array(proQuiz.questions.length).fill(null); // Reset answers array
    quizStartTime = Date.now(); // Record start time

    // Update UI elements with quiz title and subject name
    if (quizLessonNameEl) quizLessonNameEl.textContent = proQuiz.title || 'Quiz';
    if (quizSubjectNameEl) quizSubjectNameEl.textContent = proQuiz.subjectName || ''; // Use subjectName if available

    // Render the UI components for the quiz
    renderQuestionList(); // Build the question number navigation
    renderCurrentQuestion(); // Display the first question
    updateStats(); // Initialize the stats display (0 correct, 0 incorrect)

    // Save initial state immediately (in case of immediate refresh)
    saveQuizState();

    showPage('#quiz-taking-page'); // Navigate to the quiz taking page
}

// ✅ --- دالة جديدة لحفظ حالة الكويز في localStorage ---
function saveQuizState() {
    if (proQuiz && proUserAnswers) { // Only save if a quiz is active
        const stateToSave = {
            savedProQuiz: proQuiz,
            savedProQuestionIndex: proQuestionIndex,
            savedProUserAnswers: proUserAnswers,
            savedQuizStartTime: quizStartTime // Save start time too
        };
        localStorage.setItem('quizState', JSON.stringify(stateToSave));
        // console.log("Quiz state saved at index:", proQuestionIndex); // For debugging
    }
}

// --- دالة عرض قائمة أرقام الأسئلة ---
function renderQuestionList() {
    if (!quizQuestionNumbersContainer || !proQuiz || !proQuiz.questions) return; // Safety check

    quizQuestionNumbersContainer.innerHTML = ''; // Clear previous numbers

    proQuiz.questions.forEach((_, index) => {
        const numEl = document.createElement('div');
        numEl.className = 'question-number-pro';
        numEl.textContent = index + 1;
        numEl.dataset.index = index; // Store index for navigation

        // Highlight the current question
        if (index === proQuestionIndex) {
            numEl.classList.add('current');
        }

        // Style based on answer status
        const answer = proUserAnswers[index];
        if (answer !== null) { // Check if answered (could be correct or incorrect)
            numEl.classList.add('answered');
            if (answer.isCorrect === true) {
                numEl.classList.add('correct');
            } else if (answer.isCorrect === false) {
                numEl.classList.add('incorrect');
            }
            // Add a style for skipped/unanswered if needed
        }

        // Add click listener to navigate to the question
        numEl.addEventListener('click', () => {
            proQuestionIndex = index; // Update current index
            renderCurrentQuestion(); // Re-render the clicked question
            // No need to save state here, renderCurrentQuestion handles controls which might trigger save
        });
        quizQuestionNumbersContainer.appendChild(numEl);
    });
}

// --- دالة عرض السؤال الحالي ---
function renderCurrentQuestion() {
    // Stop any existing timer for the previous question
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;

    // Ensure quiz data and current question exist
    if (!proQuiz || !proQuiz.questions || !proQuiz.questions[proQuestionIndex]) {
        console.error("Quiz data or current question is missing. Index:", proQuestionIndex);
        if (quizQuestionTextEl_pro) quizQuestionTextEl_pro.textContent = "Error: Could not load question data.";
        if (quizOptionsContainer_pro) quizOptionsContainer_pro.innerHTML = '';
        updateQuizControls(); // Update controls to reflect error state if possible
        return;
    }

    const question = proQuiz.questions[proQuestionIndex];

    // --- Safely extract question data with fallbacks ---
    const questionText = question.questionText || question.question || `Question ${proQuestionIndex + 1}`;
    // Handle various ways correct answers might be stored
    const correctIndexesRaw = question.correctOptionIndexes ?? question.correctIndex ?? question.answer ?? question.answerIndex;
    let correctIndexes = [];
    if (correctIndexesRaw !== undefined && correctIndexesRaw !== null) {
        correctIndexes = Array.isArray(correctIndexesRaw) ? correctIndexesRaw : [correctIndexesRaw];
    } else {
        console.warn("Correct answer index missing for question:", proQuestionIndex, question);
        // Decide how to handle missing answers (e.g., skip, mark as unanswerable)
    }
    const options = question.options || [];
    const explanation = question.explanation || question.Explanation || ''; // Handle both possible keys

    // Basic check for essential data
    if (options.length === 0 || correctIndexesRaw === undefined) {
        console.error("Incomplete question data (options or correct index missing):", proQuestionIndex, question);
        if (quizQuestionTextEl_pro) quizQuestionTextEl_pro.textContent = "Error: Question data is incomplete. Please skip or report.";
        if (quizOptionsContainer_pro) quizOptionsContainer_pro.innerHTML = '';
        updateQuizControls();
        return;
    }

    // --- Update UI Elements ---
    const isAnswered = proUserAnswers[proQuestionIndex] !== null;
    const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F']; // Labels for options
    const isMultipleChoice = correctIndexes.length > 1;

    // Update progress text
    if (quizProgressEl_pro) quizProgressEl_pro.textContent = `Question ${proQuestionIndex + 1} of ${proQuiz.questions.length}`;
    // Update question text
    if (quizQuestionTextEl_pro) quizQuestionTextEl_pro.textContent = questionText;

    // Clear previous options and explanation
    if (quizOptionsContainer_pro) {
        quizOptionsContainer_pro.innerHTML = '';
        // Set class for single/multiple choice styling
        quizOptionsContainer_pro.className = 'quiz-options-container-pro ' + (isMultipleChoice ? 'multiple-choice' : 'single-choice');
    }
    if (quizExplanationContainer) quizExplanationContainer.style.display = 'none'; // Hide explanation initially

    // Remove any previous image
    if (quizQuestionTextEl_pro) {
        const parentArea = quizQuestionTextEl_pro.parentElement;
        const oldImageContainer = parentArea?.querySelector('.quiz-image-display');
        if (oldImageContainer) { oldImageContainer.remove(); }
    }

    // Display image if available
    if (question.imageUrl && quizQuestionTextEl_pro) {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'quiz-image-display';
        const serverUrl = 'https://dental-app-he1p.onrender.com'; // Define server URL if needed
        // Ensure the URL is absolute if filePath doesn't include the domain
        const imageUrl = question.imageUrl.startsWith('http') ? question.imageUrl : `${serverUrl}${question.imageUrl}`;
        imgContainer.innerHTML = `<img src="${imageUrl}" alt="Question Illustration">`;
        // Insert image after the question text
        quizQuestionTextEl_pro.after(imgContainer);
    }

    // --- Render Options ---
    options.forEach((optionText, index) => {
        if (!quizOptionsContainer_pro) return; // Exit if container removed unexpectedly

        const optionEl = document.createElement('button');
        optionEl.className = 'quiz-option-pro';
        optionEl.dataset.index = index; // Store option index
        optionEl.disabled = isAnswered; // Disable if already answered

        // --- Option Stats Display Logic ---
        let statsHtml = '';
        // Show stats only if answered AND stats data exists
        if (isAnswered && question.stats && question.stats.totalAnswers > 0 && question.stats.optionSelectionCounts) {
            const count = question.stats.optionSelectionCounts[index] || 0;
            const total = question.stats.totalAnswers;
            const percentage = Math.round((count / total) * 100);

            // Background bar for percentage
            statsHtml = `
                <div class="option-stats-bar" style="width: ${percentage}%;"></div>
                <span class="option-stats-text">${percentage}%</span>
            `;
        }

        // Option Structure (Prefix, Text, Stats)
        optionEl.innerHTML = `
            <div class="quiz-option-prefix"><span class="quiz-option-label">${optionLabels[index] || ''}</span></div>
            <div class="quiz-option-text">${optionText || `Option ${index + 1}`}</div>
            ${statsHtml} 
        `;

        // Add event listeners only if the question is NOT answered
        if (!isAnswered) {
            if (isMultipleChoice) {
                // Toggle selection for multiple choice
                optionEl.addEventListener('click', () => toggleOption(index));
            } else {
                // Select single option for single choice
                optionEl.addEventListener('click', () => selectOption(index));
            }
        }
        // Apply styling if the question IS answered
        else {
            const answerData = proUserAnswers[proQuestionIndex];
            const selectedIndexes = answerData?.selectedIndexes || [];

            // Mark correct options
            if (correctIndexes.includes(index)) {
                optionEl.classList.add('correct');
            }
            // Mark selected options
            if (selectedIndexes.includes(index)) {
                optionEl.classList.add('selected');
                // Mark incorrect if selected but not correct
                if (!correctIndexes.includes(index)) {
                    optionEl.classList.add('incorrect');
                }
            }
        }
        quizOptionsContainer_pro.appendChild(optionEl);
    });

    // Display explanation if answered and explanation exists
    if (isAnswered && explanation && quizExplanationContainer && quizExplanationText) {
        quizExplanationText.textContent = explanation;
        quizExplanationContainer.style.display = 'block';
    }

    // --- Timer Handling ---
    if (!isAnswered) {
        // Start timer only if not answered
        startQuizTimer(question.timer || 90); // Use question timer or default 90s
    } else {
        // If answered, show "Done!" or similar, disable timer visuals
        if (quizTimerDisplay) quizTimerDisplay.textContent = "Answered";
        if (quizTimerContainer) quizTimerContainer.classList.remove('warning');
        if (quizTimerDisplay) quizTimerDisplay.style.opacity = '0.7'; // Dim the timer display
    }

    // Update navigation buttons (Prev, Next, Skip, Check)
    updateQuizControls();
    // Update the question number list highlighting
    renderQuestionList();
}


// ✅ --- [إصلاح] دالة بدء عداد الكويز (اسم جديد) ---
let isQuizTimerActive = true; // Global flag to control timer activation
function startQuizTimer(duration) {
    clearInterval(quizTimerInterval); // Clear any existing interval first
    quizTimerInterval = null;

    // Exit if timer is globally disabled
    if (!isQuizTimerActive) {
        if (quizTimerDisplay) quizTimerDisplay.textContent = "Off";
        if (quizTimerDisplay) quizTimerDisplay.style.opacity = '0.6';
        if (quizTimerContainer) quizTimerContainer.classList.remove('warning');
        return;
    }

    // Ensure duration is a positive number
    let timeLeft = parseInt(duration);
    if (isNaN(timeLeft) || timeLeft <= 0) {
        timeLeft = 90; // Default to 90 seconds if duration is invalid
    }

    // Reset visual state
    if (quizTimerContainer) quizTimerContainer.classList.remove('warning');
    if (quizTimerDisplay) quizTimerDisplay.style.opacity = '1'; // Make sure it's visible

    function updateDisplay() {
        if (!quizTimerDisplay) return; // Exit if element removed
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        quizTimerDisplay.textContent = `${minutes}:${seconds}`;
        // Add warning class for last 10 seconds
        if (quizTimerContainer) quizTimerContainer.classList.toggle('warning', timeLeft <= 10);
    }

    updateDisplay(); // Initial display

    // Start the interval
    quizTimerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        // When timer reaches zero
        if (timeLeft <= 0) {
            clearInterval(quizTimerInterval);
            quizTimerInterval = null;
            timeUp(); // Call the timeUp function
        }
    }, 1000);
}

// --- دالة انتهاء وقت السؤال ---
function timeUp() {
    showNotification("Time's up for this question!", 'error');
    // Mark the question as incorrect with no selected answer
    proUserAnswers[proQuestionIndex] = { selectedIndexes: [], isCorrect: false };
    saveQuizState(); // ✅ حفظ الحالة بعد انتهاء الوقت
    renderCurrentQuestion(); // Re-render to show feedback and disable options
    updateStats(); // Update overall stats
}

// --- دالة اختيار خيار (إجابة واحدة) ---
function selectOption(selectedIndex) {
    if (!quizOptionsContainer_pro) return;
    // Deselect any previously selected option
    document.querySelectorAll('.quiz-option-pro.selected').forEach(btn => btn.classList.remove('selected'));
    // Select the clicked option
    const selectedBtn = quizOptionsContainer_pro.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    // Enable the Check Answer button
    if (quizActionBtn) quizActionBtn.disabled = false;
    if (quizSkipBtn) quizSkipBtn.disabled = true; // Disable skip if an answer is selected
}

// --- دالة تبديل اختيار خيار (إجابات متعددة) ---
function toggleOption(selectedIndex) {
    if (!quizOptionsContainer_pro) return;
    const selectedBtn = quizOptionsContainer_pro.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedBtn) {
        selectedBtn.classList.toggle('selected'); // Toggle the 'selected' class
    }
    // Enable Check Answer button only if at least one option is selected
    const anySelected = quizOptionsContainer_pro.querySelector('.selected');
    if (quizActionBtn) quizActionBtn.disabled = !anySelected;
    if (quizSkipBtn) quizSkipBtn.disabled = !!anySelected; // Disable skip if any answer is selected
}

// --- دالة التحقق من الإجابة ---
function checkAnswer() {
    clearInterval(quizTimerInterval); // Stop the timer for this question
    quizTimerInterval = null;

    if (!proQuiz || !proQuiz.questions || !proQuiz.questions[proQuestionIndex]) return; // Safety check

    const question = proQuiz.questions[proQuestionIndex];
    const selectedElements = quizOptionsContainer_pro?.querySelectorAll('.selected');

    // Determine correct indexes safely
    const correctIndexesRaw = question.correctOptionIndexes ?? question.correctIndex ?? question.answer ?? question.answerIndex;
    const correctIndexes = (Array.isArray(correctIndexesRaw) ? correctIndexesRaw : [correctIndexesRaw]).sort((a, b) => a - b);

    // Get selected indexes safely
    const selectedIndexes = selectedElements ? Array.from(selectedElements).map(el => parseInt(el.dataset.index)).sort((a, b) => a - b) : [];

    // Determine correctness
    let isCorrect = false;
    if (selectedIndexes.length > 0) { // Only check if something was selected
        // Correct if lengths match and all elements are the same
        isCorrect = selectedIndexes.length === correctIndexes.length && selectedIndexes.every((val, i) => val === correctIndexes[i]);
    }

    // Store the result
    proUserAnswers[proQuestionIndex] = { selectedIndexes: selectedIndexes, isCorrect: isCorrect };
    saveQuizState(); // ✅ حفظ الحالة بعد الإجابة

    renderCurrentQuestion(); // Re-render the question to show feedback
    updateStats(); // Update the overall quiz stats
}

// --- دالة تحديث إحصائيات الكويز (صحيح/خطأ/درجة) ---
function updateStats() {
    if (!proQuiz || !proUserAnswers || !quizCorrectCountEl || !quizIncorrectCountEl || !quizScoreEl) return; // Safety check

    // Count correct answers (explicitly true)
    const correctCount = proUserAnswers.filter(a => a && a.isCorrect === true).length;
    // Count incorrect answers (explicitly false)
    const incorrectCount = proUserAnswers.filter(a => a && a.isCorrect === false).length;
    // Calculate score out of 20
    const totalQuestions = proQuiz.questions.length;
    const score = totalQuestions > 0 ? (correctCount / totalQuestions) * 20 : 0;

    // Update DOM elements
    quizCorrectCountEl.textContent = correctCount;
    quizIncorrectCountEl.textContent = incorrectCount;
    quizScoreEl.textContent = `${score.toFixed(2)} / 20`;
}

// ✅ --- (تعديل) دالة تحديث أزرار التحكم بالكويز (مع زر التخطي) ---
function updateQuizControls() {
    // Safety checks for elements
    if (!quizPrevBtn || !quizActionBtn || !quizNextBtn_pro || !quizSkipBtn || !proQuiz || !proQuiz.questions) return;

    const isAnswered = proUserAnswers[proQuestionIndex] !== null;
    const isFirstQuestion = proQuestionIndex === 0;
    const isLastQuestion = proQuestionIndex === proQuiz.questions.length - 1;

    // Previous Button: Enabled unless it's the first question
    quizPrevBtn.disabled = isFirstQuestion;

    // Check Answer Button: Visible only if NOT answered
    quizActionBtn.style.display = isAnswered ? 'none' : 'block';
    // Disabled initially, enabled when an option is selected (handled in selectOption/toggleOption)
    quizActionBtn.disabled = true;

    // Skip Button: Visible only if NOT answered
    quizSkipBtn.style.display = isAnswered ? 'none' : 'block';
    // Enabled initially, disabled if an option is selected
    quizSkipBtn.disabled = false;

    // Next/Finish Button: Visible only if answered
    quizNextBtn_pro.style.display = isAnswered ? 'block' : 'none';
    // Change text to 'Finish' on the last question
    quizNextBtn_pro.innerHTML = isLastQuestion ? 'Finish <i class="fas fa-check-circle"></i>' : '<i class="fas fa-arrow-right"></i>';
    quizNextBtn_pro.title = isLastQuestion ? 'Finish Quiz' : 'Next Question';
}
// ===================================================================
// --- [إضافة جديدة] دالة لإضافة مستمع حفظ الكويز ---
// ===================================================================

/**
 * @description يضيف مستمع حدث إلى زر حفظ الكويز (الذي يتم استدعاؤه من صفحة ملخص الكويز)
 * @param {HTMLButtonElement} buttonElement - الزر الذي سيتم إضافة المستمع إليه
 */
function attachSaveQuizListener(buttonElement) {
    if (!buttonElement) return;

    buttonElement.addEventListener('click', async () => {
        // 1. التحقق من وجود بيانات كويز AI
        if (!proQuiz || !proQuiz._id.startsWith('ai-generated-')) {
            showNotification('No AI quiz data found to save.', 'error');
            return;
        }

        // 2. إظهار حالة التحميل
        buttonElement.disabled = true;
        buttonElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';

        try {
            // 3. تجهيز البيانات للإرسال
            // (ملاحظة: subjectId هو في الواقع 'subjectKey' من السياق)
            const payload = {
                title: proQuiz.title || 'AI Generated Quiz',
                subjectName: proQuiz.subjectName || 'Uncategorized', // من currentAiGenerationContext
                questions: proQuiz.questions, // إرسال مصفوفة الأسئلة
                subjectId: proQuiz.subject // هذا هو 'subjectKey' من السياق
            };

            // 4. استدعاء الـ API باستخدام الدالة المساعدة
            await fetchApi('/api/saved-quizzes', {
                method: 'POST',
                body: JSON.stringify(payload)
            });

            // 5. عند النجاح
            showNotification('AI Quiz saved successfully!', 'success');
            buttonElement.innerHTML = '<i class="fas fa-check"></i> Saved!';
            // (يبقى الزر معطلاً لمنع الحفظ المزدوج)

        } catch (error) {
            // 6. عند الفشل
            console.error('Error saving AI quiz:', error);
            showNotification(`Failed to save quiz: ${error.message}`, 'error');
            buttonElement.disabled = false; // إعادة تفعيل الزر للسماح بإعادة المحاولة
            buttonElement.innerHTML = '<i class="fas fa-save"></i> Save Quiz'; // إرجاع النص الأصلي
        }
    });
}


// ===================================================================
// --- [إضافة جديدة ومحصّنة] منطق لوحة الأداء (Dashboard) ---
// ===================================================================

// ... باقي الكود الخاص بك يستمر هنا ...
// ===================================================================
// --- [إضافة جديدة ومحصّنة] منطق لوحة الأداء (Dashboard) ---
// ===================================================================
// ✅ قم بتحديث دالة fetchAndDisplayDashboardData
// في ملف script.js
// ✅ استبدل هذه الدالة بالكامل
async function fetchAndDisplayDashboardData() {
    // Ensure necessary elements exist before proceeding
    const dashboardTotalXpEl = document.getElementById('dashboard-total-xp');
    const dashboardBadgeCountEl = document.getElementById('dashboard-badge-count');
    const dashboardQuizCountEl = document.getElementById('dashboard-quiz-count');
    const recentList = document.getElementById('recent-quizzes-list');
    const chartCard = document.querySelector('.chart-card');
    const savedListContainer = document.getElementById('saved-quizzes-list');

    if (!dashboardTotalXpEl || !dashboardBadgeCountEl || !dashboardQuizCountEl || !recentList || !chartCard || !savedListContainer) {
        console.error("One or more dashboard elements are missing.");
        showNotification("Could not load dashboard components.", "error");
        return;
    }

    // Show loading state (optional)
    recentList.innerHTML = '<li>Loading recent activities...</li>';
    chartCard.innerHTML = `<h3>Performance by Subject</h3><p>Loading performance data...</p>`;
    savedListContainer.innerHTML = '<p>Loading your saved quizzes...</p>';

    try {
        // Fetch dashboard data and user profile concurrently
        const [data, userProfile, savedQuizzes] = await Promise.all([
            fetchApi('/api/results/dashboard'),
            fetchUserProfile(), // Re-fetch profile for latest XP/badges
            fetchApi('/api/saved-quizzes')
        ]);

        // --- Update General Stats ---
        if (userProfile) {
            dashboardTotalXpEl.textContent = userProfile.experiencePoints || 0;
            dashboardBadgeCountEl.textContent = (userProfile.badges && userProfile.badges.length) || 0;
        } else {
            // Handle case where profile fetch might fail after initial load
            dashboardTotalXpEl.textContent = '-';
            dashboardBadgeCountEl.textContent = '-';
        }
        dashboardQuizCountEl.textContent = data?.totalQuizzesTaken || 0;

        // --- Update Recent Quizzes List ---
        recentList.innerHTML = ''; // Clear loading message
        if (data?.recentQuizzes && data.recentQuizzes.length > 0) {
            data.recentQuizzes.forEach(result => {
                if (!result) return; // Skip null/undefined results

                let quizTitle = 'Quiz'; // Default title
                // Smartly determine quiz title based on structure or ID prefix
                if (result.quiz && typeof result.quiz === 'object' && result.quiz.title) {
                    quizTitle = result.quiz.title; // Normal quiz with title object
                } else if (typeof result.quiz === 'string' && result.quiz.startsWith('mistakes_')) {
                    quizTitle = 'Mistakes Review'; // Mistakes quiz by ID prefix
                } else if (typeof result.quiz === 'string' && result.quiz.startsWith('ai-generated-')) {
                    quizTitle = 'AI Generated Quiz'; // AI quiz by ID prefix
                } else if (result.quizTitle) { // Fallback to quizTitle if present directly
                    quizTitle = result.quizTitle;
                }

                const li = document.createElement('li');
                li.innerHTML = `
                        <span class="quiz-title">${quizTitle}</span>
                        <span class="quiz-score">${(result.score ?? 0).toFixed(2)} / 20</span>
                    `;
                recentList.appendChild(li);
            });
        } else {
            recentList.innerHTML = '<li>No quizzes completed yet. Start a quiz!</li>';
        }

        // --- Display Performance by Subject ---
        chartCard.innerHTML = `<h3>Performance by Subject</h3>`; // Clear loading message
        if (data?.performanceBySubject && data.performanceBySubject.length > 0) {
            const subjectList = document.createElement('ul');
            subjectList.className = 'performance-list';
            data.performanceBySubject.forEach(subject => {
                // Ensure subject data is valid
                if (!subject || !subject.subjectId || !subject.subjectName) return;

                const listItem = document.createElement('li');
                const averageScore = subject.averageScore ?? 0;
                const percentage = averageScore > 0 ? (averageScore / 20) * 100 : 0; // Calculate percentage safely
                const mistakeCount = subject.mistakeCount || 0;

                listItem.innerHTML = `
                        <div class="subject-info">
                            <span class="subject-name">${subject.subjectName}</span>
                            <span class="subject-score">${averageScore.toFixed(1)}/20</span>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" style="width: ${percentage.toFixed(1)}%;"></div>
                        </div>
                        <button class="btn secondary-btn review-mistakes-btn" 
                                data-subject-id="${subject.subjectId}" 
                                data-subject-name="${subject.subjectName}"
                                ${mistakeCount === 0 ? 'disabled' : ''} /* Disable if no mistakes */
                                title="${mistakeCount === 0 ? 'No mistakes to review' : 'Review Mistakes'}">
                            <i class="fas fa-search"></i> Review Mistakes (${mistakeCount})
                        </button>
                    `;
                subjectList.appendChild(listItem);
            });
            chartCard.appendChild(subjectList);

            // Add event listener for mistake review buttons (using event delegation)
            // Ensure listener is added only once
            if (!chartCard.dataset.listenerAttached) {
                chartCard.addEventListener('click', (event) => {
                    const reviewButton = event.target.closest('.review-mistakes-btn:not(:disabled)'); // Target only enabled buttons
                    if (reviewButton) {
                        startMistakesQuiz(reviewButton.dataset.subjectId, reviewButton.dataset.subjectName);
                    }
                });
                chartCard.dataset.listenerAttached = 'true';
            }

        } else {
            chartCard.innerHTML += `<p>No performance data yet. Complete quizzes to see stats!</p>`;
        }

        // --- Display Saved Quizzes ---
        savedListContainer.innerHTML = ''; // Clear loading message
        if (savedQuizzes && savedQuizzes.length > 0) {
            savedQuizzes.forEach(quiz => {
                if (!quiz || !quiz._id) return; // Skip invalid saved quizzes

                const quizCard = document.createElement('div');
                quizCard.className = 'saved-quiz-item';
                quizCard.innerHTML = `
                        <div class="saved-quiz-info">
                            <i class="fas fa-robot"></i> <div class="saved-quiz-details">
                                <span class="saved-quiz-title">${quiz.title || 'Saved Quiz'}</span>
                                <span class="saved-quiz-meta">${quiz.questions?.length || 0} Questions | ${quiz.subjectName || 'N/A'}</span>
                            </div>
                        </div>
                        <div class="saved-quiz-actions">
                            <button class="btn-start-saved-quiz" title="Start Quiz"><i class="fas fa-play"></i></button>
                            <button class="btn-delete-saved-quiz" title="Delete Quiz"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    `;
                savedListContainer.appendChild(quizCard);

                // Add listeners for start and delete buttons
                const startBtn = quizCard.querySelector('.btn-start-saved-quiz');
                const deleteBtn = quizCard.querySelector('.btn-delete-saved-quiz');
                if (startBtn) startBtn.addEventListener('click', () => startSavedQuiz(quiz));
                if (deleteBtn) deleteBtn.addEventListener('click', () => handleDeleteSavedQuiz(quiz._id, quizCard));
            });
        } else {
            savedListContainer.innerHTML = '<p>You have not saved any AI-generated quizzes yet.</p>';
        }

    } catch (error) {
        console.error('Error rendering dashboard:', error);
        showNotification(`Failed to load dashboard: ${error.message}`, 'error');
        // Display error messages in relevant sections
        recentList.innerHTML = '<li>Could not load recent activities.</li>';
        chartCard.innerHTML = `<h3>Performance by Subject</h3><p>Error loading performance data.</p>`;
        savedListContainer.innerHTML = '<p>Error loading saved quizzes.</p>';
    }
}


// --- دالة بدء كويز مراجعة الأخطاء ---
async function startMistakesQuiz(subjectId, subjectName) {
    if (!subjectId || !subjectName) {
        console.error("Missing subjectId or subjectName for mistakes quiz.");
        return;
    }

    showNotification(`Building your personalized review for ${subjectName}...`, 'info');
    localStorage.removeItem('quizState'); // Clear any previous state

    try {
        // Use fetchApi to get mistake questions
        const mistakesQuizData = await fetchApi(`/api/results/mistakes/${subjectId}`);

        // Ensure data received is valid
        if (!mistakesQuizData || !mistakesQuizData.questions || mistakesQuizData.questions.length === 0) {
            showNotification(`No mistakes found to review for ${subjectName}.`, 'info');
            return; // Nothing to review
        }

        // Add necessary properties for the quiz system
        mistakesQuizData._id = `mistakes_${subjectId}_${Date.now()}`; // Unique ID for this session
        mistakesQuizData.title = "Mistakes Review";
        mistakesQuizData.subject = subjectId; // Store the original subject ID
        mistakesQuizData.subjectName = subjectName;

        // Initialize and start the quiz
        initializeAndStartQuiz(mistakesQuizData);

    } catch (error) {
        console.error('Error starting mistakes quiz:', error);
        // Show specific error from backend if available, otherwise generic
        showNotification(error.message || 'Could not load mistake review quiz.', 'error');
    }
}
// ===============================================
// === [تعديل] دوال منطق مؤقت البومودورو   ===
// ===============================================

// --- إيقاف وإعادة تعيين دورة البومودورو ---
function stopAndResetPomodoroCycle() {
    clearInterval(pomodoroInterval); // Stop timer
    pomodoroInterval = null;
    isPomodoroActive = false; // Mark as inactive
    isPaused = true; // Set to paused state
    sessionsCompleted = 0; // Reset session count
    document.title = originalDocTitle; // Restore original page title
    switchPomodoroView('settings'); // Show settings view
    // Reset timer display visuals immediately
    if (progressRingFg) progressRingFg.style.strokeDashoffset = circumference;
    if (timeDisplayEl) timeDisplayEl.textContent = "00:00";
    if (sessionTitleEl) sessionTitleEl.textContent = 'Pomodoro';
}

// --- تحديث عرض المؤقت (الوقت والدائرة) ---
function updateTimerDisplay() {
    if (!timeDisplayEl || !progressRingFg) return; // Safety check

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    // Format time as MM:SS
    timeDisplayEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Calculate progress for the ring (0 to 1)
    const progress = totalSeconds > 0 ? (totalSeconds - secondsLeft) / totalSeconds : 0;
    // Calculate stroke offset for the circle
    const offset = circumference - progress * circumference;
    progressRingFg.style.strokeDashoffset = Math.max(0, offset); // Ensure offset doesn't go negative

    // Update page title to show current time and session
    document.title = `${timeDisplayEl.textContent} - ${sessionTitleEl?.textContent || 'Pomodoro'}`;
}

// --- تبديل العرض بين الإعدادات والمؤقت ---
function switchPomodoroView(view) {
    if (!pomodoroSettingsView || !pomodoroTimerView) return; // Safety check

    if (view === 'timer') {
        pomodoroSettingsView.style.display = 'none';
        pomodoroTimerView.style.display = 'block';
    } else { // 'settings' or any other value
        pomodoroTimerView.style.display = 'none';
        pomodoroSettingsView.style.display = 'block';
    }
}

// --- الانتقال للدورة التالية (تركيز/استراحة) ---
function switchPomodoroSession() {
    clearInterval(pomodoroInterval); // Stop current timer
    pomodoroInterval = null;
    isPaused = true; // Start next session paused
    if (pauseResumeBtn) pauseResumeBtn.innerHTML = '<i class="fas fa-play"></i>'; // Show play icon

    // Play alarm sound if available
    if (alarmSound) {
        alarmSound.play().catch(e => console.warn("Audio play failed:", e)); // Play sound, catch errors
    }

    let nextSessionTitle = '';
    // Determine next session type
    if (currentSession === 'focus') {
        sessionsCompleted++;
        // Check if it's time for a long break
        if (sessionsCompleted > 0 && sessionsCompleted % settings.sessionsBeforeLongBreak === 0) {
            currentSession = 'longBreak';
            nextSessionTitle = 'Long Break';
            totalSeconds = settings.longBreakDuration * 60;
        } else {
            currentSession = 'shortBreak';
            nextSessionTitle = 'Short Break';
            totalSeconds = settings.shortBreakDuration * 60;
        }
    } else { // If currently in a break (short or long)
        currentSession = 'focus';
        nextSessionTitle = 'Focus';
        totalSeconds = settings.focusDuration * 60;
    }

    secondsLeft = totalSeconds; // Reset time left for the new session

    // Update UI elements
    if (sessionTitleEl) sessionTitleEl.textContent = nextSessionTitle;
    if (sessionCounterEl) {
        // Display session count correctly (e.g., Session 1 of 4, Session 5 of 4 for overflow)
        const currentSessionNum = currentSession === 'focus' ? sessionsCompleted + 1 : sessionsCompleted;
        sessionCounterEl.textContent = `Session ${currentSessionNum} / ${settings.sessionsBeforeLongBreak}`;
    }
    updateTimerDisplay(); // Update time and ring display
    showNotification(`${nextSessionTitle} session started!`, 'info'); // Notify user
}

// ✅ --- [إصلاح] دالة بدء عداد البومودورو (اسم جديد) ---
function startPomodoroTimer() {
    if (secondsLeft <= 0 || !isPomodoroActive) return; // Don't start if time is up or not active
    isPaused = false;
    if (pauseResumeBtn) pauseResumeBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Show pause icon

    // Clear any existing interval before starting a new one
    clearInterval(pomodoroInterval);
    pomodoroInterval = null;

    pomodoroInterval = setInterval(() => {
        if (isPaused) return; // Don't decrease time if paused

        secondsLeft--;
        updateTimerDisplay();

        // Switch session when time runs out
        if (secondsLeft <= 0) {
            switchPomodoroSession();
        }
    }, 1000); // Run every second
}

// --- إيقاف مؤقت للبومودورو ---
function pausePomodoroTimer() {
    isPaused = true;
    clearInterval(pomodoroInterval); // Stop the interval
    pomodoroInterval = null;
    if (pauseResumeBtn) pauseResumeBtn.innerHTML = '<i class="fas fa-play"></i>'; // Show play icon
}

// --- إعادة تعيين المؤقت الحالي (ليس الدورة بأكملها) ---
function resetCurrentPomodoroTimer() {
    pausePomodoroTimer(); // Pause first
    secondsLeft = totalSeconds; // Reset time to the start of the current session
    updateTimerDisplay(); // Update display
}

// ===================================================================
// --- [إضافة جديدة] دوال قسم بطاقات المراجعة       ===
// ===================================================================
async function fetchAndDisplayCollections() {
    const contentDiv = document.getElementById('flashcards-content');
    const viewerDiv = document.getElementById('flashcard-viewer');

    if (!contentDiv || !viewerDiv) {
        console.error("Flashcard elements not found.");
        return;
    }

    contentDiv.innerHTML = '<p>Loading your flashcard collections...</p>'; // Show loading
    contentDiv.style.display = 'grid'; // Ensure grid layout is active
    viewerDiv.classList.add('flashcard-viewer-hidden'); // Hide viewer

    try {
        // Use fetchApi helper
        allFlashcardCollections = await fetchApi('/api/flashcards');

        contentDiv.innerHTML = ''; // Clear loading message

        if (!allFlashcardCollections || allFlashcardCollections.length === 0) {
            contentDiv.innerHTML = '<p>You haven\'t saved any flashcards yet. Start by saving questions from your quiz results!</p>';
            return;
        }

        // Sort collections alphabetically by subject name (optional)
        allFlashcardCollections.sort((a, b) => (a.subjectName || '').localeCompare(b.subjectName || ''));

        allFlashcardCollections.forEach(collection => {
            // Basic validation for collection data
            if (!collection || !collection.subjectName || !collection.cards) return;

            const card = document.createElement('div');
            card.className = 'collection-card';
            card.innerHTML = `
                <h3>${collection.subjectName}</h3>
                <p>${collection.cards.length} card${collection.cards.length !== 1 ? 's' : ''}</p> 
            `;
            // Add click listener to show the viewer for this collection
            card.onclick = () => showFlashcardViewer(collection);
            contentDiv.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching flashcards:", error);
        contentDiv.innerHTML = `<p>Error loading flashcards: ${error.message}. Please try again later.</p>`;
        showNotification(`Could not load flashcards: ${error.message}`, 'error');
    }
}

// ✅ استبدل دالة showFlashcardViewer القديمة بهذه النسخة
function showFlashcardViewer(collection) {
    // Basic validation
    if (!collection || !Array.isArray(collection.cards)) {
        console.error("Invalid collection data passed to showFlashcardViewer:", collection);
        showNotification("Could not load this flashcard collection.", "error");
        return;
    }

    currentCollection = collection.cards; // Store the cards array
    currentCardIndex = 0; // Start at the first card

    // Get UI elements
    const ratingControls = document.getElementById('ai-flashcard-rating-controls');
    const viewerControls = document.getElementById('flashcard-viewer-controls');
    const contentDiv = document.getElementById('flashcards-content');
    const viewerDiv = document.getElementById('flashcard-viewer');
    const viewerTitle = document.getElementById('flashcard-viewer-title');

    if (!ratingControls || !viewerControls || !contentDiv || !viewerDiv || !viewerTitle) {
        console.error("Flashcard viewer UI elements missing.");
        return;
    }

    // --- Control Visibility ---
    ratingControls.style.display = 'none'; // Hide AI rating controls for normal viewing
    viewerControls.style.display = 'flex'; // Show standard navigation controls
    // --- End Control Visibility ---

    contentDiv.style.display = 'none'; // Hide the collection grid
    viewerDiv.classList.remove('flashcard-viewer-hidden'); // Show the viewer section
    viewerTitle.textContent = collection.subjectName || 'Flashcards'; // Set the title

    // Display the first card
    displayCurrentFlashcard();
    // Ensure the flashcards page is the active page
}
// ✅ استبدل دالة displayCurrentFlashcard القديمة بهذه النسخة

// في ملف script.js

/**
 * @description تعرض البطاقة الحالية في العارض (النسخة النهائية والذكية)
 */
function displayCurrentFlashcard() {
    // Ensure collection and index are valid
    if (!currentCollection || currentCollection.length === 0 || currentCardIndex < 0 || currentCardIndex >= currentCollection.length) {
        console.warn("Cannot display flashcard. Invalid collection or index.");
        // Optionally display a message in the viewer
        const questionElement = document.getElementById('flashcard-question');
        if (questionElement) questionElement.textContent = "No card to display.";
        const answerElement = document.getElementById('flashcard-answer');
        if (answerElement) answerElement.textContent = "";
        // Disable navigation buttons
        const prevBtn = document.getElementById('prev-flashcard-btn');
        const nextBtn = document.getElementById('next-flashcard-btn');
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        return;
    }

    const card = currentCollection[currentCardIndex];
    if (!card) {
        console.error("Card data is missing at index:", currentCardIndex);
        return;
    }

    // --- ✅ Handle potential variations in property names ---
    const frontText = card.front || card.questionText || "No front content."; // Fallback text
    const backText = card.back || card.backContent || "No back content.";   // Fallback text

    // Get elements for front and back content
    const questionElement = document.getElementById('flashcard-question');
    const answerElement = document.getElementById('flashcard-answer');

    // Update content safely
    if (questionElement) {
        questionElement.textContent = frontText;
    }
    if (answerElement) {
        // Use innerHTML for the back if it might contain Markdown/HTML, otherwise textContent
        // Assuming back content is plain text for now based on createFlashcardAPI
        answerElement.textContent = backText;
        // If back content could be Markdown:
        // if (typeof marked !== 'undefined' && typeof DOMPurify !== 'undefined') {
        //     answerElement.innerHTML = DOMPurify.sanitize(marked.parse(backText));
        // } else {
        //     answerElement.textContent = backText; // Fallback
        // }
    }
    // --- End Handling Variations ---

    // Update progress display
    const progressElement = document.getElementById('flashcard-progress');
    if (progressElement) {
        progressElement.textContent = `${currentCardIndex + 1} / ${currentCollection.length}`;
    }

    // Ensure card is flipped back to the front side initially
    // --- ✅ [إضافة جديدة] معالج النقر لقلب البطاقة ---
    // 1. [إصلاح] إعادة البطاقة إلى الوجه الأمامي (حتى لا تبقى مقلوبة عند التنقل)
    const flashcardElement = document.querySelector('.flashcard');
    if (flashcardElement) {
        flashcardElement.classList.remove('is-flipped');
    }

    // 2. [سليم] تفعيل/تعطيل الأزرار بناءً على البطاقة الحالية
    const prevBtn = document.getElementById('prev-flashcard-btn');
    const nextBtn = document.getElementById('next-flashcard-btn');
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === currentCollection.length - 1;
}
// ===================================================================
// --- معالجات الأحداث (Event Handlers) ---
// ===================================================================
// --- ✅ [إضافة جديدة] معالجات أحداث عارض البطاقات (تُضاف مرة واحدة) ---

// 1. معالج "قلب البطاقة"
const cardContainer = document.getElementById('flashcard-card-container');
if (cardContainer) {
    cardContainer.addEventListener('click', (event) => {
        // ابحث عن البطاقة التي تم النقر عليها
        const flashcard = event.target.closest('.flashcard');
        if (flashcard) {
            flashcard.classList.toggle('is-flipped');
        }
    });
} else {
    console.warn("Flashcard container (#flashcard-card-container) not found.");
}

// 2. معالج زر "السابق"
const prevFlashcardBtn = document.getElementById('prev-flashcard-btn');
if (prevFlashcardBtn) {
    prevFlashcardBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            displayCurrentFlashcard(); // فقط استدعاء العرض
        }
    });
} else {
    console.warn("Previous flashcard button (#prev-flashcard-btn) not found.");
}

// 3. معالج زر "التالي"
const nextFlashcardBtn = document.getElementById('next-flashcard-btn');
if (nextFlashcardBtn) {
    nextFlashcardBtn.addEventListener('click', () => {
        if (currentCollection && currentCardIndex < currentCollection.length - 1) {
            currentCardIndex++;
            displayCurrentFlashcard(); // فقط استدعاء العرض
        }
    });
} else {
    console.warn("Next flashcard button (#next-flashcard-btn) not found.");
}
// --- نهاية الإضافة ---
// --- زر تبديل الثيم ---
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Determine current theme and save to localStorage
        const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', currentTheme);
        // Update the icon (Sun/Moon)
        updateThemeToggleIcon(currentTheme);
    });
}

// --- روابط شريط التنقل ---
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link navigation

        const targetId = this.getAttribute('href'); // e.g., "#home-page"
        const pageType = this.dataset.pageType; // e.g., "quizzes"

        // 1. Handle content type selection (Summaries, Quizzes, Lessons)
        if (pageType) {
            currentContentType = pageType;
            localStorage.setItem('currentContentType', currentContentType); // ✅ حفظ النوع
            // Visually activate the clicked link and deactivate others
            navLinks.forEach(l => l.classList.remove('active-link'));
            this.classList.add('active-link');
        }

        // 2. Check Authentication & Setup before showing protected pages
        const protectedTargets = ['#dashboard-page', '#flashcards-page', '#subjects-page', '#content-display-page', '#lessons-display-page', '#pdfs-display-page'];
        const targetIsProtected = protectedTargets.includes(targetId) || !!pageType; // Any content type page is protected

        if (targetIsProtected) {
            if (!isLoggedIn) {
                logoutUser(); // Redirect to login if not logged in
                return; // Stop execution
            } else if (!isYearChosen) {
                showPage('#year-selection-page'); // Show year selection if needed
                return; // Stop execution
            }
            // Add activation check if necessary
            // else if (!isActivated) {
            //     showPage('#activation-page');
            //     return;
            // }
        }

        // 3. Determine which page to show
        let pageToShow = targetId;
        if (pageType) {
            pageToShow = '#subjects-page'; // Content types always lead to subject selection first
        }

        // 4. Show the target page (showPage handles data loading like dashboard/flashcards)
        showPage(pageToShow);
    });
});

// --- أزرار البدء والاستكشاف في الصفحة الرئيسية ---
function handleStartAndExplore() {
    if (!isLoggedIn) {
        window.location.href = 'login.html'; // Go to login if not logged in
    } else if (!isYearChosen) {
        showPage('#year-selection-page'); // Show year select if needed
    }
    // Add activation check if required by your logic
    // else if (!isActivated) { 
    //     showPage('#activation-page'); 
    // } 
    else {
        // If year chosen (and activated, if needed)
        // Default to 'lessons' if no content type is selected yet
        if (!currentContentType) {
            currentContentType = 'lessons';
            localStorage.setItem('currentContentType', currentContentType); // Save default
            const lessonsLink = document.querySelector('a[data-page-type="lessons"]');
            if (lessonsLink) {
                navLinks.forEach(l => l.classList.remove('active-link')); // Deactivate others
                lessonsLink.classList.add('active-link'); // Activate lessons link
            }
        }
        showPage('#subjects-page'); // Go to subject selection
    }
}
// Attach handler to both buttons
if (startLearningBtn) startLearningBtn.addEventListener('click', handleStartAndExplore);
if (exploreContentBtn) exploreContentBtn.addEventListener('click', handleStartAndExplore);


// --- أزرار اختيار السنة ---
if (yearSelectBtns) {
    yearSelectBtns.forEach(btn => {
        btn.addEventListener('click', async function () {
            const year = this.dataset.year;

            showNotification(`Saving year ${year}...`, 'info'); // Show feedback
            btn.disabled = true; // Disable button temporarily

            try {
                // Use fetchApi to update the user's year
                const data = await fetchApi('/api/user/year', {
                    method: 'PUT',
                    body: JSON.stringify({ year: year })
                });

                // Update local state and localStorage on success
                selectedYear = data.user.studyYear;
                isYearChosen = true;
                localStorage.setItem('isYearChosen', 'true');
                localStorage.setItem('selectedYear', selectedYear);

                showNotification(`Year ${selectedYear} has been saved!`, 'success');
                updateUI(); // Refresh UI to show the appropriate page (e.g., home)

            } catch (error) {
                console.error('Error updating year:', error);
                showNotification(error.message || 'Could not save your selection.', 'error');
            } finally {
                btn.disabled = false; // Re-enable button
            }
        });
    });
}

// --- زر تأكيد التفعيل ---
if (confirmActivationBtn) {
    confirmActivationBtn.addEventListener('click', async () => {

        confirmActivationBtn.disabled = true;
        confirmActivationBtn.textContent = 'Activating...';
        if (activationStatusMessage) {
            activationStatusMessage.textContent = 'Processing activation...';
            activationStatusMessage.style.color = 'orange';
        }

        try {
            // Use fetchApi to send activation request
            const data = await fetchApi('/api/user/activate', { method: 'POST' });

            // Update state on success
            isActivated = true;
            localStorage.setItem('isActivated', 'true');
            showNotification(data.message || 'Account activated successfully!', 'success');

            if (activationStatusMessage) {
                activationStatusMessage.textContent = 'Activation successful! Redirecting...';
                activationStatusMessage.style.color = 'green';
            }
            // Redirect after a short delay
            setTimeout(() => {
                updateUI(); // Update UI to show the main content
                if (activationStatusMessage) activationStatusMessage.textContent = ''; // Clear message
            }, 1500);

        } catch (error) {
            console.error('Error during activation:', error);
            showNotification(error.message || 'Activation failed.', 'error');
            if (activationStatusMessage) {
                activationStatusMessage.textContent = `Activation failed: ${error.message}. Please try again or contact support.`;
                activationStatusMessage.style.color = 'red';
            }
        } finally {
            confirmActivationBtn.disabled = false;
            confirmActivationBtn.textContent = 'Confirm Activation (Simulated)'; // Reset button text
        }
    });
}

// --- أزرار الرجوع المختلفة ---
if (backToHomeBtn) backToHomeBtn.addEventListener('click', () => showPage('#home-page'));

if (backToYearSelectBtn) {
    backToYearSelectBtn.addEventListener('click', () => {
        // Clear year selection state
        isYearChosen = false;
        selectedYear = null;
        localStorage.removeItem('isYearChosen');
        localStorage.removeItem('selectedYear');
        // Go back to year selection page
        updateUI();
    });
}

if (backToSubjectsBtn) backToSubjectsBtn.addEventListener('click', () => showPage('#subjects-page'));
// Note: Back button from PDF list is handled in showPdfsForLesson function

// --- AI Chat Modal Controls ---
if (aiChatBtn) aiChatBtn.addEventListener('click', () => {
    if (aiChatModal) aiChatModal.classList.add('active');
    if (userChatInput) userChatInput.focus(); // Focus input when opened
});

if (closeChatBtn) closeChatBtn.addEventListener('click', () => {
    if (aiChatModal) aiChatModal.classList.remove('active');
});

// Close modal if clicking outside the chat box
if (aiChatModal) {
    aiChatModal.addEventListener('click', (e) => {
        if (e.target === aiChatModal) { // Check if the click is on the overlay itself
            aiChatModal.classList.remove('active');
        }
    });
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aiChatModal && aiChatModal.classList.contains('active')) {
        aiChatModal.classList.remove('active');
    }
});

// --- Sending Chat Messages ---
if (sendChatButton) sendChatButton.addEventListener('click', sendChatMessage);
if (userChatInput) {
    userChatInput.addEventListener('keypress', (e) => {
        // Send message on Enter key press, prevent default line break
        if (e.key === 'Enter' && !e.shiftKey) { // Allow Shift+Enter for new lines if needed later
            e.preventDefault();
            sendChatMessage();
        }
    });
}

// --- File Upload Buttons ---
if (uploadPdfBtn) uploadPdfBtn.addEventListener('click', () => pdfFileInput?.click()); // Use optional chaining
if (pdfFileInput) {
    pdfFileInput.addEventListener('change', async (event) => {
        const file = event.target.files?.[0]; // Use optional chaining
        if (!file) return;

        addMessageToChat(`Processing PDF: "${file.name}"...`, 'user-message'); // Show processing message

        try {
            const extractedText = await extractTextFromPdf(file);
            showNotification('PDF processed successfully!', 'success');

            // Handle image-based PDFs or empty text
            if (!extractedText || extractedText.trim().length === 0) {
                showNotification('Could not extract text from this PDF. It might be image-based or empty.', 'warning');
                return;
            }

            // Prompt user for their question about the PDF content
            const userQuestion = prompt("PDF text extracted. What is your question about its content?", "Summarize this document");

            if (userQuestion) { // If user provided a question (didn't cancel prompt)
                const userFriendlyQuestion = `(Regarding PDF: ${file.name}) ${userQuestion}`;
                addMessageToChat(userFriendlyQuestion, 'user-message'); // Show the question in chat

                // Prepare prompt for the API, including extracted text (limit length if necessary)
                const maxTextLength = 15000; // Limit text length to avoid overly long API requests
                const truncatedText = extractedText.substring(0, maxTextLength);
                if (extractedText.length > maxTextLength) {
                    showNotification('PDF text truncated due to length limits.', 'info');
                }

                const fullPromptForApi = `Based on the following document text, please answer the user's request.\n\nUser Request: "${userQuestion}"\n\n--- Document Text ---\n\n${truncatedText}`;

                // Send request using a temporary history
                const apiHistory = [...chatHistory, { role: "user", content: fullPromptForApi }];
                sendApiRequest(apiHistory, true); // Send as part of main conversation
            }
        } catch (err) {
            // Handle errors from extractTextFromPdf or sendApiRequest
            showNotification(err.toString(), 'error');
            console.error("Error processing PDF:", err);
        } finally {
            pdfFileInput.value = ''; // Reset file input
        }
    });
}

if (uploadImageBtn) uploadImageBtn.addEventListener('click', () => imageFileInput?.click());
if (imageFileInput) {
    imageFileInput.addEventListener('change', async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Prompt for context/question about the image
        const q = prompt("Image selected. What should I analyze or describe? (e.g., 'Describe this dental image', 'What condition is shown?')", "Describe this image in detail.");

        if (q) { // Proceed if user provided a prompt
            await sendImageAndPromptToGemini(q, file);
        }
        imageFileInput.value = ''; // Reset file input
    });
}

if (uploadAudioBtn) uploadAudioBtn.addEventListener('click', () => audioFileInput?.click());
if (audioFileInput) {
    audioFileInput.addEventListener('change', async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Prompt for action on the audio file
        const q = prompt("Audio file selected. What should I do? (e.g., 'Transcribe this lecture', 'Summarize the key points')", "Transcribe this audio.");

        if (q) { // Proceed if user provided a prompt
            await sendAudioAndPromptToGemini(q, file);
        }
        audioFileInput.value = ''; // Reset file input
    });
}

// --- Chat Attachment (+) Button and Options ---
if (chatPlusBtn && uploadOptions) {
    // Toggle options visibility on button click
    chatPlusBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling up to document
        uploadOptions.classList.toggle('show');
        chatPlusBtn.classList.toggle('rotated'); // Rotate the '+' icon
    });

    // Close options if clicking anywhere else on the document
    document.addEventListener('click', (e) => {
        // Check if the click was outside the options menu and the plus button
        if (!uploadOptions.contains(e.target) && !chatPlusBtn.contains(e.target) && uploadOptions.classList.contains('show')) {
            uploadOptions.classList.remove('show');
            chatPlusBtn.classList.remove('rotated'); // Rotate back
        }
    });

    // Prevent closing when clicking inside the options menu itself
    uploadOptions.addEventListener('click', (e) => e.stopPropagation());
}

// --- Chat Box Dragging and Resizing Logic ---
let isDragging = false, isResizing = false;
let offsetX, offsetY, initialWidth, initialHeight, initialMouseX, initialMouseY;

// Dragging functionality (using the header)
if (chatHeader) {
    chatHeader.addEventListener('mousedown', (e) => {
        // Ignore drag if clicking on buttons within the header
        if (e.target.closest('.close-chat-btn') || e.target.closest('#chat-controls button')) return;

        isDragging = true;
        // Calculate offset from top-left corner of the chat box
        offsetX = e.clientX - aiChatBox.offsetLeft;
        offsetY = e.clientY - aiChatBox.offsetTop;
        aiChatBox.classList.add('is-dragging'); // Add class for visual feedback (optional)
        chatHeader.style.cursor = 'grabbing'; // Change cursor while dragging
    });
}

// Resizing functionality (using the resize handle)
if (resizeHandle) {
    resizeHandle.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Prevent text selection during resize
        isResizing = true;
        // Record initial dimensions and mouse position
        initialWidth = aiChatBox.offsetWidth;
        initialHeight = aiChatBox.offsetHeight;
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
        // Change cursor for resize handle itself (can also be done in CSS)
        // resizeHandle.style.cursor = 'se-resize'; 
    });
}

// Handle mouse movement for dragging and resizing
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        e.preventDefault(); // Prevent text selection
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        // Constrain dragging within viewport boundaries
        const maxLeft = window.innerWidth - aiChatBox.offsetWidth;
        const maxTop = window.innerHeight - aiChatBox.offsetHeight;
        aiChatBox.style.left = `${Math.max(0, Math.min(newLeft, maxLeft))}px`;
        aiChatBox.style.top = `${Math.max(0, Math.min(newTop, maxTop))}px`;
        // Reset transform if previously centered using translate(-50%, -50%)
        aiChatBox.style.transform = 'none';
    }
    if (isResizing) {
        e.preventDefault(); // Prevent text selection
        const dx = e.clientX - initialMouseX; // Change in X
        const dy = e.clientY - initialMouseY; // Change in Y

        // Calculate new dimensions, apply minimum constraints
        const newWidth = Math.max(300, initialWidth + dx); // Min width 300px
        const newHeight = Math.max(400, initialHeight + dy); // Min height 400px

        aiChatBox.style.width = `${newWidth}px`;
        aiChatBox.style.height = `${newHeight}px`;
    }
});

// Handle mouse up to stop dragging or resizing
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        aiChatBox.classList.remove('is-dragging');
        if (chatHeader) chatHeader.style.cursor = 'grab'; // Reset cursor
    }
    if (isResizing) {
        isResizing = false;
        // Reset resize handle cursor if needed
        // if(resizeHandle) resizeHandle.style.cursor = 'se-resize';
    }
});

// --- Pomodoro Timer Event Handlers ---
if (pomodoroToggleBtn) {
    pomodoroToggleBtn.addEventListener('click', () => {
        if (!pomodoroModal) return;
        // Show timer view if active, otherwise show settings
        switchPomodoroView(isPomodoroActive ? 'timer' : 'settings');
        pomodoroModal.classList.add('active'); // Show the modal
    });
}

// Close Pomodoro modal if clicking outside the box
if (pomodoroModal) {
    pomodoroModal.addEventListener('click', (e) => {
        if (e.target === pomodoroModal) { // Click on overlay
            pomodoroModal.classList.remove('active');
            // Restore original page title if timer wasn't running or was paused
            if (isPaused || !isPomodoroActive) document.title = originalDocTitle;
        }
    });
}

// Close Pomodoro modal using close buttons
closePomodoroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (pomodoroModal) pomodoroModal.classList.remove('active');
        if (isPaused || !isPomodoroActive) document.title = originalDocTitle;
    });
});

// Start Pomodoro button (from settings)
if (startPomodoroBtn) {
    startPomodoroBtn.addEventListener('click', () => {
        // Read settings from input fields, with validation/defaults
        settings = {
            focusDuration: parseInt(focusDurationInput?.value) || 25,
            shortBreakDuration: parseInt(shortBreakDurationInput?.value) || 5,
            longBreakDuration: parseInt(longBreakDurationInput?.value) || 30,
            sessionsBeforeLongBreak: parseInt(sessionsInput?.value) || 4
        };
        // Ensure values are positive
        settings.focusDuration = Math.max(1, settings.focusDuration);
        settings.shortBreakDuration = Math.max(1, settings.shortBreakDuration);
        settings.longBreakDuration = Math.max(1, settings.longBreakDuration);
        settings.sessionsBeforeLongBreak = Math.max(1, settings.sessionsBeforeLongBreak);

        isPomodoroActive = true; // Mark Pomodoro as active
        currentSession = 'focus'; // Start with a focus session
        sessionsCompleted = 0; // Reset session count
        totalSeconds = settings.focusDuration * 60; // Set initial time
        secondsLeft = totalSeconds;

        // Update UI for the timer view
        if (sessionTitleEl) sessionTitleEl.textContent = 'Focus';
        if (sessionCounterEl) sessionCounterEl.textContent = `Session 1 / ${settings.sessionsBeforeLongBreak}`;
        updateTimerDisplay(); // Initial time display
        switchPomodoroView('timer'); // Switch to timer view
        startPomodoroTimer(); // Start the timer countdown
    });
}

// Pause/Resume button (in timer view)
if (pauseResumeBtn) {
    pauseResumeBtn.addEventListener('click', () => {
        if (isPaused) {
            startPomodoroTimer(); // Resume if paused
        } else {
            pausePomodoroTimer(); // Pause if running
        }
    });
}

// Reset button (stops the whole cycle)
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        // Confirm before resetting
        if (confirm('Are you sure you want to stop and reset the entire Pomodoro cycle?')) {
            stopAndResetPomodoroCycle(); // Stop and go back to settings
        }
    });
}

// Skip button (skips to the next session - focus/break)
if (skipPomodoroBtn) {
    skipPomodoroBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to skip to the next session?')) {
            switchPomodoroSession(); // Move to the next session immediately
        }
    });
}

// --- ✅ [إصلاح] زر تفعيل/إيقاف مؤقت الكويز ---
if (toggleQuizTimerBtn) {
    // Set initial icon based on isQuizTimerActive state
    toggleQuizTimerBtn.innerHTML = isQuizTimerActive ? '<i class="fas fa-power-off"></i>' : '<i class="fas fa-play"></i>';

    toggleQuizTimerBtn.addEventListener('click', () => {
        isQuizTimerActive = !isQuizTimerActive; // Toggle the state

        if (isQuizTimerActive) {
            // --- Logic to RESUME or RESTART timer ---
            toggleQuizTimerBtn.innerHTML = '<i class="fas fa-power-off"></i>'; // Show power-off icon
            showNotification('Question timer ON', 'info');

            // Resume only if a quiz is running and the current question is NOT answered
            if (quizTimerInterval === null && proQuiz && proUserAnswers[proQuestionIndex] === null) {
                // Try to get remaining time from display (less accurate but fallback)
                let remainingTime = 0;
                if (quizTimerDisplay?.textContent && quizTimerDisplay.textContent.includes(':')) {
                    const parts = quizTimerDisplay.textContent.split(':');
                    remainingTime = (parseInt(parts[0]) * 60) + parseInt(parts[1]);
                }

                // If time ran out previously (remaining is 0 or NaN) OR display was 'Off'/'Answered', restart with full duration
                if (remainingTime <= 0 || isNaN(remainingTime) || ["Off", "Answered"].includes(quizTimerDisplay?.textContent)) {
                    const currentQuestion = proQuiz.questions[proQuestionIndex];
                    startQuizTimer(currentQuestion?.timer || 90); // Restart with question's timer or default
                } else {
                    startQuizTimer(remainingTime); // Resume from remaining time
                }
            }
        } else {
            // --- Logic to PAUSE timer ---
            clearInterval(quizTimerInterval);
            quizTimerInterval = null; // Mark as stopped
            toggleQuizTimerBtn.innerHTML = '<i class="fas fa-play"></i>'; // Show play icon
            if (quizTimerDisplay) quizTimerDisplay.textContent = 'Off';
            if (quizTimerDisplay) quizTimerDisplay.style.opacity = '0.6';
            if (quizTimerContainer) quizTimerContainer.classList.remove('warning');
            showNotification('Question timer OFF', 'info');
        }
    });
}
// --- نهاية إصلاح مؤقت الكويز ---

// --- Quiz Navigation Buttons ---
if (quizActionBtn) quizActionBtn.addEventListener('click', checkAnswer);

if (quizPrevBtn) {
    quizPrevBtn.addEventListener('click', () => {
        if (proQuestionIndex > 0) {
            proQuestionIndex--;
            renderCurrentQuestion();
            saveQuizState(); // ✅ حفظ الحالة عند الرجوع
        }
    });
}

if (quizNextBtn_pro) {
    quizNextBtn_pro.addEventListener('click', () => {
        // Ensure current question is answered before proceeding (should be, as button is hidden otherwise)
        if (proUserAnswers[proQuestionIndex] === null) {
            // This case should ideally not happen if controls are updated correctly
            showNotification('Please answer the current question or skip it.', 'info');
            return;
        }

        // Check if it's the last question
        if (proQuestionIndex === proQuiz.questions.length - 1) {
            submitQuizResults(); // Finish the quiz
        } else {
            proQuestionIndex++; // Move to the next question
            renderCurrentQuestion(); // Display the next question
            saveQuizState(); // ✅ حفظ الحالة عند التقدم
        }
    });
}

// ✅ --- زر التخطي (Skip Button) ---
if (quizSkipBtn) {
    quizSkipBtn.addEventListener('click', () => {
        // Mark as unanswered or explicitly skipped (using null is simpler for now)
        // We don't mark as incorrect immediately, user might come back
        // proUserAnswers[proQuestionIndex] = { selectedIndexes: [], isCorrect: false }; // Option: Mark as incorrect immediately

        // Just move to the next question without saving an answer for the current one
        if (proQuestionIndex < proQuiz.questions.length - 1) {
            proQuestionIndex++;
            renderCurrentQuestion();
            saveQuizState(); // ✅ حفظ الحالة بعد التخطي
        } else {
            // If skipping the last question, consider it finished
            submitQuizResults();
        }
    });
}


// --- AI HUB IMPLEMENTATION ---
const aiHubBtn = document.querySelector('.ai-chat-btn'); // Assuming this opens the AI Hub now
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
// ▼▼▼ [إضافة جديدة] تعريف عناصر نافذة النحت ▼▼▼
const sculptureEvalModalOverlay = document.getElementById('sculptureEvalModalOverlay');
const closeSculptureEvalBtn = document.getElementById('closeSculptureEvalBtn');
const sculptureEvalForm = document.getElementById('sculptureEvalForm');
const evalImagesInput = document.getElementById('evalImages');
const startEvalBtn = document.getElementById('startEvalBtn');
const evalLoadingIndicator = document.getElementById('evalLoadingIndicator');
const evalOutput = document.getElementById('evalOutput');
// ▲▲▲ نهاية الإضافة ▲▲▲
let currentAiTask = ''; // Stores the task selected ('quiz', 'flashcards', etc.)

// Open AI Hub modal
// ▼▼▼ [تعديل ذكي] توجيه حسب السنة ▼▼▼
if (aiHubBtn && aiHubOverlay) {
    aiHubBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // 1. إذا كان الطالب سنة ثانية: نفتح القائمة (لأن لديه خيار النحت)
        if (selectedYear === '2') {
            const sculptureCard = document.getElementById('sculpture-eval-card');
            if (sculptureCard) sculptureCard.style.display = 'block';
            aiHubOverlay.style.display = 'flex';
        }
        // 2. باقي السنوات: توجيه مباشر لـ Smart Study
        else {
            aiHubOverlay.style.display = 'none'; // إغلاق القائمة
            currentContentType = 'smart-study'; // ضبط الوضع
            localStorage.setItem('currentContentType', 'smart-study');

            // تفعيل الرابط في الهيدر
            navLinks.forEach(l => l.classList.remove('active-link'));
            const smartLink = document.querySelector('a[data-page-type="smart-study"]');
            if (smartLink) smartLink.classList.add('active-link');

            // الذهاب لصفحة المواد
            showPage('#subjects-page');
            animateCarouselAssembly(selectedYear);
        }
    });
}
// ▲▲▲ نهاية التعديل ▲▲▲

// Close AI Hub modal
if (closeHubBtn && aiHubOverlay) {
    closeHubBtn.addEventListener('click', () => {
        aiHubOverlay.style.display = 'none';
    });
}
// Close AI Hub modal on overlay click
if (aiHubOverlay) {
    aiHubOverlay.addEventListener('click', (e) => {
        if (e.target === aiHubOverlay) aiHubOverlay.style.display = 'none';
    });
}

// Close AI Processor modal
if (closeProcessorBtn && aiProcessorOverlay) {
    closeProcessorBtn.addEventListener('click', () => {
        aiProcessorOverlay.style.display = 'none';
    });
}
// Close AI Processor modal on overlay click
if (aiProcessorOverlay) {
    aiProcessorOverlay.addEventListener('click', (e) => {
        if (e.target === aiProcessorOverlay) aiProcessorOverlay.style.display = 'none';
    });
}


// --- Handling clicks on AI option cards (Quiz, Flashcards, Summary, Chat) ---
const quizOptionsGenContainer = document.getElementById('quiz-options-container'); // Renamed ID
const flashcardOptionsGenContainer = document.getElementById('flashcard-options-container'); // Renamed ID

if (aiOptionCards.length > 0 && aiHubOverlay && aiProcessorOverlay && processorTitle && aiFileForm && aiLoadingIndicator && aiProcessBtn && quizOptionsGenContainer && flashcardOptionsGenContainer) {
    aiOptionCards.forEach(card => {
        card.addEventListener('click', async () => {
            currentAiTask = card.dataset.task; // Get task type (chat, quiz, flashcards, summary)
            if (!currentAiTask) return;

            aiHubOverlay.style.display = 'none'; // Close the Hub selection modal

            if (currentAiTask === 'chat') {
                // Directly open the chat modal if 'chat' is selected
                if (aiChatModal) aiChatModal.classList.add('active');
                if (userChatInput) userChatInput.focus();
            } else if (currentAiTask === 'sculpture') {
                // ▼▼▼ [إضافة جديدة] معالجة بطاقة النحت ▼▼▼

                // (التحقق مرة أخرى للأمان)
                if (selectedYear !== '2') {
                    showNotification("This feature is exclusively for 2nd year students.", "warning");
                    return;
                }

                // تنظيف النافذة قبل إظهارها
                sculptureEvalForm.reset();
                sculptureEvalForm.style.display = 'block';
                evalLoadingIndicator.style.display = 'none';
                evalOutput.style.display = 'none';
                evalOutput.querySelector('#evaluation-text-output').textContent = ''; // مسح النص
                evalOutput.querySelector('#image-annotation-container').style.display = 'none'; // إخفاء حاوية الصورة
                evalOutput.querySelectorAll('.annotation-dot').forEach(dot => dot.remove()); // مسح النقاط

                // إظهار نافذة النحت
                sculptureEvalModalOverlay.style.display = 'flex';

                // ▲▲▲ نهاية الإضافة ▲▲▲
            } else {
                // For other tasks (quiz, flashcards, summary), open the file processor modal
                // ... rest of your existing code

                // For other tasks (quiz, flashcards, summary), open the file processor modal

                // --- Remember Subject Context ---
                const activeCarouselItem = document.querySelector('.carousel-item.active');
                if (!activeCarouselItem || !activeCarouselItem.dataset.subjectKey || !selectedYear) {
                    showNotification("Please select a subject from the list before generating content.", "error");
                    return; // Stop if no subject selected
                }
                // Store context immediately before showing the processor
                // ✅ الكود الصحيح
                try {
                    // --- هذا هو المنطق الجديد والصحيح ---

                    // 1. (جديد) اجلب كل المواد للسنة الحالية من الخادم
                    const subjectsInYear = await fetchSubjectsByYear(selectedYear);

                    // 2. (جديد) ابحث عن المادة التي اختارها المستخدم (باستخدام الكود)
                    const currentSubject = subjectsInYear.find(s => s.key === activeCarouselItem.dataset.subjectKey);

                    // 3. (جديد) تأكد أننا وجدنا المادة وأنها تحتوي على _id
                    if (!currentSubject || !currentSubject._id) {
                        throw new Error(`Could not find subject data or ID for key: ${activeCarouselItem.dataset.subjectKey}`);
                    }

                    // 4. (هذا الكود سليم) قم بتعيين السياق باستخدام المتغير الصحيح
                    currentAiGenerationContext = {
                        subjectId: currentSubject._id,   // <-- هذا الآن صحيح
                        subjectName: currentSubject.name // <-- وهذا أيضاً صحيح
                    };
                    console.log("AI Generation Context Set:", currentAiGenerationContext);
                    // --- نهاية الكود الجديد ---

                } catch (error) {
                    showNotification(`Error setting subject context: ${error.message}`, 'error');
                    return; // Stop if context cannot be set
                }
                // --- End Remember Subject Context ---


                // Prepare the processor modal UI
                processorTitle.textContent = `Generate ${currentAiTask.charAt(0).toUpperCase() + currentAiTask.slice(1)} from PDF`;
                aiFileForm.style.display = 'flex'; // Show the form
                aiLoadingIndicator.style.display = 'none'; // Hide loading indicator
                aiProcessBtn.disabled = false; // Enable submit button
                aiFileForm.reset(); // Clear any previous file selection

                // Show/hide specific options based on the task
                quizOptionsGenContainer.style.display = (currentAiTask === 'quiz') ? 'block' : 'none';
                flashcardOptionsGenContainer.style.display = (currentAiTask === 'flashcards') ? 'block' : 'none';

                aiProcessorOverlay.style.display = 'flex'; // Show the processor modal
            }
        });
    });
} else {
    console.warn("One or more AI Hub/Processor elements are missing. AI generation features might not work.");
}

// --- Handling the AI File Form Submission ---
if (aiFileForm && aiPdfInput && aiLoadingIndicator && aiProcessBtn && aiProcessorOverlay) {
    aiFileForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent standard form submission

        const file = aiPdfInput.files?.[0];
        if (!file) {
            showNotification('Please select a PDF file.', 'error');
            return;
        }

        // Double-check subject context (should be set when modal opened)
        if (!currentAiGenerationContext.subjectId || !currentAiGenerationContext.subjectName) {
            showNotification('Error: Subject context is missing. Please select a subject first.', 'error');
            return;
        }

        // Show loading state, hide form
        aiFileForm.style.display = 'none';
        aiLoadingIndicator.style.display = 'block';
        aiProcessBtn.disabled = true;

        const formData = new FormData();
        formData.append('pdfFile', file);
        // Append subject context to formData
        formData.append('subjectId', currentAiGenerationContext.subjectId); // Or send key if backend handles it
        formData.append('subjectName', currentAiGenerationContext.subjectName);

        let endpoint = '';

        // Determine endpoint and add task-specific options
        switch (currentAiTask) {
            case 'quiz':
                endpoint = '/api/gemini/generateQuiz';
                formData.append('count', document.getElementById('ai-quiz-count')?.value || '10'); // Add question count
                break;
            case 'flashcards':
                endpoint = '/api/gemini/generateFlashcards';
                formData.append('count', document.getElementById('ai-flashcard-count')?.value || '10'); // Add card count
                formData.append('language', document.getElementById('ai-generation-language')?.value || 'the same language as the document'); // Add language
                break;
            case 'summary': // Assuming 'summary' task generates a mind map
                endpoint = '/api/gemini/generateMindMap';
                // Add any specific options for mind map generation if needed
                break;
            default:
                showNotification('Unknown AI task selected.', 'error');
                // Reset UI
                aiFileForm.style.display = 'flex';
                aiLoadingIndicator.style.display = 'none';
                aiProcessBtn.disabled = false;
                return; // Stop processing
        }

        try {
            // Use fetchApi for the generation request
            const data = await fetchApi(endpoint, {
                method: 'POST',
                headers: {}, // Let browser set Content-Type for FormData
                body: formData
            });

            // Close processor modal on success
            aiProcessorOverlay.style.display = 'none';
            showNotification(`${currentAiTask.charAt(0).toUpperCase() + currentAiTask.slice(1)} generated successfully!`, 'success');

            // Handle the response based on the task
            if (currentAiTask === 'summary') {
                displayMindMap(data);
            } else if (currentAiTask === 'quiz') {
                startAIGeneratedQuiz(data); // Pass the generated questions array
            } else if (currentAiTask === 'flashcards') {
                displayGeneratedFlashcards(data); // Pass the generated cards array
            }

        } catch (error) {
            console.error(`Error generating ${currentAiTask}:`, error);
            showNotification(`Failed to generate ${currentAiTask}: ${error.message}`, "error");
            // Keep the processor modal open on error to allow retry or file change
        } finally {
            // Reset UI elements in the processor modal for the next use (even on error)
            aiFileForm.style.display = 'flex'; // Show form again
            aiLoadingIndicator.style.display = 'none'; // Hide loading
            aiProcessBtn.disabled = false; // Re-enable button
            // Don't reset the form here automatically on error, user might want to retry with same file/options
            // aiFileForm.reset(); 
        }
    });
} else {
    console.warn("AI file form elements missing. PDF processing might not work.");
}

// Back button on the (now unused?) mindmap page
// const mindmapBackBtn = document.getElementById('mindmap-back-btn');
// if (mindmapBackBtn) {
//     mindmapBackBtn.addEventListener('click', () => {
//         showPage('#home-page'); // Or perhaps back to subjects?
//     });
// }
// ▼▼▼ [إضافة جديدة] معالج نافذة تقييم النحت بالكامل ▼▼▼

// --- إغلاق نافذة النحت ---
if (closeSculptureEvalBtn && sculptureEvalModalOverlay) {
    closeSculptureEvalBtn.addEventListener('click', () => {
        sculptureEvalModalOverlay.style.display = 'none';
    });
}
if (sculptureEvalModalOverlay) {
    sculptureEvalModalOverlay.addEventListener('click', (e) => {
        if (e.target === sculptureEvalModalOverlay) {
            sculptureEvalModalOverlay.style.display = 'none';
        }
    });
}

// --- معالجة إرسال الفورم (الرفع والنتائج) ---
if (sculptureEvalForm) {
    sculptureEvalForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const files = evalImagesInput.files;
        if (!files || files.length === 0) {
            showNotification("Please select at least one image.", "error");
            return;
        }
        if (files.length > 3) {
            showNotification("You can upload a maximum of 3 images.", "error");
            return;
        }

        // إظهار التحميل وإخفاء الفورم
        sculptureEvalForm.style.display = 'none';
        evalLoadingIndicator.style.display = 'block';
        evalOutput.style.display = 'none';

        const formData = new FormData();
        // إضافة الملفات (الباك اند سيتعامل معها كـ 'images')
        for (let i = 0; i < files.length; i++) {
            formData.append('images', files[i]);
        }

        try {
            // استخدام دالة fetchApi الذكية
            // (هي تتعامل مع FormData والتوكن تلقائياً)
            const data = await fetchApi('/api/ai/evaluate', {
                method: 'POST',
                body: formData
            });

            if (data.success) {
                const aiResult = data.result; // { evaluationText, grade, errorCoordinates }

                // --- هذا هو كود "الرسام" ---

                // 1. عرض النص والدرجة
                const textOutput = document.getElementById('evaluation-text-output');
                textOutput.textContent = `--- Evaluation --- \n${aiResult.evaluationText}\n\n--- Grade --- \n${aiResult.grade} / 20`;

                // 2. إعداد حاوية الصورة
                const annotationContainer = document.getElementById('image-annotation-container');
                const imageBase = document.getElementById('annotated-image-base');

                // إزالة النقاط القديمة
                annotationContainer.querySelectorAll('.annotation-dot').forEach(dot => dot.remove());

                // 3. عرض الصورة الأصلية التي رفعها المستخدم (الأولى)
                const originalImageFile = files[0];
                if (originalImageFile) {
                    imageBase.src = URL.createObjectURL(originalImageFile);
                    annotationContainer.style.display = 'block';
                }

                // 4. رسم النقاط (الأهم)
                if (aiResult.errorCoordinates && aiResult.errorCoordinates.length > 0) {
                    aiResult.errorCoordinates.forEach(error => {
                        const dot = document.createElement('div');
                        dot.className = 'annotation-dot'; // (سنحتاج لإضافة هذا الـ class في style.css)
                        dot.style.position = 'absolute';
                        dot.style.left = `${error.x}%`;
                        dot.style.top = `${error.y}%`;
                        dot.style.width = '15px';
                        dot.style.height = '15px';
                        dot.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
                        dot.style.border = '2px solid white';
                        dot.style.borderRadius = '50%';
                        dot.style.transform = 'translate(-50%, -50%)';
                        dot.style.cursor = 'pointer';
                        dot.title = error.comment; // إظهار التعليق عند التمرير

                        dot.onclick = () => {
                            showNotification(`AI: "${error.comment}"`, 'info');
                        };

                        annotationContainer.appendChild(dot);
                    });
                }

                evalOutput.style.display = 'block'; // إظهار حاوية النتائج
                showNotification('Evaluation complete!', 'success');
            } else {
                // data.success === false
                throw new Error(data.error || 'The server reported an error.');
            }

        } catch (err) {
            // إظهار الخطأ في حاوية النص
            const textOutput = document.getElementById('evaluation-text-output');
            textOutput.textContent = 'A critical error occurred: ' + err.message;
            evalOutput.style.display = 'block'; // إظهار حاوية الخطأ
            showNotification(err.message || 'Evaluation failed.', 'error');
        } finally {
            // إخفاء التحميل وإظهار الفورم مجدداً (للسماح بإعادة المحاولة)
            evalLoadingIndicator.style.display = 'none';
            sculptureEvalForm.style.display = 'block';
        }
    });
}
// ▼▼▼ [إضافة جديدة] منطق حاسبة المعدل بالكامل ▼▼▼

// --- 1. قاعدة بيانات الحاسبة (Data Store) ---
// هنا نضع كل المعاملات والقوانين
const gradeDataStore = {
    "1": { // بيانات السنة الأولى (من ملفاتك)
        s1_coeffs: { "Anatomie": 4, "Histo-Cyto-Embryo": 4, "Biophysique": 3, "Biochimie": 3, "Biomaths": 3, "Chimie": 3, "Physique": 2, "Génétique": 2, "Anglais": 1, "Français": 1 },
        s2_coeffs: { "Anatomie": 4, "Histo-Cyto-Embryo": 4, "Biophysique": 3, "Biochimie": 3, "Biomaths": 3, "Chimie": 3, "Physiologie": 2, "SSH": 1, "Anglais": 1, "Français": 1 },
        // (سنقوم بإنشاء الـ HTML لهذه المواد ديناميكياً)
        formulas: {
            "y1_s1_Histo": (values) => (Math.max(values.td, values.cyto1) + values.histo) / 2,
            "y1_s1_Biochimie": (values) => (values.td * 0.3) + (values.emd * 0.7),
            // (يمكن إضافة باقي القوانين الخاصة هنا)
        }
    },
    "2": { // بيانات السنة الثانية (من الصورة والقانون)
        s1_coeffs: { "AnatomieDentaire": 3, "Histologie": 2, "Anglais": 1, "Hygiène": 1 },
        s2_coeffs: { "Parodontologie": 3, "Immunologie": 1, "Physiologie": 1, "Pathologie": 3 },
        annual_coeffs: { "OCE": 5, "Prothèse": 5, "AnatomieHumaine": 4, "ODF": 3, "Biomatériaux": 2, "Microbiologie": 2, "Informatique": 1 },
        // القوانين العامة للسنة الثانية
        formulas: {
            "y2_standard_tp": (values) => (values.th * 0.33) + (values.tp * 0.67), // 33% نظري, 67% عملي
            "y2_simple_th": (values) => values.th, // نظري فقط
            "y2_simple_tp": (values) => values.tp, // عملي فقط
        }
    },
    "3": { // بيانات السنة الثالثة (من البايثون والمعاملات)
        annual_coeffs: {
            "Pathologie": 5, "ODF": 5, "Prothèse": 5, "Parodontologie": 5, "Occlusodontie": 5,
            "Imagerie": 3,
            "Occlusion": 1, "Anesthésie": 1, "Anapath": 1, "Pharmacologie": 1
        },
        formulas: {
            "y3_standard": (values) => {
                let emds = [];
                if (values.emd1) emds.push(values.emd1);
                if (values.emd2) emds.push(values.emd2);
                if (values.emd3) emds.push(values.emd3);
                if (emds.length === 0) return (values.cc / 2); // احتياطي
                const avgEmd = emds.reduce((a, b) => a + b, 0) / emds.length;
                return (avgEmd + values.cc) / 2;
            },
            "y3_Prothèse": (values) => {
                const emds = [values.emd1, values.emd2, values.emd3];
                const avgEmd = emds.reduce((a, b) => a + b, 0) / 3;
                const part1 = (avgEmd + values.cc) / 2;
                return (part1 + (values.tp * 2)) / 3;
            }
        }
    }
};

// --- 2. تعريف عناصر DOM ---
const gradeCalcBtn = document.getElementById('grade-calc-btn');
const gradeCalcModalOverlay = document.getElementById('gradeCalcModalOverlay');
const closeGradeCalcModalBtn = document.getElementById('closeGradeCalcModalBtn');
const gradeCalcModalBox = gradeCalcModalOverlay.querySelector('.grade-calc-modal');

// --- 3. الدالة الرئيسية لفتح الحاسبة ---
function openGradeCalculator() {
    // selectedYear هو المتغير العام الذي يحمل سنة الطالب
    const year = selectedYear;

    // إخفاء جميع الحاويات أولاً
    document.getElementById('grade-calc-y1').style.display = 'none';
    document.getElementById('grade-calc-y2').style.display = 'none';
    document.getElementById('grade-calc-y3').style.display = 'none';
    document.getElementById('grade-calc-unsupported').style.display = 'none';

    let targetContainer;

    if (year === '1') {
        targetContainer = document.getElementById('grade-calc-y1');
        document.getElementById('grade-calc-title').textContent = "Calculateur de Moyenne (1ère Année)";
        // (يفضل استدعاء دالة لإنشاء HTML السنة الأولى هنا إذا لم يكن موجوداً)
    } else if (year === '2') {
        targetContainer = document.getElementById('grade-calc-y2');
        document.getElementById('grade-calc-title').textContent = "Calculateur de Moyenne (2ème Année)";
    } else if (year === '3') {
        targetContainer = document.getElementById('grade-calc-y3');
        document.getElementById('grade-calc-title').textContent = "Calculateur de Moyenne (3ème Année)";
    } else {
        // للسنوات 4, 5 والزوار
        targetContainer = document.getElementById('grade-calc-unsupported');
        document.getElementById('grade-calc-title').textContent = "Calculateur de Moyenne";
    }

    targetContainer.style.display = 'block';
    gradeCalcModalOverlay.classList.add('active'); // إظهار النافذة
}

// --- 4. ربط الأحداث ---
// ▼▼▼ [إضافة جديدة] منطق تبديل التبويبات (Tabs) داخل النافذة ▼▼▼
gradeCalcModalBox.addEventListener('click', (e) => {
    // التأكد أننا نضغط على زر تبويب (tab-link)
    if (e.target.classList.contains('tab-link')) {
        const link = e.target;
        const tabId = link.dataset.tab; // (مثال: "y1-s1" أو "y2-s2")

        // 1. العثور على حاوية الأزرار (tabs-nav)
        const tabsNav = link.closest('.tabs-nav');
        // 2. العثور على حاوية المحتوى الرئيسية (calculator-year-container)
        const yearContainer = link.closest('.calculator-year-container');

        if (!tabsNav || !yearContainer) return;

        // 3. إزالة 'active' من كل الأزرار والمحتويات داخل هذه السنة فقط
        tabsNav.querySelectorAll('.tab-link').forEach(item => item.classList.remove('active'));
        yearContainer.querySelectorAll('.tab-content').forEach(item => item.classList.remove('active'));

        // 4. تفعيل الزر والمحتوى الذي تم النقر عليه
        link.classList.add('active');
        const contentToShow = document.getElementById(tabId);
        if (contentToShow) {
            contentToShow.classList.add('active');
        } else {
            console.error(`Tab content with ID "${tabId}" not found!`);
        }
    }
});
// ▲▲▲ نهاية الإضافة ▲▲▲

// فتح النافذة
if (gradeCalcBtn) {
    gradeCalcBtn.addEventListener('click', openGradeCalculator);
}

// إغلاق النافذة
if (closeGradeCalcModalBtn) {
    closeGradeCalcModalBtn.addEventListener('click', () => {
        gradeCalcModalOverlay.classList.remove('active');
    });
}
if (gradeCalcModalOverlay) {
    gradeCalcModalOverlay.addEventListener('click', (e) => {
        if (e.target === gradeCalcModalOverlay) {
            gradeCalcModalOverlay.classList.remove('active');
        }
    });
}

// --- 5. منطق الحاسبة (باستخدام تفويض الأحداث) ---

// دالة مساعدة للحصول على القيمة
function getCalcValue(id) {
    const el = document.getElementById(id);
    if (!el) {
        console.error(`Element not found: ${id}`);
        return 0; // إرجاع صفر إذا كان الحقل غير موجود (مثل EMD 3 في مادة بها 2 فقط)
    }
    const value = parseFloat(el.value);
    return isNaN(value) ? 0 : value; // إرجاع صفر إذا كان فارغاً
}

// دالة مساعدة لإظهار النتيجة
function showCalcResult(resultId, moyenne) {
    const el = document.getElementById(resultId);
    if (!el) return;

    el.innerHTML = `Moyenne: <strong>${moyenne.toFixed(2)} / 20</strong>`;

    // تحديد التقدير
    let appreciation = '';
    let msgClass = 'success';
    if (moyenne >= 16) appreciation = "Excellent";
    else if (moyenne >= 14) appreciation = "Très Bien";
    else if (moyenne >= 12) appreciation = "Bien";
    else if (moyenne >= 10) appreciation = "Moyen";
    else {
        appreciation = "Faible (Rattrapage)";
        msgClass = 'danger';
    }

    el.innerHTML += `<br><small>Appréciation: ${appreciation}</small>`;
    el.className = `result-text ${msgClass}`; // تطبيق التنسيق
    el.style.display = 'block';
    return moyenne;
}

// دالة مساعدة للملء التلقائي
function autoFill(fieldId, value) {
    const el = document.getElementById(fieldId);
    if (el) {
        el.value = value.toFixed(2);
    }
}

// دالة حساب المعدل العام (موزون)
function calculateWeightedAverage(coeffs, prefix) {
    let sommeNotes = 0;
    let sommeCoeffs = 0;

    for (const matiere in coeffs) {
        const note = getCalcValue(`${prefix}-${matiere}`);
        const coeff = coeffs[matiere];

        sommeNotes += note * coeff;
        sommeCoeffs += coeff;
    }

    if (sommeCoeffs === 0) return 0;
    return sommeNotes / sommeCoeffs;
}

// ربط كل أزرار "Calculer" داخل النافذة
gradeCalcModalBox.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.dataset.calc) {
        const calcKey = e.target.dataset.calc;
        const resultId = `result-${calcKey}`;
        let moyenne = 0;
        let values = {};

        try {
            // --- منطق السنة الأولى (من ملفك) ---
            if (calcKey === 'y1_s1_Histo') {
                values = { td: getCalcValue('y1-s1-histo-td'), cyto1: getCalcValue('y1-s1-histo-cyto1'), histo: getCalcValue('y1-s1-histo-histo') };
                moyenne = gradeDataStore["1"].formulas.y1_s1_Histo(values);
                autoFill('avg-y1-s1-Histo-Cyto-Embryo', moyenne);
                autoFill('avg-y1-annuel-Histo-Cyto-Embryo-s1', moyenne);
            }
            else if (calcKey === 'y1_s1_Biochimie') {
                values = { td: getCalcValue('y1-s1-biochimie-td'), emd: getCalcValue('y1-s1-biochimie-emd') };
                moyenne = gradeDataStore["1"].formulas.y1_s1_Biochimie(values);
                autoFill('avg-y1-s1-Biochimie', moyenne);
                autoFill('avg-y1-annuel-Biochimie-s1', moyenne);
            }
            else if (calcKey === 'avg_y1_s1') {
                moyenne = calculateWeightedAverage(gradeDataStore["1"].s1_coeffs, 'avg-y1-s1');
            }
            // (أضف باقي حسابات السنة الأولى هنا...)

            // --- منطق السنة الثانية ---
            else if (calcKey === 'y2_s1_AnatomieDentaire') {
                values = { th: getCalcValue('y2-s1-AnatomieDentaire-th'), tp: getCalcValue('y2-s1-AnatomieDentaire-tp') };
                moyenne = gradeDataStore["2"].formulas.y2_standard_tp(values);
                autoFill('avg-y2-s1-AnatomieDentaire', moyenne);
            }
            else if (calcKey === 'y2_s1_Histologie') {
                values = { th: getCalcValue('y2-s1-Histologie-th'), tp: getCalcValue('y2-s1-Histologie-tp') };
                moyenne = gradeDataStore["2"].formulas.y2_standard_tp(values);
                autoFill('avg-y2-s1-Histologie', moyenne);
            }
            else if (calcKey === 'y2_s1_Anglais') {
                values = { th: getCalcValue('y2-s1-Anglais-th') };
                moyenne = gradeDataStore["2"].formulas.y2_simple_th(values);
                autoFill('avg-y2-s1-Anglais', moyenne);
            }
            // (أضف باقي حسابات السنة الثانية هنا...)
            else if (calcKey === 'avg_y2_s1') {
                moyenne = calculateWeightedAverage(gradeDataStore["2"].s1_coeffs, 'avg-y2-s1');
            }
            else if (calcKey === 'avg_y2_annuel') {
                const s1Moy = getCalcValue('avg-y2-a-S1');
                const s2Moy = getCalcValue('avg-y2-a-S2');
                const s1Coeff = Object.values(gradeDataStore["2"].s1_coeffs).reduce((a, b) => a + b, 0); // 7
                const s2Coeff = Object.values(gradeDataStore["2"].s2_coeffs).reduce((a, b) => a + b, 0); // 8

                let notesAnnuel = (s1Moy * s1Coeff) + (s2Moy * s2Coeff);
                let coeffsAnnuel = s1Coeff + s2Coeff;

                for (const matiere in gradeDataStore["2"].annual_coeffs) {
                    const note = getCalcValue(`avg-y2-a-${matiere}`);
                    const coeff = gradeDataStore["2"].annual_coeffs[matiere];
                    notesAnnuel += note * coeff;
                    coeffsAnnuel += coeff; // المجموع الكلي يجب أن يكون 37
                }
                moyenne = notesAnnuel / coeffsAnnuel;
            }

            // --- منطق السنة الثالثة ---
            else if (calcKey === 'y3_Prothèse') {
                values = {
                    emd1: getCalcValue('y3-Prothèse-emd1'),
                    emd2: getCalcValue('y3-Prothèse-emd2'),
                    emd3: getCalcValue('y3-Prothèse-emd3'),
                    cc: getCalcValue('y3-Prothèse-cc'),
                    tp: getCalcValue('y3-Prothèse-tp')
                };
                moyenne = gradeDataStore["3"].formulas.y3_Prothèse(values);
                autoFill('avg-y3-a-Prothèse', moyenne);
            }
            else if (calcKey === 'y3_Pathologie' || calcKey === 'y3_ODF' || calcKey === 'y3_Parodontologie' /*... الخ */) {
                const matiere = calcKey.split('_')[1]; // (Pathologie, ODF...)
                values = {
                    emd1: getCalcValue(`y3-${matiere}-emd1`),
                    emd2: getCalcValue(`y3-${matiere}-emd2`),
                    emd3: getCalcValue(`y3-${matiere}-emd3`),
                    cc: getCalcValue(`y3-${matiere}-cc`)
                };
                moyenne = gradeDataStore["3"].formulas.y3_standard(values);
                autoFill(`avg-y3-a-${matiere}`, moyenne);
            }
            else if (calcKey === 'avg_y3_annuel') {
                moyenne = calculateWeightedAverage(gradeDataStore["3"].annual_coeffs, 'avg-y3-a');
            }

            // عرض النتيجة النهائية
            showCalcResult(resultId, moyenne);

        } catch (err) {
            console.error("Erreur de calcul:", err);
            showNotification(`Erreur: ${err.message}`, 'error');
        }
    }
});
// ▲▲▲ نهاية الإضافة ▲▲▲
// ▲▲▲ نهاية الإضافة ▲▲▲
// --- Initial Theme Setup ---
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeToggleIcon(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Default to dark mode if system prefers it and no theme saved
    body.classList.add('dark-mode');
    updateThemeToggleIcon('dark-mode');
} else {
    // Default to light mode otherwise
    updateThemeToggleIcon('light-mode');
}

// --- Explore Content Modal Handlers ---
if (exploreContentBtnNew && exploreModal) {
    exploreContentBtnNew.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior if it's a link
        exploreModal.classList.add('active');
    });
}
if (closeExploreModalBtn && exploreModal) {
    closeExploreModalBtn.addEventListener('click', () => {
        exploreModal.classList.remove('active');
    });
}
// Close explore modal on overlay click
if (exploreModal) {
    exploreModal.addEventListener('click', (e) => {
        if (e.target === exploreModal) {
            exploreModal.classList.remove('active');
        }
    });
}

// --- Feature Card Click Handlers (Video, Summaries, Quizzes, Articles) ---
if (videoLessonsCard) {
    videoLessonsCard.addEventListener('click', () => {
        showNotification('Video lessons are coming soon!', 'info');
        // Optionally, disable the card visually or remove the listener after first click
    });
}

if (summariesCard) {
    summariesCard.addEventListener('click', () => {
        const summariesLink = document.querySelector('a[data-page-type="summaries"]');
        if (summariesLink) {
            summariesLink.click(); // Simulate click on the nav link
            // showNotification('Showing all summaries.', 'info'); // Notification might be redundant as page changes
        }
    });
}

if (quizzesCard) {
    quizzesCard.addEventListener('click', () => {
        const quizzesLink = document.querySelector('a[data-page-type="quizzes"]');
        if (quizzesLink) {
            quizzesLink.click(); // Simulate click on the nav link
        }
    });
}

if (articlesCard && articlesModal) {
    articlesCard.addEventListener('click', () => {
        articlesModal.classList.add('active');
    });
}
if (closeArticlesModalBtn && articlesModal) {
    closeArticlesModalBtn.addEventListener('click', () => {
        articlesModal.classList.remove('active');
    });
}
// Close articles modal on overlay click
if (articlesModal) {
    articlesModal.addEventListener('click', (e) => {
        if (e.target === articlesModal) {
            articlesModal.classList.remove('active');
        }
    });
}

// --- Initial App Load ---
checkForAuthToken(); // Check for token and initialize the app

// Initial scroll reveal for the default active page (usually home)
triggerScrollReveal(document.querySelector('.page-section.active'));

// --- Markmap Dynamic Loading (ensureMarkmap not called here, called on demand) ---
function loadScript(src) {
    return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.querySelector(`script[src="${src}"]`)) {
            console.log(`Script already loaded: ${src}`);
            return resolve();
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = false; // Load sequentially if needed, though defer might be better
        s.onload = () => {
            console.log(`Script loaded successfully: ${src}`);
            resolve();
        };
        s.onerror = (e) => {
            console.error(`Failed to load script: ${src}`, e);
            reject(new Error('Failed to load script: ' + src));
        };
        document.head.appendChild(s);
    });
}

async function ensureMarkmap() {
    // Check if necessary Markmap objects exist
    if (window.markmap && window.markmap.Markmap && window.markmap.Transformer) { // Check for Transformer
        console.log("Markmap libraries already available.");
        return; // Already loaded
    }

    try {
        console.log("Markmap not found. Loading libraries dynamically...");
        // Load dependencies first (D3)
        await loadScript('https://cdn.jsdelivr.net/npm/d3@7'); // Load D3 library
        // Load Markmap core and view components
        await loadScript('https://cdn.jsdelivr.net/npm/markmap-lib');
        await loadScript('https://cdn.jsdelivr.net/npm/markmap-view');

        // Verify loading
        if (window.markmap && window.markmap.Markmap && window.markmap.Transformer) {
            console.log("Markmap libraries loaded successfully via dynamic import.");
        } else {
            throw new Error("Markmap objects not found after loading scripts.");
        }
    } catch (error) {
        console.error("Error loading Markmap libraries:", error);
        showNotification('Failed to load mind map viewer components.', 'error');
        // Re-throw the error if you want calling functions to handle it
        throw error;
    }
}

// ✅ أضف هذه الدالة الجديدة في أي مكان مع دوال الفلاش كارد
// في ملف script.js
// ✅ استبدل هذه الدالة بالكامل
async function handleFlashcardRating(rating, interval) {
    if (!currentCollection || !currentCollection[currentCardIndex]) {
        console.error("Cannot rate flashcard: collection or card missing.");
        return;
    }

    const card = currentCollection[currentCardIndex];

    // Only save if rated 'hard' or 'medium'
    if (rating === 'hard' || rating === 'medium') {

        // --- Ensure subject context is available ---
        if (!currentAiGenerationContext || !currentAiGenerationContext.subjectId) {
            showNotification('Error: Could not determine the subject to save this card under.', 'error');
            console.error("Missing subject context for saving AI flashcard:", currentAiGenerationContext);
            return; // Stop if context is missing
        }
        // --- End context check ---

        try {
            // Prepare data for saving
            const flashcardData = {
                subjectId: currentAiGenerationContext.subjectId, // Use the stored context
                questionText: card.front || card.questionText || 'Front', // Use available front content
                backContent: card.back || card.backContent || 'Back',   // Use available back content
                // Optionally add interval if your backend supports it
                // interval: interval ? parseInt(interval) : undefined 
            };

            // Disable rating buttons temporarily
            document.querySelectorAll('#ai-flashcard-rating-controls .rating-btn').forEach(btn => btn.disabled = true);

            await createFlashcardAPI(flashcardData); // Call API to save

            // Show success message based on rating
            const reviewMessage = interval ? `Will be reviewed in ${interval} day(s).` : '';
            showNotification(`Card saved! ${reviewMessage}`, 'success');

        } catch (e) {
            // Error handled by createFlashcardAPI, but re-enable buttons
            document.querySelectorAll('#ai-flashcard-rating-controls .rating-btn').forEach(btn => btn.disabled = false);
            // Don't proceed to next card on error
            return;
        } finally {
            // Re-enable buttons if needed (though on success we move on)
            // document.querySelectorAll('#ai-flashcard-rating-controls .rating-btn').forEach(btn => btn.disabled = false);
        }
    } else {
        // If rated 'easy', just show a confirmation (optional)
        // showNotification('Card marked as easy.', 'info');
    }

    // Move to the next card automatically (if not the last one)
    if (currentCardIndex < currentCollection.length - 1) {
        currentCardIndex++;
        displayCurrentFlashcard();
        // Re-enable buttons for the new card
        document.querySelectorAll('#ai-flashcard-rating-controls .rating-btn').forEach(btn => btn.disabled = false);
    } else {
        // Last card reviewed
        showNotification('All generated cards have been reviewed!', 'success');
        // Go back to the collections view
        const backBtn = document.getElementById('back-to-collections-btn');
        if (backBtn) backBtn.click();
    }
}


// ✅ أضف هذا الكود في قسم معالجات الأحداث (Event Handlers) في الأسفل
// Ensure rating buttons exist before adding listeners
const ratingButtons = document.querySelectorAll('.rating-btn');
if (ratingButtons.length > 0) {
    ratingButtons.forEach(btn => {
        // Prevent adding multiple listeners if script runs multiple times
        if (!btn.dataset.listenerAttached) {
            btn.addEventListener('click', function () {
                const rating = this.dataset.rating;
                const interval = this.dataset.interval; // Can be undefined for 'easy'
                handleFlashcardRating(rating, interval);
            });
            btn.dataset.listenerAttached = 'true'; // Mark listener as attached
        }
    });
} else {
    console.warn("AI Flashcard rating buttons not found.");
}

// ✅ أضف هذه الدالة الجديدة في أي مكان مناسب
function startSavedQuiz(quizData) {
    // Validate saved quiz data
    if (!quizData || !quizData._id || !Array.isArray(quizData.questions)) {
        console.error("Invalid saved quiz data:", quizData);
        showNotification("Could not load this saved quiz.", "error");
        return;
    }

    localStorage.removeItem('quizState'); // Clear any ongoing quiz state

    // Adapt saved quiz structure to the 'proQuiz' format
    const adaptedQuiz = {
        _id: quizData._id, // Use the actual ID from the database
        title: quizData.title || 'Saved Quiz',
        subject: null, // Saved quizzes might not have a direct subject link in the same way
        subjectName: quizData.subjectName || "Saved Quiz", // Use saved subject name
        questions: quizData.questions.map(q => ({
            // Map fields carefully, providing defaults
            questionText: q.question || q.questionText || '',
            options: q.options || [],
            // Ensure correctOptionIndexes is always an array
            correctOptionIndexes: Array.isArray(q.correctOptionIndexes) ? q.correctOptionIndexes : [q.correctOptionIndexes].filter(i => i != null),
            explanation: q.explanation || '',
            // Add imageUrl and timer if they exist in saved data (optional)
            imageUrl: q.imageUrl,
            timer: q.timer
        }))
    };

    // Check if adaptation resulted in valid questions
    if (!adaptedQuiz.questions || adaptedQuiz.questions.length === 0) {
        showNotification('This saved quiz appears to have no valid questions.', 'error');
        return;
    }

    // Initialize and start the quiz using the adapted data
    initializeAndStartQuiz(adaptedQuiz);
}

// ✅ أضف هذه الدالة الجديدة أيضاً
async function handleDeleteSavedQuiz(quizId, quizElement) {
    if (!quizId || !quizElement) return; // Need ID and element to remove

    // Confirmation dialog
    if (!confirm('Are you sure you want to delete this saved quiz permanently?')) {
        return; // Abort if user cancels
    }

    // Show loading/disabling state (optional)
    const deleteButton = quizElement.querySelector('.btn-delete-saved-quiz');
    if (deleteButton) {
        deleteButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        deleteButton.disabled = true;
    }

    try {
        // Use fetchApi to send DELETE request
        await fetchApi(`/api/saved-quizzes/${quizId}`, { method: 'DELETE' });

        showNotification('Quiz deleted successfully!', 'success');
        // Remove the quiz element from the UI smoothly
        quizElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        quizElement.style.opacity = '0';
        quizElement.style.transform = 'scale(0.95)';
        setTimeout(() => {
            quizElement.remove();
            // Check if the list is now empty
            const savedListContainer = document.getElementById('saved-quizzes-list');
            if (savedListContainer && !savedListContainer.querySelector('.saved-quiz-item')) {
                savedListContainer.innerHTML = '<p>You have no saved quizzes.</p>';
            }
        }, 300); // Wait for animation

    } catch (error) {
        console.error('Failed to delete saved quiz:', error);
        showNotification(`Failed to delete quiz: ${error.message}`, 'error');
        // Restore button state on error
        if (deleteButton) {
            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteButton.disabled = false;
        }
    }
}

// --- Report Question Modal Logic ---
const reportBtn = document.getElementById('report-question-btn');
const reportModal = document.getElementById('report-modal');
const reportForm = document.getElementById('report-form');
const cancelReportBtn = document.getElementById('cancel-report-btn');
const reportReasonInput = document.getElementById('report-reason'); // Get textarea

// Show modal on button click
if (reportBtn && reportModal && reportReasonInput) {
    reportBtn.addEventListener('click', () => {
        // Ensure a quiz and question are active
        if (!proQuiz || !proQuiz.questions || !proQuiz.questions[proQuestionIndex]) {
            showNotification('Cannot report. No active question found.', 'error');
            return;
        }
        reportModal.classList.add('active'); // Show modal
        reportReasonInput.focus(); // Focus the reason input
    });
} else {
    console.warn("Report question elements missing.");
}

// Hide modal on cancel button click
if (cancelReportBtn && reportModal && reportForm) {
    cancelReportBtn.addEventListener('click', () => {
        reportModal.classList.remove('active'); // Hide modal
        reportForm.reset(); // Clear the form
    });
}

// Handle form submission
if (reportForm && reportModal && reportReasonInput) {
    reportForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        const reason = reportReasonInput.value.trim();
        if (!reason) {
            showNotification('Please provide a reason for the report.', 'warning');
            return;
        }

        // Get current question data safely
        const currentQuestion = proQuiz?.questions?.[proQuestionIndex];
        if (!currentQuestion) {
            showNotification('Could not identify the question to report.', 'error');
            return;
        }

        const reportPayload = {
            quizId: proQuiz._id || 'unknown', // Include quiz ID
            // Use questionText or fallback
            questionText: currentQuestion.questionText || currentQuestion.question || `Question Index ${proQuestionIndex}`,
            reason: reason
        };

        // Disable form while submitting (optional)
        const submitButton = reportForm.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = true;

        try {
            // Use fetchApi to send the report
            const response = await fetchApi('/api/reports', {
                method: 'POST',
                body: JSON.stringify(reportPayload)
            });
            showNotification(response?.message || 'Report submitted successfully!', 'success');
        } catch (error) {
            console.error("Error submitting report:", error);
            showNotification(`Failed to submit report: ${error.message}`, 'error');
        } finally {
            // Always re-enable button, close modal, and reset form
            if (submitButton) submitButton.disabled = false;
            reportModal.classList.remove('active');
            reportForm.reset();
        }
    });
}

// Close report modal on overlay click
if (reportModal) {
    reportModal.addEventListener('click', (e) => {
        if (e.target === reportModal) {
            reportModal.classList.remove('active');
            if (reportForm) reportForm.reset();
        }
    });
}
// ✅ --- (إضافة) تفعيل القائمة المنسدلة للمستخدم ---
if (userMenuToggle && userDropdown && logoutBtn) {
    userMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // منع الانتشار لإغلاق القوائم الأخرى
        userDropdown.classList.toggle('active'); // تبديل حالة الظهور
    });

    logoutBtn.addEventListener('click', () => {
        userDropdown.classList.remove('active'); // أغلق القائمة
        logoutUser(); // نفذ تسجيل الخروج
    });

    // إغلاق القائمة عند النقر في أي مكان آخر
    document.addEventListener('click', (e) => {
        if (!userMenuToggle.contains(e.target) && !userDropdown.contains(e.target) && userDropdown.classList.contains('active')) {
            userDropdown.classList.remove('active');
        }
    });
} else {
    console.warn("User menu dropdown elements not found.");
}
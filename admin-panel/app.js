// admin-panel/app.js (النسخة الكاملة والمحدثة)

document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.pathname.split("/").pop();

    // التعامل مع توجيه الصفحات
    if (page === "login.html") {
        handleLoginPage();
    } else if (page === "index.html" || page === "") {
        handleDashboardPage();
    }
});

// ========================
// 🔹 صفحة تسجيل الدخول
// ========================
function handleLoginPage() {
    const loginBtn = document.getElementById("admin-google-login-btn");
    const statusEl = document.getElementById("login-status");

    // زر تسجيل الدخول عبر Google
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            // تأكد من أن هذا الرابط يطابق الباك اند الخاص بك
            window.location.href = "https://dental-app-he1p.onrender.com/auth/google/admin";
        });
    }

    // قراءة التوكن أو الأخطاء من الرابط عند العودة
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const error = urlParams.get("error");

    if (error === "not_an_admin" || error === "not_the_admin_email") {
        if (statusEl) statusEl.textContent = "Access Denied. You are not the authorized admin.";
    } else if (error) {
        if (statusEl) statusEl.textContent = "Login failed. Please try again.";
    }

    if (token) {
        localStorage.setItem("adminToken", token);
        console.log("✅ Token received. Redirecting to dashboard...");
        window.location.href = "index.html";
    }
}


// ========================
// 🔹 لوحة التحكم (Dashboard)
// ========================
function handleDashboardPage() {
    // --- ✅ التحقق الأمني ---
    const token = localStorage.getItem("adminToken");
    if (!token) {
        console.log("🚫 No admin token found. Redirecting to login.");
        window.location.href = "login.html";
        return;
    }

    // تعريف العناصر
    const navLinks = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(".content-section");

    // --- دالة المساعدة لاستدعاء API ---
    const fetchAdminApi = async (endpoint, options = {}) => {
        try {
            const res = await fetch(`https://dental-app-he1p.onrender.com/api/admin${endpoint}`, {
                ...options,
                headers: {
                    ...options.headers,
                    Authorization: `Bearer ${token}`,
                    'Content-Type': options.body ? 'application/json' : undefined
                },
            });

            if (res.status === 401 || res.status === 403) {
                console.warn("🚫 Unauthorized. Redirecting to login.");
                localStorage.removeItem("adminToken");
                window.location.href = "login.html";
                throw new Error("Unauthorized");
            }

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({ message: `Status ${res.status}` }));
                throw new Error(errorData.message || `API Error ${res.status}`);
            }

            // التحقق من نوع المحتوى قبل تحويله لـ JSON
            const contentType = res.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return res.json();
            } else {
                return {};
            }
        } catch (error) {
            console.error(`API Error (${endpoint}):`, error);
            if (error.message !== "Unauthorized") {
                alert(`Error: ${error.message}`);
            }
            throw error;
        }
    };

    // 🔸 التعامل مع التنقل (Sidebar Navigation)
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);

            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");

            contentSections.forEach((s) => s.classList.remove("active"));
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.classList.add("active");

            // تحميل البيانات حسب القسم
            if (targetId === "users") loadUsers();
            if (targetId === "reports") loadReports();
            if (targetId === "ai-logs") loadAiLogs();
            // Content Factory لا يحتاج تحميل أولي، يعتمد على اختيار المستخدم
        });
    });

    // ========================
    // 📊 1. تحميل الإحصائيات (Dashboard Stats)
    // ========================
    async function loadDashboardStats() {
        try {
            const stats = await fetchAdminApi("/stats");
            document.getElementById("stat-total-users").textContent = stats.totalUsers || 0;
            document.getElementById("stat-active-users").textContent = stats.activeUsers || 0;
            document.getElementById("stat-new-users").textContent = stats.newUsers || 0;
            document.getElementById("stat-new-reports").textContent = stats.newReports || 0;

            if (stats.statsByYear) {
                document.getElementById("stat-year-1").textContent = stats.statsByYear.year1 || 0;
                document.getElementById("stat-year-2").textContent = stats.statsByYear.year2 || 0;
                document.getElementById("stat-year-3").textContent = stats.statsByYear.year3 || 0;
                document.getElementById("stat-year-4").textContent = stats.statsByYear.year4 || 0;
                document.getElementById("stat-year-5").textContent = stats.statsByYear.year5 || 0;
                document.getElementById("stat-year-other").textContent = stats.statsByYear.yearOther || 0;
            }
        } catch (error) {
            console.error("Failed to load stats:", error);
        }
    }

    // ========================
    // 👥 2. تحميل المستخدمين (Users)
    // ========================
    async function loadUsers() {
        const tableBody = document.getElementById("users-table-body");
        tableBody.innerHTML = '<tr><td colspan="9">Loading...</td></tr>';
        try {
            const users = await fetchAdminApi("/users");
            tableBody.innerHTML = "";
            users.forEach((user) => {
                const row = document.createElement("tr");

                // الحالة والوصول
                const statusBadge = user.isActivated
                    ? '<span class="status-badge status-active">Active</span>'
                    : '<span class="status-badge status-inactive">Inactive</span>';

                const aiBadge = user.canUseAI === false
                    ? '<span class="status-badge status-inactive">Disabled</span>'
                    : '<span class="status-badge status-active">Enabled</span>';

                // أزرار الإجراءات الأساسية
                const activationBtn = user.isActivated
                    ? `<button class="action-btn btn-deactivate" data-user-id="${user._id}" data-action="toggle-activation">Deactivate</button>`
                    : `<button class="action-btn btn-activate" data-user-id="${user._id}" data-action="toggle-activation">Activate</button>`;

                const aiBtn = user.canUseAI === false
                    ? `<button class="action-btn btn-activate" data-user-id="${user._id}" data-action="toggle-ai">Enable AI</button>`
                    : `<button class="action-btn btn-deactivate" data-user-id="${user._id}" data-action="toggle-ai">Disable AI</button>`;

                // ✅ زر التحكم في صلاحيات الأدمن (جديد)
                const adminBtn = user.isAdmin
                    ? `<button class="action-btn btn-deactivate" style="background-color:#c0392b;" data-user-id="${user._id}" data-action="toggle-admin">Remove Admin</button>`
                    : `<button class="action-btn btn-activate" style="background-color:#8e44ad;" data-user-id="${user._id}" data-action="toggle-admin">Make Admin</button>`;

                // ✅ حقول تعديل السنة والخبرة
                const updateSection = `
                  <div class="update-group" style="margin-bottom:5px;">
                      <input type="text" class="admin-input admin-input-year" data-user-id="${user._id}" placeholder="Yr" value="${user.studyYear || ''}" style="width:40px;">
                      <button class="action-btn btn-update" data-user-id="${user._id}" data-action="update-year">Set</button>
                  </div>
                  <div class="update-group">
                      <input type="number" class="admin-input admin-input-xp" data-user-id="${user._id}" placeholder="XP" value="${user.experiencePoints || 0}" style="width:50px;">
                      <button class="action-btn btn-update" data-user-id="${user._id}" data-action="update-xp">Set</button>
                  </div>
                `;

                row.innerHTML = `
                  <td>${user.displayName || "N/A"} ${user.isAdmin ? '<i class="fas fa-crown" style="color:gold;" title="Admin"></i>' : ''}</td>
                  <td>${user.email || "N/A"}</td>
                  <td>${user.studyYear || "-"}</td>
                  <td>${user.experiencePoints || 0}</td> 
                  <td>${statusBadge}</td>
                  <td>${aiBadge}</td>
                  <td class="actions-cell">${activationBtn}<br>${aiBtn}</td>
                  <td class="actions-cell">${adminBtn}</td>
                  <td class="actions-cell-update">${updateSection}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            tableBody.innerHTML = '<tr><td colspan="9">Failed to load users.</td></tr>';
        }
    }

    // ========================
    // 🚨 3. تحميل التقارير (Reports)
    // ========================
    async function loadReports() {
        const tableBody = document.getElementById("reports-table-body");
        tableBody.innerHTML = '<tr><td colspan="5">Loading...</td></tr>';
        try {
            const reports = await fetchAdminApi("/reports");
            tableBody.innerHTML = "";
            reports.forEach((report) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                  <td>${report.questionText || "N/A"}</td>
                  <td>${report.reason || "N/A"}</td>
                  <td>${report.reportedBy?.displayName || "Unknown"}</td>
                  <td>${report.subject?.name || "Unknown"}</td>
                  <td>${new Date(report.createdAt).toLocaleDateString()}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            tableBody.innerHTML = '<tr><td colspan="5">Failed to load reports.</td></tr>';
        }
    }

    // ========================
    // 🤖 4. تحميل سجلات الذكاء الاصطناعي (AI Logs)
    // ========================
    async function loadAiLogs() {
        const tableBody = document.getElementById("ailogs-table-body");
        tableBody.innerHTML = '<tr><td colspan="4">Loading...</td></tr>';
        try {
            const logs = await fetchAdminApi("/ailogs");
            tableBody.innerHTML = "";
            logs.forEach((log) => {
                const statusHtml = log.status === "success"
                    ? '<span class="status-badge status-active">Success</span>'
                    : '<span class="status-badge status-inactive">Error</span>';

                const row = document.createElement("tr");
                row.innerHTML = `
                  <td>${log.user?.displayName || "Unknown"}</td>
                  <td>${log.task || "N/A"}</td>
                  <td>${statusHtml}</td>
                  <td>${new Date(log.createdAt).toLocaleString()}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            tableBody.innerHTML = '<tr><td colspan="4">Failed to load AI logs.</td></tr>';
        }
    }

    // ========================
    // ⚙️ معالجة الأزرار العامة (Users Table Actions)
    // ========================
    document.body.addEventListener("click", async (e) => {
        // نتحقق إن كان العنصر المضغوط هو زر action
        if (!e.target.classList.contains('action-btn')) return;

        const userId = e.target.dataset.userId;
        const action = e.target.dataset.action;

        // أزرار Content Factory تتم معالجتها بشكل منفصل في الأسفل
        if (!userId || !action) return;

        let endpoint = "";
        let options = { method: "PUT" };
        let payload = {};

        // واجهة تحميل بسيطة للزر
        const originalText = e.target.textContent;
        e.target.disabled = true;
        e.target.textContent = '...';

        try {
            if (action === "toggle-activation") {
                endpoint = `/users/${userId}/activate`;
            }
            else if (action === "toggle-ai") {
                endpoint = `/users/${userId}/toggle-ai`;
            }
            // ✅ تبديل صلاحيات المشرف
            else if (action === "toggle-admin") {
                if (!confirm("⚠️ Are you sure you want to change ADMIN privileges for this user?")) {
                    e.target.disabled = false; e.target.textContent = originalText; return;
                }
                endpoint = `/users/${userId}/toggle-admin`;
            }
            // ✅ تعديل السنة
            else if (action === "update-year") {
                const input = document.querySelector(`.admin-input-year[data-user-id="${userId}"]`);
                if (!input || !input.value) throw new Error("Enter a year");
                endpoint = `/users/${userId}/year`;
                payload = { year: input.value };
                options.body = JSON.stringify(payload);
            }
            // ✅ تعديل الخبرة
            else if (action === "update-xp") {
                const input = document.querySelector(`.admin-input-xp[data-user-id="${userId}"]`);
                if (!input || input.value === '') throw new Error("Enter XP");
                endpoint = `/users/${userId}/xp`;
                payload = { experiencePoints: parseInt(input.value) };
                options.body = JSON.stringify(payload);
            }

            await fetchAdminApi(endpoint, options);
            loadUsers(); // إعادة تحميل الجدول

        } catch (error) {
            console.error(`Action failed:`, error);
            e.target.disabled = false;
            e.target.textContent = originalText;
        }
    });

    // ========================
    // 🏭 5. Content Factory Logic (إدارة المحتوى)
    // ========================

    // بيانات المواد (قوائم ثابتة لتسهيل الاختيار)
    const subjectsData = {
        "1": ["GENETICS", "ANATOMY", "BIOCHEMISTRY", "HISTOLOGY", "EMBRYOLOGY", "PHYSIOLOGY", "CYTOLOGY"],
        "2": ["ODF", "PROTHÈSE", "OCE", "PARO", "PATHO", "BIOMATERIAU", "ANATOMIE HUMAINE", "PHYSIOLOGIE"],
        "3": ["ODF", "PROTHÈSE", "OCE", "PARO", "PATHOLOGIE", "PHARMACOLOGIE", "MICROBIOLOGIE", "IMAGERIE", "ANATOMIE PATHOLOGIQUE"],
        "4": ["ODF", "PROTHÈSE", "OCE", "PARO", "PATHOLOGIE", "PÉDODONTIE", "ORTHODONTIE", "OCCLUSODONTIE"],
        "5": ["ODF", "PROTHÈSE", "OCE", "PARO", "PATHOLOGIE", "PÉDODONTIE", "IMPLANTOLOGIE", "DÉONTOLOGIE"]
    };

    const yearSelect = document.getElementById('editor-year-select');
    const subjectSelect = document.getElementById('editor-subject-select');
    const loadQuizzesBtn = document.getElementById('load-quizzes-btn');
    const quizzesContainer = document.getElementById('quizzes-list-container');
    const editorArea = document.getElementById('question-editor-area');
    const questionsWrapper = document.getElementById('questions-wrapper');
    const saveQuizBtn = document.getElementById('save-quiz-changes-btn');
    const addQBtn = document.getElementById('add-new-question-btn');

    let currentEditingQuiz = null;

    // أ. عند اختيار السنة، املأ المواد
    if (yearSelect) {
        yearSelect.addEventListener('change', () => {
            const year = yearSelect.value;
            subjectSelect.innerHTML = '<option value="">Select Subject...</option>';
            subjectSelect.disabled = true;
            loadQuizzesBtn.disabled = true;

            if (year && subjectsData[year]) {
                subjectsData[year].forEach(sub => {
                    const opt = document.createElement('option');
                    opt.value = sub;
                    opt.textContent = sub;
                    subjectSelect.appendChild(opt);
                });
                subjectSelect.disabled = false;
            }
        });
    }

    // ب. تفعيل زر التحميل
    if (subjectSelect) {
        subjectSelect.addEventListener('change', () => {
            loadQuizzesBtn.disabled = !subjectSelect.value;
        });
    }

    // ج. تحميل الكويزات من الباك اند
    if (loadQuizzesBtn) {
        loadQuizzesBtn.addEventListener('click', async () => {
            const subject = subjectSelect.value;
            quizzesContainer.style.display = 'grid'; // Grid layout
            quizzesContainer.innerHTML = '<p>Loading lessons/quizzes...</p>';
            editorArea.style.display = 'none';

            try {
                // ملاحظة: نستخدم الاسم هنا للبحث، تأكد أن الباك اند يدعم البحث بالاسم أو عدل الرابط هنا
                // إذا كان الباك اند يتوقع ID، يجب عليك جلب الـ IDs أولاً. سنفترض هنا أن الباك اند تم تعديله ليقبل الاسم أو الـ ID
                // أو أنك ستقوم بتعديل الرابط أدناه ليتوافق مع منطقك.
                // بناءً على طلبك السابق، سنرسل اسم المادة أو الـ ID الخاص بها.
                // لتجنب الأخطاء، سنقوم بترميز النص (Encode URI).

                // ⚠️ هام: إذا كان الباك اند يتوقع Subject ID حصراً، يجب عليك معرفة الـ ID.
                // بما أننا لا نملك IDs في المصفوفة subjectsData، سنفترض أن الراوت يقبل البحث باسم المادة 
                // أو أنك ستستبدل المصفوفة أعلاه بـ IDs حقيقية من قاعدة بياناتك.
                const quizzes = await fetchAdminApi(`/quizzes/subject/${encodeURIComponent(subject)}`);

                quizzesContainer.innerHTML = '';

                if (!quizzes || quizzes.length === 0) {
                    quizzesContainer.innerHTML = '<p>No quizzes found for this subject.</p>';
                    return;
                }

                quizzes.forEach(quiz => {
                    const card = document.createElement('div');
                    card.className = 'stat-card'; // إعادة استخدام ستايل الكروت
                    card.style.cursor = 'pointer';
                    card.style.transition = 'transform 0.2s';
                    card.innerHTML = `
                        <h4 style="font-size:1rem;">${quiz.title}</h4>
                        <p style="color:#666;">${quiz.questions ? quiz.questions.length : 0} Questions</p>
                        <small style="color:#999;">${new Date(quiz.createdAt).toLocaleDateString()}</small>
                    `;
                    card.onmouseover = () => card.style.transform = 'scale(1.02)';
                    card.onmouseout = () => card.style.transform = 'scale(1)';
                    card.onclick = () => openQuizEditor(quiz);
                    quizzesContainer.appendChild(card);
                });

            } catch (err) {
                console.error(err);
                quizzesContainer.innerHTML = '<p style="color:red">Error loading quizzes. Check console.</p>';
            }
        });
    }

    // د. فتح محرر الأسئلة
    function openQuizEditor(quiz) {
        currentEditingQuiz = quiz; // تخزين الكويز الحالي (نحتاج الـ ID لاحقاً)
        editorArea.style.display = 'block';
        document.getElementById('editor-quiz-title').textContent = `Editing: ${quiz.title}`;

        // إذا لم يكن هناك أسئلة (مصفوفة فارغة)، مرر مصفوفة فارغة
        renderQuestions(quiz.questions || []);

        // تمرير لأسفل الصفحة لرؤية المحرر
        editorArea.scrollIntoView({ behavior: 'smooth' });
    }

    // هـ. رسم الأسئلة داخل المحرر
    function renderQuestions(questions) {
        questionsWrapper.innerHTML = '';
        questions.forEach((q, index) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'admin-question-card';
            // ستايل بسيط للبطاقة
            qDiv.style.border = '1px solid #ddd';
            qDiv.style.padding = '15px';
            qDiv.style.marginBottom = '15px';
            qDiv.style.borderRadius = '5px';
            qDiv.style.background = '#f9f9f9';

            // التعامل مع اختلاف هياكل البيانات (قديم vs جديد)
            const qText = q.questionText || q.question || "";
            // تحديد الإجابة الصحيحة (يدعم النظام القديم index واحد والنظام الجديد مصفوفة)
            const correctIdx = (q.correctOptionIndexes && q.correctOptionIndexes.length > 0)
                ? q.correctOptionIndexes[0]
                : (q.correctIndex !== undefined ? q.correctIndex : 0);

            qDiv.innerHTML = `
                <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                    <strong style="color:#2c3e50;">Question #${index + 1}</strong>
                    <button class="action-btn btn-deactivate delete-q-btn" style="padding:5px 10px; font-size:0.8rem;" data-index="${index}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
                
                <div style="margin-bottom:10px;">
                    <label>Question Text:</label>
                    <textarea class="admin-input q-text" rows="2" style="width:100%;">${qText}</textarea>
                </div>
                
                <div class="options-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:10px;">
                    ${(q.options || ["", "", "", ""]).map((opt, i) => `
                        <div>
                            <label style="font-size:0.8rem;">Option ${i + 1}:</label>
                            <input type="text" class="admin-input q-option" value="${opt}" style="width:100%;">
                        </div>
                    `).join('')}
                </div>

                <div style="display:flex; gap:20px;">
                    <div style="flex:1;">
                        <label>Correct Option Index (0-3):</label>
                        <input type="number" class="admin-input q-correct" value="${correctIdx}" min="0" max="10" style="width:100%;">
                    </div>
                    <div style="flex:2;">
                        <label>Image URL (Optional):</label>
                        <input type="text" class="admin-input q-image" value="${q.imageUrl || ''}" placeholder="https://..." style="width:100%;">
                    </div>
                </div>
            `;
            questionsWrapper.appendChild(qDiv);
        });

        // تفعيل أزرار الحذف داخل الأسئلة
        document.querySelectorAll('.delete-q-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // نستخدم closest للوصول للزر حتى لو ضغط على الأيقونة
                const idx = parseInt(e.target.closest('button').dataset.index);
                if (confirm('Delete this question permanently from the list? (Requires Save)')) {
                    // حذف من المصفوفة المحلية وإعادة الرسم
                    currentEditingQuiz.questions.splice(idx, 1);
                    renderQuestions(currentEditingQuiz.questions);
                }
            });
        });
    }

    // و. إضافة سؤال جديد فارغ
    if (addQBtn) {
        addQBtn.addEventListener('click', () => {
            if (!currentEditingQuiz) return;
            // إضافة كائن سؤال جديد
            if (!currentEditingQuiz.questions) currentEditingQuiz.questions = [];
            currentEditingQuiz.questions.push({
                questionText: "New Question Text Here...",
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctOptionIndexes: [0], // Default to first option
                imageUrl: "",
                timer: 90
            });
            renderQuestions(currentEditingQuiz.questions);
            // انزل لأسفل لرؤية السؤال الجديد
            setTimeout(() => {
                questionsWrapper.lastElementChild.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        });
    }

    // ز. حفظ التغييرات (Save All Changes)
    if (saveQuizBtn) {
        saveQuizBtn.addEventListener('click', async () => {
            if (!currentEditingQuiz) return;

            // 1. تجميع البيانات من DOM
            const qDivs = document.querySelectorAll('.admin-question-card');
            const updatedQuestions = [];
            let hasError = false;

            qDivs.forEach((div) => {
                const text = div.querySelector('.q-text').value.trim();
                const correct = parseInt(div.querySelector('.q-correct').value);
                const image = div.querySelector('.q-image').value.trim();

                // تجميع الخيارات
                const options = [];
                div.querySelectorAll('.q-option').forEach(opt => {
                    options.push(opt.value.trim());
                });

                // تحقق بسيط
                if (!text) hasError = true;

                updatedQuestions.push({
                    questionText: text,
                    options: options,
                    correctOptionIndexes: [correct], // تحويل الرقم لمصفوفة
                    imageUrl: image,
                    timer: 90 // قيمة افتراضية
                });
            });

            if (hasError) {
                alert("Please ensure all questions have text.");
                return;
            }

            // 2. إرسال الطلب
            const originalText = saveQuizBtn.innerHTML;
            saveQuizBtn.textContent = 'Saving...';
            saveQuizBtn.disabled = true;

            try {
                // نستخدم الـ ID الخاص بالكويز المخزن
                await fetchAdminApi(`/quizzes/${currentEditingQuiz._id}`, {
                    method: 'PUT',
                    body: JSON.stringify({ questions: updatedQuestions })
                });

                alert('✅ Quiz updated successfully!');
                // تحديث البيانات المحلية
                currentEditingQuiz.questions = updatedQuestions;

            } catch (err) {
                console.error(err);
                alert('❌ Failed to save changes.');
            } finally {
                saveQuizBtn.innerHTML = originalText;
                saveQuizBtn.disabled = false;
            }
        });
    }

    // ========================
    // 🚪 زر تسجيل الخروج
    // ========================
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("adminToken");
            window.location.href = "login.html";
        });
    }

    // تحميل الإحصائيات الأولية
    loadDashboardStats();
}
// admin-panel/app.js (النسخة النهائية مع ميزات تعديل السنة والخبرة)

document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.pathname.split("/").pop();

    if (page === "login.html") {
        handleLoginPage();
    } else if (page === "index.html") {
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
            window.location.href = "https://dental-app-he1p.onrender.com/auth/google/admin";
        });
    }

    // قراءة التوكن أو الأخطاء من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const error = urlParams.get("error");

    if (error === "not_an_admin" || error === "not_the_admin_email") {
        statusEl.textContent = "Access Denied. You are not the authorized admin.";
    } else if (error) {
        statusEl.textContent = "Login failed. Please try again.";
    }

    if (token) {
        localStorage.setItem("adminToken", token);
        console.log("✅ Token received from server. Redirecting to dashboard...");
        window.location.href = "index.html"; 
    }
}


// ========================
// 🔹 لوحة التحكم (Dashboard)
// ========================
function handleDashboardPage() {
    // --- ✅ ✅ ✅ التحقق الأمني الأساسي ---
    const token = localStorage.getItem("adminToken");
    if (!token) {
        console.log("🚫 No admin token found. Redirecting to login.");
        window.location.href = "login.html";
        return; 
    }
    // --- نهاية التحقق الأمني ---


    const navLinks = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(".content-section");

    // دالة المساعدة لاستدعاء API
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
                 console.warn("🚫 Unauthorized API request. Redirecting to login.");
                localStorage.removeItem("adminToken");
                window.location.href = "login.html";
                throw new Error("Unauthorized");
            }

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({ message: `API request failed with status ${res.status}` }));
                 console.error(`API Error for ${endpoint}:`, errorData);
                throw new Error(errorData.message || `API request failed with status ${res.status}`);
            }

            const contentType = res.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                return res.json();
            } else {
                return {};
            }
        } catch (error) {
             console.error(`General Error in fetchAdminApi for ${endpoint}:`, error);
             if (error.message !== "Unauthorized") {
                 alert(`An error occurred: ${error.message}. Redirecting to login.`);
                 localStorage.removeItem("adminToken");
                 window.location.href = "login.html";
             }
             throw error;
        }
    };


    // 🔸 التنقل بين الأقسام
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);

            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");

            contentSections.forEach((s) => s.classList.remove("active"));
            const targetSection = document.getElementById(targetId);
             if (targetSection) targetSection.classList.add("active");

            // تحميل البيانات عند عرض القسم
            if (targetId === "users") loadUsers();
            if (targetId === "reports") loadReports();
            if (targetId === "ai-logs") loadAiLogs();
        });
    });

    // ========================
    // 📊 تحميل الإحصائيات العامة
    // ========================
    async function loadDashboardStats() {
        try {
            const stats = await fetchAdminApi("/stats");
            document.getElementById("stat-total-users").textContent = stats.totalUsers || 0;
            document.getElementById("stat-active-users").textContent = stats.activeUsers || 0;
            document.getElementById("stat-new-users").textContent = stats.newUsers || 0;
            document.getElementById("stat-new-reports").textContent = stats.newReports || 0;

            // --- ✅ [إضافة جديدة] تحميل إحصائيات السنوات ---
            if (stats.statsByYear) {
                document.getElementById("stat-year-1").textContent = stats.statsByYear.year1 || 0;
                document.getElementById("stat-year-2").textContent = stats.statsByYear.year2 || 0;
                document.getElementById("stat-year-3").textContent = stats.statsByYear.year3 || 0;
                document.getElementById("stat-year-4").textContent = stats.statsByYear.year4 || 0;
                document.getElementById("stat-year-5").textContent = stats.statsByYear.year5 || 0;
                document.getElementById("stat-year-other").textContent = stats.statsByYear.yearOther || 0;
            }
            // --- نهاية الإضافة ---

        } catch (error) {
            console.error("Failed to load dashboard stats:", error);
        }
    }

    // ========================
    // 👥 تحميل المستخدمين
    // ========================
    async function loadUsers() {
        const tableBody = document.getElementById("users-table-body");
        tableBody.innerHTML = '<tr><td colspan="8">Loading...</td></tr>'; // ✅ زيادة العدد إلى 8
        try {
            const users = await fetchAdminApi("/users");
            tableBody.innerHTML = "";
            users.forEach((user) => {
                const row = document.createElement("tr");
                const statusBadge = user.isActivated ? '<span class="status-badge status-active">Active</span>' : '<span class="status-badge status-inactive">Inactive</span>';
                const aiBadge = user.canUseAI === false ? '<span class="status-badge status-inactive">Disabled</span>' : '<span class="status-badge status-active">Enabled</span>';
                const activationBtn = user.isActivated ? `<button class="action-btn btn-deactivate" data-user-id="${user._id}" data-action="toggle-activation">Deactivate</button>` : `<button class="action-btn btn-activate" data-user-id="${user._id}" data-action="toggle-activation">Activate</button>`;
                const aiBtn = user.canUseAI === false ? `<button class="action-btn btn-activate" data-user-id="${user._id}" data-action="toggle-ai">Enable AI</button>` : `<button class="action-btn btn-deactivate" data-user-id="${user._id}" data-action="toggle-ai">Disable AI</button>`;
                
                // ✅ [إضافة جديدة] حقول تعديل السنة والخبرة
                const updateSection = `
                  <td class="actions-cell-update">
                    <div class="update-group">
                      <input type="text" class="admin-input admin-input-year" data-user-id="${user._id}" placeholder="e.g., 1" value="${user.studyYear || ''}">
                      <button class="action-btn btn-update" data-user-id="${user._id}" data-action="update-year">Set Year</button>
                    </div>
                    <div class="update-group">
                      <input type="number" class="admin-input admin-input-xp" data-user-id="${user._id}" placeholder="e.g., 500" value="${user.experiencePoints || 0}">
                      <button class="action-btn btn-update" data-user-id="${user._id}" data-action="update-xp">Set XP</button>
                    </div>
                  </td>
                `;

                row.innerHTML = `
                  <td>${user.displayName || "N/A"}</td>
                  <td>${user.email || "N/A"}</td>
                  <td>${user.studyYear || "N/A"}</td>
                  <td>${user.experiencePoints || 0}</td> <td>${statusBadge}</td>
                  <td>${aiBadge}</td>
                  <td class="actions-cell">${activationBtn} ${aiBtn}</td>
                  ${updateSection} `;
                tableBody.appendChild(row);
            });
        } catch (error) {
             console.error("Failed to load users:", error);
            tableBody.innerHTML = '<tr><td colspan="8">Failed to load users. Please try again.</td></tr>'; // ✅ زيادة العدد إلى 8
        }
    }

    // ========================
    // 🧾 تحميل التقارير
    // ========================
    async function loadReports() {
        // (تبقى هذه الدالة كما هي)
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
                  <td>${report.reportedBy?.displayName || "Unknown User"}</td>
                  <td>${report.subject?.name || "Unknown Subject"}</td>
                  <td>${report.createdAt ? new Date(report.createdAt).toLocaleDateString() : "N/A"}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
             console.error("Failed to load reports:", error);
            tableBody.innerHTML = '<tr><td colspan="5">Failed to load reports. Please try again.</td></tr>';
        }
    }

    // ========================
    // 🤖 تحميل سجلات الـ AI Observatory
    // ========================
    async function loadAiLogs() {
        // (تبقى هذه الدالة كما هي)
        const tableBody = document.getElementById("ailogs-table-body");
        tableBody.innerHTML = '<tr><td colspan="4">Loading...</td></tr>';
        try {
            const logs = await fetchAdminApi("/ailogs");
            tableBody.innerHTML = "";
            logs.forEach((log) => {
                const statusBadge = log.status === "success" ? '<span class="status-badge status-active">Success</span>' : '<span class="status-badge status-inactive">Error</span>';
                const row = document.createElement("tr");
                row.innerHTML = `
                  <td>${log.user?.displayName || "Unknown User"}</td>
                  <td>${log.task || "N/A"}</td>
                  <td>${statusBadge}</td>
                  <td>${log.createdAt ? new Date(log.createdAt).toLocaleString() : "N/A"}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
             console.error("Failed to load AI logs:", error);
            tableBody.innerHTML = '<tr><td colspan="4">Failed to load AI logs. Please try again.</td></tr>';
        }
    }

    // ========================
    // ⚙️ الأزرار (معالجة جميع الأزرار)
    // ========================
    document.body.addEventListener("click", async (e) => {
        const userId = e.target.dataset.userId;
        const action = e.target.dataset.action;
        if (!userId || !action) return;

        let endpoint = "";
        let options = { method: "PUT" };
        let payload = {};
        
        // تعطيل الزر مؤقتاً
        e.target.disabled = true;
        e.target.textContent = '...';

        try {
            if (action === "toggle-activation") {
                endpoint = `/users/${userId}/activate`;
            } else if (action === "toggle-ai") {
                endpoint = `/users/${userId}/toggle-ai`;
            } 
            // --- ✅ [إضافة جديدة] معالجة تعديل السنة ---
            else if (action === "update-year") {
                const input = document.querySelector(`.admin-input-year[data-user-id="${userId}"]`);
                if (!input || !input.value) { throw new Error("Please enter a year."); }
                
                endpoint = `/users/${userId}/year`;
                payload = { year: input.value };
                options.body = JSON.stringify(payload);
            } 
            // --- ✅ [إضافة جديدة] معالجة تعديل الخبرة ---
            else if (action === "update-xp") {
                const input = document.querySelector(`.admin-input-xp[data-user-id="${userId}"]`);
                if (!input || input.value === '') { throw new Error("Please enter an XP value."); }

                const xp = parseInt(input.value, 10);
                if (isNaN(xp)) { throw new Error("Invalid XP value."); }

                endpoint = `/users/${userId}/xp`;
                payload = { experiencePoints: xp };
                options.body = JSON.stringify(payload);
            } 
            // --- نهاية الإضافة ---
            else {
                e.target.disabled = false; // أعد تفعيل الزر إذا لم يكن هناك إجراء
                e.target.textContent = e.target.dataset.action.includes('update') ? 'Set' : '...'; // أعد النص
                return; 
            }

            await fetchAdminApi(endpoint, options);
            loadUsers(); // أعد تحميل جدول المستخدمين بالكامل لإظهار التغييرات
        
        } catch (error) {
            console.error(`Failed to ${action} for user ${userId}:`, error);
            alert(`Failed to update user: ${error.message}`);
            // أعد تحميل المستخدمين حتى لو حدث خطأ (لإعادة ضبط الأزرار إلى حالتها الأصلية)
            loadUsers();
        }
    });

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

    // تحميل الإحصائيات عند فتح الصفحة
    loadDashboardStats();
}
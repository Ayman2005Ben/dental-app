// admin-panel/app.js (النسخة النهائية مع الإصلاح المنطقي)

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
    loginBtn.addEventListener("click", () => {
        // استخدام المسار الصحيح لبدء تسجيل دخول المشرف
        window.location.href = "https://dental-app-he1p.onrender.com/auth/google/admin";
    });

    // قراءة التوكن أو الأخطاء من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const error = urlParams.get("error");

    if (error === "not_an_admin" || error === "not_the_admin_email") {
        statusEl.textContent = "Access Denied. You are not the authorized admin.";
    } else if (error) {
        statusEl.textContent = "Login failed. Please try again.";
    }

    // ✅ حفظ التوكن والتحقق منه
    if (token) {
        localStorage.setItem("adminToken", token);
        // ✨ ✨ ✨ الإصلاح هنا: إعادة التوجيه الفوري ✨ ✨ ✨
        // بما أن الخادم قام بالتحقق وأرسل التوكن، نثق به وننتقل مباشرة
        console.log("✅ Token received from server. Redirecting to dashboard...");
        window.location.href = "index.html"; // <--- الانتقال المباشر للوحة التحكم
    }
}

// --- (لم نعد بحاجة للدالة verifyAdminTokenHardcoded هنا) ---


// ========================
// 🔹 لوحة التحكم (Dashboard)
// ========================
function handleDashboardPage() {
    // --- ✅ ✅ ✅ التحقق الأمني الأساسي ---
    const token = localStorage.getItem("adminToken");
    if (!token) {
        // إذا لم يكن هناك توكن، أعده فوراً لصفحة الدخول
        console.log("🚫 No admin token found. Redirecting to login.");
        window.location.href = "login.html";
        return; // أوقف تنفيذ بقية الكود
    }
    // --- نهاية التحقق الأمني ---


    // (بقية الكود الخاص بلوحة التحكم يبقى كما هو)
    const navLinks = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(".content-section");

    // دالة المساعدة لاستدعاء API (تستخدم الرابط الصحيح)
    const fetchAdminApi = async (endpoint, options = {}) => {
        try { // <-- إضافة try/catch هنا
            const res = await fetch(`https://dental-app-he1p.onrender.com/api/admin${endpoint}`, {
                ...options,
                headers: {
                    ...options.headers,
                    Authorization: `Bearer ${token}`, // استخدام التوكن المحفوظ
                    'Content-Type': options.body ? 'application/json' : undefined
                },
            });

            // إذا فشل التحقق من التوكن (401 أو 403)، أعده لصفحة الدخول
            if (res.status === 401 || res.status === 403) {
                 console.warn("🚫 Unauthorized API request. Redirecting to login.");
                localStorage.removeItem("adminToken");
                window.location.href = "login.html";
                throw new Error("Unauthorized"); // أوقف التنفيذ
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
             // إذا حدث خطأ (مثل مشكلة في الشبكة أو خطأ غير متوقع)، أعده لصفحة الدخول كإجراء احترازي
             if (error.message !== "Unauthorized") { // تجنب إعادة التوجيه مرتين
                 alert(`An error occurred: ${error.message}. Redirecting to login.`);
                 localStorage.removeItem("adminToken");
                 window.location.href = "login.html";
             }
             throw error; // أعد إرسال الخطأ لإيقاف العمليات الأخرى
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

    // ... (بقية الدوال: loadDashboardStats, loadUsers, loadReports, loadAiLogs, معالج الأزرار, logoutBtn)
    // ... تبقى كما هي بدون تغيير ...

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
        } catch (error) {
            console.error("Failed to load dashboard stats:", error);
        }
    }

    // ========================
    // 👥 تحميل المستخدمين
    // ========================
    async function loadUsers() {
        const tableBody = document.getElementById("users-table-body");
        tableBody.innerHTML = '<tr><td colspan="6">Loading...</td></tr>';
        try {
            const users = await fetchAdminApi("/users");
            tableBody.innerHTML = "";
            users.forEach((user) => {
                const row = document.createElement("tr");
                const statusBadge = user.isActivated ? '<span class="status-badge status-active">Active</span>' : '<span class="status-badge status-inactive">Inactive</span>';
                const aiBadge = user.canUseAI === false ? '<span class="status-badge status-inactive">Disabled</span>' : '<span class="status-badge status-active">Enabled</span>';
                const activationBtn = user.isActivated ? `<button class="action-btn btn-deactivate" data-user-id="${user._id}" data-action="toggle-activation">Deactivate</button>` : `<button class="action-btn btn-activate" data-user-id="${user._id}" data-action="toggle-activation">Activate</button>`;
                const aiBtn = user.canUseAI === false ? `<button class="action-btn btn-activate" data-user-id="${user._id}" data-action="toggle-ai">Enable AI</button>` : `<button class="action-btn btn-deactivate" data-user-id="${user._id}" data-action="toggle-ai">Disable AI</button>`;
                row.innerHTML = `
                  <td>${user.displayName || "N/A"}</td>
                  <td>${user.email || "N/A"}</td>
                  <td>${user.studyYear || "N/A"}</td>
                  <td>${statusBadge}</td>
                  <td>${aiBadge}</td>
                  <td class="actions-cell">${activationBtn} ${aiBtn}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
             console.error("Failed to load users:", error);
            tableBody.innerHTML = '<tr><td colspan="6">Failed to load users. Please try again.</td></tr>';
        }
    }

    // ========================
    // 🧾 تحميل التقارير
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
    // ⚙️ الأزرار (تفعيل / تعطيل المستخدم أو الـ AI)
    // ========================
    document.body.addEventListener("click", async (e) => {
        const userId = e.target.dataset.userId;
        const action = e.target.dataset.action;
        if (!userId || !action) return;

        let endpoint = "";
        if (action === "toggle-activation") { endpoint = `/users/${userId}/activate`; }
        else if (action === "toggle-ai") { endpoint = `/users/${userId}/toggle-ai`; }
        else { return; }

        e.target.disabled = true;
        e.target.textContent = 'Processing...';

        try {
            await fetchAdminApi(endpoint, { method: "PUT" });
            loadUsers();
        } catch (error) {
            console.error(`Failed to ${action} for user ${userId}:`, error);
            alert(`Failed to update user status: ${error.message}`);
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
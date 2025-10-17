// admin-panel/app.js (النسخة النهائية مع الحل القاطع)

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

    // ✅ حفظ التوكن والتحقق منه (باستخدام الحل القاطع)
    if (token) {
        localStorage.setItem("adminToken", token);
        verifyAdminTokenHardcoded(token); // <--- استخدام الدالة الجديدة
    }
}

// --- ✅ ✅ ✅ الحل القاطع: التحقق من الإيميل مباشرة ---
// دالة بسيطة لفك تشفير التوكن (JWT) للحصول على الإيميل
function parseJwt (token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Error parsing JWT:", e);
        return null;
    }
}

// دالة التحقق الجديدة (الحل القاطع)
async function verifyAdminTokenHardcoded(token) {
    const statusEl = document.getElementById("login-status");
    const ADMIN_EMAIL = '0667969129a@gmail.com'; // <-- إيميل المدير المحدد هنا

    try {
        // 1. فك تشفير التوكن للحصول على معلومات المستخدم (بما في ذلك الإيميل)
        const decodedToken = parseJwt(token);
        console.log("🔍 Decoded token:", decodedToken);

        if (!decodedToken || !decodedToken.id) {
             throw new Error("Invalid token structure.");
        }

        // 2. التحقق من الإيميل مباشرة
        // سنحتاج لجلب الإيميل من الخادم لأن التوكن لا يحتوي عليه
         const profileResponse = await fetch("https://dental-app-he1p.onrender.com/api/user/profile", {
            headers: { Authorization: `Bearer ${token}` },
         });
         if (!profileResponse.ok) {
             throw new Error("Could not fetch user profile to verify email.");
         }
         const userProfile = await profileResponse.json();
         console.log("📧 Fetched user profile for email check:", userProfile);


        if (userProfile.email === ADMIN_EMAIL) {
            console.log("✅ Admin email confirmed. Redirecting...");
            window.location.href = "index.html"; // نجاح، اذهب للوحة التحكم
        } else {
            // إذا لم يكن الإيميل متطابقاً
            console.warn(`🚫 Access Denied. Email '${userProfile.email}' does not match admin email.`);
            localStorage.removeItem("adminToken");
            statusEl.textContent = "Access Denied. You are not the authorized admin.";
        }

    } catch (err) {
        // هذا الخطأ سيحدث إذا فشلت دالة parseJwt أو fetch
        console.error("❌ Admin verification error:", err);
        localStorage.removeItem("adminToken");
        statusEl.textContent = `Verification failed: ${err.message}. Please try again.`;
    }
}
// --- نهاية الحل القاطع ---


// ========================
// 🔹 لوحة التحكم (Dashboard) - (الكود هنا يبقى كما هو)
// ========================
function handleDashboardPage() {
    const token = localStorage.getItem("adminToken");
    if (!token) {
        window.location.href = "login.html";
        return;
    }

    const navLinks = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(".content-section");

    // دالة المساعدة لاستدعاء API (تستخدم الرابط الصحيح)
    const fetchAdminApi = async (endpoint, options = {}) => {
        const res = await fetch(`https://dental-app-he1p.onrender.com/api/admin${endpoint}`, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`,
                'Content-Type': options.body ? 'application/json' : undefined // مهم لإضافة Content-Type عند الحاجة
            },
        });

        if (res.status === 401 || res.status === 403) {
            localStorage.removeItem("adminToken");
            window.location.href = "login.html";
        }

        // تحسين معالجة الأخطاء
        if (!res.ok) {
            const errorData = await res.json().catch(() => ({ message: `API request failed with status ${res.status}` }));
             console.error(`API Error for ${endpoint}:`, errorData);
            throw new Error(errorData.message || `API request failed with status ${res.status}`);
        }
         // التحقق إذا كانت الاستجابة فارغة (مثل PUT/DELETE)
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return res.json();
        } else {
            return {}; // إرجاع كائن فارغ إذا لم يكن هناك JSON
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
        } catch (error) {
            console.error("Failed to load dashboard stats:", error);
            // يمكنك إضافة رسالة خطأ للمستخدم هنا إذا أردت
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

                const statusBadge = user.isActivated
                  ? '<span class="status-badge status-active">Active</span>'
                  : '<span class="status-badge status-inactive">Inactive</span>';

                const aiBadge = user.canUseAI === false // التحقق الصريح من false
                  ? '<span class="status-badge status-inactive">Disabled</span>'
                  : '<span class="status-badge status-active">Enabled</span>';

                const activationBtn = user.isActivated
                  ? `<button class="action-btn btn-deactivate" data-user-id="${user._id}" data-action="toggle-activation">Deactivate</button>`
                  : `<button class="action-btn btn-activate" data-user-id="${user._id}" data-action="toggle-activation">Activate</button>`;

                const aiBtn = user.canUseAI === false // التحقق الصريح من false
                  ? `<button class="action-btn btn-activate" data-user-id="${user._id}" data-action="toggle-ai">Enable AI</button>`
                  : `<button class="action-btn btn-deactivate" data-user-id="${user._id}" data-action="toggle-ai">Disable AI</button>`;


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
            tableBody.innerHTML =
                '<tr><td colspan="6">Failed to load users. Please try again.</td></tr>';
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
            tableBody.innerHTML =
                '<tr><td colspan="5">Failed to load reports. Please try again.</td></tr>';
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
                const statusBadge =
                  log.status === "success"
                    ? '<span class="status-badge status-active">Success</span>'
                    : '<span class="status-badge status-inactive">Error</span>';

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
            tableBody.innerHTML =
                '<tr><td colspan="4">Failed to load AI logs. Please try again.</td></tr>';
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
        if (action === "toggle-activation") {
            endpoint = `/users/${userId}/activate`;
        } else if (action === "toggle-ai") {
            endpoint = `/users/${userId}/toggle-ai`;
        } else {
            return; // إذا لم يكن الزر معروفاً
        }

        // تعطيل الزر مؤقتاً لمنع النقرات المتعددة
        e.target.disabled = true;
        e.target.textContent = 'Processing...';


        try {
            await fetchAdminApi(endpoint, { method: "PUT" });
            loadUsers(); // إعادة تحميل قائمة المستخدمين بعد التحديث
        } catch (error) {
            console.error(`Failed to ${action} for user ${userId}:`, error);
            alert(`Failed to update user status: ${error.message}`);
             // إعادة تفعيل الزر في حالة الفشل
            loadUsers(); // إعادة تحميل ليعود الزر لحالته الأصلية
        }
        // لا نحتاج لإعادة تفعيل الزر هنا لأن loadUsers() ستعيد رسمه
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
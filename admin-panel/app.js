// admin-panel/app.js

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
    window.location.href = "https://dental-app-he1p.onrender.com/auth/google/admin";
  });

  // قراءة التوكن أو الأخطاء من الرابط
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const error = urlParams.get("error");

  if (error === "not_an_admin") {
    statusEl.textContent = "Access Denied. You are not an admin.";
  } else if (error) {
    statusEl.textContent = "Login failed. Please try again.";
  }

  // ✅ حفظ التوكن والتحقق منه
  if (token) {
    localStorage.setItem("adminToken", token);
    verifyAdminToken(token);
  }
}


// ✅ التحقق من التوكن
async function verifyAdminToken(token) {
  const statusEl = document.getElementById("login-status");

  try {
    const response = await fetch("https://dental-app-he1p.onrender.com/api/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const user = await response.json();
    console.log("🔍 Verified user from token:", user);

    if (response.ok && user.role === "admin") {
      window.location.href = "index.html";
    } else {
      localStorage.removeItem("adminToken");
      statusEl.textContent = "Access Denied. You are not an admin.";
    }
  } catch (err) {
    console.error("❌ Token verification error:", err);
    localStorage.removeItem("adminToken");
    statusEl.textContent = "Verification failed. Please try again.";
  }
}


// ========================
// 🔹 لوحة التحكم (Dashboard)
// ========================
function handleDashboardPage() {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  const navLinks = document.querySelectorAll(".nav-link");
  const contentSections = document.querySelectorAll(".content-section");

  // دالة المساعدة لاستدعاء API
  const fetchAdminApi = async (endpoint, options = {}) => {
    const res = await fetch(`https://dental-app-he1p.onrender.com/api/admin${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401 || res.status === 403) {
      localStorage.removeItem("adminToken");
      window.location.href = "login.html";
    }

    if (!res.ok) throw new Error("API request failed");
    return res.json();
  };


  // 🔸 التنقل بين الأقسام
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      contentSections.forEach((s) => s.classList.remove("active"));
      document.getElementById(targetId).classList.add("active");

      if (targetId === "users") loadUsers();
      if (targetId === "reports") loadReports();
      if (targetId === "ai-logs") loadAiLogs(); // ✅ قسم سجلات AI الجديد
    });
  });


  // ========================
  // 📊 تحميل الإحصائيات العامة
  // ========================
  async function loadDashboardStats() {
    try {
      const stats = await fetchAdminApi("/stats");
      document.getElementById("stat-total-users").textContent = stats.totalUsers;
      document.getElementById("stat-active-users").textContent = stats.activeUsers;
      document.getElementById("stat-new-users").textContent = stats.newUsers;
      document.getElementById("stat-new-reports").textContent = stats.newReports;
    } catch (error) {
      console.error("Failed to load stats:", error);
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

        const aiBadge = user.canUseAI
          ? '<span class="status-badge status-active">Enabled</span>'
          : '<span class="status-badge status-inactive">Disabled</span>';

        const activationBtn = user.isActivated
          ? `<button class="action-btn btn-deactivate" data-user-id="${user._id}" data-action="toggle-activation">Deactivate</button>`
          : `<button class="action-btn btn-activate" data-user-id="${user._id}" data-action="toggle-activation">Activate</button>`;

        const aiBtn = user.canUseAI
          ? `<button class="action-btn btn-deactivate" data-user-id="${user._id}" data-action="toggle-ai">Disable AI</button>`
          : `<button class="action-btn btn-activate" data-user-id="${user._id}" data-action="toggle-ai">Enable AI</button>`;

        row.innerHTML = `
          <td>${user.displayName}</td>
          <td>${user.email}</td>
          <td>${user.studyYear || "N/A"}</td>
          <td>${statusBadge}</td>
          <td>${aiBadge}</td>
          <td class="actions-cell">${activationBtn} ${aiBtn}</td>
        `;

        tableBody.appendChild(row);
      });
    } catch (error) {
      tableBody.innerHTML =
        '<tr><td colspan="6">Failed to load users.</td></tr>';
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
          <td>${report.questionText}</td>
          <td>${report.reason}</td>
          <td>${report.reportedBy.displayName}</td>
          <td>${report.subject.name}</td>
          <td>${new Date(report.createdAt).toLocaleDateString()}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      tableBody.innerHTML =
        '<tr><td colspan="5">Failed to load reports.</td></tr>';
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
          <td>${log.user?.displayName || "Unknown"}</td>
          <td>${log.task}</td>
          <td>${statusBadge}</td>
          <td>${new Date(log.createdAt).toLocaleString()}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      tableBody.innerHTML =
        '<tr><td colspan="4">Failed to load AI logs.</td></tr>';
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
    }

    try {
      await fetchAdminApi(endpoint, { method: "PUT" });
      loadUsers();
    } catch (error) {
      alert("Failed to update user status.");
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

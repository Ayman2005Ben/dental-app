// DENTAL-QUEST-BACKEND/controllers/authController.js

const jwt = require('jsonwebtoken');

/* ✅ للطلاب */
exports.googleCallback = (req, res) => {
  if (!req.user) {
    return res.redirect(`${process.env.CLIENT_URL}/login.html?error=no_user`);
  }

  if (req.user.role === 'admin') {
    return res.redirect(`${process.env.CLIENT_URL}/login.html?error=admin_login_prohibited`);
  }

  const token = jwt.sign(
    { id: req.user.id, role: req.user.role },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );

  res.redirect(`${process.env.CLIENT_URL}/index.html?token=${token}`);
};

/* ✅ للمشرف */
exports.googleAdminCallback = (req, res) => {
  console.log('🛠️ [Admin Login] req.user:', req.user);

  if (!req.user) {
    return res.redirect(`${process.env.CLIENT_URL}/admin-panel/login.html?error=no_user`);
  }

  // نتحقق من الدور داخل الكائن نفسه مباشرة
  if (req.user.role !== 'admin') {
    console.warn('🚫 Access denied. User is not an admin.');
    return res.redirect(`${process.env.CLIENT_URL}/admin-panel/login.html?error=not_an_admin`);
  }

  // 🔥 إنشاء توكن يحتوي على الدور
  const token = jwt.sign(
    { id: req.user.id, role: req.user.role },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );

  // إعادة التوجيه مع التوكن
  res.redirect(`${process.env.CLIENT_URL}/admin-panel/login.html?token=${token}`);
};

// utils/keyPool.js

// دالة لمسح الوقت (بالثواني)
const ms = (s) => s * 1000;

// دالة لقراءة المفاتيح من متغيرات البيئة وتقسيمها
function parseKeys(envVar) {
  return (process.env[envVar] || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean); // يزيل أي مفاتيح فارغة
}

// دالة لإنشاء "مجمع" من المفاتيح مع منطق التدوير والتبريد
function makePool(keys, cooldownSec = 60) {
  let currentIndex = 0;
  const state = keys.map(key => ({ key, cooldownUntil: 0 }));

  // دالة لجلب المفتاح التالي المتاح
  function getNext() {
    const now = Date.now();
    
    // ابحث عن أول مفتاح غير "بارد" (cooldown)
    for (let i = 0; i < state.length; i++) {
      const index = (currentIndex + i) % state.length;
      if (state[index].cooldownUntil <= now) {
        currentIndex = index + 1; // ابدأ من التالي في المرة القادمة
        return { index, key: state[index].key };
      }
    }

    // إذا كانت كل المفاتيح "باردة"، اختر المفتاح الذي سينتهي تبريده أولاً
    let soonestAvailable = 0;
    for (let i = 1; i < state.length; i++) {
      if (state[i].cooldownUntil < state[soonestAvailable].cooldownUntil) {
        soonestAvailable = i;
      }
    }
    currentIndex = soonestAvailable + 1;
    return { index: soonestAvailable, key: state[soonestAvailable].key };
  }

  // دالة لوضع مفتاح في حالة "تبريد"
  function coolDown(index, seconds = cooldownSec) {
    if (state[index]) {
      state[index].cooldownUntil = Date.now() + ms(seconds);
    }
  }

  // إرجاع حجم المجمع
  const size = () => state.length;

  return { getNext, coolDown, size };
}

// تصدير الدالتين ليتمكن الكنترولر من استخدامهما
module.exports = { parseKeys, makePool };
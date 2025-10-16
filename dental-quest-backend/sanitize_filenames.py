import os
import shutil
import unicodedata
import re

# --- الإعدادات ---
# المسار الدقيق لمجلد الدروس الخاص بك
ROOT_PATH = r"D:\Nouveau dossier (2)\Lessons"

def sanitize(name):
    """
    دالة ذكية لتنظيف الأسماء لتكون آمنة للويب.
    """
    # 1. إزالة الامتداد مؤقتًا إذا كان موجودًا
    base, extension = os.path.splitext(name)
    
    # 2. تحويل إلى حروف صغيرة
    sanitized_base = base.lower()
    
    # 3. تحويل الأحرف الخاصة (é -> e)
    sanitized_base = ''.join(c for c in unicodedata.normalize('NFD', sanitized_base) if unicodedata.category(c) != 'Mn')
    
    # 4. استبدال أي رمز ليس حرفًا أو رقمًا بشرطة
    sanitized_base = re.sub(r'[^a-z0-9]+', '-', sanitized_base)
    
    # 5. إزالة الشرطات المتكررة أو في البداية/النهاية
    sanitized_base = re.sub(r'-+', '-', sanitized_base)
    sanitized_base = sanitized_base.strip('-')
    
    # 6. إعادة الامتداد الأصلي
    return sanitized_base + extension.lower()

# --- بداية السكربت ---
if not os.path.isdir(ROOT_PATH):
    print(f"Error: Path not found -> {ROOT_PATH}")
    input("Press Enter to exit.")
    exit()

print("Starting file and folder sanitization process...")
print("This will rename all folders and files to be web-safe.")

# استخدام os.walk للتنقل في كل المجلدات والملفات من الأسفل للأعلى لضمان عدم حدوث أخطاء
try:
    for dirpath, dirnames, filenames in os.walk(ROOT_PATH, topdown=False):
        # أولاً: إعادة تسمية الملفات داخل المجلد الحالي
        for filename in filenames:
            original_path = os.path.join(dirpath, filename)
            sanitized_name = sanitize(filename)
            new_path = os.path.join(dirpath, sanitized_name)
            if original_path != new_path:
                print(f"  File: '{filename}' -> '{sanitized_name}'")
                shutil.move(original_path, new_path)
                
        # ثانياً: إعادة تسمية المجلدات الفرعية
        for dirname in dirnames:
            original_path = os.path.join(dirpath, dirname)
            sanitized_name = sanitize(dirname)
            new_path = os.path.join(dirpath, sanitized_name)
            if original_path != new_path:
                print(f"Folder: '{dirname}' -> '{sanitized_name}'")
                shutil.move(original_path, new_path)

    print("\n✅ Sanitization complete! All files and folders are now web-safe.")
except Exception as e:
    print(f"\n❌ An error occurred: {e}")

input("Press Enter to exit.")
import os
import shutil

# المسار الدقيق لمجلد الدروس الخاص بك
ROOT_PATH = r"D:\Nouveau dossier (2)\Lessons"

if not os.path.isdir(ROOT_PATH):
    print(f"Error: Path not found -> {ROOT_PATH}")
    input("Press Enter to exit.")
    exit()

print("Starting underscore fixing process...")

# استخدام os.walk للتنقل في كل المجلدات والملفات من الأسفل للأعلى
try:
    for dirpath, dirnames, filenames in os.walk(ROOT_PATH, topdown=False):
        # أولاً: إصلاح أسماء الملفات
        for filename in filenames:
            if '_' in filename:
                original_path = os.path.join(dirpath, filename)
                # استبدال الشرطة السفلية بمسافة
                new_name = filename.replace('_', ' ')
                new_path = os.path.join(dirpath, new_name)
                print(f"  Fixing file: '{filename}' -> '{new_name}'")
                shutil.move(original_path, new_path)

        # ثانياً: إصلاح أسماء المجلدات
        for dirname in dirnames:
            if '_' in dirname:
                original_path = os.path.join(dirpath, dirname)
                # استبدال الشرطة السفلية بمسافة
                new_name = dirname.replace('_', ' ')
                new_path = os.path.join(dirpath, new_name)
                print(f"Fixing folder: '{dirname}' -> '{new_name}'")
                shutil.move(original_path, new_path)

    print("\n✅ Underscore fixing complete!")
except Exception as e:
    print(f"\n❌ An error occurred: {e}")

input("Press Enter to exit.")
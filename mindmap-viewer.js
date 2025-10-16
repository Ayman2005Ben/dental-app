document.addEventListener('DOMContentLoaded', () => {
    const { markmap } = window;
    const Transformer = markmap.Transformer;
    const Markmap = markmap.Markmap;

    const svgEl = document.querySelector('#markmap-container');
    const downloadBtn = document.getElementById('download-svg-btn');
    const titleEl = document.getElementById('mindmap-title');

    // 1. قراءة بيانات الخريطة من الذاكرة المؤقتة للمتصفح
    const markdownContent = localStorage.getItem('mindmapMarkdown');
    if (!markdownContent) {
        titleEl.textContent = "Error: No data found.";
        return;
    }

    // 2. تحويل الماركداون وعرض الخريطة
    const transformer = new Transformer();
    const { root } = transformer.transform(markdownContent);
    titleEl.textContent = root.content || "Mind Map Summary";
    const mm = Markmap.create(svgEl, null, root);
    
    // 3. ✅ إصلاح مشكلة التصدير الفارغ
    downloadBtn.onclick = () => {
        try {
            // نقوم بتصدير عنصر SVG الرئيسي نفسه، وليس محتواه فقط
            const svgContent = new XMLSerializer().serializeToString(svgEl);
            const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'mindmap.svg';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (e) {
            console.error('SVG Export Error:', e);
            alert('Failed to export SVG.');
        }
    };

    // 4. حذف البيانات من الذاكرة بعد استخدامها
    localStorage.removeItem('mindmapMarkdown');

    // 5. ضبط حجم الخريطة بعد تحميل الصفحة
    window.addEventListener('resize', () => mm.fit());
    mm.fit();
});
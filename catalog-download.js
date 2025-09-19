// وظيفة تنزيل كتالوج PDF
function downloadCatalog() {
  // مسار ملف PDF
  const pdfPath = 'Royal-Glass-catalog-Mostafa-Abdelaleem-min8.9.pdf';

  // إنشاء رابط تنزيل مؤقت
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'Royal-Glass-catalog-Mostafa-Abdelaleem-min8.9.pdf';
  link.target = '_blank';

  // إضافة الرابط للصفحة وتنفيذ النقر
  document.body.appendChild(link);
  link.click();

  // إزالة الرابط بعد التنزيل
  document.body.removeChild(link);
}

// إضافة مستمع الحدث للزر عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('downloadCatalogBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadCatalog);
  }
});

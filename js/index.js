$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,         // لجعل السلايدر يتكرر بشكل لا نهائي
    margin: 0,          // لا توجد مسافة بين الشرائح
    nav: false,          // لإظهار أسهم التنقل (السابق/التالي)
    dots: true,         // لإظهار النقاط أسفل السلايدر
   
    autoplay: true,     // للتشغيل التلقائي
    autoplayTimeout: 5000, // مدة الانتظار قبل الانتقال للشريحة التالية (5 ثوانٍ)
    autoplayHoverPause: true, // يتوقف عند مرور الماوس
    animateOut: 'fadeOut', // تأثير عند خروج الشريحة
    animateIn: 'fadeIn',   // تأثير عند دخول الشريحة
    responsive:{        // لجعله متجاوبًا مع الشاشات المختلفة
        0:{
            items:1      // على جميع الشاشات، تظهر شريحة واحدة
        }
    }
  });
});


  AOS.init({
    duration: 1200,      // سرعة الأنيميشن (ملي ثانية)
    once: true           // تظهر مرة فقط إذا تحبى
  });

  // هذا الكود يضاف بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  // إضافة خصائص AOS لسكشن الكونتاكت
  const contactSection = document.querySelector('section.m-0.p-0');
  contactSection.setAttribute('data-aos', 'fade-up');
  contactSection.setAttribute('data-aos-duration', '800');
  
  // إضافة خصائص AOS لكل عنصر من عناصر الكونتاكت
  const contactItems = document.querySelectorAll('.container-wrap');
  contactItems.forEach((item, index) => {
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', (index * 100).toString());
  });
  
  // إضافة خصائص خاصة للعناصر الاجتماعية
  const socialBox = document.querySelector('.col-md-3.col-sm-12.bg-warning');
  if (socialBox) {
    socialBox.setAttribute('data-aos', 'fade-left');
    socialBox.setAttribute('data-aos-duration', '600');
  }
  
  // تحديث AOS
  AOS.refresh();
});
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

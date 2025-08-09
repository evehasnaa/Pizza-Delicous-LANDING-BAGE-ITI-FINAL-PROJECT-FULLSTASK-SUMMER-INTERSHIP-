// Owl Carousel
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1
      }
    }
  });
});

// AOS Initialization
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    offset: 120
  });

  // Add AOS attributes to elements
  const contactSection = document.querySelector('section.m-0.p-0');
  if (contactSection) {
    contactSection.setAttribute('data-aos', 'fade-up');
    contactSection.setAttribute('data-aos-duration', '800');
  }

  const contactItems = document.querySelectorAll('.container-wrap');
  contactItems.forEach((item, index) => {
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', (index * 100).toString());
  });

  const socialBox = document.querySelector('.col-md-3.col-sm-12.bg-warning');
  if (socialBox) {
    socialBox.setAttribute('data-aos', 'fade-left');
    socialBox.setAttribute('data-aos-duration', '600');
  }

  AOS.refresh();
});

// Scroll to Top on Overlay Click
document.addEventListener('DOMContentLoaded', () => {
  const imageOverlays = document.querySelectorAll('.image-overlay');
  imageOverlays.forEach(overlay => {
    overlay.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
});

// Category Buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-category]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-category]').forEach(b => {
        b.classList.remove('btn-warning', 'active');
        b.classList.add('btn-outline-warning');
      });

      this.classList.remove('btn-outline-warning');
      this.classList.add('btn-warning', 'active');

      document.querySelectorAll('.category-group').forEach(cat => {
        cat.classList.add('d-none');
      });

      const targetCategory = document.getElementById(this.getAttribute('data-category'));
      if (targetCategory) {
        targetCategory.classList.remove('d-none');
      }
    });
  });
});
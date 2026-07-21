/* ============================================================
   Riverside Electric — main.js
   Shared interactions (run once) + page-specific behaviours
   guarded by element existence so no double-binding across pages.
   ============================================================ */
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileOverlay = document.getElementById('mobileOverlay');
  var mobileClose = document.getElementById('mobileClose');

  /* ---- Mobile CTA bar: offset body so it never covers content ---- */
  var mobileCta = document.querySelector('.mobile-cta-bar');
  document.body.style.paddingBottom = (mobileCta ? mobileCta.offsetHeight : 0) + 'px';

  /* ---- Sticky nav background on scroll ---- */
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 100) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu open/close ---- */
  function openMenu() {
    navToggle.classList.add('active');
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    navToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (navToggle && mobileMenu && mobileOverlay) {
    navToggle.addEventListener('click', function () {
      if (mobileMenu.classList.contains('active')) closeMenu(); else openMenu();
    });
    mobileOverlay.addEventListener('click', closeMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  /* ---- Scroll reveal animations ---- */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
    observer.observe(el);
  });

  /* ---- Smooth scroll for in-page anchors (offset for fixed nav) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href === '#' || href === '#!') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var navHeight = nav ? nav.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ---- Page-specific: homepage hero quote form (display only) ---- */
  var quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Thank you! We will contact you shortly.');
    });
  }

  /* ---- Page-specific: service page FAQ accordion ---- */
  var faqButtons = document.querySelectorAll('.faq-question');
  if (faqButtons.length) {
    faqButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('active'); });
        if (!wasActive) item.classList.add('active');
      });
    });
  }

  /* ---- Page-specific: contact page form (display only) ---- */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Thank you! We will contact you within 24 hours.');
    });
  }

  /* ---- Shared toast helper ---- */
  function showToast(message) {
    var toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:var(--color-primary);color:#fff;padding:12px 24px;border-radius:8px;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.2);font-family:var(--font-display);font-weight:600;text-align:center;max-width:90vw;';
    document.body.appendChild(toast);
    setTimeout(function () { toast.remove(); }, 3500);
  }
})();

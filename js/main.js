/* ============================================================
   AJDM Jakiur Rahman — Shared JavaScript
   ajdmjakiur.com
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Nav ── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', !isOpen);
      hamburger.classList.toggle('open', !isOpen);
      hamburger.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close on nav link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key (accessibility)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
    });
  }

  /* ── Active Nav Link — works with clean directory URLs ── */
  (function setActiveLink() {
    const current = window.location.pathname; // e.g. "/about/" or "/"
    document.querySelectorAll('.nav-link, #mobile-menu a').forEach(link => {
      const href = link.getAttribute('href') || '';
      // Exact match for root, prefix match for sub-paths (so /services/ also
      // activates for /services/laravel-development/ etc.)
      if (href === '/' ? current === '/' : href.length > 1 && current.startsWith(href)) {
        link.classList.add('active');
      }
    });
  })();

  /* ── Scroll Reveal ── */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // Skip animation — make all reveal elements visible immediately
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  /* ── FAQ Accordion ── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-question.open').forEach(openBtn => {
        openBtn.classList.remove('open');
        openBtn.nextElementSibling.classList.remove('open');
        openBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── Navbar shadow on scroll ── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.style.boxShadow = window.scrollY > 20
        ? '0 4px 20px rgba(0,0,0,.08)'
        : '0 1px 3px rgba(0,0,0,.06)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── WhatsApp float label toggle on small screens ── */
  const waFloat = document.querySelector('.wa-float');
  if (waFloat) {
    const waLabel = waFloat.querySelector('.wa-label');
    if (waLabel) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          waLabel.style.display = 'none';
        } else {
          waLabel.style.display = '';
        }
      }, { passive: true });
    }
  }

  /* ── Footer copyright year (static site has no server to compute date('Y')) ── */
  const copyYear = document.getElementById('copy-year');
  if (copyYear) copyYear.textContent = String(new Date().getFullYear());

})();

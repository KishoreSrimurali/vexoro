(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // Sticky header border
  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el, i) { el.style.transitionDelay = (i % 3) * 80 + 'ms'; io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Package buttons pre-select the enquiry type
  var type = document.getElementById('cf-type');
  var map = { Launch: 'Landing page', Brand: 'Brand website', Commerce: 'E-commerce' };
  document.querySelectorAll('[data-plan]').forEach(function (btn) {
    btn.addEventListener('click', function () { if (type) type.value = map[btn.dataset.plan]; });
  });

  // Contact form → pre-filled email
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var subject = 'New project enquiry — ' + d.get('type') + (d.get('brand') ? ' (' + d.get('brand') + ')' : '');
      var body = [
        'Name: ' + d.get('name'),
        'Email: ' + d.get('email'),
        'Brand / website: ' + (d.get('brand') || '—'),
        'Need: ' + d.get('type'),
        '',
        d.get('message')
      ].join('\n');
      window.location.href = 'mailto:hello@vexoro.dev?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

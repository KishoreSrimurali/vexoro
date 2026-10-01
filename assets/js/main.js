(function () {
  'use strict';

  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
      nav.classList.toggle('open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // Contact form: open the visitor's email app with the enquiry filled in
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var subject = 'Project enquiry: ' + d.get('type') + (d.get('brand') ? ' (' + d.get('brand') + ')' : '');
      var body = [
        'Name: ' + d.get('name'),
        'Email: ' + d.get('email'),
        'Brand or website: ' + (d.get('brand') || '-'),
        'Service: ' + d.get('type'),
        '',
        d.get('message')
      ].join('\n');
      window.location.href = 'mailto:hello@vexoro.dev?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

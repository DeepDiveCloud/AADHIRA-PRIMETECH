// Aadhira Primetech — shared site script

document.addEventListener('DOMContentLoaded', function () {

  // footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  var toggle = document.getElementById('menuToggle');
  var mnav = document.getElementById('mobileNav');
  if (toggle && mnav) {
    toggle.addEventListener('click', function () {
      var open = mnav.style.display === 'block';
      mnav.style.display = open ? 'none' : 'block';
      toggle.setAttribute('aria-expanded', String(!open));
    });
    mnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mnav.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // reveal register rows on scroll
  var rows = document.querySelectorAll('[data-r]');
  if (rows.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.15 });
      rows.forEach(function (r) { io.observe(r); });
    } else {
      rows.forEach(function (r) { r.classList.add('is-visible'); });
    }
  }

  // enquiry form -> WhatsApp (contact page only)
  var form = document.getElementById('enquireForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('fname').value.trim();
      var phone = document.getElementById('fphone').value.trim();
      var course = document.getElementById('fcourse').value;
      var mode = document.getElementById('fmode').value;
      var msg = "Hi, I'd like to enquire about a course.\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Course: " + course + "\n" +
        "Preferred mode: " + mode;
      var url = "https://wa.me/918489295597?text=" + encodeURIComponent(msg);
      window.open(url, '_blank');
    });
  }

});

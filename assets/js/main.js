// Lane BB — small progressive-enhancement helpers (no build step, no dependencies)
document.addEventListener('DOMContentLoaded', function () {
  // Mobile "Divisions" dropdown toggle (desktop uses CSS hover)
  document.querySelectorAll('.has-dropdown > a.nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 940) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // Close mobile menu after a link is chosen
  document.querySelectorAll('.main-nav a.nav-link:not(.has-dropdown > a)').forEach(function (link) {
    link.addEventListener('click', function () {
      var toggle = document.getElementById('nav-toggle');
      if (toggle) toggle.checked = false;
    });
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});

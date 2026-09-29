document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('menuToggle');
  var menu = document.getElementById('nav-links');
  function closeMenu() {
    menu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }
  menuToggle.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.site-header')) closeMenu();
  });

  var filters = document.querySelectorAll('[data-paper-filter]');
  var papers = document.querySelectorAll('[data-paper-status]');
  var groups = document.querySelectorAll('.publication-year');
  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.dataset.paperFilter;
      filters.forEach(function (other) { other.setAttribute('aria-pressed', String(other === button)); });
      papers.forEach(function (paper) {
        paper.hidden = paper.dataset.paperStatus !== filter;
      });
      groups.forEach(function (group) { group.hidden = !group.querySelector('[data-paper-status]:not([hidden])'); });
    });
  });
  var defaultFilter = document.querySelector('[data-paper-filter="published"]');
  if (defaultFilter) defaultFilter.click();
  // All papers remain readable without JavaScript.
  document.querySelectorAll('[data-js-control]').forEach(function (control) { control.hidden = false; });

  if ('IntersectionObserver' in window) {
    var sectionLinks = Array.from(menu.querySelectorAll('a')).filter(function (link) {
      return link.pathname.replace(/index\.html$/, '') === window.location.pathname.replace(/index\.html$/, '') && link.hash;
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var activeHash = entry.target.classList.contains('hero') ? '#bio' : '#' + entry.target.id;
        sectionLinks.forEach(function (link) {
          if (link.hash === activeHash) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    sectionLinks.forEach(function (link) {
      var target = document.querySelector(link.hash);
      if (target) observer.observe(target);
    });
    var hero = document.querySelector('.hero');
    if (hero) observer.observe(hero);
  }
});

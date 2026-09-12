/*
 * VK Building Concepts Inc. — shared site behaviour
 * Reused across every page: mobile nav toggle + solid header on scroll.
 */

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('[data-site-header]');
  var toggle = document.querySelector('[data-nav-toggle]');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav--open');
      toggle.classList.toggle('is-active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (header && header.classList.contains('site-header--transparent')) {
    var toggleSolid = function () {
      header.classList.toggle('is-solid', window.scrollY > 40);
    };
    toggleSolid();
    window.addEventListener('scroll', toggleSolid, { passive: true });
  }
});

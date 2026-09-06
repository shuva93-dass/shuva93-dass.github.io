document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // News ticker: duplicate the list in JS so the HTML only has to list
  // each item once. The duplicate is what makes the scroll loop seamless.
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var track = document.getElementById('news-ticker');
  if (track && !reduceMotion) {
    var original = track.querySelector('.news-list');
    if (original) {
      var clone = original.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    }
  }
});
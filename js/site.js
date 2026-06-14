/* Shared behaviour for every page:
   mobile menu, scroll reveals, and a small reward for the curious. */

(function () {
  /* ----- mobile menu ----- */
  const btn = document.querySelector('.menu-btn');
  const links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      const open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? '[close]' : '[menu]';
      document.body.classList.toggle('menu-open', open);
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = '[menu]';
        document.body.classList.remove('menu-open');
      }
    });
  }

  /* ----- scroll reveals with staggered children ----- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  /* items inside a section that should cascade in one after another */
  revealEls.forEach(function (el) {
    const items = el.querySelectorAll('.stat, .event, .member, .repo, .resource-row');
    items.forEach(function (item, i) {
      item.classList.add('stagger');
      item.style.transitionDelay = (120 + i * 80) + 'ms';
    });
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  } else {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ----- for the curious ----- */
  console.log(
    '%cbrunel_cybersec>_ %cnice instinct, opening the console.\n' +
    'BRUNEL{v1ew_s0urce_h4cker}\n' +
    'Bring that flag to any workshop and introduce yourself.',
    'color:#6FC9D8;font-family:monospace;font-weight:bold;',
    'color:#8E8B8F;font-family:monospace;'
  );
})();

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

  /* ----- featured event drawer ----- */
  const featuredEvent = document.querySelector('[data-featured-event]');
  if (featuredEvent) {
    const toggle = featuredEvent.querySelector('[data-event-toggle]');
    const close = document.querySelector('[data-event-close]');
    const drawer = featuredEvent.querySelector('[data-event-drawer]');
    const panel = drawer ? drawer.querySelector('.featured-event__drawer-panel') : null;
    let lastFocused = null;

    if (toggle && close && drawer && panel) {
      const setOpen = function (open) {
        featuredEvent.classList.toggle('is-open', open);
        drawer.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
        toggle.textContent = open ? 'Close details' : 'Read more';
        document.body.classList.toggle('drawer-open', open);

        if (open) {
          lastFocused = document.activeElement;
          close.focus();
        } else if (lastFocused && typeof lastFocused.focus === 'function') {
          lastFocused.focus();
        } else {
          toggle.focus();
        }
      };

      toggle.addEventListener('click', function () {
        setOpen(!featuredEvent.classList.contains('is-open'));
      });
      close.addEventListener('click', function () {
        setOpen(false);
      });
      drawer.addEventListener('click', function (e) {
        if (e.target === drawer) {
          setOpen(false);
        }
      });
      panel.addEventListener('click', function (e) {
        e.stopPropagation();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && featuredEvent.classList.contains('is-open')) {
          setOpen(false);
        }
      });
    }
  }
  
})();

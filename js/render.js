/* Renders events and blog posts from js/data.js into the pages.
   You should never need to edit this file — edit js/data.js instead. */
(function () {
  const d = window.SITE_DATA || {};

  /* Escape text before putting it in HTML, so titles/descriptions
     containing & < > " (e.g. "Crypto & C2") render correctly and
     can never break the page. */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function pillHtml(item) {
    return '<span class="pill ' + esc(item.tone) + '">[' + esc(item.tag) + ']</span>';
  }

  /* optional rich hover card for an event (e.preview) */
  function previewHtml(p) {
    if (!p) return '';
    const img = p.img
      ? '<img class="ev-img" src="' + esc(p.img) + '" alt="" onerror="this.remove()">'
      : '';
    return (
      '<div class="preview"><div class="ev-card">' +
        '<div class="ev-media">' + img +
          '<div class="ev-overlay">' +
            (p.pill ? '<span class="ev-pill mono">[' + esc(p.pill) + ']</span>' : '') +
            (p.cap ? '<div class="ev-cap mono">' + esc(p.cap) + '</div>' : '') +
          '</div>' +
        '</div>' +
        '<div class="ev-body">' +
          '<h4 class="ev-title">' + esc(p.title || '') + '</h4>' +
          '<p class="ev-desc">' + esc(p.desc || '') + '</p>' +
          (p.link ? '<a class="ev-more mono" href="' + esc(p.link) + '">Read more →</a>' : '') +
        '</div>' +
      '</div></div>'
    );
  }

  function eventRow(e) {
    return (
      '<div class="event' + (e.preview ? ' has-preview' : '') + '">' +
        '<span class="date">' + esc(e.when) + '<br>' + esc(e.where) + '</span>' +
        '<div class="event-main"><h3>' + esc(e.title) + '</h3><p>' + esc(e.desc) + '</p>' +
          previewHtml(e.preview) +
        '</div>' +
        pillHtml(e) +
      '</div>'
    );
  }

  /* a secondary blog post, rendered as a card in the grid below the featured */
  function postRow(p) {
    return (
      '<a class="post-card" href="' + esc(p.link || '#') + '">' +
        '<p class="meta">[' + esc(p.tag) + '] · ' + esc(p.date) + '</p>' +
        '<h3>' + esc(p.title) + '</h3>' +
        '<p>' + esc(p.desc) + '</p>' +
        '<span class="read">read more →</span>' +
      '</a>'
    );
  }

  /* a "learn with" platform card on the resources page */
  function learnRow(l) {
    return (
      '<a class="learn-card" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
        '<span class="lc-top">' +
          '<span class="lc-name">' + esc(l.name) + ' ↗</span>' +
          (l.level ? '<span class="lc-level">' + esc(l.level) + '</span>' : '') +
        '</span>' +
        '<p class="lc-note">' + esc(l.note || '') + '</p>' +
      '</a>'
    );
  }

  /* an external "further reading" link on the blog page */
  function readRow(r) {
    return (
      '<a class="read-link" href="' + esc(r.url) + '" target="_blank" rel="noopener">' +
        '<span class="rl-name">' + esc(r.name) + ' ↗</span>' +
        (r.note ? '<span class="rl-note">' + esc(r.note) + '</span>' : '') +
      '</a>'
    );
  }

  /* a committee member card */
  function memberRow(m) {
    const accent = (m.accent === 'cool') ? 'cool' : 'warm';
    const img = m.photo
      ? '<img src="' + esc(m.photo) + '" alt="' + esc(m.name || '') + '" onerror="this.remove()">'
      : '';
    const name = m.name
      ? '<h3>' + esc(m.name) + '</h3>'
      : '<h3 class="placeholder">Your name here</h3>';
    const bio = m.bio ? '<p class="bio">' + esc(m.bio) + '</p>' : '';
    const duties = (m.duties && m.duties.length)
      ? '<ul class="duties">' +
          m.duties.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') +
        '</ul>'
      : '';
    return (
      '<div class="member ' + accent + '">' +
        '<div class="avatar">' + esc(m.initials || '') + img + '</div>' +
        name +
        '<p class="role">' + esc(m.role || '') + '</p>' +
        bio +
        duties +
      '</div>'
    );
  }

  /* the big featured blog card (first post) */
  function featuredHtml(p) {
    return (
      '<a class="featured" href="' + esc(p.link || '#') + '">' +
        '<p class="meta">[' + esc(p.tag) + '] · ' + esc(p.date) + '</p>' +
        '<h3>' + esc(p.title) + '</h3>' +
        '<p>' + esc(p.desc) + '</p>' +
        '<span class="read">read more →</span>' +
      '</a>'
    );
  }

  /* Fill #id with items run through build(). No-op when the container
     isn't on this page or there's nothing to show. */
  function renderList(id, items, build) {
    const el = document.getElementById(id);
    if (el && items && items.length) el.innerHTML = items.map(build).join('');
  }

  renderList('home-events', (d.events || []).slice(0, 3), eventRow);  /* homepage: next 3 */
  renderList('all-events', d.events, eventRow);                      /* events page: all */
  renderList('reads-list', d.reads, readRow);                        /* blog: further reading */
  renderList('learn-list', d.learn, learnRow);                       /* resources: learn with */
  renderList('committee-list', d.committee, memberRow);              /* committee page */

  /* blog page: featured first post + grid of the rest */
  const blog = document.getElementById('blog-list');
  if (blog && d.posts && d.posts.length) {
    blog.innerHTML =
      featuredHtml(d.posts[0]) +
      '<div class="post-grid">' + d.posts.slice(1).map(postRow).join('') + '</div>';
  }
})();

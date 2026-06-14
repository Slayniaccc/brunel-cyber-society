/* Renders events and blog posts from js/data.js into the pages.
   You should never need to edit this file — edit js/data.js instead. */
(function () {
  const d = window.SITE_DATA || {};

  function pillHtml(item) {
    return '<span class="pill ' + (item.tone || '') + '">[' + item.tag + ']</span>';
  }

  function eventRow(e) {
    return (
      '<div class="event">' +
        '<span class="date">' + e.when + '<br>' + e.where + '</span>' +
        '<div><h3>' + e.title + '</h3><p>' + e.desc + '</p></div>' +
        pillHtml(e) +
      '</div>'
    );
  }

  function postRow(p) {
    return (
      '<div class="event">' +
        '<span class="date">' + p.date + '</span>' +
        '<div><h3>' + p.title + '</h3><p>' + p.desc + '</p></div>' +
        pillHtml(p) +
      '</div>'
    );
  }

  /* homepage: next 3 events */
  const home = document.getElementById('home-events');
  if (home && d.events) {
    home.innerHTML = d.events.slice(0, 3).map(eventRow).join('');
  }

  /* events page: everything */
  const all = document.getElementById('all-events');
  if (all && d.events) {
    all.innerHTML = d.events.map(eventRow).join('');
  }

  /* blog page: first post featured, rest listed */
  const blog = document.getElementById('blog-list');
  if (blog && d.posts && d.posts.length) {
    const first = d.posts[0];
    const rest = d.posts.slice(1);
    blog.innerHTML =
      '<a class="featured" href="' + (first.link || '#') + '">' +
        '<p class="meta">[' + first.tag + '] · ' + first.date + '</p>' +
        '<h3>' + first.title + '</h3>' +
        '<p>' + first.desc + '</p>' +
        '<span class="read">read more →</span>' +
      '</a>' +
      rest.map(postRow).join('');
  }
})();

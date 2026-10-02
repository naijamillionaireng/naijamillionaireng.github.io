/* This game moved to the Naija Arcade. Sends players there with their saved progress. */
(function(){
  var TARGET = 'https://naija-arcade.pages.dev/games/millionaire/', PREFIX = 'nm_';
  var d = {}, n = 0;
  try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && k.indexOf(PREFIX) === 0) { d[k] = localStorage.getItem(k); n++; } } } catch (e) {}
  var path = location.pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
  var url = TARGET + (path === '/' ? '' : path.replace(/^\//, '')) + location.search;
  if (n) url += '#progress=' + btoa(unescape(encodeURIComponent(JSON.stringify(d)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  else url += location.hash;
  location.replace(url);
})();

// script.js
function loadCSS(url, media = 'all') {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  link.media = media;
  document.head.appendChild(link);
}

loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
loadCSS("styles.css", "media");

function loadDeferredCSS(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

loadDeferredCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

/*
window.addEventListener('load', function() {
    loadDeferredCSS('styles.css');
});
*/

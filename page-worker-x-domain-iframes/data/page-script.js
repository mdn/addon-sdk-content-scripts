// page-script.js
var iframe = window.document.getElementById("wikipedia");
var todaysFeaturedArticle = iframe.contentWindow.document.getElementById(
  "mp-tfa");
self.postMessage(todaysFeaturedArticle.textContent);

// content-script.js

window.addEventListener("message", function(event) {
  console.log(event.data);    // Message from page script
  console.log(event.origin);
}, false);

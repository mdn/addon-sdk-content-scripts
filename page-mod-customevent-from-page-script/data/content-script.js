window.addEventListener("addon-message", function(event) {
  console.log(JSON.stringify(event.detail));
}, false);
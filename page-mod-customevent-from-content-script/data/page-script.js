window.addEventListener("addon-message", function(event) {
  console.log(event.detail.greeting);
}, false);
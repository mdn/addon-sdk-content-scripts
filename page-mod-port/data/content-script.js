// content-script.js

window.addEventListener("click", function(event) {
  self.port.emit("click", event.target.toString());
  event.stopPropagation();
  event.preventDefault();
}, false);

self.port.on("warning", function(message) {
  window.alert(message);
});

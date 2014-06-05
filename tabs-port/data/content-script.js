// content-script.js

self.port.on("request", function(message) {
  window.alert(message);
  self.port.emit("response", "Response from the content script");
});
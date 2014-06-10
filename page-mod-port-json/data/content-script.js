//content-script.js

self.port.emit("loaded", [
  document.location.toString(),
  document.title
]);

// content-script.js

self.port.on("my-addon-message", handleMessage);

function handleMessage(message) {
  alert(message);
  self.port.emit("my-script-response", "Response from content script");
}
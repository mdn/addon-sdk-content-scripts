// content-script.js

function handleMessage(message) {
  window.alert(message);
  self.port.emit("my-script-response", "Response from content script");
}

self.port.on("my-addon-message", handleMessage);

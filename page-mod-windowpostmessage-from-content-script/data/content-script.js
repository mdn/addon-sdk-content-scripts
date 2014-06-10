
// content-script.js

// Before Firefox 31, this line has to be:
// document.defaultView.postMessage("Message from content script",
// window.location.origin);

window.postMessage("Message from content script", window.location.origin);

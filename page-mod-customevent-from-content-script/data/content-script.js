var messenger = document.getElementById("message");
messenger.addEventListener("click", sendCustomEvent, false);

function sendCustomEvent() {
  var greeting = {"greeting" : "hello world"};
  var cloned = cloneInto(greeting, document.defaultView);
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent("addon-message", true, true, cloned);
  document.documentElement.dispatchEvent(event);
}
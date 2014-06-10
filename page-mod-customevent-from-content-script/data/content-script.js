var messenger = document.getElementById("message");

function sendCustomEvent() {
  var greeting = {"greeting" : "hello world"};
  var cloned = cloneInto(greeting, document.defaultView);
  var event = document.createEvent("CustomEvent");
  event.initCustomEvent("addon-message", true, true, cloned);
  document.documentElement.dispatchEvent(event);
}

messenger.addEventListener("click", sendCustomEvent, false);

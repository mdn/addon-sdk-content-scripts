// main.js

var tabs = require("sdk/tabs");
var self = require("sdk/self");

tabs.on("ready", function(tab) {
  worker = tab.attach({
    contentScriptFile: self.data.url("content-script.js")
  });
  worker.port.emit("request", "Message from the add-on");
  worker.port.on("response", handleResponse)
});

tabs.open("http://www.mozilla.org");

function handleResponse(message) {
  console.log("received message: '" + message + "' from content script")
}

//main.js

var tabs = require("sdk/tabs");
var buttons = require("sdk/ui/button/action");
var self = require("sdk/self");

function attachScript() {
  var worker = tabs.activeTab.attach({
    contentScriptFile: self.data.url("content-script.js")
  });
  worker.port.on("my-script-response", function(response) {
    console.log(response);
  });
  worker.port.emit("my-addon-message", "Message from the add-on");
}

buttons.ActionButton({
  id: "attach-script",
  label: "Attach the script",
  icon: "./icon-16.png",
  onClick: attachScript
});

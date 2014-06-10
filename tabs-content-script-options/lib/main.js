// main.js

var tabs = require("sdk/tabs");

tabs.on("ready", function(tab) {
  tab.attach({
    contentScript: "window.alert(self.options.message);",
    contentScriptOptions: {"message" : "hello world"}
  });
});

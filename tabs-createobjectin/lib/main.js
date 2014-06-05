// main.js

var tabs = require("sdk/tabs");
var self = require("sdk/self");

tabs.open({
  url: self.data.url("page.html"),
  onReady: attachScript
});

function attachScript(tab) {
  tab.attach({
    contentScriptFile: self.data.url("content-script.js")
  });
}
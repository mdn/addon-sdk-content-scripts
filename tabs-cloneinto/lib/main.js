// main.js

var tabs = require("sdk/tabs");
var self = require("sdk/self");

function attachScript(tab) {
  tab.attach({
    contentScriptFile: self.data.url("content-script.js")
  });
}

tabs.open({
  url: self.data.url("page.html"),
  onReady: attachScript
});

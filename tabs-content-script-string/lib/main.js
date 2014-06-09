// main.js

var tabs = require("sdk/tabs");
var contentScriptString =
  'document.body.innerHTML = "<h1>this page has been eaten</h1>";';

tabs.activeTab.attach({
  contentScript: contentScriptString
});

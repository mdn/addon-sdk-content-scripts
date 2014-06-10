// main.js

var pageWorker = require("sdk/page-worker").Page({
  contentScriptFile: require("sdk/self").data.url("content-script.js"),
  contentURL: "http://en.wikipedia.org/wiki/Chalk"
});

require("sdk/ui/button/action").ActionButton({
  id: "get-first-para",
  label: "get-first-para",
  icon: "./icon-16.png",
  onClick: function() {
    console.log("sending 'get-first-para'");
    pageWorker.port.emit("get-first-para");
  }
});

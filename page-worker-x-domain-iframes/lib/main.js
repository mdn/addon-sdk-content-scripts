//main.js

var data = require("sdk/self").data;

var pageWorker = require("sdk/page-worker").Page({
  contentURL: data.url("page.html"),
  contentScriptFile: data.url("page-script.js")
});

pageWorker.on("message", function(message) {
  console.log(message);
});
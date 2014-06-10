// main.js

var pageWorkers = require("sdk/page-worker");
var self = require("sdk/self");

var pageWorker = require("sdk/page-worker").Page({
  contentScriptFile: self.data.url("content-script.js"),
  contentURL: "http://en.wikipedia.org/wiki/Internet"
});

pageWorker.port.on("first-para", function(firstPara) {
  console.log(firstPara);
});

pageWorker.port.emit("get-first-para");

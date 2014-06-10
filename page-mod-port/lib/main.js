// main.js

var pageMods = require("sdk/page-mod");
var self = require("sdk/self");

function startListening(worker) {
  worker.port.on("click", function(html) {
    worker.port.emit("warning", "Do not click this again");
  });
}

var pageMod = pageMods.PageMod({
  include: ["*"],
  contentScriptFile: self.data.url("content-script.js"),
  onAttach: startListening
});

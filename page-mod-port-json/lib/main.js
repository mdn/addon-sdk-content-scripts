// main.js

var pageMods = require("sdk/page-mod");
var self = require("sdk/self");

function setupListener(worker) {
  worker.port.on("loaded", function(pageInfo) {
    console.log(pageInfo[0]);
    console.log(pageInfo[1]);
  });
}

var pageMod = pageMods.PageMod({
  include: ["*"],
  contentScriptFile: self.data.url("content-script.js"),
  onAttach: setupListener
});

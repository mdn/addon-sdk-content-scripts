// main.js

var tabs = require("sdk/tabs");
var mod = require("sdk/page-mod");
var self = require("sdk/self");

var pageUrl = self.data.url("page.html");

var pageMod = mod.PageMod({
  include: pageUrl,
  contentScriptFile: self.data.url("content-script.js"),
  contentScriptWhen: "ready"
});

tabs.open(pageUrl);

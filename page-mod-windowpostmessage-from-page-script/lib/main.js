var self = require("sdk/self");
var pageMod = require("sdk/page-mod");
var tabs = require("sdk/tabs");

pageMod.PageMod({
  include: self.data.url("page.html"),
  contentScriptFile: self.data.url("content-script.js")
});

tabs.open(self.data.url("page.html"));
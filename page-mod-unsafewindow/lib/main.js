// main.js

var tabs = require("sdk/tabs");
var mod = require("sdk/page-mod");
var self = require("sdk/self");

var pageUrl = self.data.url("page.html");

var pageMod = mod.PageMod({
  include: pageUrl,
  contentScript: "console.log(unsafeWindow.foo);"
});

tabs.open(pageUrl);

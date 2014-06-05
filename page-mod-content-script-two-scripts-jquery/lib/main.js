// main.js

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

var contentScriptString = '$("body").html("<h1>Page matches ruleset</h1>");';

pageMod.PageMod({
  include: "*.mozilla.org",
  contentScript: contentScriptString,
  contentScriptFile: data.url("jquery.js")
});
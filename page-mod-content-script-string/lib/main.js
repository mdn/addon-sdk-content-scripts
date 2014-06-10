// main.js

var pageMod = require("sdk/page-mod");
var contentScriptValue = "document.body.innerHTML = " +
                         ' "<h1>Page matches ruleset</h1>";';

pageMod.PageMod({
  include: "*.mozilla.org",
  contentScript: contentScriptValue
});

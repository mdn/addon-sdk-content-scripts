// main.js

var tabs = require("sdk/tabs");

tabs.on("ready", function(tab) {
  tab.attach({
    contentScript: [
      'document.body.style.border = "5px solid red";',
      'window.alert("hi");'
    ]
  });
});

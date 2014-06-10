// main.js
var data = require("sdk/self").data;

var forecastPanel = require("sdk/panel").Panel({
  height: 50,
  contentURL: data.url("panel.html"),
  contentScriptFile: data.url("panel-script.js")
});

forecastPanel.on("show", function() {
  forecastPanel.port.emit("show");
});

require("sdk/ui/button/action").ActionButton({
  id: "get-forecast",
  label: "Get the forecast",
  icon: "./icon-16.png",
  onClick: function() {
    forecastPanel.show();
  }
});

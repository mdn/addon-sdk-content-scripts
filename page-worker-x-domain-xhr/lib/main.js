// main.js
var data = require("sdk/self").data;

var forecast_panel = require("sdk/panel").Panel({
  height: 50,
  contentURL: data.url("panel.html"),
  contentScriptFile: data.url("panel-script.js")
});

forecast_panel.on("show", function(){
  forecast_panel.port.emit("show");
});

require("sdk/ui/button/action").ActionButton({
  id: "get-forecast",
  label: "Get the forecast",
  icon: "./icon-16.png",
  onClick: function() {
    forecast_panel.show();
  }
});
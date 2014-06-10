// panel-script.js

var url = "http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/" +
  "regionalforecast/json/500?key=YOUR-API-KEY";

function getSummary(forecast) {
  return forecast.RegionalFcst.FcstPeriods.Period[0].Paragraph[0].$;
}

self.port.on("show", function() {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onload = function() {
    var jsonResponse = JSON.parse(request.responseText);
    var summary = getSummary(jsonResponse);
    var element = document.getElementById("forecast_summary");
    element.textContent = summary;
  };
  request.send();
});

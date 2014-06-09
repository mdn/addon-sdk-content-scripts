// content-script.js

function getFirstPara() {
  var paras = document.getElementsByTagName("p");
  if (paras.length > 0) {
    var firstPara = paras[0].textContent;
    self.port.emit("first-para", firstPara);
  }
}

self.port.on("get-first-para", getFirstPara);

// content-script.js

function getFirstParagraph() {
  var paras = document.getElementsByTagName("p");
  console.log(paras[0].textContent);
  self.port.removeListener("get-first-para", getFirstParagraph);
}

self.port.on("get-first-para", getFirstParagraph);

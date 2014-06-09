// content-script.js

function getFirstParagraph() {
  var paras = document.getElementsByTagName("p");
  console.log(paras[0].textContent);
}

self.port.once("get-first-para", getFirstParagraph);

// content-script.js

var salutation = "hello, ";
function greetme(user) {
  return salutation + user;
}

exportFunction(greetme, unsafeWindow, {defineAs: "greetme"});

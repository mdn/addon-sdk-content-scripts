// content-script.js

var salutation = "hello, ";
function greetme(user) {
  return salutation + user;
}

var foo = createObjectIn(unsafeWindow, {defineAs: "foo"});
exportFunction(greetme, foo, {defineAs: "greetme"});

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./04-names");
console.log(names);
const sayHi = require("./05-utils");
console.log(sayHi);
sayHi("Thomas");
const data = require("./06-alternative-flavor");
console.log(data);
require("./07-mind-grenade");
/* 
require("./07-mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

const john = "john";
const peter = "peter";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("susan");
sayHi(john);
sayHi(peter); */

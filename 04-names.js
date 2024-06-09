// should be local:
const secret = "SUPER SECRET";
// these should be shared:
const john = "john";
const peter = "peter";

console.log(module);

module.exports = { john, peter };

console.log(module);

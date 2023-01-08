const names = require("./name");
const sayHi = require("./utils");
const data = require("./alternative-flavor");
require("./mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
console.log(data);

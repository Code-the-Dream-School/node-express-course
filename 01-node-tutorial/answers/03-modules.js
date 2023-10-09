const names = require("./04-names.js");
const greetings = require("./05-utils.js");
const about = require("./06-alternative-flavor.js")
require("./07-mind-grenade.js")

console.log(names.Monica, names.Rachel, names.Phoebe, names.Chandler, names.Ross, names.Joey)
greetings(names.Monica, names.Rachel, names.Phoebe, names.Chandler, names.Ross, names.Joey)
console.log(about)

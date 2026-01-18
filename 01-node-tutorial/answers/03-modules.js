const names = require("./04-names.js");
const fullname = require("./05-utils.js")
const alt = require("./06-alternative-flavor.js")
const activate = require("./07-mind-grenade.js")

fullname(names.carl, names.carl_lastname)
console.log(`Hello my name is ${alt.singlePerson.name} my favorite foods are ${alt.favoriteFood[0]} and ${alt.favoriteFood[1]}!`)
// 3) modules.js
// load files: names.js, utils.js, alternative-flavor.js, mind-grenade.js

const names = require('./names.js') 
const person = require('./utils.js') 
const flavor = require('./alternative-flavor.js') 
require("./mind-grenade.js")
console.log(flavor)

person(names.milly);
person(names.bunny);
person(names.scarecrow);

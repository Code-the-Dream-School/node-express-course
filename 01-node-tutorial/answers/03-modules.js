// 04-names.js
const names = require("./04-names.js");
console.log('----------------------------------------------');
console.log('04-names');
console.log(names);
console.log(`My name is ${names.firstName} ${names.lastName}.`)
console.log('----------------------------------------------');

//05-utils.js
console.log('05-utils');
const welcome = require("./05-utils.js");
welcome('Sufi');
welcome(names.firstName)
welcome(names.lastName)
console.log('----------------------------------------------');


// 06-alternative-flavor.js
console.log('06-Atlernative-flavor');
const data = require('./06-atlernative-flavor.js')
console.log(data);
console.log('----------------------------------------------');

// 07-mind-grenade.js
console.log('07-mind-grenade.js');
require('./07-mind-grenade.js')
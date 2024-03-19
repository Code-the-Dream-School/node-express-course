// 04-names.js
const names = require("./4-names.js");
console.log('----------------------------------------------');
console.log('4-names');
console.log(names);
console.log(`My name is ${names.firstName} ${names.lastName}.`)
console.log('----------------------------------------------');

//05-utils.js
console.log('5-utils');
const welcome = require("./5-utils.js");
welcome('Sufi');
welcome(names.firstName)
welcome(names.lastName)
console.log('----------------------------------------------');


// 06-alternative-flavor.js
console.log('6-Atlernative-flavor');
const data = require('./6-atlernative-flavor.js')
console.log(data);
console.log('----------------------------------------------');

// 07-mind-grenade.js
console.log('7-mind-grenade.js');
require('./7-mind-grenade.js')
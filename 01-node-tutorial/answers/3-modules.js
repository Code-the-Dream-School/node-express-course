//* Modules 
// Modules - Encapsulated Code (only share minimum)
// CommonJS, every fules is module (by default)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

sayHi('Mells')
sayHi(names.luis);
sayHi(names.owner);
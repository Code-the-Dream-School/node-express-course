const names = require('./04-names.js');
const greet = require('./05-utils.js');
const moreNamesData = require('./06-alternative-flavor.js');
require('./07-mind-grenade.js');

console.log();
console.log(names);
console.log(moreNamesData);
console.log();
greet(names.jane);
greet(names.john);
console.log();
moreNamesData.smithFamilyNames.forEach(name => greet(name));
console.log();
greet(moreNamesData.person.name);

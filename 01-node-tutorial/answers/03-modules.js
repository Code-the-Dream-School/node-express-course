// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')     // imports exported names
const sayWISH = require('./05-utils')   // imports sayWISH function
const data = require('./06-alternative-flavor') //imports toys & singlePet
require('./07-mind-grenade')            // runs the module first- immediately (1st)

// call functions from 05-utils.js
sayWISH('Punam')            // prints: Best of luck Punam -runs 2nd // // call the function and give it the value 'Punam'
sayWISH(names.firstName)    // prints: Best of luck Poonam -runs 3rd 
sayWISH(names.lastName)     // prints: Best of luck Shrestha
sayWISH(names.nick)         // prints: Best of luck PS

// print exported data from 06-alternative-flavor.js
console.log("Toys:", data.toys);                // prints array i.e: ['toy1', 'toy2']
console.log("Single Pet:", data.singlePet);    // prints object i.e: { name: 'sonic' }
console.log("Pet's name:", data.singlePet.name); // prints property i.e: 'sonic'
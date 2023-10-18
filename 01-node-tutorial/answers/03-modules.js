/*
For the next part, you will write multiple programs. 
04-names.js, 05-utils.js, 06-alternative-flavor.js, and 07-mind-grenade.js 
are modules that you load, using require statements, from the 03-modules.js file, which is the main program. 
Remember that you must give the path name in your require statement, for example:
const names = require("./04-names.js");
*/


/*
(3a). 04-names.js should export multiple values in an object that you will require in 03-module.js.
*/
const names = require("./04-names");
sayHello(names.maleName);

/*
(3b). 05-utils.js should export a single value, which is a function you will call in 03-modules.js.
*/
const exportFunction = require("./05-utils");
console.log(`Module 05: ${exportFunction}`);
/*
(3c). 06-alternative-flavor.js should export multiple values in the module.exports object, 
but it should use the alternative approach, adding each value one at a time. 
The exported values from each should be used in 03-modules.js, logging results to the console so that you know it is working.
*/
const {value1, value2} = require("./06-alternative-flavor");
console.log('Module 06:')
console.log(value1);
console.log(value2);

/*
(3d). 07-mind-grenade.js may not export anything, but it should contain a function that logs something to the console. 
You should then call that function within the code of 07-mind-grenade.js. This is to demonstrate that when a module is loaded with a require statement, 
anything in the mainline code of the loaded module runs.
NOTE: The only program you should need to actually invoke to test that everything is working is 03-modules.js, because it loads all the others (files 4-7).
*/
console.log('Module 07:')
require('./07-mind-grenade');

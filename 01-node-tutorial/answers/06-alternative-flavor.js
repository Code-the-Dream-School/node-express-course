/*
(3c). 06-alternative-flavor.js should export multiple values in the module.exports object, 
but it should use the alternative approach, adding each value one at a time. 
The exported values from each should be used in 03-modules.js, logging results to the console so that you know it is working.
*/

const value1 = 'first value';
const value2 = 'second value';

module.exports.value1 = value1;
module.exports.value2 = value2;
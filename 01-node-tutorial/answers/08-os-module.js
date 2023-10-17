/*
08-os-module.js: This should load the built-in os Node module and display some interesting information from the resulting object. 
As for all modules, you load a reference to it with a require statement, in this case
const os = require("os");
You can look here for documentation on the stuff in the built-in os module.
*/
const os = require("os");
console.log(os.arch()); 
console.log(os.cpus());
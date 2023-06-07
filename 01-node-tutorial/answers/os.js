// 4) OS.js 
const os = require('os');

// displays basic information about the machine 
console.log("Your name of the operating system:", os.hostname());
console.log("Your system version:", os.version());
console.log("Your type of operating system:", os.arch());

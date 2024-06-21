const os = require('os');

const user = os.userInfo();
console.log('Information about the currently effective user:\n', user);

const machine = os.machine();
console.log('Machine type:', machine);

const freeMemory = os.freemem();
console.log('Amount of free system memory in bytes:', freeMemory);

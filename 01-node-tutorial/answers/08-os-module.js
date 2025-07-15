const os = require('os');

console.log("User Info:", os.userInfo());
console.log("System Uptime:", os.uptime(), "seconds");

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log("Current OS Info:", currentOS);

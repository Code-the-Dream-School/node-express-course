const os = require("os");

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
console.log(os.machine());
console.log(os.userInfo());

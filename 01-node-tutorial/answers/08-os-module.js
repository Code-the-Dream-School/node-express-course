const os = require("os");
const currentUser = os.userInfo();
const type = os.type();
const machine = os.machine();

console.log(currentUser);
console.log(`Current Machine: ${type} ${machine}`);
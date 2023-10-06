const os = require("os");

console.log(`The total amount of system memory in bytes is ${os.totalmem()}.`);

console.log(`The amount of free system memory in bytes ${os.freemem()}.`);

const uptimeInSeconds = os.uptime();
const uptimeInHours = (uptimeInSeconds / 3600).toFixed(0);
console.log(`System uptime: ${uptimeInHours} hours.`);
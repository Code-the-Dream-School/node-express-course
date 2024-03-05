const os = require("os");
console.log('----------------------------------------');
//info about current  user
const user = os.userInfo()
console.log(user);
console.log('----------------------------------------');

// method returns the system uptime in seconds
console.log(`The System Uptome is  ${os.uptime()} seconds.`);
console.log('----------------------------------------');


const currentOS = {
    names: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    hostName: os.hostname(),
    machineName: os.machine(),
    platformName: os.platform(),
    version: os.version(),
}
console.log(currentOS);
console.log('----------------------------------------');

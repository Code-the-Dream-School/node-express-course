const os = require("os");
// information about current user (ME)
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds 
console.log(`The system Uptime for my computer is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
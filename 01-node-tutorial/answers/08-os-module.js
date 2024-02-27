const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method return system uptime in seconds
console.log(`The system uptime is ${os.uptime()} second `)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    homeDir : os.homedir(),
    hostName : os.hostname(),
    Machine : os.machine(),
    platForm : os.platform(),
    Type : os.type(),
}

console.log(currentOS)
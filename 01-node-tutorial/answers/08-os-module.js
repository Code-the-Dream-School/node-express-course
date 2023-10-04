const os = require('os')
const user = os.userInfo()
console.log(user)

console.log(`The system uptime is ${os.uptime()/60/60/24} days.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)
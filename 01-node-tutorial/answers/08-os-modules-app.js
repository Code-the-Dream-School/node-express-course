const os = require('os')
const user = os.userInfo()
console.log(user)
// method returns the system uptime in second
console.log(`This system uptime is ${os.uptime} second`)

const currentOS = {
    data: os.require,
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)

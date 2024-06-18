//OS - is a built in module with many methods and properties with 
// operating system and server 

//no ./ when that is not there its built in module 
const os = require('os')

// info about current user os. gives a ton of options 
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds and call it 
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  hostName: os.hostname(),
  loadAve: os.loadavg(),
}
console.log(currentOS)

console.log(`Your free memory is: ${os.freemem()}`)

// added some more os features like hostName and loadAve
// path: node 01-node-tutorial/answers/08-os-module.js

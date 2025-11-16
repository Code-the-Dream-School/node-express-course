const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {         // create a box called "currentOS"
  name: os.type(),          // inside the box, store the OS type
  release: os.release(),    // store the OS version
  totalMem: os.totalmem(),  // store the total memory (RAM)
  freeMem: os.freemem(),    // store the free memory (RAM)
}
console.log(currentOS)      // open the box and show everything inside







//In Node.js, os is a built-in module (a toolbox) that has functions to tell us things about our computer ex:memory,CPU,system type,uptime and user info
//os.userInfo() asks "who is currently logged in..it returns info about the user account that is running Node"

//In short:
//os = the operating system toolbox
//os.userInfo() = info about the currently logged-in account

//console.log(`The System Uptime is ${os.uptime()} seconds`)
//os.uptime() → asks: “How long has the computer been running?” --> ans like: The System Uptime is 12345 seconds  like:“Hey, how many seconds have you been awake today?”
//os.type() → tells you the type of your computer system (Windows, Linux, Mac)..like: “What type of computer system am I?”
//os.release() → tells you the version of your system...like:Which version of the operating system am I running?” eg:Windows: '10.0.22621'
//os.totalmem() → total memory (RAM) your computer has...like:Think: “How big is my computer’s backpack?”
//os.freemem() → memory(RAM) that is still free to use...Think: “How much empty space is left in my backpack?”
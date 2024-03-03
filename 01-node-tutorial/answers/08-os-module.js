const os = require('os')

const user = os.userInfo()

console.log(user)

const systemUpTime = os.uptime()

console.log(`System upTime is: ${systemUpTime}`)

const currentOS = {
	osType: os.type(),
	release: os.release(),
	freeMemory: os.freemem() / 1028,
	totalMemory: os.totalmem(),
}

console.log(currentOS)

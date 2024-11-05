const os = require('os')

const host = os.hostname()

const info = {
  platform : os.platform(),
  uptime : os.uptime(),
  version : os.version(),
  machine : os.machine()

}

console.log(host)
console.log(info)





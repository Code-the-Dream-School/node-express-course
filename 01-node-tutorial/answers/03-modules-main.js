
//modules - Encapsulated code (only share minimum)

//main app

const names = require('./04-names-app')
const sayHi = require('./05-utils-app')
const listData = require('./06-alt-flavor-app')
console.log(listData)

require('./07-mind-grenade-app')
require('./08-os-modules-app')
require('./09-path-modules-app')
require('./10-fs-sync-app')
require('./11-fs-async-app')
require('./12-http-app')

sayHi('susan')
sayHi(names.dave)
sayHi(names.mark)



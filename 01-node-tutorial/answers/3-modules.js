const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') //when you import a module, all it's functions are invoked. 

sayHi('Shy')
sayHi(names.john)
sayHi(names.peter)
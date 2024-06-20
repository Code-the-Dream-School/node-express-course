//04-names.js 1
// add the require funtion to access the file with the data you want to access
const names = require('./04-names') //const caroline, kara = require('./04-names')- destructure it*
//console.log(names)

const sayHello = require('./05-utils')
//sayHello('Anna')
//sayHello(names.caroline)//or use property name
//sayHello(names.kara)//use property name

const data = require('./06-alternative-flavor')
console.log(data) 

require('./07-mind-grenade') 
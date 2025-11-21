const names = require('./04-names')
 console.log(names)
 const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}
sayHi(names.john)
sayHi('peter')
// export default
module.exports = sayHi

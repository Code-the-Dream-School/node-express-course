// first part
const names = require('./names')
console.log(names.first_name)
console.log(names.last_name)
// second part
const greet = require('./utils')
greet(names.first_name, names.last_name)
// thirh part
const other_info = require('./alternatives-flavor')
console.log('Hello guys:')
console.log(other_info.children[0])
console.log(other_info.children[1])
// fourth part



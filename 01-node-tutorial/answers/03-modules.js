// Where everything is invoked to make sure things are working! 
//code will be split into modules 
//node uses common JS, but generally the same 

const names = require('./04-names'); //assign names as the object 
// console.log(names)
//result : an object and worked!!! 
// {
//     sarah: 'sarah',
//     dapkiewicz: 'dapkiewicz',
//     ava: 'ava',
//     michael: 'michael'
//   }
const posWords = require('./05-utils');
posWords('brian')
posWords(names.sarah)
posWords(names.dapkiewicz)

// console.log(posWords)
//result is an empty object 

const data = require('./06-alternative-flavor')
console.log(data)
//this works!! 

require('./07-mind-grenade')
//This worked!!!


//path: node 01-node-tutorial/answers/03-modules.js

//ORIGINAL 
// const names = require('./04-names')
// const sayHi = require('./05-utils')
// const data = require('./06-alternative-flavor')
// require('./07-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
//require the value from 04-names.js

const {john, peter} = require('./04-names');
const greet = require('./05-utils');
const {john, peter} = require('./06-alternative-flavor')

//use the exported values
console.log(lydia);
console.log(peter); //output

greet('Lydia');
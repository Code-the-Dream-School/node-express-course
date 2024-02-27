// const { readFileSync, writeFileSync } = require('fs')
const  { readFileSync } = require('fs')

const fileA = readFileSync('./temporary/fileA.txt', 'utf8')

console.log(fileA)

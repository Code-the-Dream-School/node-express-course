const { readFileSync, writeFileSync } = require('fs')
const first = readFileSync('./mycontent/myfirst.txt', 'utf8')

const second = readFileSync('./mycontent/mysecond.txt', 'utf8')
console.log(first, second)
writeFileSync('./mycontent/result-sync.text', `Here is the result : ${first}, ${second}`, {flag: 'a'})
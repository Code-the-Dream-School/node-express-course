const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./temporary/first.txt', 'utf8')
const second = readFileSync('./temporary/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
  './temporary/fileA.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)

console.log(readFileSync('./temporary/fileA.txt', 'utf8'))



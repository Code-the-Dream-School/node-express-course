const {readFileSync, writeFileSync} = require('fs')

writeFileSync('./temporary/fileA.txt', 'hello\nAlex\nTorres\n', {flag:'a'})

const read = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(read)

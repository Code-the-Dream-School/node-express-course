const fs = require('fs')

fs.writeFileSync('./temporary/fileA.txt','first \n second \n third',{ flag: 'a' })

const text = fs.readFileSync('./temporary/fileA.txt', { encoding: 'utf8' })

console.log(text)

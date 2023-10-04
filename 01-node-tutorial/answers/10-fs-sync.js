const {readFileSync, writeFileSync} = require('fs')

const firstFile = readFileSync('./temporary/.keep','utf-8')

const firstLine = 'Hello World!'
const secondLine = 'Good Morning!'
const thirdLine = 'Happy Coding!'

writeFileSync(
    './temporary/fileA.txt',
    `Here is the result : ${firstLine}, ${secondLine}, ${thirdLine}`,
    { flag: 'a' }
  )
const { writeFileSync, readFileSync } = require('fs')

//Creates the file (or overwrites if it exists)
writeFileSync('./temporary/fileA.txt', 'This is line 1\n')

//Append flag adds to the file
writeFileSync('./temporary/fileA.txt', 'This is line 2\n', { flag: 'a' })

//Apend flag adds to the file
writeFileSync('./temporary/fileA.txt', 'This is line 3\n', { flag: 'a' })

//Read the file
const content = readFileSync('./temporary/fileA.txt', 'utf8')

console.log(content)
const { readFileSync, writeFileSync, write, writeFile, readFile } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
writeFileSync('./answers/temporary/fileA.txt',"Testing this",{flag:'a'})
writeFileSync('./answers/temporary/fileA.txt',"Testing t23his",{flag:'a'})
writeFileSync('./answers/temporary/fileA.txt',"Testing t2123his",{flag:'a'})
const readingFIleA = readFileSync('./answers/temporary/fileA.txt','utf8')
console.log(readingFIleA)
console.log('done with this task')
console.log('starting the next one')

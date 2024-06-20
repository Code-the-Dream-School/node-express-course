const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./Content/first.txt', 'utf8')
const second = readFileSync('./Content/second.txt', 'utf8')

console.log(first, second)


// create a new file text - in this case the two txts files we had we combined them.
writeFileSync('./Content/result-sync.txt', 
`Here is the result from combining the first and second txts files: 
${first}, ${second}`, { flag: 'a'} )

console.log('done with this task')
console.log('starting the next one')
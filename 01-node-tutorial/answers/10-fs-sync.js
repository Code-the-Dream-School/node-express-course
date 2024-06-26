const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./temporary/fileA.txt', 'utf8');
const second = readFileSync('./temporary/fileB.txt', 'utf8');

writeFileSync(
  './temporary/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task');
console.log('starting the next one');

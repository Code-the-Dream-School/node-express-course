const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second},`,
    /* to append to files set this flag */
    { flag: 'a' }
);
console.log('done with this task');
console.log('Starting the next task');
const { readFileSync, writeFileSync } = require('fs');
console.log('start');

// Update the path to point to the correct location
const first = readFileSync('./01-node-tutorial/content/first.txt', 'utf8');
const second = readFileSync('./01-node-tutorial/content/second.txt', 'utf8');

writeFileSync(
  './01-node-tutorial/content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' } // Appending the result to 'result-sync.txt'
);
const filePath = './01-node-tutorial/content/fileA.txt';
writeFileSync(filePath, "This is the first line.\n");
writeFileSync(filePath, "This is the second line.\n", { flag: 'a' });
writeFileSync(filePath, "This is the third line.\n", { flag: 'a' });

const fileContents = readFileSync(filePath, 'utf-8');
console.log(fileContents);

console.log('done with this task');
console.log('starting the next one');

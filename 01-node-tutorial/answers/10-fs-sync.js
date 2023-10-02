const { readFileSync, writeFileSync } = require('fs');

const filePath = './temporary/fileA.txt';

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
const third = readFileSync('./content/third.txt', 'utf8');

// console.log(first, second);

writeFileSync(filePath, `${first}\n`);
writeFileSync(filePath, `${second}\n`, {flag: 'a'});
writeFileSync(filePath, `${third}\n`, {flag: 'a'});

const result = readFileSync(filePath, 'utf8')
console.log(result);
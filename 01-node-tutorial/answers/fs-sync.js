const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
const third = "This is the 3rd row";

writeFileSync('./temporary/fileA.txt',
    `This is the result: ${first},\r\n${second},\r\n${third}\r\n`,
    { flag: 'a' }
);
const result = readFileSync('./temporary/fileA.txt', 'utf-8');
console.log(result);

const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const filePath = join(__dirname, 'temporary', 'fileA.txt');
const line1 = 'This is my first line';
const line2 = 'This is my second line';
const line3 = 'This is my third line';

writeFileSync(filePath, `${line1}\n`);
writeFileSync(filePath, `${line2}\n`, { flag: 'a' });
writeFileSync(filePath, `${line3}`, { flag: 'a' });

const file = readFileSync(filePath, 'utf8');
console.log(file);

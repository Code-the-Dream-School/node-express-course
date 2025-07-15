const { writeFileSync, readFileSync } = require('fs');
const path = './temporary/fileA.txt';

writeFileSync(path, 'This is line 1\n');
writeFileSync(path, 'This is line 2\n', { flag: 'a' });
writeFileSync(path, 'This is line 3\n', { flag: 'a' });

const content = readFileSync(path, 'utf8');
console.log('File contents:\n', content);

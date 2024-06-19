const fs = require('fs')
const filePath = './temporary/fileA.txt';

fs.writeFileSync(filePath, "Don't worry about a thing.\n");

fs.writeFileSync(filePath, "'Cause every little thing.\n", { flag: 'a' });
fs.writeFileSync(filePath, 'Gonna be alright.\n', { flag: 'a' });

const newNote = fs.readFileSync(filePath, 'utf8');
console.log(newNote);
    
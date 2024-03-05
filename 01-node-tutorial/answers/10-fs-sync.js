const { readFileSync, writeFileSync } = require('fs')

// const fs = require('fs')
// console.log(fs.readFileSync('../content/first.txt', 'utf8'));

const firstFileBinary = readFileSync('../content/first.txt', 'binary')
const firstFileUTF = readFileSync('../content/first.txt', 'utf8')

console.log(firstFileBinary);
console.log(firstFileUTF);

const secondFile = readFileSync('../content/second.txt', 'utf8')
console.log(secondFile);


writeFileSync(
    '../content/results-sync.txt', `RRResult: ${firstFileUTF}, ${secondFile}.`,
    // { flag: 'a' }
    // upend the file with above command otherwise it will replace original file
)
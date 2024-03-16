const { readFileSync, writeFileSync } = require('fs')


// const firstFileBinary = readFileSync('../content/first.txt', 'binary')
// const firstFileUTF = readFileSync('../content/first.txt', 'utf8')
console.log('start')
// console.log(firstFileBinary);
// console.log(firstFileUTF);

// const secondFile = readFileSync('../content/second.txt', 'utf8')
// console.log(secondFile);

// Write 3 lines to fileA.txt, using "append" flag for lines after the first one
writeFileSync(
    './temporary/fileA.txt', 'First Line\n',
    { flag: 'a' }
)
writeFileSync(
    './temporary/fileA.txt', 'Second line\n', { flag: 'a' }
);
writeFileSync(
    './temporary/fileA.txt', 'Third line\n', { flag: 'a' }
);

// Read the fileA.txt and log its contents to the console
const fileContents = readFileSync('./temporary/fileA.txt', 'utf8');
console.log('File contents:', fileContents);

console.log('Done with this task');
console.log('Starting the next one');
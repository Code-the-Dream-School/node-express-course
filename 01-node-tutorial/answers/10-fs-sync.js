const { readFileSync, writeFileSync } = require('fs'); //// The Sync at the end means synchronous .Node waits for the operation to finish before moving to the next line.
const path = require('path');
const fs = require('fs');

console.log('start');

// Ensure the "temporary" folder exists
const tempFolder = path.join(__dirname, 'temporary');
if (!fs.existsSync(tempFolder)) {
  fs.mkdirSync(tempFolder);
}

// Full path to fileA.txt

const filePath = path.join(__dirname, "temporary", "fileA.txt");


// Step 1: Write 3 lines (append after the first line)
writeFileSync(filePath, 'Line 1: Hello World\n', 'utf8');
writeFileSync(filePath, 'Line 2: Learning is awesome\n', { flag: 'a' });
writeFileSync(filePath, 'Line 3: Adventures are fun\n', { flag: 'a' });

// Step 2: Read the file and log contents
const fileContents = readFileSync(filePath, 'utf8');
console.log(fileContents);

console.log('done with this task');
console.log('starting the next one');

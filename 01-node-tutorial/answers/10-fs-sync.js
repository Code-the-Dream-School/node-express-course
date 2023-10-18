/*
10-fs-sync.js: This should load writeFileSync and readFileSync functions from the fs module. 
Then you will use writeFileSync to write 3 lines to a file, ./temporary/fileA.txt, using the "append" flag for each line after the first one. 
Then use readFileSync to read the file, and log the contents to the console. Be sure you create the file in the temporary directory. 
That will ensure that it isn’t pushed to Github when you submit your answers (because that file has been added to the .gitignore file for you already which tells git not to look at those files).
*/

// const {readFileSync, writeFileSync} = require('fs');

// const fs = require('fs');
// const readMe = readFileSync('temp.txt', 'utf8');
// // console.log(readMe);

// fs.writeFileSync('fileA.txt', `${readMe}`, {flag:'a'});
// console.log('File has been written');

const fs = require('fs');

const readMe = 'Your text goes here';

try {
fs.writeFileSync('fileA.txt', `${readMe}\n${readMe}\n${readMe}`);
console.log('File has been written.');
} catch (error) {
console.error('An error occurred:', error);
}
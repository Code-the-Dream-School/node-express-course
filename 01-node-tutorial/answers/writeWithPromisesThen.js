const { writeFile, readFile } = require('fs').promises;
const { join } = require('path');

const filePath = join(__dirname, 'temporary', 'temp.txt');

const line1 = 'This is my first line';
const line2 = 'This is my second line';
const line3 = 'This is my third line';

writeFile(filePath, `${line1}\n`)
.then(() => {
    return writeFile(filePath, `${line2}\n`, { flag: 'a' });
})
.then (() => {
    return writeFile(filePath, `${line3}`, { flag: 'a' });
})
.then(() => {
    return readFile(filePath, 'utf8')
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log("An error occurred: ", err);
});

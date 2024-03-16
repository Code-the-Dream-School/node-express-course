const { writeFile, readFile } = require("fs").promises;

console.log(' Start write with Promises .then() file.js');

writeFile('temp.txt', '1. Line first\n')
    .then(() => {
        return writeFile('temp.txt', '2. Line Second\n', { flag: 'a' })
    })
    .then(() => {
        return writeFile('temp.txt', '3. Line Third\n', { flag: 'a' })
    })
    .then(() => {
        return writeFile('temp.txt', '4. Line Fourth\n', { flag: 'a' })
    })
    .then(() => {
        return readFile('temp.txt', 'utf8')
    })
    .then((data) => {
        console.log('Read the data on temp.txt file:');
        console.log(data);
    })
    .catch((err) => {
        console.log('An Error occured:', err);
    })
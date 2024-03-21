const { writeFile } = require("fs").promises;
const { readFile } = require('fs').promises;

console.log('-------------------------Week 2 assigment--------------------');
console.log('Start write with Promises Await file.js');

// Async function to write three lines to a file
const writer = async () => {
    try {
        await writeFile('temp.txt', 'This is 2st Line\n')
        console.log('------------------Write File---------------------------');
        console.log("1st Line_new")
        await writeFile('temp.txt', 'This is 2nd Line\n', { flag: 'a' })
        console.log('---------------------------------------------');
        console.log('2nd Line_new');
        await writeFile('temp.txt', 'This is 3rd Line\n', { flag: 'a' })
        console.log('---------------------------------------------');
        console.log('3rd Line_new');
    }
    catch (err) {
        console.log("Error writing file:", err);

    }
}
// writer()
const reader = async () => {
    try {
        console.log('-------------------Read File--------------------------');
        console.log('Data from temp.txt file:\n');

        // console.log(await readFile('temp.txt', 'utf8'));
        const data = await readFile('temp.txt', 'utf8')
        console.log(data);

    } catch (err) {
        console.log("Error Reading file:", err);
    }
}
// reader()
const readWrite = async () => {
    await reader()
    await writer()
}
readWrite()
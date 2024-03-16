const { writeFile, readFile } = require("fs").promises;
console.log('Start write with Promises Await file.js');

const writer = async () => {
    try {
        await writeFile('temp.txt', 'This is 2st Line\n')
        console.log("1st line")
        await writeFile('temp.txt', 'This is 2nd Line\n', { flag: 'a' })
        console.log('2nd Line');
        await writeFile('temp.txt', 'This is 3rd Line\n', { flag: 'a' })
        console.log('3rd Line');
    }
    catch (err) {
        console.log("Error");

    }
}
// writer()
const reader = async () => {
    try {
        console.log('Data from temp.txt file:\n');
        // console.log(await readFile('temp.txt', 'utf8'));
        const data = await readFile('temp.txt', 'utf8')
        console.log(data);

    } catch {
        console.log('Error');
    }
}
// reader()
const readWrite = async () => {
    await reader()
    await writer()
}
readWrite()
const { writeFile, readFile } = require("fs").promises;
const path = require("path");

const filePath = 'temp.txt';
const lines = [
    "Don't worry about a thing.\n",
    "'Cause every little thing.\n",
    'Gonna be alright.\n'
];

writeFile(filePath, lines[0])
    .then(() => {
        console.log("First line written.");
        return writeFile(filePath, lines[1], { flag: 'a' });
    })
    .then(() => {
        console.log("Second line written.");
        return writeFile(filePath, lines[2], { flag: 'a' });
    })
    .then(() => {
        console.log("Third line written.");
        return readFile(filePath, 'utf-8');
    })
    .then((data) => {
        console.log("File read successfully. Content:");
        console.log(data);
    })
    .catch((error) => {
        console.log("An error occurred: ", error);
    });

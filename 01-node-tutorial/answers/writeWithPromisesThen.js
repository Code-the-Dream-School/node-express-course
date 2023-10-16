const { writeFile, readFile } = require("fs").promises;
// Write another program called writeWithPromisesThen.js
// Write to temp.txt
//  Use the .then style of asynchronous programming
// Don’t create any functions, instead, use cascading .then statements in your mainline

writeFile("temp.txt", "First line: Hello World \n").then(
    () => {
        return writeFile("temp.txt", "Second line: Hello World \n", { flag: 'a' });
    }).then(
        () => {
            return writeFile("temp.txt", "Third line: Hello World \n", { flag: 'a' });
        }).then(
            () => {
                return readFile("temp.txt", "utf-8");
            }).then(
                (data) => {
                    console.log(data);
                }).catch(
                    (error) => {
                    console.log("Error!", error);
                });

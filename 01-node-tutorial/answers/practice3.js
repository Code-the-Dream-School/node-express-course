// const { writeFile } = require('fs')

// fs = require('fs').promises
// const fs = require("fs");
// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

// Within practice3.js, create an async function called makeFile. This function should create the 
//file ./content/practice2.txt, using asynchronous calls that return promises.
// These must all be within a try/catch block. 
//Use await to get the results of each call. 
//The first line, written without the append flag, should say “This is the first line.” and 
//should end with a newline character. 
//The next lines, each of which should end in a line end, 
//should read “This is line 2”, then “This is line 3”, and so on up to 10. 
//These should be written in a loop, with the append flag. 
//The catch statement should log the error, if any, to the console. 
//After the makeFile function declaration, add a program line that calls makeFile(). 
//Test the practice3.js program to make sure it creates the file correctly.

// async function makeFile() {
//   try {const writeResult = writeFile("./content/practice2.txt", "utf-8");
//   return writeResult;
// }
//   catch (error) {
//     console.log(error);
//   }
// }
// makeFile()
// .then(r => console.log("Result:", r))
// .catch(err => console.log("An error occurred", err));

// for ( let i = 0; i <= 10; i++){
//    console.log()
// }

// "This is line 1"
// "This is line 2"
// "This is line 3"
// "This is line 4"
// "This is line 5"
// "This is line 6"
// "This is line 7"
// "This is line 8"
// "This is line 9"
// "This is line 10"



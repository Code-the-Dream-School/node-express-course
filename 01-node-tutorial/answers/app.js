//console.log('Welcome to Node Tutorial')

 const fs = require('fs').promises
 const makeFile = async () => {
   try {
       fs.writeFile(
       './content/practice2.txt',
       'This is the first line \n',
     )
     for (let i = 2; i <= 10; i++){
      await fs.writeFile('./content/practice2.txt', `This is line ${[i]} \n`, {flag: 'a'}, (err, result) => {
        if(err) {
          console.log(err)
          return result;
        }
      })
    }
        
   } catch (error) {
     console.log(error);
   }
 };
 
 makeFile();




// const start = async () => {
//   try {
//     const first = await readFile('./content/first.txt', 'utf8')
//     const second = await readFile('./content/second.txt', 'utf8')
//     await writeFile(
//       './content/result-mind-grenade.txt',
//       `THIS IS AWESOME : ${first} ${second}`,
//       { flag: 'a' }
//     )
//     console.log(first, second)
//   } catch (error) {
//     console.log(error)
//   }
// }

// start()

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
















// const fs = require("fs");
// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);
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
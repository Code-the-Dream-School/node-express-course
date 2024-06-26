const { writeFile, readFile } = require("fs").promises;  

 writeFile('./content/temp.txt',
    `Line 1, Question 2`, 
    { flag: 'a' },) // write line 1  
 .then(() => {  
    return writeFile(
        './content/temp.txt',
    `Line 3, Question 2`, 
    { flag: 'a' },)  // write line 2.  
    // Return the promise so you can chain the .then statements  
 })  
 .then(()=>{
    return writeFile(
        './content/temp.txt',
    `Line 3, Question 2`, 
    { flag: 'a' },) 
 }) // write the third line, and follow that with two more .then blocks,  
 // one to call readFile to read it back out, and one to log the data to the screen.  
 .then(()=>{
    return readFile('./content/temp.txt', 'utf8');
 })
 .then(()=>{
    const readToConsole = readFile();
    console.log(readToConsole);
 }
 )
 .catch((error) => {  
     console.log("An error occurred: ", error)  
 })  



// Homework Example 
//  writeFile(...) // write line 1  
//  .then(() => {  
//     return writeFile(...)  // write line 2.  
//     // Return the promise so you can chain the .then statements  
//  })  
//  .then // write the third line, and follow that with two more .then blocks,  
//  // one to call readFile to read it back out, and one to log the data to the screen.  
//  ...  
//  .catch((error) => {  
//      console.log("An error occurred: ", error)  
//  })  
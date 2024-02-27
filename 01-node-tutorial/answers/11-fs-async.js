// const { readFileSync, writeFileSync } = require('fs')
const { writeFileSync }  = require('fs')

writeFileSync("./temporary/fileB.txt" , `This is line 1\n This is line 2\n This is line 3\n`, (err, result) => {
    console.log("at point 1");
    if(err) {
        console.log("This error happened: ", err);
        return
    } 
   
}, { flag :'a'});

// const { writeFile } = require("fs");
// console.log("at start");
// writeFile("./temporary/fileB.txt", `This is line 1\n This is line 2\n This is line 3\n`, (err, result) => {
//   console.log("at point 1");
//   if (err) {
//     console.log("This error happened: ", err);
//     return
//   } 
  
// }, { flag : 'a'});

// console.log("at end");
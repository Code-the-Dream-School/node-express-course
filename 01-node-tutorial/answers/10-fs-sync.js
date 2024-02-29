
const  { readFileSync, writeFileSync } = require('fs')

writeFileSync("./temporary/fileA.txt" , `This is line 1.\nThis is line 2.\nThis is line 3.\n`, (err, result) => {
    if(err) {
        console.log("This error happened: ", err);
        return
    } 
}, { flag :'a'});

const Result = readFileSync('./temporary/fileA.txt', 'utf8')

console.log(Result)

///OR
// const firstLine = "Hello World!!";
// const secondLine = "My name is Sonali.";
// const thirdLine = "I like to code.";
// writeFileSync(
//     './temporary/fileA.txt',
//     `Here is the result : ${firstLine},\n ${secondLine} ,\n ${thirdLine}`,
//     { flag: 'a' }
//   )



const { writeFile, readFile } = require("fs").promises;  

// Then create an async function called writer that takes 0 arguments
//and that writes three lines to a file named temp.txt, by calling the writeFile function with await. 
//last week’s exercise 10-fs-sync but will return a Promise instead of a result directly.
//Put the await statements inside a try/catch block!
//Now we want to call the two functions in order, first the writer, and the reader. But, be careful! These are asynchronous functions, so if you just call them, you don’t know what order they’ll occur in. And you can’t use await in your mainline code.
//write a third async function called readWrite. In that function, you call await reader and await writer.
//Finally, write a line at the bottom of the file that calls the readWrite function. 
//gitignore the temp.txt

//example 

const writer = async () => {
    try {
       result = await  writeFile(
        './content/temp.txt',
        `Writing a new file with async.`, 
        `This is all new to me.`,
        `Here it goes!`,
        { flag: 'a' },
      )
    } catch(err) {
        console.log("An error occurred writing temp.txt: ", err)
    }
}

const reader = async () => {
    try {
       result = await readFile('./content/temp.txt', 'utf8')
    } catch(err) {
        console.log("An error reading the temp.txt: ", err)
    }
}

const readWrite = () => {
    writer() // an async function, so it returns a promise
    .then((result)=>{
        console.log("result for writer in readwrite");
        return writer();
    })
    reader()
    .then((result)=>{
        console.log("result for reader in readwrite");
        return reader();
    })
    .catch((err) => {
        console.log("An error occurred in readwrite function: ", err);
      });
}

readWrite();

//Homework example I followed 
// const myFunc6 = () => {
//     myFunc() // an async function, so it returns a promise
//       .then((result) => {
//         console.log("got");
//         return myFunc(); // here we call it again, we return the promise myFunc returns
//       })
//       .then((result) => {
//         console.log("got the second result");
//       })
//       .catch((err) => {
//         console.log("An error occurred: ", err);
//       });
//   };
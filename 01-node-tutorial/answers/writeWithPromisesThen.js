const { writeFile, readFile } = require('fs').promises

console.log("Writing line 1");
writeFile("./temporary/promise2.txt","Line1","utf8")
.then(() => {
    console.log("Writing line 2");
    return writeFile("./temporary/promise2.txt","\nLine2",{flag: "a"},"utf8")
})
.then(() => {
    console.log("Writing line 3");
    return writeFile("./temporary/promise2.txt","\nLine3",{flag: "a"},"utf8")
})
.then(() => {
   return data = readFile("./temporary/promise2.txt","utf8");
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("An error occurred: ", error)
})
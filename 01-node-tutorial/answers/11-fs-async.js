 const {writeFile} = require("fs")
console.log("the start")
const writeInTempFile=()=> writeFile("./temporary/fileB.txt", "I need a 3 line of this text\n", {flag: "a"}, (err, result)=>{
    console.log("write in file function")
    if (err) {
        console.log(err)
    }
    if(result) {
        console.log(result)
    }
 })

 writeInTempFile()
 writeInTempFile()
 writeInTempFile()
 
 console.log("the end")
const {readFile,writeFile} = require("fs")
readFile("./content/first.txt",{encoding: "utf8"},(err,result)=>{
    console.log("at a")
    if (err) {
        console.log(err)

    } else { 
        console.log(result)

    }
})
console.log("at b")
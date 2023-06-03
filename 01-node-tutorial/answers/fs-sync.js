const {readFileSync, writeFileSync} = require('fs')

writeFileSync("./temporary/fileA.txt",
    "Hello world", {flag:'a'},
    "utf8"
)
const file = readFileSync("./temporary/fileA.txt","utf8")
console.log(file);

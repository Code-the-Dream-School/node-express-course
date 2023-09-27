 const {readFileSync, writeFileSync} = require("fs")

writeFileSync("./temporary/fileA.txt", "I need a 3 line of this text\n")
writeFileSync("./temporary/fileA.txt", "I need a 3 line of this text\n", {flag: "a"})
writeFileSync("./temporary/fileA.txt", "I need a 3 line of this text\n", {flag: "a"})

console.log(readFileSync("./temporary/fileA.txt", "utf-8"))

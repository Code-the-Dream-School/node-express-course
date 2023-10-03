const { writeFile, readFile } = require("fs").promises;

 writeFile("./temporary/temp.txt", "New text for lesson2 for writeWithPromisesThen\n")
 .then(() => {
    return writeFile("./temporary/temp.txt", "New text for lesson2 for writeWithPromisesThen\n", {flag: "a"}) 
 })
 .then(() => {
    return writeFile("./temporary/temp.txt", "New text for lesson2 for writeWithPromisesThen\n", {flag: "a"}) 
 })
.then(() => {
  return readFile("./temporary/temp.txt", "utf-8")
 })
 .then((result) => {
   console.log(result)
 })
 .catch((error) => {
     console.log("An error occurred: ", error)
 })


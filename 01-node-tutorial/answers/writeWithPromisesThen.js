const { writeFile, readFile } = require('fs').promises

writeFile('./temporary/examplo-output.txt', 'Line 1\n')
.then(() =>{
  return writeFile('./temporary/examplo-output.txt', 'Line 2\n', {flag: 'a'})
})
.then(() =>{
  return writeFile('./temporary/examplo-output.txt', 'Line 3\n', {flag: 'a'})
})
.then(() =>{
  return readFile('./temporary/examplo-output.txt', 'utf-8')
})
.then((value) =>{
  return console.log(value)
})
.catch((error) => {
  console.log("An error occurred: ", error)
})
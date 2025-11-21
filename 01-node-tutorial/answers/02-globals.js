// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
  process.env.MY_VAR = 'Hi there'

console.log('Dirname:',__dirname, 'FILENAME:',__filename)
setInterval(() => {
  console.log('hello world')
}, 1000)
console.log('process:', process)
console.log('process.env.MY_VAR:', process.env.MY_VAR)
exports=process.env.MY_VAR
 
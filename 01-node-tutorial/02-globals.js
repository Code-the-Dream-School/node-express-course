// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

setInterval(() => {
  console.log('hello world')
}, 1000)
console.log('__dirname:', __dirname);
console.log('process.env.MY_VAR:', process.env.MY_VAR);
console.log('__filename:', __filename);
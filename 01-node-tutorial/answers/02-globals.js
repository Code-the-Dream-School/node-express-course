// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name/ folder parent ex answers here 
// require    - function to use modules (CommonJS) - covered next
// module     - info about current module (file) - covered next 
// process    - info about env where the program is being executed or the enviornment where its executed, when you deploy your api it tells you where it is, based on where it is you can make decisions on your application, now its a gibberish object, 


// Question, export MY_VAR="Hi there!" -- prints in terminal dquote> Q
let MY_VAR= "Hi there!";
// Question, export MY_VAR="Hi there!" -- prints in terminal dquote> Q
console.log(MY_VAR);
//prints 'hi there'
console.log(`Filename: ${__filename}`);
//prints full directory  /Users/sarahdapkiewicz/Desktop/NodeExpress/CTD/CTDRepoFork/node-express-course/01-node-tutorial/answers/02-globals.js
console.log(`Dirname: ${__dirname}`)
// this prints the following, so to the above folder answers /Users/sarahdapkiewicz/Desktop/NodeExpress/CTD/CTDRepoFork/node-express-course/01-node-tutorial/answers
console.log(`Process: ${process.env.MY_VAR}`)
//Question : process is undefiend, should give the path node 


//We have access to setInterval and setTimeout 
// console.log(__dirname)
// setInterval(() => {
//   console.log('hello world')
// }, 1000)

// #2 Q- 02-globals.js: This program should use the console.log function to 
// write some globals to the screen. Set an environment variable with the 
// following command in your command line terminal: export MY_VAR="Hi there!" 
// The program should then use console.log to print out the values of 
// __dirname (a Node global variable) and process.env.MY_VAR 
// (process is also a global, and contains the environment variables 
//     you set in your terminal.) You could print out other globals as 
//     well (Node documentation on available globals). For each of these 
//     programs, you invoke them with node to make sure they work.





// export MY_VAR="Hi there!"
// console.log()
// __dirname (a Node global variable) and
// process.env.MY_VAR (process is also a global, and contains the environment variables you set in your terminal.) 
//Path node 01-node-tutorial/answers/02-globals.js
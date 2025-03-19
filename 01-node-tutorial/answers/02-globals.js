// John Smilga Example Not Used in Assignment

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// console.log(__dirname);

// setInterval(() => {
//   console.log("hello world");
// }, 3000);

// Assignment Number 2 Instructions

// Set an environment variable with the following command in your command line terminal: export MY_VAR="Hi there!" (double quotes did not work and I had to use single quotes)

// Used echo $MY_VAR to check that the variable was set

// The program should then use console.log to print out the values of __dirname (a Node global variable)

// The program should then use console.log to print out process.env.MY_VAR (process is a global variable, and contains the environment variables you set in your terminal)

console.log("Current directory:", __dirname);

console.log("MY_VAR:", process.env.MY_VAR);

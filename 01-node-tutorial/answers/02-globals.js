// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
//setx MY_VAR "Hi there!" and setx is a Windows command-line utility used to create or modify environment variables permanently for your user account or the system.(use this inside CMD or Powershell)
//cmd :set MY_VAR="Hi there!"
//set (temp) and setx (permanent) on terminal


console.log("__dirname:", __dirname);
console.log("__filename:", __filename); // full path of this file
console.log("MY_VAR:", process.env.MY_VAR);//// print environment variable MY_VAR like this →  MY_VAR: Hi there!

console.log("process.platform:", process.platform); // your OS
console.log("process.version:", process.version);   // Node version
console.log(module); //all the info about current module/file


// process →all the detail process info (below) about env where the program is being executed

//console.log(process.env);       // all environment variables
//console.log(process.version);   // Node version
//console.log(process.platform);  // OS platform
//console.log(process.pid);       // Node process ID
//console.log(process.cwd());     // current working directory

//export MY_VAR="Hi there!"  # Linux/Mac
//setx MY_VAR "Hi there!"     # Windows (PowerShell)

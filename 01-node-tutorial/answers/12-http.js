/*
12-http.js. This program should use the built-in http module to create a simple web server that listens on port 3000. 
This is done with the createServer function. You pass it a callback function that checks the request variable (req) for the current url property, 
and depending on what the URL is, sends back a message to the browser screen. 
Then have your code listen on port 3000, run this file with the node command, and test it from your browser, 
by navigating to http://localhost:3000. You can look at 12-http.js for the instructor’s answer (except that program listens on 5000). 
You will need to type in Ctrl+c (the Ctrl key plus the letter “C” at the same time; or for Mac the Cmd key plus the letter “C” at the same time) to exit your program.


*/

const http = require("node:http");

const server = http.createServer((req, res) => {
    res.end('Sending response now');
})

const port = 3000;

server.listen(port, () => {
    console.log(`Server is up and running at port ${port}`);
})
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Welcome to my Homepage!!");
  } else if (req.url === '/about') {
    res.end("Here is the short background");
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>Page not found</p>
      <a href="/">Back home</a>
    `);
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

//open browser and go to:

//http://localhost:3000/ → homepage
//http://localhost:3000/about → about page
//Any other URL → “Oops! Page not found” and showsBack home url

//Summary
//http → gives Node server capabilities.
//createServer → sets up how the server responds to requests.
//req.url → checks which URL the user requested.
//res.end() → sends the response and closes the connection.
//listen(3000) → starts the server on port 3000.



//Imports Node’s built-in HTTP module.

//This module lets you create a web server that can respond to requests from a browser or other clients.
//Creates a new HTTP server and stores it in the variable server.

//createServer takes a callback function that runs every time someone makes a request to the server.

//The callback has two parameters:
//req → the request object, contains info about what the client requested (like URL, headers).
//res → the response object, used to send data back to the client.

//Checks if the user requested the root URL /.

//res.end() sends the response "Welcome to my Homepage!!" to the browser and ends the connection.

//Checks if the user requested /about.

//Sends the response "Here is the short background" and ends the connection.

//For any other URL (not / or /about), it sends a simple 404-style HTML message.

//<h1>Oops!</h1> → big heading, <p> → paragraph, <a> → clickable link back to home.

//Closes the createServer callback function.</a>

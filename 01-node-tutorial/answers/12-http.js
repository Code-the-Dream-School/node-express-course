const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to the home page!');
  } else if (req.url === '/about') {
    res.write('Here is the about page.');
  } else {
    res.write('Oops! Page not found.');
  }
  res.end();
});

server.listen(3000);
console.log("Server running at http://localhost:3000");

const http = require("http");

// the req involves the method and other data, the res is what is sent back
const server = http.createServer((req, res) => {
  //condition that sets different "pages"
  if (req.url === "/") {
    res.end("Welcome to the home page.");
  } else if (req.url === "/about") {
    res.end("I enjoy using node.js!");
  } else
    res.end(`
<h1>Page does not exist</h1>
<a href='/'>Return to home page.</a>
`);
  //   res.write("Welcome to my home page");
  //   res.end();
});
// starts up server on localhost 5000
server.listen(5000);

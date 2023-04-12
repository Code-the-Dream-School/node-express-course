const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user invokes server on port 5000");
//   console.log(req.method)
// console.log(req.url)
const url = req.url;
if(url === '/'|| url === '/home') {
    // ==== home page ====
//   when setting up content type what is placed in the header does matter.
  res.writeHead(200, { "content-type": "text/html" });
  // when adding more content make sure to kill the current server and invoke it once more to display changes
  res.write("<h1>home page</h1>");
  res.end();
}
// ==== about page ====
else if(url === '/about') {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
}
// ==== 404 page ====
else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page does not exist</h1>");
    res.end();
}

});

// to invoke the server it must have "listen" appended and a port designated
// can freely use almost any port number(some are locked to specific needs).
server.listen(5000);

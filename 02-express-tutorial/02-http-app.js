const http = require("http");
const { readFileSync } = require("fs");

// gather all files
const homePage = readFileSync("./02-express-tutorial/new-public/index.html");
const homeStyles = readFileSync("./02-express-tutorial/new-public/styles.css");
const homeImage = readFileSync("./02-express-tutorial/new-public/logo.svg");
const homeLogic = readFileSync(
  "./02-express-tutorial/new-public/browser-app.js"
);

const server = http.createServer((req, res) => {
  console.log("user invokes server on port 5000");
// note each way the conditions are set based on particular needs from text/javascript to image/svg+xml
  const url = req.url;
  // ==== home page ====
  if (url === "/" || url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // ==== about page ====
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  // ==== styles ====
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
   // ==== image/logo ====
   else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
   // ==== logic ====
   else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // ==== 404 page ====
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page does not exist</h1>");
    res.end();
  }
});


server.listen(5000);

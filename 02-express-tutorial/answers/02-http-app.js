const port = 5000,
  http = require("http"),
  { readFileSync } = require("fs"),
  homePage = readFileSync("../navbar-app/index.html"),
  homeStyles = readFileSync("../navbar-app/styles.css"),
  homeImage = readFileSync("../navbar-app/logo.svg"),
  homeLogic = readFileSync("../navbar-app/browser-app.js"),
  server = http.createServer((req, res) => {
    console.log(req.url);
    const url = req.url;
    // Home page
    if (url === "/") {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.write(homePage);
      res.end();
      // styles
    } else if (url === "/styles.css") {
      res.writeHead(200, {
        "Content-Type": "text/css"
      });
      res.write(homeStyles);
      res.end();
      // image
    } else if (url === "/logo.svg") {
      res.writeHead(200, {
        "Content-Type": "image/svg+xml"
      });
      res.write(homeImage);
      res.end();
      // logic
    } else if (url === "/browser-app.js") {
      res.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      res.write(homeLogic);
      res.end();
      // 404/ error page
    } else {
      res.writeHead(404, {
        "Content-Type": "text/html"
      });
      res.write('<h1>Page Not Found</h1>');
      res.end();
    }
  });

server.listen(port);
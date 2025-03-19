const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// DONE. here, you could declare one or more variables to store what comes back from the form.
let userName = "";

// DONE. here, you can change the form below to modify the input fields and what is displayed.
// Form to ask for UserName
const form = () => {
  return `
  <body>
  <p>${userName ? `Hello, ${userName}!` : "Please enter your name below:"}</p>
  <form method="POST">
  <input name="name" placeholder="Enter your name"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // DONE. here, you can add your own logic
      if (body["name"]) {
        userName = body["name"];
      }
      // DONE. Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");

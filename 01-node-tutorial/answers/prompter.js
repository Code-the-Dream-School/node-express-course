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

// variables .
let name = "";
let colors = "not indicated";
let myName = "Bino";
let yourGuess = "";
let winner = "";

const form = () => {
  return `
  <body style="background:${colors}">
  <h1>Welcome to Our Page <span style="color:gold">${name.toUpperCase()}</span></h1>
  <h1>Your favorite color is <span style="color:gold">${colors.toUpperCase()}</span></h1>
  <form method="POST">

  <label for="name">Enter your name:
  <input name="name"></input>
 
  <label for="myName">Guess my name:
  <input name="yourGuess"></input>
  
    <label for="colors">Choose a color:
      <select id="colors" name="colors">
        <option value="" class="">Choose color:</option>
        <option value="red" style="color:red" name="colors">Red</option>
        <option value="blue" style="color:blue" name="colors">Blue</option>
        <option value="yellow" style="color:yellow" name="colors">Yellow</option>
        <option value="green" style="color:green" name="colors">Green</option>
      </select>
    </label>
  <button type="submit">Submit</button>
  </form>
  <h2>This is your guess: ${yourGuess}</h2>
  <h2>And The Winner is ...  ${winner}</h2>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);

      if (
        body["yourGuess"] === "Bino" ||
        body["yourGuess"] === "bino" ||
        body["yourGuess"] === "BINO"
      ) {
        yourGuess = body["yourGuess"];
        winner = body["name"];
        colors = body["colors"];
        name = body["name"];
      } else {
        name = body["name"];
        yourGuess = body["yourGuess"];
        winner = "Bino";
        colors = body["colors"];
      }

      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url);
});

server.listen(3000);
console.log("The server is listening on port 3000.");

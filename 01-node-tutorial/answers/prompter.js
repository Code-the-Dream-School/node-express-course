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

// here, you could declare one or more variables to store what comes back from the form.
let secretNumber = Math.floor(Math.random() * 100) + 1;
let message = "Guess a number between 1 and 100.";
let attempts = 0;

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
    <p>${message}</p>
    <form method="POST">
      <input name="guess" type="number" min="1" max="100"></input>
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
      // here, you can add your own logic
      if (body["guess"]) {
        const userGuess = parseInt(body["guess"], 10);
        attempts++;

        if (userGuess === secretNumber) {
          message = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
          secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a new secret number
          attempts = 0; // Reset the attempts
        } else if (userGuess < secretNumber) {
          message = `Try a higher number. ${attempts} attempts so far.`;
        } else {
          message = `Try a lower number. ${attempts} attempts so far.`;
        }
      }
      // Your code changes would end here
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

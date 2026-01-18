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

//Generate a random secret number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let message = "Guess the number between 1 and 100.";
let attempts = 0;

const form = () => {
  return `
  <body>
    <h1>Number Guessing Game</h1>
    <p>${message}</p>
    <p>Attempts: ${attempts}</p>
    <form method="POST">
      <input name="guess" type="number" min="1" max="100" placeholder="Enter your guess"></input>
      <button type="submit">Guess</button>
    </form>
    <form method="POST">
      <button name="reset" value="true" type="submit">New Game</button>
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

      // Check if user wants to reset the game
      if (body["reset"]) {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        message = "New game started! Guess the number between 1 and 100.";
        attempts = 0;
        console.log(`New secret number generated: ${secretNumber}`);
      }
      // Process the guess
      else if (body["guess"]) {
        const guess = parseInt(body["guess"]);
        attempts++;

        console.log(`Player guessed: ${guess}, Secret number: ${secretNumber}, Attempts: ${attempts}`);

        if (isNaN(guess)) {
          message = "Please enter a valid number!";
        } else if (guess === secretNumber) {
          message = `Congratulations! You guessed it in ${attempts} attempts! The number was ${secretNumber}.`;
          console.log(`Player won in ${attempts} attempts!`);
        } else if (guess < secretNumber) {
          message = `Too low! Try again. (Attempt ${attempts})`;
        } else {
          message = `Too high! Try again. (Attempt ${attempts})`;
        }
      } else {
        message = "Please enter a guess!";
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
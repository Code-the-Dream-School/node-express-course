const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

// Function to parse the body of the POST request
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

// Generate a random number between 1 and 10
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// Declare variables for game state
let randomNumber = generateRandomNumber();
let message = "Guess a number between 1 and 10.";
let guessResult = "";

// HTML form for the game
const form = () => {
  return `
  <body>
  <p>${message}</p>
  <p>${guessResult}</p>
  <form method="POST">
    <input name="guess" type="number" min="1" max="10" required></input>
    <button type="submit">Submit Guess</button>
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
      const userGuess = parseInt(body["guess"], 10);

      // Check the guess
      if (userGuess === randomNumber) {
        guessResult = `Correct! The number was ${randomNumber}.`;
        message = "You won! Refresh the page to play again.";
      } else {
        guessResult = `Wrong! You guessed ${userGuess}. Try again.`;
        message = "Guess a number between 1 and 10.";
      }

      // After the guess, reset the random number for a new game
      randomNumber = generateRandomNumber();

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

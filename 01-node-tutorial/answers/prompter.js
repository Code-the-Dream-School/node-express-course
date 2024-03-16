const { log } = require("console");
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

// Function to generate a random number between min and max
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate a random number between 1 and 100
const randomNumber = getRandomNumber(1, 100);

let attempts = 0;
let message = "";

const form = (message = '') => {
  return `
  <body>
  <h2>Number Guessing Game</h2>
  <p>${message}</p >
    <form method="POST">
      <label for="guess">Enter your guess (between 1 and 100):</label><br>
        <input type="number" id="guess" name="guess" min="1" max="100" required><br><br>
          <button type="submit">Submit Guess</button>
        </form>
        </body>
          `;
};

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    // Process form submission
    getBody(req, (body) => {
      const userGuess = parseInt(body["guess"]);
      console.log('Guess: ', userGuess);
      console.log(randomNumber);
      attempts++;

      if (!isNaN(userGuess)) {
        console.log('Guess: ', userGuess);
        if (userGuess === randomNumber) {
          message = `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`;
        } else if (userGuess < randomNumber) {
          message = "Sorry, your guess is too low. Try again!";
        } else {
          message = "Sorry, your guess is too high. Try again!";
        }
      } else {
        message = "Please enter a valid number.";
      }

      // Display form with updated message
      // res.writeHead(303, { Location: "/" });
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(form(message));
    });
  } else {
    // Display initial form
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(form());
  }
});
// Listen for incoming requests on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
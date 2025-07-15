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
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameMessage = "I'm thinking of a number between 1 and 100. Can you guess it?";
let gameWon = false;

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Number Guessing Game</title>
    <style>
      body { 
        font-family: Arial, sans-serif; 
        max-width: 600px; 
        margin: 50px auto; 
        padding: 20px;
      }
      .game-container {
        background-color: #f0f0f0;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
      }
      .message {
        font-size: 20px;
        margin: 20px 0;
        padding: 15px;
        border-radius: 5px;
        background-color: ${gameWon ? '#d4edda' : '#d1ecf1'};
        color: ${gameWon ? '#155724' : '#0c5460'};
      }
      input[type="number"] {
        padding: 10px;
        font-size: 18px;
        width: 100px;
        margin: 10px;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: #0056b3;
      }
      .reset-button {
        background-color: #6c757d;
        margin-left: 10px;
      }
      .reset-button:hover {
        background-color: #545b62;
      }
    </style>
  </head>
  <body>
    <div class="game-container">
      <h1>Number Guessing Game</h1>
      <div class="message">${gameMessage}</div>
      <p>Attempts: ${attempts}</p>
      <form method="POST">
        <input type="number" name="guess" min="1" max="100" required autofocus 
               placeholder="1-100" ${gameWon ? 'disabled' : ''}>
        <button type="submit" ${gameWon ? 'disabled' : ''}>Submit Guess</button>
        <button type="submit" name="reset" value="true" class="reset-button">New Game</button>
      </form>
    </div>
  </body>
  </html>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["reset"] === "true") {
        // Reset the game
        targetNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        gameMessage = "New game started! I'm thinking of a number between 1 and 100.";
        gameWon = false;
      } else if (body["guess"]) {
        // Process the guess
        const userGuess = parseInt(body["guess"]);
        attempts++;
        
        if (userGuess === targetNumber) {
          gameMessage = `Congratulations! You found it! The number was ${targetNumber}. You got it in ${attempts} attempts!`;
          gameWon = true;
        } else if (userGuess < targetNumber) {
          gameMessage = `Your guess of ${userGuess} is too low. Try higher!`;
        } else if (userGuess > targetNumber) {
          gameMessage = `Your guess of ${userGuess} is too high. Try lower!`;
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

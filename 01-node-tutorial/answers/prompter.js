const http = require("http");
const StringDecoder = require("string_decoder").StringDecoder;

// Function to parse the request body
const getBody = (req, callback) => {
    const decoder = new StringDecoder("utf-8");
    let body = "";
    req.on("data", function (data) {
        body += decoder.write(data);
    });
    req.on("end", function () {
        body += decoder.end();
        const bodyArray = body.split("&");
        const resultHash = {};
        bodyArray.forEach((part) => {
            const [key, value] = part.split("=");
            resultHash[key] = value;
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

// Initialize variables
let attempts = 0;
let message = "";

// Function to generate HTML form
const form = (message = "") => {
    return `
    <body>
      <h2>Number Guessing Game</h2>
      <p>${message}</p>
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
            attempts++;
            console.log('Randon Number:', randomNumber);
            console.log('User Guess: ', userGuess);

            if (!isNaN(userGuess)) {
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
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(form(message));
        });
    } else {
        // Display initial form
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(form());
    }
});

// Adding event listener to the 'request' event
server.on("request", (req) => {
    console.log("Event received:", req.method, req.url);
});

// comment to check nodemon is workinh properly
// Listen for incoming requests on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

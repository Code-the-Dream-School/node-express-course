const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;
 //comment
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
 //modified code
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessResult = "";

const handleGuess = (guess) => {
  const parsedGuess = parseInt(guess);
  if (isNaN(parsedGuess)) {
    guessResult = "Invalid input. Please enter a numeric value.";
  } else if (parsedGuess < randomNumber) {
    guessResult = "Hey, the number is too low! Try again.";
  } else if (parsedGuess > randomNumber) {
    guessResult = "Hey, the number is too high! Try again.";
  } else {
    guessResult = "Congratulations! You guessed the correct number!";
  }
};
  //end of modified code
const form = () => {
  return `
  <body>
  <p></p>
  <form method="POST">
  <input name="item"></input>
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
        handleGuess(body["guess"]);
      } else {
        guessResult = "Nothing was entered.";
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

server.on('request', (req) => {
  console.log("event received: ", req.method, req.url)
  })

server.listen(5000);
console.log("The server is listening on port 5000.");

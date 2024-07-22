const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

// I'll be making a game where the user is given two two digit numbers and hsould enter the procut of both numbers.
// Function to generate a random 2-digit number
const generateRandomNumber = () => Math.floor(Math.random() * 90) + 10;

let num1 = generateRandomNumber();
let num2 = generateRandomNumber();
let message = `Solve the following multiplication problem: ${num1} x ${num2}`;

// Function to generate a new multiplication problem
const generateNewProblem = () => {
  num1 = generateRandomNumber();
  num2 = generateRandomNumber();
  message = `Solve the following multiplication problem: ${num1} x ${num2}`;
};

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
let item = "Enter something below.";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p>${message}</p>
  <form method="POST">
  <input type="number" name="answer" required></input>
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
      const userAnswer = parseInt(body["answer"], 10);
const correctAnswer = num1 * num2;
if (!isNaN(userAnswer)) {
  if (userAnswer === correctAnswer) {
    message = `Correct! ${num1} x ${num2} = ${correctAnswer}. Here is a new problem:`;
  } else {
    message = `Incorrect. The correct answer was ${correctAnswer}. Try this new problem:`;
  }
  generateNewProblem();
} else {
  message = "Please enter a valid number.";
}
      // Your code changes would end here
      //have to make addtional changes here so that user can get feedback after entering answer


      res.writeHead(200, { 'Content-Type': 'text/html'
      });
      res.end(form());
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(form());
  }
});

server.on("request", (req) => {  
  console.log("event received: ", req.method, req.url);  
});  

server.listen(3000);
console.log("The server is listening on port 3000.");

//editing prompter js and seeing Nodemon restarting the program in terminal
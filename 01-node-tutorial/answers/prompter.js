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
let item = "Enter your number below.";
let myGuess


// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <h2>Guess my number (between 1-100)</h2>
  <p>${item}</p>
  <form method="POST">
  <input type="number" min="1" max="100" name="item"></input>
  <button type="submit">Submit</button>
   </form>
   </body>

  `
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);


  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
     
      if (item === "Enter your number below." || item === "That's it, you guessed correctly!") {
        myGuess = Math.floor(Math.random() * 100 + 1)
      }
      console.log(myGuess)

      if (body["item"] > myGuess) {
        item = "Your number is too high, try again."
      } else if (body["item"] < myGuess) {
        item = "Your number is too low, try again."
      } else {
        item = "That's it, you guessed correctly!"
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

server.listen(3000);
console.log("The server is listening on port 3000.");

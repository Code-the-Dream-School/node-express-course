const http = require("http");
const fs = require('fs'); 
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
let greeting = "Hi, this is our hometask form!";
let item = "Enter your name.";
let userComment = "No comment provided yet.";


// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = (color) => {
  return `
  <body style="background-color: ${color};">
  <form method="POST">
  <div>
    <h2>${greeting}</h2>
    <p>${item}</p>
    <input name="item"></input>
    <br/>
    <br/>
    <label for="comment">Your comment:</label>
    <br/>
    <textarea name="comment"></textarea>
    <p>${userComment}</p>
    <br/>
    <label for="color">Choose a background color:</label>
    <select name="color" id="color">
      <option value="default" selected disabled>Choose...</option>
      <option value="white">White</option>
      <option value="blue">Blue</option>
      <option value="pink">Pink</option>
      <option value="yellow">Yellow</option>
      <option value="green">Green</option>
    </select>
    <br/>
    <button type="submit">Submit</button>
  </div>
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
      const dataToSave = {
        item: body["item"] || "No name provided.",
        userComment: body["comment"] || "No comment provided.",
        color: body["color"] || "white"
      };
    
      fs.writeFile('user_data.json', JSON.stringify(dataToSave), (err) => {
        if (err) throw err;
        console.log('Data saved!');
      });

      item = dataToSave.item;
      userComment = dataToSave.userComment;
      
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    fs.readFile('user_data.json', 'utf8', (err, data) => {
      if (err) {
        return res.end(form());
      } else {
        const existingData = JSON.parse(data);
        res.end(form(existingData.color));
      }
    });
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");

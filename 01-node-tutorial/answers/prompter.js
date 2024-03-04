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
// let item = "Enter something below.";
// let item = "Select background color.";
let selectedColor = "White";
// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body style="background-color:${selectedColor}">
  
  <form method="POST">
  <h1>Selected Background Color : ${selectedColor}</h1>
  <select id="backgroundColor" name="selectColor">
  <option>---Choose tutorial---</option>
  <option value="Blue">Blue</option>
  <option value="Green">Green</option>
  <option value="Red">Red</option>
  <option value="White">White</option>
  <option value="Pink">Pink</option>
  </select>
  <button type="submit">Change Color</button>
  </form>
  </body>
  `;
};

//<p>${item}</p>
// <input name="item"></input>

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  // console.log("req.query ", req.query);
  if (req.method === "POST") {
    
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      
      if (body["item"]) {
        item = body["item"];
      } else {
        item = "Nothing was entered.";
      }
     
      if(body["selectColor"] &&  body["selectColor"] !== '---Choose+tutorial---'){
        selectedColor = body["selectColor"];
      } else {
        selectedColor = "White";
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

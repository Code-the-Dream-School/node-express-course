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
let item = "Enter something below.";
let bgColor = "#227dc9ff"; //added by me*
// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body style="background-color:${bgColor}; font-family:sans-serif; text-align:center; padding:50px;">
    <h2>Fun Form!</h2> 
  <p>${item}</p>
  <form method="POST">
  <input name="item" 
             style="background-color:#fff8dc; border:2px solid #333; padding:10px; border-radius:5px; font-size:16px;">
      <button type="submit" style="padding:10px 20px; font-size:16px;">Submit</button>
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
      if (body["item"]) {
        item = body["item"];
        // change background color randomly each submit
  bgColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
      } else {
        item = "Nothing was entered.";
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

server.listen(3000);
console.log("The server is listening on port 3000.");

//Hue (H)= 200 → a blueish color

//Saturation(S) = 70% → fairly vivid

//Lightness (L)= 80% → light/pastel shade
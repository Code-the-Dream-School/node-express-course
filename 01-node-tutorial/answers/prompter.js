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
let item = "";
let item2 = 6;

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <form method="POST">
  <p>Enter a name:</p>
  <input name="item"></input>
  <p>Enter a number between 1-10:</p>
  <input name="item2"></input>  
  <button type="submit">Submit</button>
  </form>
  <h${item2}>${item}</h${item2}>
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
      } else {
        item = "";
      }
      if (body["item2"]) {
        item2 = Number(body["item2"]);
        if(item2<=2) { item2 = 5}
        if(item2>=3 && item2<=4) { item2 = 4}
        if(item2>=5 && item2<=6) { item2 = 3}
        if(item2>=7 && item2<=8) { item2 = 2}
        if(item2>=9) { item2 = 1}
      } else {
        item2 = 6;
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

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

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.

const form = (selectedColor) => {
  const colorOptions = ["Red", "Green", "Blue", "Yellow", "Orange"];

  const colorDropdown = `
    <select name="color">
      ${colorOptions
        .map((color) => {
          const isSelected =
            color === selectedColor ? 'selected="selected"' : "";
          return `<option value="${color}" ${isSelected}>${color}</option>`;
        })
        .join("")}
    </select>
  `;
  return `
   <body style="background-color: ${selectedColor || "white"};">
      <p>Selected color: ${selectedColor || "None"}</p>
      <form method="POST">
        <label for="color">Choose a color:</label>
        ${colorDropdown}
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
      if (body["color"]) {
        const selectedColor = body["color"];
        item = selectedColor;
      } else {
        item = "Nothing was selected.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form(item));
  }
});

//test for nodemon

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url);
});
server.listen(3000);
console.log("The server is listening on port 3000.");

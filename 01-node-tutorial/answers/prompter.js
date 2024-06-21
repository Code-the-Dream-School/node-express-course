const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;
const { colors } = require('./colors.js');

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
    console.log(bodyArray);
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let textLabel = 'Please enter sample text:';
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
let bgColorLabel = "Please choose background color:";
let bgColor = 'DodgerBlue';
let colorLabel = 'Please choose text color:';
let color = 'white';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomColor = () => {
  return colors[randomInt(0, colors.length - 1)];
}

const getTenRandomColors = () => {
  const colors = new Set();
  let color;
  while (colors.size < 10) {
    color = getRandomColor();
    // color = `color${colors.size + 1}`
    colors.add(color);
  }
  return Array.from(colors);
}

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  const colors1 = getTenRandomColors();
  const options1 = colors1.map((color) => `<option value="${color}" style="background-color: ${color} !important;" onMouseOver="this.style.backgroundColor='${color}'">${color}</option>`).join('');
  const colors2 = getTenRandomColors();
  const options2 = colors2.map((color) => `<option value="${color}" style="background-color: ${color};">${color}</option>`).join('');
  return `
  <body style="background-color: ${bgColor}; color: ${color}; font-size: 20px; display: flex; flex-direction: column; align-items: center;">
  <h1>Test Colors</h1>
  <div>Sample text: ${text}</div>
  <div>Background color: ${bgColor}</div>
  <div>Text color: ${color}</div>
  <br>
  <form method="POST" style="display: flex; flex-direction: column; align-items: center; row-gap: 10px;">
  <div>
    <label for="text" style="margin-right: 5px;">${textLabel}</label>
    <input name="text" id="text" required></input>
  </div>
  <div>
    <label for="bgColor" style="margin-right: 5px;">${bgColorLabel}</label>
    <select name="bgColor" id="bgColor" style="width: 200px; background-color: ${bgColor};" required onchange="updateSelectColor(this)">
    <option disabled selected value> -- select an option -- </option>
      ${options1}
    </select>
  </div>
  <div>
    <label for="color" style="margin-right: 5px;">${colorLabel}</label>
    <select name="color" id="color" style="width: 200px;  background-color: ${color};" required onchange="updateSelectColor(this)">
    <option disabled selected value> -- select an option -- </option>
      ${options2}
    </select>
  </div>
  <br>
  <button type="submit">Submit</button>
  </form>
  </body>
  <script>
    function updateSelectColor(selectElement) {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      selectElement.style.backgroundColor = selectedOption.style.backgroundColor;
    }
  </script>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      text = body['text'];
      // text has pluses instead of spaces and %2C instead of commas, %3F instead of ?, etc... is there a method to convert text to normal?
      const textArr = text.split('+');
      text = textArr.join(' ').replaceAll('%2C', ',').replaceAll('%3F', '?');
      bgColor = body['bgColor'].split('%2C+').join(',');
      color = body['color'].split('%2C+').join(',');
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

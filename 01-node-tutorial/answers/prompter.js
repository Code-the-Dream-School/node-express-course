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
let item = "Select Favorite Color";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
return `

<body>

    <h2>The button Element</h2>

    <button type="button" onclick="alert('Hello World!')">Click Me!</button>

</body>

`;
};

    /*
    <html>
    <body>

    <h2>Show a Color Picker</h2>

    <p>The <strong>input type="color"</strong> is used for input fields that should contain a color.</p>

    <form action="/action_page.php">
    <label for="favcolor">Select your favorite color:</label>
    <input type="color" id="favcolor" name="favcolor" value="#ff0000">
    <input type="submit" value="Submit">
    </form>

    <p><b>Note:</b> type="color" is not supported in Internet Explorer 11.</p>

    </body>
    </html>
    */

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

const app = require("./stuffThatYouCanIgnore"); // take my word for it :)

const STYLE = `
<style>
  * { font-family: Arial; box-sizing: border-box; }
  body { display: flex; align-items: center; justify-content: center; }
  main { max-width: 70ch; }
  pre { font-family: monospace; }
</style>`;

app.get("/", (_, res) => res.send(`  ${STYLE}
<body><main>
  <h1>My Small Games & Small Apps!</h1>
  <h3>Select your favourite game or App</h3>
  <a href="/CreatingMyOwnGame/convert">Convertion!</a><br />
  <a href="/CreatingMyOwnGame">Small Games in progress</a><br />
  <a href="/CreatingMyOwnGame">Small Games in progress</a><br />
  <a href="/CreatingMyOwnGame">Small App in Progress</a><br />
  </main></body>
`));


// Conversion functions
function kmToM(km) {
    return km * 1000; // Convert kilometers to meters
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // Convert Celsius to Fahrenheit
}

// Route for displaying the conversion form
app.get('/CreatingMyOwnGame/convert', (req, res) => {
    const STYLE = `<style>body { font-family: Arial, sans-serif; }</style>`;
    const form = `
        <h2>Unit Converter</h2>
        <form action="/CreatingMyOwnGame/convert" method="GET">
            <label for="unit">Select unit:</label>
            <select id="unit" name="unit">
                <option value="kmToM">Kilometer to Meter</option>
                <option value="celsiusToFahrenheit">Celsius to Fahrenheit</option>
            </select>
            <br>
            <label for="value">Enter value:</label>
            <input type="text" id="value" name="value" required>
            <button type="submit">Convert</button>
        </form>
        <div id="result"></div>
    `;
    res.send(`${STYLE} ${form}`);
});

// Route for handling form submission and displaying result
app.get('/CreatingMyOwnGame/convert', (req, res) => {
    const unit = req.query.unit;
    const value = parseFloat(req.query.value);

    if (isNaN(value)) {
        return res.send('<p>Invalid input. Please enter a valid number.</p>');
    }

    let result;
    if (unit === 'kmToM') {
        result = kmToM(value);
    } else if (unit === 'celsiusToFahrenheit') {
        result = celsiusToFahrenheit(value);
    }

    const resultText = `<p>Result: ${result}</p>`;
    res.send(resultText);
});

// app.get("/CreatingMyOwnGame", (request, response) => {
//     response.setHeader("content-type", "text/plain").send(
//         `This is my first Game`
//     );
// });


// app.get("/CreatingMyOwnGame/html", (request, response) => {
//     // content-type: text/html is the default, so we don't need to specify it
//     // anymore!
//     response.send(` ${STYLE}
//     <body><main>
//     <p>
//       With a little creativity, it is amazing how much we can build with
//       these simple primitives. For example:
      
      
//       <ul>
//         <a href="/CreatingMyOwnGame/html?lightsOn=false"><li>Lights Off</li></a>
//         <a href="/CreatingMyOwnGame/html?lightsOn=true"><li>Lights On</li></a>
//         <a href="/CreatingMyOwnGame/html"><li>Undo</li></a>
//       </ul>
//     </p>

//     <!-- And here are the styles and server-side code to enable the above
//     trickery to work. Remember the ${"javascript"} code runs on the server! --!>

//     ${
//       // I am using strings that say "true" and "false" which is a bit
//       // confusing. These are strings, not boolean values! Hence, I actually
//       // have a lot more than 2 possibilities; I only turn the lights on
//       // if I have an exact "true". I turn them off for an exact "false".
//       // Otherwise, I do nothing!
//       request.query["lightsOn"] === "true"
//         ? "<style>body { background-color: #ffff82 /* light yellow */ }</style>"
//         : request.query["lightsOn"] === "false"
//         ? "<style>body {background-color: black }</style>"
//         : ""
//     }


//     <h2>Pretty cool!</h2>
//     <p><a href="/whatisaserver/json">Next Demo</a></p>
//     </body></main>
//   `)
// });



// app.get("/CreatingMyOwnGame/convert", (request, response) => {
//     response.send(`${STYLE}
//     <body><main>
//         <h2>Kilometer to Meter Converter</h2>
//         <form action="/CreatingMyOwnGame/convert" method="GET">
//             <label for="km">Enter value in kilometers:</label>
//             <input type="text" id="km" name="km" required>
//             <button type="submit">Convert</button>
//         </form>
//         </main></body>
//     `);
// });

// app.get("/CreatingMyOwnGame/convert", (request, response) => {
//     const km = parseFloat(request.query.km);
    
//     if (isNaN(km)) {
//         return response.status(400).send('Invalid input. Please provide a valid number for kilometers.');
//     }

//     const meters = km * 1000;

//     response.send(`${STYLE}
//     <body><main>
//     <h2>Result:</h2><p>${km} kilometers is equal to ${meters} meters.</p>
//     </main></body>`);
// });

app.listen(3000);
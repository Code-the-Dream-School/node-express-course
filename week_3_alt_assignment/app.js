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
  <a href="/CreatingMyOwnGame/convert">Unit Conversion</a><br />
  <a href="/CreatingMyOwnGame/Quiz">Quiz in progress</a><br />
  <a href="/CreatingMyOwnGame/games">Games in progress</a><br />
  
  </main></body>
`));

// Conversion functions
function kmToM(km) {
    return km * 1000; // Convert kilometers to meters
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // Convert Celsius to Fahrenheit
}

// Route for handling form submission and displaying result
app.get('/CreatingMyOwnGame/convert', (req, res) => {
    let result = "";
    if (req.query.value !== "" || req.query.value !== undefined){
                
        const unit = req.query.unit;
        const value = parseFloat(req.query.value);
        if (unit === 'kmToM') {
        result = kmToM(value) + " " + "Meter";
        } 
        else if (unit === 'celsiusToFahrenheit') {
            result = celsiusToFahrenheit(value) + " " + 'Fahrenheit';
        }
       
    }
   
    const STYLE = `<style>body { font-family: Arial, sans-serif; }</style>`;
    const form = `
        <h2>Unit Converter</h2>
        <form action="/CreatingMyOwnGame/convert" method="GET">
            <label for="unit">Select unit:</label>
            <select id="unit" name="unit">
                <option value="kmToM">Kilometer to Meter</option>
                <option value="celsiusToFahrenheit">Celsius to Fahrenheit</option>
            </select>
            <br />
            <br />
            <label for="value">Enter value:</label>
            <input type="text" id="value" name="value" required>
            <button type="submit">Convert</button>
        </form>
        <div id="result">${result}</div>
    `;
  
    res.send(`${STYLE} ${form}`);
});

app.get('/CreatingMyOwnGame/Quiz', (req, res) => {
    res.send(` ${STYLE}
    <body><main> <h2>Quiz is in progress</h2>
</main></body>`)
});

app.get('/CreatingMyOwnGame/games', (req, res) => {
    res.send(` ${STYLE}
    <body><main> <h2>Games is in progress</h2>
</main></body>`)
});

app.listen(3000);
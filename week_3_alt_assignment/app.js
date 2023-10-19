const app = require('./stuffThatYouCanIgnore');
const { nutrients } = require("./nutrientsData");

app.get('/', (_, res) => {
    res.send(`
        <h1>Welcome to Nutrition Web!</h1>
        <p>Discover the world of nutrition and learn how to make healthy food choices to fuel your body.</p>
        <a href='/whatisnutrition'>Visit /whatisnutrition to get started!</a>
`)});

app.get('/whatisnutrition', (_, res) => {
    res.send(`
        <html>
            <head>
                <title>What is Nutrition?</title>
            </head>
            <body>
                <h2>Welcome to the 'What is Nutrition?' section of our tutorial</h2>
                <p>Nutrition is the science of how your body uses the food you eat to grow, repair itself, and produce energy. Nutrients are the essential components in food that help you stay healthy.</p>
                <h3>Ready to explore nutrients?</h3> <a href='/nutrients/query'>Click here</a>
            </body>
        </html>
    `
    );
});

app.get('/nutrients/query', (req, res) => {
    const { nutrient, show } = req.query;
    let responseText = '';
    const nutrientName = nutrient ? nutrient.toLowerCase() : '';

    if (!nutrient) {
        return res.send('Please provide a nutrient parameter in the URL like that "http://localhost:3000/nutrients/query?nutrient=protein".');
    } else {
        switch (nutrientName) {
            case 'protein':
            case 'proteins':
                responseText = 'Proteins are essential for growth, repair, and overall body function.';
                break;
            case 'carbohydrate':
            case 'carbohydrates':
                responseText = 'Carbohydrates are your body\'s primary source of energy.';
                break;
            case 'fat':
            case 'fats':
                responseText = 'Fats provide energy, support cell growth, and protect organs.';
                break;
            case 'vitamin':
            case 'vitamins':
                responseText = 'Vitamins are micronutrients that help with various bodily functions.';
                break;
            case 'mineral':
            case 'minerals':
                responseText = 'Minerals are essential for bodily functions like bone health and nerve function.';
                break;
            default:
                responseText = 'Nutrient not found. Please specify a valid nutrient.';
                break;
        }
    }

    const STYLE = `
    <style>
        .show-element {
            display: block;
        }

        .hide-element {
            display: none;
        }
    </style>
    `;
    
    responseText += STYLE;

    responseText += `
        <ul>
            <a href="/nutrients/query?nutrient=${nutrientName}&show=true"><li>Show food with ${nutrient}</li></a>
            <a href="/nutrients/query?nutrient=${nutrientName}&show=false"><li>Hide food with ${nutrient}</li></a>
            <a href="/whatisnutrition"><li>Back home</li></a>
        </ul>
    `;
    
    if (show === 'true' && nutrients[nutrientName]) {
        const sources = nutrients[nutrientName].sources;
        const sourcesList = sources.map(source => `<p>${source}</p>`).join('');
        
        responseText += `
            <div class='show-element'>
                <h3>Sources of ${nutrientName}${nutrientName.endsWith("s") ? ":" : "s"}:</h3>
                <div>
                ${sourcesList}
                </div>
            </div>
        `;
    } else if (show=== 'false') {
        responseText += `
            <div class='show-element hide-element'></div>
    `;
    } else if (!nutrients[nutrientName]) {
        responseText += `
            <div class='show-element'> 
                Sorry, there are no sources in my database :(
            </div>
        `
    }

    return res.send(responseText);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
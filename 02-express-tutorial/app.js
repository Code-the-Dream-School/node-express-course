// The require statement to import the express module
const express = require('express');
const { products } = require('./data');

// Creation of the app as returned from calling express()
const app = express();

// app.use statements for the middleware. You’ll eventually use many kinds of middleware, but for now the only middleware we are using is express.static().
app.use(express.static('public'));


//app.get and app.post statements for the routes you will handle. Eventually these will be refactored into router modules, but for now you can put them inline.

// GET method route
// app.get('/api/v1/test', (req, res) => {
//     res.json({ message: "It worked!" });
// });


app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

/*
Next, you need to provide a way to retrieve a particular product by ID. 
This is done by having an app.get statement for the url /api/v1/products/:productID
*/

// need to find that product in the array. For that, you use the .find function of the array:

app.get('/api/v1/products/:productID', (req, res) => {
    const productID = req.params.productID;
    
    const product = products.find((product) => product.id === parseInt(productID));

    /*
    The user may request a product that is not there, 
    for example with a URL like /api/v1/products/5000 or /api/v1/products/nottthere. 
    So in that case, you should return a 404 status code and the JSON { message: "That product was not found."}. 
    Add this logic to the app.get statement, and test that it works.
    */

    if (product) {
    res.json(product);
    } else {
    res.status(404).json({ message: 'That product was not found.' });
    }
});


//12.
app.get("/api/v1/products", (res,req) => {
    console.log(res.query);
})

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

// An app.all statement after these to handle page not found conditions.
// app.all('*', (req, res) => {
//     res.status(404).send('Ops! Page not found :/');
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

console.log('Express Tutorial')
const express = require('express');
const { products } = require("./data");
const peopleRouter = require("./routes/people");
const app = express();

//Middleware

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

app.use(logger); 
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);

    if (!product) { return res.status(404).json({ message: "That product was not found." });}

    res.json(product);
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit, maxPrice } = req.query;
    let result = [...products];

    //filter by search when the name starts with ""
    if (search) {
        result = result.filter((input) =>
            input.name.toLowerCase().startsWith(search.toLowerCase())
        );
    }

    //filter by the max price
    if (maxPrice) {
        const maxPriceNum = parseFloat(maxPrice);
        if (!isNaN(maxPriceNum)) {
            result = result.filter((input) => input.price <= maxPriceNum);
        }
    }

    //limit results
    if (limit) {
        const limitNum = parseInt(limit);
        if (!isNaN(limitNum) && limitNum > 0) {
            result = result.slice(0, limitNum);
        }
    }

    res.json(result);
});

app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

app.use("/api/v1/people", peopleRouter);


//Handle Errors
app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}...`);
});

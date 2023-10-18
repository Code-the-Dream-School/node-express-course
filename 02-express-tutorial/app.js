const express = require('express');
const app = express();

const { products } = require("./data");

app.use(express.static('./public'));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
const express = require('express');
const app = express();

const { products } = require("./data");

app.use(express.static('./public'));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

app.get('/api/v1/products', (req, res) => {
    const newProducts = products.map(product => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts);
});

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID); 
    const singleProduct = products.find(product => product.id === idToFind);

    if(!singleProduct) {
        return res.status(404).send({message: 'That product was not found.'});
    };

    return res.json(singleProduct);
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
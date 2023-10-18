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

app.get('/api/v1/query', (req, res) => {
    const { search, limit, regex } = req.query;
    let sortedProducts = [...products];

    if (regex) {
        try {
            const searchTermRegex = new RegExp(regex, 'i'); 
            sortedProducts = sortedProducts.filter(product => searchTermRegex.test(product.name));
        } catch {
            return res.status(400).json({ success: false, message: 'Invalid regex pattern' });
        }
    } else if (search) {
        sortedProducts = sortedProducts.filter(product => {
            return product.name.toLowerCase().startsWith(search.toLowerCase());
        });
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if(sortedProducts.length < 1) {
        return res.status(200).json({success: true, data: []});
    }
    res.status(200).json(sortedProducts);
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
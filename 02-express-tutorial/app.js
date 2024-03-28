const express = require('express');
const app = express();
const { products } = require("./data");
// Set up the port to listen on
const PORT = process.env.PORT || 3000;
console.log('Express Tutorial')


// Serve static files from the 'public' directory
app.use(express.static('./public'));

// Endpoint to return all products
app.get('/api/v1/products', (req, res) => {
    res.json(products);
});


app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'That product was not found.' });
    }
});

// Endpoint to search products by name and limit
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let filteredProducts = [...products];

    if (search) {
        filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()));
    }
    if (limit) {
        filteredProducts = filteredProducts.slice(0, parseInt(limit));
    }

    res.json(filteredProducts);
});


// Example: Filtering products based on price
app.get('/api/v1/products/price/:maxPrice', (req, res) => {
    const maxPrice = parseFloat(req.params.maxPrice);
    const filteredProducts = products.filter(product => product.price <= maxPrice);
    res.json(filteredProducts);
});

app.use((req, res) => {
    res.status(404).send("404 Not Found");
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
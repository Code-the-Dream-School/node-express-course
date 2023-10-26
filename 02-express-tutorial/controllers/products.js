const { products } = require('../data');

const getProducts = (req, res) => {
    const newProducts = products.map(product => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    return res.json(newProducts);
};

const getProduct = (req, res) => {
    const idToFind = parseInt(req.params.productID); 
    const singleProduct = products.find(product => product.id === idToFind);

    if(!singleProduct) {
        return res.status(404).send({ message: 'That product was not found.' });
    };

    return res.json(singleProduct);
};

const getQuery = (req, res) => {
    const { search, limit, regex, maxprice } = req.query;
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
        return res.status(200).json({ success: true, data: [] });
    }

    if (maxprice) {
        const validPrice = parseFloat(maxprice);
        if (validPrice) {
            sortedProducts = sortedProducts.filter(product => product.price < validPrice);
        } else {
            return res.status(400).json({ success: false, message: 'Invalid maxprice value' });
        }
    } 
    return res.status(200).json(sortedProducts);
}

module.exports = {
    getProducts, 
    getProduct,
    getQuery
};
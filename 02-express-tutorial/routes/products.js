const express = require('express');
const router = express.Router();

const {
    getProducts, 
    getProduct,
    getQuery
} = require('../controllers/products');

router.get('/products', getProducts);
router.get('/products/:productID', getProduct);
router.get('/query', getQuery);

module.exports = router;


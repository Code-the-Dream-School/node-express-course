'use strict';

const express = require('express'),
  router = express.Router(),
  { getAllProducts, getAllProductsStatic} = require('../controllers/products');


router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
const express = require('express')
const router = express.Router()
const{getallProducts,getAllProductsStatic } = require('../controllers/products')

router.route('/').get(getallProducts)
router.route('/static').get(getAllProductsStatic)
module.exports = router


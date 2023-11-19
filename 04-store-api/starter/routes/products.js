const express = require('express')
const router = express.Router()

const {getAllProductsStatic,getAllProducts} = require('../controllers/products')

router.route('/static').get(getAllProductsStatic)
router.route('/').get(getAllProducts)

module.exports =  router
const express = require('express')
const router = express.Router()

const {getAllProducts, getAllProductStatic} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductStatic)

module.exports = router
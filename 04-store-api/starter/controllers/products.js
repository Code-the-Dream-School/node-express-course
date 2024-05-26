const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({ price: { $gt: 35 } })
		.sort('price')
		.select('name price')
	res.status(200).json({ products, nbHits: products.length })
}
const getAllProducts = async (req, res) => {
	const { featured, company, name, sort, fields, numericFilters } = req.query

	const queryObj = {}

	if (featured) {
		queryObj.featured = featured === 'true' ? true : false
	}

	if (company) {
		queryObj.company = company
	}
	if (name) {
		queryObj.name = { $regex: name, $options: 'i' }
	}
	if (numericFilters) {
		const operatorMap = {
			'>': '$gt',
			'>=': '$gte',
			'=': '$eq',
			'<': '$lt',
			'<=': '$lte',
		}
		const regEx = /\b(<|>|>=|=|<|<=)\b/g
		let filters = numericFilters.replace(
			regEx,
			(match) => `-${operatorMap[match]}-`
		)

		const options = ['price', 'rating']
		filters = filters.split(',').forEach((item) => {
			const [field, operator, value] = item.split('-')
			if (options.includes(field)) {
				queryObj[field] = { [operator]: Number(value) }
			}
		})
	}
	console.log(queryObj)
	
	let result = Product.find(queryObj)
	// sort
	if (sort) {
		const sortList = sort.split(',').join(' ')
		result = result.sort(sortList)
	} else {
		result = result.sort('createdAt')
	}
	// fields
	if (fields) {
		const fieldsList = fields.split(',').join(' ')
		result = result.select(fieldsList)
	}
	const page = Number(req.query.page) || 1
	const limit = Number(req.query.limit) || 10
	const skip = (page - 1) * limit

	result = result.skip(skip).limit(limit)

	const products = await result
	res.status(200).json({ products, nbHits: products.length })
}

module.exports = { getAllProducts, getAllProductsStatic }

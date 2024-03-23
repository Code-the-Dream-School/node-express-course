const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))
const { products } = require('./data')

app.get('/api/v1/products', (req, res) => {
	const product = products.map((product) => {
		const { id, name, image, price } = product
		return { id, name, image, price }
	})
	res.json(product)
})

app.get('/api/v1/products/:productID', (req, res) => {
	// console.log(req)
	const { productID } = req.params
	const newProduct = products.find((pro) => pro.id === Number(productID))

	if (!newProduct) {
		return res.status(404).send(`Product with ID ${productID} not found!`)
	}

	return res.json(newProduct)
})

app.get('/api/v1/query', (req, res) => {
	const { search, limit, price } = req.query

	let sortedItems = [...products]

	if (search) {
		sortedItems = sortedItems.filter((item) => {
			return item.name.startsWith(search)
		})
	}

	if (limit) {
		sortedItems = sortedItems.slice(0, Number(limit))
	}
	if (price) {
		const priceLimit = parseFloat(price)
		sortedItems = sortedItems.filter((item) => {
			return item.price <= priceLimit
		})
	}
	if (sortedItems.length < 1) {
		return res.status(200).json({ success: true, data: [] })
	}
	return res.status(200).json(sortedItems)
})

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.get('/contacts', (req, res) => {
	res.status(200).send('<h1>Email</h1>')
})

app.get('/api/v1/test', (req, res) => {
	res.json({ message: 'It worked!' })
})
app.all('not-there', (req, res) => {
	res.status(404).send('<h1>Page not found!</h1>')
})

app.listen(3000, () => {
	console.log('The server is running...')
})

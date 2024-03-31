const express = require('express')
const app = express()
// const logger = require('./logger')
const peopleRouter = require('./routes/people')
app.use(express.json())
app.use('/api/v1/people', peopleRouter)
// const { people } = require('./data')

// app.use('/api/', logger)

// app.use(express.static('./public'))
// app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
// 	res.status(200).send('HOME')
// })

// app.get('/api/items', (req, res) => {
// 	res.status(200).send('ITEMS')
// })
// app.get('/about', (req, res) => {
// 	res.status(200).send('ABOUT')
// })

// app.get('/api/products', (req, res) => {
// 	const product = products.map((item) => {
// 		const { id, name, price } = item
// 		return { id, name, price }
// 	})
// 	res.status(200).json(product)
// })
// app.get('/api/postman/people', (req, res) => {
// 	const person = people.map((person) => {
// 		console.log(person)
// 		const { id, name } = person
// 		return { id, name }
// 	})
// 	res.status(200).json(person)
// })

// app.post('/api/postman/people', (req, res) => {
// 	const { name } = req.body
// 	if (!name) {
// 		return res
// 			.status(400)
// 			.json({ success: false, message: 'Please provide a name' })
// 	}
// 	people.push({ id: people.length + 1, name: req.body.name })
// 	res.status(201).json({ success: true, name: req.body.name })
// })

app.listen(3000, () => {
	console.log('The server is running...')
})

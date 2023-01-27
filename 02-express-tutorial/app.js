const { query } = require('express');
const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
	res.send('<h1> Home Page </h1> <a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
	const newProducts = products.map((products) => {
		const { id, name, image } = product;
		return { id, name, image }
	})
	res.json(newProducts);
})
/* Products page */
app.get('/api/products/:productID', (req, res) => {
	// console.log(req);
	// console.log(req.params);
	const { productID } = req.params;

	const singleProduct = products.find(
		(product) => product.id === Number(productID));

	/*if product does not exist */
	if (!singleProduct) {
		return res.status(404).send('The product does not exist');
	}
	return res.json(singleProduct)
})

/* product review page */
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
	console.log(req.params);
})

/* requesting amd recieving queries   */

app.get('/api/v1/query', (req, res) => {
	// console.log(req.query);
	const { search, limit } = req.query;
	let sortedProductes = [...products]; /* filtering through queries */


/* filtering through queries */
	if (search) {
		sortedProductes = sortedProductes.filter((products) => {
			return products.name.startsWith(search);
		})
	}
	if (limit) {
		sortedProductes = sortedProductes.slice(0, Number(limit));
	} if (sortedProductes.length < 1) {
		// res.status(200).send('no product matched your results')
		return res.status(200).json({ sucess: true, data: [] });
	}
	res.status(200).json(sortedProductes);
})

app.listen(2222, (req, res) => {
	console.log('Server is listening on port 2222');
});

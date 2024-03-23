document.addEventListener('DOMContentLoaded', () => {
	const fetchProductsBtn = document.getElementById('fetchBtn')
	const productList = document.getElementById('productList')

	fetchProductsBtn.addEventListener('click', async () => {
		try {
			const response = await fetch('/api/v1/products')
			if (!response.ok) {
				throw new Error('Failed to fetch products')
			}
			const products = await response.json()
			getProducts(products)
		} catch (error) {
			console.error(error)
			productList.innerHTML = 'Failed to fetch products'
		}
	})

	function getProducts(products) {
		productList.innerHTML = ''
		if (products.length < 1) {
			productList.innerHTML = 'No products found'
			return
		}
		const ul = document.createElement('ul')
		products.forEach((product) => {
			const li = document.createElement('li')
			li.textContent = `${product.name} - $${product.price}`
			ul.appendChild(li)
		})
		productList.appendChild(ul)
	}
})

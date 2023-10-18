const fetchProductsButton = document.getElementById('fetchProductsButton');
const productDisplay = document.getElementById('productDisplay');

fetchProductsButton.addEventListener('click', () => {
    // Make a fetch call to the API endpoint
    fetch('/api/v1/products')
        .then(response => response.json())
        .then(products => {
            // Display the products in the productDisplay div
            productDisplay.innerHTML = JSON.stringify(products, null, 2);
        })
        .catch(error => console.error('Error fetching products:', error));
});
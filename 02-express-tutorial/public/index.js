document.addEventListener('DOMContentLoaded', () => {
const fetchButton = document.getElementById('fetchButton');
const productList = document.getElementById('productList');
fetchButton.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/v1/products');
      const data = await response.json();
      displayProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
});

function displayProducts(products) {
    // Clear previous content
    productList.innerHTML = '';

    // Display each product in the div
    products.forEach(product => {
      const productElement = document.createElement('div');
      // const productImg = document.createElement('img');
      // productImg.src = `${product.image}`;

// Setting image attributes
      // productImg.alt = 'Image description';
      // productImg.width = 40;
      // productImg.height = 45;
      
      productElement.textContent = `${product.name} - $${product.price}`;
      // productElement.appendChild(productImg);
      productList.appendChild(productElement);
    });
  }
});
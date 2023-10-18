const button = document.querySelector('#button');
const container = document.querySelector('#container');

const displayProducts = (products) => {
    container.innerHTML = '';
    products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" width="200px"/>
        `;
        container.appendChild(productContainer);
    })
};

const fetchProducts = async () => {
    try {
        let response = await fetch('/api/v1/products');
        let products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.log(error);
    }
};

button.addEventListener('click', fetchProducts);



document.getElementById('fetch').addEventListener('click', () => {
   
    fetch('http://localhost:3000/api/v1/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
       data.forEach(product=> {
         let newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <h1>${product.name}</h1>
        <img src=${product.image} alt=${product.name}>
        <p>${product.desc}</p>
        <h2>${product.price}</h2>
        `
        newDiv.style.border = '2px solid black '
        newDiv.style.margin = '10px'
        newDiv.style.textAlign = 'center'
        document.body.append(newDiv)
       });
        })
        .catch(error => {
            console.error('Error:', error);
            document.body.innerHTML = 'Failed to fetch products.';
        });
})
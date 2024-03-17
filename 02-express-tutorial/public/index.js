document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchButton");
  const productList = document.getElementById("productList");
  fetchButton.addEventListener("click", async () => {
    try {
      const response = await fetch("/api/v1/products");
      const data = await response.json();
      displayProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  });

  function displayProducts(products) {
    // Clear previous content
    productList.innerHTML = "";
    // Display each product in the div
    if (products.length >= 1) {
      products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.textContent = `${product.name} - $${product.price}`;
        productList.appendChild(productElement);
      });
    } else {
      const productElement = document.createElement("div");
      productElement.textContent = "No products details available";
      productList.appendChild(productElement);
    }
  }
});

// productMsg.innerHTML = '';
// if (products.length < 1){
//   const msg = document.createElement('div');
//   productMsg.textContent = "No product available!";
//   msg.appendChild(productMsg);
// }
// Display each product in the div
// console.log(products.length);
// const productImg = document.createElement('img');
// productImg.src = `${product.image}`;

// Setting image attributes
// productImg.alt = 'Image description';
// productImg.width = 40;
// productImg.height = 45;

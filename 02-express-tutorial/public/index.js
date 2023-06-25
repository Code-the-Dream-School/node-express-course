document.getElementById("get-products").addEventListener("click", async () => {
  const response = await fetch("api/v1/products");
  const products = await response.json();
  const productsDiv = document.getElementById("products-list");
  productsDiv.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.textContent = `Product ID: ${product.id}, Product Name: ${product.name}`;
    productsDiv.appendChild(productDiv);
  });
});

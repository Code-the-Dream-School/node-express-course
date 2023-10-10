//exercise 14
const recordProducts = document.getElementById("productsDiv")

const fetchData = async() => {
    const data = await  fetch("/api/v1/products", {
 method: "GET"
 })
 const products = data.json()
 products
 .then((result)=> {
  if(result.length <1) {
  recordProducts.innerHTML = '<h5>No tasks in your list</h5>';
      return;
  }
  const allProducts = result.map((product)=> {
    console.log("product", product.id, product.name)
    return `<ul class="single-product=id">Product ${product.id}

<li class="single-product-name">Product Name: ${product.name}
</li>
<li class="single-product-price">Price: ${product.price}
</li>
 </ul>`
  }).join("")
  recordProducts.innerHTML=allProducts
  console.log(allProducts)
 })
 .catch((error) => {
    console.error("Error:", error);
  });
}
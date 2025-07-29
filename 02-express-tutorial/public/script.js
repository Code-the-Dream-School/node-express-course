document.getElementById("loadBtn").addEventListener("click", () => {
  fetch("/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("productList");
      container.innerHTML = "";

      data.forEach((product) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <img src="${product.image}" alt="${product.name}" width="200" />
            <hr/>
            `;
        container.appendChild(item);
      });
    })

    .catch((err) => {
      console.error("Error:", err);
    });
});

//Button, not working yet

const resultsList = document.getElementById("results-list");
const productsButton = document.getElementById("products-button");

function appendProduct(element) {
  const [name, price, desc] = element;
  const product = document.createElement("li");
  let str = `${name + price + desc}`;
  product.innerHTML = str;
  resultsList?.appendChild(product);
}

productsButton?.addEventListener("submit", () => {
  fetch(`http://localhost:3000/api/v1/products`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    })
    .then((responseJSON) => {
      const responseArray = responseJSON.data;
      console.log(responseArray);
      return responseArray;
    })
    .then((array) => {
      array.forEach(appendProduct);
    })
    .catch((err) => {
      const product = document.createElement("li");
      product.innerHTML = `${err}`;
      resultsList?.appendChild(product);
    });
});
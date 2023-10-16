const dataDiv = document.getElementById("data")
const populate = document.getElementById("populate")

function populateDiv() {
    fetch("http://localhost:3000/api/v1/products")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            dataDiv.innerHTML += `
                <h2>${element.name}</h2>
                <p>${element.desc}</p>
                <h3>${element.price}</h3>
                <img src=${element.image}/>
            `
        });
    })
}

populate.addEventListener("click", populateDiv)


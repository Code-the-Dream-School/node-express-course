async function getData() {
  let url = `http://localhost:3000/api/v1/products`;
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function api() {
  let data = await getData();
  let container = document.querySelector('.container');
  container.innerHTML = JSON.stringify(data);
}

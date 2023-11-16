const form = document.querySelector("#form");
const inputName = document.querySelector("#name-input");
const inputPassword = document.querySelector("#password");
const hello = document.querySelector("#hello");
const errorMsg = document.querySelector("#error");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const name = inputName.value;
  const password = inputPassword.value;
  try {
    const { data } = await axios.post("/api/v1/logon", { name, password });
    console.log(data);
    inputName.value = "";
    inputPassword.value = "";
    localStorage.setItem("token", data.token);
    location.reload();
  } catch (error) {
    localStorage.removeItem("token");
    const errorMessage = document.createElement("p");
    errorMessage.innerHTML = error.response.data.msg;
    errorMsg.appendChild(errorMessage);
    hello.innerHTML = "";
  }
});

const showHello = async () => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.get("/api/v1/hello", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const helloMessage = document.createElement("h1");
    helloMessage.innerHTML = data.msg;
    hello.appendChild(helloMessage);
  } catch (error) {
    const errorMessage = document.createElement("p");
    if (!error.response.data.msg.includes("unauthorized")) {
      errorMessage.innerHTML = error.response.data.msg;
    }
    errorMsg.appendChild(errorMessage);
  }
};

showHello();

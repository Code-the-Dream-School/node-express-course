import {
  inputEnabled,
  setDiv,
  message,
  enableInput,
  setToken,
} from "./index.js";

import { showLoginRegister } from "./loginRegister.js";
import { showJobs } from "./jobs.js";

let registerDiv, name, email1, password1, password2;

export const handleRegister = () => {
  registerDiv = document.getElementById("register-div");
  name = document.getElementById("name");
  email1 = document.getElementById("email1");
  password1 = document.getElementById("password1");
  password2 = document.getElementById("password2");

  const registerButton = document.getElementById("register-button");
  const registerCancel = document.getElementById("register-cancel");

  registerDiv.addEventListener("click", async (e) => {
    if (!inputEnabled || e.target.nodeName !== "BUTTON") return;

    if (e.target === registerButton) {

      if (password1.value !== password2.value) {
        message.textContent = "Passwords do not match.";
        return;
      }

      enableInput(false);

      try {
        const response = await fetch("/api/v1/auth/register", {
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({
            name: name.value,
            email: email1.value,
            password: password1.value,
          }),
        });

        const data = await response.json();

        if (response.status === 201) {
          message.textContent =
            `Registration successful. Welcome ${data.user.name}`;
          setToken(data.token);
          showJobs();
        } else {
          message.textContent = data.msg;
        }

      } catch (err) {
        console.error(err);
        message.textContent = "Communication error.";
      }

      enableInput(true);
    }

    if (e.target === registerCancel) {
      showLoginRegister();
    }
  });
};

export const showRegister = () => {
  setDiv(registerDiv);
};

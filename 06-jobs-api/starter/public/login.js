import {
  inputEnabled,
  setDiv,
  message,
  enableInput,
  setToken,
} from "./index.js";
import { showLoginRegister } from "./loginRegister.js";
import { showJobs } from "./jobs.js";

let loginDiv, email, password;

export const handleLogin = () => {
  loginDiv = document.getElementById("logon-div");
  email = document.getElementById("email");
  password = document.getElementById("password");

  const logonButton = document.getElementById("logon-button");
  const logonCancel = document.getElementById("logon-cancel");

  loginDiv.addEventListener("click", async (e) => {
    if (inputEnabled && e.target.nodeName === "BUTTON") {

      if (e.target === logonButton) {
        enableInput(false);

        try {
          const response = await fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
              email: email.value,
              password: password.value
            })
          });

          const data = await response.json();

          if (response.status === 200) {
            message.textContent =
              `Logon successful. Welcome ${data.user.name}`;
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

      if (e.target === logonCancel) {
        showLoginRegister();
      }
    }
  });
};

export const showLogin = () => {
  email.value = "";
  password.value = "";
  setDiv(loginDiv);
};

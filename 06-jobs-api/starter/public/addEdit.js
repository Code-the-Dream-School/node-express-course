import {
  enableInput,
  inputEnabled,
  message,
  setDiv,
  token,
} from "./index.js";

import { showJobs } from "./jobs.js";

let addEditDiv, company, position, status, addingJob;

export const handleAddEdit = () => {
  addEditDiv = document.getElementById("edit-job");
  company = document.getElementById("company");
  position = document.getElementById("position");
  status = document.getElementById("status");
  addingJob = document.getElementById("adding-job");

  const editCancel = document.getElementById("edit-cancel");

  addEditDiv.addEventListener("click", async (e) => {
    if (!inputEnabled || e.target.nodeName !== "BUTTON") return;

    if (e.target === addingJob) {
      enableInput(false);

      let method = "POST";
      let url = "/api/v1/jobs";

      if (addingJob.textContent === "update") {
        method = "PATCH";
        url = `/api/v1/jobs/${addEditDiv.dataset.id}`;
      }

      try {
        const response = await fetch(url, {
          method,
          headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`,
          },
          body: JSON.stringify({
            company: company.value,
            position: position.value,
            status: status.value,
          }),
        });

        const data = await response.json();

        if (response.status === 200 || response.status === 201) {
          message.textContent =
            response.status === 200
              ? "Job updated."
              : "Job created.";

          showJobs();
        } else {
          message.textContent = data.msg;
        }

      } catch (err) {
        console.error(err);
      }

      enableInput(true);
    }

    if (e.target === editCancel) showJobs();
  });
};

export const showAddEdit = () => {
  setDiv(addEditDiv);
};

import {
  inputEnabled,
  setDiv,
  message,
  setToken,
  token,
  enableInput,
} from "./index.js";

import { showLoginRegister } from "./loginRegister.js";
import { showAddEdit } from "./addEdit.js";

let jobsDiv, jobsTable, jobsTableHeader;

export const handleJobs = () => {
  jobsDiv = document.getElementById("jobs");
  const logoff = document.getElementById("logoff");
  const addJob = document.getElementById("add-job");

  jobsTable = document.getElementById("jobs-table");
  jobsTableHeader = document.getElementById("jobs-table-header");

  jobsDiv.addEventListener("click", (e) => {

    if (!inputEnabled || e.target.nodeName !== "BUTTON") return;

    if (e.target === addJob) showAddEdit(null);

    else if (e.target === logoff) {
      setToken(null);
      message.textContent = "You have been logged off.";
      jobsTable.replaceChildren(jobsTableHeader);
      showLoginRegister();
    }

    else if (e.target.classList.contains("editButton")) {
      showAddEdit(e.target.dataset.id);
    }
  });
};

export const showJobs = async () => {
  try {
    enableInput(false);

    const response = await fetch("/api/v1/jobs", {
      headers: {
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`,
      },
    });

    const data = await response.json();
    let children = [jobsTableHeader];

    if (response.status === 200) {
      data.jobs.forEach(job => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${job.company}</td>
          <td>${job.position}</td>
          <td>${job.status}</td>
          <td><button class="editButton" data-id=${job._id}>edit</button></td>
          <td><button class="deleteButton" data-id=${job._id}>delete</button></td>
        `;

        children.push(row);
      });

      jobsTable.replaceChildren(...children);
    }

  } catch (err) {
    console.error(err);
    message.textContent = "Communication error.";
  }

  enableInput(true);
  setDiv(jobsDiv);
};

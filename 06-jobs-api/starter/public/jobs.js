
async function buildJobsTable(jobsTable, jobsTableHeader, token, message) {
  // section A
  try {
    response = await fetch('/api/v1/jobs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    data = await response.json()
    
    var children = [jobsTableHeader]
    if (response.status === 200) {
        if (data.count === 0) {
            jobsTable.replaceChildren(...children) // clear this for safety
            return 0
        } else {
            for (let i=0;i<data.jobs.length;i++) {
                let editButton = `<td><button type="button" class="editButton" data-id=${data.jobs[i]._id}>edit</button></td>`
                let deleteButton = `<td><button type="button" class="deleteButton" data-id=${data.jobs[i]._id}>delete</button></td>`
                let rowHTML = `<td>${data.jobs[i].company}</td><td>${data.jobs[i].position}</td><td>${data.jobs[i].status}</td>${editButton}${deleteButton}`
                let rowEntry = document.createElement('tr')
                rowEntry.innerHTML = rowHTML
                children.push(rowEntry)
            }
            jobsTable.replaceChildren(...children)
        }
        return data.count
    } else {
        message.textContent = data.msg
        return 0
    }
} catch (err) {

    message.textContent = 'A communication error occurred.'
    return 0
}
  }

document.addEventListener('DOMContentLoaded', () => {
  const logoff = document.getElementById('logoff')
  const message = document.getElementById('message')
  const logonRegister = document.getElementById('logon-register')
  const logon = document.getElementById('logon')
  const register = document.getElementById('register')
  const logonDiv = document.getElementById('logon-div')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const logonButton = document.getElementById('logon-button')
  const logonCancel = document.getElementById('logon-cancel')
  const registerDiv = document.getElementById('register-div')
  const name = document.getElementById('name')
  const email1 = document.getElementById('email1')
  const password1 = document.getElementById('password1')
  const password2 = document.getElementById('password2')
  const registerButton = document.getElementById('register-button')
  const registerCancel = document.getElementById('register-cancel')
  const jobs = document.getElementById('jobs')
  const jobsTable = document.getElementById('jobs-table')
  const jobsTableHeader = document.getElementById('jobs-table-header')
  const addJob = document.getElementById('add-job')
  const editJob = document.getElementById('edit-job')
  const company = document.getElementById('company')
  const position = document.getElementById('position')
  const status = document.getElementById('status')
  const addingJob = document.getElementById('adding-job')
  const jobsMessage = document.getElementById('jobs-message')
  const editCancel = document.getElementById('edit-cancel')

// section 2 
let showing = logonRegister
let token = null
document.addEventListener('startDisplay', async (e) =>{
    showing = logonRegister
    token = localStorage.getItem('token')
    if (token) { //if the user is logged in
        logoff.style.display = "block"
        const count = await buildJobsTable(jobsTable, jobsTableHeader, token, message)
        if (count > 0) {
            jobsMessage.textContent=''
            jobsTable.style.display = "block"
        } else {
            jobsMessage.textContent = "There are no jobs to display for this user."
            jobsTable.style.display = 'none'
        }
        jobs.style.display = "block"
        showing = jobs
    } else {
        logonRegister.style.display = "block"
    }
})

var thisEvent = new Event('startDisplay')
document.dispatchEvent(thisEvent)
var suspendInput = false
// section 3
document.addEventListener('click', async (e) => {
  if (suspendInput) {
      return // we don't want to act on buttons while doing async operations
  }
  if (e.target.nodeName === 'BUTTON') {
      message.textContent = ''
  }
  if (e.target === logoff) {
      localStorage.removeItem('token')
      token = null
      showing.style.display = "none"
      logonRegister.style.display = "block"
      showing = logonRegister
      jobsTable.replaceChildren(jobsTableHeader) // don't want other users to see
      message.textContent = "You are logged off."
  } else if (e.target === logon) {
      showing.style.display = "none"
      logonDiv.style.display = "block"
      showing = logonDiv
  } else if (e.target === register) {
      showing.style.display = "none"
      registerDiv.style.display = "block"
      showing = registerDiv
  } else if (e.target === logonCancel || e.target == registerCancel) {
      showing.style.display = "none"
      logonRegister.style.display = "block"
      showing = logonRegister
      email.value = ''
      password.value = ''
      name.value = ''
      email1.value = ''
      password1.value = ''
      password2.value = ''
  } else if (e.target === logonButton) {
      suspendInput = true
      try {
          response = await fetch('/api/v1/auth/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: email.value, password: password.value })
          })
          data = await response.json()
          if (response.status === 200) {
              message.textContent = `Logon successful.  Welcome ${data.user.name}`
              token = data.token
              localStorage.setItem('token', token)
              showing.style.display="none"
              thisEvent = new Event('startDisplay')
              email.value=''
              password.value=''
              document.dispatchEvent(thisEvent)
          } else {
              message.textContent = data.msg
          }
      } catch (err) {
        
          message.textContent = "A communications error occurred."
      }
      suspendInput = false;
  } else if (e.target === registerButton) {
      if (password1.value != password2.value) {
          message.textContent='The passwords entered do not match.'
      } else {
          suspendInput = true
          try {
              response = await fetch('/api/v1/auth/register', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ name: name.value, email: email1.value, password: password1.value })
              })
              data = await response.json()
              if (response.status === 201) {
                  message.textContent = `Registration successful.  Welcome ${data.user.name}`
                  token = data.token
                  localStorage.setItem('token', token)
                  showing.style.display="none"
                  thisEvent = new Event('startDisplay')
                  document.dispatchEvent(thisEvent)
                  name.value = ''
                  email1.value = ''
                  password1.value = ''
                  password2.value = ''
              } else {
                  message.textContent = data.msg
              }
          } catch (err) {
          
              message.textContent = "A communications error occurred."
          } 
          suspendInput=false
      } 
  }// section 4
  else if (e.target === addJob) {
    showing.style.display = "none"
    editJob.style.display = 'block'
    showing = editJob
    delete editJob.dataset.id
    company.value = ''
    position.value = ''
    status.value = 'pending'
    addingJob.textContent = 'add'
} else if (e.target === editCancel) {
    showing.style.display = 'none'
    company.value = ''
    position.value = ''
    status.value = 'pending'
    thisEvent = new Event('startDisplay')
    document.dispatchEvent(thisEvent)
} else if (e.target === addingJob) {
   
    if (!editJob.dataset.id) {// this is an attempted add
        suspendInput = true
        try {
            response = await fetch('/api/v1/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify( {
                    company: company.value,
                    position: position.value,
                    status: status.value
                })
            })
            
            data = await response.json()
            
            if (response.status === 201) { //successful create
                message.textContent = 'The job entry was created.'
                showing.style.display='none'
                thisEvent = new Event('startDisplay')
                document.dispatchEvent(thisEvent)
                company.value = ''
                position.value = ''
                status.value = 'pending'
            } else { // failure
                
                message.textContent = data.msg 
            }
        } catch (err) {
           
            message.textContent = 'A communication error occurred.'
        }
        suspendInput = false
    } else { // this is an update
        suspendInput = true
        try {
            const jobID = editJob.dataset.id
            response = await fetch(`/api/v1/jobs/${jobID}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify( {
                    company: company.value,
                    position: position.value,
                    status: status.value
                })
            })
            data = await response.json()
            if (response.status === 200) {
                message.textContent = 'The entry was updated.'
                showing.style.display = 'none'
                company.value = ''
                position.value = ''
                status.value = 'pending'
                thisEvent = new Event('startDisplay')
                document.dispatchEvent(thisEvent)
            } else {
                message.textContent = data.msg
            }
        } catch(err) {
            
            message.textContent = 'A communication error occurred.'
        }
    } 
    suspendInput = false 
} // section 5
else if (e.target.classList.contains('editButton')) {
  editJob.dataset.id=e.target.dataset.id
  suspendInput = true
  try {
      response = await fetch(`/api/v1/jobs/${e.target.dataset.id}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }
      })
      data = await response.json()
      if (response.status === 200) {
          company.value = data.job.company
          position.value = data.job.position
          status.value = data.job.status
          showing.style.display = 'none'
          showing = editJob
          showing.style.display = 'block'
          addingJob.textContent = 'update'
          message.textContent = ''
      } else { // might happen if the list has been updated since last display
          message.textContent = 'The jobs entry was not found'
          thisEvent = new Event('startDisplay')
          document.dispatchEvent(thisEvent)
      }
  } catch (err) {
      message.textContent = 'A communications error has occurred.'
  }
  suspendInput = false
}
else if (e.target.classList.contains('editButton')) {
            editJob.dataset.id=e.target.dataset.id
            suspendInput = true
            try {
                response = await fetch(`/api/v1/jobs/${e.target.dataset.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                data = await response.json()
                if (response.status === 200) {
                    company.value = data.job.company
                    position.value = data.job.position
                    status.value = data.job.status
                    showing.style.display = 'none'
                    showing = editJob
                    showing.style.display = 'block'
                    addingJob.textContent = 'update'
                    message.textContent = ''
                } else { // might happen if the list has been updated since last display
                    message.textContent = 'The jobs entry was not found'
                    thisEvent = new Event('startDisplay')
                    document.dispatchEvent(thisEvent)
                }
            } catch (err) {
                message.textContent = 'A communications error has occurred.'
            }
            suspendInput = false
        } 
        else if (e.target.classList.contains('deleteButton')) {
          let deleteJob = e.target.dataset.id
          suspendInput = true
          try {
              response = await fetch(`/api/v1/jobs/${deleteJob}`, {
                  method: 'DELETE',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                  }
              })
              data = await response.json()
              if (response.status === 200) {
                  // showing.style.display = 'none'
                  // showing.style.display = 'block'
                  // addingJob.textContent = 'update'
                  message.textContent = 'job was deleted'
                  var thisEvent = new Event('startDisplay')
                  document.dispatchEvent(thisEvent)
              } else { // might happen if the list has been updated since last display
                  message.textContent = 'The jobs entry was not found'
                  thisEvent = new Event('startDisplay')
                  document.dispatchEvent(thisEvent)
              }
          } catch (err) {
              message.textContent = 'A communications error has occurred.'
          }
          suspendInput = false
      } 
})

})

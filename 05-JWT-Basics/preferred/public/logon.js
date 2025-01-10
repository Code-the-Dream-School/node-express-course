document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('logon').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/api/v1/logon', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, password}),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        document.getElementById('message').textContent = 'Logged in successfully';
      } else {
        document.getElementById('message').textContent = data.message;
      }
    } catch (error) {
      document.getElementById('message').textContent = 'Error logging in';
    }
  });

  document.getElementById('helloButton').addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      document.getElementById('message').textContent = 'No token present';
      return;
    }

    try {
      const response = await fetch('/api/v1/hello', {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
      });

      const data = await response.json();
      if (response.ok) {
        document.getElementById('message').textContent = data.message;
      } else {
        document.getElementById('message').textContent = data.message;
      }
    } catch (error) {
      document.getElementById('message').textContent = 'Error fetching data';
    }
  });
});
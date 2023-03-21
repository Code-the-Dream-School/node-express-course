const http = require('http');

// Previous implimation without using built-in events
// const server = http.createServer((req, res) => {
//   res.end('Welcome');
// });

// Using the Event Emitter API
// server creation the same as the previous implimation(but without passing any arguments)
const server = http.createServer();

// emits request event
server.on('request', (req, res) => {
  res.end('Welcome');
});

// Listen to it
server.listen(5000);
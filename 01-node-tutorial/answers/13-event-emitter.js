// Returns a class
const EventEmitter = require('events');

// Create an instance of the class EventEmitter
const customEmitter = new EventEmitter();

// Useful methods of the instance/object returned-> customEmitter
// First listen to the event->response
customEmitter.on('response', (name, age) => {
  console.log(`data received for user ${name} of age ${age}.`);
});

customEmitter.on('response', () => {
  console.log("waiting for the next user's details");
});

// Then emit it->response
customEmitter.emit('response', 'Jane', 28);
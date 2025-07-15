const EventEmitter = require("events");
const emitter = new EventEmitter();
// Debug: log all event emissions
const originalEmit = emitter.emit;
emitter.emit = function(...args) {
  console.log(`[DEBUG] Emitting event: ${args[0]}`);
  return originalEmit.apply(this, args);
};


// Setting up an event listener for a custom event called "greet"
emitter.on("greet", (name) => {
  console.log(`Hello ${name}! Welcome to Node.js events.`);
});


// Adding a second listener for the same event
emitter.on("greet", (name) => {
  console.log(`Greetings ${name}! This is the second listener.`);
});

// Emitting the greet event
emitter.emit("greet", "Developer");

// Timer example - emitting events repeatedly
setInterval(() => {
  emitter.emit("timer", "hi there");
}, 2000);

emitter.on("timer", (msg) => console.log("Timer event:", msg));

// Advanced example: Converting events to Promises
const EventEmitter2 = require("events");
const emitter2 = new EventEmitter2();

const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter2.on("happens", (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForEvent();
  console.log("We got an event! Here it is: ", msg);
};

doWait();
emitter2.emit("happens", "Hello World!");

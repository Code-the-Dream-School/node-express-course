const EventEmitter = require("events");

// Create an emitter
const emitter = new EventEmitter();

// Set up event handlers
emitter.on("greeting", (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.on("timer", (msg) => {
    console.log(msg);
});

// Emit some events
emitter.emit("greeting", "Tom");
emitter.emit("greeting", "Bob");

// Set up a timer that emits events every 2 seconds
setInterval(() => {
    emitter.emit("timer", "Timer event triggered");
}, 2000);

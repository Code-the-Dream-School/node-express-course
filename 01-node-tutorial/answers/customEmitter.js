const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

customEmitter.on("message", (sender, message) => {
    console.log(`Received a message from ${sender}: ${message}`);
  });

customEmitter.emit("greet", "John");

customEmitter.emit("message", "Alice", "How are you?");
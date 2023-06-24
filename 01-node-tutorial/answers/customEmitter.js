const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("greet", (name) => {
  console.log(`Hello ${name}. What's your favorite scary movie?`);
});

customEmitter.emit("greet", "Bino");

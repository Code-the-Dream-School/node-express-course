const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greeting", (name) => {
  console.log("Welcome", name);
});
setInterval(() => {
  emitter.emit("timer", "hi there");
}, 2000);
emitter.on("timer", (msg) => console.log(msg));

emitter.emit("greeting", "John");

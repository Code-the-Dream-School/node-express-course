const EventEmitter = require("events");

const testEmitter = new EventEmitter();

testEmitter.on("response", () => {
  console.log("This is a response");
});

testEmitter.on("response", () => {
  console.log("This is the next response");
});

testEmitter.emit("response");

testEmitter.on("reminder", (name) => {
  console.log(`You Can Do It ${name}`);
});

setInterval(() => {
  testEmitter.emit("reminder", "Masooma");
}, 2000);

const EventEmitter = require("events");
const emitter = new EventEmitter();

setInterval(() => {
    emitter.emit("eightSeconds");
  }, 8000);
  
emitter.on("eightSeconds", () => {
    console.log("8 seconds have passed.");
  });
  
  
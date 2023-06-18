const EventEmitter = require('events');

const emitter = new EventEmitter();

let counter = 1;

const interval = setInterval(()=> {
  emitter.emit("timer",`hi there, when the number hits a 10, the message will stop -> ${counter}`);
  counter++;

  if (counter > 10) {
    clearInterval(interval)
  }
}, 1000);

emitter.on("timer", (msg) => console.log(msg))
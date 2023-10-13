const EventEmitter = require("events");

const emitter = new EventEmitter();

let i = 1;

// Event handler for 'timer' event
emitter.on("timer", (msg) => {
  console.log("Timer event:", msg);
});

// Emitting 'timer' event every 2 seconds
setInterval(() => {
  if (i <= 10) {
    emitter.emit("timer", `Hi there! : ${i}`);
    i++;
  } else {
    clearInterval(intervalId); 
  }
}, 2000);

// Event handler for 'waitForEvent' event
const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on("waitForEvent", (msg) => resolve(msg));
  });
};

// Event handler for 'happens' event
const doWait = async () => {
  const msg = await waitForEvent();
  console.log("We got an event! Here it is:", msg);
};

doWait();

// Emitting 'waitForEvent' event after a delay
setTimeout(() => {
  emitter.emit("waitForEvent", "Hello, this is a waited event!");
}, 1000);

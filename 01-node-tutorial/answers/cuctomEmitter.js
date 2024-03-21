const EventEmitter = require("events");

// Create a new instance of EventEmitter
const emitter = new EventEmitter();

// Example of triggering events with a timer
setInterval(() => {
    emitter.emit("timer", "hi there");
}, 2000);

//use emitter.on fucntion to handle the events
emitter.on("timer", (msg) => console.log(msg));

const waitForEvent = () => {
    return new Promise((resolve) => {
        emitter.on("happens", (msg) => resolve(msg));
    });
};
const doWait = async () => {
    const msg = await waitForEvent();
    console.log("We got an event! Here it is: ", msg);
};
doWait();

// Emit the "happens" event with a parameter
emitter.emit("happens", "Hello World!");  
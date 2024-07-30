const EventEmitter = require("events");

const emitter = new EventEmitter();

setInterval(() => {
    emitter.emit("timer", "hi there 👋 hope you had a great day.");
}, 2000);

emitter.on("timer", (msg) => console.log(msg));

// or make an async fun that waits on an event:
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
emitter.emit("happens", "Hello");

// one more event
setInterval(() => {
    emitter.emit("timer", "there is another one");
}, 1000)

// one more event with async fun
const waitMyEvent = () => {
    return new Promise((resolve) => {
        emitter.on("happens", (msg) => resolve(msg));
    });
};
const useWait = async () => {
    const msg = await waitMyEvent();
    console.log("Here is another event: ", msg);
}
useWait();
emitter.emit("happens", "Hello my friend");
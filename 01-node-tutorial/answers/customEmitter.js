const EventEmitter = require('events')

const emitter = new EventEmitter()

const waitForEvent = () => {
    return new Promise((resolve) => {
        emitter.on("happens", (msg) => resolve(msg))
    })
}

const doWait = async () => {
    const msg = await waitForEvent()
    console.log("We got an event! Here it is: ", msg)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

setInterval(()=> {
  doWait()
  switch(getRandomInt(3)) {
    case 0: emitter.emit("happens", "Hello World!");
    case 1: emitter.emit("happens", "Hello Alex!");
    case 2: emitter.emit("happens", "Hello Seattle!");
  }
  emitter.emit("timer","hi there")
}, 1000)
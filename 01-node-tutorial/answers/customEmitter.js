const EventEmitter = require('events')

const emitter = new EventEmitter()

setInterval(() => {
    emitter.emit("user","David", "01")
    setInterval(() =>{  
        emitter.on("event" ,"tick")
    }, 10000)
}, 2000);

emitter.on("user",(name,id) => {
    console.log(`Hello ${name}, id: ${id}`)
})
emitter.on("event",(type) => {
    console.log(type)
})

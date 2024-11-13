const EventEmitter = require("events");  
const emitter = new EventEmitter();  


const messageHandler = (msg) =>{
    console.log(msg)
}

setInterval(() => {  
  emitter.emit("timer", "hi there");  
}, 2000);  

emitter.on("timer", messageHandler);  

setTimeout(()=>{
    emitter.removeListener("timer" , messageHandler)
    console.log('stopped')
}, 11000)


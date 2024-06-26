//QUESTION-4
//create a name and require 
const EventEmitter = require("events");  

// const emitter = new EventEmitter();  
// setInterval(() => {  
//   emitter.emit("five-second-timer", "5 second interval");  
// }, 5000);  
// emitter.on("five-second-timer", (msg) => console.log(msg));  

// OR 

const EventEmitter = require("events");  
const emitter = new EventEmitter();  
const eventInWaiting = () => {  
  return new Promise((resolve) => {  
    emitter.on("happens", (msg) => resolve(msg));  
  });  
};  
const doTheEvent = async () => {  
  const msg = await eventInWaiting();  
  console.log("This is an event you have been awaiting for: ", msg);  
};  
doTheEvent();  
emitter.emit("happens", "The greatest emitter-man");  


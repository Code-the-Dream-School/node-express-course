const EventEmitter = require("events");

const emitter = new EventEmitter();

const { readFile } = require("fs").promises;

const readFiles = async() => {
    try{
result1 = await readFile("./temporary/fileA.txt", "utf-8")
result2 = await readFile("./temporary/fileB.txt", "utf-8")
result3 = await readFile("./temporary/temp.txt", "utf-8")
     setTimeout(()=>{
  emitter.emit("result", result3);  
    },2000)
     setTimeout(()=>{
   emitter.emit("result", result2);  
    },1500)
     setTimeout(()=>{
  emitter.emit("result", result1);   
    },1000)

} catch(err) {
    console.log("An error occurred: ", err);
}
} 

emitter.on("result", (msg) => console.log(msg));
readFiles()
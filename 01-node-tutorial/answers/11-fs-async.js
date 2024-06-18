// async method, aka non-blocking with callback
//This is callback hell, will be better way! 

const { readFile, writeFileSync } = require("fs");

console.log("at the start of async callback")

readFile('./temporary/first.txt', 'utf8', (err, result)=>{
  if(err){
    console.log(err)
    return
  }
  console.log(result)
  const first = result;
  //worked 
  readFile('./temporary/second.txt', 'utf8', (err, result) =>{
    if(err){
      console.log(err)
      return
    }
    console.log(result)
    const second = result;
    writeFileSync(
      './temporary/result-async.txt', 
      `Here is the first and second result : ${first}, ${second}`, 
      {flag : 'a'}, (err, result) =>{
        if (err){
          console.log(err)
          return
        }
        console.log('Done with this task')
      }
    )
  })
})

console.log('starting next task');


// 01-node-tutorial/answers/11-fs-async.js
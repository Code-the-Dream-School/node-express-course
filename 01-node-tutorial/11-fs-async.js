const { readFile, writeFile, write, writeFileSync } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')

readFile('./answers/temporary/fileB.txt','utf8',(err,result)=> {
  if(err){
    console.log("The file was not read OH NOO",err)
    return
  }else{
    const firstGrocery = result 
    writeFileSync('./answers/temporary/fileB.txt',"Pizza 10.25$",(err,result)=>{
      if(err){
        console.log(err)
        return 
      }
      console.log("Finnaly wrote the first grocery")
    })
     const secondGrocery = result
      writeFileSync('./answers/temporary/fileB.txt',"Lemons 20.30$",(err,result)=>{
        if(err){
          console.log(err)
          return 
        }
        console.log("Finnaly wrote teh second grocery")
        
      }) 
      const thirdGrocery = result
       writeFileSync('./answers/temporary/fileB.txt',"Potato 20.30$",(err,result)=>{
        if(err){
          console.log(err)
          return 
        }
        console.log("Finnaly wrote teh second grocery")
        
      })  


  }
})
console.log("This is the end")

const { writeFile } = require('fs'); 
console.log("at start");   
writeFile('./temporary/fileB.txt', 'Hello Async\n', {flag:'a'}, (err, result) => {     
  console.log("at point 1")  
  if (err) {           
    console.log("This error happened: ", err);     
  } 
  writeFile('./temporary/fileB.txt', 'Alex\n', {flag:'a'}, (err, result) => {     
    console.log("at point 2")  
    if (err) {           
      console.log("This error happened: ", err);     
    } 
    else {       
      console.log("at point else")
      writeFile('./temporary/fileB.txt', 'Torres\n', {flag:'a'}, (err, result) => {     
        console.log("inside else") })      
    }   
  })
})  
console.log('at end'); 
const { writeFile, readFile } = require('fs').promises

writeFile('../content/thenFile.txt','Line 1')
readFile('../content/thenFile.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        return data
    }
})
.then((data) => {
    console.log(data)
    writeFile('../content/thenFile.txt',`${data} Line 2`)
   return readFile('../content/thenFile.txt',`utf8`,(err,data)=>{
    if (err) {
        console.log(err)
    }else{
        return data
    }
   }) 
})
.then((data)=>{
    console.log(data)
    writeFile('../content/thenFile.txt',`${data} Line 3`)
    return readFile('../content/thenFile.txt',`utf8`,(err,data)=>{
        if (err) {
            console.log(err)
        }else{
            return data
        }
    })
}).then((data)=>{
    console.log(data)
   return readFile('../content/thenFile.txt','utf8',(err,data)=>{
        if (err) {
            console.log(err)
        }else{
            return data
        }
    }
)}).then((data)=>{
    console.log(data)
})
.catch((error) => {
   console.log("An error occurred: ", error)
})
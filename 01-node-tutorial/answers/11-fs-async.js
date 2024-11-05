const fs = require('fs')

fs.writeFile('./temporary/fileB.txt',' first \n second \n third',{ flag: 'a' },(err)=>{
  if (err){
    console.log(err)
  }
  else {
    console.log('written successfully')
    const text = fs.readFileSync('./temporary/fileB.txt', { encoding: 'utf8' })
    console.log(text)
  }
})


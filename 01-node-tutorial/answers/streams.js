const {createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt',
    {highWaterMark:200, 
    encoding: 'utf-8'
});

var counter=0;

stream.on('data', (result) => {
  console.log(result);
  counter++;
})

stream.on('error',(err)=>{
  console.log(err);  
})

stream.on('end', (result) => {
  console.log('number of chunks received:', counter)
})





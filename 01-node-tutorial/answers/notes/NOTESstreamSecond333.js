//same as async 

const {createReadStream} = require('fs');
//highwatermark - deals with size, encoding- avoid buffering
const stream = createReadStream('./temporary/big.txt',{
    highWaterMark: 90000,
    encoding: 'utf8',
});

//reading data in chunks, using and event and the event is data 
//64kb- size 
//we can set up an object 
stream.on('data', (result)=>{
    console.log(result)
})

//error event ex: wrong path 
stream.on('error', (err)=> console.log(err));
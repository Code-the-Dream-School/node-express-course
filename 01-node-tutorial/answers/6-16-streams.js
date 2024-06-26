const {createReadStream} = require('fs');
//highwatermark - deals with size, encoding- avoid buffering
//set watermark to 200 and add encoding with utf8
const stream = createReadStream('./content/big.txt',{
    highWaterMark: 200,
    encoding: 'utf8',
});

//reading data in chunks, using and event and the event is data 
//we can set up an object 
stream.on('data', (result)=>{
    console.log(result)
})

//error event ex: wrong path 
stream.on('error', (err)=> console.log(err));
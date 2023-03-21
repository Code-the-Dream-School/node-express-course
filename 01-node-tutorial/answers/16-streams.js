const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', { 
  highWaterMark: 90000, 
  encoding: 'utf8',
});

// By default the size of each chunk is 64kb
// last buffer is the rmainder of received data
// highWaterMark useful when in need of controlling the size
stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (error) => {
  console.log(error);
});
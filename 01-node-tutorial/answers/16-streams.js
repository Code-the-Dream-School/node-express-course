const fs = require('fs')

const stream = fs.createReadStream('../content/big.txt', {
  encoding: 'utf8',
  highWaterMark: 350
})

stream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

stream.on('end', () => {
  console.log('Finished reading file');
});

stream.on('error', (err) => console.log(err))

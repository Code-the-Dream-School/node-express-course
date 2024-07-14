const { createReadStream } = require('fs');

let counter = 0;

const stream = createReadStream('../content/big.txt', {
  encoding: 'utf8',
  highWaterMark: 200
});

stream.on('data', (result) => {
  console.log(`Chunk #${++counter}`);
  console.log(result);
  console.log();
});
stream.on('end', () => console.log(`Total chunks received: ${counter}`));
stream.on('error', err => console.log(`An error occurred: ${err}`));

const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', {
    encoding: 'utf8',
    highWaterMark: 200
});

let counter = 0;

stream.on('data', (result) => {
    counter++;
    console.log(`Chunk ${counter}:`, result);
});

stream.on('end', () => {
    console.log(`\nStream ended. Total chunks received: ${counter}`);
});

stream.on('error', (error) => {
    console.error('Error reading stream:', error);
});

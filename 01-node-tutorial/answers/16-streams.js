const { createReadStream } = require('fs')

const readStream = createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark: 200 })

let counter = 0
// Handle the "data" event
readStream.on('data', (e) => {
    counter++;
    console.log('Received chunk:', e);
});

// Handle the "end" event
readStream.on('end', () => {
    console.log('Number of chunks received:', counter);
});

// Handle the "error" event
readStream.on('error', (err) => {
    console.error('Error encountered:', err);
});

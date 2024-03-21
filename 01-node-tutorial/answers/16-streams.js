const { createReadStream } = require('fs')
// Adjust the highWaterMark value as needed
const readStream = createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark: 200 })

// Initialize a counter
let counter = 0

// Handle the "data" event for the stream
readStream.on('data', (e) => {
    counter++;
    console.log('Received Event:', e);
});

// Handle the "end" event
readStream.on('end', () => {
    console.log('Number of Events received:', counter);
});

// Handle the "error" event
readStream.on('error', (err) => {
    console.error('Error encountered:', err);
});

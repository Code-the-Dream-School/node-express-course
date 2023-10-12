const fs = require('fs')

// Create a read stream for the big file (../content/big.txt) with encoding "utf8" and a highWaterMark of 200
const readStream = fs.createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark: 200 });

// Initialize a counter to keep track of the number of chunks received
let chunkCount = 0;

// Handle the "data" event to count the chunks
readStream.on('data', (chunk) => {
// Increment the counter for each chunk received
chunkCount++;
});

// Handle the "end" event to report the number of chunks received when the stream ends
readStream.on('end', () => {
console.log('Stream ended. Number of chunks received:', chunkCount);
});

// Handle the "error" event to log any errors to the console
readStream.on('error', (error) => {
console.error('Error:', error.message);
});

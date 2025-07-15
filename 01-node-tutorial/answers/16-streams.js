const { createReadStream } = require('fs');

// Create a read stream for the big file
// highWaterMark determines the size of each chunk in bytes
const stream = createReadStream('../content/big.txt', {
  encoding: 'utf8',
  highWaterMark: 1024
});

// Initialize a counter to track how many chunks we receive
let counter = 0;

// Handle the 'data' event - fires each time we receive a chunk
stream.on('data', (chunk) => {
  counter++;
  console.log(`Received chunk ${counter}, size: ${chunk.length} bytes`);
  console.log('First 50 characters of chunk:', chunk.substring(0, 50) + '...');
  console.log('---');
});

// Handle the 'end' event - fires when all data has been read
stream.on('end', () => {
  console.log(`\nStream ended. Total chunks received: ${counter}`);
});

// Handle the 'error' event - important for robust error handling
stream.on('error', (error) => {
  console.error('An error occurred:', error);
});

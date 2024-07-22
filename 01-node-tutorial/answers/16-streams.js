const fs = require('fs');

const { createReadStream } = require('fs');

const filePath = '../content/big.txt';
const highWaterMark = 200;
const stream = fs.createReadStream(filePath, { encoding: 'utf8', highWaterMark });

let chunkCounter = 0;
stream.on('data', (chunk) => {
    chunkCounter++;
    console.log(`Received chunk ${chunkCounter}:`, chunk);
  });
  stream.on('end', () => {
    console.log(`Stream ended. Total chunks received: ${chunkCounter}`);
  });
  stream.on('error', (error) => {
    console.error('An error occurred:', error);
  });
  
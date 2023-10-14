const  { createReadStream } = require('fs');

let filePath = '../content/big.txt';

const stream = createReadStream(filePath, {
    highWaterMark: 200,
    encoding: 'utf8'
});

let counter = 0;

stream.on('data', (result) => {
    counter++;
    console.log(`${counter} Chunk length: ${result.length} bytes`);
});

stream.on('end', () => {
    console.log('Stream ended. Total chunks received:', counter);
});    

stream.on('error', (err) => console.log(err)) 
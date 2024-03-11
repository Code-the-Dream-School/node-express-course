const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt',{ encoding: 'utf8' }, { highWaterMark: 1000 })

//Initialize a counter to 0
let counter = 0;

// Handling the 'data' event for the stream
stream.on('data', (result) => { 
    //Increment the counter
    counter++;
    console.log(`Received chunt ${counter} : ${result.length} bytes`);
});

stream.on('end', () => {
    // Report the number of chunks received 
    console.log(`Total number of chunks received: ${counter}`);
});

// Handle the 'error' event for the stream 
stream.on('error', (err) => {
    // Log the error to the console
    console.log(err);
});

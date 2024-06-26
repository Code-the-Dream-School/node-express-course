// Writable, Readable, Duplex, Transform 
//Streams advanced topic- examples 
//can use when we read files, if we have a big file, we dont want to just name first and second
//solution, read stream option 

const {writeFileSync} = require('fs');

for(let i=0; i<1000; i++) {
    writeFileSync(
        './temporary/big.txt', 
        `hello world ${i}/n`,
        {flag: 'a'}
     )
}
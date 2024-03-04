const fs = require('fs').promises;

async function writer() {
    try {
        // Write three lines to the file 'temp.txt'
        await fs.writeFile('./temporary/temp.txt', 'This is line 1.\nThis is line 2.\nThis is line 3.\n');
        console.log('File "temp.txt" has been written successfully.');
    } catch (error) {
        // If an error occurs, log the error
        console.error('An error occurred:', error);
    }
}

async function reader() {
    try {
        // Read the contents of the file 'temp.txt'
        const data = await fs.readFile('./temporary/temp.txt', 'utf8');
        // Log the return value to the screen
        console.log('Contents of "temp.txt":', data);
    } catch (error) {
        // If an error occurs, log the error
        console.error('An error occurred:', error);
    }
}

async function readWrite() {
    try {
        // Call the reader and writer functions sequentially
        await reader();
        await writer();
    } catch (error) {
        // If an error occurs, log the error
        console.error('An error occurred:', error);
    }
}

// Call the async function 'readWrite'
readWrite();

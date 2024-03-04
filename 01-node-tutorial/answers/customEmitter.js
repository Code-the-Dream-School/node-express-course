const EventEmitter = require('events');
// Create an instance of EventEmitter
const emitter1 = new EventEmitter();
const emitter2 = new EventEmitter();
const emitter3 = new EventEmitter();

// Event listener for the 'open' event
emitter1.on('open', (filePath) => {
    console.log(`File ${filePath} has been opened.`);
});

// Function to simulate opening a file and emitting the 'open' event
function openFile(filePath) {
    console.log(`Opening file ${filePath}...`);
    // Simulate file opening process
    setTimeout(() => {
        // Emit the 'open' event with the file path
        emitter1.emit('open', filePath);
    }, 2000); // Simulate a delay of 2 seconds
}

// Call the openFile function to simulate opening a file
openFile('./temporary/temp.txt');

emitter2.on('calculateSquare', (num) => {
    console.log(`Event 2 - Square of ${num} is:`, num * num);
});

emitter2.emit('calculateSquare', 5);

emitter3.on('capitalizeString', (str) => {
    console.log('Event 3 - Capitalized string:', str.toUpperCase());
});
emitter3.emit('capitalizeString', 'hello world');

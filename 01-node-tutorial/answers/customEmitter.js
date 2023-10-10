const EventEmitter = require('events');

const stringEmitter = new EventEmitter();
const statusEmitter = new EventEmitter();
const errorEmitter = new EventEmitter();

setInterval(()=> {
    stringEmitter.emit('string', 'The string is emitted');
}, 2000);

setInterval(()=> {
    stringEmitter.emit('string', 'This string contains the word "error"');
}, 5000);

stringEmitter.on('string', string => {
    console.log(string)
    if(string.includes('error')){
        errorEmitter.emit('error', new Error('Oops! An error occured.'));
    } else {
        statusEmitter.emit('logStatus', { code: 200, msg: string });
    }
});

statusEmitter.on('logStatus', logStatus => {
    console.log(logStatus)
});

errorEmitter.on('error', error => {
    console.log(error.message)
});

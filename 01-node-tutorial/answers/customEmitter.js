const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// customEmitter.on('response', () => {
//     console.log('The data received successfully!')
// })

// customEmitter.emit('response');

setInterval(() => {
    customEmitter.emit('timer', 'You made it!')
}, 3000)

customEmitter.on('timer', (msg) => console.log(msg))
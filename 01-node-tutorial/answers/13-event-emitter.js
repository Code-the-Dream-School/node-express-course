const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data recieved ${name} with id ${id}`)
})

customEmitter.on('response', () => {
    console.log(`other logic`)
})

customEmitter.emit('response', 'shy', 34)
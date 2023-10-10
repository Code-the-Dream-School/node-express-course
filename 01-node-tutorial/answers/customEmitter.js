const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('firstEvent', () => {
    console.log(`This is the first message`)
    customEmitter.emit('secondEvent', `Hello World`)
})
customEmitter.on('secondEvent', (msg) => {
    console.log(`This is the second message : ${msg}`)
})
customEmitter.emit('firstEvent')


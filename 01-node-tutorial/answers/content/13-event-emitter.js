const EventEmitter = require('events')

const customEmitter = new EventEmitter()
// order matters
// can have multiple methods
customEmitter.on('response',(username, userID)=> {
    console.log(`data collected on user ${username}. ID of user is ${userID}.`)
})

customEmitter.on('response',()=> {
    console.log(`additional data collected`)
})

customEmitter.emit('response', 'william', 47)
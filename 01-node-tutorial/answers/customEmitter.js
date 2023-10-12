// create a program named customEmitter.js
const EventEmitter = require("events");

// use the emitter .on function to handle the events you will emit, logging the parameters to the screen.

// event emitter instance
const emitter = new EventEmitter();

// event handler to handle events that will be emitted
emitter.on('FirstEvent', function (data){
    console.log('First subscriber: ' + data);
});

emitter.emit('FirstEvent', 'This is my first Node.js event emitter example.');

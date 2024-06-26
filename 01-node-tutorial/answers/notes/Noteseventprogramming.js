//create a name and require 
const EventEmitter = require('events');
//the instance of our class on(listen for event) emit(emit an event)
const customEmitter = new EventEmitter()

//ORDER MATTERS!! - first listen 'on' then 'emit'
//word response needs to match 
customEmitter.on('response', (name, id)=>{
    console.log(`data recieved name: ${name} with id: ${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`other logic here`)
})

//THIS HAS TO BE AT THE END 
//can have as many methods/function listing for the event and doing some other logic as you want
//can add arguements to this 
//arguments can be in one but in not all 
//events are KEY to node - built in modules rely on these 
customEmitter.emit('response', 'john', 34)
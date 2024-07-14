const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('greet', (name, date) => {
  const hours = date.getHours();
  if (hours >= 5 && hours < 12) {
    console.log(`Good morning, ${name}!`);
  } else if (hours >= 12 && hours <= 18) {
    console.log(`Good afternoon, ${name}!`);
  } else {
    console.log(`Good evening, ${name}!`);
  }
});

customEmitter.on('hello', (num) => {
  for (let i = 0; i < num; i++) {
    console.log('Hello World!');
  }
});

customEmitter.emit('greet', 'John', new Date());
customEmitter.emit('greet', 'Mary', new Date());
customEmitter.emit('hello', 5);

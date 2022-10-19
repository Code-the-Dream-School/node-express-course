// const secret = 'secret content'
// const peter = "Peter";
// const grover = "Grover";

// const sayHello = (name) => {
//   console.log(`Hello there ${name}`);
// };

// sayHello("Annabeth");
// sayHello(peter);
// sayHello(grover);

// example of local usecase above.


// every file by default is a module
// typically start with ./ when navigating to a path with require. In this case of nested folders use ../
const names = require("../content/04-names");
const sayHello = require("../content/05-utils");
const data06 = require("../content/06-alternative-flavor");
// console.log(data06)

// sayHello("Annabeth");
// sayHello(names.percy);
// sayHello(names.grover);

// importing modules also invokes it 
const addedValues = require("../content/07-mind-grenade");
console.log(addedValues)
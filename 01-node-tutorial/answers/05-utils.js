//THIS IS A MODULE EXAMPLE 

//write a function to be used in another file 
const posWords = (name) => {
    console.log(`You got this ${name}, keep up the good work!!`);
}


//test that it works 
// posWords('holly'); 

module.exports = posWords
//export function 


//This was the original 
// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
//   }
//   // export default
//   module.exports = sayHi
  

//path node 01-node-tutorial/answers/05-utils.js
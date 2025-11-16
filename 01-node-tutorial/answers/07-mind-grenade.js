//require('./07-mind-grenade') runs the entire module immediately when Node encounters that line, even if you don’t assign it to a variable.

const num1 = 3
const num2 = 12

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

addValues()
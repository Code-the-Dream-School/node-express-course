// require the sentence variable from practice 2
let first = require('./practice2');

// require the os module
let os = require('os');

// require the fs module writeFile method
let { writeFile } = require('fs');

// get the username info
const userName = os.userInfo().username;

// create a file ./content/practice.txt asynchronously
writeFile('./content/practice.txt', 
`We are ${first.sentence} with ${userName}.`, 
(err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});



const sentence = require("./practice2")
const os = require('os')
const fs = require('fs')

const user = os.userInfo().username;
console.log(user)
fs.writeFile('./content/practice.txt', sentence, (err, complete) => {
  if (err) console.log(err.message);
  console.log('its working');
  console.log(complete);
  fs.writeFile('./content/practice.txt', `testing ${user}`, {flag: "a"}, (err, complete) => {
    if (err) console.log(err.message);
  })
});



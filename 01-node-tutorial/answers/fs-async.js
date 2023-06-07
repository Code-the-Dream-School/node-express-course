// 7) fs-async.js
const { writeFile } = require('fs');

console.log("At start");

writeFile('CTD Class (HTML, CSS, JavaScript)/Node/node-express-course/01-node-tutorial/content/first.txt', 'utf8', (err) => {
  if (err) {
    console.log("An error occurred: ", err);
  } else {
    writeFile('CTD Class (HTML, CSS, JavaScript)/Node/node-express-course/01-node-tutorial/content/second.txt', 'utf8', { flag: 'a' }, (err) => {
      if (err) {
        console.log("An error occurred: ", err);
      } else {
        writeFile('CTD Class (HTML, CSS, JavaScript)/Node/node-express-course/01-node-tutorial/content/result-async.txt', 'utf8', { flag: 'a' }, (err) => {
          if (err) {
            console.log("An error occurred: ", err);
          } else {
            console.log("All lines written successfully!");
          }
        });
      }
    });
  }
});

console.log('At end');


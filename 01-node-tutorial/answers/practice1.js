const fs = require("fs");
// const os = require("os");

fs.writeFile("./answers/practice.txt");
console.log("File written!!");

fs.readFile("./answers/practice2.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
  }
});

console.log("Reading file!");

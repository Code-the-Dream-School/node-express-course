const { writeFile } = require("fs");
console.log("at start");

writeFile(
  "./temporary/output.txt",
  "here is a text from 11-fs-async.js file",
  (err, result) => {
    console.log("at point 1");
    if (err) {
      console.log("this error happened: ", err);
    } else {
      console.log("Appending flag", { flag: "a" });
    }
  }
);
console.log("at end");

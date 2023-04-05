const { writeFile } = require("fs");
const os = require("os");

const sent01 = require("../answers/practice2.js");
console.log(sent01.sentence01);

const userINFO = os.userInfo().username;

const content = sent01.sentence01 + userINFO;

writeFile(
  "01-node-tutorial/answers/content/practice.txt",
  content,

  (err) => {
    console.log(err);
  }
);

// Test for code
// const os = require("os");

// try {
//   console.log(os.userInfo());
// } catch (err) {
//   console.log(": error occurred" + err);
// }

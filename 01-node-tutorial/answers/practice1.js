const { writeFile } = require("fs");
const sentence = require("./Practice2");
const os = require("os");

writeFile(
  "./content/practice.txt",
  `${sentence} ${os.userInfo().username}`,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`done`);
    }
  }
);

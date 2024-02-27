const { readFileSync, writeFileSync } = require("fs");

writeFileSync(
  "./temporary/fileA.txt",
  "I need some coffee\nI need some sleep\nI need a vacation\n",
  { flag: "a" }
);

const read = readFileSync("./temporary/fileA.txt", "utf8");
console.log(read);

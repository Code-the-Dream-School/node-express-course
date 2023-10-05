const { readFileSync, writeFileSync } = require("fs");

writeFileSync("./temporary/fileA.txt", "I enjoy learning Node\n", {
  flag: "a",
});
const readFile = readFileSync("./temporary/fileA.txt", "utf-8");
console.log(readFile);

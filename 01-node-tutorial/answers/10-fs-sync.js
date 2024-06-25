const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./temporary/first.txt", "utf8");
const second = readFileSync("./temporary/second.txt", "utf8");

writeFileSync(
  "./temporary/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

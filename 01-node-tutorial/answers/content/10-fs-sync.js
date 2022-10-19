const { readFileSync, writeFileSync } = require("fs");
console.log('begin')

const first = readFileSync("../content/subfolder/first.txt", "utf8");
const second = readFileSync("../content/subfolder/second.txt", "utf8");

// console.log(first, second);

// if the file is not already existing in the desired path. it will be created upon execution
writeFileSync(
  "../content/subfolder/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log('Task complete')
console.log('initiating next task')

// can lead to slow processing as it waits for the previous task to finish
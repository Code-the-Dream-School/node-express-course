const { readFileSync, writeFileSync } = require("fs");

writeFileSync("./temporary/fileA.txt", `This is the First Line. `);
writeFileSync("./temporary/fileA.txt", `This is the Second Line. `, {
  flag: "a",
});
writeFileSync("./temporary/fileA.txt", `This is the Third Line. `, {
  flag: "a",
});

const readSync = readFileSync('./temporary/fileA.txt', 'utf8')

console.log(readSync);
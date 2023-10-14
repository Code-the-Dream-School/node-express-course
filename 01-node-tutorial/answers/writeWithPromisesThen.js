const { readFile, writeFile } = require("fs").promises;

const filePath = "./temporary/temp.txt";

const first = "./content/first.txt";
const second = "./content/second.txt";
const third = "./content/third.txt";

writeFile(filePath, "THE RESULT: \n")
  .then(() => readFile(first, "utf-8"))
  .then((first) => writeFile(filePath, `${first}\n`, { flag: "a" }))
  .then(() => readFile(second, "utf-8"))
  .then((second) => writeFile(filePath, `${second}\n`, { flag: "a" }))
  .then(() => readFile(third, "utf-8"))
  .then((third) => writeFile(filePath, `${third}\n`, { flag: "a" }))
  .then(() => readFile(filePath, "utf-8"))
  .then((data) => {
    console.log("Content of temp.txt:", data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });

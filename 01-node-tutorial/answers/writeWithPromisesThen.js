const { readFile, writeFile } = require("fs").promises;

writeFile("./temp.txt", "this is the first line\n", { flag: "a" })
  .then(() => {
    return writeFile("./temp.txt", "this is the second line\n", { flag: "a" });
  })
  .then(() => {
    return writeFile("./temp.txt", "this is the third line", { flag: "a" });
  })
  .then(() => {
    return readFile("./temp.txt", "utf-8");
  })
  .then((data) => {
    console.log("result from reading: ", data);
  })
  .catch((err) => {
    console.log("An error acuured: ", err);
  });

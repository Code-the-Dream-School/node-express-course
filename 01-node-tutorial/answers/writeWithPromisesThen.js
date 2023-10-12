const { writeFile, readFile } = require("fs").promises;

const filePath = "./temporary/temp.txt";

writeFile(filePath, "Line 1\n", { flag: "a" })
  .then(() => {
    console.log("first then");
    return writeFile(filePath, "line 2\n", { flag: "a" });
  })
  .then(() => {
    console.log("second then");
    return writeFile(filePath, "line 3\n", { flag: "a" });
  })
  .then(() => {
    console.log("third then");
    return readFile(filePath, "utf-8");
  })
  .then((data) => {
    console.log("forth then");
    console.log("File content read from 'temp.txt':\n", data);
  })
  .catch((error) => {
    console.log("An error accured: ", error);
  });

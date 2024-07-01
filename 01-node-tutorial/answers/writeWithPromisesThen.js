const { writeFile, readFile } = require("fs").promises;
const destination = "./temporary/file.txt";

writeFile(destination, `This is the First Line A. `) // write line 1
  .then(() => {
    return writeFile(destination, `This is the Second Line B. `, {
      flag: "a",
    });
  }) // write line 2.
  // Return the promise so you can chain the .then statements
  .then(() => {
    return writeFile(destination, `This is the Third Line C. `, {
      flag: "a",
    });
  })
  // write the third line, and follow that with two more .then blocks,
  // one to call readFile to read it back out, and one to log the data to the screen.
  .then(() => {
    const str = readFile(destination, "utf8");
    return str;
  })
  .then((str) => {
    console.log(str);
  })
  .catch((error) => {
    console.log("Oops! An error occurred: ", error);
  });

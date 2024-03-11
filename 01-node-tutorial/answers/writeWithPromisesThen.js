const { writeFile, readFile } = require("fs").promises;

writeFile("./temporary/temp.txt", `This is line 1.\n`, { flag: "a" }) // write line 1
  .then(() => {
    // write line 2.
    return writeFile("./temporary/temp.txt", `This is line 2.\n`, {
      flag: "a",
    });
    // Return the promise so you can chain the .then statements
  })
  .then(() => {
    // write line 3.
    return writeFile("./temporary/temp.txt", `This is line 3.\n`, {
      flag: "a",
    });
  })
  .then(() => {
    // write line 4.
    return writeFile("./temporary/temp.txt", `This is line 4.\n`, {
      flag: "a",
    });
  })
  .then(() => {
    // write line 5.
    return writeFile("./temporary/temp.txt", `This is line 5.\n`, {
      flag: "a",
    });
  })
  // one to call readFile to read it back out, and one to log the data to the screen.
  .then(() => {
    return readFile("./temporary/temp.txt", "utf8");
  })
  .then((result) => {
    console.log("Contents of 'temp.txt':");
    console.log(result);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });

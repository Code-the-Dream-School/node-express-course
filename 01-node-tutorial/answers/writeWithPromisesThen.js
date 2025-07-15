const { writeFile, readFile } = require("fs").promises;

// Using promise chains with .then()
writeFile("temp.txt", "Line 1 from promises\n")
  .then(() => {
    console.log("Wrote first line");
    return writeFile("temp.txt", "Line 2 from promises\n", { flag: "a" });
  })
  .then(() => {
    console.log("Wrote second line");
    return writeFile("temp.txt", "Line 3 from promises\n", { flag: "a" });
  })
  .then(() => {
    console.log("Wrote third line");
    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    console.log("Read complete. File contents:");
    console.log(data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });

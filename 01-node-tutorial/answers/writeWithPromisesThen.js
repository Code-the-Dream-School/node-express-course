const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "My name is Tooba")
  .then(() => {
    return writeFile("temp.txt", "My pet is mithu");
  })
  .then(() => {
    return writeFile("temp.txt", "I like mountains");
  })
  .then(() => {
    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    console.log("Contents of 'temp.txt':\n", data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });
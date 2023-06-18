const { writeFile, readFile } = require('fs').promises

writeFile("./randomFile.txt", "Then -> ")
  .then(() => {
    return writeFile("./randomFile.txt", "Hello World", {flag: 'a'});
  })
  .then(() => {
    return readFile("./randomFile.txt", "utf-8");
  })
  .then((content) => {
    console.log("Details:", content)
  });


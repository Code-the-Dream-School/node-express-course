const { writeFile, readFile } = require("fs").promises;

writeFile("./temporary/temp.txt", "This is line 1\n")
  .then(() => {
    return writeFile("./temporary/temp.txt", "This is line 2\n", { flag: "a" });
  })
  .then(() => {
    return writeFile("./temporary/temp.txt", "This is line 3\n", { flag: "a" });
  })
  .then(() => {
    return readFile("./temporary/temp.txt", "utf8");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("An error occurred: ", err);
  });

  setTimeout(() => {
    console.log("Done!")
  }, 1000);
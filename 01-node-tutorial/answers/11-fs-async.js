const { writeFile } = require("fs");
console.log("at start");

writeFile("./temporary/fileB.txt", "This is line 1\n", (err) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
    return;
  } else {
    console.log("Done with this task")
  }

  writeFile("./temporary/fileB.txt", "This is line 2\n", { flag: 'a' }, (err) => {
    console.log("at point 2");
    if (err) {
      console.log("This error happened: ", err);
      return;
    } else {
      console.log("Done with this task")
    }

    writeFile("./temporary/fileB.txt", "This is line 3\n", { flag: 'a' }, (err) => {
      console.log("at point 3");
      if (err) {
        console.log("This error happened: ", err);
      } else {
        console.log("Done with this task")
      }
    });
  });
});

console.log("at end");
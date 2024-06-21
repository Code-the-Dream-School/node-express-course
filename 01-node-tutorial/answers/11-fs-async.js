const { writeFile } = require("fs");

console.log("starting here");

writeFile(
  "./temporary/fileB.txt",
  "This is line 1\n",
  { flag: "a" },
  (err, result) => {
    console.log("at point 1");
    if (err) {
      console.log("This error happened: ", err);
    } else {
      writeFile(
        "./temporary/fileB.txt",
        "This is line 2\n",
        { flag: "a" },
        (err, result) => {
          console.log("at point 2");
          if (err) {
            console.log("This error happened: ", err);
          } else {
            writeFile(
              "./temporary/fileB.txt",
              "This is line 3\n",
              { flag: "a" },
              (err, result) => {
                console.log("at point 3");
                if (err) {
                  console.log("This error happened: ", err);
                }
              }
            );
          }
        }
      );
    }
  }
);
console.log("at end");

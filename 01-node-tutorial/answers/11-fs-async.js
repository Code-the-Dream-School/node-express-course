const { writeFile } = require("fs");
console.log("Code starts here");
writeFile(
  "./temporary/fileB.txt",
  "This is the first line\n",
  { flag: "a" },
  (err, result) => {
    if (err) {
      console.log("An error happened");
      return;
    } else {
      console.log("now start writing");
      writeFile(
        "./temporary/fileB.txt",
        "This is the second line\n",
        { flag: "a" },
        (err, result) => {
          if (err) {
            console.log("An error happened");
            return;
          } else {
            writeFile(
              "./temporary/fileB.txt",
              "This is the third line\n",
              { flag: "a" },
              (err, result) => {
                if (err) {
                  console.log("An error happened");
                  return;
                }
                console.log("end writing");
              }
            );
          }
        }
      );
    }
  }
);
console.log("End");

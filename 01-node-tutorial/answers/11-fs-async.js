const { writeFile } = require("fs");

console.log("at start");
writeFile(
  "./temporary/fileB.txt",
  "This is line 1\n",
  { flag: "a" },
  (err, result) => {
    if (err) {
      console.log("This error happened: ", err);
    }
    console.log("line 1 written");
    writeFile(
      "./temporary/fileB.txt",
      "This is line2\n",
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log("This error happened: ", err);
        }
        console.log("line 2 written");
        writeFile(
          "./temporary/fileB.txt",
          "This is line3\n",
          { flag: "a" },
          (err, result) => {
            if (err) {
              console.log("This error happened: ", err);
            }
            console.log("line3 written");
          }
        );
      }
    );
  }
);
console.log("at end");

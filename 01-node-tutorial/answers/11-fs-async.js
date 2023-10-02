const { readFile, writeFile } = require("fs");

const filePath = "./temporary/fileB.txt";

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    readFile("./content/third.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      const third = result;

      writeFile(filePath, `Here is the result:\n${first}\n`, (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        writeFile(filePath, `${second}\n`, { flag: "a" }, (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          writeFile(filePath, `${third}\n`, { flag: "a" }, (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
          });
        });

        console.log(result);
      });
    });
  });
});

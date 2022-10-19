const { readFile, writeFile } = require("fs");
console.log('begin')

// must add language code or utf8 to prevent a buffer being created
readFile("../content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  const first = result;
  readFile("../content/subfolder/second.txt", "utf8", () => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "../content/subfolder/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log('Task complete')

      }
    );
  });
});
console.log('initiating next task')
// callback hell approach with async.....
// allows tasks to be offloaded so that the next one can begin
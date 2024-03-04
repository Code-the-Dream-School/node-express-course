const { createReadStream } = require("fs");

let counter = 0;
let done = false;

const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});

stream.on("data", (result) => {
  counter++;
  console.log(result);
});
stream.on("error", (err) => console.log(err));
stream.on("end", () => {
  console.log("Done reading the file. Total chunks read: " + counter);
  done = true;
});

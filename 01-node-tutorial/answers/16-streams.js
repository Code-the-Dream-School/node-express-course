const { createReadStream } = require("fs");

let counter = 0;

const stream = createReadStream("../content/big.txt", {
  highWaterMark: 200,
  encoding: "utf8",
});

stream.on("data", (result) => {
  counter++;
  console.log(`Received chunk: ${counter}`);
});

stream.on("end", () => {
  console.log(`Received a total of ${counter} chunks.`);
});

stream.on("error", (err) => {
  console.log(err);
});

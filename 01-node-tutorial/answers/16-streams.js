const { createReadStream } = require("fs");

let counter = 0;

const stream = createReadStream(
  "../content/big.txt",
  { encoding: "utf8" },
  { highWaterMark: 200 }
);
stream.on("data", (result) => {
  counter++;
  console.log(result);
});
stream.on("end", () => {
  console.log(`Received a total of ${counter} chunks.`);
});
stream.on("error", (err) => {
  console.log(err);
});

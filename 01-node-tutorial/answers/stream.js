const fs = require("fs");

function createReadStream(highWaterMark) {
  try {
    let counter = 0;
    const readStream = fs.createReadStream("../content/big.txt", {
      encoding: "utf8",
      highWaterMark: highWaterMark,
    });

    readStream.on("data", (chunk) => {
      counter++;
      console.log(`Received ${chunk.length} bytes of data.`);
      console.log(chunk);
    });

    readStream.on("end", () => {
      console.log(`End of file. Received ${counter} chunks.`);
    });

    readStream.on("error", (err) => {
      console.error(`An error occurred: ${err.message}`);
    });
  } catch (err) {
    console.error(`An error occurred during stream creation: ${err.message}`);
  }
}

createReadStream(200);
createReadStream(500);
createReadStream(1000);

const { createReadStream } = require("fs");
const path = require("path");

// Create the path to the big file
const filePath = path.join(__dirname, "../content/big.txt");

// Create the read stream with encoding and highWaterMark
const stream = createReadStream(filePath, {
    encoding: "utf8",
    highWaterMark: 200   // You will change this number to test later
});

let counter = 0;

// Handle data event
stream.on("data", (chunk) => {
    counter++;
    console.log(`Chunk #${counter}:`);
    console.log(chunk);
    console.log("--------------------------------------------------");
});

// Handle end event
stream.on("end", () => {
    console.log(`\nFinished reading file.`);
    console.log(`Total chunks received: ${counter}`);
});

// Handle error event
stream.on("error", (err) => {
    console.error("Error:", err);
});

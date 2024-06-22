const { createReadStream } = require(`fs`);
const chunks = [];
const stream = createReadStream(`../content/big.txt`, {
  highWaterMark: 200,
  encoding: "utf8",
});

stream.on(`data`, (result) => {
  //read data, console log, push to chunks array
  console.log(result, result.length);
  chunks.push(`n`);
});
stream.on(`end`, () => {
  //at end console log length of chunks array
  console.log(`${chunks.length} chunks received.`);
});
stream.on(`error`, (err) => {
  //console log error if any
  console.error(`Oops! There was an error: ${err}`);
});

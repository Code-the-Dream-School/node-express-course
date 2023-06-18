const { writeFile, readFile } = require('fs').promises

const writer = async() => {
  try {
    //append the data
    await writeFile("./randomFile.txt", "number 1", {flag: 'a'});
    console.log("Complete 1 - Write");
  } catch (error) {
    console.log("Writing error occured");
  }
};

const reader = async() => {
  try {
    const info = await readFile("./randomFile.txt");
    console.log("Complete 2 - Read");
    
  } catch (error) {
    console.log("Reading error occured");
  }
};

const readWrite = async() => {
  await writer();
  await reader();
};

readWrite()
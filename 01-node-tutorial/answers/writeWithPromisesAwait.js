const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile("./temporary/temp.txt", "Line 1\nLine 2\nLine 3");
  } catch (err) {
    console.log("This error happened", err);
  }
};

const reader = async () => {
  const result = await readFile("./temporary/temp.txt", "utf8");
  console.log(result);
};

const readWrite = async () => {
  await writer();
  await reader();
};

readWrite();

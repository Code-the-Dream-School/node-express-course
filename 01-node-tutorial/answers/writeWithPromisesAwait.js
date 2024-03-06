const { readFile, writeFile } = require("fs").promises;

const writer = async () => {
  try {
    result = await writeFile(
      "./temp.txt",
      "Javascript is fun\nI like Javascript\nI keep practicing"
    );
  } catch (err) {
    console.log("An error accured: ", err);
  }
};

const reader = async () => {
  try {
    read = await readFile("./temp.txt", "utf8");
    console.log("Here is the reading from file: ", read);
  } catch (err) {
    console.log("An error accured: ", err);
  }
};

const readWrite = async () => {
  await writer();
  await reader();
};

readWrite();

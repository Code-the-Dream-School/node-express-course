const { writeFile, readFile } = require("fs").promises;

const filePath = "./temporary/temp.txt";

const writer = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    const third = await readFile("./content/third.txt", "utf8");
    await writeFile(
        filePath,
        `THE RESULT:\n ${first}\n ${second}\n ${third}`,
        { flag: "a" }
    );
    console.log("File 'temp.txt' has been created");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
};

const reader = async () => {
  try {
    const data = await readFile(filePath, "utf-8");
    console.log("Content of temp.txt:", data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch (error) {
    console.error("Error:", error);
  }
};

readWrite();

const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile("./temporary/temp.txt", "This is line 1\n");
    await writeFile("./temporary/temp.txt", "This is line 2\n", { flag: "a" });
    await writeFile("./temporary/temp.txt", "This is line 3\n", { flag: "a" });
  } catch (err) {
    console.log("An error occured: ", err);
  }
};

const reader = async () => {
  try {
    let result = await readFile('./temporary/temp.txt', 'utf8');
    console.log(result);
  } catch (err) {
    console.log("An error occured: ", err);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch (err) {
    console.log("An error occured: ", err);
  }
};

readWrite();
const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile("./writtenFile.txt", "Hi there!\n", {
      encoding: "utf8",
      flag: "w",
    });
  } catch (error) {
    console.log(error);
  }

  try {
    await writeFile("./writtenFile.txt", "Second line\n", {
      encoding: "utf8",
      flag: "a",
    });
  } catch (error) {
    console.log(error);
  }

  try {
    await writeFile("./writtenFile.txt", "Line Number 3", {
      encoding: "utf8",
      flag: "a",
    });
  } catch (error) {
    console.log(error);
  }
}

async function reader() {
  try {
    const data = await readFile("./writtenFile.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log("Error: " + error);
  }
}

writer().then(() => reader());

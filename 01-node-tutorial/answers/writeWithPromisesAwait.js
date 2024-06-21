const { writeFile, readFile } = require("fs").promises;

console.log("point 1");

async function writer() {
  try {
    const writeA = await writeFile(
      "./temporary/file.txt",
      `This is the First Line. `
    );
    const writeB = await writeFile(
      "./temporary/file.txt",
      `This is the Second Line. `,
      {
        flag: "a",
      }
    );
    const writeC = await writeFile(
      "./temporary/file.txt",
      `This is the Third Line. `,
      {
        flag: "a",
      }
    );
    console.log(writeA, "written");
    console.log(writeB, "written");
    console.log(writeC, "written");
  } catch (error) {
    console.log("Something Went Wrong : ", error);
  }
}

console.log("point 2");

async function reader() {
  try {
    const str = await readFile;
    console.log(str);
  } catch (error) {
    console.log("Something Went Wrong : ", error);
  }
}

console.log("point 3");

async function readWrite() {
  try {
    await reader;
    await writer;
  } catch (error) {
    console.log("Something Went Wrong : ", error);
  }
}

console.log("point 4");

readWrite();

console.log("point 5");
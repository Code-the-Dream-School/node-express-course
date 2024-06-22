const { writeFile, readFile } = require("fs").promises;
const destination = "./temporary/file.txt";

async function writer() {
  try {
    await writeFile(
      destination,
      `This is the First Line. `
    );
    await writeFile(
      destination,
      `This is the Second Line. `,
      {
        flag: "a",
      }
    );
    await writeFile(
      destination,
      `This is the Third Line. `,
      {
        flag: "a",
      }
    );
  } catch (error) {
    console.log("Something Went Wrong : ", error);
  }
}

async function reader(inputFile) {
  try {
    const str = await readFile(inputFile, 'utf8');
    console.log(str);
  } catch (error) {
    console.log("Something Went Wrong : ", error);
  }
}


async function readWrite(inputFile) {
  try {
    await writer();
    await reader(inputFile);
  } catch (error) {
    console.log("Something Went Wrong : ", error);
  }
}

readWrite(destination);
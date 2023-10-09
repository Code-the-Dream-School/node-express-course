const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile("temp.txt", "My name is Tooba\nMy pet is mithu\nI like mountains");
  } catch (error) {
    console.error("Error writing to 'temp.txt':", error);
  }
}

async function reader() {
  try {
    const data = await readFile("temp.txt", "utf8");
  } catch (error) {
    console.error("Error reading 'temp.txt':", error);
  }
}

async function readWrite() {
  await writer();
  await reader();
}

readWrite(); 


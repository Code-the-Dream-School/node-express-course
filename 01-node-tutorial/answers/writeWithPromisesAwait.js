const { writeFile, readFile } = require("fs").promises;

// Writer function - writes three lines to temp.txt
const writer = async () => {
  try {
    await writeFile("temp.txt", "First line of text\n");
    await writeFile("temp.txt", "Second line of text\n", { flag: "a" });
    await writeFile("temp.txt", "Third line of text\n", { flag: "a" });
    console.log("Successfully wrote all three lines to temp.txt");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
};

// Reader function - reads the file and logs its contents
const reader = async () => {
  try {
    const data = await readFile("temp.txt", "utf8");
    console.log("File contents:");
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

// Main function that coordinates writing and reading
const readWrite = async () => {
  await writer();
  await reader();
};

// Execute the main function
readWrite();

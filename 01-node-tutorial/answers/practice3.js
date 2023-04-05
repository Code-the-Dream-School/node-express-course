fs = require("fs").promises;

const makeFile = async () => {
  try {
    await fs.writeFile("01-node-tutorial/answers/content/practice2.txt", "This is the first line.\n");
    for (let i = 1; i <= 10; i++) {
      await fs.writeFile("01-node-tutorial/answers/content/practice2.txt", `This is line ${i}.\n`, {
        flag: "a",
      });
    }
  } catch (err) {
    console.error(err);
  }
};

makeFile();

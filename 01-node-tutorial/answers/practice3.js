// Require fs module
fs = require('fs').promises;

// asynchronous function expression makeFile
const makeFile = async () => {
  try {
    await fs.writeFile('./content/practice2.txt', `This is the first line.\n`);
    for (let i = 1; i < 10; i += 1) {
      await fs.writeFile('./content/practice2.txt', `This is line ${i + 1}.\n`, { flag: 'a'});
    }
  } catch (error) {
    console.log(error);
  }
};

makeFile();
  
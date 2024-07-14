const { writeFile, readFile } = require('fs').promises;
const { join } = require('path');

const filePath = join(__dirname, 'temporary', 'temp.txt');

const line1 = 'This is my first line';
const line2 = 'This is my second line';
const line3 = 'This is my third line';

const writer = async () => {
  try {

    await writeFile(filePath, `${line1}\n`);
    await writeFile(filePath, `${line2}\n`, { flag: 'a' });
    await writeFile(filePath, `${line3}`, { flag: 'a' });
  } catch (error) {
    console.log('Error writing to file:', error);
  }
};

const reader = async () => {
  try {
    console.log(await readFile(filePath, 'utf8'));
  } catch (err) {
    console.log('Error reading from file:', err);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch (err) {
    console.log('An error occurred:', err);
  }
};

readWrite();

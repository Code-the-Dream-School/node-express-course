const { writeFile, readFile } = require('fs').promises

async function writer() {
  try {
    await writeFile('./temporary/examplo-output.txt', 'Line 1\n');
    await writeFile('./temporary/examplo-output.txt', 'Line 2\n', {flag: 'a'});
    await writeFile('./temporary/examplo-output.txt', 'Line 3\n', {flag: 'a'});
  } catch (err) {
    console.log('encountered error: ', err);
  }
}

async function reader() {
  try {
    const fileContents = await readFile('./temporary/examplo-output.txt', 'utf-8');
    console.log(fileContents);
  } catch (err) {
    console.log('encountered error: ', err);
  }
}

async function readWrite() {
  try {
    await writer();
    await reader();
  } catch (err) {
    console.log('encountered error: ', err);
  }
}

readWrite()
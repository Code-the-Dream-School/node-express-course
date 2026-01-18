const { writeFile, readFile } = require("fs").promises;

async function writer() {
    try {
        await writeFile('./temporary/temp.txt', 'This is line 1\n');
        await writeFile('./temporary/temp.txt', 'This is line 2\n', { flag: 'a' });
        await writeFile('./temporary/temp.txt', 'This is line 3\n', { flag: 'a' });
        console.log('File written successfully');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

async function reader() {
    try {
        const content = await readFile('./temporary/temp.txt', 'utf8');
        console.log(content);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

async function readWrite() {
    await writer();
    await reader();
}

readWrite();
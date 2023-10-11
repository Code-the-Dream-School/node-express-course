const { writeFile, readFile } = require('fs').promises

const writer = async () => {
    try {
        await writeFile('../threeLines.txt', 'Line 1\nLine 2\nLine 3', 'utf8');
        console.log('File written successfully!');
    } catch (error) {
        console.log('Error writing the file:', error);
    }
};

const reader = async () => {
    try {
        const content = await readFile('../threeLines.txt', 'utf8');
        console.log('File content:', content);
    } catch (error) {
        console.log('Error reading the file:', error);
    }
};

const readWrite = async () => {
    await writer();
    await reader();
};

readWrite();
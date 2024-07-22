const {writeFile, readFile} = require("fs").promises;

async function writer() {
    const filePath = 'temp.text'
    const lines = [
        "Don't worry about a thing.\n",
        "'Cause every little thing.\n",
        'Gonna be alright.\n'
    ];

    try { 
        await writeFile(filePath, lines[0]);
        await writeFile(filePath, lines[1], { flag: 'a' });
        await writeFile(filePath, lines[2], { flag: 'a' });

    } catch (error) {
        console.error(`Could not write to file: ${error}`);
    };
};

async function reader() {
    const filePath = 'temp.txt';

    try {
        const data = await readFile(filePath, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error(`Could not read from file: ${error}`);
    };
};

async function readWrite() {
    await writer();
    await reader();
};

readWrite();



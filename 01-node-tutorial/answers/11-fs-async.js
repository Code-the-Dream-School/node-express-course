const { readFile, writeFile } = require('fs')

readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('Error:', err);
    }
    console.log('First line written to fileB.txt');
    // Write the second line to fileB.txt
    writeFile('./temporary/fileB.txt', 'Second line\n', { flag: 'a' }, (err) => {
        if (err) {
            console.log('Error:', err);
        }
        console.log('Second line written to fileB.txt');

        // Write the third line to fileB.txt
        writeFile('./temporary/fileB.txt', 'Third line\n', { flag: 'a' }, (err) => {
            if (err) {
                console.log('Error:', err);
            }
            console.log('Third line written to fileB.txt');

            console.log('All lines written to fileB.txt');
        });
    });
});
console.log("The end");
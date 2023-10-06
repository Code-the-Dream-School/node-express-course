const { writeFile } = require('fs');
console.log('at start');
writeFile('./temporary/fileB.txt', 'This is line 1\n', err => {
    console.log('at point 1');
    if (err) {
        console.log('This error happened in line1: ', err);
    } else {
        writeFile('./temporary/fileB.txt','This is line 2\n', { flag: 'a' }, err => {
            console.log('at point 2');
            if (err) {
                console.log('This error happened in line2: ', err);
            } else {
                writeFile('./temporary/fileB.txt', 'This is line 3\n', { flag: 'a' }, err => {
                    console.log('at point 3');
                    if (err) {
                        console.log('This error happened in line3: ', err);
                    } else {
                        console.log('All lines are written successfully')
                    }
                }
            )}
        }
    )}
});
console.log('at end');
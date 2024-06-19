const fs = require('fs');
const filePath = './temporary/fileB.txt';

console.log("Script Started");

//writing the first line
fs.writeFile(filePath, 'This is your first clue.\n', (err) => {
    console.log("You have made your first step.");
    if (err) {
        console.log("Your clue could not be loaded: ", err);
    } else {
        // Write the second line, append
        fs.writeFile(filePath, 'This is your second clue.\n', { flag: 'a' }, (err) => {
            console.log("You have made your second step.");
            if (err) {
                console.log("Your clue could not be loaded: ", err);
            } else {
                // Write the third line, append
                fs.writeFile(filePath, 'This is your third clue.\n', { flag: 'a' }, (err) => {
                    console.log("You have made your third step.");
                    if (err) {
                        console.log("Your clue could not be loaded: ", err);
                    } else {
                        console.log("All clues have been written.");
                        //had to move this console log to inside the call back because it was coming before the async function.
                        console.log("Script Complete");
                    }
                });
            }
        });
    }
});



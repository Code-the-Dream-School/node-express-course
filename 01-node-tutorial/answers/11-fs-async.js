const fs = require("fs");

console.log("At start");

fs.writeFile("./temporary/fileB.txt", "This is line 1\n", (err) => {
    console.log("at point 1");
    if (err) {
        console.log("Error writing line 1: ", err);
    } else {
        fs.writeFile("./temporary/fileB.txt", "This is line 2\n", { flag: "a" }, (err) => {
            console.log("at point 1");
            if (err) {
                console.log("Error writing line 2: ", err);
            } else {
                fs.writeFile("./temporary/fileB.txt", "This is line 3\n", { flag: "a" }, (err) => {
                    console.log("at point 1");
                    if (err) {
                        console.log("Error writing line 3: ", err);
                    } else {
                        console.log("File write completed.");
                    }
                    });
            }
            });
        }
    });

console.log("At end");


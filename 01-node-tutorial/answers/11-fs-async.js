const { writeFile } = require("fs");
console.log("at start");
writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
    console.log("at point 1");
    if (err) {
        console.log("This error happened: ", err);
    } else {
        //Write line 2 inside this callback
        writeFile("./temporary/fileB.txt", "This is line 2\n", { flag: "a" }, (err, result) => {
        console.log("at point 2");
        if (err) {
            console.log("This error happened: ", err);
        } else {
            //Write line 3 inside this callback
            writeFile("./temporary/fileB.txt", "This is line 3\n", { flag: "a" }, (err, result) => {
            console.log("at point 3");
            if (err) {
                console.log("This error happened: ", err);
            } else {
                //Everything worked write completed
                console.log("File writing complete!");
            }
            });
        }
        });
    }
});

console.log("at end");
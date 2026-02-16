const { writeFile, readFile } = require("fs").promises;

const writer = () => {
    const data = "Writing this file";
    writeFile("temp.txt", data)
        .then(() => {
            console.log("File was written successfully");
            return writeFile("temp.txt", "\nWriting directly into it is also another file", { flag: 'a' });
        })
        .then(() => {
         
            return writeFile("temp.txt", "\nThis is the third write", { flag: 'a' });
        })
        .catch((error) => {
            console.log("This is the error:", error);
        });
};

const reader = () => {
   
    readFile("temp.txt", "utf8")
        .then((fileContent) => {
            console.log("This is the file content:", fileContent);
        })
        .catch((error) => {
            console.log("Error reading the file:", error);
        });
};

const readwrite = () => {
    
    writer();
    reader();
};

readwrite();

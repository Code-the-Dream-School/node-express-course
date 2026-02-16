const { writeFile, readFile } = require("fs").promises;  

const writer = async () => {
    const data = "Writing this file";
    try {
        await writeFile("temp.txt", data);
        console.log("File was written successfully");
        
     
        await writeFile("temp.txt", "Writing directly into it is also another file");
        await writeFile("temp.txt", "This is the third write");
    } catch (error) {
        console.log("This is the error:", error);
    }
}

const reader = async () => {
    try {

        const fileContent = await readFile("temp.txt", "utf8");
        console.log("This is the file content:", fileContent);
    } catch (error) {
        console.log("Error reading the file:", error);
    }
}

const readwrite = async () => {
    await writer(); 
    await reader(); 
}


readwrite();

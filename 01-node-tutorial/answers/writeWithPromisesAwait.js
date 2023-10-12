const { writeFile, readFile } = require("fs").promises;
// Create an async function called 'writer' with no arguments;

async function writer() {
    try{
        // Write three lines to a file named temp.txt, by calling the writeFile function with await;
        await writeFile('temp.txt', "Hello World \n Learning node.js is fun! \n The present moment is exciting!");
        console.log("File 'temp.txt' has been written successfully.") // logs a success message
    } catch(error) {
        console.error("Error writing the file:", error); // logs an error message
    }
}

/*Create another async function called reader that reads 
the file with await readFile and logs the return value to the screen.*/
async function reader(){
    try{
        // read the file with await readFile and logs the return value to the screen
        const read = await readFile("temp.txt", "utf-8");
        
        //log the content of the file to the screen
        console.log("File contents:\n", read);
    } catch (error){
        console.error("Error reading the file:", error); // logs an error message
    }
}

//write a third async function called readWrite
async function readWrite(){
    try{
        //call await reader
        await writer();

        //call await writer
        await reader();
    } catch(error){
        console.error("Error!", error); // logs an error message
    }
}

//Finally, write a line at the bottom of the file that calls the readWrite function.
readWrite();
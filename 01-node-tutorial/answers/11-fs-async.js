const { writeFile } = require("fs"); //No Sync → this is asynchronous.Node does not wait. It starts the operation and moves on immediately.

const path = require("path"); //imports Node’s built-in path module`, which helps create file paths safely

// Create full path to the file

const filePath = path.join(__dirname, "temporary", "fileB.txt");
console.log(filePath);

// Step 1: Write "Sun" In Step 1: Writes "Sun\n" to the file asynchronously.\n → adds a new line after "Sun".If the file doesn’t exist, Node will create it.
writeFile(filePath, "Sun\n", (err) => {
  console.log("first statement"); //Prints "first statement" after writing "Sun" completes.
  if (err) {
    console.log("Error: ", err);  //Checks if there was an error writing the file.If yes → prints the error.If no → continues to Step 2.
  } else {
    // Step 2: Append "Moon" .Step 2: Appends "Moon\n" to the same file.{ flag: "a" } → append mode, so it adds to the end instead of overwriting.Callback runs after "Moon" is written.
    writeFile(filePath, "Moon\n", { flag: "a" }, (err) => {
      console.log("second statement");
      if (err) {
        console.log("Error: ", err); //Logs "second statement" after appending "Moon".Checks for errors. If no error → continues to Step 3.
      } else {
        // Step 3: Append "Stars"
        writeFile(filePath, "Stars\n", { flag: "a" }, (err) => { //Step 3: Appends "Stars\n" to the file.Callback runs when done.
          console.log("third statement");   //"third statement" logs after "Stars" is written."All done writing the sky!" confirms all writes are finished successfully.
          if (err) {
            console.log("Error: ", err);
          } else {
            console.log("All done writing the sky!");
          }
        });
      }
    });
  }
});
//Combines parts of the path into one full path.

//__dirname → the folder where your current JS file is located.

//"temporary" → folder name inside your project.

//"fileB.txt" → file name.

//Result: filePath now contains the full path to the file, like:

//Summary of what happens

//File fileB.txt is created inside temporary (if it exists).

//"Sun" is written first.

//"Moon" is appended next.

//"Stars" is appended last.

//Console logs track each step.

//Final fileB.txt content:

//Sun
//Moon
//Stars
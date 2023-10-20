const { writeFile, readFile } = require("fs").promises;

const writer = async() => {
try{
    await writeFile("./temporary/temp.txt", "New text for lesson2 for WriteWithPromisesAwait\n")
    await writeFile("./temporary/temp.txt", "New text for lesson2 for WriteWithPromisesAwait\n", {flag: "a"})
    result = await writeFile("./temporary/temp.txt", "New text for lesson2 for WriteWithPromisesAwait\n", {flag: "a"})
    return result
} catch(err) {
    console.log("An error occurred: ", err);
}
}

const reader = async() => {
try{
result = await readFile("./temporary/temp.txt", "utf-8")
return result
} catch(err) {
    console.log("An error occurred: ", err);
}
}

const readWrite = async()=>{
    try{
          result1 = await writer();
          result2 = await reader()

          console.log(result2)
          return (result1, result2)
   } catch(err) {
    console.log("An error occurred: ", err);
}
}
readWrite()


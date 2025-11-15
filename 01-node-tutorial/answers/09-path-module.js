const path = require('path') //path is a built-in Node module that helps us work with file paths 

console.log(path.sep)    //path.sep = the separator our OS uses for folders.In Windows → \ and in Mac/Linux → /

const filePath = path.join('/content/', 'subfolder', 'test.txt')  //path.join = glues folder & file names together into one path & automatically puts the correct separator (\ or /) between folders.
console.log(filePath)

const base = path.basename(filePath) //path.basename = gives just the file name from a full path. eg base: test.txt
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') //path.resolve = gives the full absolute path from the current folder (__dirname) to your file.
console.log(absolute)


//__dirname = the folder your current file is in.

//path.sep → what kind of slash your computer uses for folders.

//path.join(...) → sticks folders and file names together safely.

//path.basename(...) → gives just the file name, not the folders.

//path.resolve(...) → tells you the full address of a file on your computer.
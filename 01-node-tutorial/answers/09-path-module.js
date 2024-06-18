const path = require('path')
//must first require!

console.log(`Reference to path.sep: ${path.sep}`)
// Gives you a slash Terminal prints: Reference to path.sep: /

const filePath = path.join('/myMainFolder/', 'folderInMain', 'fileText.txt')
console.log(`Filepath: ${filePath}`)
//This joins the structure terminal prints: Filepath: /myMainFolder/folderInMain/fileText.txt

const base = path.basename(filePath)
console.log(`Here's path.basename: ${base}`)
// Base gives last file- terminal prints: Here's path.basename: fileText.txt

const absolute = path.resolve(__dirname, 'myMainFolder', 'folderInMain', 'fileText.txt')
console.log(`Here's the path.resole: ${absolute}`)
//ENTIRE PATH- Terminal prints: Here's the path.resole: /Users/sarahdapkiewicz/Desktop/NodeExpress/CTD/CTDRepoFork/node-express-course/01-node-tutorial/answers/myMainFolder/folderInMain/fileText.txt

//path: node 01-node-tutorial/answers/09-path-module.js
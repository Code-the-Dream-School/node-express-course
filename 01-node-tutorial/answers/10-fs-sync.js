//FS- FILE SYSTEM BUILT IN METHOD - read files, make them, and overwrite them 
// two flavors 
// async non blocking or sync blocking 

const { readFileSync, writeFileSync } = require('fs')
//destructuring the object to just access these two methods from file system

console.log('starting this task');

const first = readFileSync('./temporary/first.txt', 'utf8')
//this is the content file and the text file inside, reafFileSync takes the internal info from the file 

const second = readFileSync('./temporary/second.txt', 'utf8')
//other text file inside content folder , also is reading the content of the file 

console.log(first, second)
//WORKS!

//Now we need to read from the file system
writeFileSync(
  './temporary/result-sync.txt',
  `Here is the first and second result : ${first}, ${second}`,
  { flag: 'a' }
)
//file is named, content is given from first and second, this overwites, if you want to append to the file
// you need to make a flag so that node appends the file if absent it will overwrite 
//WORKED 

console.log('done with this task');
//Note 2 Methods async non-blocking (better) , sync is blocking 
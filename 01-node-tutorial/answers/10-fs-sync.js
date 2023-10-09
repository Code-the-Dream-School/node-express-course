const { readFileSync, writeFileSync } = require('fs')

writeFileSync('./temporary/fileA.txt', "line1 /n line 2 /n line3", {flag:'a'})

readFileSync('../temporary/fileA.txt', 'utf8')
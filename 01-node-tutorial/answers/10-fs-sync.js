const { readFileSync, writeFileSync } = require('fs')

const person1 = readFileSync('./component/John.txt', 'utf8')
const person2 = readFileSync('./component/Sara.txt', 'utf8')

// console.log(person1, person2)

writeFileSync(
	'./component/result-sync.txt',
	`This is the result : ${person1}, ${person2}   \n `,
	{ flag: 'a' }
)

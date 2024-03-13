const { writeFile, readFile } = require('fs').promises

const writer = async () => {
	try {
		for (let i = 0; i < 3; i++) {
			await writeFile('./component/temp.txt', `New line added \n`, {
				flag: 'a',
			})
		}
	} catch (error) {
		console.log(error)
	}
}

const reader = async () => {
	const newFile = await readFile('./component/temp.txt', 'utf8')
	console.log(newFile)
}

const readWrite = async () => {
	await reader()
	await writer()
}

readWrite()

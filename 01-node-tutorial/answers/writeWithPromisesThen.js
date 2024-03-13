const { readFile, writeFile } = require('fs').promises

writeFile('./component/new-temp.txt', `First line! \n`, { flag: 'a' }).then(
	() => {
		return writeFile('./component/new-temp.txt', `Second line!! \n`, {
			flag: 'a',
		}).then(() => {
			return writeFile('./component/new-temp.txt', `Third line!!! \n`, {
				flag: 'a',
			})
				.then(() => {
					return readFile('./component/new-temp.txt', 'utf8')
				})
				.then((data) => {
					console.log('Here is my data: ', data)
				})
				.catch((err) => {
					console.log('Failed!', err)
				})
		})
	} 
)

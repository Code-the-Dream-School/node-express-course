const { readFile, writeFile, read } = require('fs')

readFile('./component/John.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err)
		return
	} else {
		const firstResult = result
		readFile('./component/Sara.txt', 'utf8', (err, result) => {
			if (err) {
				console.log(err)
				return
			} else {
				const secondResult = result
				writeFile(
					'./component/subfile/result-sync.txt',
					`This is the result : ${firstResult}, ${secondResult}   \n  `,
					(err, result) => {
						if (err) {
							console.log(err)
							return
						} else {
							console.log('THIS IS THE END!')
						}
					}
				)
			}
		})
	}
})

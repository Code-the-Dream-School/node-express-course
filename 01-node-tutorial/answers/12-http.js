const http = require('http')
const { clearScreenDown } = require('readline')

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Welcome! This is the home page')
	}
	if (req.url === '/contact') {
		res.end('Here, you can find out contacts!')
	} else {
		res.end('Page not found!')
	}
})

server.listen(5000)

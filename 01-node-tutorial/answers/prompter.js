const http = require('http')
var StringDecoder = require('string_decoder').StringDecoder

const getBody = (req, callback) => {
	const decode = new StringDecoder('utf-8')
	let body = ''
	req.on('data', function (data) {
		body += decode.write(data)
	})
	req.on('end', function () {
		body += decode.end()
		const body1 = decodeURI(body)
		console.log(body1)
		const bodyArray = body1.split('&')
		const resultHash = {}
		bodyArray.forEach((part) => {
			console.log(part)
			const partArray = part.split('=')
			resultHash[partArray[0]] = partArray[1]
		})
		callback(resultHash)
		console.log(resultHash)
	})
}

// here, you could declare one or more variables to store what comes back from the form.
let backgroundColor = 'grey'

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
	return `
  <body>
  <body style="background-color: ${backgroundColor};">
  <h2> New changes made</h2>
            <form method="POST">
                <label for="colorSelector">Choose a background color:</label>
                <select id="colorSelector" name="color">
                    <option value="white">White</option>
                    <option value="lightblue">Light Blue</option>
                    <option value="lightgreen">Light Green</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </body>
  `
}

const server = http.createServer((req, res) => {
	console.log('req.method is ', req.method)
	console.log('req.url is ', req.url)
	if (req.method === 'POST') {
		getBody(req, (body) => {
			console.log('The body of the post is ', body)
			// here, you can add your own logic
			if (body['color']) {
				backgroundColor = body['color']
			}
			// Your code changes would end here
			res.writeHead(303, {
				Location: '/',
			})
			res.end()
		})
	} else {
		res.setHeader('Content-Type', 'text/html')
		res.write(form())
		res.end()
	}
})

server.on('request', (req) => {
	console.log('Event Received: ', req.method, req.url)
})


const PORT = 3000
server.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})

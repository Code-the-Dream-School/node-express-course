const http = require('http')

const server = http.createServer((req, res) => {
  //console.log(req)
  if (req.url === '/'){
    res.end('welcome to the home page!')
  } else if  (req.url === '/about'){
    res.end('This is the about page.')
  } else if (req.url === '/contact'){
    res.end ('web@Yahoo.com')
    } else {
       res.end ('404 the page not found')
    }

  }) 

    
  

   server.listen(3000)
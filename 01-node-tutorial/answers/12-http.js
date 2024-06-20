//http build in module
const http = require('http');

const server = http.createServer((req, res)=>{
    //console.log(req)//give a giant object
    if(req.url === '/'){
        res.end('Welcome to our home page!')//send request
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }else{
        res.end(` <h1>Oops!</h1> 
              <p>We cant' seem to find the 
              page you are looking for</P>
              <a href="/">back home</>`) 
    }
    
})
// port the is listening to
server.listen(3000)

// control + C to stop the terminal*

const hhtp = require('http')
const server = hhtp.createServer((req, res)=>{
  if (req.url === '/') {
    res.end('Welcome Alex Torres to Node.js')
  } else if (req.url === '/info') {
    res.end(`
    <h1>More about me!</h1>
    visit my <a href="https://www.linkedin.com/in/alextorreswa/">LinkedIn profile</a> to know more`)
  } else {
    res.end(`
    <h1>Hey!</h1>
    <h4>The page is not avilible</h4>
    <p>visit my <a href="https://www.linkedin.com/in/alextorreswa/">LinkedIn profile</a> to know more</p>
    `)
  }  
})
server.listen(3000)
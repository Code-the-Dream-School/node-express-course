const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./new-public'))

app.get('/sample', (req, res) => {
  res.send('<h2>This is Working</h2>')
})


app.listen(3000, ()=> {
  console.log('server is listening on port 3000...');
})
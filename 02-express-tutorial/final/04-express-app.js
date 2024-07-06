const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
//must be above .get , static is the method, make a public folder with static items. methods-public 
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})

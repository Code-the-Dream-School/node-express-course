const express = require('express')
const app = express()
const path = require('path')

// app.get('/', (req, res) => {
//   console.log('user opened Homepage')
//   res.status(200).send('./new-public/index.html')
// })

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './new-public/index.html'))
  })

app.get('/sample', (req, res) => {
  res.status(200).send('This is working.')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
  })
  
  app.listen(3000, () => {
    console.log('server is listening on port 3000...')
  })
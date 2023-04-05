const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

console.log(process.env)

app.get('/', (req, res) => {
  res.send('Hello World! get')
})


app.post('/', (req, res) => {
    res.send('Hello World! post')
  })

  app.put('/', (req, res) => {
    res.send('Hello World! put')
  })

  app.delete('/', (req, res) => {
    res.send('Hello World! delete')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
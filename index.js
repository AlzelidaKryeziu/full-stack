const express = require('express')
require('dotenv').config()
const database = require('./database');
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World! get')
})

app.get('/kandidatet', (req, res) => {
  database.query('SELECT * FROM kandidatet', (err, results)=> {
    if(err) throw err;
    res.send(results);
  })
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
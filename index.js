const express = require('express')
require('dotenv').config()
const database = require('./database');
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World! get')
})

app.get('/kandidatet/:id', (req, res) => {
  const id = req.params.id;
  database.query('SELECT * FROM kandidatet where id = ?', [id], (err, results)=> {
    if(err) throw err;
    res.send(results);
  })
})


  //Per te mar te dhena nga body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  res.send('Hello World! post')
})

// RUAJTJA E NJE KOMUNE
app.post('/komunat', (req, res) => {
  const emri = req.body.Emri;
  const pershkrimi = req.body.Pershkrimi;
  console.log(emri, pershkrimi)
  database.query(`INSERT INTO komunat (Emri, Pershkrimi) VALUES (?, ?)`, [emri, pershkrimi], (err, results) => {
    if (err) throw err;
    res.send(`Komuna ${emri} u insertua ne databaze`);
  });
});



app.put('/', (req, res) => {
  res.send('Hello World! put')
})

// NDRYSHIMI I NJË KOMUNE
app.put('/komunat/ndrysho/:id', (req, res) => {
  const id = req.params.id;
  const emri = req.body.Emri;
  const pershkrimi = req.body.Pershkrimi;
  database.query(`UPDATE komunat SET Emri = ?, Pershkrimi =? WHERE Id = ?`, [emri, pershkrimi, id], (err, results) => {
  if (err) throw err;
  res.send(`Komuna me ID ${id} u be update me emrin ${emri}`);
  });
});

app.delete('/', (req, res) => {
  res.send('Hello World! delete')
})

// FSHIRJA E NJE KOMUNE
app.delete('/komunat/fshij/:id', (req, res) => {
  const id = req.params.id;
  database.query(`DELETE FROM komunat WHERE Id = ?`, [id], (err, results) => {
    if (err) throw err;
    res.send(`Komuna me ID ${id} u fshi me sukses`);
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
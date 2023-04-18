const express = require('express')
require('dotenv').config()
const database = require('./database');
const app = express()
const fs = require('fs');
const port = 3000
const userRouters = require('./routers/users')
const komunatRouters = require('./routers/komunat')


app.use('/api/users', userRouters)

app.use('/komunat', komunatRouters)


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
const { setFlagsFromString } = require('v8');
const { getgid } = require('process');
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

//1. Shto profesoret
app.post('/profesoret', (req, res)=> {
  console.log(req.body)
  /*const emri = req.body.emri;
  const mbiemri = req.body.mbiemri;
  const numri_i_leternjoftimit = req.body.numri_i_leternjoftimit;
  const vendi_i_lindjes = req.body.vendi_i_lindjes;
  const komunaid = req.body.komunaid;
  const adresa = req.body.adresa;
  const telefoni = req.body.telefoni;
  const emaili = req.body.emaili;
  const statusi = req.body.statusi;*/
  database.query(`INSERT INTO Profesoret (emri, mbiemri, numri_i_leternjoftimit, vendi_i_lindjes, komunaid, adresa, telefoni, emaili, statusi)
   VALUES ('${req.body.emri}','${req.body.mbiemri}','${req.body.numri_i_leternjoftimit}','${req.body.vendi_i_lindjes}','${req.body.komunaid}',
  '${req.body.adresa}','${req.body.telefoni}','${req.body.emaili}','${req.body.statusi}')`, 
  (err, results)=> {
    if (err) throw err;
    res.send(`Profesori u shtua me sukses`);
  });

  })

  app.get('/json', (req, res)=>{

    fs.readFile(__diname + '/public/json/test.json', 'utf8', (err,  data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error reading file');
        }else {
          //send the file contents as the response
          res.send(data);
        }
      });
    });




app.get('/txt/write', (req, res) => {
    fs.writeFile(__dirname + '/public/txt/test2.txt', 'Hello World', function (err){
        if (err)
            console.log(err);
        else
            res.send('Write operation complete.')
    });
});


app.get('/txt/delete', (req, res ) => {
  fs.unlink(__dirname + '/public/txt/test.txt', function () {
    console.log('File Deleted Successfully.')
  });
});

app.get('/images/read', (req,res)=>{
  const imagePath = __dirname + '/public/images/test.png';
  const stream = fs.createReadStream(imagePath);
  res.contentType('image/png');
  stream.pipe(res);
})

fs.mkdir(__dirname + '/public/images/testmkdir', (err)=>{
  if (err){
    console.error(err);
  }else {
    console.log('Directory deleted successfully.');
  }
});

fs.rmdir(__dirname + '/public/images/testmkdir', (err) => {
  if(err){
    console.log(err);
  }else{
    console.log('Directory deleted successfully.');
  }
})

//serving static files in Express
//app.use(express.static('public'))
app.use(express.static(__dirname + '/public/pdf'));
app.use('/public/pdf', express.static(__dirname + '/public/pdf'));//Do të shfaq imazhe nga dosja e imazheve për çdo kërkesë HTTP që fillon me "/images"
app.use(express.static('public'))
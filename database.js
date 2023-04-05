const mysql = require('mysql')
require('dotenv').config()
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
    return;
  }
  console.log('Connected to database');
});
// connection.query('SELECT emri FROM kandidatet where id = 1', (err, rows, fields) => {
//     if (err) throw err
//     console.log('The solution is: ', rows)
// })
module.exports = connection;
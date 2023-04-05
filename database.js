const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'full-stack'
})

connection.connect((err) =>{
    if(err) throw err

    console.log('MySQL Connection done!')
})

connection.query('SELECT u.first_name from users u where id=2', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The result is: ', rows)
  })
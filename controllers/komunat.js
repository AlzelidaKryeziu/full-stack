const database = require('../database');
const getKomunat = (req,res)=> {
    database.query('SELECT * FROM komunat', (err, results)=>{
      if(err) throw err;
      res.send(results);
    })
  }

module.exports = {getKomunat}
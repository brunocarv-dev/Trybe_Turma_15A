const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '3G1pytP$yc#',
  database: 'cep_lookup',
})

module.exports = connection;
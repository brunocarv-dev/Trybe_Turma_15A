const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '3G1pytP$yc#',
  database: 'model_example'
});

module.exports = connection;
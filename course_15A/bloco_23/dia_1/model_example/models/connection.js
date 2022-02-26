const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: '3306',
  user: 'root',
  password: 'valhala056',
  database: 'model_example'
});

module.exports = connection;
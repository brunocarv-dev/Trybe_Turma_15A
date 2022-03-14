const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

module.exports = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATA_BASE,
});

console.log(process.env.MYSQL_DATA_BASE);

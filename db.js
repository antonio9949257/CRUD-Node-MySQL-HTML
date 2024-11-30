const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '2147',
  database: 'examen'
});

module.exports = pool;


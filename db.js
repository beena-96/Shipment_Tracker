const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: '', // Change this to your PostgreSQL server's host
  database: '',
  password: '',
  port: , // Default PostgreSQL port
});

module.exports = pool;

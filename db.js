const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // Change this to your PostgreSQL server's host
  database: 'shipment_trackerDb',
  password: 'PostgreSQL',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;

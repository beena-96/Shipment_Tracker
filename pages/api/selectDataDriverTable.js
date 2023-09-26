import pool from '../../db';

export default async function handler(req, res) {
  try {
    // Create a database connection
    const client = await pool.connect();

    // Define the SQL query to select all data from the "Shipments" table
    const selectQueryDriver = `SELECT * FROM Drivers, Users where Users.role = 'Driver'`;
    // `SELECT Drivers.DriverID ,  Drivers.DriverID,  Drivers.DriverID,  Drivers.DriverID, table2.column2
    // FROM table1, table2;
    // `

    // Execute the query
    const result = await client.query(selectQueryDriver);

    // Release the database connection
    client.release();

    // Check if any rows were returned
    if (result.rows.length > 0) {
      res.status(200).json({ error: false, data: result.rows });
    } else {
      res.status(404).json({ error: true, message: 'No data found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: true, message: 'Error during database query' });
  }
}

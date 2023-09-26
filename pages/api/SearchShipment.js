import pool from '../../db';

export default async function handler(req, res) {
  try {
    // Retrieve the shipmentid parameter from the request query
    const { shipmentid } = req.query;

    // Create a database connection
    const client = await pool.connect();

    // Define the SQL query to select data from the "Shipments" table based on shipmentid
    const selectQueryShipment = `SELECT * FROM Shipments WHERE shipmentid = $1`;

    // Execute the query with the shipmentid parameter
    const result = await client.query(selectQueryShipment, [shipmentid]);

    // Release the database connection
    client.release();

    // Check if any rows were returned
    if (result.rows.length > 0) {
      res.status(200).json({ error: false, data: result.rows[0] });
    } else {
      res.status(404).json({ error: true, message: 'No data found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: true, message: 'Error during database query' });
  }
}

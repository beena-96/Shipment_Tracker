import pool from '../../db';

export default async function handler(req, res) {
  try {
    // Retrieve the shipmentid, customername, shipmentstatus, and destinationaddress from the request query
    const { customername, shipmentstatus, destinationaddress, planneddeliverydate, actualdeliverydate, shipmentid } = req.query;

    // Create a database connection
    const client = await pool.connect();

    // Define the SQL query to update the shipment data
    const updateQuery = 'UPDATE Shipments SET customername = $1, shipmentstatus = $2, destinationaddress = $3, planneddeliverydate = $4, actualdeliverydate = $5 WHERE shipmentid = $6';

    // Execute the query with parameters
   // Execute the query with parameters
const result = await client.query(updateQuery, [customername, shipmentstatus, destinationaddress, planneddeliverydate, actualdeliverydate, shipmentid]);


    // Release the database connection
    client.release();

    // Check if any rows were updated
    if (result.rowCount > 0) {
      return res.status(200).json({ error: false, message: 'Data show successfully' });
    } else {
      return res.status(404).json({ error: true, message: 'No data found for the provided shipmentid' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: true, message: 'Error during database query' });
  }
}

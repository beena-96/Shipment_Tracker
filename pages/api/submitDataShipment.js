import pool from '../../db';

export default async function handler(req, res) {
  try {
    // Extract data from the request body (sent from the frontend)
    const {  CustomerName, ShipmentStatus , DestinationAddress, PlannedDeliveryDate, ActualDeliveryDate } = req.body;

    // Create a database connection
    const client = await pool.connect();

    // Define the SQL query with the dynamic data

    const insertQueryShipmentTable = `INSERT INTO Shipments (CustomerName, ShipmentStatus , DestinationAddress, PlannedDeliveryDate, ActualDeliveryDate) VALUES ('${CustomerName}', '${ShipmentStatus}', '${DestinationAddress}', '${PlannedDeliveryDate}', '${ActualDeliveryDate}')`;
    await client.query(insertQueryShipmentTable);

    // Execute the query
    // await client.query(insertQueryUserTable);

    // Release the database connection
    client.release();

    res.status(200).json({ error: false, message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: true, message: 'Error inserting data' });
  }
}

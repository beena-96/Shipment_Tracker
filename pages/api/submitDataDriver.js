import pool from '../../db';

export default async function handler(req, res) {
  try {
    // Extract data from the request body (sent from the frontend)
    const { UserName, Password, Email, Role, VehicleNumber, LicenseNumber, ContactNumber } = req.body;

    // Create a database connection
    const client = await pool.connect();

    
    if(Role === 'Driver'){

      const insertQueryDriverTable = `INSERT INTO Drivers (VehicleNumber, LicenseNumber, ContactNumber) VALUES ('${VehicleNumber}', '${LicenseNumber}', '${ContactNumber}') RETURNING "driverid"`;

    // Execute the query
    const driverResult = await client.query(insertQueryDriverTable);

    if (!driverResult || driverResult.rows.length === 0) {
      throw new Error('No rows returned from the query for Drivers table');
    }

    const DriverID = driverResult.rows[0].driverid;

      const insertQueryUserTable = `INSERT INTO Users (UserName, Password, Email, Role, DriverID) VALUES ('${UserName}', '${Password}', '${Email}', '${Role}', ${DriverID})`;
      await client.query(insertQueryUserTable);
    }

else {
    // Define the SQL query with the dynamic data
    const insertQueryUserTable = `INSERT INTO Users (UserName, Password, Email, Role) VALUES ('${UserName}', '${Password}', '${Email}', '${Role}')`;
    await client.query(insertQueryUserTable);

    // const insertQueryShipmentTable = `INSERT INTO Shipments (CustomerName, ShipmentStatus , DestinationAddress, AssignedDriverID, PlannedDeliveryDate, ActualDeliveryDate) VALUES ('${CustomerName}', '${ShipmentStatus}', '${DestinationAddress}', '1', '${PlannedDeliveryDate}', '${ActualDeliveryDate}')`;
    // await client.query(insertQueryShipmentTable);
}
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

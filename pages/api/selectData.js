import pool from '../../db';

export default async function handler(req, res) {
  try {
    // Extract data from the request body (sent from the frontend)
    const { UserName, Password } = req.body;

    // Create a database connection
    const client = await pool.connect();

    // Define the SQL query with the dynamic data
    const selectQueryLogin = `
      SELECT UserName, Password, role 
      FROM Users 
      WHERE UserName = '${UserName}' AND Password = '${Password}'
    `;

    // Execute the query
    const result = await client.query(selectQueryLogin);

    // Release the database connection
    client.release();

    if (result.rows.length === 1) {
      // Extract the user's role from the query result
      const userRole = result.rows[0].role
      if (!userRole) {
        res.status(401).json({ error: true, message: 'Role not found for the user' });
      }
      console.log(result.rows);
      res.status(200).json({ error: false, message: 'Login successfully', role: userRole });
    } else {
      res.status(401).json({ error: true, message: 'Invalid login credentials' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: true, message: 'Error during login' });
  }
}

import pool from '../dbfiles/dbConfig.js';


// Retrieve all users
export const getUsers = async () => {

  const [rows] = await pool.query('SELECT * FROM users');

  return rows;

}

// Retrieve a single user by ID
export const getUser = async (id) => {

  const [rows] = await pool.query(`
    SELECT *
    FROM users
    WHERE id = ?
  `, [id]);

  return rows[0];

}

// Create a new user
export const createUser = async (username, password, email) => {
  
  const [result] = await pool.query(`
    INSERT INTO users (username, password, email)
    VALUES (?, ?, ?)
  `, [username, password, email]);

  const id = result.insertId;

  return getUser(id);

}

// Update a user by ID
export const updateUser = (req, res) => {

  const user = users.find((user) => user.id === req.params.id);

  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email;

  res.send('User updated successfully');

}
/*
// Delete a user by ID
export const deleteUser = (req, res) => {

  users = users.filter((user) => user.id !== req.params.id);

  res.send('User deleted successfully');

}
*/

export const deleteUser = async (user_id) => {

  const rows = await pool.query(`
    DELETE
    FROM user_details
    WHERE user_id = ?
  `, [user_id]);

  return rows;

}


// const banana = await getUsers();
// console.log(banana);
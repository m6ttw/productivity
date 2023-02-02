import pool from '../dbfiles/dbConfig.js';


// Retrieve all users
export const getUsers = async () => {

  const [rows] = await pool.query('SELECT * FROM user_details');

  return rows;

}

// Retrieve a single user by ID
export const getUser = async (user_id) => {

  const [rows] = await pool.query(`
    SELECT *
    FROM user_details
    WHERE user_id = ?
  `, [user_id]);

  return rows[0];

}

// Create a new user
export const createUser = async (username, password, firstname, lastname, age, email) => {
  
  const [result] = await pool.query(`
    INSERT INTO user_details (username, password, firstname, lastname, age, email)
    VALUES (?, ?, ?, ?, ?, ?)
  `, [username, password, firstname, lastname, age, email]);

  const id = result.insertId;

  return getUser(id);

}

// Update a user by ID
export const updateUser = (req, res) => {

  const user = users.find((user) => user.id === req.params.id);

  user.name = req.body.name;
  user.age = req.body.age;

  res.send('User updated successfully');

}

// Delete a user by ID
export const deleteUser = (req, res) => {

  users = users.filter((user) => user.id !== req.params.id);

  res.send('User deleted successfully');

}


// const banana = await getUsers();
// console.log(banana);
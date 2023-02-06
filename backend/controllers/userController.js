import pool from '../config/pool.js';

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
export const updateUser = async (username, password, email, id) => {
  
  const [result] = await pool.query(`
    UPDATE users
    SET username = ?, password = ?, email = ?
    WHERE id = ?
  `, [username, password, email, id]);

  const user_id = result.insertId;

  return getUser(user_id);

}

// Delete a user by ID
export const deleteUser = async (id) => {

  const rows = await pool.query(`
    DELETE
    FROM users
    WHERE id = ?
  `, [id]);

  return getUsers();

}

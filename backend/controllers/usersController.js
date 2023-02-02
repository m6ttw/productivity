import pool from '../dbfiles/dbConfig.js';

export const getUsers = async () => {

  const [rows] = await pool.query('SELECT * FROM user_details');
  return rows;

}


export const getUser = async (user_id) => {

  const [rows] = await pool.query(`
    SELECT *
    FROM user_details
    WHERE user_id = ?
  `, [user_id]);

  return rows[0]; // to get just 1 object, not an array with 1 object

}


export const createUser = async (username, password, firstname, lastname, age, email) => {
  
  const [result] = await pool.query(`
    INSERT INTO user_details (username, password, firstname, lastname, age, email)
    VALUES (?, ?, ?, ?, ?, ?)
  `, [username, password, firstname, lastname, age, email]);

  const id = result.insertId;
  return getUser(id);
  
}


export const updateUser = (req, res) => {

  const user = users.find((user) => user.id === req.params.id);

  user.name = req.body.name;
  user.age = req.body.age;

  res.send('User updated successfully');

}


export const deleteUser = (req, res) => {

  users = users.filter((user) => user.id !== req.params.id);

  res.send('User deleted successfully');

}


const banana = await getUsers();
console.log(banana);
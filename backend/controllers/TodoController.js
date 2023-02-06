import pool from '../config/pool.js';

// Retrieve all todos
export const getTodos = async () => {
  const [rows] = await pool.query('SELECT * FROM todos');
  return rows;
};

// Retrieve a single todo by ID
export const getTodo = async (id) => {
  const [rows] = await pool.query(`
    SELECT *
    FROM todos
    WHERE id = ?
  `, [id]);
  return rows[0];
};

// Create a new todo
export const createTodo = async (title, notes, completed) => {
  const [result] = await pool.query(`
    INSERT INTO todos (title, notes, completed)
    VALUES (?, ?, ?)
  `, [title, notes, completed]);
  const id = result.insertId;
  return getTodo(id);
};

// Update a todo by ID
export const updateTodo = async (title, notes, completed, id) => {
  const [result] = await pool.query(`
    UPDATE todos
    SET title = ?, notes = ?, completed = ?
    WHERE id = ?
  `, [title, notes, completed, id]);
  const todo_id = result.insertId;
  return getTodo(todo_id);
};

// Delete a todo by ID
export const deleteTodo = async (id) => {
  await pool.query(`
    DELETE
    FROM todos
    WHERE id = ?
  `, [id]);
  return getTodos();
};

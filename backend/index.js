import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

import { createUser, getUsers, getUser, deleteUser, updateUser } from './controllers/userController.js';


/* REQUESTS */


// Get all
app.get('/users', async (req, res) => {
  const users = await getUsers();
  res.status(200).send(users);
})

// Get one
app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.status(200).send(user);
})

// Create
app.post('/users', async (req, res) => {
  const { username, password, email } = req.body;
  const user = await createUser(username, password, email);
  res.status(201).send(user);
})

// Update
app.put('/users/:id', async (req, res) => {
  const id = req.params.id;
  const { username, password, email, } = req.body;
  const user = await updateUser(username, password, email, id);
  res.status(200).send(user);
})

// Delete
app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await deleteUser(id);
  res.status(200).send(user);
})


/*  Other, error handling etc  */

app.get('/', async (req, res) => {
  try {
    res.send('Hi!');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Internal server error!')
})

app.all('*', (req, res) => res.send('This route does not exist'));

app.listen(port, () => console.log(`Server listening on port: http://localhost:${port}`));

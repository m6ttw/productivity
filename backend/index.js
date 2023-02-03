import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// import router from './routes/userRoute.js';
import { createUser, getUsers, getUser, deleteUser, updateUser } from './controllers/userController.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// app.use('', router);

app.get('/users', async (req, res) => {
  const users = await getUsers();
  res.send(users);
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.send(user);
})

app.post('/users', async (req, res) => {
  const { username, password, email } = req.body;
  const user = await createUser(username, password, email);
  res.status(201).send(user);
})




//OTHER
app.get('/', async (req, res) => {
  try {
    res.send('Hi!');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})

app.all('*', (req, res) => res.send('This route does not exist'));

app.listen(port, () => console.log(`Server listening on port: http://localhost:${port}`));
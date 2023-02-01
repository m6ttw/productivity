import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRoutes from './routes/usersRoute.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', userRoutes);

app.get('/', async(req, res) => {
  try {
    res.send('Hello from Express!');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})

app.all('*', (req, res) => res.send('This route does not exist'));

app.listen(port, () => {
  console.log(`Server listening on port: http://localhost:${port}`);
})
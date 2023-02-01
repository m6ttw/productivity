import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', async(req, res) => {
  try {
    res.send('Hello muthafucka');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})

app.listen(port, () => {
  console.log(`Server listening on port: http://localhost:${port}`);
})
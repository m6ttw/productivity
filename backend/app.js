const express = require('express');
const app = express();
const port = 3000;

app.get('/', async(req, res) => {
  try {
    res.send('Hello World!');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
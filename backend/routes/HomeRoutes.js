import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.send('Hi!');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})

export default router;

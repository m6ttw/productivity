import express from 'express';
const app = express();
const hostname = '127.0.0.1';
const port = 5000;

app.listen(port, () => console.log(`Server listening on port: http://${hostname}:${port}`));

import cors from 'cors';
app.use(cors());

import homeRoute from './routes/HomeRoutes.js';
import userRoute from './routes/UserRoutes.js';
app.use('/', homeRoute);
app.use('/users', userRoute);

import { error404, error500 } from './errors/Errors.js';
app.all('*', error404);
app.use(error500);

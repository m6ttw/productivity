import express from 'express';
import cors from 'cors';

import homeRoute from './routes/HomeRoutes.js';
import userRoute from './routes/UserRoutes.js';
import todoRoute from './routes/TodoRoutes.js';

import { error404, error500 } from './errors/Errors.js';

const app = express();
const hostname = '127.0.0.1';
const port = 5000;

app.listen(port, () => console.log(`Server listening on port: http://${hostname}:${port}`));

app.use(cors());

app.use('/', homeRoute);
app.use('/users', userRoute);
app.use('/todos', todoRoute);

app.all('*', error404);
app.use(error500);

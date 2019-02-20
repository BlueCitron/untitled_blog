import express from 'express';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes';
import { sequelize } from './models';

dotenv.config();
sequelize.sync({ force: false });

const app = express();
const { PORT } = process.env;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(router);


app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`)
})

import { Post } from './models';
Post.create({
  title: '헤헤',
  content: '헤헤',
  categoryId: 1,
  writer: 'BlueCitron',
})

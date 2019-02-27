import express from 'express';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import router from './routes';
import { sequelize } from './models';
import passportConfig from './passport';

dotenv.config();
passportConfig(passport);
sequelize.sync({ force: false });

const app = express();
const { PORT } = process.env || 3010;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(passport.initialize());

app.use(router);


app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`)
})

console.log('NODE_ENV = ', process.env.NODE_ENV)

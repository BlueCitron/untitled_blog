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
const { PORT } = process.env;

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

//import moment from 'moment';
//import { User, Post, Category } from './models';
//console.log(moment().startOf('day').toString())
// (async () => {
//   const posts = await Post.findAll({
//     range: [moment().startOf('day'), moment()]
//   });
//   const count = await Post.count();
//   console.log(posts)
//   console.log('count : ', count)
// })()

//
// import { User, Post, Category } from './models';
//
// (async () => {
//   await sequelize.sync({ force: true });
//
//   await User.create({
//     username: 'asdf',
//     password: '1234'
//   });
//   await Category.create({
//     title: 'sample'
//   });
//   await Post.create({
//     title: 'kkk',
//     content: 'akakak',
//     categoryId: 1,
//     userId: 1,
//   });
//   const post = await Post.findOne({
//     where: { title: 'kkk' },
//     include: [{
//       model: User,
//       attributes: [ 'id', 'username', 'password' ]
//     }]
//   })
//   console.log('post : ', post.content.toString())
// })()

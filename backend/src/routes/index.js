import { Router } from 'express';

import authRouter from './auth';
import categoryRouter from './category';
import postRouter from './post';
import commentRouter from './comment';
import visitRouter from './visit';

const router = Router();

router.use('/auth', authRouter);
router.use('/category', categoryRouter);
router.use('/post', postRouter);
router.use('/comment', commentRouter);
router.use('/visit', visitRouter);

router.get('/', (req, res) => {
  res.json('Hello World')
})

const notFoundHandler = (req, res, next) => {
  return res.status(404).json({
    success: false,
    message: 'Not found.'
  });
}

const errorHandler = (err, req, res, next) => {
  return res.status(500).json({
    success: false,
    message: 'Internal Server Error.',
  });
}

router.use(notFoundHandler);
router.use(errorHandler);

export default router;

import { Router } from 'express';

import { Post, Comment } from '../models';

const commentRouter = Router();
const LATEST_COMMENTS = 5;

commentRouter.get('/latest', async (req, res, next) => {
  try {
    const latestComments = await Comment.findAll({
      attributes: [ 'id', 'content' ],
      include: [{
        model: Post,
        attributes: [ 'id' ]
      }],
      order: [ ['createdAt', 'DESC'] ],
      limit: LATEST_COMMENTS,
    })
    return res.json({
      success: true,
      latestComments,
    })
  } catch (error) {
    console.log('Error from commentRouter [GET]/comment/latest', error);
    next(error);
  }
});

commentRouter.get('/', async (req, res, next) => {
  try {
    const { post } = req.query;
    if (post) {
      const comments = await Comment.findAll({
        where: { postId: post },
        attributes: {
          exclude: [ 'password', 'deletedAt' ]
        }
      });
      return res.json({
        success: true,
        comments,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: '포스트가 존재하지 않습니다.',
      });
    }
  } catch (error) {
    console.log('Error from commentRouter [GET]/comment/', error);
    next(error);
  }
});

commentRouter.post('/', async (req, res, next) => {
  try {
    const address = req.host == 'localhost' ? '127.0.0.1' : req.host;
    const { content, writer, password, post } = req.body;
    const validate = writer && password && post;
    if (validate) {
      await Comment.create({
        content,
        writer,
        password,
        address,
        postId: post,
      });
      return res.json({
        success: true,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Invalid Inputs.',
      })
    }
  } catch (error) {
    console.log('Error from commentRouter [POST]/comment/', error);
    next(error);
  }
});

commentRouter.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content, password } = req.body;
    const exComment = await Comment.findOne({ where: { id }});
    if (exComment) {
      if (password === exComment) {
        // 업데이트
        exComment.update({ content });
        return res.json({
          success: true,
        });
      } else {
        // 비밀번호 불일치
        return res.status(401).json({
          success: false,
          message: '비밀번호가 일치하지 않습니다.',
        });
      }
    } else {
      // 댓글 존재하지 않음
      return res.status(401).json({
        success: false,
        message: '댓글이 존재하지 않습니다.',
      });
    }
  } catch (error) {
    console.log('Error from commentRouter [PUT]/comment/', error);
    next(error);
  }
});

commentRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { password } = req.query;
    const exComment = await Comment.findOne({ where: { id }});

    if (exComment) {
      if (password == exComment.password) {
        // 삭제
        exComment.destroy();
        return res.json({
          success: true,
        });
      } else {
        // 비밀번호 불일치
        return res.status(401).json({
          success: false,
          message: '비밀번호가 일치하지 않습니다.',
        });
      }
    } else {
      // 댓글 존재하지 않음
      return res.status(401).json({
        success: false,
        message: '댓글이 존재하지 않습니다.',
      });
    }
  } catch (error) {
    console.log('Error from commentRouter [GET]/comment/', error);
    next(error);
  }
});

export default commentRouter;

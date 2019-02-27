import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import { authenticateByToken } from './middleware';
import { User } from '../models';

const authRouter = Router();

authRouter.post('/login', (req, res, next) => {

  passport.authenticate('local', (authError, authResult, info) => {
    if (authError) {
      return next(authError);
    } else {
      const { authenticated } = authResult;

      if (authenticated) {
        // 인증 성공
        const { accessToken  } = authResult;
        return res.json({
          success: true,
          accessToken,
        })
      } else {
        return res.status(401).json({
          success: false,
          message: '아이디나 비밀번호가 일치하지 않습니다.',
        });
      }
    }
  })(req, res, next)
})

authRouter.get('/verify', authenticateByToken, async (req, res, next) => {
  const { username } = req.user;
  try {
    const { TOKEN_SECRET, TOKEN_ISSUER, TOKEN_AUDIENCE } = process.env;
    const user = await User.findOne({
      where: { username },
      attributes: {
        exclude: [ 'password', 'updatedAt', 'deletedAt' ]
      },
    });
    const accessToken = await jwt.sign(
      { user },
      TOKEN_SECRET,
      {
        issuer: TOKEN_ISSUER,
        audience: TOKEN_AUDIENCE,
      });
    return res.json({
      success: true,
      accessToken,
      user,
    })
  } catch (error) {
    console.log('Error from authRouter [GET]/auth/verify', error);
    next(error);
  }
})

export default authRouter;

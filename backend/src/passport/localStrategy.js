import { Strategy } from 'passport-local';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models';

export default function (passport) {
  passport.use(new Strategy({
    usernameField: 'username',
    passwordField: 'password',
  }, async (id, pwd, done) => {
    try {
      const user = await User.findOne({ where: { username: id } });
      if (user) {
        //const result = await bcrypt.compare(pwd, user.password);
        const result = user.password == pwd ? true : false;
        if (result) {
          // A - 인증 성공
          const { TOKEN_SECRET, TOKEN_ISSUER, TOKEN_AUDIENCE } = process.env;
          // A - 토큰 생성
          const accessToken = await jwt.sign({ user }, TOKEN_SECRET, {
            issuer: TOKEN_ISSUER,
            audience: TOKEN_AUDIENCE,
          });

          // A - 인증 성공 및 토큰 전달
          done(null, {
            authenticated: true,
            accessToken,
          });
        } else {
          // B - 비밀번호 일치 X
          done(null, {
            authenticated: false,
            meesage: 'Password do not match.',
          });
        }

      } else {
        // C - 아이디 존재하지 않음
        done(null, {
          authenticated: false,
          meesage: 'User does not exist',
        });
      }
    } catch (error) {
      console.log('LocalStrategy Error', error);
      done(error);
    }
  }))
}

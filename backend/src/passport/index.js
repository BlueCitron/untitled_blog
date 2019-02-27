import local from './localStrategy';

export default (passport) => {

  //passport.serializeUser();
  //passport.deserializeUser();

  local(passport);
}

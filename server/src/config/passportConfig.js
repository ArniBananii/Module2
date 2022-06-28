import * as dotenv from "dotenv";
dotenv.config();
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import User from "../models/user.js";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
};

const jwtStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, done) {
  console.log("jwt_payload", jwt_payload);
  User.findById(jwt_payload.sub, function (err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

const passportConfig = (passport) => {
  passport.use(jwtStrategy);
};

export { passportConfig };

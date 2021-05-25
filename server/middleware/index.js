const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const config = require("config");
const AdminModel = require("../models/Admin-model");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get("secretKey"),
};

passport.use(
  new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const { id } = jwtPayload;
      const admin = await AdminModel.findById(id).select("_id");
      if (admin) {
        return done(null, admin);
      } else {
        return done(null, false);
      }
    } catch (e) {
      console.log(e);
    }
  })
);

const useAdminMiddleWare = () =>
  passport.authenticate("jwt", { session: false });

module.exports = {
  passport,
  useAdminMiddleWare,
};
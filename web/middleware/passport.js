/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const { ExtractJwt, Strategy } = require('passport-jwt');
const { User } = require('../models');
const CONFIG = require('../config/globals');
const {to} = require('../services/util.service');

module.exports = (passport) => {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = CONFIG.jwt_encryption;

    passport.use(new Strategy(opts, async (jwt_payload, done) => {
        let err, user;
        [err, user] = await to(User.findOne({
            where: { id: jwt_payload.user_id }
        }));

        if(err) return done(err, false);
        if(user) {
            return done(null, user);
        }else{
            return done(null, false);
        }
    }));
}

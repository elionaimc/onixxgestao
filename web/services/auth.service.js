/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Router module for outgo_test app
*/

const { User, Prefecture } 	    = require('../models');
const validator     = require('validator');
const { to, TE }    = require('../services/util.service');

const getUniqueKeyFromBody = (body) => {
    let unique_key = body.unique_key;
    if(typeof unique_key==='undefined'){
        if(typeof body.email != 'undefined'){
            unique_key = body.email
        }else if(typeof body.username != 'undefined'){
            unique_key = body.username
        }else{
            unique_key = null;
        }
    }

    return unique_key;
}
module.exports.getUniqueKeyFromBody = getUniqueKeyFromBody;

const createUser = async (userInfo) => {
    let unique_key, auth_info, err;

    auth_info={};
    auth_info.status='create';

    unique_key = getUniqueKeyFromBody(userInfo);
    if(!unique_key) TE('Não existe um e-mail ou nome de usuário válido!', 400);

    if(validator.isEmail(unique_key)){
        auth_info.method = 'email';
        userInfo.email = unique_key;

        [err, user] = await to(User.create(userInfo));
        if(err) TE('Não foi possível cadastrar novo usuário!');

        return user;

    } else {
        [err, user] = await to(User.findOne({where:{username: unique_key}})); 
        if(!user) {
        auth_info.method = 'username';
        userInfo.username = unique_key;

        [err, user] = await to(User.create(userInfo));
        if(err) TE('Não foi possível cadastrar novo usuário!');

        return user;
        } else {
        TE('O e-mail ou nome de usuário informados não podem ser utilizados');
        }
    }
}
module.exports.createUser = createUser;

const authUser = async (userInfo) => {
    let unique_key;
    let auth_info = {};
    auth_info.status = 'login';
    unique_key = getUniqueKeyFromBody(userInfo);

    if(!unique_key) TE('Informe um e-mail ou nome de usuário válido para fazer login');


    if(!userInfo.password) TE('Informe uma senha para login');

    let user;
    if(validator.isEmail(unique_key)){
        auth_info.method='email';

        //[err, user] = await to(User.findOne({where:{email:unique_key, status: 'ativo'}}));
        [err, user] = await to(User.findOne({
            attributes: ['name', 'password', 'email', 'status', 'role', 'id', 'PrefectureId'],
            where: { email: unique_key, isActive: true },
            include: [{ model: Prefecture, attributes: ["name", "image"] }]
        }));
        if(err) TE(err.message);

    } else {
        auth_info.method = 'username';
        
        //[err, user] = await to(User.findOne({ where: { username: unique_key, status: 'ativo'}}));
        [err, user] = await to(User.findOne({
            attributes: ['name', 'password', 'email', 'status', 'role', 'id', 'PrefectureId'],
            where: { username: unique_key, isActive: true },
            include: [{ model: Prefecture, attributes: ["name", "image"] }]
        }));
        if(err) TE('O e-mail ou nome de usuário informados não funcionou');
    }

    if(!user) TE('O e-mail ou nome de usuário informados não funcionou');

    [err, user] = await to(user.comparePassword(userInfo.password));
    if(err) {
        TE(err.message);
    } else {
        user.set({password: '_FNORD'});
        return user;
    }


}
module.exports.authUser = authUser;

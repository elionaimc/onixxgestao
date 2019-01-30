/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Router module for outgo_test app
*/

const { User } 	    = require('../models');
const validator     = require('validator');
const { to, TE }    = require('../services/util.service');

// This is so they can send in 3 options unique_key, email, or phone and it will work
// We SHOULD CHANGE to work only with username and password
const getUniqueKeyFromBody = function(body){
    let unique_key = body.unique_key;
    if(typeof unique_key==='undefined'){
        if(typeof body.email != 'undefined'){
            unique_key = body.email
        }else if(typeof body.phone != 'undefined'){
            unique_key = body.phone
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
    if(!unique_key) TE('Informe um número de telefone ou e-mail.');

    if(validator.isEmail(unique_key)){
        auth_info.method = 'email';
        userInfo.email = unique_key;

        [err, user] = await to(User.create(userInfo));
        if(err) TE('Já existe um usuário cadastrado com este e-mail');

        return user;

    }else if(validator.isMobilePhone(unique_key, 'any')){//checks if only phone number was sent
        auth_info.method = 'phone';
        userInfo.phone = unique_key;

        [err, user] = await to(User.create(userInfo));
        if(err) TE('Já existe um usuário cadastrado com este telefone');

        return user;
    }else{
        TE('Informe um numero de telefone ou um e-mail válido.');
    }
}
module.exports.createUser = createUser;

const authUser = async function(userInfo){//returns token
    let unique_key;
    let auth_info = {};
    auth_info.status = 'login';
    unique_key = getUniqueKeyFromBody(userInfo);

    if(!unique_key) TE('Informe um e-mail ou telefone válido para fazer login');


    if(!userInfo.password) TE('Informe uma senha para login');

    let user;
    if(validator.isEmail(unique_key)){
        auth_info.method='email';

        [err, user] = await to(User.findOne({where:{email:unique_key}}));
        if(err) TE(err.message);

    }else if(validator.isMobilePhone(unique_key, 'any')){//checks if only phone number was sent
        auth_info.method='phone';

        [err, user] = await to(User.findOne({where:{phone:unique_key }}));
        if(err) TE(err.message);

    }else{
        TE('Um número de telefone ou e-mail válido não foi informado');
    }

    if(!user) TE('Usuário não identificado');

    [err, user] = await to(user.comparePassword(userInfo.password));
    if(err) TE(err.message);

    return user;

}
module.exports.authUser = authUser;

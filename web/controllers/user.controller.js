/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Router module for outgo_test app
*/
const { User } = require('../models');
const authService = require('../services/auth.service');
const { to, ReE, ReS } = require('../services/util.service');

const create = async function(req, res){
    const body = req.body;
    if(!body.unique_key && !body.email && !body.phone){
        return ReE(res, 'Por favor, informe um e-mail ou número de telefone para cadastro.');
    } else if(!body.password){
        return ReE(res, 'Insira corretamente uma senha para cadastro.');
    }else{
        let err, user;
        [err, user] = await to(authService.createUser(body));

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Novo usuário cadastrado com sucesso.', user:user.toWeb(), token:user.getJWT()}, 201);
    }
}
module.exports.create = create;

const get = async function(req, res){
    let user = req.user || null;

    return ReS(res, {user:user.toWeb()});
}
module.exports.get = get;

const getAll = async function(req, res){
    let err, users;
    let usersjson = [];

    [err, users] = await to(User.findAll());
    if(err) return ReE(res, err, 204);
    if(!users.length) return ReE(res, 204);
    
    for (let i in users){
        user = users[i];
        usersjson.push(user.toWeb());
    }
    ReS(res, {users:usersjson}, 200);
}
module.exports.getAll = getAll;

const update = async function(req, res){
    let err, user, data
    user = req.user;
    data = req.body;
    user.set(data);

    [err, user] = await to(user.save());
    if(err){
        if(err.message=='Erro de validação') err = 'Este e-mail ou número de telefone já existe em nossa base de dados.';
        return ReE(res, err);
    }
    return ReS(res, {message :'Atualizar usuário: '+user.email});
}
module.exports.update = update;

const remove = async function(req, res){
    let user, err;
    user = req.user;
    [err, user] = await to(user.destroy());
    if(err) return ReE(res, 'Ocorreu um erro ao tentar excluir um usuário');

    return ReS(res, {message:'Usuário apagado com sucesso.'}, 204);
}
module.exports.remove = remove;

//Using JWT e Authentication services to best connected experience
const login = async function(req, res){
    const body = req.body;
    let err, user;
    [err, user] = await to(authService.authUser(req.body));
    if(err) return ReE(res, err, 422);

    return ReS(res, {token:user.getJWT(), user:user.toWeb()});
}
module.exports.login = login;

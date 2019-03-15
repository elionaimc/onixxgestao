/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description
*/
const { User } = require('../models');
const authService = require('../services/auth.service');
const { to, ReE, ReS } = require('../services/util.service');
const Prefecture = require('../models/prefecture.model');

const create = async (req, res) => {
    const body = req.body;
    if(!body.unique_key && !body.email && !body.username){
        return ReE(res, 'Por favor, informe um e-mail ou nome de usuário para cadastro.', 400);
    } else if(!body.password){
        return ReE(res, 'Insira corretamente uma senha para cadastro.');
    }else{
        body.prefecture = Prefecture;
        let err, user;
        [err, user] = await to(authService.createUser(body));

        if(err) return ReE(res, err, 409);
        return ReS(res, {message:'Novo usuário cadastrado com sucesso.', user:user.toJSON(), token:user.getJWT()}, 201);
    }
}
module.exports.create = create;

const get = async (req, res) => {
    let uid = req.params.user_id;
    
    [err, user] = await to(User.findOne({where:{id:uid}}));
    if(err) TE(err.message);
    
    if(!user) return ReE(res, 'Reajuste os parâmetros e tente novamente', 202);
    user.password = undefined;
    return ReS(res, {user: user});
}
module.exports.get = get;


const getAll = async (req, res) => {
    [err, users] = await to(User.findAll());
    if(err) return TE(err.message);

    for (user of users) user.password = undefined;
    return ReS(res, {users: users});
}
module.exports.getAll = getAll;

const update = async (req, res) => {
    let err, user, data
    user = req.user;
    data = req.body;
    user.set(data);

    [err, user] = await to(user.save());
    if(err){
        if(err.message=='Erro de validação') err = 'Este e-mail ou nome de usuário já existe em nossa base de dados.';
        return ReE(res, err);
    }
    return ReS(res, {message :'Atualizar usuário: '+user.email});
}
module.exports.update = update;

const remove = async (req, res) => {
    let user, err;
    user = req.user;
    [err, user] = await to(user.destroy());
    if(err) return ReE(res, 'Ocorreu um erro ao tentar excluir um usuário');

    return ReS(res, {message:'Usuário apagado com sucesso.'}, 204);
}
module.exports.remove = remove;

//Using JWT e Authentication services to best connected experience
const login = async (req, res) => {
    const body = req.body;
    let err, user;
    [err, user] = await to(authService.authUser(req.body));
    if(err) return ReE(res, err, 422);

    user.token = user.getJWT();

    return res.json(user);
}
module.exports.login = login;

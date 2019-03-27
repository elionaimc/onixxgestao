/*
* @author Elionai Moura Cordeiro
* @version @version 1.2.0
* @description Controller for User entities
*/

const { User } = require('../models');
const authService = require('../services/auth.service');
const { to, ReE, ReS } = require('../services/util.service');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

//Creates a user
const create = async (req, res) => {
    const data = req.body;
    if(!data.unique_key && !data.email && !data.username){
        return ReE(res, 'Por favor, informe um e-mail ou nome de usuário para cadastro.', 400);
    } else if(!data.password || data.password == '_FNORD'){
        return ReE(res, 'Insira corretamente uma senha para cadastro.');
    }else{
        let err, user;
        [err, user] = await to(authService.createUser(data));

        if(err) return ReE(res, err, 409);
        return ReS(res, {message:'Novo usuário cadastrado com sucesso.', user:user.toJSON(), token:user.getJWT()}, 201);
    }
}
module.exports.create = create;

//Reads one user
const get = async (req, res) => {
    let uid = req.params.user_id;
    
    [err, user] = await to(User.findOne({where:{id:uid}}));
    if(err) TE(err.message);
    
    if(!user) return ReE(res, 'Reajuste os parâmetros e tente novamente', 202);
    user.password = undefined;
    return ReS(res, {user: user});
}
module.exports.get = get;

//Reads all users
const getAll = async (req, res) => {
    const u = req.user;
    [err, users] = await to(User.findAll({
        where: {
            PrefectureId: u.PrefectureId,
            id: { [Op.not]: u.id }
        },
        order: [['name', 'ASC']]
    }));
    if(err) return TE(err.message);

    for (user of users) user.password = undefined;
    return ReS(res, {users: users});
}
module.exports.getAll = getAll;

//Updates an user
const update = async (req, res) => {
    let err, user
    console.log(req.body);
    user = req.u;
    data = req.body;
    user.set(req.body);

    [err, user] = await to(user.save());
    if(err){
        if(err.message=='validation error') err = 'Este e-mail ou nome de usuário já existe em nossa base de dados.';
        return ReE(res, err);
    }
    return ReS(res, {message :'Atualizar usuário: '+user.email});
}
module.exports.update = update;

//Deletes an user
const remove = async (req, res) => {
    let user, err;
    user = req.user;
    [err, user] = await to(user.destroy());
    if(err) return ReE(res, 'Ocorreu um erro ao tentar excluir um usuário');

    return ReS(res, {message:'Usuário apagado com sucesso.'}, 204);
}
module.exports.remove = remove;

//Using JWT + authentication service to best connected experience
const login = async (req, res) => {
    const body = req.body;
    let err, user;
    [err, user] = await to(authService.authUser(req.body));
    if(err) return ReE(res, err, 422);

    user.getPrefecture().then(
        prefecture => {
            if (!prefecture.isActive) {
                return ReE(res, 'O e-mail ou senha não funcionou. Tente novamente.', 422);
            } else {
                user.token = user.getJWT();

                return res.json(user);
            }
        }
    );

    // return res.json(
    //     {
    //         "name": "Gestor Teste",
    //         "password": "_FNORD",
    //         "email": "gestor@gmail.com",
    //         "status": "ativo",
    //         "role": "gestor",
    //         "id": 2,
    //         "PrefectureId": 2,
    //         "Prefecture": {
    //             "name": "Prefeitura de Bom Jesus",
    //             "image": "bomjesusrn.png"
    //         },
    //         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE1NTM2Mzg0MTYsImV4cCI6MTU1MzY0ODQxNn0.Ik1jm1U695Wm6X-CTnakH7KyOI4-jydSowukmwOxZdA"
    //     }
    // );

    
}
module.exports.login = login;

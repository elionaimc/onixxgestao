/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description
*/

//Actions for Provider entity
const { Provider } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

//Creates a provider
const create = async (req, res) => {
    let err, provider;
    //get data from request object
    let provider_info = req.body;
    //Assynchronous function
    [err, provider] = await to(Provider.create(provider_info));
    if (err) return ReE(res, err, 422);

    [err, provider] = await to(provider.save());
    if (err) return ReE(res, err, 422);
    let provider_json = provider.toJSON();
    return ReS(res, { provider: provider_json }, 201);
}
module.exports.create = create;

//Read all provider
const getAll = async (req, res) => {
    let user = req.user;
    let err, providers;

    let clause = req.query.status ? { PrefectureId: user.PrefectureId, isActive: true, status: req.query.status } : { PrefectureId: user.PrefectureId, isActive: true };

    [err, providers] = await to(Provider.findAll({ where: clause }));
    if (err) TE(err.message);

    return ReS(res, { providers: providers });
}
module.exports.getAll = getAll;

const get = (req, res) => {
    let provider = req.provider;
    return ReS(res, { provider: provider.toJSON() });
}
module.exports.get = get;

//Updates a provider
const update = async (req, res) => {
    let err, provider, data;
    provider = req.provider;
    provider.set(data);

    [err, provider] = await to(provider.save());
    if (err) {
        return ReE(res, err);
    }
    return ReS(res, { provider: provider.toJSON() });
}
module.exports.update = update;

//Deletes a provider
const remove = async (req, res) => {
    let provider, err;
    provider = req.provider;

    [err, provider] = await to(provider.destroy());
    if (err) return ReE(res, 'ocorreu um erro enquanto tentava excluir o fornecedor.');

    return ReS(res, { message: 'Fornecedor apagada.' }, 204);
}
module.exports.remove = remove;

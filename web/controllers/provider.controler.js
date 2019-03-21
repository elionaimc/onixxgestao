/*
* @author Elionai Moura Cordeiro
* @version 1.2.0
* @description Controller for Provider entities
*/

const { Provider } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

//Creates a provider
const create = async (req, res) => {
    let err, provider;
    let provider_info = req.body;
    [err, provider] = await to(Provider.create(provider_info));
    if (err) return ReE(res, err, 422);

    [err, provider] = await to(provider.save());
    if (err) return ReE(res, err, 422);
    let provider_json = provider.toJSON();
    return ReS(res, { provider: provider_json }, 201);
}
module.exports.create = create;

//Reads all providers
const getAll = async (req, res) => {
    const user = req.user;
    let err, providers;
    [err, providers] = await to(Provider.findAll({
        where: { PrefectureId: user.PrefectureId },
        order: [['socialName', 'ASC']]
    }));
    if (err) TE(err.message);
    if (providers.length < 1) return ReE(res, 'Não existem fornecedores cadastrados ainda', 200);

    return ReS(res, { providers: providers });
}
module.exports.getAll = getAll;

//Reads one provider
const get = (req, res) => {
    let provider = req.provider;
    return ReS(res, { provider: provider.toJSON() });
}
module.exports.get = get;

//Updates a provider
const update = async (req, res) => {
    let err, provider;
    provider = req.provider;
    provider.set(req.body);

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
    if (err) return ReE(res, 'Ocorreu um erro enquanto tentava excluir o fornecedor.');

    return ReS(res, { message: 'Fornecedor apagado com sucesso.' }, 204);
}
module.exports.remove = remove;

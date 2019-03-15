/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description
*/

//Actions for Category entity
const { Category } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

//Creates a category
const create = async (req, res) => {
    let err, category;
    //get data from request object
    let category_info = req.body;
    //Assynchronous function
    [err, category] = await to(Category.create(category_info));
    if (err) return ReE(res, err, 422);

    [err, category] = await to(category.save());
    if (err) return ReE(res, err, 422);
    let category_json = category.toJSON();
    return ReS(res, { category: category_json }, 201);
}
module.exports.create = create;

//Read all category
const getAll = async (req, res) => {
    let user = req.user;
    let err, categorys;

    let clause = req.query.status ? { PrefectureId: user.PrefectureId, isActive: true, status: req.query.status } : { PrefectureId: user.PrefectureId, isActive: true };

    [err, categorys] = await to(Category.findAll({ where: clause }));
    if (err) TE(err.message);

    return ReS(res, { categorys: categorys });
}
module.exports.getAll = getAll;

const get = (req, res) => {
    let category = req.category;
    return ReS(res, { category: category.toJSON() });
}
module.exports.get = get;

//Updates a category
const update = async (req, res) => {
    let err, category, data;
    category = req.category;
    category.set(data);

    [err, category] = await to(category.save());
    if (err) {
        return ReE(res, err);
    }
    return ReS(res, { category: category.toJSON() });
}
module.exports.update = update;

//Deletes a category
const remove = async (req, res) => {
    let category, err;
    category = req.category;

    [err, category] = await to(category.destroy());
    if (err) return ReE(res, 'ocorreu um erro enquanto tentava excluir a categoria.');

    return ReS(res, { message: 'Categoria apagada.' }, 204);
}
module.exports.remove = remove;

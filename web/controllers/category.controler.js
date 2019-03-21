/*
* @author Elionai Moura Cordeiro
* @version 1.2.0
* @description Controller for Category entities
*/

const { Category } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

//Creates a category
const create = async (req, res) => {
    let err, category;
    let category_info = req.body;
    [err, category] = await to(Category.create(category_info));
    if (err) return ReE(res, err, 422);

    [err, category] = await to(category.save());
    if (err) return ReE(res, err, 422);
    let category_json = category.toJSON();
    return ReS(res, { category: category_json }, 201);
}
module.exports.create = create;

//Reads all categories
const getAll = async (req, res) => {
    let user = req.user;
    let err, categories;

    let clause = req.query.status ? { PrefectureId: user.PrefectureId, status: req.query.status } : { PrefectureId: user.PrefectureId };

    [err, categories] = await to(Category.findAll({
        where: clause,
        order: [['description', 'ASC']]
    }));
    if (err) TE(err.message);

    return ReS(res, { categories: categories });
}
module.exports.getAll = getAll;

//Reads one category
const get = (req, res) => {
    let category = req.category;
    return ReS(res, { category: category.toJSON() });
}
module.exports.get = get;

//Updates a category
const update = async (req, res) => {
    let err, category;
    category = req.category;
    category.set(req.body);

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
    if (err) return ReE(res, 'Ocorreu um erro enquanto tentava excluir a categoria.');

    return ReS(res, { message: 'Categoria apagada.' }, 204);
}
module.exports.remove = remove;

/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/

const { Category, Expense, Provider, User } = require('../models');
const { to, ReE } = require('../services/util.service');

let expense = async (req, res, next) => {
    let expense_id, err, expense;
    expense_id = req.params.expense_id;
    [err, expense] = await to(Expense.findOne({ where: { id: expense_id }, include: [{model:Provider, attributes: ["name", "cnpj"]}, {model: Category, attributes: ["description"]}, {model: User, attributes: ["name"]}]}));
    if(err) return ReE(res, "Erro ao buscar uma despesa");

    if(!expense) return ReE(res, "Despesa não encontrada com o identificador: "+expense_id);
    req.expense = expense;
    next();
}
module.exports.expense = expense;

let provider = async (req, res, next) => {
    let provider_id, err, provider;
    provider_id = req.params.provider_id;
    [err, provider] = await to(Provider.findOne({ where: { id: provider_id }, include: [{ model: User, attributes: ["name"] }] }));
    if (err) return ReE(res, "Erro ao buscar um fornecedor");

    if (!provider) return ReE(res, "Fornecedor não encontrado com o identificador: " + provider_id);
    req.provider = provider;
    next();
}
module.exports.provider = provider;

let category = async (req, res, next) => {
    let category_id, err, category;
    category_id = req.params.category_id;
    [err, category] = await to(Category.findOne({ where: { id: category_id }, include: [{ model: User, attributes: ["name"] }] }));
    if (err) return ReE(res, "Erro ao buscar uma categoria");

    if (!category) return ReE(res, "Categoria não encontrada com o identificador: " + category_id);
    req.category = category;
    next();
}
module.exports.category = category;

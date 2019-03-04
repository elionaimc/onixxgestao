/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/

const { Category, Expense, Provider } = require('../models');
const { to, ReE } = require('../services/util.service');

let expense = async (req, res, next) => {
    let expense_id, err, expense;
    expense_id = req.params.expense_id;
    [err, expense] = await to(Expense.findOne({ where: { id: expense_id }, include: [{model:Provider, attributes: ["name", "cnpj"]}, {model: Category, attributes: ["description"]}]}));
    if(err) return ReE(res, "erro ao buscar uma despesa");

    if(!expense) return ReE(res, "despesa não encontrada com o identificador: "+expense_id);
    
    req.expense = expense;
    next();
}
module.exports.expense = expense;

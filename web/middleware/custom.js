/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/

const Expense = require('./../models').Expense;
const { to, ReE } = require('../services/util.service');

let expense = async (req, res, next) => {
    let expense_id, err, expense;
    expense_id = req.params.expense_id;
    [err, expense] = await to(Expense.findOne({where:{id:expense_id}}));
    if(err) return ReE(res, "erro ao buscar uma despesa");

    if(!expense) return ReE(res, "despesa não encontrada com o identificador: "+expense_id);
    
    req.expense = expense;
    next();
}
module.exports.expense = expense;

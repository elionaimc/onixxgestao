/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/

const Company 			    = require('./../models').Expense;
const { to, ReE, ReS } = require('../services/util.service');

let expense = async function (req, res, next) {
    let expense_id, err, expense;
    expense_id = req.params.expense_id;

    [err, expense] = await to(Expense.findOne({where:{id:expense_id}}));
    if(err) return ReE(res, "err finding expense");

    if(!expense) return ReE(res, "expense not found with id: "+expense_id);
    let user, users_array, users;
    user = req.user;
    [err, users] = await to(expense.getUsers());

    users_array = users.map(obj=>String(obj.user));

    if(!users_array.includes(String(user._id))) return ReE(res, "User does not have permission to read app with id: "+app_id);

    req.expense = expense;
    next();
}
module.exports.expense = expense;

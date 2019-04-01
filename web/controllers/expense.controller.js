/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description
*/

//Actions for Expense entity
const { Expense, Provider, Category, User } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');
const { generateHash } = require('random-hash');

//Creates a expense
const create = async (req, res) => {
    let err, expense;
    let expense_info = req.body;
    [err, expense] = await to(Expense.create(expense_info));
    if(err) return ReE(res, err, 422);

    [err, expense] = await to(expense.save());
    if(err) return ReE(res, err, 422);
    let expense_json = expense.toJSON();
    return ReS(res, {expense:expense_json}, 201);
}
module.exports.create = create;

//Read all expense
const getAll = async (req, res) => {
    let user = req.user;
    let err, expenses;
    let results = [];
    
    let clause = req.query.status? { PrefectureId: user.PrefectureId, isActive: true, status: req.query.status } : { PrefectureId: user.PrefectureId, isActive: true };

    [err, expenses] = await to(Expense.findAll({
        where: clause, 
        include: [
            { model: Provider, attributes: ["socialName", "cnpj"] },
            { model: Category, attributes: ["description"] },
            { model: User, attributes: ["name"] }
        ],
        order: [['updatedAt', 'DESC']]  }));
    if (err) TE(err.message);

    return ReS(res, { expenses: expenses });
}
module.exports.getAll = getAll;

const get = (req, res) => {
    let expense = req.expense;
    if (expense.authorized_value === null) {
        expense.set({
            authorized_value: expense.requested_value
        })
    }
    return ReS(res, {expense:expense.toJSON()});
}
module.exports.get = get;

//Updates a expense
const update = async (req, res) => {
    let err, expense;
    expense = req.expense;
    expense.set(req.body);
    if (req.body.status === 'autorizada') {
        const data={};
        data.authorizationCode = generateHash({ length: 8 });
        expense.set(data);
    }

    [err, expense] = await to(expense.save());
    if (err) {
        return ReE(res, err);
    }
    return ReS(res, { expense: expense.toJSON() });
}
module.exports.update = update;

//Updates a expense for authorization
const authorize = async (req, res) => {
    let err, expense, data;
    if (req.body.status === 'autorizada') {
        data.authorizationCode = req.user.id + date + '_' + date * req.body.authorized_value;
    }
    expense = req.expense;
    expense.set(data);

    [err, expense] = await to(expense.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {expense:expense.toJSON()});
}
module.exports.authorize = authorize;

//Deletes a expense
const remove = async (req, res) => {
    let expense, err;
    expense = req.expense;

    [err, expense] = await to(expense.destroy());
    if(err) return ReE(res, 'ocorreu um erro enquanto tentava excluir a despesa.');

    return ReS(res, {message:'Despesa apagada.'}, 204);
}
module.exports.remove = remove;

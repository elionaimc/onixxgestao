/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description
*/

//Actions for Expense entity
const { Expense, Provider } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

//Creates a expense
const create = async (req, res) => {
    let err, expense;
    //get data from request object
    let expense_info = req.body;
    //Assynchronous function
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
    
    let clause = req.query.status? { PrefectureId: user.PrefectureId, isActive: true, status: req.query.status } : { PrefectureId: user.PrefectureId, isActive: true };

    [err, expenses] = await to( Expense.findAll({ where: clause, include: [Provider] }));
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
    let err, expense, data;
    if (req.body.status === 'autorizada') {
        data = req.body;
        let date = Date.now();
        data.authorized_by = req.user.id;
        data.authorization_date = date;
        data.authorization_code = req.user.id + date + '_' + date * req.body.authorized_value;
    } else if (req.body.status === 'recusada') {
        data = {
            status: 'recusada',
            authorized_by: req.user.id
        };
    }
    expense = req.expense;
    expense.set(data);

    [err, expense] = await to(expense.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {expense:expense.toJSON()});
}
module.exports.update = update;

//Deletes a expense
const remove = async (req, res) => {
    let expense, err;
    expense = req.expense;

    [err, expense] = await to(expense.destroy());
    if(err) return ReE(res, 'ocorreu um erro enquanto tentava excluir a despesa.');

    return ReS(res, {message:'Despesa apagada.'}, 204);
}
module.exports.remove = remove;

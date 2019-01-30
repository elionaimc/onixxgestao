/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Router module for outgo_test app
*/

//Actions for Expense entity
const { Expense } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

//Creates a expense
const create = async function(req, res){
    let err, expense;
    //get data from request object
    let user = req.user;
    let expense_info = req.body;
    //Assynchronous function
    [err, expense] = await to(Expense.create(expense_info));
    if(err) return ReE(res, err, 422);
    expense.addUser(user, { through: { status: 'ativo' }})

    [err, expense] = await to(expense.save());
    if(err) return ReE(res, err, 422);
    let expense_json = expense.toWeb();
    expense_json.users = [{user:user.id}];
    //An Expense object, in json format
    return ReS(res, {expense:expense_json}, 201);
}
module.exports.create = create;

//Read a expense
const getAll = async function(req, res){
    let user = req.user;
    let err, expenses;

    [err, expenses] = await to(user.getExpenses({include: [ {association: Expense.Users} ] }));

    let expenses_json =[]
    for( let i in expenses){
        let expense = expenses[i];
        let users =  expense.Users;
        let expense_info = expense.toWeb();
        let users_info = [];
        for (let i in users){
            let user = users[i];
            users_info.push({user:user.id});
        }
        expense_info.users = users_info;
        expense_json.push(expense_info);
    }

    console.log('c t', expenses_json);
    return ReS(res, {expenses:expenses_json});
}
module.exports.getAll = getAll;

const get = function(req, res){
    let expense = req.expense;

    return ReS(res, {expense:expense.toWeb()});
}
module.exports.get = get;

//Updates a expense
const update = async function(req, res){
    let err, expense, data;
    expense = req.expense;
    data = req.body;
    expense.set(data);

    [err, expense] = await to(expense.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {expense:expense.toWeb()});
}
module.exports.update = update;

//Deletes a expense
const remove = async function(req, res){
    let expense, err;
    expense = req.expense;

    [err, expense] = await to(expense.destroy());
    if(err) return ReE(res, 'ocorreu um erro enquanto tentava excluir a despesa.');

    return ReS(res, {message:'Despesa apagada.'}, 204);
}
module.exports.remove = remove;

/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description
*/

//Actions for Expense entity
const { Expense, Provider, Category, User } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');
const { generateHash } = require('random-hash');
const fs = require('fs');
const pdf = require('html-pdf');
let flag = true;

//Creates a expense
const create = async (req, res) => {
    let user = req.user;
    let err, expense;
    let expense_info = req.body;
    [err, expense] = await to(Expense.create(expense_info));
    if(err) return ReE(res, err, 422);

    [err, expense] = await to(expense.save());
    if(err) return ReE(res, err, 422);
    let expense_json = expense.toJSON();

    // messaging while creating
    var admin = require("firebase-admin");
    var serviceAccount = require("../onixx-gestor-6f0b9-firebase-adminsdk-y01pp-8b3a3eb5b2.json");
    var registrationToken = "c4wnuVt-mpA:APA91bHLeu06hZIQQ8ZQcDDoSjDl2YsAvHsDsBTfQsHTHSLzZoG-4flq_nDDUGAebYQCnLSGsAJs2mP5K2OytvM_3Xkc_a02KW5q_xpS5VCXQSxcwbtxIvvWoozo_lt99BgX6haus2h-";
    
    const config = {
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://onixx-gestor-6f0b9.firebaseio.com"
    };
    !admin.apps.length ? admin.initializeApp(config) : admin.app();

    var payload = {
        notification: {
            title: "Nova despesa criada",
            body: "Despesa criada com sucesso: " + expense_json.id
        }
    };

    var options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    };

    [err, users] = await to(User.findAll({ where: { PrefectureId: user.PrefectureId } }));

   if (users) {
       for (user of users) {
           if (user.smarttoken) {
               admin.messaging().sendToDevice(user.smarttoken, payload, options)
                   .then(function (response) {
                       console.log("Successfully sent message:", response);
                   })
                   .catch(function (error) {
                       console.log("Error sending message:", error);
                   });
           }
       }
   }
        //#end of messaging

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
        var file = __dirname + '/../files/private/' + data.authorizationCode + ".pdf";
        let head = `
    <head>
      <title>Comprovante de autorização - ONIXX GESTOR</title>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <link rel="stylesheet" href="file:///${__dirname}/../files/public/assets/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>`;

        let htmlBody = `${head} <div class="container"><div clas="row cols"><div class="col-xs-12">`;
        htmlBody += `<div class="text-center panel" style="background-color: #007BFF !important;"><img src="file:///${__dirname}/../files/public/assets/img/bomjesusrn.png" title="Prefeitura" alt="logo da prefeitura" /></div>`;
        htmlBody += `<h3 class="text-center" style="font-weight:bold !important;">Comprovante de autorização de despesa</h3>`;

        htmlBody += `<div class="container">
        <p style="font-weight:bold !important;">Despesa #${expense.id} <br/>Categoria: ${expense.Category.description}`;
        htmlBody += `<br/>Fornecedor(a): ${expense.Provider.socialName} <br/>CNPJ: ${expense.Provider.cnpj.substring(0, 2)}.${expense.Provider.cnpj.substring(2, 5)}.${expense.Provider.cnpj.substring(5, 8)}/${expense.Provider.cnpj.substring(8, 12)}-${expense.Provider.cnpj.substring(12, 14)}</p>`;
        htmlBody += `<p>Descrição:
        <br/>${expense.description}</p>
        <p style="font-weight:bold !important;">Valor autorizado: R$ ${req.body.real}</p>`;

        htmlBody += `<div class="text-center" style="padding-top:15px;margin-top: 50px;border-top: 1px solid #007BFF !important;"><small>Autorização emitida em: ${expense.decisionDate.substring(8, 10)}/${expense.decisionDate.substring(5, 7)}/${expense.decisionDate.substring(0, 4)}</small></div>`;
        htmlBody += `<div class="text-center"><small>Para assegurar que esta despesa permanece autorizada, <br/>acesse http://onixxgestor.com.br e informe o seguinte código: ${expense.authorizationCode}<small></div></div></div></div>`;
        let htmlOptions = {
            format: 'A4',
            border: '1cm'
        }

        pdf.create(htmlBody, htmlOptions)
            .toFile(file, (error, success) => {
                if (error)
                    return ReE(res, err);
            });
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

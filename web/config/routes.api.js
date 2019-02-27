/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const express = require('express');
const passport = require('passport');
const path = require('path');

const router = express.Router();

const UserController = require('../controllers/user.controller');
const ExpenseController = require('../controllers/expense.controller');
const HomeController = require('../controllers/home.controller');

const custom = require('./../middleware/custom');

const { ReE, ReS } = require('../services/util.service');
require('./../middleware/passport')(passport)
const concierge = passport.authenticate('jwt', {session:false});
/* GET home page. */
router.get('/', (req, res, next) => ReS(res, {message: '_FNORD » OnixxAPI is up and running!'}));

//Users routes
router.post('/users', concierge, UserController.create); //creates a user based on properties sent via POST
router.put( '/users', concierge, UserController.update);
router.delete( '/users', concierge, UserController.remove);
router.get('/users', concierge, UserController.getAll);
router.get('/users/:user_id', concierge, UserController.get);

router.post( '/login', UserController.login);

//Expenses routes
router.post( '/expenses', concierge, ExpenseController.create);
router.get ('/expenses', concierge, ExpenseController.getAll);
router.get( '/expenses/:expense_id', concierge, custom.expense, ExpenseController.get);
router.put( '/expenses/:expense_id', concierge, custom.expense, ExpenseController.update);
router.delete( '/expenses/:expense_id', concierge, custom.expense, ExpenseController.remove);

//Dashboard routes
router.get('/home', concierge, HomeController.dashboard)

//private statics files trough api
router.use('/', express.static(path.join(__dirname, '/../files/private/')));

//Tim, the Gate Guard bring a 404 error
router.get('*', (req, res) => ReE(res, '_FNORD » Boy, when you pick a lost cause, you really commit. Where do they make dreamers like you? Get lost, freak!', 404));

module.exports = router;

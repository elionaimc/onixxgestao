/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const express 			    = require('express');
const router 			      = express.Router();

const UserController 	  = require('../controllers/user.controller');
const ExpenseController = require('../controllers/expense.controller');
const HomeController 	  = require('../controllers/home.controller');

const custom 	          = require('./../middleware/custom');
const passport      	  = require('passport');
const path              = require('path');


require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', (req, res, next) => res.json(
  { message: '_FNORD » OnixxAPI is up and running!' }
));

router.post(    '/users', UserController.create);
router.get(     '/users', passport.authenticate('jwt', {session:false}), UserController.get);
router.put(     '/users', passport.authenticate('jwt', {session:false}), UserController.update);
router.delete(  '/users', passport.authenticate('jwt', {session:false}), UserController.remove);
router.post(    '/users/login', UserController.login);

router.post(    '/expenses', passport.authenticate('jwt', {session:false}), ExpenseController.create);
router.get(     '/expenses', passport.authenticate('jwt', {session:false}), ExpenseController.getAll);

router.get(     '/expenses/:expense_id', passport.authenticate('jwt', {session:false}), custom.expense, ExpenseController.get);
router.put(     '/expenses/:expense_id', passport.authenticate('jwt', {session:false}), custom.expense, ExpenseController.update);
router.delete(  '/expenses/:expense_id', passport.authenticate('jwt', {session:false}), custom.expense, ExpenseController.remove);

router.get('/dash', passport.authenticate('jwt', {session:false}),HomeController.Dashboard)

//********* API DOCUMENTATION **********
router.use('/docs/api.json', express.static(path.join(__dirname, '/../public/v1/documentation/api.json')));
router.use('/docs', express.static(path.join(__dirname, '/../public/v1/documentation/dist')));

// Any other GET request will fall here
router.get('*', function (req, res, next) {
  res.statusCode = 404;
  res.json({message: "_FNORD » It is a ∑ꞦꞦꝊꝶ <404> message::" })
});

module.exports = router;

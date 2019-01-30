/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');
const ExpenseController = require('../controllers/expense.controller');
const HomeController = require('../controllers/home.controller');

const custom = require('./../middleware/custom');
const passport = require('passport');
const path = require('path');


require('./../middleware/passport')(passport)

router.get('/', express.static(path.join(__dirname + '../views/index.html')));

//public files from root address
router.use('/', express.static(path.join(__dirname, '/../public/')));
router.get('/login', express.static(path.join(__dirname + '../views/index.html')));

module.exports = router;

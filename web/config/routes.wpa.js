/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Routing the web client behavior
*/
const express = require('express');
const router = express.Router();

const passport = require('passport');
const path = require('path');

require('./../middleware/passport')(passport)

/* GET home page. */
router.get('/', express.static(path.join(__dirname, '/../files/public/index.html')));

//public files from root address
router.use('/', express.static(path.join(__dirname, '/../files/public')));

router.get('/login', (req, res, next) => res.json(
    { message: '_FNORD » Login page!' }
  ));

module.exports = router;

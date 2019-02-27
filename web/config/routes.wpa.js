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

//public files from root address
router.use('/', express.static(path.join(__dirname, '/../files/public')));

/* GET home page. */
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../files/public/index.html'));
  });

module.exports = router;
